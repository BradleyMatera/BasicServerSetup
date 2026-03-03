# Employee Time Tracking

A simple Express backend with a static HTML frontend for tracking employee work hours. Supports user registration, login, clock-in/clock-out, and timesheet retrieval. Data is stored in-memory (no database required).

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express 4
- **Auth / Password hashing:** bcryptjs
- **HTTP utilities:** cors, morgan, dotenv

## Prerequisites

- Node.js v14 or higher
- npm (comes with Node.js)

## Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/BradleyMatera/BasicServerSetup.git
cd BasicServerSetup

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Edit .env and fill in your values

# 4. Start the development server
npm run dev
```

The server starts at `http://localhost:3000` (or the `PORT` value in your `.env`).

## Environment Variables

Copy `.env.example` to `.env` and set the following values:

| Variable     | Description                    | Default |
|--------------|--------------------------------|---------|
| `PORT`       | Port the server listens on     | `3000`  |
| `JWT_SECRET` | Secret used for future JWT use | —       |

## API Routes

Base URL: `http://localhost:3000/api`

### Authentication

| Method | Route       | Description                        | Auth required |
|--------|-------------|------------------------------------|---------------|
| POST   | `/register` | Register a new user                | No            |
| POST   | `/login`    | Log in and receive your user ID    | No            |

**Register / Login request body:**
```json
{
  "username": "your_username",
  "password": "your_password"
}
```

### Time Tracking

Authenticated routes require the `x-user-id` header set to the numeric user ID returned by `/login`.

| Method | Route        | Description                  | Auth required |
|--------|--------------|------------------------------|---------------|
| POST   | `/clockin`   | Record a clock-in timestamp  | Yes           |
| POST   | `/clockout`  | Record a clock-out timestamp | Yes           |
| GET    | `/timesheet` | Retrieve all time entries    | Yes           |

**Auth header:**
```
x-user-id: <your-user-id>
```

## How Auth Works

After a successful `POST /api/login`, the server returns the user's numeric ID. Pass that ID in the `x-user-id` header on every subsequent authenticated request. The `authMiddleware.js` validates the header and attaches the user object to `req.user`.

## Project Structure

```
BasicServerSetup/
├── .env.example          # Safe-to-commit env template
├── package.json
├── app/
│   ├── app.js            # Express app setup & error handler
│   ├── controllers/
│   │   ├── userController.js
│   │   └── timeController.js
│   ├── models/
│   │   ├── userModel.js       # In-memory user store
│   │   └── timeEntryModel.js  # In-memory timesheet store
│   ├── routes/
│   │   └── index.js
│   └── utils/
│       └── authMiddleware.js
└── frontend/
    └── index.html
```

## Scripts

| Script           | Command                    | Description                         |
|------------------|----------------------------|-------------------------------------|
| `npm run dev`    | `nodemon app/app.js`       | Start server with auto-reload       |
| `npm start`      | `node app/app.js`          | Start server (production)           |
| `npm run deploy` | `gh-pages -d frontend`     | Deploy frontend to GitHub Pages     |

## Author

Bradley Matera

## License

ISC
