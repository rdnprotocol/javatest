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

// const a = [
//   5, 18, 123, 186, 215, 368, 403, 405, 617, 665, 738, 741, 800, 977, 1109, 1147,
//   1150, 1260, 1304, 1465, 1524, 1729, 1869,
// ];

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
// const man = "fgaga";

// let person = {
//   id: 1234,
//   firstName: "Jack",
//   lastName: "Sprout",
//   email: "jack.sprout@gmail.com",
//   phone: "800-555-1212",
//   type: ["ffff", 2],
//   type2: {
//     mobile: "88076625",
//     utas: 5,
//     utas: 4,
//   },
//   type2: {
//     mobile: "88076625",
//     utas: 5,
//     utas: 3,
//   },
//   photoUrl: "http://www.somesite.com/images/avatar.jpg",
//   type2: {
//     mobile: "88076625",
//     utas: 5,
//     utas: 2,
//   },
// };

// console.log(
//   `${person.email} ${person.type[0]} ${
//     (person.type2.mobile, person.type2.utas)
//   }  hafhahff`
// );

// const countOccurrence = (arr) => {
//   let myArr = {};

//   for (i = 0; i < arr.length; i++) {
//     let num = arr[i];
//     if (myArr[num] !== undefined) {
//       myArr[num]++;
//     } else {
//       myArr[num] = 1;
//     }
//   }

//   return myArr;
// };

// console.log(
//   countOccurrence([6, 6, 6, 6, 6, 2, 6, 2, 6, 26, 26, 2, 62, 6, 26, 26, 2])
// );
// // for (key = 0; key < person.lenght; key++) {
// //   console.log(person[key]);
// // }

// const ArrayOne = [6, 6, 6, 6, 6, 2, -1, 2, 6, 26, 26, 0, 62, 6, 26, 26, 3];
// // Өгөгдсөн массивын гишүүдийн нийлбэрийг ол.
// const Total = (arr) => {
//   numTotal = 0;

//   for (i = 0; i < arr.length; i++) {
//     numTotal = numTotal + arr[i];
//   }
//   return numTotal;
// };

// console.log(`Өгөгдсөн массивын гишүүдийн нийлбэр ${Total(ArrayOne)}`);

// // Өгөгдсөн массивын 0-ээс их элементүүдийн нийлбэрийг ол.
// const TotalNotZero = (arr) => {
//   numTotal = 0;
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       numTotal = numTotal + arr[i];
//     }
//   }
//   return numTotal;
// };

// console.log(
//   `Өгөгдсөн массивын 0-ээс их элементүүдийн нийлбэр ${TotalNotZero(ArrayOne)} `
// );
// // Өгөгдсөн массивын хамгийн бага элементийг ол.

// const MinNum = (arr) => {
//   let minNum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < minNum) {
//       minNum = arr[i];
//     }
//   }
//   return minNum;
// };

