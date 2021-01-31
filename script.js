//counting method
function ticketChange(ticket, isIncrease) {
    const ticketInput = document.getElementById(ticket);
    const ticketCount= parseInt(ticketInput.value);
    
    // const ticketCount = getInputValue(ticket);
    let ticketNewCount = ticketCount;
    if (isIncrease == true) {
        ticketNewCount = ticketCount + 1;
    }
    if (isIncrease == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    }
    ticketInput.value = ticketNewCount;
    calculateTotal();
}

//calculating ticket price
function calculateTotal() {
    const firstclassCount = getInputValue('firstclass');
    const economyCount = getInputValue('economy');

    const totalPrice = firstclassCount * 150 + economyCount * 100;
    document.getElementById('total-price').innerText = '$' + totalPrice;

    const tax = Math.round(totalPrice * 0.1);
    document.getElementById('tax-amount').innerText = '$' + tax;

    const grandTotal = totalPrice + tax;
    document.getElementById('grand-total').innerText = '$' + grandTotal;
}
function getInputValue(ticket){
    const ticketInput =document.getElementById(ticket);
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
}

//pop up

// const confirmationArea = document.getElementById("confirmation");
// confirmationArea.style.display = "block";
