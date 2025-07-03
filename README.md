🔐 Next.js + NextAuth + Drizzle + PostgreSQL – Secure Auth Starter
This project is a secure authentication starter kit built with:

✅ Next.js (App Router)

✅ NextAuth.js (email + password login)

✅ Drizzle ORM + PostgreSQL (Neon or local)

✅ Tailwind CSS (for styling)

✅ Project Purpose
This repository is part of Task 1 for a full stack assignment:

"Implement a user authentication system with secure login and registration functionality. Users should be able to sign up, login securely, and access protected routes only after successful authentication."

🗂️ Project Structure
graphql
Copy
Edit
app/
├── api/ # API routes (NextAuth, register, etc.)
├── login/ # Login page UI
├── register/ # Registration page UI
├── protected/ # Protected content (accessible after login)
├── Secret.tsx # Example protected component
├── auth.ts # Session helper (getServerSession)
├── auth.config.ts # NextAuth configuration
├── db.ts # DB setup using Drizzle ORM
├── form.tsx # Reusable form component
├── layout.tsx # Root layout
├── Navbar.tsx # Navigation bar
├── page.tsx # Homepage
├── submit-button.tsx # Button component
├── globals.css # Tailwind CSS global styles
At the root level:

bash
Copy
Edit
.
├── middleware.ts # Route protection via NextAuth
├── .env.local # Environment config (DB, Auth secret, etc.)
├── tailwind.config.ts # Tailwind configuration
├── tsconfig.json # TypeScript settings
├── package.json # Dependencies and scripts
├── README.md # You’re reading it 😄
🔐 Features Implemented
✅ Secure email + password login using NextAuth (Credentials Provider)

✅ JWT-based session management

✅ Password hashing using bcryptjs

✅ Role-based access control (admin/user)

✅ Route protection via middleware.ts and getServerSession()

✅ Clean, responsive UI with Tailwind CSS

🧪 Getting Started

1. Install Dependencies
   bash
   Copy
   Edit
   pnpm install # or npm install
2. Setup Environment
   Create a .env.local file with:

env
Copy
Edit
DATABASE_URL=your_postgres_url
NEXTAUTH_SECRET=your_secure_generated_secret
NEXTAUTH_URL=http://localhost:3000
Use generate-secret.vercel.app for the secret.

3. Run Development Server
   bash
   Copy
   Edit
   pnpm dev
   🔄 Auth Flow
   User registers via /register (stored with hashed password)

User logs in via /login (NextAuth validates credentials)

Session is stored via JWT

middleware.ts and getServerSession restrict protected content

Session contains role (user/admin) for future use in RBAC

🔐 Route Protection Example
ts
Copy
Edit
// middleware.ts
import { withAuth } from "next-auth/middleware";

export default withAuth({
callbacks: {
authorized: ({ token }) => !!token,
},
});

export const config = {
matcher: ["/protected/:path*"],
};
🧰 Stack
Layer Tool
Frontend Next.js (App Router)
Backend API Routes
Auth NextAuth.js
ORM Drizzle
DB PostgreSQL (Neon)
Styling Tailwind CSS
Hashing bcryptjs
Session JWT

🔜 Task 2 Preview: Employee Management System
You'll build on this project by adding:

👥 Admin-only employee dashboard

📇 CRUD functionality for employee records

🛡️ Server-side validation & auth protection

✨ Credits
Made with ❤️ by Goutam
Built for Task 1 – Secure Auth System
