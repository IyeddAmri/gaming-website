function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const chatBox = document.getElementById('chatBox');

    const message = messageInput.value.trim();

    if (message !== '') {
        const newMessage = document.createElement('div');
        newMessage.className = 'message';
        newMessage.textContent = message;

        chatBox.appendChild(newMessage);

        // Clear the input field after sending the message
        messageInput.value = '';

        // Scroll to the bottom of the chat box to show the latest message
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}
