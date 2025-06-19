# 🧠 Task Manager Backend

A powerful backend for managing tasks, built with **Node.js**, **Express.js**, and **PostgreSQL**. This API is designed for scalability, simplicity, and rapid development.

## ⚙️ Tech Stack

- **Node.js** – JavaScript runtime
- **Express.js** – Minimalist web framework
- **PostgreSQL** – Relational database
- **ORM** – TypeORM *(plug in your choice)*
- **dotenv** – Secure environment configuration

---

## 📦 Getting Started

### 🔧 Prerequisites

- Node.js (v18+)
- PostgreSQL (local or cloud instance)
- npm

---

### 🚀 Setup Instructions

1. **Clone the repository**

    ```bash
    git clone https://github.com/Deepak-rock/task-manager-backend


2. **Install dependencies**

    ```bash
    npm install


3. **Configure environment**

Create a .env file in the root:

    # You can provide any Port
    PORT=5001
    # Provide your Database Url from render || docker || local.  
    DB_URL= postgresql://username:password@port/your_database_name 

Copy from .env.example if available.


4. **Start the server**

    npm run dev     # For development with nodemon
    npm start       # For production


🧠 API Endpoints

    | Method | Endpoint     | Description       |
    | ------ | ------------ | ----------------- |
    | GET    | `/tasks`     | Get all tasks     |
    | POST   | `/tasks`     | Create a new task |
    | PUT    | `/tasks/:id` | Update a task     |
    | DELETE | `/tasks/:id` | Delete a task     |


🔍 Project Structure

    src/
    ├── entity/
    |    ├── Task.js
    ├── data-source.js
    ├── index.js
    └── routes.js

📚 Scripts

    "scripts": {
        "start": "node src/index.js",
        "dev": "nodemon src/index.js",
        "test": "echo \"Test suite coming soon\""
    }
