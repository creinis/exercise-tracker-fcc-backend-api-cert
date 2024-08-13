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

The backend of the Exercise Tracker Microservice is a Node.js application using the Express framework, designed to provide exercise tracking functionalities. The application includes routes to handle HTTP requests, process data, and return responses formatted in JSON.

#### Key Features:
1. **Create User:**
   - Allows the creation of a new user with a unique username.
     - **Endpoint:** `POST /api/users`
     - **Response:** Returns an object with `username` and `_id` properties.

2. **Add Exercise:**
   - Allows users to add exercises with a description, duration, and date.
     - **Endpoint:** `POST /api/users/:_id/exercises`
     - **Response:** Returns the user object with the added exercise fields: `description`, `duration`, `date`.

3. **Get Users:**
   - Retrieves a list of all users.
     - **Endpoint:** `GET /api/users`
     - **Response:** Returns an array of users with `_id` and `username` properties.

4. **Get Exercise Logs:**
   - Retrieves a user's exercise log with optional filters for date range and limit.
     - **Endpoint:** `GET /api/users/:_id/logs?[from][&to][&limit]`
     - **Response:** Returns a user object with a `log` array, `count` of exercises, and other user details.

### Practical Use Case

The Exercise Tracker Microservice can be used to keep track of exercise routines, helping users maintain a record of their physical activities. This can be particularly useful for fitness enthusiasts, personal trainers, and health-conscious individuals who want to monitor their progress over time.

#### Example Usage:

1. **Create a New User:**
   - A user submits their username through the form, which sends a `POST` request to the backend.
   - The backend processes the request, creates the user, and returns the user details in JSON format.

2. **Add an Exercise:**
   - The user adds an exercise by filling in the details (description, duration, date) and submits it via the form.
   - The backend receives the data, associates the exercise with the user, and returns the updated user information with the exercise details.

3. **Retrieve Exercise Logs:**
   - The user requests their exercise logs by providing their user ID and optional filters (e.g., date range, limit).
   - The backend processes the request, filters the exercise records, and returns the log in JSON format, including a count of exercises.

### Benefits

- **Personal Fitness Management:** Helps users track their exercise routines and maintain consistent records over time.
  
- **Progress Monitoring:** Allows users to review their exercise history and assess their progress, enabling better workout planning.

- **Data Filtering:** Users can filter their exercise logs by date and limit, making it easier to focus on specific periods or recent activities.

With this structure, the Exercise Tracker Microservice provides an efficient and organized solution for managing and reviewing exercise data in a personal or professional fitness context.

---

#### This is a FreeCodeCamp Challenge for Back End Development and APIs Projects Certification
<p align="center">
<img src="https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg" width="250" height="75" alt="freeCodeCamp" style="margin: 0 15px; opacity: 0.6" />
</p>
