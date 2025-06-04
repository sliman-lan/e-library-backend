# E-Library Backend API

## Overview
This project implements the backend API for an E-Library application using Node.js and Express. The API provides RESTful endpoints to manage books, authors, users, publishers, and authentication activities. It is designed with scalability and clarity in mind, supporting robust error handling and standardized data management.

## Table of Contents
- [Overview](#overview)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Error Handling](#error-handling)
- [License](#license)
- [Contributing](#contributing)
- [Contact](#contact)

## Project Structure
Below is the project directory structure displayed in Markdown:

```plaintext
E-Library-Backend/
├── config/
│   └── db.js                      // Database connection configuration
├── controllers/
│   ├── authController.js          // Authentication logic
│   ├── bookController.js          // CRUD operations for books
│   └── authorController.js        // CRUD operations for authors
├── middleware/
│   └── errorHandler.js            // Centralized error handling middleware
├── models/
│   ├── Book.js                    // Book model definition
│   ├── Author.js                  // Author model definition
│   └── User.js                    // User model definition
├── routes/
│   ├── auth.js                    // Authentication routes
│   ├── books.js                   // Book-related routes
│   ├── authors.js                 // Author-related routes
│   └── publishers.js              // Publisher-related routes (if applicable)
├── .env                           // Environment configuration variables
├── package.json                   // Project metadata and dependencies
└── server.js                      // Main server entry point
```

## Installation
Follow these steps to get your project up and running:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sliman-lan/e-library-backend.git
  
2. **Navigate into the project directory**
   ```bash
   cd e-library-backend
2. **Install dependencies**
   ```bash
   npm install


   
---

**Configuration**

```markdown
## Configuration
Create a `.env` file in the root directory with your environment variables. For example:
```
```dotenv
PORT=3000
DB_CONNECTION=your-database-connection-string
JWT_SECRET=your-secret-key
```


---

**Usage**

```markdown
## Usage
Start the server by running:
```
```bash
npm start
```
**Or**
```bash
node server.js
```


---

**API Endpoints Heading**

```markdown
## API Endpoints
- /api/auth
- /api/authors
- /api/books

### Authentication
- **POST `/auth/signup`**: Register a new user.
- **POST `/auth/login`**: Authenticate an existing user and issue a JSON Web Token.

### Books
- **GET `/books`**: Retrieve a list of all books.
- **GET `/books/search`**: Search for books by title.
- **POST `/books/`**: Add a new book.
