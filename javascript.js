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