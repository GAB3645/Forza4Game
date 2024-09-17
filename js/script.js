function CreaTabella() {
    const righe = 6; 
    const colonne = 7;
    const tabella = document.createElement('table');
    
    for (let r = 0; r < righe; r++) {
        const tr = document.createElement('tr');
        for (let c = 0; c < colonne; c++) {
            const td = document.createElement('td');
            td.style.width = '100px';
            td.style.height = '100px';
            td.style.border = '4px solid blue';
            td.style.backgroundColor = 'white';

            td.addEventListener('click', function() {
                this.style.backgroundColor =  'yellow' ;
            });

            tr.appendChild(td);
        }

        tabella.appendChild(tr);
    }   
    document.getElementById('campo').appendChild(tabella);

}

window.onload = CreaTabella;





