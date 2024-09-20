// creating a empty array in javascript

let arr = []
let arr2 = new Array()
console.log(arr, arr2)

// how to access first and last element in array

let array = [12, 4, 8, 99, 100, 75]
let firstelement = array[0]
let lastelement = array[array.length - 1]
console.log(firstelement, lastelement)

// remove last element from array 
let pop = array.pop()
console.log("removed", pop)
console.log("array", array)

// add a element to an array
array.push(25)
console.log('added', array)

// add an element to start of an array
array.unshift(7)
console.log('add ele at start', array)

// remove first elemeny from an array
array.shift()
console.log("1st ele removed", array)

// looping through an element in an array

for (var i = 0; i < array.length; i++) {
    console.log("looping array", array[i])
}

// array.forEach((val,index)=>{
//     console.log(val)
// })

// for(let x of array){
//     console.log(x)
// }


// Question -1 : Check the elemet is present in array or not

function checkIsElementIsPresent(arr, ele) {

    // return arr.includes(ele)

    // alternate method
    for (let x of arr) {
        if (x === ele) {
            return true
        }
    }
    return false
}

console.log("verify element is present-->", checkIsElementIsPresent(array, 99))

// Question -1 : Check the elemet is present in array or not and return index

function findElementIndex(arr, ele) {
    console.log("indexOf", arr.indexOf(99))
    // alternate method
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ele) {
            return i
        }
    }
    return -1
}
console.log("find element index-->", findElementIndex(array, 100))

// delete , add and update element on specific index

// remove elements on specific index
let spliceArr = [4, 6, 22, 0, 11, 9, 36]
spliceArr.splice(1, 2)
console.log("splice", spliceArr)

// add elements on specific index
spliceArr.splice(2, 0, 1, 3)
console.log("added elements", spliceArr)

//update elements on specific index

spliceArr.splice(2, 2, 99, 100)
console.log("updated elements", spliceArr)


// SPLICE VS SLICE------------------------

/* 
 1) The splice() method returns the removed item(s) in an array and slice() method returns the selected element(s) in an array, as a new array object.
 2) The splice() method changes the original array and slice() method doesn’t change the original array.
 3) The splice() method can take n number of arguments and slice() method takes 2 arguments
*/

// Examples

var fruits = ["apple", "banana", "cherry", "date", "elderberry"];

// use splice to remove cherry and date and insert coconut and dragonfruit
var removed = fruits.splice(2, 2, "coconut", "dragonfruit");
console.log(fruits); // ["apple", "banana", "coconut", "dragonfruit", "elderberry"]
console.log(removed); // ["cherry", "date"]

// use slice to get a new array of the first three fruits
var sliced = fruits.slice(0, 3);
console.log(fruits); // ["apple", "banana", "coconut", "dragonfruit", "elderberry"]
console.log(sliced); // ["apple", "banana", "coconut"]


// DEEP COPY VS SHALLOW COPY

/*
Deep copy and shallow copy are two ways of copying objects in JavaScript. 
The main difference is that a deep copy creates a new object with new memory locations 
for all of its properties and nested objects or arrays, 
while a shallow copy creates a new object with references to the same memory locations as the original object.

This means that a deep copy is independent of the original object, 
and any changes made to either one will not affect the other. 
A shallow copy, on the other hand, is dependent on the original object, 
and any changes made to either one will be reflected in the other.
*/

// create an object with nested properties
var obj = {
    name: "Alice",
    age: 25,
    hobbies: ["reading", "writing"],
    address: { city: "New York", country: "USA" }
};

// create a shallow copy using Object.assign()
var shallowCopy = Object.assign({}, obj);

// create a deep copy using JSON.parse() and JSON.stringify()
var deepCopy = JSON.parse(JSON.stringify(obj));

// modify the name and hobbies of the original object
obj.name = "Bob";
obj.hobbies.push("coding");

// modify the city and country of the shallow copy
shallowCopy.address.city = "London";
shallowCopy.address.country = "UK";

// modify the age of the deep copy
deepCopy.age = 30;

// log the objects to the console
console.log("original Obj--->", obj);
console.log("shallow copy--->", shallowCopy);
console.log("deep copy--->", deepCopy);

// Shallow copy in example
const arrB = array
arrB.splice(1, 2)
// here the original array and copy array are changed
console.log("shallow", arrB, array)


//Deep copy of Array
let deepArr = [1, 2, 3, 4, 5]

// method 1 to deep copy
let arrc = [...deepArr]
arrc.splice(1, 2)

