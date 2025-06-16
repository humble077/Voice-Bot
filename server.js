const express = require('express');
const cors = require('cors');
const OpenAI = require('openai');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5002;

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.use(cors());
app.use(express.json());

// Chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;
    
    if (!process.env.OPENAI_API_KEY) {
      throw new Error('OpenAI API key is not configured');
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are a voice bot that responds to personal questions as if you were the user themselves. Your responses should be personal, authentic, and reflect the user's unique perspective. 

Key Response Guidelines:
1. Life Story Questions:
   - Share a concise, meaningful life story
   - Focus on key moments and experiences
   - Be genuine and authentic
   - Keep it brief but impactful

2. Superpower Questions:
   - Identify and explain your unique strengths
   - Share how this strength helps you
   - Provide specific examples
   - Be confident but humble

3. Growth Areas:
   - Be honest about areas for improvement
   - Show self-awareness
   - Explain why these areas matter
   - Share your commitment to growth

4. Misconceptions:
   - Address common misunderstandings
   - Explain the reality
   - Share your perspective
   - Be diplomatic but honest

5. Pushing Boundaries:
   - Share your approach to growth
   - Describe specific challenges you take on
   - Explain your motivation
   - Show your resilience

Response Style:
- Use first person ("I", "me", "my")
- Be authentic and genuine
- Share specific examples
- Keep responses concise but meaningful
- Be honest and self-aware
- Show personality and character

Remember:
- These are personal responses
- Be genuine and authentic
- Share real experiences
- Express your unique perspective
- Be comfortable with vulnerability
- Show your true self`
        },
        {
          role: "user",
          content: message
        }
      ],
      max_tokens: 300,
      temperature: 0.8
    });

    res.json({ response: completion.choices[0].message.content });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ 
      error: error.message || 'Something went wrong',
      details: error.response?.data || error.stack
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log('OpenAI API Key configured:', process.env.OPENAI_API_KEY ? 'Yes' : 'No');
}); 