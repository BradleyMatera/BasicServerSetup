# BasicServerSetup — Employee Time Tracking Backend

A basic Express backend for employee time tracking with JWT-style authentication.

## Stack
- Node.js + Express 4
- bcryptjs (password hashing)
- CORS + Morgan
- dotenv
- GitHub Pages (frontend deployment via gh-pages)

## Project Structure

```
BasicServerSetup/
├── app/
│   ├── app.js              # Express server entry point
│   ├── controllers/
│   │   ├── userController.js   # register, login
│   │   └── timeController.js   # clockIn, clockOut, getTimesheet
│   ├── models/             # Data models
│   ├── routes/
│   │   └── index.js        # Route definitions
│   └── utils/
│       └── authMiddleware.js   # isAuthenticated middleware
├── frontend/               # Static frontend
├── index.html              # Main HTML page (GitHub Pages root)
└── .env.example            # Environment variable template
```

## API Endpoints

| Method | Path | Auth Required | Description |
|--------|------|---------------|-------------|
| POST | `/api/register` | No | Register a new user |
| POST | `/api/login` | No | Log in and get a token |
| POST | `/api/clockin` | Yes | Clock in |
| POST | `/api/clockout` | Yes | Clock out |
| GET | `/api/timesheet` | Yes | Get timesheet data |

## Setup

1. Clone the repo
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file:
   ```bash
   cp .env.example .env
   ```
   Then edit `.env` with your values.

4. Start the dev server:
   ```bash
   npm run dev
   ```
   Or start in production mode:
   ```bash
   npm start
   ```

## Frontend (GitHub Pages)

The frontend is deployed to GitHub Pages. To deploy:
```bash
npm run deploy
```

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | `3000` | Port the server listens on |
| `JWT_SECRET` | — | Secret key for signing tokens |
