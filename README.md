# Personal Portfolio

A modern and responsive developer portfolio built to showcase my skills, projects, achievements, certifications, and professional journey as a Full-Stack Developer and Game Developer.

## About

This portfolio serves as a central hub for my work, allowing visitors to explore my projects, technical skills, certifications, and contact information. It includes an admin panel for managing portfolio content dynamically.

## Features

* Responsive design for desktop, tablet, and mobile devices
* Modern dark-themed UI
* Project showcase section
* Skills section with categorized technologies
* Achievements and certifications gallery
* Contact section
* Admin dashboard for content management
* Authentication-protected admin routes
* Dynamic data fetching from backend APIs
* Image upload and management system

## Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* React Router

### Backend

* Node.js
* Express.js

### Database

* MongoDB

### Deployment

* Vercel (Frontend)
* Render (Backend)

## Project Structure

```
portfolio/
│
├── public/
│
├── src/
│   ├── components/
│   ├── services/
│   ├── pages/
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── server.js
│
└── README.md
```

## Installation

### Clone the repository

```bash
git clone https://github.com/i-am-anujsingh/portfolio.git
```

### Navigate to the project

```bash
cd portfolio
```

### Install frontend dependencies

```bash
npm install
```

### Install backend dependencies

```bash
cd server
npm install
```

## Environment Variables

### Frontend (.env)

```env
VITE_BACKEND_API=your_backend_url
```

### Backend (.env)

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

## Running Locally

### Frontend

```bash
npm run dev
```

### Backend

```bash
npm run server
```

## Future Improvements

* GitHub contribution graph integration
* Project filtering and search
* Blog section
* Visitor analytics dashboard
* Resume download feature
* Cloud image hosting integration
* Project screenshots carousel

## Author

### Anuj Singh

* Full-Stack Developer
* Game Developer
* BCA Student

GitHub:
https://github.com/i-am-anujsingh