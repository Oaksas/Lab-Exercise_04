let userInfo = new Map([
    ['Aman', '1234'],
    ['Baby', '1234'],
]);

(function (){

userName = prompt("Username")
password = prompt("Password")

if(userInfo.has(userName) ){
    if(userInfo.get(userName) === password){
        (function (){

    


            value = prompt(" For Deposit 1 \n For Withdraw press 2\n For See Balance press 3\n For Transfer press 4 ");
            value = parseInt(value);
            
            
            if(value == 1){

            }
            else if(value == 2){

            }
            else if(value == 3){
                
            }
            
            else if(value == 4){
                
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







const parameters = {
    tax: 0.05,
    cardsLimit: 3
}

function userCard(number) {
    const cardInformation = { 
    balance: 100,
    transactionLimit: 100,
    historyLogs: [],
    key: number 
    }

    // getCardOptions - return iformation about card
    function getCardOptions() {
      return cardInformation;
    }


    // putCredits
    function putCredits(amount) {
        cardInformation.balance = cardInformation.balance + amount;
        updateHistoryLogs('Received credits', amount)
    }

    // takeCredits
    function takeCredits(amount) {
            cardInformation.balance = cardInformation.balance - amount + amount * parameters.tax;
            updateHistoryLogs('Withdrawal of credits', amount);
    }

    // setTransactionLimit
    function setTransactionLimit(amount) {
        cardInformation.transactionLimit = amount;
        updateHistoryLogs('Transaction limit change', amount);
    }

    // transferCredits
    function transferCredits(amount, card) {
        let amountwithTaxes = amount + amount * parameters.tax;
        if (amountwithTaxes > cardInformation.balance) {
            console.log('Not enough money')
        } else if (amountwithTaxes > cardInformation.transactionLimit) {
            console.log('Amount exceed the Transaction limit')
        } else {
            this.takeCredits(amount);
            card.putCredits(amount);
        }
    }

    // Logs about past transactions
    function updateHistoryLogs(operation, credits) {
        let input = {
            operation,
            credits,
            operationTime: new Date().toLocaleString('en-GB')
        };
        cardInformation.historyLogs.push(input);
    }
    return {
      getCardOptions,
      putCredits,
      takeCredits,
      setTransactionLimit,
      transferCredits
      };

}

// addCard/getcardbyKey
class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
    }
    addCard() {
        if (this.cards.length < parameters.cardsLimit) {
            console.log('You\'ve got too many cards')
        } else {
            this.cards.push(userCard(this.cards.length + 1));
        }
    }
    getCardByKey(number) {
        return this.cards[number - 1];
    }
}