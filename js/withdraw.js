/*
step:1 add even handler with deposit btn
step:2 Get the withdraw amount
step:3 Clear the withdraw Field
step:4 Get previous withdraw total
step:5 Calculate the total withdraw and set it withdraw total element
step:6 previous balance
step:7 Calculate new balance and set it balance total element
*/
// step:1
document.getElementById('btn-withdraw').addEventListener('click', function(){

    // step:2
    const withdrawField=document.getElementById("withdraw-field");
    const newWithdrawAmountString=withdrawField.value;
    const newWithdrawAmount=parseFloat(newWithdrawAmountString);
// step:3
    withdrawField.value='';
    // step:4
    const withdrawTotalElement=document.getElementById('withdraw-total');
    const previousWithdrawTotalString=withdrawTotalElement.innerText;
    const previousWithdrawTotal=parseFloat(previousWithdrawTotalString)
    // step:5

    const newWithdrawTotal=previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText=newWithdrawTotal;
    // step:6
    const balanceElement=document.getElementById('balance-total');
    const previousTotalBalanceString=balanceElement.innerText;
    const previousTotalBalance=parseFloat(previousTotalBalanceString);
    // step:7
    const newBalanceTotal=previousTotalBalance - newWithdrawAmount;
    balanceElement.innerText=newBalanceTotal;
})
