var i = 0;
var time = 3000; 
var images = [ ]; 

images[0] = "https://codehs.com/uploads/b53a6245a4d983f159963a19ecb8eda2"; 
images[1] = "https://codehs.com/uploads/ae12c4e532dcee8b46428804d96ac861"; 
images[2] = "https://codehs.com/uploads/2736296723c9f5d1888825967a49d355"; 
images[3] = "https://codehs.com/uploads/4dd6d94a68871d24d215474e13fbe2ff"; 
images[4] = "https://codehs.com/uploads/32bf7682087d953b191f0a0448ed0f08"; 
images[5] = "https://codehs.com/uploads/32bf7682087d953b191f0a0448ed0f08"; 




function changeImg() {
    document.slide.src = images[i]      

    if(i < images.length -1 ) {      
       
        i++;
   
    } else {

        i = 0  
       
    }        

    setTimeout("changeImg()", time);
} //this closing curly brace closes your function


window.onload=changeImg;


function validateForm() {
    // Get form values
    var firstName = document.getElementById('firstName').value.trim();
    var lastName = document.getElementById('lastName').value.trim();
    var address = document.getElementById('address').value.trim();
    var city = document.getElementById('city').value.trim();
    var state = document.getElementById('state').value.trim();
    var zip = document.getElementById('zip').value.trim();
    var guests = document.getElementById('guests').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var email = document.getElementById('email').value.trim();
    var meal = document.getElementById('meal').value;

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (!firstName || !lastName || !address || !city || !state || !zip || !guests || !phone || !meal) {
        alert("Please fill out all required fields.");
        return false;
    }

    document.getElementById('confirmation').innerText = 
        `Thank you for RSVP-ing, ${firstName}! We have recorded ${guests} guest(s) with meal choice: ${meal}.`;
       
    return false;
}