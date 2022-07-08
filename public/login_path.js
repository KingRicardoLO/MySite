const submits = document.querySelector('.btn');


const emailInputs = document.querySelector('.form-input1');
const passwordInputs = document.querySelector('.form-input2');



///////function Errors(){




//}

submits.addEventListener('click', ()=>{

 //// Errors();
  

   /// console.log("we online...")



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


if(passwordInputs.value.length>5 & emailInputs.value.length>2  ){


    window.location.href="index.html";
}

})