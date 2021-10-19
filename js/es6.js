/*
 * Complete the TODO items below
 */
const users = [
    {
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash']
    },
    {
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript']
    },
    {
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php']
    },
    {
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql']
    },
    {
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php']
    }
    // {
    //     name: 'matthias',
    //     email: 'matthias@codeup.com',
    //     languages: ['html', 'css', 'javascript']
    // }
];

// TODO: fill in your name and email and add some programming languages you know
// to the languages array
// TODO: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`
const name = 'matthias';
const email = 'matthias@codeup.com';
const languages = ['html', 'css', 'javascript'];

console.log(email);
// email = 'matt@dawgmail.com'
// cannot reassign email

// TODO: rewrite the object literal using object property shorthand
// users.push({
//     name: name,
//     email: email,
//     languages: languages
// });

users.push({name, email, languages});
console.log(users);
//this is the shorthand version of the first one

// TODO: replace `var` with `let` in the following variable declarations
let emails = [users.email];
let names = [users.name];
console.log(emails)
console.log(names);

// TODO: rewrite the following using arrow functions
// users.forEach(function(user) {
//   return emails.push(user.email);
// });
users.forEach((user) => emails.push(user.email));
console.log(emails);

// users.forEach(function(user) {
//   return names.push(user.name);
// });
users.forEach(user => names.push(user.name));
console.log(names);


// TODO: replace `var` with `let` in the following declaration
let developers = [];
users.forEach(function (user) {
    // TODO: rewrite the code below to use object destructuring assignment
    //       note that you can also use destructuring assignment in the function
    //       parameter definition
    // const name = user.name;
    // const email = user.email;
    // const languages = user.languages;

const {name, email, languages} = user



    // let developers = []
    // users.forEach(function(user: {...}){
    //
    // }
    //
    // users.forEach = user => ({name, email, languages});
    // {
    //     console.log(name);
    //     console.log(email);
    //     console.log(languages);
    // }
    // const peeps = {name: '', email: '', languages: ['']};
    // user(peeps);
    // // console.log(user)
    //


    // TODO: rewrite the assignment below to use template strings
    // developers.push(name + '\'s email is ' + email + name + ' knows ' + languages.join(', '));
    developers.push(`${name}'s email is ${email}. ${name} knows ${languages.join(', ')}`);

});
console.log(developers[5]);


//THIS IS THE DESTRUCTURING ASSIGNMENT
// users.forEach(({name, email, languages})=> developers.push(`${name}'s email is ${email}. ${name} knows ${languages.join(', ')}`))
// console.log(developers[5]);


// console.log(`${name}'s email is ${email}. ${name.toUpperCase()} knows ${languages}`) NEEDED TO ADD .join(', ')




// TODO: Use `let` for the following variable
let list = '<ul>';

// TODO: rewrite the following loop to use a for..of loop
// developers.forEach(function (developer) {

    // TODO: rewrite the assignment below to use template strings
//     list += '<li>' + developer + '</li>';
// });

for(let developer of developers){
    list += `<li>${developer}</li>`
}
list += '</ul>';

//CUZ WERE NOT DOING JQUERY WE HAVE TO DO BASIC JAVA SCRIPT AS SEEN BELOW
//ALSO IT WAS TOO MUCH TO LOG THIS OUT SO WE CREATED A DIV IN THE ES6 HTML <div id="developers"></div>
document.querySelector('#developers').innerHTML = list;

// pass this in a div with id as "developers"
// var shoppers = [
//   {name: 'matt', amount: 100},
//   {name: 'joe', amount: 200},
//   {name: 'moe', amount: 300}
// ]
//
// for (let i = 0; i < shoppers.length; i++) {
//   console.log(shoppers[i])
// }
//
// for (let shopper of shoppers){console.log(shopper)}
// 'shopper' can be named anything