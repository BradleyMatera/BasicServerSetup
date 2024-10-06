🕒✨ Employee Time Tracking Application

<div align="center">


An elegant and efficient solution for tracking employee work hours.

</div>


🌟 Features

	•	🔒 User Authentication: Secure registration and login functionality.
	•	⏱️ Time Tracking: Easily clock in and clock out.
	•	📅 Timesheet Retrieval: View and manage your time entries.
	•	🌐 Frontend Interface: Sleek design using HTML and Tailwind CSS.
	•	🚀 Backend API: Robust RESTful API built with Express.js.
	•	🔄 CORS Enabled: Cross-Origin Resource Sharing support.
	•	💾 In-Memory Data Storage: Simplified data handling for demonstration purposes.

🛠️ Tech Stack

Backend

Frontend

📋 Prerequisites

	•	Node.js (v14.x or higher)
	•	npm (comes with Node.js)
	•	Git (optional, for cloning the repository)

📥 Installation

1️⃣ Clone the Repository

git clone https://github.com/BradleyMatera/BasicServerSetup.git

2️⃣ Navigate to the Project Directory

cd BasicServerSetup

3️⃣ Install Backend Dependencies

npm install

4️⃣ Set Up Environment Variables

	•	Create a .env file in the root directory.
	•	Add the following content:

PORT=3000



🚀 Running the Application

🎯 Running the Backend

🔧 Development Mode (with Nodemon)

npm run dev

🏭 Production Mode

npm start

The backend server will start running at http://localhost:3000.

🎨 Running the Frontend

🌐 Using http-server (Recommended)

	1.	Install http-server globally

npm install -g http-server


	2.	Navigate to the frontend/ directory

cd frontend


	3.	Start the Server

http-server -c-1


	4.	Access the Frontend
Open http://localhost:8080 (or the port shown in the terminal) in your browser.

🔥 Using Live Server Extension (Visual Studio Code)

	1.	Install Live Server
	•	Go to the Extensions tab in VS Code.
	•	Search for “Live Server” by Ritwick Dey.
	•	Install it.
	2.	Open index.html
	•	Right-click on index.html in the frontend/ directory.
	•	Select “Open with Live Server”.
	3.	Access the Frontend
It will open in your browser automatically.

📁 Project Structure

BasicServerSetup/
├── 📄 .env
├── 📄 package.json
├── 📁 app/
│   ├── 📄 app.js
│   ├── 📁 models/
│   │   ├── 📄 userModel.js
│   │   └── 📄 timeEntryModel.js
│   ├── 📁 controllers/
│   │   ├── 📄 userController.js
│   │   └── 📄 timeController.js
│   ├── 📁 routes/
│   │   └── 📄 index.js
│   └── 📁 utils/
│       └── 📄 authMiddleware.js
└── 📁 frontend/
    └── 📄 index.html

	•	app/: Contains the backend application code.
	•	frontend/: Contains the frontend files.

📚 API Documentation

🌐 Base URL

http://localhost:3000/api

🔑 Endpoints

📝 Register

	•	URL: /register
	•	Method: POST
	•	Headers: Content-Type: application/json
	•	Body:

{
  "username": "your_username",
  "password": "your_password"
}



🔐 Login

	•	URL: /login
	•	Method: POST
	•	Headers: Content-Type: application/json
	•	Body:

{
  "username": "your_username",
  "password": "your_password"
}



🟢 Clock In

	•	URL: /clockin
	•	Method: POST
	•	Headers: x-user-id: YOUR_USER_ID

🔴 Clock Out

	•	URL: /clockout
	•	Method: POST
	•	Headers: x-user-id: YOUR_USER_ID

📅 Get Timesheet

	•	URL: /timesheet
	•	Method: GET
	•	Headers: x-user-id: YOUR_USER_ID

💻 Frontend Usage

	1.	Access the Frontend
Open http://localhost:8080 in your browser.
	2.	Register a New User
	•	Fill in the Username and Password fields under Register.
	•	Click the Register button.
	•	A notification will inform you of the registration status.
	3.	Login
	•	Under Login, enter the Username and Password of an existing account.
	•	Click the Login button.
	•	Upon successful login, the Time Tracking section will become visible.
	4.	Clock In
	•	Click the Clock In button to start your work session.
	•	A notification will confirm the clock-in time.
	5.	Clock Out
	•	Click the Clock Out button to end your work session.
	•	A notification will confirm the clock-out time.
	6.	View Timesheet
	•	Click the View Timesheet button to see all your time entries.
	•	The timesheet will display a table of clock-in and clock-out times.
	7.	Logout
	•	Click the Logout button to end your session.
	•	You will be redirected back to the login and registration forms.

🎯 Future Improvements

	•	🗄️ Data Persistence: Integrate a database (e.g., MongoDB) for persistent data storage.
	•	🔑 Authentication Tokens: Implement JWT for secure authentication.
	•	🎨 Frontend Enhancement: Convert the frontend to React or Next.js.
	•	🛡️ Input Validation: Add validation for form inputs on both client and server sides.
	•	🐞 Error Handling: Improve error messages and handling mechanisms.
	•	📱 Responsive Design: Enhance the UI for better mobile support.
	•	✅ Unit Testing: Add tests for both backend and frontend components.

👨‍💻 Author

<div align="center">


Bradley Matera

Full Sail University Student

Amateur Back End Developer / Front End Developer

</div>


📄 License

This project is licensed under the MIT License.

📬 Contact

For any questions or suggestions, feel free to open an issue or contact me:

	•	Email: bradmatera@gmail.com
	•	GitHub: github.com/BradleyMatera

🙏 Acknowledgements

	•	Node.js
	•	Express.js
	•	Tailwind CSS
	•	Full Sail University
	•	Community Contributors



<div align="center">


Made with ❤️ by Bradley Matera

</div>
