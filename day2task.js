//1to10
// num=10
// let i=1;
// while(!(i==num+1)){
//   console.log(i);
//   i++;
// }

//10to1
// num=10
// i=num;
// while(!i==0){
//     console.log(i)
//     i--
// }


// num=-10
// i=-1
// while(!(i==num-1)){
//     console.log(i)
//     i--
// }

// -10to-1
// num=-10
// i=num
// while(!i==0){
//     console.log(i)
//     i++
// }



// 2) Write a program to find the largest prime in the given number
// input: 46537
// output: 7


// let num=prompt("enter a number:")
// max=1
// for(i=1;i<=num;i++){

// if(num[i]>max)
// max=num[i]

// }
// console.log(" the largest prime number:",max)

// 3) Write a program to print the sum of largest and smallest prime digits in the given number
// input: 5497351
// output: 10

// num="5497351"
// max=0
// min=num[0]
// for(n of num){
// if(n>1){
//     b=true
//     for(i=2;i<n;i++){
//         if(n%i==0){
//         b=false
//         break
//     }
// }
// if (b) {
//     if (max<n)
//         max =Number(n);
//     if(min>n)
//        min=Number(n);
//    }
//   }
// }
// console.log(max+min)


// 4) Write a program to print the largest non prime digit in the given number
// input: 463482
// output: 8
// num="463482"
// max=0
// for(n of num){
//     if(n>1){
//         b=true
//         for(i=2;i<n;i++){
//             if(n%i==0){
//                 b=false
//                 if(max<n)
//                 max=Number(n);
//                 break
//             }

//         }
//     }
// }
// console.log("biggest non prime number",max)