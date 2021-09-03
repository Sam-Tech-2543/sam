


document.getElementById("contactform").addEventListener('submit',submitform);
function submitform(e){
    e.preventDefault();
    console.log(123);
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var msg = document.getElementById("msg").value;

    console.log(name,email,mobile,msg)
    
    let contactInfo = contactInfo.push();
    newContactInfo.set({
        name: name,
        email: email,
        mobile: mobile,
        msg: msg,
    })

}
