# 🧩 EMS System (Employee Management System)

EMS System is a **role-based employee and task management web application** built using **React.js**.  
It enables **Admins** to assign and manage tasks for employees, while **Employees** can log in to view their assigned tasks through a personalized dashboard.  
User authentication and session persistence are handled using **React Context API** and **localStorage**.

---

## 🚀 Features

### 🔐 Authentication & Authorization
- Role-based login (**Admin / Employee**)
- Persistent user sessions using browser `localStorage`
- Users remain logged in until manual logout

### 👨‍💼 Admin Dashboard
- View all employees
- Assign tasks to specific employees
- Automatically update task counts (Active / New / Completed / Failed)
- Persistent task allocation across page reloads

### 👨‍💻 Employee Dashboard
- View assigned tasks only
- Task summary dashboard
- Data persists after refresh and re-login

### 🧠 State Management
- Global state managed using **React Context API**
- Synchronization between UI state and `localStorage`
- Clear separation between Admin and Employee workflows

---

## 🛠️ Tech Stack

- **Frontend:** React.js
- **State Management:** Context API, useState, useEffect
- **Persistence:** Browser localStorage
- **Styling:** Tailwind CSS
- **Build Tool:** Vite / Create React App

---


