function sendCommand(command) {
    // Отправка команды через Telegram WebApp API
    Telegram.WebApp.sendData(command);
    Telegram.WebApp.close();
}
