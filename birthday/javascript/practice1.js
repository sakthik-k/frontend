let n1=document.getElementById("inn")
let n2=document.getElementById("inn1")
let res=document.getElementById("result")
function add(){
   let n3=n1.value+n2.value
   res.innerText="Result: "+ n3
}
function subtract(){
  let n4=n1.value-n2.value
  res.innerText="Result: "+n4
}
function multiply(){
   let n5=n1.value*n2.value
   res.innerText="Result: "+n5
}
function divide(){
   let n6=n1.value/n2.value
   res.innerText="Result: "+n6
}

