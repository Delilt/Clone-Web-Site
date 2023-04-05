const switchers = [...document.querySelectorAll('.switcher')]

switchers.forEach(item => {
	item.addEventListener('click', function() {
		switchers.forEach(item => item.parentElement.classList.remove('is-active'))
		this.parentElement.classList.add('is-active')
	})
})

const input= document.querySelector("#logemail1");
const input2= document.querySelector("#logpassw");
const btngiris = document.querySelector("#girisbutonu");

btngiris.addEventListener("click",function(e){
    const inputvalue = input.value; 
    console.log(inputvalue);
    localStorage.setItem("mail5",inputvalue);
    e.preventDefault();
})

btngiris.addEventListener("click",function(e1){
    const input2value = input2.value; 
    console.log(input2value);
    localStorage.setItem("passw5" , input2value);
    e1.preventDefault();
})

