function mudarcpf(){
    document.getElementById("mudar").placeholder="Insira o seu CPF";
}

function mudarcnpj(){
    document.getElementById("mudar").placeholder="Insira o seu CNPJ";
}

const form = window.document.querySelector("tela_cadastro.html");
let estadoBotao = true;

form.addEventListener('submit', function(event){
    event.preventDefault();

    let dataRaw = {
        name: document.querySelector("#name").value,
        user_type_id: 1,
        cpf_cnpj: document.querySelector("#mudar").value,
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value,
        birthday: document.querySelector("#data").value,
        terms: 1,
    }

    enviarDados(dataRaw);
});

async function enviarDados(data){
    estadoBotao = statusBotao(estadoBotao);
    console.log('Enviando requisição...');
    let jsonData = JSON.stringify(data);
    let url = "https://go-wash-api.onrender.com/api/user";
    let response =  await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: jsonData,
    });

    if(response.ok){
        let result = await response.json()
        alert("Cadastro realizado com sucesso!.\nAtive sua conta via email!")
        window.location.href = "./login.html";
    }else{
        estadoBotao = statusBotao(estadoBotao);
        alert("Falha ao realizar login. HTTP ERROR: ${response.status}");
    }
};

function statusBotao(estado){
    let botao = document.querySelector('#botaozinho');
    let load = window.document.querySelector('.loader');

    if(estado){
        console.log(botao)
        botao.style.display = "none";
        load.style.display = "block";
        return false;
    } else {
        botao.style.display = "block";
        load.style.display = "none";
        return true;
    }

};