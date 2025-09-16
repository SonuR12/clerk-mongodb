# 🔐 Clerk + Next.js + MongoDB Authentication

A full-stack **Next.js 13+** application that integrates **Clerk authentication** with **MongoDB (Mongoose)** for persistent user management.  
This setup handles user sign-in, sign-up, profile management, and Clerk webhooks to sync users with the database.

---

## ✨ Features

- 🔑 Authentication with **Clerk** (Sign Up, Sign In, User Profile)  
- 🗄️ MongoDB + Mongoose for **user storage**  
- 🔔 Webhook handling for user lifecycle events:  
  - `user.created` → Save new user to DB  
  - `user.updated` → Update user info in DB  
  - `user.deleted` → Remove user from DB  
  - `session.created` → Handle new sessions  
- 👤 Profile page with **Clerk’s `<UserProfile />`**  
- ⚡ Optimized MongoDB connection with caching  
- ✅ Secure environment variables  

---

## 📂 Project Structure

```bash
src/
├─ actions/
│  └─ user.action.ts        # Server actions (create user, etc.)
├─ app/
│  ├─ api/webhooks/route.ts # Clerk webhook handler
│  ├─ api/user/route.ts     # User API (GET user)
│  ├─ profile/page.tsx      # User profile page
│  ├─ sign-in/page.tsx      # Sign in page
│  ├─ sign-up/page.tsx      # Sign up page
│
├─ lib/
│  ├─ db/db.ts              # MongoDB connection logic
│  └─ modals/user.modal.ts  # User Mongoose schema
