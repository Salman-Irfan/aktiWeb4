// console.log("intro to Document Object Model");
// console.log(document)
// console.log(document.URL)

let liItems= (document.getElementsByTagName("li"))
// console.log(liItems)
let firstLiUtem = liItems[0]
// console.dir(firstLiUtem)
firstLiUtem.innerText="ksjfdlmskdfj"
firstLiUtem.style.backgroundColor


// by id
// console.log(document.getElementById("about"))

// by classname
// console.log(document.getElementsByClassName("contact")[0])

// global query selector
// console.log(document.querySelector("li"))

// console.log(document.querySelectorAll("li"))

const submitButton = (document.getElementById("seven-up"))
console.dir(submitButton)
// submitButton.addEventListener("click", (e) =>{
//     e.preventDefault();
//     console.log("button click hua")
// })


// form event 
const myForm = document.getElementById("myForm");
// Add an event listener to the form, not the button
myForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Get the form data
    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    // Log the form data to the console
    console.log(formData);
});

document.addEventListener("DOMContentLoaded", ()=>{
    // function mein jo kam kran aho wo yahan chipka do
    console.log("on page load")
})

document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        console.log('Switched to another tab or window.');
    } else {
        console.log('Returned to the tab or window.');
    }
});


