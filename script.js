let fields = [];

let currentShape = 'cross';

function fillShape(id) {
 if (!fields[id]) {
    if (currentShape == 'cross') {
        currentShape = 'circle';
        document.getElementById('player1').classList.remove('playerInactive');
        document.getElementById('player2').classList.add('playerInactive');
    } else {
        currentShape = 'cross';
        document.getElementById('player2').classList.remove('playerInactive');
        document.getElementById('player1').classList.add('playerInactive');
    }

    fields[id] = currentShape;
    console.log(fields);
    draw();
}
}

function draw() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'cross') {
            document.getElementById(`cross-${i}`).classList.remove('d-none');
        } else if (fields[i] == 'circle') {
            document.getElementById(`circle-${i}`).classList.remove('d-none');
        }
    }
    checkForWin();
}

function checkForWin() {
    let winner;

    if(fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0];
    }

    if(fields[3] == fields[4] && fields[5] == fields[6] && fields[3]) {
        winner = fields[3];
    }

    if(fields[7] == fields[8] && fields[8] == fields[9] && fields[7]) {
        winner = fields[7];
    }

    if(fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
    }

    if(fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
    }

    if (winner) {
        console.log('Gewonnen: ', winner);
    }
}