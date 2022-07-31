//Write a program to check if a number is an even number or an odd number

//let number = 6
//let remainder = number % 2
//if (remainder == 0){
//    console.log('${number} is even')
//}else{
 //   console.log('${number} is odd')
//}
function checkifeven(num) {
    let remainder = num % 2
    if (remainder == 0){
           console.log('${num} is even')
        }else{
           console.log('${num} is odd')
        }
}
checkifeven(76)
checkifeven(50987)
checkifeven(787)