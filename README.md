# Voice Bot - Personal Experience Assistant

A voice-enabled chatbot that responds to personal questions using OpenAI's GPT-3.5 API. This bot is designed to answer questions about personal experiences, life stories, strengths, growth areas, and more.

## 🌟 Features

- 🎤 Voice input using Web Speech API
- 🔊 Voice output using Speech Synthesis
- 💬 Real-time conversation display
- 🎨 Modern Material-UI interface
- 📱 Responsive design for all devices
- 🤖 AI-powered responses using OpenAI GPT-3.5

## 🚀 Quick Start (For Non-Technical Users)

### Option 1: Use the Live Demo
1. Visit the deployed version at: [Voice Bot Demo](https://voice-bot-humble077.vercel.app)
2. Click the microphone button to start speaking
3. Ask your question
4. Listen to the response

### Option 2: Run Locally (Step by Step)

#### Prerequisites
- [Node.js](https://nodejs.org/) (Download and install the LTS version)
- A modern web browser (Chrome recommended)
- OpenAI API key (Get it from [OpenAI Platform](https://platform.openai.com/account/api-keys))

#### Step-by-Step Setup

1. **Download the Project**
   - Click the green "Code" button on this page
   - Select "Download ZIP"
   - Extract the ZIP file to a location on your computer

2. **Set Up the Project**
   - Open Command Prompt (Windows) or Terminal (Mac/Linux)
   - Navigate to the project folder:
     ```bash
     # Windows
     cd path\to\Voice-Bot

     # Mac/Linux
     cd path/to/Voice-Bot
     ```

3. **Install Dependencies**
   - Run these commands one by one:
     ```bash
     npm install
     cd client
     npm install
     cd ..
     ```

4. **Configure API Key**
   - Create a new file named `.env` in the main folder
   - Add your OpenAI API key:
     ```
     OPENAI_API_KEY=your-api-key-here
     ```

5. **Start the Application**
   - Run these commands in two separate terminal windows:

     Terminal 1 (Backend):
     ```bash
     npm run dev
     ```

     Terminal 2 (Frontend):
     ```bash
     cd client
     npm start
     ```

6. **Use the Application**
   - Open your browser
   - Go to http://localhost:3000
   - Click the microphone button
   - Start speaking your question

## 💡 Example Questions

Try asking these questions:
1. "What should we know about your life story in a few sentences?"
2. "What's your #1 superpower?"
3. "What are the top 3 areas you'd like to grow in?"
4. "What misconception do your coworkers have about you?"
5. "How do you push your boundaries and limits?"

## 🔧 Troubleshooting

### Common Issues and Solutions

1. **Microphone Not Working**
   - Make sure you're using Chrome or Edge browser
   - Check if your microphone is properly connected
   - Allow microphone access when prompted

2. **No Response from Bot**
   - Check if your OpenAI API key is correctly set in the `.env` file
   - Ensure both backend and frontend servers are running
   - Check your internet connection

3. **Voice Not Working**
   - Make sure your system's audio is working
   - Try refreshing the page
   - Check if your browser supports Speech Synthesis

### Getting Help

If you encounter any issues:
1. Check the console for error messages (Press F12 in your browser)
2. Make sure all steps in the setup were followed correctly
3. Try restarting both the backend and frontend servers

## 🛠️ Technical Details

### Project Structure
```
voice-bot/
├── client/                 # Frontend React application
│   ├── public/            # Static files
│   └── src/               # React source code
├── server.js              # Backend Express server
├── package.json           # Project dependencies
└── .env                   # Environment variables
```

### Technologies Used
- Frontend: React, TypeScript, Material-UI
- Backend: Node.js, Express
- APIs: OpenAI GPT-3.5, Web Speech API
- Deployment: Vercel

## 📝 License

MIT License - feel free to use this project for your own purposes!

## 🙏 Acknowledgments

- OpenAI for providing the GPT-3.5 API
- Material-UI for the beautiful interface components
- Web Speech API for voice capabilities 