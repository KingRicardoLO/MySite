
const form = document.querySelector('.form');
const nameInput = document.querySelector('.name-input');
const emailInput = document.querySelector('.email-input');
const passwordInput = document.querySelector('.password-input');




 const url = '/ricardo/home/register'

form.addEventListener('submit', async(e)=>{

    e.preventDefault()



    const name = nameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const user = { name, email, password };

   

    try {
    
   await axios.post(url,{ name,email,password })
   
   

} catch (error) {
    console.log(`problem ${error}`);
}
       
})

