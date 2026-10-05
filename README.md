# 💬 Discord Clone: Full-Stack Real-Time Chat

A full-stack Discord-style chat app with servers, text channels, direct messages, invite links, file uploads and **real-time messaging over WebSockets**.

![Next.js](https://img.shields.io/badge/Next.js-14-000000?logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-010101?logo=socketdotio&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)

## ✨ Features
- 🔐 **Authentication** with Clerk (sign-in and sign-up)
- 🏠 **Servers:** create, edit, delete and leave servers, with custom images
- #️⃣ **Channels:** create, edit and delete text channels
- 🔗 **Invite links:** generate and regenerate invite codes to join a server
- ⚡ **Real-time messaging** with Socket.io
- ✉️ **Direct messages** between server members (1:1 conversations)
- 👥 **Member management** with roles
- 📎 **File and image attachments** with UploadThing
- 😀 **Emoji picker**
- 🌗 **Light/dark mode** and a responsive, mobile-friendly UI

## 🏗️ Architecture
```
Next.js App Router (React + TypeScript + Tailwind/shadcn UI)
        │                        │
   REST API routes          Socket.io server (pages/api/socket)
        │                        │
        └──── Prisma ORM ────────┘
                 │
               MySQL
   Data models: Profile · Server · Member · Channel · Message · Conversation · DirectMessage
```

## 🛠️ Tech stack
| Layer | Tools |
|---|---|
| Frontend | Next.js 14 (App Router), React, TypeScript, Tailwind CSS, shadcn/ui (Radix), Zustand, React Query |
| Real-time | Socket.io |
| Backend | Next.js API routes, Prisma ORM |
| Database | MySQL |
| Auth and files | Clerk, UploadThing |
| Forms and validation | React Hook Form, Zod |

## 🚀 Getting started
```bash
git clone https://github.com/fagami1423/discord-clone.git
cd discord-clone
npm install
```
Create a `.env` file:
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
DATABASE_URL=mysql://user:password@localhost:3306/discord
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=
```
Set up the database and run:
```bash
npx prisma generate
npx prisma db push
npm run dev
```
Then open http://localhost:3000.

## 👤 Author
**Raj Kumar Phagami**: [GitHub](https://github.com/fagami1423)
