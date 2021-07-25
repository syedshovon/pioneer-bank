//Login Area Button Handler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})

//Deposit Button Handler
const depositBtn = document.getElementById("add-deposit");
depositBtn.addEventListener("click", function () {
    depositAmountValue = transButtonHandler("deposit-amount");

    // const depositAmount = document.getElementById("deposit-amount").value;
    // const depositAmountValue = parseFloat(depositAmount);

    // const currentDeposit = document.getElementById("current-deposit").innerText;
    // const currentDepositAmount = parseFloat(currentDeposit);
    // const totalDeposit = depositAmountValue + currentDepositAmount;
    // document.getElementById("current-deposit").innerText = totalDeposit;

    // const currentBalance = document.getElementById("current-balance").innerText;
    // const currentBalanceAmount = parseFloat(currentBalance);
    // const totalBalance = depositAmountValue + currentBalanceAmount;
    // document.getElementById("current-balance").innerText = totalBalance;

    updateTransaction("current-deposit", depositAmountValue);
    updateTransaction("current-balance", depositAmountValue);

    document.getElementById("deposit-amount").value = "";

})

//Withdraw Button Handler
const withdrawBtn = document.getElementById("add-withdraw");
withdrawBtn.addEventListener("click", function () {
    const withdrawAmountValue = transButtonHandler("withdraw-amount");


    updateTransaction("current-withdraw", withdrawAmountValue);
    updateTransaction("current-balance", -1 * withdrawAmountValue);

    document.getElementById("withdraw-amount").value = "";
    // const withdrawAmount = document.getElementById("withdraw-amount").value;
    // const withdrawAmountValue = parseFloat(withdrawAmount);
})



function transButtonHandler(id) {
    const amount = document.getElementById(id).value;
    const amountValue = parseFloat(amount);
    return amountValue;
}


function updateTransaction(id, depositAmountValue) {
    const current = document.getElementById(id).innerText;
    const currentAmount = parseFloat(current);
    const total = depositAmountValue + currentAmount;
    document.getElementById(id).innerText = total;
}

