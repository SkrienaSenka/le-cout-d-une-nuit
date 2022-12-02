const API = 'le-cout-d-une-nuit.osc-fr1.scalingo.io';

let pseudo;
let clientSocket;

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

function cleanForm() {
    const form = document.getElementById('baseForm');
    do {
        form.removeChild(form.firstChild);
    } while (form.firstChild !== null);
    return form;
}

function createGame() {
    pseudo = document.getElementById('pseudo').value;
    const form = cleanForm()
    sendGameRequest().then(data => {
        clientSocket = new WebSocket('ws://' + API + ':' + data.port);
        clientSocket.onmessage = function (evt) {
            let message = evt.data;
            console.log(message);
        };

        const code = document.createElement('p');
        code.appendChild(document.createTextNode(data.port));
        form.appendChild(code);
    });
}

async function sendGameRequest() {
    const response = await fetch('http://' + API + '/create-game', { method: 'POST' });
    return await response.json();
}

function joinGame() {
    pseudo = document.getElementById('pseudo').value;
    const port = document.getElementById('roomCode').value;
    clientSocket = new WebSocket('ws://' + API + ':' + port);
    clientSocket.onmessage = function (evt) {
        let message = evt.data;
        console.log(message);
    };
}
