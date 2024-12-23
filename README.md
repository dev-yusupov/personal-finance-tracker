# Personal Finance Tracker

## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/personal-finance-tracker.git
   cd personal-finance-tracker
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following variables:

   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/personal-finance-tracker
   JWT_SECRET=your_jwt_secret
   ```

### Running the Project

1. **Start the MongoDB server:**

   Make sure your MongoDB server is running. You can start it using the following command if you have MongoDB installed locally:

   ```bash
   mongod
   ```

2. **Run the application:**

   ```bash
   npm start
   ```

   The server should now be running at `http://localhost:3000`.

### Running Tests

To run the tests, use the following command:

```bash
npm test
```

### API Documentation

You can find the API documentation in the `tech-doc.md` file or use tools like Swagger or Postman to explore the endpoints.

### Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request.

### License

This project is licensed under the MIT License.
