🧩 EMS System (Employee Management System)

EMS System is a role-based task and employee management web application built using React.js.
The system allows Admins to assign and manage tasks for employees, while Employees can log in to view their personalized task dashboard.
User authentication and session persistence are handled using React Context API and localStorage.


🚀 Features
🔐 Authentication & Authorization

Role-based login (Admin / Employee)

Persistent sessions using browser localStorage

Users remain logged in until manual logout

👨‍💼 Admin Dashboard

View all employees

Assign tasks to specific employees

Automatically update task counts (Active / New / Completed / Failed)

Persistent task allocation across page reloads

👨‍💻 Employee Dashboard

View assigned tasks only

Task summary dashboard

Persistent task data after refresh and re-login

🧠 State Management

Global state managed using React Context API

Synchronized UI state and localStorage

Clean separation of Admin and Employee workflows

🛠️ Tech Stack

Frontend: React.js

State Management: Context API, useState, useEffect

Persistence: Browser localStorage

Styling: Tailwind CSS

Build Tool: Vite / CRA