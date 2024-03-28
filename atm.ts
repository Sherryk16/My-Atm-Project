import inquirer from "inquirer";
interface UserInput {
    userID: string,
    userPin: number,
    accountType: string,
    transactionType: string,
    amount: number

}

const userInput: UserInput = await inquirer.prompt([
    {
        type: "input",
        name: "userID",
        message: "Enter User ID"
    },
    {
        type: "number",
        name: "userPin",
        message: "Enter Your Pin"
    },
    {
        type: "list",
        name: "accountType",
        choices:["Current", "Saving"],
        message: "Select your Account Type"
    },
    {
        type: "list",
        name: "transactionType",
        choices:["Fast Cash","Cash Withdraw","balance Inquiry"],
         message: "Select your Transaction Type"
    },
    {
        type: "number",
        name: "amount",
        message: "Enter Amount",
        when(userInput){
            return userInput.transactionType === "Cash Withdraw"
        }
    },
    {
        type:"list",
        name: "amount",
        choices:[500,1000,2000,3000,4000,5000],
        message: "Select your Amount",
        when(userInput){
            return userInput.transactionType === "Fast Cash"
        }
    } 
])

//making variable of of user input data

const userID = userInput.userID;
const userPin = userInput.userPin;
const enteredAmount = userInput.amount;

if ((userID && userPin) && userInput.transactionType === "Balance Inquiry"){
    const userBalance = Math.floor(Math.random() * 100000);
    console.log(`Your Current Balance is Rs ${userBalance}\n`)

    }else if (userID && userPin){
        const userBalance2 = Math.floor(Math.random() * 100000);
        if(userBalance2 > enteredAmount){
            console.log(`Your Account has been debited with Rs ${enteredAmount} and your remaining balance ${userBalance2-enteredAmount}`);

            
        }else{
            console.log(`\n Unsufficient Balance`);
            
        }
} 
