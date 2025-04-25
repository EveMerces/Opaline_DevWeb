async function save() {
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;  // corrigido para pegar o valor correto do campo senha
    let user_type_id = 1;

    if (email == '') {
        alert("Digite um endereço de email válido!");
        return;
    }

    if (senha == '' || senha.length < 6) {
        alert("Digite uma senha válida!");
        return;
    }

     dados = {
        "email": email,
        "password": senha,
        "user_type_id": user_type_id
    };

    let api = await fetch("https://go-wash-api.onrender.com/api/login", {
        method: "POST",
        body: JSON.stringify(dados),
        headers: {'content-type': 'application/json'}
    });

    if (api.ok) {
        let resp = await api.json();
        console.log(resp);
        alert("Login realizado com sucesso!");
        return;
    } else {
        let respError = await api.json();
        console.log(respError);
        if (respError.data.errors.email) {
            alert('Email incorreto.');
        }
        if (respError.data.errors.senha) {
            alert('Senha incorreta.');
        }
    }
}

function Login() {
    save();
}
