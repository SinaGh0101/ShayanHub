let error = () => {
localStorage.clear()
    let userName = document.getElementById("text").value;
    let password = document.getElementById("password").value;
    if(userName == "shayan" && password == "123"){
        console.log("login Succsses");
            localStorage.setItem('text', userName);
            console.log("login Succsses");
            window.location.href = "Home.html";
        }
    else if(userName == "Admin" && password == "root"){
        localStorage.setItem('text', userName);
        console.log("login Succsses");
        window.location.href = "Home.html";
    }
    else{
        document.getElementById("error").style.display = "block"
    }
}
let name = localStorage.getItem('text');
let password = localStorage.getItem('password');
document.getElementById("User").innerHTML = name
//----------------------------------------------------------------------
//admin
if(name == "Admin"){
    console.log(true)
    
}
else{
    console.log(false)
}
