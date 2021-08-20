//simple condition
// function doubleIt(num){
//     const result = num *2;
//     return result;
// }
// const first = doubleIt(5);
// const second = doubleIt (7);


//step-1 [26-6]
// function getInputValue(){
// const inputField = document.getElementById('deposit-input');
// const inputAmountText = inputField.value;
// const inputAmount = parseFloat(inputAmountText);
// //clear input field [jetu eta function nea asa hoise tai banking.js comment kora ase]
// inputField.value = '';
// return inputAmount;
// }

//step-2 whitdraw&balance input[replase name .inputFild=depositInput,input=deposit hobe]
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const inputAmount = parseFloat(inputAmountText);
    //clear input field [jetu eta function nea asa hoise tai banking.js comment kora ase]
    inputField.value = '';
    return inputAmount;
    }

//step-3/26-7 (Advanced) Deposit And Withdraw Update With One Function
function updateTotalField(totalFieldId,Amount){
    // debugger
    const depositTotal = document.getElementById(totalFieldId);
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText = previousDepositTotal + depositAmount;
}

//step-4.26-8 (Advanced) Shared Balance Update Function
//update Balance

function updateBalance(depositAmount){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositAmount;
  
}