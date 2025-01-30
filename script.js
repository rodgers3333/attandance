const scriptURL = 'https://script.google.com/macros/s/AKfycbydvHC0Mn5MRkac9nwa4tTIXq-SAyd8gWLzRAIlQH4fkcQptiuoefvGjGTLh-C64H77/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Connection failed! Try again Later";
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
