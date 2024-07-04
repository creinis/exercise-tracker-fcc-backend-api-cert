# Exercise Tracker Microservice

## Technologies:
<p align="center">
   <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg" width="75" height="75" alt="MongoDB" style="margin: 10px 15px 0 15px;" />
  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg" width="75" height="75" alt="Express" style="margin: 10px 15px 0 15px;" />
  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" width="75" height="75" alt="JavaScript" style="margin: 10px 15px 0 15px;" />
  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" width="75" height="75" alt="NodeJS" style="margin: 10px 15px 0 15px;" />
</p>

## Try it!
https://exercise-tracker-three-peach.vercel.app/

### Functionality

The backend of the exercise-tracker is a Node.js application using the Express framework, designed to provide exercise tracking functionalities. The application includes routes to handle HTTP requests, process data, and return responses formatted in JSON.

#### Key Features:
- **Create User**: Allows the creation of a new user with a unique username.
- **Add Exercise**: Allows users to add exercises with a description, duration, and date.
- **Get Users**: Retrieves a list of all users.
- **Get Exercise Logs**: Retrieves a user's exercise log with optional filters for date range and limit.

### Practical Use Case

The Exercise Tracker Microservice can be used to keep track of exercise routines, helping users maintain a record of their physical activities. This can be particularly useful for fitness enthusiasts, personal trainers, and health-conscious individuals who want to monitor their progress over time.

#### Example Usage:

1. **Create a New User:**
   - Endpoint: `POST /api/users`
   - Request Body: `{ "username": "john_doe" }`
   - Response: `{ "_id": "60d21b4667d0d8992e610c85", "username": "john_doe" }`

2. **Add an Exercise:**
   - Endpoint: `POST /api/users/:_id/exercises`
   - Request Body: `{ "description": "Running", "duration": 30, "date": "2024-07-02" }`
   - Response: `{ "_id": "60d21b4667d0d8992e610c85", "username": "john_doe", "description": "Running", "duration": 30, "date": "Tue Jul 02 2024" }`

3. **Get User Logs:**
   - Endpoint: `GET /api/users/:_id/logs`
   - Response: 
   ```json
   {
     "username": "john_doe",
     "count": 1,
     "_id": "60d21b4667d0d8992e610c85",
     "log": [
       {
         "description": "Running",
         "duration": 30,
         "date": "Tue Jul 02 2024"
       }
     ]
   }
