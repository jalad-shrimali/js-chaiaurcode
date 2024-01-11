const account_Id = 1234553 // values cannot be changed
let account_email = "demo@email.com" // gets changed
var account_password = "password" // prefer not use var becuase of issue in block and functional scope
accountCity = 'Indore' // gets changed

// account_Id = 2; //Not allowed
account_email = 'hcverma@email.com'
account_password = 'password1'
accountCity = 'Jaipur'
// console.log(accountCity)
console.table([account_Id, account_email, account_password, accountCity]) // we can also use console.table to print multiple values together in a table