// TASK 1 


// function getFirst(array,number) {
//     let newArray = [];
//     if (number == undefined) 
//         newArray.push(array[0]);        
//     for (let i = 0; i < number; i++) {
//             newArray.push(array[i]);        
//     }
//     return newArray
// }

// console.log(getFirst([1, 73, 99, 20],3))




//  TASK 2


// function join() {
//     array = [1, 73, 99, 20];
//     a = "/"
//     array = array.toString().replaceAll(",",a)
//     console.log(array);
// }

// join()


// TASK 4


// function clear(array) {
//     let result = [];

//     for (let i = 0, j = - 1; i < array.length; i++) {
//         let value = array[i]
//         if (value) {
//             result[++j] = value
//         }
//     }
//     return result;
// }
// console.log(clear([0, 1, false, 2, undefined, '', 4, null]));



// TASK 5


// let myArray = ['a', 2, 'd', 2, 'a', 14, 14, 's', false];
// let myNewArray = [];

// for (let i = 0; i < myArray.length; i++) {
//     let isThere = false;
//     for (let j = 0; j < myNewArray.length; j++) {
//         if (myArray[i] == myNewArray[j]) {
//             isThere = true;
//             break;
//         };
//     }
//     if (isThere === false) 
//     myNewArray.push(myArray[i])
// }

// console.log(myNewArray);




// TASK 6

// function isEqual(arr1, arr2) {
//     if(arr1.length !== arr2.length) {
//       return false;
//     }
//     for(let i = 0; i < arr1.length; i++) {
//       if(arr1[i] !== arr2[i]) {
//         return false;
//       }
//     }
//     return true;
//   }
  
//   console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4,false]));


// TASK 7

// function sumIndex() {
//     let string = 'hello'
//     let char = 'l'
//     let sum = 0;
//       for (let i = 0; i < string.length; i++) {
//         if (string[i] !== char){
//             sum += i
//         }
//     }
//     return sum
// }

// console.log(sumIndex());




// TASK 8


// function myFunction(array,index,string) {
//     array.splice(index, 0, string)
//     console.log(array);

// }

// myFunction(['a','salam','b','world'], 3, "dev")



// TASK 9


// function myFunc(array1,array2,char) {
//      array1 = array1.concat(array2)
//      let myNewString = array1.toString().replaceAll(',',char) 
//      return myNewString
// }

// console.log(myFunc([1,2],[3,4],'/'));



// TASK 10


// const Student1 = {
//     name: 'Yunis',
//     surname: 'Mammadov',
//     age: 19,
//     point: 71
// }

// const Student2 = {
//     name: 'Gülər',
//     surname: 'Karimova',
//     age: 20,
//     point: 99
// }

// const Student3 = {
//     name: 'Üzeyir',
//     surname: 'Abdullazada',
//     age: 52,
//     point: 70
// }

// const Student4 = {
//     name: 'Alimino',
//     surname: 'Ahmadov',
//     age: 30,
//     point: 85
// }


// let students = [Student1,Student2,Student3,Student4]


// 1.age //

// students.sort((x,y) => {
//     return y.age - x.age;
// })

// console.log(students);



// 2.point //

// students.sort((x,y) => {
//     return x.point - y.point
// })

// console.log(students);
