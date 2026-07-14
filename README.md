# Attendance Tracker 📊

A modern, full-stack web application designed for seamless daily attendance logging. Built with Next.js, styled with Tailwind CSS (Glassmorphism UI), and powered by a Supabase PostgreSQL database.

**This project was built as part of the Digital Heroes · Full Stack Developer Trial.**

## 🚀 Live Demo
**[View the Live Application Here](https://attendlog-six.vercel.app/)**

## ✨ Features
* **Frictionless Data Entry:** Users can log their Name and Status (Present, Absent, Late) in seconds.
* **Real-time Database:** Data is instantly securely saved to a Supabase backend via Next.js Server Actions.
* **Instant Visual Feedback:** Success states and auto-clearing forms provide a smooth user experience.
* **Historical Logs Dashboard:** A dedicated `/logs` route pulls real-time records from the database, styling them dynamically based on attendance status.

## 📸 Screenshots
<img width="1912" height="865" alt="image" src="https://github.com/user-attachments/assets/4735662a-08e8-4d9d-8951-dd8d2b04f94c" />

<img width="1907" height="845" alt="image" src="https://github.com/user-attachments/assets/d50b012b-6019-417b-b5fe-755368093bd6" />


## 🛠️ Tech Stack
* **Frontend:** Next.js (App Router), React, Tailwind CSS
* **Backend:** Supabase (PostgreSQL)
* **Deployment:** Vercel

## 💻 How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Afrinnazir10/attendlog.git](https://github.com/YOUR_GITHUB_USERNAME/attendlog.git)
   cd attendlog
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Setup:**
   Create a `.env.local` file in the root directory and add your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 License
This project is licensed under the MIT License.


