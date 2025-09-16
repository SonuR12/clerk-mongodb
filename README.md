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
```
## 🛠️ Tech Stack

- ⚡ [Next.js 13+ (App Router)](https://nextjs.org/)  
- 🔐 [Clerk](https://clerk.com/) (Authentication)  
- 🍃 [MongoDB](https://www.mongodb.com/) + [Mongoose](https://mongoosejs.com/)  
- 🟦 [TypeScript](https://www.typescriptlang.org/)  
- 🎨 [Tailwind CSS](https://tailwindcss.com/)  

---

## ⚙️ Installation & Setup

Clone the repository:

```bash
git clone https://github.com/your-username/clerk-nextjs-mongodb-auth.git
cd clerk-nextjs-mongodb-auth
```

## ⚙️ Installation & Setup

Install dependencies:

```bash
npm install
```

```bash
npm run dev
```

env.local
```bash
MONGODB_URI=your_mongodb_connection_string
WEBHOOK_SECRET=your_clerk_webhook_secret
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
```

## 🖼️ Screenshots
![image](https://github.com/SonuR12/clerk-mongodb/blob/main/public/Demo.png)
---

## 🔮 Future Enhancements
- 🔗 Add Prisma ORM instead of raw Mongoose  
- 📧 Email/WhatsApp integration for user notifications  
- 🛡️ Role-based authentication (Admin/User)  
- 📱 Mobile-friendly UI with better responsiveness  

---

## 🤝 Contributing
Contributions are welcome!  
Please fork this repo, create a new branch, and submit a pull request 🙌  

---

## 📜 License
MIT License © 2025 [Your Name]  

---

👉 Do you also want me to **add badges** (Next.js, TypeScript, Clerk, MongoDB, Tailwind) at the very top of this README so it looks more professional?








