"use strict";
//     Calculator
let RESULT=document.querySelector(".result");
let Buttons= document.querySelectorAll("button")
let DICIMAL= document.querySelector(".dicimal");
let EQUAL=document.querySelector(".Equal");
let CLEAR=document.querySelector(".clear");

let DotDicimal=false;
let Sign= false;
let finalResult;

// ..............................CLEAR Button
CLEAR.addEventListener("click",()=>{
  RESULT.textContent= "0";
  DotDicimal= false;
  Sign=false;

});
// .............................DICIMAL Button
DICIMAL.addEventListener("click",()=>{
if (DotDicimal == false) {
  RESULT.textContent += ".";
  DotDicimal = true;
  
}
});
// ..............................NUMBER Button && ACTION Button
Buttons.forEach((button)=>{
  button.addEventListener("click",()=>{
// .............................NUMBER Button
    if (button.classList.contains("number")) {
      let CONTENT = button.value;
      if (RESULT.textContent == 0) {
        RESULT.textContent = CONTENT;
      }else{
        RESULT.textContent += CONTENT;
      }
// ...........................ACTION Button
    }else if (button.classList.contains("action")) {
      let SignAction = button.value;
      if (Sign == false) {
        RESULT.textContent += SignAction;
        Sign = true;
        // now after the "sign" we can reuse the "Dotdicimal"
        DotDicimal= false;
      }}
     })
});
// ................................EQUAL Button
   EQUAL.addEventListener("click",()=>{
    finalResult= eval(RESULT.textContent);
    RESULT.textContent= finalResult
   Sign= false;
 });


 
