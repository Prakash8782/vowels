// const prakash=prompt("Enter a Name");
// var length=prakash.length;
// console.log(prakash.length);
// let count=0;
// for(let i=0;i<length;i++){
//     if(prakash[i]=="a" ||prakash[i]=="e" ||prakash[i]=="i"||prakash[i]=="o" ||prakash[i]=="u"){
//           count++;
//     }
// }
// console.log(count);


var a =prompt("Enter a numbers")
var sum=0,rem=0;
 while(a>0){
    rem=a%10;
    sum=sum+rem;
    a=(a-rem)/10;
 }
 console.log(sum);


