const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// Exercises
//     Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

let langs = users.filter(function(idiomas){
    return idiomas.languages.length >= 3;
})
console.log(langs);


//     Use .map to create an array of strings where each element is a user's email address
let email = users.map(function(emiz) {
    return emiz.email
});
console.log(email);

//     Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
let totalYears = users.reduce(function (result, individual){
    return result + individual.yearsOfExperience / users.length
}, 0)
console.log(totalYears)



//     TODO Use .reduce to get the longest email from the list of users.
// let longEmiz = users.reduce(function (result, individual){
//      // return result + ', ' +individual.email.length;
//     let newMiz = result + ', ' + individual.email.length;
//     let yoArray = Array.from(newMiz)
//     console.log(yoArray);
//     // console.log(newMiz)
//     // const arrayOf = Array.from(String(newMiz), Number)
//     // console.log(arrayOf);
// }, ' ')
// console.log(longEmiz);

let longEmiz = users.reduce(function(longest, user){
    return longest.length > user.email.length ? longest : user.email
}, '')
console.log(longEmiz);
// ? IS THE EQUIVALENT TO AN if STATEMENT
// BOTH THESE ARE THE SAME JUST WRITTEN DIFF
let longEmizer = users.reduce(function(longest, user){
    if (longest.length > user.email.length){
        return longest;
    } else {
        return user.email
    }
}, '')
console.log(longEmizer);



//     Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

// let teachName = users.reduce(function (result, individual){
//     return result + ' ,' +individual.name
// }, ' ')
// console.log(teachName);

// var nameString = users.reduce(function (nString, user, index){
//     if(index != users.length - 1){
//         return nString + (user.name + ', ')
//     }
//     return nString + (user.name + '.')
// }, 'Your instructors are: ')
// console.log(nameString);

var nameString = users.map(function (user){
    return user.name
}).join(', ')
console.log(nameString);

//THESE THREE WAYS SOLVE THE QUESTION, BUT THE LAST TWO SOLVE THE COMMA ISSUE