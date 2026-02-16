# 🗓 Roster System – Frontend Developer Assignment

A modern, interactive Roster / Scheduling System built with **Next.js (App Router)**, **TypeScript**, and **Chakra UI**, based on the provided Figma design.

This project demonstrates clean architecture, strong UI implementation skills, and attention to detail in translating design into production-quality frontend code.

---

## 🚀 Live Demo

> *(Add your deployed link here if available)*
> Example: [https://roster-system.vercel.app](https://roster-system.vercel.app)

---

## 📌 Overview

This application implements a roster scheduling interface featuring:

* Department-based scheduling columns
* Time-slot grid positioning
* Live & Planner view switching
* Shift details modal
* Sidebar user filtering
* Clean, responsive dashboard layout

The focus of this implementation is **accuracy, maintainability, and UI precision**.

---

## 🛠 Tech Stack

* **Next.js (App Router)**
* **TypeScript**
* **Chakra UI (v3 / Ark-based components)**
* **iconsax-reactjs**
* **react-icons**

No unnecessary third-party libraries were introduced.
All features are implemented using the required stack only.

---

## ✨ Implemented Features

### ✅ Core Functionality

* 📅 Calendar day view layout
* ⏱ Time-slot based grid system
* 🏢 Department columns
* 🔁 Previous / Current / Next day navigation
* 🔄 Live & Planner mode switching
* 📋 Shift details modal (grouped by hour)
* 🧑‍⚕️ Sidebar roster with filters (All / Available / On Leave)
* 📥 Dropdown view selector
* 🧭 Clean header toolbar with segmented controls
* 🟢 Loading & empty states

---

### 🎨 UI / UX Details

* Pixel-aligned implementation matching Figma
* Absolute-positioned shift blocks based on time
* Color-coded shift cards (orange, green, yellow)
* Modal with proper z-index layering
* Blurred overlay backdrop
* Responsive spacing and layout adjustments
* Consistent 14px typography for filter tabs
* Clean vertical separators in grouped controls

---

### ⭐ Bonus Enhancements

* Dynamic shift grouping inside modal
* Live vs Planner dataset switching
* Time-to-pixel conversion logic abstraction
* Component separation for scalability

---

## 🧠 Architecture & Design Decisions

This project follows a feature-based architecture.

```
app/
  (dashboard)/
    roster/
      page.tsx        # Page composition + state management

src/
  features/
    roster/
      types.ts        # TypeScript models
      mock.ts         # Mock data
      time.ts         # Time calculation utilities
      ui/
        ModeBar.tsx
        PlannerToolbar.tsx
        RosterSidebar.tsx
        PlannerGrid.tsx
        ShiftListDialog.tsx
```

### Architectural Highlights

* **Page-level state management** for view mode, selected date, and modal visibility
* **Isolated time calculation logic** for accurate shift placement
* **Presentational components separated from business logic**
* **Strong typing** for shifts, departments, and roster users
* **Reusable UI components**

This structure ensures clarity, scalability, and maintainability.

---

## ⏱ Time-Based Positioning Logic

Shift blocks are positioned using:

* Conversion of start/end time into minutes
* Fixed slot height calculation
* Absolute positioning inside department columns

This allows:

* Accurate vertical placement
* Flexible time ranges
* Smooth rendering of overlapping time blocks

---

## 🖥 Getting Started

### 1️⃣ Install dependencies

```
npm install
```

### 2️⃣ Run development server

```
npm run dev
```

Visit:

```
http://localhost:3000
```

---

## 🏗 Production Build

```
npm run build
npm start
```

---

## 🌍 Deployment

The project can be deployed using:

* Vercel (recommended)
* Netlify
* Any Node-compatible hosting provider

---

## 📦 Code Quality

* Fully typed with TypeScript
* No unused dependencies
* Clean component separation
* No console errors
* Responsive layout handling
* Structured commit history

---

## 🎯 What This Project Demonstrates

* Strong understanding of React & Next.js fundamentals
* Proper state ownership and component composition
* UI precision and design interpretation
* Clean, scalable architecture
* Professional code organization

---

## 👨‍💻 Author

Zoaka Bata Bukar
Frontend Developer

---

If you would like any adjustments (company branding, personal portfolio links, deployment URL, or GitHub link), update the relevant sections above before submission.
