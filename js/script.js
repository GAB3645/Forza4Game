function creaTabellaVirtuale() {
    const righe = 6;
    const colonne = 7;
    const tabella = document.createElement('table');
    let turnoGiocatore = 'yellow';


    const matrice = [];
    for (let r = 0; r < righe; r++) {
        matrice[r] = [];
        for (let c = 0; c < colonne; c++) {
            matrice[r][c] = null;
        }
    }

    function gestisciClick(c) {
        for (let r = righe - 1; r >= 0; r--) {
            if (matrice[r][c] === null) {
                matrice[r][c] = turnoGiocatore;
                document.getElementById(`cell-${r}-${c}`).style.backgroundColor = turnoGiocatore;

                if (turnoGiocatore == 'yellow') {
                    turnoGiocatore = 'red';
                } else {
                    turnoGiocatore = 'yellow'
                }
                return;
            }
        }
    }

    function creaTabellaReale() {
        for (let r = 0; r < righe; r++) {
            const tr = document.createElement('tr');
            for (let c = 0; c < colonne; c++) {
                const td = document.createElement('td');
                td.id = `cell-${r}-${c}`;
                td.style.width = '100px';
                td.style.height = '100px';
                td.style.border = '1px solid white';
                td.style.borderRadius = '50%';
                td.style.backgroundColor = 'gray';

                td.addEventListener('click', function () {
                    gestisciClick(c);
                });

                tr.appendChild(td);
            }
            tabella.appendChild(tr);
        }
        document.getElementById('campo').appendChild(tabella);
    }

    creaTabellaReale();
}

creaTabellaVirtuale();
