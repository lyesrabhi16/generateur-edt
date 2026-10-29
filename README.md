# Générateur EDT (AGEMP)

Web application that automatically generates university timetables (*emplois du temps*) for a section, from its modules, teachers, rooms and time slots, and lets administrators, teachers and students manage and view them. Built by a team of four as a university project.

## Features

- Role-based access (administrator, teacher, student) with JWT cookie authentication
- CRUD management of specialities, sections, groups, modules, rooms (amphitheatres, TD and TP rooms), sessions and time slots
- Teacher availability: occupied slots and preferred time slots
- **Timetable generation** per section and semester, configurable by constraints: start/end time, slot length, break between slots, max consecutive sessions, max lectures per day, optional shuffling
- Export of timetables to Excel (`exceljs`) and sending by email
- CLI script to create the first administrator account

## Tech stack

| Layer | Technologies |
| --- | --- |
| Backend | Node.js, Express, PostgreSQL (`pg-promise`), JWT, bcrypt, Nodemailer, ExcelJS |
| Frontend | React 18, Vite, DaisyUI, Axios, React Router |

## Project structure

```
backend/     Express API (routers, controllers, validators, DB access, generation/)
frontend/    React application (Admin, teacher/student and login pages)
autres/      Design documents: SQL schema and seed data, UML class diagram, specification, Postman/Thunder collections
constants.js Shared enums (roles, room types, session types, weekdays)
```

The relational model, use-case diagram and specification are in [autres/pdf](autres/pdf).

## Getting started

### Prerequisites

Node.js 18+, PostgreSQL.

### 1. Database

```bash
createdb agemp
psql agemp -f autres/DB/creation_agemp_db.sql
psql agemp -f autres/DB/data_agemp_db.sql     # optional sample data
```

### 2. Configure the backend

Copy `backend/.env.txt` to `backend/.env` and fill in:

```
ServerPort = 3000
DBHost = localhost
DBPort = 5432
DBName = agemp
DBUser = <user>
DBPass = <password>
```

The JWT and Gmail settings used for email sending are described in the comments of `backend/email/sendEmail.js`.

### 3. Run

```bash
npm run createAdmin     # interactive: creates the first administrator
npm run backend         # API on http://localhost:3000
npm run frontend        # app on http://localhost:5000
```

> The frontend currently calls the API at `http://localhost:3000`. Keep the backend on that port.

## API

Every route except authentication requires a valid JWT cookie, and administrator-only routes are additionally protected. Request collections for testing are in [autres/backend_requetes_test](autres/backend_requetes_test).

## Known limitations

- The API base URL is hardcoded in the frontend and should move to an environment variable.
- No automated tests yet.
- No license file has been added.

## Authors

Lyes Rabhi, Massin S., Kenza Tikherbatine and a fourth contributor.
