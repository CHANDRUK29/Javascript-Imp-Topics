//string in javascript

let Name = 'TestingName'

// length of a string
console.log("length-->",Name.length)

// accessing element of a string
console.log("charAt-->",Name.charAt(2))
console.log("accessing element-->",Name[2])
console.log("charCodeAt-->",Name.charCodeAt(3)) //returns ascii value

// check element is present in string
console.log('checkelement Exist--<>',Name.includes('i'))
// return the index of element in string
console.log('index of element--<>',Name.indexOf('i'))
// alternate method for finding index
function findIndex(str, element) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] === element) {
            return i;
        }
    }
    return -1;
}
console.log('index of element--<>',findIndex(Name,"n"))

// last index of a string
console.log('last index of element--<>',Name.lastIndexOf("e"))

// compare two strings
let anotherName = 'TestingName'
console.log("compare string-->",Name.localeCompare(anotherName))

// replace a value in a string

let str = 'Hi Tester is a good backend developer, Tester is good Understander'
let replace  = str.replace('Tester','Chandru')
let replaceAll  = str.replaceAll('Tester','Chandru')
// replaceAll using regex
let replaceAll1  = str.replace("/Tester/g",'Chandru')
console.log('replace--->',replace)
console.log('replaceAll--->',replaceAll)
console.log('replaceAll1--->',replaceAll1)

console.log('substring--->',str.substring(6,15))
console.log('slice--->',str.slice(-6,-1))

// split
let substring = str.split('')
console.log('split---->',substring)

// startWith & Endswith
console.log(str.startsWith('Hi'))
console.log(str.endsWith('Understand'))

// trim string
console.log("trim-->",str.trim())
console.log("trimEnd only--->",str.trimEnd())
console.log("trim Start only",str.trimStart())

// lowercase & uppercase
console.log("lowecase--->",str.toLocaleLowerCase())
console.log("uppercase--->",str.toUpperCase())

// convert num to string

let num = 1234
console.log(num,num.toString())

//convert obj  to string

let obj ={
    name:'tester',
    mobile:'23423423454'
}

console.log(obj,JSON.stringify(obj))

// concat two stings
let add = Name.concat(str)
console.log('concat----->',add)




  


