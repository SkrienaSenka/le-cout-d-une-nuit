const API = 'le-cout-d-une-nuit.osc-fr1.scalingo.io';

let pseudo;
let clientSocket;
let port;

function host() {
    const form = cleanForm()

    const nameInput = document.createElement('input');
    nameInput.setAttribute('id', 'pseudo');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('placeholder', 'Pseudonyme');
    nameInput.setAttribute('class', 'textInput');

    const submitButton = document.createElement('button');
    submitButton.setAttribute('class', 'neonText');
    submitButton.appendChild(document.createTextNode('Créer la salle'));
    submitButton.addEventListener('click', createGame);

    form.appendChild(nameInput);
    form.appendChild(submitButton);
}

function join() {
    const form = cleanForm()

    const nameInput = document.createElement('input');
    nameInput.setAttribute('id', 'pseudo');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('placeholder', 'Pseudonyme');
    nameInput.setAttribute('class', 'textInput');

    const roomInput = document.createElement('input');
    roomInput.setAttribute('id', 'roomCode');
    roomInput.setAttribute('type', 'text');
    roomInput.setAttribute('placeholder', 'Code de la salle');
    roomInput.setAttribute('class', 'textInput');

    const submitButton = document.createElement('button');
    submitButton.setAttribute('class', 'neonText');
    submitButton.appendChild(document.createTextNode('Rejoindre la partie'));
    submitButton.addEventListener('click', joinGame);

    form.appendChild(nameInput);
    form.appendChild(roomInput);
    form.appendChild(submitButton);
}

function createGame() {
    pseudo = document.getElementById('pseudo').value;
    const form = cleanForm()
    sendGameRequest().then(data => {
        port = data.port;
        clientSocket = new WebSocket('ws://' + API + ':' + port);
        clientSocket.onmessage = function (evt) {
            if ('message' === evt.data.type) {
                const messages = document.getElementById('messages');
                messages.prepend(document.createElement('p').appendChild(document.createTextNode(
                    evt.data.payload.sender + ' : ' + evt.data.payload.message
                )));
            }
        };

        const code = document.createElement('p');
        code.appendChild(document.createTextNode(port));
        form.appendChild(code);
        createMessagesField();
    });
}

async function sendGameRequest() {
    const response = await fetch('http://' + API + '/create-game', { method: 'POST' });
    return await response.json();
}

function joinGame() {
    pseudo = document.getElementById('pseudo').value;
    const port = document.getElementById('roomCode').value;
    createMessagesField();
    clientSocket = new WebSocket('ws://' + API + ':' + port);
    clientSocket.onmessage = function (evt) {
        const messages = document.getElementById('messages');
        messages.prepend(document.createElement('p').appendChild(document.createTextNode(evt.data)));
    };
}

function createMessagesField() {
    const messagesDiv = document.createElement('div');
    messagesDiv.setAttribute('id', 'messages');

    const messageInput = document.createElement('input');
    messageInput.setAttribute('id', 'newMessage');
    messageInput.setAttribute('type', 'text');
    messageInput.setAttribute('placeholder', 'Nouveau message...');

    const messageSubmit = document.createElement('button');
    messageSubmit.appendChild(document.createTextNode('Envoyer'));
    messageSubmit.addEventListener('click', sendMessage);

    messagesDiv.appendChild(messageInput);
    messagesDiv.appendChild(messageSubmit);

    document.getElementsByTagName('body')[0].appendChild(messagesDiv);
}

function sendMessage() {
    const message = document.getElementById('newMessage').value;
    fetch('http://' + API + '/message', {
        method: 'POST',
        body: JSON.stringify({ port, message, pseudo })
    });
}

function cleanForm() {
    const form = document.getElementById('baseForm');
    do {
        form.removeChild(form.firstChild);
    } while (form.firstChild !== null);
    return form;
}
