//FUNÇÃO DOS BOTÕES
const header = document.querySelector('header')
function filtros(){
   const filtersDiv = document.createElement('div')
   filtersDiv.classList.add("filtersContainer")

   const todos = document.createElement('button')
   todos.classList.add("estiloGeralBotoes--mostrarTodos")
   todos.classList.add("estiloGeralBotoes")
   todos.innerText = "Todos Produtos"

   const hortifruit = document.createElement('button')
   hortifruit.classList.add("estiloGeralBotoes--filtrarHortifruit")
   hortifruit.classList.add("estiloGeralBotoes")
   hortifruit.innerText = "Hortifruit"

   const panificadora = document.createElement('button')
   panificadora.classList.add("estiloGeralBotoes--filtrarPanificadora")
   panificadora.classList.add("estiloGeralBotoes")
   panificadora.innerText = "Panificadora"
   
   const laticinios = document.createElement('button')
   laticinios.classList.add("estiloGeralBotoes--filtrarLaticinios")
   laticinios.classList.add("estiloGeralBotoes")
   laticinios.innerText = "Laticínios"

   header.append(filtersDiv)
   filtersDiv.append(todos, hortifruit, panificadora, laticinios)
   return filtersDiv
}



//FUNÇÃO DO ESPAÇO DE PESQUISA E DO BOTÃO DE PESQUISA
const filtersDiv = document.querySelector(".filtersContainer")
function pesquisa(){
   const containerBusca = document.createElement('div')
   containerBusca.classList.add("containerBuscaPorNome")

   const input = document.createElement('input')
   input.type = "text"
   input.id = "input"
   input.placeholder = "Pesquisar Por"
   input.classList.add("campoBuscaPorNome")

   const button = document.createElement('button')
   button.classList.add("estiloGeralBotoes--botaoBuscaPorNome")
   button.classList.add("estiloGeralBotoes")

   const img = document.createElement('img')
   img.classList.add("lupinha")
   img.src = "./src/img/search_FILL0_wght400_GRAD0_opsz48.png"
   img.alt = "lupinha"
   
   header.append(containerBusca)
   filtersDiv.appendChild(containerBusca)
   containerBusca.append(input, button)
   button.appendChild(img)
   return containerBusca
}
pesquisa()


//FUNÇÃO DA CAIXA DE PREÇO TOTAL
function caixaPreco(){
  const div = document.createElement('div')
  div.classList.add("caixaPreco")

  const descricao = document.createElement('p')
  descricao.classList.add("pDescricao")
  descricao.innerText = "Valor total dos produtos da sessão selecionada"
  
  const total = document.createElement('p')
  total.classList.add("total")
  total.innerText = "R$"

  const span = document.createElement('span')
  span.classList.add("precoTotal")
  span.innerText = "00.00"
  
  header.append(div)
  div.append(descricao, total)
  total.appendChild(span)
  return div
}
caixaPreco()


//FUNÇÃO DA LISTA DE PRODUTOS
  const ul = document.querySelector('.lista');
function criarProdutos (produto) {

  const li = document.createElement('li');
  li.classList.add("product")
  
  const imagem = document.createElement('img');
  imagem.classList.add("imagem")

  const h3 = document.createElement('h3');
  h3.classList.add("nomeProduto")

  const span = document.createElement('span')
  span.classList.add("categoria")

  const preco = document.createElement('p');
  preco.classList.add("preco")

  imagem.src = produto.img;
  h3.innerText = produto.nome;
  span.innerText = produto.secao;
  preco.innerText = `R$ ${produto.preco}.00`;
  li.append(imagem, h3, span, preco)
  
  return li
}
function listarProdutos(listaProdutos){
  const produtosFiltrados = filtrarPorObjeto(listaProdutos, 'produto')
    for (let i=0; i<produtosFiltrados.length; i++){
      const produto = produtosFiltrados[i]
      const produtoCard = criarProdutos(produto)
      ul.appendChild(produtoCard)
 }
}
listarProdutos(data)

//FILTROS DOS PRODUTOS

function listarHortifruit(listaProdutos){
  const hortifruitFiltrados = filtrarPorHortifruit(listaProdutos, 'Hortifruit')
    for (let i=0; i<hortifruitFiltrados.length; i++){
      const produto = hortifruitFiltrados[i]
      const produtoCard = criarProdutos(produto)
      ul.appendChild(produtoCard)
    }
      let somaHortifruit = 0
      for(let i = 0; i<hortifruitFiltrados.length; i++){
   somaHortifruit+=hortifruitFiltrados[i].preco
    let total = document.querySelector(".total")
  total.innerText = `R$${somaHortifruit}.00`
  div.append(total)
      }
  }
