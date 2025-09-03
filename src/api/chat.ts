import { generateChatResponse, ChatMessage } from '../lib/chat';

export async function POST(request: Request) {
  try {
    const { messages, propertyContext, language } = await request.json();
    
    const response = await generateChatResponse(messages, propertyContext, language);
    
    return new Response(JSON.stringify({ message: response }), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Chat API error:', error);
    return new Response(
      JSON.stringify({ 
        message: "I apologize, but I'm having trouble connecting right now. Please contact us directly at +995 599 411 188 or Outflat.sale@gmail.com" 
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}