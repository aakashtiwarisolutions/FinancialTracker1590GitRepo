# 💰 Financial Tracker

A simple **Financial Tracker** web application to help users manage their monthly bills, income, and expenses.  
Built using **Node.js**, **Express**, and **PostgreSQL**, this project allows you to add, view, and organize financial data in a clean and structured way.

---

## ✨ Features
- Add, list, and update bills
- Simple RESTful API using Express
- PostgreSQL database integration
- JSON request/response support (Postman-friendly)
- CI/CD ready (Azure DevOps)
- Cloud-deployable (AWS App Runner / EC2)

---

## 🧱 Tech Stack
| Component | Technology |
|------------|-------------|
| Backend | Node.js, Express |
| Database | PostgreSQL |
| Hosting | AWS (optional) |
| CI/CD | Azure DevOps |
| Dev Tools | npm, Git, Postman |

---

---

## ⚙️ Getting Started

### 1️⃣ Prerequisites
- Node.js (v18+ recommended)
- PostgreSQL
- npm or yarn

---

### 2️⃣ Clone the Repository
```bash
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>


-----

npm install



----

PORT=3000
NODE_ENV=development
DATABASE_URL=postgres://<user>:<password>@localhost:5432/financial_tracker

----

npm run dev


---

CREATE DATABASE financial_tracker;

CREATE TABLE IF NOT EXISTS bills (
  id SERIAL PRIMARY KEY,
  type VARCHAR(100) NOT NULL,
  month VARCHAR(20) NOT NULL,
  amount NUMERIC(12,2) NOT NULL,
  status VARCHAR(20) NOT NULL DEFAULT 'unpaid',
  created_at TIMESTAMP DEFAULT NOW()
);

