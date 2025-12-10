//capturar o que for digitado no input
const input = document.querySelector("#text")

input.addEventListener("input", ()=>{
    console.log(input.value)
})

// chamei o botão e observei o evento de clicar
const button = document.querySelector(".add-item")
button.addEventListener("click", ()=> {

    // puxei o ul, criei a li e o id dinâmico
const ul = document.querySelector("ul")
const li = document.createElement("li")
const id = `op${ul.children.length + 1}`

//cria uma nova li com o valor do input
li.innerHTML = `<input type="checkbox" id=${id} name="compras" value=${input.value} >
        <label for=${id}>${input.value}</label> <button><img src="assets/Frame.svg" alt=""></button>`

        //impede a adição de itens vazios na lista
if (input.value === "" ) {
    alert("Por favor, insira um item na lista de compras.")
    return
}

// impede a adição de itens com apenas espaço na lista
if (input.value === " " ) {
    alert("Por favor, insira um item na lista de compras.")
    return
}

    //adiciona a li criada ao final da lista ul
     ul.appendChild(li)
    
    // limpa o input após adicionar o item
   input.value = ""

})  


// remover o item ao clicar no botão de lixeira
// chama a lista ul 
const ul = document.querySelector("ul")

// observa o evento de clique em toda a ul
ul.addEventListener("click", (event)=>{
// se o alvo do clique for um botão, remova a li corresponde (mais próximo do alvo do clique)
if (event.target.closest("button")) {
    const li = event.target.closest("li")
    li.remove()

    // criar o alerta de remoção do item ao clicar no botão de lixeira
    const body = document.querySelector("body")
    const div = document.createElement("div")

    //adicionei a estilização da classe alert
    div.classList.add("alert")


    // criei o conteúdo do alerta (HTML da div)
    div.innerHTML = `<div><img src="assets/warning-circle-filled.svg" alt=""><p>O item foi removido da lista</p> </div>
    <button class = "button-alert"><img src="assets/delete-small.svg" alt=""> </button>`

    //adiciona a div criada ao body 
    body.appendChild(div)

    // remove a div após 2 segundos
    const timeOut = setTimeout (()=> {
    
    div.remove()}, 2000)

    // remover a div ao clicar no botão de excluir do alerta
    div.addEventListener("click", (event)=> {
        if (event.target.closest("button")) {
            div.remove()
            clearTimeout (timeOut)
        }
  
    })

} } )
