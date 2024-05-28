// const number = 7;
// const string = "bichwer";
// const boolean3 = true;
// const undefineds = undefined ;
// const VarNull = null;

// console.log(number, string, boolean3, undefineds, VarNull);

// console.log(typeof boolean3);



// // const  FirstName = "a", lastName= "b", maritalStatus="em", country="mgl", age=13
// // console.log(FirstName,lastName, maritalStatus, age, country)




// let a = 2;
// var b = 3;
// const c = 5;
// let area2;
// function AreaCalculator() { 
//     a = 4
//     b = 5
//     return  a + b + c
// }
// area2 = "sss"

// const area = area2

// console.log(area)

// let FirstName = [2,4,4,5,5,5,5,5,5,5,5,5];

// console.log(typeof FirstName)

// const circleDiameter = 23

// function circleAreaCalc() {
//     const area = (circleDiameter / 2) * 3.14
//     return area
// }
// console.log("toirgin talbai", circleAreaCalc(area))

// let m
// const y2 = 23
// const y1 = 2
// const x1 = 24
// const x2 = 1
// m = y2-y1/x2-x1

// console.log(m)



// let facebook = "facebook"


// console.log(facebook.length)

// // "Hello world" string-с  wor гэсэн хэсгийг салгаж аваад томоор бичнэ үү.
// // 'aZZZbZZZc' endees a , b , c  -г агуулсан array үүсгэнэ үү .
// // "deviceName : macbook air -- deviceSerial : FFM3JHQ6L7 " string -г "deviceSerial = FFM3JHQ6L7" болгоно уу .
// // "I love HTML" өгүүлбэрийн HTML-г "JAVASCRIPT" болгоод 10 удаа хэвлэнэ үү (1 өгүүлбэр 1 нэг мөрт дараагийн өгүүлбэр дараагийн мөрнөөс).

// // Challenge нэртэй хувьсагчийг зарлаж, 20 - оос дээш тэмдэгт бүхий анхны утгад онооно уу.

// // toUpperCase() аргыг ашиглан бүх тэмдэгтүүдийг том үсгээр солино. 2 жишээ зохио

// // toLowerCase() аргыг ашиглан бүх тэмдэгтүүдийг том үсгээр солино. 2 жишээ зохио


// // Зохиосон Substring() аргыг ашиглан мөрийн эхний үгийг ав

// // Challenge: зарласан хувьcагчийн сүүлийн 10 тэмдэгтийг хэвлэх

// // Challenge: зарласан хувьcагчийн мөрөнд script үг байгаа эсэхийг include() аргыг ашиглан шалгана уу

// // split() аргыг ашиглан Challenge - г Array болгон хуваа

// // split() аргыг ашиглан Challenge: зарласан хувьcагчийн мөрийг зайд хуваа

// // 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' нь мөрийг таслал дээр хувааж, Array болгон өөрчилсөн.

// // replace() аргыг ашиглан Challenge нэртэй хувьсагчийн тэмдэгтийг өөрчилж өөр утгатай  болгон зохиож бич.

// // Challenge - н мөрийн 15-р индексийн тэмдэгт юу вэ? charAt() аргыг ашиглана уу.

// // Мөрний эхэн ба төгсгөлд байгаа хоосон зайг арилгахын тулд trim()-г ашиглана уу. 4 өөс дээш богино өгүүлбэр зохиох

// // concat() ашиглаад 'Дурын өгүүлбэрийг 'I love JavaScript' гэсэн нэг мөр болгон нэгтгэнэ үү.

// // Pinecone Academy Leap хөтөлбөр -г 18 удаа хэвлэх



// let js = "hello world"
// let wor =js.substring(6,9)
// console.log(wor.toUpperCase())


// let  newArray = "aZZZbZZZc"
// console.log(newArray.split("ZZZ"))

// let stringldee = "deviceName : macbook air -- deviceSerial : FFM3JHQ6L7 "
// let splited =stringldee.substring(28)
// console.log(splited.replace(':', '='))

// let love = "\\I love HTML \"hadscvjs\""
// let replaced = love.replace('HTML', 'JAVASCRIFT')

// console.log(replaced.repeat(1))


// // Challenge нэртэй хувьсагчийг зарлаж, 20 - оос дээш тэмдэгт бүхий анхны утгад онооно уу.

// const Challenge = "Challenge нэртэй хувьсагчийг зарлаж, 20 - оос дээш тэмдэгт бүхий анхны утгад онооно уу."


// // toUpperCase() аргыг ашиглан бүх тэмдэгтүүдийг том үсгээр солино. 2 жишээ зохио

