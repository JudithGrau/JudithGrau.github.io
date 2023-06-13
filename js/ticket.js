var title = document.getElementById('title-ticket');
var discount = document.getElementById('dis-ticket');
var containerTicket = document.getElementById('ticket-card-container');
var div = document.createElement('div');
var submit = document.getElementById('submit');
var total = 0;
var ticket = 200;
var totalTicket = document.getElementById('totalTicket');
var ticketValue = document.getElementById('ticket-value');
var inputs = document.querySelectorAll("input");
// inputs values
var user = document.getElementById('name');
var lastName = document.getElementById('lastName');
var email = document.getElementById('email');
var cant = document.getElementById('cant');
var category = document.getElementById('category');

/////////////////////////////////////////////////////////

ticketValue.innerText = `VALOR DE TICKET $${ticket}`;

var arrayTicket = [{
    title: 'Estudiante',
    discount: 80,
    color: 'primary',
    shadow: '#a4cafe',
},
{
    title: 'Trainee',
    discount: 50,
    color: 'success',
    shadow: '#bafed4'
},
{
    title: 'Junior',
    discount: 15,
    color: 'warning',
    shadow: '#fedc93',
}]

arrayTicket.forEach(elem => {
    let cardTicket = document.createElement('div')
    cardTicket.className = `card-ticket border-${elem.color} flex-wrap`
    cardTicket.innerHTML = `
    <b id="title-ticket">${elem.title}</b>    
    Tienen un descuento <br>
    <b >${elem.discount}%</b>
    <p class="text-muted">* presentar documentación</p>`;

    cardTicket.addEventListener('mouseover', () => {
        cardTicket.style.backgroundColor = elem.shadow;
    })
    cardTicket.addEventListener('mouseout', () => {
        cardTicket.style.backgroundColor = 'white';
    })

    containerTicket.appendChild(cardTicket);
})

submit.addEventListener('click', ()=>{
    if (user.value == "" || lastName.value == "" || email.value == "" || cant.value == "" ) {
        totalTicket.value = `Total a pagar: $ `
        alert('COMPLETE TODOS LOS CAMPOS POR FAVOR');
        if (cant.value > 0) {
            user.focus();
        }
    }else{
        if (category.value == 'Estudiante') {      
            total = cant.value*200;
            total -= ( (cant.value * 200 ) *80 )/ 100;
        }
        if (category.value == 'Trainee') {
            total = cant.value*200;
            total -= ((cant.value * 200 ) *50 )/ 100;
        }
        if (category.value == 'Junior') {
            total = cant.value*200;
            total -= ((cant.value * 200 ) *15 )/ 100;
        }
        if ((category.value == '') && (cant.value > 0)) {
            total = `${ticket}`;
        }

        totalTicket.value = `Total a pagar: $ ${total}`    
    }
    if (cant.value < 0) {
        alert('INGRESE UNA CANTIDAD VALIDA DE TICKETS');
        cant.focus();
    }
})

const event_delete = () =>{
    user.value = '';
    lastName.value = '';
    email.value = '';
    cant.value = '';
    totalTicket.value = `Total a pagar: $ `
}

function stop(){
    event.preventDefault();
}