# 🛒 Ecommerce Dashboard

A full-stack e-commerce CRUD (Create, Read, Update, Delete) web application that allows users to sign up, log in, and manage products. Users can view available products, add new ones, update existing ones, and delete products as needed.

This project demonstrates core concepts of MERN stack development with user authentication and product management features.

---

## ✨ Features

* User Signup & Login Authentication
* Product Listing
* Add New Product
* Update Existing Product
* Delete Product
* Responsive UI using Bootstrap
* RESTful API Integration

---

## 🧩 Tech Stack

### 🔹 Frontend

* **HTML**
* **CSS**
* **Bootstrap**
* **JavaScript**
* **React.js**

### 🔹 Backend

* **Node.js**
* **Express.js**

### 🔹 Database

* **MongoDB Compass**

---

## 📦 Node Modules

| Module     | Description              | Installation Command   |
| ---------- | ------------------------ | ---------------------- |
| `mongoose` | MongoDB ODM tool         | `npm install mongoose` |
| `nodemon`  | Auto-restart server tool | `npm install nodemon`  |

---

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/ecommerce-dashboard.git
cd ecommerce-dashboard
```

### 2. Install Dependencies

```bash
# Backend dependencies
cd backend
npm install

# Frontend dependencies
cd ../frontend
npm install
```

### 3. Start the Server and Client

```bash
# Backend
cd backend
nodemon server.js

# Frontend
cd ../frontend
npm start
```

---

## 🔐 Authentication Flow

* On **signup**, user details are stored in the MongoDB database.
* On **login**, credentials are validated using backend APIs.
* Authenticated users can perform CRUD operations on products.

---

| Dashboard                                                                                                                   | Product View                                                                                                                | Add Product                                                                                                                 | Update Product                                                                                                              | Delete Product                                                                                                              |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| ![Screenshot (109)](https://user-images.githubusercontent.com/107697534/202909943-a53a1447-c14c-49a6-80e3-bb5fe9074c73.png) | ![Screenshot (110)](https://user-images.githubusercontent.com/107697534/202909955-2b806c73-ba8b-4df5-9359-e8307b078b9f.png) | ![Screenshot (111)](https://user-images.githubusercontent.com/107697534/202910144-0ffe8b56-7e7b-4c35-9189-018a37a94bd3.png) | ![Screenshot (112)](https://user-images.githubusercontent.com/107697534/202910154-c716426d-840f-4f7b-814c-aeea65f3a80a.png) | ![Screenshot (113)](https://user-images.githubusercontent.com/107697534/202910162-a6370804-eb35-40e4-a6a1-059604338484.png) |

## 📁 Project Structure

```
ecommerce-dashboard/
│
├── backend/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── frontend/
│   ├── components/
│   ├── pages/
│   └── App.js
│
└── README.md
```

---

## 📌 Future Enhancements

* Role-based access control (Admin vs Customer)
* Payment gateway integration
* Product image uploads
* Category-wise filtering
* Search functionality

---


## 📃 License

This project is licensed under the [MIT License](LICENSE).

---
