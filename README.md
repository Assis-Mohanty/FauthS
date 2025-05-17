
---
Flight Auth Service

The **Flight Auth Service** is a dedicated microservice responsible for user **registration**, **login**, **password hashing**, and **JWT-based authentication**. It ensures secure access control across the entire Flight Booking System.

**Repository:** [FauthS](https://github.com/Assis-Mohanty/FauthS)

---

## 🧩 Microservice Architecture Overview

This service is part of the overall **Flight Booking Microservice System**, which includes:

| Service            | Description                                                                      | Repository                    |
| ------------------ | -------------------------------------------------------------------------------- | ----------------------------- |
| 🔍 Flight Search   | [FandS](https://github.com/Assis-Mohanty/FandS)                                  | Search and manage flight data |
| 🛒 Booking Service | [Flight\_bookingService](https://github.com/Assis-Mohanty/Flight_bookingService) | Handles flight bookings       |
| ⏰ Reminder Service | [FremainderServiceS](https://github.com/Assis-Mohanty/FremainderServiceS)        | Sends booking reminders       |
| 🔐 Auth Service    | **You are here**                                                                 | Authenticates users           |
| 🌐 API Gateway     | [ApiGateway](https://github.com/Assis-Mohanty/ApiGateway)                        | Entry point for all services  |

---

## ⚙️ Tech Stack

* **Node.js + Express** — Backend framework
* **MySQL + Sequelize** — Database ORM
* **bcrypt** — For hashing user passwords
* **jsonwebtoken** — For generating and verifying JWT tokens
* **dotenv** — Environment variable management

---

## 🔑 Key Features

* Secure user **registration** with hashed passwords
* **Login** endpoint with JWT issuance
* **Middleware** for JWT token verification
* Sequelize-based User model & DB integration

---

## 🗂️ Folder Structure

```
FauthS/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── services/
│   └── index.js
├── config/
│   └── config.json
├── .env
└── package.json
```

---

## 🚀 How to Run

```bash
git clone https://github.com/Assis-Mohanty/FauthS
cd FauthS
npm install
cp .env.example .env  # Then add your DB config and JWT secret
npm start
```

---

## 🔐 .env Example

```env
PORT=4000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=auth_service
JWT_SECRET=your_super_secret_key
JWT_EXPIRY=1d
```

---

## 📌 Available Endpoints

| Method | Endpoint    | Description                      |
| ------ | ----------- | -------------------------------- |
| POST   | `/register` | Registers a new user             |
| POST   | `/login`    | Logs in user, returns JWT        |
| GET    | `/validate` | Validates JWT (for internal use) |

---

## 🔒 JWT Authentication Flow

1. User logs in with email/password.
2. Server verifies password and returns a signed JWT.
3. Frontend or gateway stores JWT.
4. Requests include `Authorization: Bearer <token>`.
5. Middleware verifies token for protected routes.

---

## 🧪 Future Enhancements

* Password reset with email OTP
* Refresh token implementation
* Role-based access control (admin, user, etc.)
* Rate limiting & IP blocking for brute force protection

---

## 🧑‍💻 Maintainer

Built and maintained by [Assis Mohanty](https://github.com/Assis-Mohanty)

---

