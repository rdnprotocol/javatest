// function Person(name, age, sex) {
//   this.name = name;
//   this.age = age;
//   this.sex = sex;
// }

// const rand = new Person("Rand McKinnon", 33, "M");
// const ken = new Person("Ken Jones", 39, "M");

// function Car(make, model, year, owner) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
//   this.owner = owner;
// }

// const car1 = new Car("Eagle", "Talon TSi", 1993, rand);
// const car2 = new Car("Nissan", "300ZX", 1992, ken);

// console.log(car1.owner);

// const findOperator = (phoneNumber) => {
//   const firstTwo = phoneNumber.slice(0, 2);

//   switch (firstTwo) {
//     case "95":
//     case "94":
//     case "99":
//       return "Mobicom";
//     case "88":
//       return "Unitel";
//     case "96":
//       return "Skytel";
//     case "66":
//       return "Ondo";
//     case "98":
//       return "G-Mobile";
//     default:
//       return "Invalid Number";
//   }
// };

// console.log(findOperator("98076625"));

// for (let i = 0; i < 10; i++) {
//   console.log(i);
//   if (i === 3) {
//     break;
//   }
// }

// const arr = [156, 6, 6, 6, 6, 66];

// for (const el of arr) {
//   console.log(el);
// }

// const arr2 = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16],
// ];
// const findArr = (arr2) => {
//   for (const i in arr2) {
//     console.log(arr2[i][i]);
//   }
// };
// findArr(arr2);
// let myArr = ["tuul", "erkhes", "egshig"];

// const callback = (arr) => {
//   arr.push("Munkh");
// };

// callback(myArr);

// // myArr.forEach((nam) => console.log(nam));

// const useCallback = (callback) => {
//   callback(myArr);
// };

// useCallback(callback);
// console.log(myArr);

// const numArr = [5, 6, 7, 8, 9];
// const findMax = (arr) => {
//   maxNum = 0;
//   arr.forEach((el) => {
//     if (el > maxNum) maxNum = el;
//   });
//   return maxNum;
// };

// console.log(findMax(numArr));

// const lastFun = (arr) => {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 38 && arr[i] % 5 >= 3) {
//       let uldegdel = arr[i] % 5;
//       newArr.push(arr[i] - uldegdel + 5);
//     } else {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// };

let arr = [62, 26, 65, 26, 50, 72, 65, 78, 80, 98];

// let newArr = arr.map((el) => {
//   if (el > 38 && el % 5 >= 3) {
//     let uldegdel = el % 5;
//     return el - uldegdel + 5;
//   }
//   return el;
// });

// console.log(newArr);

// const filteredArray = arr.filter((el) => el % 2 === 1);
// console.log(filteredArray);

// console.table(arr);

//selectionSort

const findMinIndex = (arr, start) => {
  let minIndex = start;
  for (let i = start + 1; i < arr.lenght; i++) {
    if (arr[i] < arr[minIndex]) {
      minIndex = i;
    }
  }
  return minIndex;
};

const selectionSort = (arr) => {
  for (let i = 0; i < arr.lenght; i++) {
    let minIndex = findMinIndex(arr, i);
    swap(arr, i, minIndex);
  }
};

console.log(arr);

selectionSort(arr);

console.log(arr);

//Sort

// let str = ["gaaaa", "bb", "ccc", "addd"];

// str.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
//   return 0;
// });
// console.log(str);
