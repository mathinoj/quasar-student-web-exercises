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
    },
    {
        name: 'matthias',
        email: 'matthias@codeup.com',
        languages: ['html', 'css', 'javascript']
    }
];

// TODO: fill in your name and email and add some programming languages you know
// to the languages array
// TODO: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`
const name = 'matthias';
const email = 'matthias@codeup.com';
const languages = ['html', 'css', 'javascript'];

// TODO: rewrite the object literal using object property shorthand
users.push({
    name: name,
    email: email,
    languages: languages
});

const userz = {
    name,
    email,
    languages: languages
}


// TODO: replace `var` with `let` in the following variable declarations
let emails = [users.email];
let names = [users.name];
console.log(emails)
console.log(names);

// TODO: rewrite the following using arrow functions
// users.forEach(function(user) {
//   return emails.push(user.email);
// });

users.forEach = user => {
    return emails.push(user.email);
}

// users.forEach(function(user) {
//   return names.push(user.name);
// });

users.forEach = user => {
    return names.push(user.name);
}

// const sayHello = name => {
//   const greeting = 'Hello,  ' + name + '!';
//   return greeting;
// };
//
// const sayHello = function (name) {
//   return 'Hello, ' + name + '!';
// }
// // same as
// const sayHello = (name) => 'Hello, ' + name + '!';

// TODO: replace `var` with `let` in the following declaration
let developers = [];
users.forEach(function (user) {
    // TODO: rewrite the code below to use object destructuring assignment
    //       note that you can also use destructuring assignment in the function
    //       parameter definition
    const name = user.name;
    const email = user.email;
    const languages = user.languages;


    users.forEach = user => ({name, email, languages});
    {
        console.log(name);
        console.log(email);
        console.log(languages);
    }
    const peeps = {name: '', email: '', languages: ['']};
    user(peeps);
    // console.log(user)

// // old way
//   function tellMeAbout(person) {
//     var name = person.name;
//     var age = person.age;
//     console.log(name); // 'codeup'
//     console.log(age); // 4
//   }
//   const person = {name: 'codeup', age: 4};
//   tellMeAbout(person);
// // new way
//   function tellMeAbout({name, age}) {
//     console.log(name); // 'codeup'
//     console.log(age); // 4
//   }
//   const person = {name: 'codeup', age: 4};
//   tellMeAbout(person);


    // TODO: rewrite the assignment below to use template strings
    developers.push(name + '\'s email is ' + email + name + ' knows ' + languages.join(', '));
});

console.log(`${name}'s email is ${email}. ${name.toUpperCase()} knows ${languages}`)

// const name = 'Tiger';
// const age = 13;
//
// console.log(`My cat is named ${name} and is ${age} years old.`);


// TODO: Use `let` for the following variable
let list = '<ul>';

// TODO: rewrite the following loop to use a for..of loop
developers.forEach(function (developer) {

    // TODO: rewrite the assignment below to use template strings
    list += '<li>' + developer + '</li>';
});
list += '</ul>';


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