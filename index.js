// 21) Given variables x = "John" and y = "Doe", write on the console "John <> Doe"
let x = "John"
let y = "Doe"
// console.log(x + " <> " + y)

// 22) Create an object with properties such name, surname, email
let person = {
    name: "Leon",
    surname: "Bourke",
    email: "lbourke1234@gmail.com"
}
// console.log(person)

// 23) Delete the email property from the previously created object
delete(person.email)
// console.log(person)

// 24) Create an array with 10 strings in it
let tenStringArray = ["where", "are", "we", "going", "today", "volleyball", "coding", "table", "house", "computer"]

// 25) Print in the console every string from the previous array
for (str of tenStringArray) {
    // console.log(str)
}

// 26) Create an array with 100 random numbers in it
let randomArrayOfNumbers = []
for (let i = 0; i < 100; i++) {
    randomArrayOfNumbers[i] = Math.ceil(Math.random() * 100)
}
// console.log(randomArrayOfNumbers)

// 27) Write a function to get the maximum and minimum values from the previously created array
let minValue = 50
let maxValue = 50

for (let i = 0; i < randomArrayOfNumbers.length; i++) {
    if (minValue > randomArrayOfNumbers[i]) {
        minValue = randomArrayOfNumbers[i]
    }
    if (maxValue < randomArrayOfNumbers[i]) {
        maxValue = randomArrayOfNumbers[i]
    }
}
// console.log(randomArrayOfNumbers)
// console.log(minValue)
// console.log(maxValue)

// 28) Create an array of arrays, in which every array has 10 random numbers
let arrayMain = [
    [],
    [],
    [],
    [],
    []
]
for (let i = 0; i < arrayMain.length; i++) {
    for (let j = 0; j < 10; j++) {
        arrayMain[i][j] = Math.ceil(Math.random() * 100)
    }
}
// console.log(arrayMain)

// 29) Create a function that gets 2 arrays as parameters and returns the longest one
const longestArray = function(array1, array2) {
    if (array1.length > array2.length) {
        return array1;
    } else {
        return array2;
    }
}
let arrayExample1 = ["Str", "Hello", 4, 5, 89, "goodbye"]
let ArrayExample2 = ["two", "eleven", 5, 4, 3, 2, 191919, "sheep"]

// console.log(longestArray(arrayExample1, ArrayExample2))

// 30) Create a function that gets 2 arrays of numbers as parameters and returns the one with the higher sum of values
const largestSum = function(arr1, arr2) {
    let arr1Sum = 0
    let arr2Sum = 0

    for (let i = 0; i < arr1.length; i++) {
        arr1Sum += arr1[i];
    }
    for (let i = 0; i < arr2.length; i++) {
        arr2Sum += arr2[i];
    }
    if (arr1Sum > arr2Sum) {
        return arr1;
    } else {
        return arr2;
    }
}
aEx1 = [2, 4, 5, 6, 7, 8, 99, 88, 55]
aEx2 = [33, 66, 123, 55, 4, 2, 3, 3]
// console.log(largestSum(aEx1, aEx2))


//--------------------------------------------- DOM EXERCISES ---------------------------------------


// 31) Get the element with an id of "container" from the page

let containerNode = document.getElementById('container');


// 32) Get every <td> element from the page
let tdNode = document.getElementsByTagName('td')

//33) Use a loop for printing the text inside of every <td> element in the page
for (let i = 0; i < tdNode.length; i++) {
    // console.log(tdNode[i].innerText)
}

// 34) Write a function to change the heading of the page
const changeHeading = function(text) {
    let headingNode = document.getElementById('heading')
    headingNode.innerText = text
}
// changeHeading("This is the new heading")

// 35) Write a function to add an extra row to the table
const addExtraTableRow = function() {
    let trNode = document.createElement('tr')
    let tableNode = document.getElementsByTagName('table')
    tableNode[0].appendChild(trNode)
    trNode.innerHTML = "<td>row 5</td><td>row 5</td><td>row 5</td><td>row 5</td><td>row 5</td>"
}
// addExtraTableRow()

// 36) Write a function to add a class of "test" to each row in the table
const addTestClasstoRow = function() {
    let rowNode = document.querySelectorAll('tr')
    for (let i = 0; i < rowNode.length; i++) {
        rowNode[i].classList.add('test')
    }
}
// addTestClasstoRow()

// 37) Write a function to add a red background to every link in the page
const addRedBackgroundtoLinks = function() {
    let linkNode = document.querySelectorAll('a')
    for (let i = 0; i < linkNode.length; i++) {
        linkNode[i].style.background = "red"
    }
}
// addRedBackgroundtoLinks()

// 38) Console log "Page loaded" when the page is correctly loaded
let onLoad = window.onload
onLoad = function() {
    console.log("Page loaded")
}
onLoad()
// 39) Write a function to add new items to a unordered list
const addItemsToList = function(text) {
    let ulNode = document.querySelector('ul')
    let liNode = document.createElement('li')
    ulNode.appendChild(liNode)
    liNode.innerText = text
}
// addItemsToList('Eggs')
// addItemsToList('Sausages')
// addItemsToList('Beer')

// 40) Write a function to empty a list
const emptyAList = function() {
    let ulNode = document.querySelector('ul')
    let liNode = document.querySelectorAll('li')
    for (let i = 0; i < liNode.length; i++) {
        ulNode.remove(liNode[i])
    }
}
// emptyAList()

