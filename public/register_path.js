const submits = document.querySelector('.btn');

const nameInputs = document.querySelector('.form-input1');
const emailInputs = document.querySelector('.form-input2');
const passwordInputs = document.querySelector('.form-input3');


const problems = document.querySelector('.provide');



submits.addEventListener('click', ()=>{

 //// Errors();
  

   /// console.log("we online...")


if(nameInputs.value.length<2){

    nameInputs.style.border = "2px solid red";
  


}else{

    nameInputs.style.border = "none"



}


if(emailInputs.value.length<2){

    emailInputs.style.border = "2px solid red"
   

}else{

    emailInputs.style.border = "none"
 

}


if(passwordInputs.value.length<5){

passwordInputs.style.border = "2px solid red"


}else{

    passwordInputs.style.border = "none"
    

}

if(passwordInputs.value.length>5 & emailInputs.value.length>2 & nameInputs.value.length>2 ){


    window.location.href="login.html";
}

})