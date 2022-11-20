const form = document.querySelector('form');
const inputName = document.querySelector('#name');
const email = document.querySelector('#email');
const number = document.querySelector('#number');
const tablebody = document.querySelector('tbody');
const error = document.querySelector('.error');
const success = document.querySelector('.success')

    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        if(inputName.value =="" || email.value =="" || number.value == "" ){
    error.innerText = "Incomplete Information";
    error.classList.add("error");
    setTimeout(()=> {
        error.innerText ="";
    },1000);
    return;  
        }
    
    
tablebody.innerHTML += `<tr>
<td>${inputName.value}</td>
<td>${email.value}</td>
<td>${number.value}</td>
<td class="remove">
<button>Remove</button>
</td>

</tr>`

var row = document.querySelectorAll(".remove");
for(let i=0; i<row.length; i++){
    row[i].onclick = function(){
        this.parentNode.remove();
        success.innerText = "Information Deleted Successfully";
               success.classList.add("success");
               setTimeout(() => {
                   success.innerText = "";
               }, 1000);
    }
}
inputName.value =""
email.value =""
number.value =""
})