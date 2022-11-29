const num1 = 5;
const num2 = 3;

// exe1
// Write a JS code to print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log("number", i)
}
// exe 2
const arr2 = [13, 23, 12, 45, 22, 48, 66, 100];
// Write a JS code to print Even numbers in given array
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] % 2 === 0) {
        console.log("even numbers", arr2[i])
    }
};
const filterArr2 = arr2.filter((value) => value % 2 === 0);
console.log(filterArr2);

// exe 3
const arr4 = [2, 7, 4, 9, 6, 1, 6, 3];
// An array is special if every even index contains an even number and every odd index contains an odd number.
// Log true if an array is special, and false otherwise.
if (arr4.every((el, index) => el % 2 === index % 2)) {
    console.log(true)
} else {
    console.log(false)
};
// exe 4
const stolenItems = {
    tv: 30,
    skate: 20,
    stereo: 50,

};
// You just returned home to find your mansion has been robbed! Given an object of the stolen items,
// log the total amount of the burglary (number).
// If nothing was robbed, return the string "Lucky you!".
if (Object.keys(stolenItems).length) {
    console.log(Object.keys(stolenItems))
    if (stolenItems) {
        console.log(Object.values(stolenItems).reduce((total, num) => total + num))
    }
} else {
    console.log("Lucky you!")
};


// exe 5
// A factor chain is an array where each previous element is a factor of the next consecutive element. The following is a factor chain:
// [3, 6, 12, 36]
// 3 is a factor of 6
// 6 is a factor of 12
// 12 is a factor of 36
// write JS code that determines whether or not an array is a factor chain.
const arr = [3, 6, 12, 36];

// for (let i = 0; i < arr1.length - 1; i++) {
//     if (arr1[i + 1] % arr1[i] === 0) {
//         console.log(true)
//     } else {
//         console.log(false)
//     }
// }


for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] % arr[i] === 0) {
        console.log(true);
    } else {
        console.log(false)
    }
}


// arr1.forEach(isChain);
// function isChain() {

//     let i = 0
//     let chain = arr1[i + 1] % arr1[i] == 0;
//     if (chain) {
//         console.log(true)
//     } else {
//         console.log(false)
//     }
// }



// exe 6
const arr7 = ["###", "#*#", "###"];
// write JS code that logs true if an asterisk * is inside a box, and false otherwise.

for (let i = 0; i < arr7.length; i++) {

    for (let i2 = 0; i2 < arr7[0].length; i2++) {
        const arr10 = arr7[i][i2] === "*";
        if (arr10) {
            console.log("true")


        } else {
            console.log("false")
        }
    }
}



// exe 7
const mean7 = 12345;
// write JS code that logs the mean of all digits.
// The mean of all digits is the sum of digits / how many digits there are (e.g. mean of digits in 512 is (5+1+2)/3(number of digits) = 8/3=2).
// The mean will always be an integer

let mean8 = mean7
let total = 0;
let num = 0;
while (mean8) {
    total += mean8 % 10;
    mean8 = Math.floor(mean8 / 10);
    num += 1;
}

console.log(Math.floor(total / num));