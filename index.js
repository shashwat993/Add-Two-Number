const x = document.querySelector(".x ")
// console.log(x)
const y = document.querySelector(" .y")
// console.log(y)
const calculate = document.querySelector(".buton")
// console.log(calculate)
const Ans = document.querySelector(".result")


calculate.addEventListener("click",function(){
   
   const result = +x.value + +y.value
//    console.log(Ans.value)
Ans.value=result
   
})