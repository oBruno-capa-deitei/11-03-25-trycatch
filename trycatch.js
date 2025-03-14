// const nome = "Bruno"; // declarando a variavel nome / Const - variavel de somente leitura 

// try { // faz a tentativa de execução desse comando
// // o try não paralisa o codigo, ele gonsegue continuar
//     nome = "Toledo"; // não pode ser executado pq a "const" não está declarando isso
//   } // encerra o bloco de codigos do try
// catch (err) {  // vai capitar o erro e mandar para variavel que tiver entre parentes
//     // a linha abaixo vai mandar um erro para o console;
// // e adicionando o erro que foi coletado pela variavel err que recebe as capituras de erro do "catch"
//     console.error("Opss! A variável somente leitura 'nome' não pode ser alterada. Veja o erro: " + err)
// }

// //quando vc executa um codigo ilegal, ele trava e da erro, nao deixa vc executar o resto dos codigos, por exemplo:
// //    nome = "Bruno"

function fazerLogin() { // declara a função fazer login
    // "let" a variavel é eliminada apos o bloco de codigo
    let usuario = document.getElementById("txtLogin"); //vai receber o elemento "txtLogin"
    let senha = document.getElementById("txtSenha");
    try { // inicia a tentaiva de execução de tudo que tiver dentro do bloco try
        if(usuario.value !== "usuario123") { // vai verificar o valor do elemento usuario, quando tem uma ! significa que é diferente
    // por exemplo  se oque o usuario for diferente de usuario 123 da erro (!=) diferente similar (!==) totalmente similar
        usuario.focus();
        throw new Error("Erro: Usuario Invalido."); // lança um novo erro se a senha for diferente
    }
    if(senha.value !== "senha123") {
        throw new Error("Erro: Senha incorreta.");
    }
       console.log("Login realizado com sucesso.");
   } catch (erro) { // vai capturar os erros e mandar para o console
       console.error(erro.message); // faz a mensagem de erro aparecer no console
 }
}