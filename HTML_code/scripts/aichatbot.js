const apiKey = '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'; // Replace with your OpenAI API key

const chatMessages = document.querySelector('.chat-messages');
const userInput = document.querySelector('#user-input');
const sendButton = document.querySelector('#send-button');

sendButton.addEventListener('click', () => {
    const userMessage = userInput.value;
    displayUserMessage(userMessage);
    sendMessageToChatbot(userMessage);
    userInput.value = ''; // Clear the input field
});

function displayUserMessage(message) {
    const userMessageDiv = document.createElement('div');
    userMessageDiv.className = 'User_message';
    userMessageDiv.innerHTML = `
        <span class="user">User_Name:</span>
        <span class="text">${message}</span>
    `;
    chatMessages.appendChild(userMessageDiv);
}

function displayBotMessage(message) {
    const botMessageDiv = document.createElement('div');
    botMessageDiv.className = 'AI_messages';
    botMessageDiv.innerHTML = `
        <span class="user">ChatBot:</span>
        <span class="text">${message}</span>
    `;
    chatMessages.appendChild(botMessageDiv);
}

async function sendMessageToChatbot(message) {
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                messages: [
                    { role: 'system', content: 'You are a chatbot' },
                    { role: 'user', content: message },
                ],
            }),
        });

        console.log('Request Data:', JSON.stringify({
            messages: [
                { role: 'system', content: 'You are a chatbot' },
                { role: 'user', content: message },
            ],
        }));

        if (response.ok) {
            const data = await response.json();
            console.log('API Response Data:', data);
            const botResponse = data.choices[0].message.content;
            displayBotMessage(botResponse);
        } else {
            console.error('Error sending message to the API:', response.status, response.statusText);

            // Handle the error by displaying a general error message to the user
            const errorMessage = "An error occurred while processing your request. Please try again later.";
            displayBotMessage(errorMessage);
        }
    } catch (error) {
        console.error('An error occurred:', error);

        // Handle the error by displaying a general error message to the user
        const errorMessage = "An error occurred while processing your request. Please try again later.";
        displayBotMessage(errorMessage);
    }
}
