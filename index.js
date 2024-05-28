// function loopFor(n) {
//   const arr = [];
//   for (let i = 1; i < n; i++) {
//     arr.push(i);
//   }
//   return arr.reverse();
// }

// const f = loopFor(10);
// console.log(f);

// function loopFor(n) {
//   const arr = [];
//   for (let i = n; i >= 0; i--) {
//     arr.push(i);
//   }
//   return arr;
// }

// const d = loopFor(19);
// console.log(d);

// const a = [1, "look", 5, 6, 62];

// function PrintArr(arr) {
//   //   const array = [];
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
//   //   return array;
// }
// PrintArr(a);

// const c = [2, 8, 5, 6, 62];

// function PrintArr(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       count++;
//     }
//   }
//   return count;
// }
// const numberof = PrintArr(c);

// console.log(numberof);

const a = [
  5, 18, 123, 186, 215, 368, 403, 405, 617, 665, 738, 741, 800, 977, 1109, 1147,
  1150, 1260, 1304, 1465, 1524, 1729, 1869,
];

// function max(arr) {
//   let maxNum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > maxNum) {
//       maxNum = arr[i];
//     }
//   }
//   return maxNum;
// }
// const result = max(a);

// console.log(result);

// const max = (arr) => {
//   let maxNum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > maxNum) {
//       maxNum = arr[i];
//     }
//   }
//   return maxNum;
// };
// const result = max(a);

// console.log(result);
const man = "fgaga";

let person = {
  id: 1234,
  firstName: "Jack",
  lastName: "Sprout",
  email: "jack.sprout@gmail.com",
  phone: "800-555-1212",
  type: ["ffff", 2],
  type2: {
    mobile: "88076625",
    utas: 5,
    utas: 4,
  },
  type2: {
    mobile: "88076625",
    utas: 5,
    utas: 3,
  },
  photoUrl: "http://www.somesite.com/images/avatar.jpg",
  type2: {
    mobile: "88076625",
    utas: 5,
    utas: 2,
  },
};

console.log(
  `${person.email} ${person.type[0]} ${
    (person.type2.mobile, person.type2.utas)
  }  hafhahff`
);

// for (key = 0; key < person.lenght; key++) {
//   console.log(person[key]);
// }
