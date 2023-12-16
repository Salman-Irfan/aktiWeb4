const arrayOfObject = [
    {
        users: ['black bhai', 'hannan bhai', 'hurrerah bhai']
    },
    {
        emails: ['emglishExpert@gmail.com', 'hannan@pucit.edu.pk', 'hurrerah@example.com' ]
    },
    {
        passwords: ["billgates", "bank Account", "cheecha watani"]
    }
]
// console.log(arrayOfObject)
// console.log(arrayOfObject[0].users[0])
// console.log(arrayOfObject[0].users[1])
// console.log(arrayOfObject[0].users[2])
// console.log(arrayOfObject[1].emails[0])
// console.log(arrayOfObject[1].emails[1])
// console.log(arrayOfObject[1].emails[2])
// console.log(arrayOfObject[2].passwords[0])
// console.log(arrayOfObject[2].passwords[1])
// console.log(arrayOfObject[2].passwords[2])

let fbUser = {
    englishExpert: {
        name: 'ee',
        email: 'englishExpert@gmail.com',
        password: 'password',
        friendList: ['qasim', 'hannan', 'abu qasim', 'nawaz'],
        blockedFrom: ['hurrerah'],
        blockedTo: ['chahat'],
        messenger: [
            {
                salman: 'hi',
                ee: 'smj ni a ri'
            }
        ],
    },
    abdulHannan: {
        name: 'ee',
        email: 'englishExpert@gmail.com',
        password: 'password',
        friendList: ['qasim', 'hannan', 'abu qasim', 'nawaz'],
        blockedFrom: ['hurrerah'],
        blockedTo: ['chahat'],
        messenger: [
            {
                salman: 'hi',
                ee: 'smj ni a ri'
            },
            
        ],
    }
}
console.log(fbUser);
console.log(fbUser.englishExpert);
console.log(fbUser.englishExpert.friendList);
console.log(fbUser.englishExpert.messenger);
console.log(fbUser.englishExpert.messenger[0].salman);
