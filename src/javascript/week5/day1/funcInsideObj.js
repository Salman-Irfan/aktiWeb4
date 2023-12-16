let fbUser = {
    firstName: 'muhammad',
    lastName: 'tahir',
    count: 100,
    friendList: ['qasim', 'hannan', 'abu qasim', 'nawaz'],
    messenger: [
        {
            salman: 'hi',
            ee: 'smj ni a ri'
        }
    ],
    isOnline: true,
    // arrow function can't be used when we have to use "this" inside object
    // getFullName:  ()=> {
    //     return `${this.firstName} ${this.lastName}`;
    // }
    // normal function
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
};

let fullName = fbUser.getFullName();
// console.log(fullName);
// object destructuring
// array destructuring

// object destructuring
const {firstName, lastName, ...rest} = fbUser
// console.log(firstName)
// console.log(lastName)
console.log(rest)