// var fruits = ['mangoes', 'apples', 'alvocado']

// console.log(fruits)

// const companies = [
//     {name: "arbico", category: 'construct', start: 2000},
//     {name: 'RCC', category: 'construct', start: 1999},
//     {name: "innovative", category: 'IT', start: 2019},
//     {name: 'MTN', category: 'Tele', start: 2021}
// ]


// //     console.log(companies[i]);
// // }

// companies.forEach(function(company) {
//     console.log(company.name);
// });
// const age =[22,11,44,13,55,99,45];

// const candrink =age.filter(age => age <= 66);

// console.log(candrink)
// "use strict"

// let answer = prompt('the official name of javascript')
// let javas= 'ECMAScript'

// if (answer == javas) {
//     alert('Right')
// }

// else {
//     alert ('Didnt know')
// }

// 'use strict'

// let input = prompt('enter number')

// if (input == 1){
//     alert(1)
// }
// else if (input == -1) {
//     alert(-1)
// }

// else if (input == 0) {
//     alert (0)
// }

// else{
//     alert('olodo')
// }

// 'use strict'

// let she_will = 'YES'
// let maybe = 'NO'

// let propose =prompt('Will you marry me? ')

// if(propose == she_will){
//     alert('I LOVE YOU')
// }

// else if(propose == maybe){
//     alert('I wish you well')
// }

// else{
//     alert('AM AFRAID OF LOSING YOU')
// }
"use strict"

// for(let sum= 1; sum < 10; sum++){
//     if(sum % 3 == 1){
//         alert(sum)
//     }
// }

// for (let odd= 1; odd <= 10; odd++){
//     if(odd % 2 == 1){
//         alert(odd)
//     }
// }

// let i = 0
// while(i < 3){
//     alert(`number ${i}`)
//     i++
// }

// let num =0;
// do{
//     num= prompt('enter number', 0)
// }
//     while(num <=100 && num)
    
// alert(num)

// for(let prime= 2; prime <=10; prime++){
//     if(prime % 2 == 1){
//         alert(prime)
//     }
// }



// switch (a) {
//     case '3':
//         alert('too small')
//         break;
//     case '4':
//         alert('exactly')
//         break;
//         case 4:
//             alert('nice one')
//             break
//     default:
//         alert('i dont know')
//         break;
// }

// let browser = 'edge'

// if(browser == 'edge'){
//     alert('you are edge')
// }
// else if(browser == 'chrome' || 'opera' || 'safari'){
//     alert('ok we support')
// }

// else{
//     alert('we hope it display')
// }

// let browser = 'firefox'
// switch (browser){
//     case 'edge':
//         alert('youre edge')
//         break;
//     case 'firefox':
//     case 'opera':
//     alert('we support you')
//         break;
//     default:
//         alert('we hope it display')
// }

// let a= +prompt('a?', '')

// switch(a){
//     case 0:
//         alert(0)
//         break;
//     case 1:
//         alert(1)
//         break;
//     case 2:
//     case 3:
//         alert('2,3')
//     break;
// }

// function showmessage(){
//     alert('hello world!')
// }
// showmessage()

// let  age= prompt('enter your age?', '0')
// if(age >= 18){
//     alert('alllowed')
// }
// else{

//     alert('too small')
// }

// let accessallow = (age > 18) ? true:false


// let age=prompt('enter age', 0)

// let welcome=  (age  < 18) ?
//     function() {alert('Hello')} :
//     function() {alert('greeting')}
//     welcome()

//  let sum = (a,b) => a+b;
//  let result= sum(1,2)
//  alert(result)

// function User (name) {
//     this.name = name;
//     this.isAdmin = false;

// }

// let user = new User('JACK')

// alert(user.name);
// alert(user.isAdmin)

let me = 2.39

alert(me.toRound(4))