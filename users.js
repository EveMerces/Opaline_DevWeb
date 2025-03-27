//Declaração da função save, que pela palavra async, indica que a função irá retornar uma promise no futuro da aplicação.
async function save (){
    let name = document.getElementByID("nome").value;
    let email = document.getElementById("email").value;
    let birthday = document.getElementById("email").value;
    let password = document.getElementById("senha").value;
    const CpfCnpj = "25652054000162";
    let userType = 1
    let termos = 1
    
// Criação do objeto dados que recebe todas as informações que foram antes declaradas
    dados = {
          "name": name,
          "email": email,
          "user_type_id": userType,
          "password": password,
          "cpf_cnpj": CpfCnpj,
          "terms": termos,
          "birthday": birthday
    }
  // Chamada assíncrona com o fetch:
  // Criamos a variável api que através da função fetch faz a requisição HTTP de POST no endpoint do servidor(url).
  // A palavra await antes do fetch é usada para esperar pela resolução da promise, impedindo que o código prossiga até que a resposta seja obtida
  // A propriedade do body possui o próprio objeto dados que criamos anteriormente convertido para JSON, pois é o formato esperado pelo servidor.
  // O parâmetro headers é o cabeçalho da requisição que apenas informa que o corpo está no formato de JSON
    let api = await fetch("https://go-wash-api.onrender.com/api/user",{
      method: "POST",
      body:JSON.stringify(dados),
          headers: {'content-type':'aplication/json'}
      });
  // Verificações:
  // Temos um if que caso a resposta da API seja bem sucedida, utiliza o método json na api para ler a resposta e converter de volta para JSON
  // Utiliza-se também o await neste processo para aguardar a conversão da API.
  // Após tudo isso, exibe no console através do console.log a resposta da API.
      if (api.ok){
          let resp = await api.json();
          console.log(resp);
          return
      }
  // Caso a resposta não tenha sido bem sucedida:
  // Tenta convertar a resposta da API para JSON também através do método json e exibe este erro no console
      let respError = await api.json();
      console.log(respError)
  }


function cadastro(){
    alert("Usuário cadastrado!");
}
