//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaAmigos = [];  // Array para armazenar os nomes dos amigos

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    let input = document.getElementById("amigo");  // Obtém o campo de input
    let nome = input.value.trim();  // Pega o nome digitado e remove espaços extras

    // Verifica se o nome está vazio
    if (nome === "") {
        alert("Digite um nome válido!");
        return;
    }

    // Verifica se o nome já foi adicionado
    if (listaAmigos.includes(nome)) {
        alert("Esse nome já foi adicionado!");
        return;
    }

    listaAmigos.push(nome);  // Adiciona o nome na lista
    input.value = "";  // Limpa o campo de input
    exibirLista();  // Exibe a lista atualizada
}

// Função para exibir a lista de amigos na tela
function exibirLista() {
    let lista = document.getElementById("listaAmigos");  // Obtém o elemento <ul> da lista
    lista.innerHTML = "";  // Limpa a lista antes de atualizar

    // Adiciona cada amigo na lista
    listaAmigos.forEach((amigo) => {
        let item = document.createElement("li");  // Cria um novo <li>
        item.textContent = amigo;  // Adiciona o nome ao item
        lista.appendChild(item);  // Adiciona o item à lista na tela
    });
}

// Função para sortear os amigos secretos
function sortearAmigo() {
    // Verifica se há pelo menos 2 amigos para fazer o sorteio
    if (listaAmigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para sortear!");
        return;
    }

    // Embaralha a lista de amigos
    let embaralhado = [...listaAmigos].sort(() => Math.random() - 0.5);

    let resultado = document.getElementById("resultado");  // Obtém o elemento <ul> para o resultado
    resultado.innerHTML = "";  // Limpa o resultado anterior

    // Realiza o sorteio e exibe quem tirou quem
    for (let i = 0; i < embaralhado.length; i++) {
        let amigo1 = embaralhado[i];
        let amigo2 = embaralhado[(i + 1) % embaralhado.length];  // Garante que o último amigo tire o primeiro

        let item = document.createElement("li");  // Cria um novo <li> para o resultado
        item.textContent = `${amigo1} → ${amigo2}`;  // Exibe quem tirou quem
        resultado.appendChild(item);  // Adiciona o item ao resultado
    }
}
