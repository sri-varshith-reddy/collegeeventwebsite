🎓 College Event Management System
🚀 Project Overview
The College Event Management System is a full-stack web application built to streamline the creation and registration of campus events. It allows any logged-in user to add events, view them, and register. Built using the MVC architecture and RESTful APIs, the project emphasizes modularity, scalability, and real-world usability.

✨ Features
🔐 User Authentication (Signup/Login)

🗓️ Create, Edit, and Delete Events (accessible to all users)

📝 Event Registration for Students

📱 Responsive UI (mobile and desktop)

📁 Modular MVC Structure

🌐 RESTful Routing

🛠️ Tech Stack
Frontend
HTML, CSS, JavaScript

Bootstrap

EJS (Embedded JavaScript)

Backend
Node.js

Express.js

MongoDB (Mongoose)

Express-session for authentication

📂 Folder Structure
csharp
Copy
Edit
college-event-management/
├── controllers/     # Request-handling logic
├── models/          # Mongoose schemas
├── routes/          # RESTful routes
├── views/           # EJS templates
├── public/          # Static files
├── app.js           # Main entry point
├── .env             # Environment variables
├── package.json     # Project metadata
⚙️ Installation
Prerequisites
Node.js and npm

MongoDB (local or Atlas)

Steps
bash
Copy
Edit
# Clone the repository
git clone <repo-link>
cd college-event-management

# Install dependencies
npm install

# Create and configure .env file
touch .env
Add this to .env:

ini
Copy
Edit
PORT=3000
MONGO_URI=your_mongodb_connection_string
SESSION_SECRET=your_secret_key
bash
Copy
Edit
# Start the application
npm start
Visit: http://localhost:3000

👨‍💻 Author
Srivarshith
📧 yellusrivarshith@gmail.com
📱 +91 9392840517
