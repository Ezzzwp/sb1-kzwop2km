import fs from 'fs';
import path from 'path';

// Chat system configuration and utilities

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

// Load translation files
let translations: { [key: string]: any } = {};

try {
  const enTranslations = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'public/locales/en/translation.json'), 'utf8'));
  const kaTranslations = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'public/locales/ka/translation.json'), 'utf8'));
  
  translations = {
    en: enTranslations,
    ka: kaTranslations
  };
} catch (error) {
  console.error('Error loading translation files:', error);
  // Fallback translations
  translations = {
    en: { chatBot: { systemPrompt: "You are an AI assistant for Outflat.ge." } },
    ka: { chatBot: { systemPrompt: "თქვენ ხართ AI ასისტენტი Outflat.ge-სთვის." } }
  };
}

// Translation helper function
const t = (key: string, language: string = 'en', params: { [key: string]: string } = {}): string => {
  const keys = key.split('.');
  let value = translations[language] || translations['en'];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  if (typeof value !== 'string') {
    // Fallback to English if translation not found
    value = translations['en'];
    for (const k of keys) {
      value = value?.[k];
    }
  }
  
  if (typeof value === 'string') {
    // Replace parameters in the string
    let result = value;
    Object.keys(params).forEach(param => {
      result = result.replace(new RegExp(`{{${param}}}`, 'g'), params[param]);
    });
    return result;
  }
  
  return key; // Return key if translation not found
};

export const generateChatResponse = async (messages: ChatMessage[], propertyContext?: string, language: string = 'en'): Promise<string> => {
  // In a real implementation, this would call your preferred LLM API
  // For now, we'll simulate responses based on common queries
  
  const lastMessage = messages[messages.length - 1];
  const userMessage = lastMessage.content.toLowerCase();
  
  // Property-specific responses
  if (propertyContext) {
    if (userMessage.includes('price') || userMessage.includes('cost')) {
      return t('chatBot.responses.propertyPrice', language, { propertyTitle: propertyContext });
    }
    
    if (userMessage.includes('completion') || userMessage.includes('ready') || userMessage.includes('finish')) {
      return t('chatBot.responses.propertyCompletion', language, { propertyTitle: propertyContext });
    }
    
    if (userMessage.includes('roi') || userMessage.includes('investment') || userMessage.includes('return')) {
      return t('chatBot.responses.propertyROI', language, { propertyTitle: propertyContext });
    }
  }
  
  // General responses
  if (userMessage.includes('hello') || userMessage.includes('hi') || userMessage.includes('hey')) {
    return t('chatBot.responses.greeting', language);
  }
  
  if (userMessage.includes('location') || userMessage.includes('district') || userMessage.includes('area')) {
    return t('chatBot.responses.location', language);
  }
  
  if (userMessage.includes('payment') || userMessage.includes('financing') || userMessage.includes('mortgage')) {
    return t('chatBot.responses.payment', language);
  }
  
  if (userMessage.includes('legal') || userMessage.includes('documents') || userMessage.includes('process')) {
    return t('chatBot.responses.legal', language);
  }
  
  if (userMessage.includes('rental') || userMessage.includes('rent') || userMessage.includes('income')) {
    return t('chatBot.responses.rental', language);
  }
  
  if (userMessage.includes('contact') || userMessage.includes('call') || userMessage.includes('speak')) {
    return t('chatBot.responses.contact', language);
  }
  
  // Default response
  return t('chatBot.responses.default', language);
};