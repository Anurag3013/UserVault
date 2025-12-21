# UserVault 🚀

UserVault is a beginner-friendly full-stack CRUD web application built using Node.js, Express, MySQL, and EJS. It allows users to view, edit, and manage user records stored in a MySQL database while demonstrating real-world backend, frontend, and database integration.

---

## ✨ Features

👥 View all users  
📊 Display total number of users  
✏️ Edit user name  
🔐 Password verification before updating user data  
🗄️ MySQL database integration  
🧪 Fake user data generation using Faker  
🌐 RESTful routing  
🧩 Server-side rendering using EJS  
🔁 Method override for PATCH requests  

---

## 🛠️ Tech Stack

Node.js  
Express.js  
MySQL  
EJS (Embedded JavaScript Templates)  
@faker-js/faker  
Method-Override  
HTML / CSS  

---

## 📂 Project Structure

uservault/
│
├── views/
│   ├── home.ejs
│   ├── user.ejs
│   └── edit.ejs
│
├── public/
│   └── (static files)
│
├── index.js
├── package.json
└── README.md

---

## ⚙️ Installation & Setup

1. Clone the repository  
git clone https://github.com/your-username/uservault.git

2. Go to project folder  
cd uservault

3. Install dependencies  
npm install

---

## 🗄️ Database Setup

CREATE DATABASE anu_app;

CREATE TABLE user (
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255),
  password VARCHAR(255)
);

Update MySQL credentials in index.js.

---

## ▶️ Run the Project

node index.js

Open browser:  
http://localhost:8080

---

## 🔗 RESTful Routes

GET    /               Home page (user count)  
GET    /user           View all users  
GET    /user/:id/edit  Edit user  
PATCH  /user/:id       Update user  

---

## 📌 Important Notes

Password must match to update user details  
Uses MySQL for persistent storage  
Faker used for dummy data  
Built for learning full-stack fundamentals  

---

## 👨‍💻 Author

Anurag  
Engineering Student | Aspiring Full-Stack Developer  

---

## 🌱 Future Enhancements

Delete user functionality  
Authentication system  
Password hashing  
Pagination  
React frontend  
Deployment  

---

⭐ If you like this project, don’t forget to star the repository!
