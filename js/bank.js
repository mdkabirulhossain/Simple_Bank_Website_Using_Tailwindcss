//Deposit
document.getElementById('deposite-btn').addEventListener('click', function(){
    const depositeField = document.getElementById('deposite-field');
    const Newdepositamount = depositeField.value; // When we get value then it automatically by default string type
    const Newdepositamountfloat = parseFloat(Newdepositamount);

     //clear deposite field
     depositeField.value= '';

     if(isNaN(Newdepositamountfloat)){
        alert('Please enter number');
        return;
     }

    const TotalDeposit = document.getElementById('total_deposit');
    const PreviousTotalDepositValue = TotalDeposit.innerText;  // Here also string
    const PreviousTotalDepositValuefloat = parseFloat(PreviousTotalDepositValue)

    //update deposit
    const Deposit = Newdepositamountfloat  + PreviousTotalDepositValuefloat ;  // Direct convert here

    TotalDeposit.innerText = Deposit;

    // Update total balance 
    const CurrentBalance = document.getElementById('total_balance');
    const Balance = CurrentBalance.innerText;
    const Balancefloat = parseFloat(Balance);

    CurrentBalance.innerText = Balancefloat + Newdepositamountfloat;

    
})

// Withdraw
document.getElementById('Withdraw-btn').addEventListener('click', function(){
    const WithdrawField = document.getElementById('Withdraw-field');
    const WithdrawValue = WithdrawField.value;
    const WithdrawValuefloat = parseFloat(WithdrawValue);

    //Clear input field
    WithdrawField.value = '';

    if(isNaN(WithdrawValuefloat)){
        alert("Please input number");
        return;
    }

    const previousTotalWithdraw = document.getElementById('total_withdraw');
    const previousTotalWithdrawValue = previousTotalWithdraw.innerText;
    const previousTotalWithdrawValuefloat = parseFloat(previousTotalWithdrawValue)

   


    //Get total previous balance total Balance
    const CurrentBalance = document.getElementById('total_balance');
    const Balance = CurrentBalance.innerText;
    

    if(parseFloat(WithdrawValue) <= parseFloat(Balance)){
          // Update withdraw
        const withdraw = WithdrawValuefloat + previousTotalWithdrawValuefloat;

         previousTotalWithdraw.innerText = withdraw;
        // Update total balace
         CurrentBalance.innerText = parseFloat(Balance) - parseFloat(WithdrawValue);

    }else{
        alert("Insafficient balance!");
    }

    
})