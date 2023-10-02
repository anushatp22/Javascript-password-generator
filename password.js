const withoutSpecials = '123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const specials = '!@#$%^&*123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
function passwordGenerating() {
    let password = ''

    const password_length = document.querySelector('.input-length').value;
    if (document.getElementById("javascript_checkbox").checked) {
        
           
        while (password_length > password.length) {
            password += specials[Math.floor(Math.random() * specials.length)];
            
       }
    
       console.log(password)
    }
    else {
        while (password_length > password.length) {
            password += withoutSpecials[Math.floor(Math.random() * withoutSpecials.length)];
        }
    }
    document.querySelector('#creating').value = password;
    document.querySelector('.input-length').value = '';
    document.getElementById('javascript_checkbox').checked = false;
    
    
   
    
    
    console.log(password_length)
}
