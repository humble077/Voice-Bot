# Voice Bot

A voice-enabled chatbot that uses OpenAI's GPT-3.5 API to respond to user queries through speech.

## Features

- Voice input using Web Speech API
- Voice output using Speech Synthesis
- Real-time conversation display
- Modern Material-UI interface
- Responsive design

## Prerequisites

- Node.js (v14 or higher)
- OpenAI API key

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd voice-bot
```

2. Install dependencies:
```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd client
npm install
cd ..
```

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Add your OpenAI API key to `.env`:
     ```
     OPENAI_API_KEY=your-api-key-here
     ```
   - Get your API key from [OpenAI's platform](https://platform.openai.com/account/api-keys)

4. Start the development servers:
```bash
# Start backend server (port 5002)
npm run dev

# In a new terminal, start frontend server (port 3000)
cd client
npm start
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

1. Click the microphone button to start speaking
2. Ask your question
3. The bot will respond both in text and voice

## Security Note

- Never commit your `.env` file or share your API key
- The `.env` file is already added to `.gitignore`
- Always use environment variables for sensitive information

## Technologies Used

- React with TypeScript
- Material-UI
- Express.js
- OpenAI API
- Web Speech API
- Axios

## License

MIT 