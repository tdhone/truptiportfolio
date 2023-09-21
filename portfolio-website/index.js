var typed = new Typed('.text', {
    strings: ['Fullstack Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

async function sendEmail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value

    };
    const serviceID = "service_o1ltspo";
    const templateID = "template_h63c67y";

    emailjs.send(serviceID,templateID, params)
        .then (function (res) {
                alert("Message send successfully!");
            });
    
};




