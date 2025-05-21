# 🚀 Dashboard Demo - test-kasradash

A simple and modern 2-page dashboard UI built with **Next.js** and **shadcn/ui** components.

## ✨ Features

- 📊 Dashboard page with analytic cards and charts
- ⚙️ Settings page with schema-based form validation
- 🌗 Dark mode toggle
- 📱 Fully responsive design
- 🧠 State management using Zustand
- 🔒 Accessible and keyboard-friendly (Radix UI based)
- ✅ Strictly typed with TypeScript and Zod

## 🧑‍💻 Tech Stack

| Category         | Technology                                                   |
|------------------|--------------------------------------------------------------|
| Framework        | **Next.js 15** (App Router + Turbopack)                      |
| Core Library     | **React 19**                                                 |
| Styling          | **Tailwind CSS**, **tw-animate-css**, **tailwind-merge**     |
| UI Components    | **shadcn/ui** (powered by **Radix UI**)                      |
| Forms            | **react-hook-form**, **Zod**, **@hookform/resolvers**        |
| Charts           | **Recharts**                                                 |
| State Management | **Zustand**                                                  |
| Table & Sorting  | **@tanstack/react-table**, **@dnd-kit/sortable**             |
| Icons            | **lucide-react**                                             |
| Utils            | **clsx**, **class-variance-authority**                       |
| Notifications    | **sonner**                                                   |
| Type Checking    | **TypeScript**                                               |
| Linting          | **ESLint**, **eslint-config-next**                           |

## 📂 Pages Overview

- `/dashboard`: Overview with cards and charts
- `/settings`: Form with validation for user preferences

## 🛠 Getting Started

```bash
# 2. Install dependencies
npm install --legacy-peer-deps

# 3. Run the development server
npm run dev
