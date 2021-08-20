


document.getElementById('deposit-button'). addEventListener('click',function(){
//  console.log('deposit button');
// const depositInput = document.getElementById('deposit-input');

// const depositAmountText = depositInput.value;
// const depositAmount = parseFloat(depositAmountText);
// console.log(depositAmount);
const depositAmount = getInputValue('deposit-input')
//[hhere is deposit input for step-2 ,ontherwise same as first ()]


//get current deposit
// const depositTotal = document.getElementById('deposit-total');
// const depositTotalText = depositTotal.innerText;
// const previousDepositTotal = parseFloat(depositTotalText);

// depositTotal.innerText = previousDepositTotal + depositAmount;
//[coment for step-3]
updateTotalField( 'deposit-total', depositAmount);

//step;4
// update balance
// const balanceTotal = document.getElementById('balance-total');
// const balanceTotalText = balanceTotal.innerText;
// const previousBalanceTotal = parseFloat(balanceTotalText);
// balanceTotal.innerText = previousBalanceTotal + depositAmount;
updateBalance(depositAmount);
// //clear input field
// depositInput.value = '';

});



// handle withdraw button
document.getElementById('withdraw-button').addEventListener('click',function(){
//   const withdrawInput = document.getElementById('withdraw-input');
//   const withdrawAmountText = withdrawInput.value;
//   const withdrawAmount = parseFloat(withdrawAmountText);[comment for step-2]
const withdrawAmount = getInputValue('withdraw-input');


  //get & update withdraw total...[step-3]......

//   const withdrawTotal = document.getElementById('withdraw-total');
//   const previousWithdrawText = withdrawTotal.innerText;
//   const previousWithdrawTotal = parseFloat(previousWithdrawText);
//   const newWithdrawTotal  = previousWithdrawTotal+ withdrawAmount;
//   withdrawTotal.innerText = newWithdrawTotal;
updateTotalField('withdraw-total',withdrawAmount );

//   //clear withdraw input
//   withdrawInput.value= '';



//update balance
// const balanceTotal = document.getElementById('balance-total');
// const previousBalanceText = balanceTotal.innerText;
// const previousBalanceTotal = parseFloat(previousBalanceText);
// const newBalanceTotal =  previousBalanceTotal - withdrawAmount;   
// balanceTotal.innerText = newBalanceTotal;
updateBalance(withdrawAmount);

});
 