// console.log(Challenge.toUpperCase())


// // toLowerCase() аргыг ашиглан бүх тэмдэгтүүдийг том үсгээр солино. 2 жишээ зохио
// console.log(Challenge.toLowerCase())

// // Зохиосон Substring() аргыг ашиглан мөрийн эхний үгийг ав

// console.log(Challenge.substring(0,9))

// // Challenge: зарласан хувьcагчийн сүүлийн 10 тэмдэгтийг хэвлэх

// console.log(Challenge.substring(Challenge.length -10))

// // Challenge: зарласан хувьcагчийн мөрөнд script үг байгаа эсэхийг include() аргыг ашиглан шалгана уу
// console.log(Challenge.includes("script"))
// // split() аргыг ашиглан Challenge - г Array болгон хуваа

// console.log(Challenge.split())
// // split() аргыг ашиглан Challenge: зарласан хувьcагчийн мөрийг зайд хуваа

// console.log(Challenge.split(" "))
// // 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' нь мөрийг таслал дээр хувааж, Array болгон өөрчилсөн.

// let fb = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
// console.log(fb.split(","))

// // replace() аргыг ашиглан Challenge нэртэй хувьсагчийн тэмдэгтийг өөрчилж өөр утгатай  болгон зохиож бич.
// console.log(Challenge.replace("Challenge", 'Mallenge'))
// // Challenge - н мөрийн 15-р индексийн тэмдэгт юу вэ? charAt() аргыг ашиглана уу.

// console.log(Challenge.charAt(15))
// // Мөрний эхэн ба төгсгөлд байгаа хоосон зайг арилгахын тулд trim()-г ашиглана уу. 4 өөс дээш богино өгүүлбэр зохиох
// let stringldee2 = "       Мөрний эхэн ба төгсгөлд байгаа хоосон зайг арилгахын тулд trim()-г ашиглана уу. 4 өөс дээш богино өгүүлбэр зохиох           "

// console.log(stringldee2.trim())
// // concat() ашиглаад 'Дурын өгүүлбэрийг 'I love JavaScript' гэсэн нэг мөр болгон нэгтгэнэ үү.
// console.log(stringldee2.concat('I love JavaScript' ))
// // Pinecone Academy Leap хөтөлбөр -г 18 удаа хэвлэх


// let Pinecones = "Pinecone Academy Leap \n"
// console.log(Pinecones.repeat(10))




// // '10' нь 10-тай яг тэнцүү эсэхийг шалгаарай. Хэрэв үгүй бол яг тэнцүү болго.
// const number10 = 10
 
// let  check = number10 === 19

// console.log(check)

// // Python болон jargon дээр 'on' гэсэн үг байгаа эсэхийг шалгана уу
// const p = "phyton"
// const j = "jargon"

// console.log(p.includes("on"),j.includes("on"))
// // "I hope this course is not full of jargon".  Өгүүлбэрт jargon үг байгаа эсэхийг шалгана уу.
// const letter = "I hope this course is not full of jargon"

// console.log(letter.includes("jargon"))
// // 0-ээс 100 хүртэл random тоог үүсгэнэ үү.
let randomNum 
console.log(Math.round(Math.random(randomNum)*100+1))

// 50-аас 100 хүртэл random тоог үүсгэнэ үү.

console.log(Math.round(Math.random(randomNum)*50+50))
// 0-ээс 255 хүртэлх random тоог үүсгэнэ үү.

console.log(Math.round(Math.random(randomNum)*255))
// Random тоо ашиглан 'JavaScript' гэдэг string-н тэмдэгтүүдэд хандана уу.
const javaLetter = "javaScrift"
let charRandom = Math.round(Math.random(randomNum)*9+1)
console.log(javaLetter.charAt(charRandom))
// 'Love is the best thing in this world. Some found their love and some are still looking for their love.'  Энэ өгүүлбэр дэх love гэдэг үгийг тоол.
const string = "Love is the best thing in this world. Some found their love and some are still looking for their love."
console.log(string.match(/love/gi))



// Дараах бичвэрээс тухайн хүний жилийн нийт орлогыг тооцоол.
// "Тэр сард 5000 еврогийн цалин, жилийн 10000 еврогийн урамшуулал , сард 15000 еврог онлайн сургалтаас авдаг.”

const monthSalary = 5000
const year = 10000
const MonthCorseSalary = 15000

let total

total = (monthSalary * 12) + year + (MonthCorseSalary * 12)
console.log(total)


// args = []
// var createHelloWorld = function() {
//     let hello = "Hello world"
//     return function(hello) {
//         args.
//     }
// };

