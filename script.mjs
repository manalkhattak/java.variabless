// VARIABLES
// let firstName = "MANAL"
// let lastName = "MASOOD KHATTAK"
// alert(firstName)
// alert(lastName)
// let newName = firstName.toLowerCase()
// let oldName = lastName.toUpperCase()
// alert(newName)
// alert(oldName)

// name = prompt("Enter Your Name:")
// console.log("Length of your name is " + name.length)
// if (name.length > 15){
//     console.log ("You have a lengthy name")
// }
// else{
//     console.log("You have a short name")
// }

// let num = prompt("Enter a number:")
// if (num % 2==0){
//     console.log("The number you entered is Even")
// }
// else{
//     console.log("The number you entered is Odd")
// }

// let paragraph = prompt("Tell me about yourself")
// console.log("Length of your paragraph is " + paragraph.length)
// let words=paragraph.split("")
// console.log(paragraph.length)
// console.log(words)
// let fatherName = "Zahid Masood"
// let myName = "Manal Masood"
// alert(fatherName)
// alert(myName)

// let firstName = prompt("Enter your first name here:")
// let lastName = prompt("Enter your second name here:")
// alert(firstName + " " + lastName)

// String Formation
// msg = "My name is Manal. What is your name?"
// alert(msg)
// // escape characters
// msg = "My name is Manal. \nWhat is your name?"
// alert(msg)

// let institute = prompt("Institute Name:")
// let studentName = prompt("Name:")
// let course = prompt("Course:")
// let days = prompt("Days:")
// let contactNumber = prompt("Contact Number:")
// let batch = prompt("Batch Number:")

// //  multiline string
// let card = `
//            ${institute}
            
//            STUDENT IDENTITY CARD
//     Name : ${studentName}
//     Course : ${course}
//     Days : ${days}
//     Contact Number: ${contactNumber}
//     Batch : ${batch}
//             `
//             alert(card)

// ControlFlow
//    -if else
//    - Multiple if else
//    - Nested if else

// let age = prompt("What is your age?")
// if (age >= 60){
//     alert("You are too old")
// }
// else if (age >= 40){
//     alert("You are old")
// }
// else if (age >= 30){
//     alert("You are young")
// }
// else if (age >=20){
//     alert("You are too young")
// }
// else if (age >= 13 ){
//      alert("You are a teenager")
// }
// else if (age >= 6){
//     alert("you are a kid")
// }
// else if (age <= 5){
//     alert("You are a toddler")
// }
// percentage 
// let percentage = prompt("What is your percentage?")
// let grade = ''
// if (percentage >= 90){
//     grade = "A+"
// }
// else if (percentage >= 80){
//     grade = "A"
// }
// else if (percentage >= 70){
//     grade = "B"
// }
// else if (percentage >= 60){
//     grade = "C"
// }
// else if (percentage >= 50){
//     grade = "D"
// }
// else if (percentage <= 40){
//     grade = "E"
// }
// alert(`Your grade is ${grade}`)


// if (percentage >= 90){
//     alert("You got an A+ grade!")
// }
// else if (percentage >= 80){
//     alert("You got an A grade!")
// }
// else if (percentage >= 70){
//     alert("You got B grade!")
// }
// else if (percentage >= 60){
//     alert("You got C grade!")
// }
// else if (percentage >= 50){
//     alert("You got D grade!")
// }
// else if (percentage <= 40){
//     alert("You got an E grade!")
// }

// let purchaseAmount = prompt("Enter Total Amount:")
// let discount = 0
// if (purchaseAmount >= 50000){
//     discount = .20
// }
// else if (purchaseAmount >= 40000){
//     discount = .15
// }
// else if (purchaseAmount >= 30000){
//     discount = .12
// }
// else if (purchaseAmount >= 20000){
//     discount = .10
// }
// else if (purchaseAmount >= 15000){
//     discount = .05
// }
// else if (purchaseAmount >= 10000){
//     discount = .02
// }
// else{
//     discount = 0
// }
// alert(`
//        Your bill before discount = ${purchaseAmount}
//        Your discount is ${discount * 100}%
//        Your bill after discount = ${purchaseAmount - purchaseAmount*discount}
//   `)
  
