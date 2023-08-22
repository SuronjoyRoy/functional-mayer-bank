/*
step:1 add to even handler
step:2 Get deposit amount from the deposit field
step:2:5 Convert string to number type
step:3 Clear the deposit value afte getting the value;
step:4 Get the previous total deposit
step:5 Calculate new deposti total and set value deposit total
step:6 Get curren balance
step:7 Calculate the new balance set it new total balance element
*/

document.getElementById('btn-deposit').addEventListener('click', function(){

const depositField=document.getElementById('desposit-field');
const newDepositAmoutString=depositField.value;
const newDepositAmout=parseFloat(newDepositAmoutString);

// step:3 Clear the deposit value 
depositField.value='';

// step:4 Get the previous total deposit

const depositTotalElement=document.getElementById('deposit-total');
const previousDepositString=depositTotalElement.innerText;
const previousDepositTotal=parseFloat(previousDepositString);

// step:5

const newdepositeTotal=previousDepositTotal + newDepositAmout;
depositTotalElement.innerText=newdepositeTotal;

// step:6

const balanceTotalElement=document.getElementById('balance-total');
const previousBalanceTotalString=balanceTotalElement.innerText;
const previousBalanceTotalAmout=parseFloat(previousBalanceTotalString) 
// step:7

const newBalnaceTotal= previousBalanceTotalAmout + newDepositAmout;
balanceTotalElement.innerText=newBalnaceTotal;

})