// const f = createHelloWorld();

// console.log(f)

// condition
 
// -Өгөгдсөн тоо эерэг бол "positive" , сөрөг бол "negative" , 0 бол "zero" гэж хэвлэнэ үү .



function PositiveOrNegative (num) {
    let zero = 0
    let positive = 1
    let negative = -1

    if (positive === Math.sign(num) && num !== zero && num !== negative) {
        return "Positive"
    }
    else if (num === zero){
        return "zero"
    }
    else {
        return "negative"
    }
}
console.log(PositiveOrNegative(-4))




// -Өгөгдсөн насыг шалгаад 18-аас дээш бол "You are old enough to drive", 18-аас доош бол 18 хүрэхэд дутуу байгаа жилтэй нь хамт "You are left with 3 years to drive" гэж хэвлэнэ үү . 

function DriveChecker (age) {
    let ageOfMore
    let aged = 18 
    if ( age >= 18) {
        return "You are old enough to drive"
    }
    else {
        ageOfMore = aged - age
        return `You are left with ${ageOfMore} years to drive` 
    }

}

console.log(DriveChecker(11))

 
// -Өгөгдсөн тоог шалгаад тэгш тоо бол "even" , сондгой тоо бол "odd" гэж хэвлэнэ үү .
 

function OddOrEven(num) {
    let checked = 0
    if (checked === num % 2) {
        return "even"
    }
    else {
        return "odd"
    }
}
console.log(OddOrEven(1))


// -Өгөгдсөн нас нь 14-өөс доош бол "Children", 14-24 бол "Youth" , 24-64 бол "Adults" , 64-өөс дээш бол "Seniors" гэж хэвлэнэ үү .
 
function AdultChecker(age){
    if (age < 14)
        return "Children"
    else if (age >= 14 && age <= 24)
        return "Youth"
    else if (age >= 25 && age <= 64)
        return "Adults"
    else return "Seniors"
}
console.log(AdultChecker(65))
// -Өгөгдсөн гурвалжны гурван талыг зөв эсэхийг шалгана уу .
//  for example : 
//       a=5 b=6 c=7 / is valid 
//       a=4 b=8 c=19 / is invalid 

function Triangle(a, b, c){
    if ((a + b) > c && (a + c) > b && (b + c) > a  )
        return `a=${a} b=${b} c=${c} / is valid`
    else
    return `a=${a} b=${b} c=${c} / is invalid `
} 

console.log(Triangle(5,6,7))


// -Өгөгдсөн 2 тооноос ихийг нь олж хэвлэнэ үү .


function maxChecker(num1, num2) {
    // let num3 = [num1, num2]
    // return Math.max(num3)
    if (num1 > num2 && num1 !== num2){
        return num1
    }
    else {
        return num2
    }
}

console.log(maxChecker(4,7))

function AgeClass(age){
    if (age < 7)
        return "Сурагч биш байна"
    else if (age >= 7 && age <= 10)
        return "Бага анги"
    else if (age >= 11 && age <= 16)
        return "Дунд анги"
    else if (age >= 17 && age <= 18)
        return "Ахлах анги"

    else return "Насанд хүрсэн байна ш дээ"
}

console.log(AgeClass(18))

function classSearch(age, sex) {
    let Class = AgeClass(age)
     if (sex === "Эмэгтэй"){
        return `${sex} мөн ${Class}`
     }
     else if ((sex === "Эрэгтэй")){
        return `${sex} мөн ${Class}`
     }
     else {
        return "Buruu medeelel bna"
     }
}

console.log(classSearch(14, "Эрэгтэй"))

let i = 4 > 3; // true
let ii = 4 < 3; // false
let iii = 4 >= 3; 
let iv = 4 <= 3;
let v = 4 == 4;
let vi = 4 === 4;
let vii = 4 != 4;
let iix = 4 !== 4;
let ix = 4 != "4";
let x = 4 == "4";
let xi = 4 === "4";

let one = 4 > 3 && 10 < 12;
let two = 4 > 3 && 10 > 12;
let three = 4 > 3 || 10 < 12;
let four = 4 > 3 || 10 > 12;
let five = !(4 > 3);
let six = !(4 < 3);
let eight = !(4 > 3 && 10 < 12);
let nine = !(4 > 3 && 10 > 12);
let ten = !(4 === "4");

let arrayTrueOrFalse = [ iii, iv, v, vi,vii, iix, ix, x,  xi, one, two, three, four, five, six, eight, nine, ten].toString()



console.log(arrayTrueOrFalse)


