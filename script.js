
function calculateTicket() {

    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var tickets = document.getElementById("tickets").value;

    var price;

    if (age < 12) {
        price = 5;
    } else if (age >= 12 && age <= 17) {
        price = 7;
    } else {
        price = 10;
    }


    var total = eval(price + "*" + tickets);

    document.getElementById("result").innerHTML =
        "<h2>" + name + "'s Ticket</h2>" +
        "Price per ticket: $" + price + "<br>" +
        "Number of tickets: " + tickets + "<br>" +
        "Total: $" + total;
}

function clearTicket() {

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("tickets").value = "";

    document.getElementById("result").innerHTML = "";
}