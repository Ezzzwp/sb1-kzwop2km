const fs = require('fs');
const path = require('path');

// Load translation files
let translations = {};
try {
  const enTranslations = JSON.parse(fs.readFileSync(path.join(__dirname, '../public/locales/en/translation.json'), 'utf8'));
  const kaTranslations = JSON.parse(fs.readFileSync(path.join(__dirname, '../public/locales/ka/translation.json'), 'utf8'));
  
  translations = {
    en: enTranslations,
    ka: kaTranslations
  };
} catch (error) {
  console.error('Error loading translations:', error);
  translations = { en: {}, ka: {} };
}

// Translation helper function
function t(key, language = 'en', params = {}) {
  const keys = key.split('.');
  let value = translations[language] || translations.en;
  
  for (const k of keys) {
    value = value?.[k];
    if (!value) break;
  }
  
  // Fallback to English if Georgian translation not found
  if (!value && language === 'ka') {
    value = translations.en;
    for (const k of keys) {
      value = value?.[k];
      if (!value) break;
    }
  }
  
  // Replace parameters in the string
  if (typeof value === 'string' && params) {
    Object.keys(params).forEach(param => {
      value = value.replace(`{{${param}}}`, params[param]);
    });
  }
  
  return value || key;
}

async function generateChatResponse(messages, propertyContext, language = 'en') {
  try {
    // Get the last user message
    const lastMessage = messages[messages.length - 1];
    const userMessage = lastMessage?.content?.toLowerCase() || '';

    // Property-specific responses
    if (propertyContext) {
      if (userMessage.includes('price') || userMessage.includes('cost') || userMessage.includes('ფასი')) {
        return t('chatBot.responses.pricing', language, { propertyTitle: propertyContext });
      }
      
      if (userMessage.includes('location') || userMessage.includes('where') || userMessage.includes('address') || userMessage.includes('მდებარეობა')) {
        return t('chatBot.responses.location', language, { propertyTitle: propertyContext });
      }
      
      if (userMessage.includes('amenities') || userMessage.includes('features') || userMessage.includes('კეთილმოწყობა')) {
        return t('chatBot.responses.amenities', language, { propertyTitle: propertyContext });
      }
      
      if (userMessage.includes('floor plan') || userMessage.includes('layout') || userMessage.includes('rooms') || userMessage.includes('ოთახები')) {
        return t('chatBot.responses.floorPlan', language, { propertyTitle: propertyContext });
      }
      
      if (userMessage.includes('construction') || userMessage.includes('completion') || userMessage.includes('მშენებლობა')) {
        return t('chatBot.responses.construction', language, { propertyTitle: propertyContext });
      }
    }

    // General responses
    if (userMessage.includes('hello') || userMessage.includes('hi') || userMessage.includes('გამარჯობა')) {
      return t('chatBot.responses.greeting', language);
    }
    
    if (userMessage.includes('help') || userMessage.includes('დახმარება')) {
      return t('chatBot.responses.help', language);
    }
    
    if (userMessage.includes('contact') || userMessage.includes('phone') || userMessage.includes('email') || userMessage.includes('კონტაქტი')) {
      return t('chatBot.responses.contact', language);
    }
    
    if (userMessage.includes('investment') || userMessage.includes('roi') || userMessage.includes('return') || userMessage.includes('ინვესტიცია')) {
      return t('chatBot.responses.investment', language);
    }
    
    if (userMessage.includes('financing') || userMessage.includes('mortgage') || userMessage.includes('loan') || userMessage.includes('დაფინანსება')) {
      return t('chatBot.responses.financing', language);
    }
    
    if (userMessage.includes('legal') || userMessage.includes('documents') || userMessage.includes('paperwork') || userMessage.includes('იურიდიული')) {
      return t('chatBot.responses.legal', language);
    }

    // Default response
    return t('chatBot.responses.default', language);
    
  } catch (error) {
    console.error('Error generating chat response:', error);
    return t('chatBot.errorMessage', language);
  }
}

module.exports = { generateChatResponse };