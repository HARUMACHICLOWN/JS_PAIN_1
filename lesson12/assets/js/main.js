//let num = 1; 
//while (num <= 100) {
//    console.log(num); 
//    num ++;
//}


//let num = 11; 
//while(num <= 33) {
//    console.log(num); 
//    num ++;
//} 


//let num = 0
//while(num < 100) {
//    num++;
//    if(num % 2 == 0) console.log(num)
//}


 
//var sum = 0
//    for(let a = 0; a < 100; a++){
//         sum += a
//        }
//     alert(sum)


// for(a=[1,2,3,4,5]; ;++a){
//     alert(a)
// }


// let array = [1,2,3,4,5];
// let result = 0
// for(let a=0; a < array.length ;a++ ){
// result += array[a];
// console.log(result)
// }


// var obj = {green: 'Зелёный', red:' Красный', blue:' Синий'};
// let text = "";
// for(let x in obj){
//     text+=obj[x]
// }
// alert(text)


// var obj = {Коля: '200', Вася: '300', Петя: '400'};
// for(key in obj){
//     document.write([key]+ ' - Зарплата '+ obj[key]+' долларов'+'<br>');
// }


// Задачи 

// let arr = [2,5,9,15,0,4];
// for (i = 0; i < arr.length; i++) {
//     if (arr[i] > 3 && arr[i] < 10) {
//       console.log(arr[i]);
//     }
//   };


// let mass1 = [1,2,3,4,5,-6,-4,-5,-8,-9]
// for(i = 0;i < mass1.length;i++){
//     if (mass1[i] > 0){
//         continue
//     }else{
//         console.log(mass1[i])
//     }
// }


// mass = [1,2,5,9,4,13,4,10];
// for (i= 0;i < mass.length;i++){
//     if (mass[i] == 4){
//         console.log('Есть!')
//         console.log(mass[i])
//         break
//     }
// }


// function firstDigit(n) {
//     let rest = n, reminder = 0;
//     while (rest) {
//         reminder = rest % 10;
//         rest = (rest - reminder) / 10;
//     }
//     return reminder;
// }
// mass = [10,20,30,50,235,3000];
// let tmp = [1, 2, 5];
// for (let i = 0; i < mass.length; i++) {
//     let e = mass[i],
//         digit = firstDigit(e);
//     if (tmp.includes(digit))
//         console.log(e)
// }


// mass = [1,2,3,4,5,6,7,8,9];
// let str = '-';
// for (i in mass){
//     str += mass[i]+'-'
// }
// console.log(str);


// arr = ['пн', 'вт', 'ср', 'чт', 'пт','сб', 'вс'];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 'сб' || arr[i] == 'вс') {
//         document.write('<b>' + arr[i] + '</b> ');
//     } else {
//         document.write(arr[i] + ' ');
//     } 
// }


// let del = 1000
// for(i = 0;i < 1000;i++){
//     num = i + 1
//     del = del / 2
//     console.log(del)
//     console.log(`кол-во итераций:${num}`)
//     if(del < 50){
//         break
//     }
// }





