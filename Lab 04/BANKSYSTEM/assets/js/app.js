let operations = {
    
    deposit: function deposit(value){
        var inMoney = prompt("Enter the amount of money to add to your account ..")
        var newVal = parseInt(account.get(value)) +parseInt(inMoney)
        account.set(value,newVal)
        alert("Your deposite has been successfully completed\n Your Balance is : "+account.get(value))
    },
    balance: function balance(value){
      
        alert("Your Current Balance is : "+account.get(value))
    },

    withdraw:function withdraw(value){
        var wtMoney = prompt("Enter the amount of money you want to withdraw ..")
        if((account.get(value) - wtMoney)<100 ){
            alert("You do not have enought money to execute the withdrawal !!!")
        }
        else if((wtMoney)>10000 ){
            alert("Maximum amount to withdraw is 10,000 br !!!")
        }
        else{
            var newVal = parseInt(account.get(value)) - parseInt(wtMoney)
            account.set(value,newVal)
            alert("Your Withdrawal has been successfully completed\n Your Balance is : "+account.get(value))
        }
    },

    transfer: function transfer(value){
        var trMoney = prompt("Enter the amount of money you want to transfer ..")
        if((account.get(value) - trMoney)<100 ){
            alert("You do not have enought money to execute the transfer !!!")
        }
        else{
            var trAccount = prompt("Enter the reciever account name ..")
            if(userInfo.has(trAccount)){
                var newVal = parseInt(account.get(value)) - parseInt(trMoney)
                account.set(value,newVal)
                var newVal2 = parseInt(account.get(trAccount)) + parseInt(trMoney)
                account.set(trAccount,newVal)
                alert("Transfered Successfully !!")
                operations.balance(value)
            }

        }


    }
    }

let userInfo = new Map([
    ['Aman', '1234'],
    ['Baby', '1234'],
]);
let account =new Map([
    ['Aman', 1000],
    ['Baby', 1000],
]);
(function (){

userName = prompt("Username")
password = prompt("Password")

if(userInfo.has(userName) ){
    if(userInfo.get(userName) === password){
        (function (){


            value = prompt(" For Deposit 1 \n For Withdraw press 2\n To Check Balance press 3\n For Transfer press 4 ");
            value = parseInt(value);

            
            
            if(value == 1){
              operations.deposit(userName)
            }
            else if(value == 2){
           operations.withdraw(userName)
            }
            else if(value == 3){
                operations.balance(userName)
            }
            
            else if(value == 4){
                operations.transfer(userName)

            }
            
            
        
        })()
        
    }
    else{
        alert("Incorrect Information !!")
    }
}else{
    alert("Incorrect Information !!")
}
})()



