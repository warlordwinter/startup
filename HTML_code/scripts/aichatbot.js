// client.js
document.getElementById('send-button').addEventListener('click', async () => {
    const userMessage = document.getElementById('user-input').value;

    // Send message to your server
    const response = await fetch('/send-message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
    });

    if (response.ok) {
        const data = await response.json();
        displayBotMessage(data.botResponse);
    } else {
        console.error('Error sending message to the server:', response.status, response.statusText);
    }
});

function displayBotMessage(message) {
    const chatMessages = document.querySelector('.chat-messages');
    const botMessageDiv = document.createElement('div');
    botMessageDiv.className = 'AI_messages';
    botMessageDiv.innerHTML = `
        <span class="user">ChatBot:</span>
        <span class="text">${message}</span>
    `;
    chatMessages.appendChild(botMessageDiv);
}