// logical operator
// and operator (&&)
// or operator (||)
// let price = '26'
// if (price){
//     alert("There is a value assigned in price")
// }
// else{
//     alert("There is no value assigned in price")
// }

// Nested ifs
// election
// voter list
// valid CNIC
// "you can cast vote"
// let day = prompt("Is today election?")
// if (day=='yes'){
//     let voterList = prompt("Is your name in the voter list?")
//     if (voterList=="yes"){
//         let cnic = prompt("Do you have a valid CNIC?")

//         if (cnic=="yes"){
//             alert("You can cast the vote.")

//         }
//     else{
//         alert("You can not cast the vote because you don't have your.")
//     }
    
//      alert("You can not cast the vote because your name is not in the voter list.")
//  }
// }
// else{
//     alert("You can not cast the vote because today is not election.")
// }


// loops in javascript
// for loop
// while loop
// do while loop

// write your name ten times
// console.log("Manal Masood Khattak")
// console.log("Manal Masood Khattak")
// console.log("Manal Masood Khattak")
// console.log("Manal Masood Khattak")
// console.log("Manal Masood Khattak")
// console.log("Manal Masood Khattak")
// console.log("Manal Masood Khattak")
// console.log("Manal Masood Khattak")
// console.log("Manal Masood Khattak")
// console.log("Manal Masood Khattak")

// let guests = ['Summaya','Sohana','Hoorya','samreen','Alina','Fizza',
//                'Zoya','Nimra','Raiqa','Fatiha','Mehak','suman','Anum','Madiha']

// for (let a=0; a<8; a++){
//     console.log(a,guests[a])
// }
// for (let a=0; a<guests.length; a++){
//     if (guests[a].length <10){
//         console.log(`Ms.${guests[a]}, You are invited to my Wedding Ceremony.`)
//     }
// }
// for (let a=0; a<guests.length; a++){
//     if (guests[a].startsWith('S') || guests[a].startsWith('s')){
//         console.log(`Ms.${guests[a]}, You are invited to my Wedding Ceremony.`)
//     }
//     else{
//         console.log(`Ms.${guests[a]} not invited.`)
//     }
// for (let a=0; a<guests.length; a++){
//     if (guests[a][0]==='S' || guests[a][0]==='s'){
//         console.log(`Ms.${guests[a]}, You are invited to my Wedding Ceremony.`)
//     }
//     else{
//         console.log(`Ms.${guests[a]} not invited.`)
//     }
// }
// let text = prompt("Enter your text here")

// for (let a=0; a<text.length, a++){
//     if text[a]==' '
// }
// console.log(`The number of characters in your text is ${text.length}.`)
// console.log(`The number of words in your text is ${text.split(' ').length}.`)

// TASKKK ////////
// you have to take 5 usernames.
//  and add usernames in an array of usernames.
// before adding usernames make sure that usernames are valid.
//             Validity:
// username must be more than 5 and more than 20 characters.
// username can not be admin or Admin or ADMIN

// create an empty array:usernames
// run a for loop 5 times
// username input
// inside for loop put check for validity
// if valid then add username in usernames array
// console the usernames array.

// let usernames = []
// for (let a=0; a<5; a++){
//     let username = prompt("Enter a username")

//     if (username!="admin" && username!="Admin" && username!="ADMIN"){
//         if (usernames.includes(username)){
//             alert("Username not available")
//         }
//         else{
//         if (username.length>=5 && username.length<=20){
//             usernames.push(username)
//             alert("Username created")
//         }
//         else{
//             alert("Invalid username")
//         }
//         }
//     }
    
//     else{
//         alert("Invalid username")
//     }
// }
// console.log(usernames)    



// let array = ["A","B","C","D","E"]
// let char = prompt("Enter a character").toUpperCase()
// if ((array.includes(char))){
//     console.log("Already a member.")
// }
// else{
//     array.push(char)
// }
// console.log(array)