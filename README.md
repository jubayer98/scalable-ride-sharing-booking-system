# 🚖 Ride Management System – Frontend

A **production-grade**, fully responsive, and role-based frontend for a **Ride Booking Platform** (similar to Uber/Pathao) built with **React.js, Redux Toolkit, RTK Query, and TypeScript**.

This application provides tailored experiences for **Riders, Drivers, and Admins**, featuring secure authentication, real-time ride management, analytics dashboards, and polished UI/UX.

---

## 🌐 Live Demo

* **Frontend**: [Deployed Link](#)
* **Backend API**: [Deployed Link](#)

---

## 📌 Features

### 🔑 Public & Authentication

* Modern **landing pages** (Home, About Us, Features, Contact, FAQ).
* JWT-based **authentication & authorization**.
* Role-based login & registration (`Rider`, `Driver`, `Admin`).
* Persistent session storage and logout support.
* Account status handling for **blocked/suspended users**.

### 🚘 Rider Features

* Request rides with fare estimation & payment method.
* **Live tracking** of rides (map integration).
* Ride history with filters & search.
* Detailed ride timeline & driver info.
* Profile management (name, phone, password).

### 🚗 Driver Features

* Online/Offline toggle for availability.
* Accept/reject **ride requests**.
* Manage active rides (status updates).
* Earnings dashboard with charts (daily/weekly/monthly).
* Ride history with filters.
* Profile & vehicle management.

### 🛠 Admin Features

* Manage **users** (block/unblock riders, approve/suspend drivers).
* Ride oversight with advanced search & filters.
* Analytics dashboard (ride volume, revenue, driver activity).
* Profile and account settings.

### 🎨 UI/UX & Enhancements

* Fully **responsive design** with Tailwind CSS.
* Role-based navigation & profile dropdown.
* Skeleton loaders & lazy-loading for performance.
* Interactive carousels, charts, and ride cards.
* Global error handling & toast notifications.
* Accessibility-compliant components.
* **Emergency SOS button** (during active rides):

  * Call police, notify emergency contact, share live location.
  * Configurable emergency contacts.

---

## 🛠 Tech Stack

* **Framework**: React + TypeScript
* **State Management**: Redux Toolkit + RTK Query
* **Routing**: React Router DOM
* **Styling**: Tailwind CSS
* **Data Visualization**: Recharts
* **Notifications**: react-hot-toast
* **Backend**: Node.js, Express, MongoDB, JWT, bcrypt (separate repo)

---

## 📂 Project Structure

```bash
src/
 ├── app/               # Redux store & RTK Query setup
 ├── components/        # Shared UI components
 ├── features/          # Feature-based slices & services
 ├── pages/             # Page-level components (public & private)
 ├── layouts/           # Layouts (Public, Rider, Driver, Admin)
 ├── routes/            # Protected & role-based routes
 ├── hooks/             # Custom React hooks
 ├── utils/             # Helper functions
 └── types/             # TypeScript types & interfaces
```

---

## 🚀 Getting Started

### Prerequisites

* Node.js (>=18)
* npm / yarn / pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/ride-booking-frontend.git
cd ride-booking-frontend

# Install dependencies
npm install

# Create environment file
cp .env.example .env
```

### Environment Variables (`.env`)

```env
VITE_API_URL=https://your-backend-api.com
VITE_MAP_API_KEY=your_map_api_key_here
```

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

---

## 📊 Demo Credentials

Use the following test accounts:

* **Admin**: `admin@example.com` / `admin123`
* **Driver**: `driver@example.com` / `driver123`
* **Rider**: `rider@example.com` / `rider123`

---

## 📹 Demo Video

🎥 [Watch Walkthrough](#) (10–15 minutes demo covering all roles and features)

---

## 📝 Commit & Contribution Guidelines

* Minimum **10+ meaningful commits** with clear messages.
* Follow feature-branch workflow:

  * `feature/authentication`
  * `feature/ride-request`
* Use conventional commits (`feat:`, `fix:`, `docs:`, `refactor:`).

---

## 👨‍💻 Authors

* **Your Name** – [GitHub](https://github.com/your-username)

---

## 📜 License

This project is licensed under the MIT License.

---

👉 Would you like me to also draft a **matching README for the Backend repo**, so both repos look professional and consistent?
