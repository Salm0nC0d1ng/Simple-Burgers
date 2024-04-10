function isNumber(evt) {
    evt = evt ? evt : window.event;
    var charCode = evt.which ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

function addItem() {
    const inputFields = document.querySelectorAll('input[type="number"]');
    const quantityArray = [];
    const priceArray = [80, 120, 85, 90, 80, 80];

    inputFields.forEach((field) => {
        quantityArray.push(field.value);
    });

    const totalArray = quantityArray.map(
        (num, index) => num * priceArray[index]
    );

    let sum = 0;

    for (let i = 0; i < totalArray.length; i++) {
        sum += totalArray[i];
    }
    document.getElementById("total").innerHTML = "Total Price: " + sum;
}

function payMoney() {
    const inputFields = document.querySelectorAll('input[type="number"]');
    const quantityArray = [];
    const priceArray = [80, 120, 85, 90, 80, 80];

    inputFields.forEach((field) => {
        quantityArray.push(field.value);
    });

    const totalArray = quantityArray.map(
        (num, index) => num * priceArray[index]
    );

    let sum = 0;

    for (let i = 0; i < totalArray.length; i++) {
        sum += totalArray[i];
    }

    pay = document.getElementById("cash").value;

    if (sum > pay) {
        alert("Not Enough Cash Money!");
    } else {
        var change = pay - sum;
        alert("Thank you for purchasing! Here is your change: " + change);
    }
}
