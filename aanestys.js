document.addEventListener('DOMContentLoaded', () => {
    const voteSelect = document.getElementById('voteSelect');
    const newPollButton = document.getElementById('newPoll');
    const deletePollButton = document.getElementById('deletePoll');
    const submitVoteButton = document.getElementById('submitVote'); 
    const votesInput = document.getElementById('votes'); 

    function paivitaAaniListaus() {
        const aanestykset = JSON.parse(localStorage.getItem('aanestykset')) || [];
        voteSelect.innerHTML = '';
        aanestykset.forEach((aanestys, indeksi) => {
            const option = document.createElement('option');
            option.value = indeksi;
            option.textContent = `${aanestys.nimi} (Äänet: ${aanestys.aanet})`;
            voteSelect.appendChild(option);
        });
    }

    function tallennaAanestys(nimi) {
        const aanestykset = JSON.parse(localStorage.getItem('aanestykset')) || [];
        aanestykset.push({ nimi, aanet: 0 });
        localStorage.setItem('aanestykset', JSON.stringify(aanestykset));
        paivitaAaniListaus();
    }

    function poistaAanestys() {
        const valittuIndeksi = voteSelect.value;
        const aanestykset = JSON.parse(localStorage.getItem('aanestykset')) || [];
        aanestykset.splice(valittuIndeksi, 1);
        localStorage.setItem('aanestykset', JSON.stringify(aanestykset));
        paivitaAaniListaus();
    }

    function lisaaAanet() {
        const valittuIndeksi = voteSelect.value;
        const aanestysNimi = votesInput.value.trim(); 
        if (aanestysNimi === '') {
            alert('Syötä äänestettävän henkilön nimi.');
            return;
        }
    
        const aanestykset = JSON.parse(localStorage.getItem('aanestykset')) || [];
        
        const aanestys = aanestykset.find(aanestys => aanestys.nimi.toLowerCase() === aanestysNimi.toLowerCase());
        if (!aanestys) {
            alert('Antamasi nimi ei vastaa olemassa olevaa äänestystä.');
            return;
        }
    
        
        aanestys.aanet++;
        localStorage.setItem('aanestykset', JSON.stringify(aanestykset));
        paivitaAaniListaus();
    }

    newPollButton?.addEventListener('click', () => {
        const aanestysNimi = prompt('Anna uuden äänestyksen nimi:');
        if (aanestysNimi) tallennaAanestys(aanestysNimi);
    });

    deletePollButton?.addEventListener('click', poistaAanestys);
    submitVoteButton?.addEventListener('click', lisaaAanet);

    paivitaAaniListaus();
});