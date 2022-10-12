function randomLink() {
    let link;
    let numero = Math.floor(Math.random() * 3 + 0)
    console.log(numero);

    if (numero == 0) {
        link = document.getElementById("link")
        link.setAttribute('href', 'https://outlook.live.com/mail/0/');
        console.log(link);
    } else if (numero == 1) {
        link = document.getElementById("link")
        link.setAttribute('href', 'https://www.google.com/intl/es/gmail/about/');
    }else{
        link = document.getElementById("link")
        link.setAttribute('href', 'https://consent.yahoo.com/v2/collectConsent?sessionId=3_cc-session_415adff9-070d-4d10-a2b5-8aef2c71875a');
    }
}