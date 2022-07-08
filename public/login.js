

const form = document.querySelector('.form');

const emailInput = document.querySelector('.email-input');
const passwordInput = document.querySelector('.password-input');


 const url = '/ricardo/home/login'

form.addEventListener('submit', async(e)=>{

    e.preventDefault()



 
    const email = emailInput.value;
    const password = passwordInput.value;
    const user = { email, password };

   

    try {
    const {data}= await axios.post(url, 

    JSON.stringify(user) ,{
    headers: { 'Content-type': 'application/json' },
       withCredentials:true
   }
  );

  console.log(JSON.stringify(response?.data));

   
   if (response.status === 200) {
    emailInput.value = '';
    passwordInput.value = '';
  }

  console.log(data);

} catch (error) {
    console.log(`problem ${error}`);
}
       
})
