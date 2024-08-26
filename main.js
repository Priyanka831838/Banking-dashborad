let curbalance = document.querySelector(".curbalance");
let depo = document.querySelector("#depo");
let depoBtn = document.querySelector(".depoBtn");
let withD = document.querySelector("#withD");
let withdrawBtn = document.querySelector(".withdrawBtn");


let balanceValue = parseFloat(curbalance.textContent.replace("Current Balance: $", ""));

// Deposit button event listener
depoBtn.addEventListener("click", function() {
    let depoVal = parseFloat(depo.value);

    if (!isNaN(depoVal) && depoVal > 0) {
        balanceValue += depoVal;
        curbalance.textContent = "Current Balance: $" + balanceValue.toFixed(2);
        depo.value = "";
    } else {
        alert("Please enter a valid deposit amount.");
    }
});

// Withdraw button event listener
withdrawBtn.addEventListener("click", function() {
    let withdrawVal = parseFloat(withD.value);

    if (!isNaN(withdrawVal) && withdrawVal > 0) {
        if (withdrawVal <= balanceValue) {
            balanceValue -= withdrawVal;
            curbalance.textContent = "Current Balance: $" + balanceValue.toFixed(2);
            withD.value = "";
        } else {
            alert("Insufficient Balance");
        }
    } else {
        alert("Please enter a valid withdrawal amount.");
    }
});
