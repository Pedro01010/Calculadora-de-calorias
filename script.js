let horatitulo = document.getElementById('horaum');
let data = new Date();
let minutos = data.getMinutes();
let segundos = data.getSeconds();
let horas = data.getHours();
horatitulo.innerHTML = `${horas}:${minutos}:${segundos}`;
horatitulo.style.fontSize = '40px';
setInterval(() => {
    let data = new Date();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();
    let horas = data.getHours();
    horatitulo.innerHTML = `${horas}:${minutos}:${segundos}`;
}, 1000);
let tipo = []
let qtd= []
let hr=[]
function envia(){
    
    let alimento = document.getElementById('txtali').value
    let quantidade = document.getElementById('txtqtd').value
    let date= new Date()
    let hora =`${date.getHours()}:${data.getMinutes()}`
    let tabela = document.getElementById('tabela').getElementsByTagName('tbody')[0]
    
   
        
    tipo.push(alimento) 
    qtd.push(quantidade)
    
  
    let novaLinha = tabela.insertRow()
    let celulaAlimento = novaLinha.insertCell(0)
    let celulaQuantidade = novaLinha.insertCell(1)
    let celulaHora = novaLinha.insertCell(2)
    
    celulaAlimento.innerHTML = alimento
    celulaQuantidade.innerHTML = `${quantidade} (g)`
    celulaHora.innerHTML = `${hora}`

    document.getElementById('txtali').value = ''
    document.getElementById('txtqtd').value = ''
    document.getElementById('hora').value = ''
  } 
    
function salvarDados() {
    
    const dados = [];
  
    const linhas = document.querySelectorAll('#tabela tbody tr');
  
    linhas.forEach((linha) => {
      const alimento = linha.cells[0].textContent;
      const quantidade = linha.cells[1].textContent;
      const hora = linha.cells[2].textContent
      dados.push({ alimento, quantidade, hora });
    });
  
    localStorage.setItem('dadosTabela', JSON.stringify(dados));
  }
  
  function preencherTabela() {
    const dadosSalvos = localStorage.getItem('dadosTabela');
    if (!dadosSalvos) {
      return;
    }
  
    const dados = JSON.parse(dadosSalvos);
  
    const tbody = document.querySelector('#tabela tbody');
  
    dados.forEach((dado) => {
      const novaLinha = tbody.insertRow();
      novaLinha.insertCell().textContent = dado.alimento;
      novaLinha.insertCell().textContent = dado.quantidade;
      novaLinha.insertCell().textContent = dado.hora;
    });
  }
  
  const btnAdicionar = document.querySelector('#btnadc');
  btnAdicionar.addEventListener('click', salvarDados);
  
  window.addEventListener('load', preencherTabela);
   
  function limparTabela() {
    document.getElementById("tabela").innerHTML = "<thead><tr><th>Alimento</th><th>Quantidade</th><th>horário</th></tr></thead><tbody></tbody>";
    localStorage.clear();
}

// define o intervalo de 24 horas
var intervalo = setInterval(limparTabela, 86400000);
  

 
