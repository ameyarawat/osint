# OSINT Tool Management System

A centralized platform for managing and exploring Open Source Intelligence (OSINT) tools. Features a public directory with powerful filtering and a secure admin panel for content management.

![Status](https://img.shields.io/badge/Status-Completed-success)
![Stack](https://img.shields.io/badge/Stack-MERN-blue)

## 🚀 Features

- **Tool Directory**: Browse, search, and filter OSINT tools by category, platform, and license.
- **Detailed Guides**: Markdown-supported installation and usage guides for each tool.
- **Admin Portal**: Secure dashboard to Add, Edit, and Delete tools.
- **Categories**: Organized by function (People, Domain, Dark Web, etc.).
- **Legal & Ethical**: Dedicated section on responsible usage.
- **Modern UI**: Dark-themed, responsive design built with Tailwind CSS.

## 🛠️ Tech Stack

- **Frontend**: React (Vite), Tailwind CSS, Framer Motion, Lucide React
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **Auth**: JWT (JSON Web Tokens)

## 📦 Installation

### Prerequisites
- Node.js (v14+)
- MongoDB (Local or Atlas)

### 1. Backend Setup
```bash
cd backend
npm install
npm run data:import  # Seed database with sample tools & admin
npm run server       # Start backend on port 5000
```

### 2. Frontend Setup
```bash
cd frontend
npm install
npm run dev          # Start frontend on port 5173
```

## 🔐 Environment Variables

### Backend (`backend/.env`)
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/osint_tool_manager(default)
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

## 📚 Documentation

- [API Documentation](docs/API.md)
- [System Architecture](docs/ARCHITECTURE.md)

## 🚀 Deployment
**Live Demo:** [Frontend App](https://osint-frontend.vercel.app) | [Backend API](https://osint-backend.onrender.com)

- **Frontend Host**: Vercel
- **Backend Host**: Render
- **Database**: MongoDB Atlas

## ⚖️ Legal Disclaimer
This tool is for educational purposes only. The creators are not responsible for misuse.
