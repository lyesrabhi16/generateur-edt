# Generateur‑EDT

A web application to automatically generate timetables (*emploi du temps*) for educational institutions.  

## Table of Contents

- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Getting Started](#getting-started)  
- [Project Structure](#project-structure)  
- [Configuration](#configuration)  
- [Usage](#usage)  
- [Contributing](#contributing)  
- [License](#license)

## Features

- Automatically generate timetables based on courses, teachers, rooms, and time slots.  
- Web-based interface for easy input and visualization.  
- Modular and extendable architecture for customization.

## Tech Stack

- Frontend: HTML, CSS, JavaScript  
- Backend: Node.js + Express  
- Database: (Specify if used, e.g., MongoDB, MySQL)  
- Package manager: npm

## Getting Started

### Prerequisites

- Node.js and npm installed  
- Git installed  
- (If applicable) A running database server

### Installation

```bash
# Clone the repository
git clone https://github.com/lyesrabhi16/generateur-edt.git
cd generateur-edt

# Install backend dependencies
npm install --prefix backend

# Install frontend dependencies
npm install --prefix frontend
```

### Run

Start backend and frontend servers in separate terminals:

```bash
# Backend server
npm run --prefix backend start

# Frontend server
npm run --prefix frontend start
```

The frontend is usually available at `http://localhost:3000`.  

## Project Structure

```
generateur-edt/
│
├── backend/         # Backend application
│   ├── src/
│   ├── package.json
│   └── …
│
├── frontend/        # Frontend application
│   ├── src/
│   ├── package.json
│   └── …
│
├── .gitignore
└── README.md
```

## Configuration

- Use `.env` files to set environment variables for backend:
  - `PORT` for backend server  
  - `DATABASE_URL` if using a database  
  - Any API keys if needed  

- Update frontend configuration if necessary (API base URL, etc.).  

## Usage

1. Open your browser at the frontend URL.  
2. Enter your data: courses, rooms, teachers, and time slots.  
3. Click **Generate Timetable**.  
4. Export or download the timetable (PDF/Excel) if supported.

## Contributing

Contributions are welcome:

1. Fork the repository  
2. Create a new branch (`git checkout -b feature/my-feature`)  
3. Commit your changes (`git commit -m "Add awesome feature"`)  
4. Push to the branch (`git push origin feature/my-feature`)  
5. Open a Pull Request

Please follow the coding style and include tests when possible.

## License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.