// EXTRA EXERCISES

// 41) Add an eventListener to show an alert when the cursor hovers a link, displaying its href property
const alertWhenHoverLink = function() {
    let linkNode = document.querySelectorAll('p')
    for (let i = 0; i < linkNode.length; i++) {
        linkNode[i].addEventListener("click", alertMessageForHover);
    }
}


const alertMessageForHover = function() {
    console.log("Hello")
}

// 42) Create a button that will hide every image on the page when clicked
const addButtonAtEndOfBody = function() {
    let buttonNode = document.createElement('button')
    let bodyNode = document.querySelector('body')
    bodyNode.appendChild(buttonNode)
    buttonNode.textContent = "Remove Images"
    buttonNode.addEventListener("click", removeImages)
}
const removeImages = function() {
    let imgNode = document.querySelectorAll('img')
    for (let i = 0; i < imgNode.length; i++) {
        imgNode[i].classList.add('hide')
    }
}

addButtonAtEndOfBody()

// 43) Create a button that will hide or show the table on the page when clicked
const addButtonToToggleTable = function() {
    let btnNode = document.createElement('button')
    let bodyNode = document.querySelector('body')
    btnNode.textContent = "Toggle Table On/Off"
    bodyNode.appendChild(btnNode)
    btnNode.addEventListener('click', toggleTable)
}

const toggleTable = function() {
    let tableNode = document.querySelector('table')
    tableNode.classList.toggle('hide')
}

addButtonToToggleTable()

// 44) Write a function for calculating the sum of every number inside all the table cells (if their content is numeric)
const addSumsOfTableContent = function() {
    let sumOfNumbers = 0
    let tableNode = document.querySelectorAll('td')
    for (let i = 0; i < tableNode.length; i++) {
        if (typeof tableNode[i] === 'number') {
            sumOfNumbers += tableNode[i];
            console.log(sumOfNumbers)
        }
    }
}
// addSumsOfTableContent()

// 45) Delete the last letter from the heading each time the user clicks on it
const deleteLastCharHeading = function() {
    let headingNode = document.getElementById('heading')
    headingNode.addEventListener('click', removeChar)
}

const removeChar = function(event) {
    let headingNode = document.getElementById('heading')
    console.log(event)
    let str = headingNode.innerText
    headingNode.innerText = str.slice(0, headingNode.innerText.length - 1)
    
}
// deleteLastCharHeading()

// 46) Change the background color of a <td> if the user clicks on it
const toggleTdBackgroundColor = function() {
    let tdNode = document.querySelectorAll('td')
    for (let i = 0; i < tdNode.length; i++) {
        if (tdNode[i] === i)
        tdNode[i].addEventListener('click', toggleTd)
    }
}
const toggleTd = function(event) {
    let tdNode = document.querySelectorAll('td')

    tdNode.classList.toggle('td-background-color')
}
toggleTdBackgroundColor()

// 47) Add a delete button at the bottom of the table, when clicked it should delete a random <td>
const deleteTdRandomTdElement = function() {
    let btnNode = document.createElement('button')
    let tableNode = document.querySelector('table')
    btnNode.textContent = "Delete Random Td Cell"
    tableNode.appendChild(btnNode)
    btnNode.addEventListener('click', deleteTd)
}

const deleteTd = function(event) {
    let tdNode = document.querySelectorAll('td')
    console.log(tdNode[0])
    tdNode[Math.floor(Math.random() * tdNode.length -1)].classList.add('hide')
}

deleteTdRandomTdElement()

// 48) Add automatically a pink border to a cell when the mouse hovers it
const addPinkBorder = function() {
    let tdNode = document.querySelectorAll('td')
    for (let i = 0; i < tdNode.length; i++){
        tdNode[i].addEventListener('mouseover', addBorder)
    }
}
const removePinkBorder = function() {
    let tdNode = document.querySelectorAll('td')
    for (let i = 0; i < tdNode.length; i++){
        tdNode[i].addEventListener('mouseout', removeBorder)
    }
}

const addBorder = function(event) {
    let tdNode = document.querySelectorAll('td')
    console.log(event)
    tdNode[0].classList.add('add-pink-border')
}
const removeBorder = function(event) {
    let tdNode = document.querySelectorAll('td')
    console.log(event)
    tdNode[0].classList.remove('add-pink-border')
}
removePinkBorder()
addPinkBorder()

// 49) Write a function to create a table with 4 rows and 3 columns programmatically and add it to the bottom of the page
const addTable = function() {
    let tableNode = document.createElement('table')
    let bodyNode = document.querySelector('body')
    tableNode.innerHTML = `<tr><td></td><td></td><td></td></tr>
    <tr><td></td><td></td><td></td></tr>
    <tr><td></td><td></td><td></td></tr>
    <tr><td></td><td></td><td></td></tr>`
    bodyNode.appendChild(tableNode)
}
addTable()

// 50) Write a function to remove the last table from the page
const removelastTable = function() {
    let tableNode = document.querySelectorAll('table')
    tableNode[tableNode.length-1].addEventListener('click', removeTable)
}
const removeTable = function(event) {
    console.log(event)
    let tableNode = document.querySelectorAll('table')
    delete tableNode[tableNode.length-1]
}
removelastTable()