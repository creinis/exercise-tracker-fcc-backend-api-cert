const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../index');

beforeAll(async () => {
  await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('User Endpoints', () => {
  it('should create a new user', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({
        username: 'testuser'
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('_id');
    expect(res.body).toHaveProperty('username', 'testuser');
  });

  it('should get all users', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });
});

describe('Exercise Endpoints', () => {
  let userId;

  beforeAll(async () => {
    const res = await request(app)
      .post('/api/users')
      .send({ username: 'testuser' });
    userId = res.body._id;
  });

  it('should add an exercise to a user', async () => {
    const res = await request(app)
      .post(`/api/users/${userId}/exercises`)
      .send({
        description: 'test exercise',
        duration: 30,
        date: '2022-01-01'
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('_id', userId);
    expect(res.body).toHaveProperty('description', 'test exercise');
    expect(res.body).toHaveProperty('duration', 30);
    expect(res.body).toHaveProperty('date', new Date('2022-01-01').toDateString());
  });

  it('should get user exercise log', async () => {
    const res = await request(app).get(`/api/users/${userId}/logs`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('username', 'testuser');
    expect(res.body).toHaveProperty('log');
    expect(Array.isArray(res.body.log)).toBeTruthy();
  });
});
