const allImages = document.getElementsByTagName('img');

for (let img of allImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
}

const squareImages = document.getElementsByClassName('square');

for (let img of squareImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
}

const links = document.querySelectorAll('p a');

for (let link of links) {
    // console.log(link.href)
}

// Topic: innerHTML, textContent, & innerText ==============================
// Example: textContent, & innerText =========================

const links2 = document.querySelectorAll('a')

for (let link2 of links2) {
    // link2.innerText = 'I AM a Link!' // textContent is the same, but w/ all the spaces.
}

// Example: innerHTML =========================
const h1_2 = document.querySelector('h1')

h1_2.innerHTML = '<i><h1>Silkie Chickens</h1></i>' // italize's H1
// h1_2.innerText = '<i><h1>Silkie Chickens</h1></i>' // italize's H1
// h1_2.textContent = '<i><h1>Silkie Chickens</h1></i>' // italize's H1



// Topic: getAttributes =========================
const firstAnchor = document.querySelector('a')
firstAnchor.setAttribute('title', 'Title Change')

const input2 = document.querySelector('input[type="text"]')
input2.type = 'password' // change input type, password
input2.type = 'color' // change input type, color picker


// Topic: Changing Syles =========================
const h1_1 = document.querySelector('h1')
h1_1.style.border = "3px solid grey";
h1_1.style.color = "lightblue";


// not recommended, except only one or two. use "ClassList" instead
for (let link of links) {
    link.style.border = '1px solid black'
    link.style.color = 'red'
    link.style.textDecorationColor = 'blue'
    link.style.textDecorationStyle = 'wavy'
}

// Note: to see css applied, except linked-css "window.getComputedSyle(h1)"

// Topic: Classlist (to Manipulate Classes) =========================
const h2 = document.querySelector('h2')

// poor implementation
// h2.setAttribute('class', 'border')
// let currentClasses = h2.getAttribute('class')
// h2.setAttribute('class', '${currentClasses} purple')

// good implementation
h2.classList //list all class
h2.classList.add('purple')
h2.classList.add('border') // can use .remove, .replace, .contain("true or false"), .toogle("On or Off", ei:change hide or show)

// Topic:  Traversing Parent/Child/Sibling=========================
const squareImg = document.querySelector('.square') // first image
// squareImg.nextElementSibling.nextElementSibling // select 3rd image
// squareImg.parentElement //select body, parent of .square

// Topic: Append & AppendChild =========================// create new DOM Element
// document.createElement('img') //creates an empty img
const newImg = document.createElement('img') //save on var, but missing "source"
newImg.src = 'img/Ultraman.jpg' // add source, but still not on the page nor display.
document.body.appendChild(newImg) // append as last child of the body/page.
newImg.classList.add('square') // apply .square's class on newImg.

const newH3 = document.createElement('h3')
newH3.innerText = 'I AM NEW!.'
document.body.appendChild(newH3)

//Append (direct)
const p1 = document.querySelector('p')
p1.append('Hey U', ' U Are?') // can append more than 1 thing., and inside of the paragraph(p), (direct append, didnt create new element)
// p1.appendChild('doesnt work') // Error, not a node, dont know, that's string can't use it 

//Prepend
const newB = document.createElement('b') // create element bold-tag
newB.append('HI!') // fill empty bold-tag
p1.prepend(newB) // prepend bold-tag on 1st paragraph.

// insertAdjacentElement (more flexible)
const h2_2 = document.createElement('h2') // create new Element h2
h2_2.append('Are Delicious Chicken') //fill h2 with text 
const h1_3 = document.querySelector('h1') // select h1 to manipulate
h1_3.insertAdjacentElement('afterend',  h2_2) // insert new h2, afterend of h1

// .after (insert after some element) - there also before
const h3_2 = document.createElement('h3')
h3_2.innerText = 'I am H3 2.0'
h1_3.after(h3_2)

const h3_3 = document.createElement('h3')
h3_3.innerText = 'I am H3 3.0'
h1_3.before(h3_3)

// Topic:  Remove & RemoveChild=========================
// RemoveChild
const firstB = document.querySelector('b') // select want to be removed
// firstB.parentElement.removeChild(firstB) // call on  parentElement - to remove selected Element

// Remove()
firstB.remove()




// Topic:  =========================

// ==============================
  