# Next.js Authentication Starter

A secure authentication system built with Next.js, NextAuth.js, Drizzle ORM, and PostgreSQL.

## Features

- **Authentication**: Email/password login with NextAuth.js
- **Database**: PostgreSQL with Drizzle ORM
- **Security**: Password hashing, JWT sessions, route protection
- **UI**: Responsive design with Tailwind CSS
- **Role-based Access**: Admin and user roles

## Tech Stack

- Next.js 14 (App Router)
- NextAuth.js v4
- Drizzle ORM
- PostgreSQL
- Tailwind CSS
- TypeScript

## Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure environment**
   
   Create `.env.local`:
   ```env
   DATABASE_URL=your_postgres_connection_string
   NEXTAUTH_SECRET=your_secure_jwt_secret
   NEXTAUTH_URL=http://localhost:3000
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

## Project Structure

```
app/
├── api/
│   ├── auth/[...nextauth]/     # NextAuth API routes
│   └── register/               # User registration
├── login/                      # Login page
├── register/                   # Registration page
├── protected/                  # Protected routes
└── components/                 # Reusable components

lib/
├── auth.config.ts             # NextAuth configuration
├── db.ts                      # Database setup
└── schema.ts                  # Database schema

middleware.ts                  # Route protection
```

## Authentication Flow

1. User registers with email/password
2. Password is hashed and stored in database
3. User logs in via NextAuth.js
4. JWT session is created
5. Protected routes are accessible with valid session

## Route Protection

Protected routes are secured using middleware:

```typescript
// middleware.ts
import { withAuth } from "next-auth/middleware"

export default withAuth({
  callbacks: {
    authorized: ({ token }) => !!token,
  },
})

export const config = {
  matcher: ["/protected/:path*"]
}
```

## Database Schema

```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password TEXT NOT NULL,
  role VARCHAR(20) DEFAULT 'user',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | PostgreSQL connection string |
| `NEXTAUTH_SECRET` | JWT signing secret (min 32 chars) |
| `NEXTAUTH_URL` | Application URL |

## API Routes

- `POST /api/register` - User registration
- `POST /api/auth/signin` - User login
- `POST /api/auth/signout` - User logout

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Security Features

- Password hashing with bcryptjs
- JWT-based sessions
- CSRF protection
- Route-level authentication
- Role-based access control
- SQL injection prevention with Drizzle ORM

## Links

- **GitHub Repository**: [https://github.com/goutam-khowal/PRODIGY_FS_01](https://github.com/goutam-khowal/PRODIGY_FS_01)
- **Live Demo**: [https://prodigyfs01.vercel.app/](https://prodigyfs01.vercel.app/)

