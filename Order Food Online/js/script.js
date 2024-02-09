function like1(){
    alert("Thank You For Liking This Page..");
}
function leftbutt(){
    if(window.location.href=="index.html"){
        window.location.href="index.html";
    }
    else if(window.location.href=="fpass.html"){
        window.location.href="contact.html";
    }
    else if(window.location.href=="fpass.html"){
        window.location.href="contact.html";
    }
}
function rightbutt(){
    if(window.location.href=="fpass.html"){
        window.location.href="fpass.html";
    }
    else if(window.location.href=="index.html"){
        window.location.href="contact.html";
    }
    else if(window.location.href=="contact.html"){
        window.location.href="fpass.html";
    }
}
function writeCookie(){
    namecookie=document.myform.username.value;
    document.cookie="name="+namecookie+";";
    console.log("Set Cookies:"+document.cookie);
}