// console.log(`Өгөгдсөн массивын хамгийн бага элемент ${MinNum(ArrayOne)} `);
// // Өгөгдсөн массивын хамгийн их элемент хэд дэх нь вэ? Хэрэв хамгийн их элементийн тоо 1-ээс олон бол бага дугаарыг нь хэвлэнэ.
// const max = (arr) => {
//   let maxNum = {
//     max: 0,
//     index: 0,
//   };
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > maxNum.max) {
//       // console.log(arr[i], i)
//       maxNum["max"] = arr[i];
//       maxNum["index"] = i;
//     }
//   }
//   return maxNum;
// };

// console.log(
//   `Өгөгдсөн массивын хамгийн их элемент хэд дэх нь вэ? Хэрэв хамгийн их элементийн тоо 1-ээс олон бол бага дугаарыг нь хэвлэнэ ${
//     max([6, 6, 6, 6, 6, 2, -1, 2, 6, 26, 26, 0, 62, 6, 26, 26, 3]).max
//   }
//    ${max([6, 6, 6, 6, 6, 2, -1, 2, 6, 26, 26, 0, 62, 6, 26, 26, 3]).index} `
// );

// 1. Өгөгдсөн Массивийн элэментүүдийг эсрэг дарааллаар буцаа
// const reverseArr = (arr) => {
//   let reverse = [];
//   for (let i = arr.length - 1; i > 0; i--) {
//     reverse.push(arr[i]);
//   }
//   return reverse;
// };

// console.log(reverseArr([6, 26, 26, 0, 62, 6, 26, 26, 3]));
// // 2. Хөрш элэментүүдээсээ их буюу орой элэментүүдийн тоог буцаа

// const peakElements = (arr) => {
//   let count = 0;

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
//     }
//     count++;

//     if (arr[0] > arr[1]) {
//       count++;
//     }
//     if (arr[arr.length - 1] > arr[arr.length - 2]) {
//       count++;
//     }
//     return count;
//   }
// };

// console.log(peakElements([6, 26, 65, 2]));

// // 3. Массив болон тоо өгөгдөв. Нийлбэр нь өгөгдсөн тоотой тэнцүү байдаг хосын тоог ол

// const printPairs = (arr, target) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === target) {
//         console.log(`${arr[i]} + ${arr[j]} = ${target}`);
//       }
//     }
//   }
// };

// printPairs([5, 2, 6, 7, 1], 8);
// 4. Өгөгдсөн 2 массивийн огтлолцлыг ол

// function findIntersection(arr1, arr2) {
//   const intersection = [];
//   for (let i = 0; i < arr1.length; i++) {
//     const element = arr1[i];
//     if (arr2.indexOf(element) !== -1 && intersection.indexOf(element) === -1) {
//       intersection.push(element);
//     }
//   }
//   return intersection;
// }

// const arr1 = [1, 2, 3, 4];
// const arr2 = [3, 4, 5, 6];
// const intersection = findIntersection(arr1, arr2);
// console.log(intersection);

// 5. Өгөгдсөн массивийн сөрөг тоонуудыг зүүн талд нь байрлуул

// const toLeft = (arr) => {
//   let j = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       let t = arr[j];
//       arr[j] = arr[i];
//       arr[i] = t;
//       j++;
//     }
//   }
//   return arr;
// };
// console.log(toLeft([6, 26, -65, -2]));

// // 6. Дараалсан тоонуудаас бүрдэх массив өгөгдөх байсан боловч 1 тоо нь дутуу байв. Тэр тоог ол
// const FindNum = (arrNum) => {
//   MaxNum = Math.max(...arrNum);
//   MinNum = Math.min(...arrNum);
//   totalNum = ((MinNum + MaxNum) * (arrNum.length + 1)) / 2;
//   totalArr = 0;
//   for (let i = 0; i < arrNum.length; i++) {
//     totalArr += arrNum[i];
//   }
//   let foundNum = totalNum - totalArr;
//   return foundNum;
// };

// console.log(FindNum([1, 2, 3, 5]));

// 1. Массив болон тоо өгөгдөв. Өгөгдсөн тоо массив байгаа бол дугаарыг нь, байхгүй бол -1 буцаа
// 2. Өгөгдсөн массивын элементүүдийг хойш нь нэг цикл шилжилт хий. Өөрөөр хэлбэл 1-рийг 2-рт, 2-рыг 3-рт, гэх мэт сүүлийн элементийг 1-рт тус тус шилжүүл.
//     Жич: 1 2 3 4 5 -> 5 1 2 3 4
// 3. Өгөгдсөн массив өсөх эрэмбээр байвал true үгүй бол false буцаа
// 4.
//     HackerLand University has the following grading policy:
//         - Every student receives a  in the inclusive range from  to .
//         - Any  less than  is a failing grade.
//     Sam is a professor at the university and likes to round each student's  according to these rules:
//     If the difference between the  and the next multiple of  is less than , round  up to the next multiple of .
//     If the value of  is less than , no rounding occurs as the result will still be a failing grade.
//     Examples:
//     84 - round to  (85 - 84 is less than 3)
//     28 - do not round (result is less than 40)
//     57 - do not round (60 - 57 is 3 or higher)
//     Given the initial value of  for each of Sam's  students, write code to automate the rounding process.

// 1. Массив болон тоо өгөгдөв. Өгөгдсөн тоо массив байгаа бол дугаарыг нь, байхгүй бол -1 буцаа
// const backMyNumber = (arr, num) => {
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] === num) {
//       return i;
//     }
//   }
//   return -1;
// };

// console.log(backMyNumber([1, 2, 4, 4, 5], 6));

// 2. Өгөгдсөн массивын элементүүдийг хойш нь нэг цикл шилжилт хий. Өөрөөр хэлбэл 1-рийг 2-рт, 2-рыг 3-рт, гэх мэт сүүлийн элементийг 1-рт тус тус шилжүүл.
//     Жич: 1 2 3 4 5 -> 5 1 2 3 4

// const toStep = (arr) => {
//   let j = 0;
//   for (let i = arr.length - 2; i >= 0; i--) {
//     let t = arr[i + 1];
//     arr[i + 1] = arr[i];
//     arr[i] = t;
//   }
//   return arr;
// };
// console.log(toStep([6, 26, -65, -2]));

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

// console.log(lastFun([6, 26, 65, 26, 50, 72, 65, 76, 80, 98]));

// box.addEventListener("click", () => {
//   if (box.style.backgroundColor === "red") {
//     box.style.backgroundColor = "black";
//   } else {
//     box.style.backgroundColor = "red";
//   }
// });

// const box = document.getElementsByClassName("black-box")[0];
// const plus = document.querySelector("#plus-btn");
// const min = document.querySelector("#min-btn");
// let number = 0;

// plus.addEventListener("click", () => {
//   number++;
//   box.textContent = number;
// });

// min.addEventListener("click", () => {
//   number--;
//   box.textContent = number;
// });

// const boxes = document.querySelectorAll(".box");
// const btn = document.querySelector("button");
// let x = "X";
// let o = "O";
// let click = true;
// console.table(boxes);
// boxes.forEach((box) => {
//   box.addEventListener("click", () => {
//     if (click === true && box.textContent !== o) {
//       box.textContent = x;
//       click = false;
//     }
//     if (click === false && box.textContent !== x) {
//       box.textContent = o;
//       click = true;
//     }
//   });
// });

// console.log(btn);

// btn.addEventListener("click", () => {
//   boxes.forEach((box) => {
//     box.textContent = "";
//   });
// });

// if (boxes[0].textContent === x) alert("Winner X");

const btnNext = document.querySelector(".next");
const btnPrev = document.querySelector(".prev");
const slides = document.querySelectorAll("img");

// btnNext.addEventListener("click", () => {
//   images.forEach((img) => {
//     img.className;
//   });
// });

console.log(slides);

let currentSlide = 0;

function showSlide(index) {
  slides.forEach((img, i) => {
    img.style.display = i === index ? "block" : "none";
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function previousSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

showSlide(currentSlide);

const time = document.querySelector("#time");
const startBtn = document.querySelector("#start-btn");
const pauseBtn = document.querySelector("#pause-btn");
const resetBtn = document.querySelector("#reset-btn");

let sec = 0;
let timeInterval = null;

startBtn.addEventListener("click", () => {
  if (!timeInterval) {
    timeInterval = setInterval(() => {
      sec += 0.1;
      time.innerHTML = sec.toFixed(1);
    }, 100);
  }
});

pauseBtn.addEventListener("click", () => {
  timeInterval = clearInterval(timeInterval);
});

resetBtn.addEventListener("click", () => {
  timeInterval = clearInterval(timeInterval);
  sec = "0.0";
  time.innerHTML = sec;
  sec = 0;
});