function listarPanificadora(listaProdutos){
  const panificadoraFiltrados = filtrarPorPanificadora(listaProdutos, 'Panificadora')
    for (let i=0; i<panificadoraFiltrados.length; i++){
      const produto = panificadoraFiltrados[i]
      const produtoCard = criarProdutos(produto)
      ul.appendChild(produtoCard)
 }
   let somaPanificadora = 0
    for(let i = 0; i<panificadoraFiltrados.length; i++){
    somaPanificadora+=panificadoraFiltrados[i].preco
    let total = document.querySelector(".total")
    total.innerText = `R$${somaPanificadora}.00`
    div.append(total)
 }
}
function listarLaticinios(listaProdutos){
  const laticiniosFiltrados = filtrarPorLaticinios(listaProdutos, 'Laticínio')
    for (let i=0; i<laticiniosFiltrados.length; i++){
      const produto = laticiniosFiltrados[i]
      const produtoCard = criarProdutos(produto)
      ul.appendChild(produtoCard)
 }
  let somaLaticinios = 0
  for(let i = 0; i<laticiniosFiltrados.length; i++){
  somaLaticinios+=laticiniosFiltrados[i].preco
  let total = document.querySelector(".total")
  total.innerText = `R$${somaLaticinios}.00`
  div.append(total)
}
}
function filtrarPorObjeto(listaProdutos, objeto){
  const produtosFiltrados = listaProdutos.filter((produto)=>{
    return produto.objeto === objeto
  })
  return produtosFiltrados
}

function filtrarPorHortifruit(listaProdutos, secao){
  const hortifruitFiltrados = listaProdutos.filter((produto)=>{
    return produto.secao === secao
  })
  return hortifruitFiltrados
}
function filtrarPorPanificadora(listaProdutos, secao){
  const panificadoraFiltrados = listaProdutos.filter((produto)=>{
    return produto.secao === secao
  })
  return panificadoraFiltrados
}
function filtrarPorLaticinios(listaProdutos, secao){
  const laticiniosFiltrados = listaProdutos.filter((produto)=>{
    return produto.secao === secao
  })
  return laticiniosFiltrados
}


//FILTRO POR CLICK
const buttonDiv = document.getElementById("filters") 
buttonDiv.addEventListener("click", event =>{
  const clique = event.target
  if(clique.id === 'hortifruit'){
    document.querySelector(".lista").innerHTML = ""
    listarHortifruit(data)

  }
  else if(clique.id === 'todos'){
    document.querySelector(".lista").innerHTML = ""
    listarProdutos(data)
  }
  else if(clique.id === 'panificadora'){
    document.querySelector(".lista").innerHTML = ""
    listarPanificadora(data)
  }
  else if(clique.id === 'laticinios'){
    document.querySelector(".lista").innerHTML = ""
    listarLaticinios(data)
    
  }
})

let div = document.querySelector(".caixaPreco")

function valorTotal(){
let soma = 0
  for(let i = 0; i<data.length; i++){
    soma+=data[i].preco
      let total = document.querySelector(".total")
    total.innerText = `R$${soma}.00`
    div.append(total)
    }
  } 
valorTotal()

buttonDiv.addEventListener("click", event =>{
  const clique = event.target
  let soma = 0
  for(let i = 0; i<data.length; i++){
    soma+=data[i].preco
    if(clique.id === 'todos'){
      let total = document.querySelector(".total")
    total.innerText = `R$${soma}.00`
    div.append(total)
    }
  }
})

function montarDados(listaProdutos) {
  const listaCards = document.querySelector(".lista");
  listaCards.innerHTML = "";
      listarProdutos(listaProdutos)
}

function filtrarPorCategoria(listaProdutos, secao) {
  const produtosFiltrados = listaProdutos.filter((produto) => {
      const produtoCategoria = produto.secao.toUpperCase().trim();
      secao = secao.toUpperCase().trim();

      return produtoCategoria.includes(secao)
  })

  return produtosFiltrados;
}

montarDados(data);
console.log();

  const inputPesquisa = document.getElementById("input")
  inputPesquisa.addEventListener("input", filtrarCards)

function filtrarCards(event){
  event.preventDefault()
  const value = document.getElementById("input").value
  const listaFiltrada = data.filter((produto)=>{
    return produto.nome.toLowerCase().includes(value.toLowerCase())
  })
  console.log(listaFiltrada)
  montarDados(listaFiltrada)
}
