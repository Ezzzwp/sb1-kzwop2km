const express = require('express');
const cors = require('cors');
const { generateChatResponse } = require('./src/lib/chat.js');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  try {
    const { messages, propertyContext, language } = req.body;
    
    const response = await generateChatResponse(messages, propertyContext, language);
    
    res.json({ message: response });
  } catch (error) {
    console.error('Chat API error:', error);
    res.status(500).json({ 
      message: "I apologize, but I'm having trouble connecting right now. Please contact us directly at +995 599 411 188 or Outflat.sale@gmail.com" 
    });
  }
});

app.listen(PORT, () => {
  console.log(`Chat server running on port ${PORT}`);
});