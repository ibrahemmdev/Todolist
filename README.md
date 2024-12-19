# To-Do List API

This project is a **To-Do List API** built using **Node.js** and **Express.js**. It provides user authentication (login and registration) and supports full CRUD operations for managing tasks.

---

## Features

- **User Authentication**:
  - Register new users.
  - Login and receive a token for secure access.
  
- **CRUD Operations** for To-Do Items:
  - **Create** a new to-do item.
  - **Read** tasks with pagination to-do items.
  - **Update** an existing to-do item.
  - **Delete** a to-do item.

---

## Technologies Used

- **Node.js**: Runtime environment.
- **Express.js**: Backend framework.
- **MongoDB**: Database for storing users and to-do items.
- **JWT**: For user authentication and authorization.
- **bcrypt**: For hashing passwords.

---

## Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ibrahemmdev/Todolist.git
   cd todolist-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure environment variables:
   Create a `.env` file in the root of the project with the following variables:

   ```env
   mongoURI=<your_mongodb_connection_string>
   secret=<your_jwt_secret>
   ```

4. Start the server:

   ```bash
   nodemon .
   ```

   The API will be accessible at `http://localhost:3000`.
