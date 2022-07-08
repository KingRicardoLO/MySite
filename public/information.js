
const email_data = document.querySelector('.p');

const button1 = document.querySelector('.btn_1');
const button2= document.querySelector('.btn_2');

const area = document.querySelector('.inner_container');

const D_url = '/ricardo/data'
const E_url = '/ricardo/email'

const GetUsers =  async()=>{
  

try {
    const res = await axios.get(D_url,{
        headers: { 'Content-type': 'application/json' },
          
       })

const tasks=res.data.user
console.log(tasks);


const allTask = tasks.map((task)=>{
    const {  _id: taskID, name,email } = task
    
return `<p>Name:${name},<br> Email: ${email}</p> <br><br><br>`

}).join('')

area.innerHTML = allTask






} catch (error) {

    console.log(` ${error}`);
}

}




button1.addEventListener('click',GetUsers)

const GetEmails =  async()=>{
  

try {
    const res = await axios.get(E_url,{
        headers: { 'Content-type': 'application/json' },
          
       })

const tasks=res.data.user
console.log(tasks);


const allTask = tasks.map((task)=>{
    const {  _id: taskID, name,email } = task
    
return `<p> Email: ${email}</p> <br><br><br>`

}).join('')

area.innerHTML = allTask






} catch (error) {

    console.log(` ${error}`);
}

}

button2.addEventListener('click', GetEmails )

