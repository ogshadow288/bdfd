const TelegramBot = require('node-telegram-bot-api');
const token = '7057786694:AAGUB95aNfg7L0e6t8ghanxExOrJEalzmuI';

// Create a bot instance
const bot = new TelegramBot(token, { polling: true });

// Listen for the /start command
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Welcome! You can use the /chatid command to get your chat ID.');
});

// Listen for the /chatid command
bot.onText(/\/chatid/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, `Your chat ID is: ${chatId}`);
});

// Listen for any message
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    console.log(`Received message from ${chatId}: ${msg.text}`);
});