// method 2 to deep copy
let arrd = Array.from(deepArr)
arrd.splice(1, 2)

// method 3 to deep copy
let arre = deepArr.concat()
arre.splice(1, 2)
// here the original array and copy array are not changed
console.log("deep", arrc, arrd, arre, deepArr)


// adding two arrays
let arrone = [1, 5, "test"]
let arrtwo = [9, 99, 890, 12]
// method1
let addarr = [...arrone, ...arrtwo]
console.log("add array--->", addarr)

// method 2
let addarr1 = arrone.concat(arrtwo)
console.log('addarray1--->', addarr1)

// Question How can we check if two arrays are equal?

function isArrayEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }

    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false
        }
    }
    return true

    // alternate method
    // return arr1.length ===arr2.length && arr1.every((val,i)=>arr1[i]===arr2[i])
}
console.log("IS EQUAL Array", isArrayEqual([1, 2, 3], [1, 2, 3]))

// Quuestion How to sort ascending and descending in a array

let sortArr = [99, 4, 62, -12, 10, -2, 0, 11, -5, -16]

let AscSort = sortArr.sort((a, b) => a - b)
console.log("ascending sort-->", AscSort)

let sortArr1 = [99, 4, 62, -12, 10, -2, 0, 11, -5, -16]
let descSort = sortArr1.sort((a, b) => b - a)
console.log("descending sort-->", descSort)

// Question How to reverse an Array

let revArr = [1, 2, 3, 4, 5]
revArr.reverse()
console.log('reversed Array---><', revArr)


// MAP, FILTER & REDUCE
let ARRAY = [1, 2, 3, 4, 5, 2, 2]

/* MAP creates a new array with the results of calling the function on every element of the array. 
 It does not modify the original array, but returns a new one.*/
let mapArr = ARRAY.map((val, i) => val * val)
console.log("map====>", mapArr)

/* FILTER creates a new array with the elements that pass the test implemented by the function. 
It also does not modify the original array, but returns a new one.*/

let filterArr = ARRAY.filter((val, i) => val == 2)
console.log("filtered array", filterArr)

/*reduce applies a function to each element of the array and accumulates the result in a single value. 
It does not return a new array, but a single value.*/

let reduceArr = ARRAY.reduce((acc, curval) => acc + curval)
console.log("reducedArr", reduceArr)


// FLAT 

let y = [1, 2, [4, 5, [6, 7]], 8]
let flattedArr = y.flat(2)
console.log('flattedArray --->', flattedArr)


// Filter vs Find
/**
 Filter -----> filter compares every element in an array with the given condition and returns all the elments that satisfies the condition.
 Find ------> find compared all element in an array with given condition and returns the first element that satisfies the condition.
 */

console.log("filtered array", ARRAY.filter((val, i) => val == 2))
console.log("finded array", ARRAY.find((val, i) => val == 2))


// ---->Find duplicates in an array
const aray = [1, 2, 3, 2, 4, 5, 4, 5];


// method -1 --> using indexOf() method

const duplicates = aray.filter((item, index) => aray.indexOf(item) !== index)
console.log("find duplicates 1--->", duplicates)

// method -2 ---> using set() and has method

const uniqele = new Set();
const dupli = []

aray.forEach(item => {
    if (uniqele.has(item)) {
        dupli.push(item)
    } else {
        uniqele.add(item)
    }
})
console.log("find duplicates 2--->", dupli)

// method -3 ---> using object

const ele = {}
const dup = []

aray.forEach(item => {
    if (ele[item]) {
        dup.push(item)
    } else {
        ele[item] = true;
    }
})
console.log("find duplicates 3--->", dup)

// method -4 ----> using filter and some function

const duplic = aray.filter((item, index) => aray.some((ele, indx) => ele === item && indx !== index))
console.log("find duplicates 4--->", dupli)

// ----> remove duplicates from an array
const ar = [1, 2, 3, 4, 1, 2, 3];

// method -1 --> filter and index of first occurence

const uniqEl = ar.filter((item, index, arr) => {
    return arr.indexOf(item) == index;
})
console.log("remove duplicates in Array 1-->", uniqEl)

// method -2 -----> using set method

const uniqAr = [...new Set(ar)]
console.log("remove duplicates in Array 2-->", uniqAr)

// method -3 ---> using reduce method

const uniqeAr = ar.reduce((acc,curval)=>{
    if(!acc.includes(curval)){
        acc.push(curval)
    }
    return acc;
},[])
console.log("remove duplicates in Array 3-->", uniqeAr)



