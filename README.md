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

## 📂 Project Structure:
```
.
├── src/
│   ├── index.js
│   ├── routes/
│   │   └── bills.js
│   └── db/
│       └── pool.js
├── .env.example
├── package.json
└── README.md
```

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
```

---

### 3️⃣ Install Dependencies
```bash
npm install
```

---

### 4️⃣ Set Up Environment Variables
Create a `.env` file based on `.env.example`:

```
PORT=3000
NODE_ENV=development
DATABASE_URL=postgres://<user>:<password>@localhost:5432/financial_tracker
```

---

### 5️⃣ Run the Server:
```bash
npm run dev
```
Your app should now be running at:  
👉 [http://localhost:3000](http://localhost:3000)

---

## 🗃️ Database Setup
Run these commands in PostgreSQL:
```sql
CREATE DATABASE financial_tracker;

CREATE TABLE IF NOT EXISTS bills (
  id SERIAL PRIMARY KEY,
  type VARCHAR(100) NOT NULL,
  month VARCHAR(20) NOT NULL,
  amount NUMERIC(12,2) NOT NULL,
  status VARCHAR(20) NOT NULL DEFAULT 'unpaid',
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

## 🚀 API Endpoints

### **GET** `/api/bills`
Fetch all bills.
```bash
curl http://localhost:3000/api/bills
```

**Response Example**
```json
[
  {
    "id": 1,
    "type": "rent",
    "month": "2025-10",
    "amount": 1200.00,
    "status": "unpaid"
  }
]
```

---

### **POST** `/api/bills/echo`
Echo back the JSON you send (for testing).
```bash
curl -X POST http://localhost:3000/api/bills/echo   -H "Content-Type: application/json"   -d '{"type":"rent","month":"2025-10","amount":1200}'
```

**Response Example**
```json
{
  "received": {
    "type": "rent",
    "month": "2025-10",
    "amount": 1200
  }
}
```

---

## 🧠 Future Improvements
- Add authentication (JWT)
- Add charts for visualization
- Integrate budgets and savings goals
- Add front-end dashboard (React)

---

## 👨‍💻 Author
**Aakash Tiwari**  
📧 taakash025@gmail.com
🌐 https://github.com/uraakashprojects

---

## 📜 License
This project is open-source and available under the [MIT License](LICENSE).
