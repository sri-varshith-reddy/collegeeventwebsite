# EasyStay

## Project Description
EasyStay is a full-stack web application that allows users to browse, book, and manage accommodations. The platform provides a seamless experience for both hosts and guests, featuring a user-friendly interface and robust backend functionalities.

## Features
- User authentication (Signup/Login)
- Add, edit, and delete property listings
- Search and filter properties
- Booking system with date selection
- User profile management
- Responsive design for mobile and desktop

## Technologies Used
### Frontend:
- HTML
- CSS
- JavaScript
- Bootstrap
- EJS (Embedded JavaScript for templating)

### Backend:
- Node.js
- Express.js
- MongoDB (Mongoose for database management)

## Installation
### Prerequisites:
- Node.js and npm installed
- MongoDB installed and running

### Steps:
1. Clone the repository:
   ```sh
   git clone <repo-link>
   ```
2. Navigate to the project directory:
   ```sh
   cd easystay
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Set up environment variables (Create a `.env` file):
   ```sh
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   SESSION_SECRET=your_secret_key
   ```
5. Start the server:
   ```sh
   npm start
   ```
6. Open your browser and visit:
   ```sh
   http://localhost:3000
   ```

## Folder Structure
```
Easystay/
│── public/           # Static assets (CSS, JS, images)
│── views/            # EJS templates
│── routes/           # Express route handlers
│── models/           # Mongoose schemas
│── controllers/      # Logic for handling requests
│── app.js            # Main server file
│── package.json      # Dependencies and scripts
│── .env              # Environment variables
```

## Future Enhancements
- Payment gateway integration
- Reviews and ratings system
- Admin dashboard for managing users and listings

## Author
Developed by Srivarshith


