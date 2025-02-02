const scriptURL = 'https://script.google.com/macros/s/AKfycbyRzBnlL4MzEuQkRgagie_XvoDmuGUFHBpLicRSFbA9H0xvxrIDzMmp4K-yoFG4lNjE/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
        if (response.ok) {
            msg.innerHTML = "Form submitted successfully!";
            msg.style.color = "green";
            setTimeout(function() {
                msg.innerHTML = "";
            }, 5000);
            form.reset();
        } else {
            throw new Error('Connection failed');
        }
    })
    .catch(error => {
        msg.innerHTML = "Connection failed! Try again later";
        msg.style.color = "red";
        setTimeout(function() {
            msg.innerHTML = "";
        }, 5000);
        console.error('Error!', error.message);
    });
});
