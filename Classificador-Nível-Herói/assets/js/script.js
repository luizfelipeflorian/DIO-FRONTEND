let herois = [];

function determinarNivel(xp) {
    if (xp < 1000) {
        return "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        return "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        return "Prata";
    } else if (xp >= 6001 && xp <= 7000) {
        return "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        return "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        return "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        return "Imortal";
    } else if (xp >= 10001) {
        return "Radiante";
    } else {
        return "Nível Indefinido";
    }
}

function consultarNivel() {
    let nomeHeroi = document.getElementById('username').value.trim();
    let xpHeroi = parseInt(document.getElementById('userxp').value);

    if (nomeHeroi === "") {
        alert("Por favor, insira o nome do herói.");
        return;
    }

    if (isNaN(xpHeroi)) {
        alert("Por favor, insira um valor numérico para XP.");
        return;
    }

    let nivel = determinarNivel(xpHeroi);

    herois.push({ nome: nomeHeroi, xp: xpHeroi });

    document.getElementById("result").style.display = "block";
    document.getElementById("form").style.display = "none";

    let resultadoDiv = document.getElementById('result');
    resultadoDiv.innerHTML = `O Herói de nome <strong>${nomeHeroi}</strong> está no nível de <strong>${nivel}</strong>.` +
        `<br><button id="btn-novo" style="margin-top: 20px; padding: 8px 16px; font-size: 1rem;">Consultar outro herói</button>`;

    document.getElementById('btn-novo').addEventListener('click', () => {
        document.getElementById('username').value = '';
        document.getElementById('userxp').value = '';
        document.getElementById('result').style.display = 'none';
        document.getElementById('form').style.display = 'block';
    });
}