const TelegramBot = require('node-telegram-bot-api');

// Replace 'YOUR_BOT_TOKEN' with your actual bot token obtained from BotFather
const token = '7057786694:AAGUB95aNfg7L0e6t8ghanxExOrJEalzmuI';
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, `Your Telegram chat ID is: ${chatId}`);
});
