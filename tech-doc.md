# Personal Finance Tracker App - Technical Requirements

## Overview

The **Personal Finance Tracker** is a backend service that enables users to manage their financial activities, including tracking income, expenses, and budgets. Built with **Express.js** and **Node.js**, it uses **MongoDB** as the database to store dynamic financial data.

---

## Functional Requirements

### 1. User Management

- **Registration**
  - Users must provide their name, email, and password to register.
  - Passwords should be securely hashed.

- **Login**
  - Users can log in using their email and password.
  - Successful login generates a JWT for authentication.

- **Profile Management**
  - Users can update their name and email

### 2. Income and Expense Management

- **Add Transaction**
  - Users can add transactions specifying:
    - Type: Income or Expense
    - Amount
    - Category
    - Description
    - Date

- **Update/Delete Transaction**
  - Users can modify or delete a transaction they created.

- **View Transactions**
  - Users can view all transactions, filter by date range, or search by category/tags.

### 3. Budget Management

- **Set Budgets**
  - Users can set monthly or category-specific budget limits.

- **Update/Delete Budgets**
  - Users can modify or delete existing budgets.

- **Notifications**
  - Notify users if their spending exceeds the set budget.

### 4. Analytics and Reporting

- **Monthly Reports**
  - Breakdown of expenses by category.

- **Savings Tracker**
  - Calculate savings as income minus expenses.

### 5. Data Export

- Users can export transactions and budgets as CSV or JSON files.

### 6. Security

- **Authentication**
  - All endpoints require authentication using JWT.

- **Data Protection**
  - Use HTTPS and securely store sensitive data.

---

## Technical Specifications

### 1. Backend

- **Framework**: Express.js
- **Language**: Node.js

### 2. Database

- **Type**: NoSQL
- **Technology**: MongoDB

### 3. Security

- **Authentication**: JWT
- **Password Hashing**: bcrypt
- **Environment Variables**: dotenv

### 4. Validation

- Use Joi or express-validator for input validation.

### 5. Logging

- Use Winston or Morgan for request and error logging.

### 6. Testing

- Use Jest or Mocha with Chai for unit and integration testing.

---

## API Endpoints

### User Management

- **POST /api/auth/register**: Register a new user.
- **POST /api/auth/login**: Log in a user and return a JWT.
- **GET /api/auth/profile**: Get user profile (requires authentication).
- **PUT /api/auth/profile**: Update user profile (requires authentication).

### Transactions

- **GET /api/transactions**: Fetch all transactions for a user.
- **POST /api/transactions**: Add a new transaction.
- **PUT /api/transactions/:id**: Update a transaction by ID.
- **DELETE /api/transactions/:id**: Delete a transaction by ID.
- **GET /api/transactions/search**: Search or filter transactions.

### Budgets

- **GET /api/budgets**: Fetch all budgets for a user.
- **POST /api/budgets**: Add a new budget.
- **PUT /api/budgets/:id**: Update a budget by ID.
- **DELETE /api/budgets/:id**: Delete a budget by ID.

---

## Database Schema

### Users Collection

```json
{
  "_id": "ObjectId",
  "name": "string",
  "email": "string",
  "password": "string",
  "profilePicture": "string",
  "createdAt": "date",
  "updatedAt": "date"
}
```

### Transactions Collection

```json
{
  "_id": "ObjectId",
  "userId": "ObjectId",
  "type": "string (income or expense)",
  "amount": "number",
  "category": "string",
  "description": "string",
  "date": "date",
  "tags": ["array of strings"],
  "createdAt": "date",
  "updatedAt": "date"
}
```

### Budgets Collection

```json
{
  "_id": "ObjectId",
  "userId": "ObjectId",
  "category": "string",
  "budgetLimit": "number",
  "createdAt": "date",
  "updatedAt": "date"
}
```

---

## Development Workflow

1. **Setup Project**
   - Initialize Node.js project.
   - Install required dependencies.

2. **Create Models**
   - Design and implement Mongoose models for Users, Transactions, and Budgets.

3. **Build Endpoints**
   - Implement and test CRUD operations for each feature.

4. **Middleware**
   - Add authentication and validation middleware.

5. **Testing**
   - Write unit and integration tests.

6. **Documentation**
   - Document APIs using Swagger or Postman.

---

## Tools and Dependencies

### Backend

- Express.js
- Mongoose

### Security

- bcrypt
- jsonwebtoken
- dotenv

### Validation

- Joi or express-validator

### Testing

- Jest or Mocha + Chai

### Logging

- Winston or Morgan

---

## Future Enhancements

- Multi-currency support.
- Real-time notifications using WebSockets.
- AI-driven budget recommendations.
