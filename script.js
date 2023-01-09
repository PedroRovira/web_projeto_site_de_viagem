
const buyButton = document.getElementById('buy-button')
const cartForm = document.getElementById('cart-form')

const addTicket = document.getElementById('add-ticket')
const removeTicket = document.getElementById('remove-ticket')
const ticket = document.getElementById('ticket')
const ticketPrice = document.getElementById('ticket-price')
let valor_total

addTicket.addEventListener("click", (e) => {
    e.preventDefault();
    ticket.innerText = parseInt(ticket.innerText)+1
    ticketPrice.innerText = parseInt(ticket.innerText)*parseInt(valor_total)
})

removeTicket.addEventListener("click", (e) => {
    e.preventDefault();
    if(parseInt(ticket.innerText) !== 1) {
        ticket.innerText = parseInt(ticket.innerText)-1
        ticketPrice.innerText = parseInt(ticket.innerText)*parseInt(valor_total)
    }
    
})

alert("Estamos com problemas em nosso site, a opção de multiplas passagens foi desabilitada.")

cartForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = cartForm.nome.value;
    const email =  cartForm.email.value;
    const quantityTickets = ticket.innerText;

    window.localStorage.setItem('nome', nome)
    window.localStorage.setItem('email', email)
    window.localStorage.setItem('quantityTickets', quantityTickets)
    window.location.href = "finalizacao.html"

})

function ValorViagem()
{
    valor_total=Number(valor_total);
    let d=0;
    const d1=document.getElementById("destino1").checked;
    const d2=document.getElementById("destino2").checked;
    const d3=document.getElementById("destino3").checked;
    const d4=document.getElementById("destino4").checked;
        if(d1){
        d=300;
        Number(d);
        }
        else if(d2){
        d=250;
        d=Number(d);
        }
        else if(d3){  
        d=200;
        d=Number(d);
        }
        else if(d4){
        d=400;
        d=Number(d);
        }
        console.log(d);
    let dia=0;
    const dia3=document.getElementById("dias3").checked;
    const dia7=document.getElementById("dias7").checked;
    const dia10=document.getElementById("dias10").checked;
    const dia15=document.getElementById("dias15").checked;
        if(dia3){
        dia=3;
        dia=Number(dia);
        }
        else if(dia7){
        dia=7;
        dia=Number(dia);
        }
        else if(dia10){  
        dia=10;
        dia=Number(dia);
        }
        else if(dia15){
        dia=15;
        dia=Number(dia);
        }
        console.log(dia);
    let add=0;
    const cafe=document.getElementById("cafe").checked;
    const guia=document.getElementById("guia").checked;
        if(cafe){
        add=50;
        add=Number(add);
        }
        else if(guia){
        add=150;
        add=Number(add);
        }
        else if(cafe && guia){
        add=200;
        add=Number(add);
        console.log(add);
        }
        valor_total=(d+add)*dia;
        console.log(valor_total);
    }
