function signup(){
    let name=document.getElementById("name");
    let email=document.getElementById("email");
    let phone=document.getElementById("phone");
    let password=document.getElementById("password");

    // form validation
    let emailexp=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    let passexp=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{5,15}$/;

    if(!email.value.match(emailexp)){
        email.style.border="2px solid red";
    }
    else{
        email.style.border="2px solid green"
    }

    if(!password.value.match(passexp)){
        password.style.border="2px solid red";
    }
    else{
        password.style.border="2px solid green";
    }



    // let userobj={
    //     name:name,
    //     email:email,
    //     phone:phone,
    //     password:password
    //    }
    
   let userobj={
    name:name.value,
    email:email.value,
    phone:phone.value,
    password:password.value
   }

   console.log(userobj)
   
   let getusers=JSON.parse(localStorage.getItem("users"));
   console.log(getusers);
   
   if (getusers==null && email.value.match(emailexp) && password.value.match(passexp)){
    let arr=[];
    arr.push(userobj);
    localStorage.setItem("users",JSON.stringify(arr));
    window.location.href="./login.html";
   }

   else if(getusers!=null && email.value.match(emailexp) && password.value.match(passexp)){
    let finduser = getusers.find(function(value){
        if (value.email==email.value){
            return true;
        }
    })

    if(finduser==undefined){
        getusers.push(userobj);
        localStorage.setItem("users",JSON.stringify(getusers));
        window.location.href="./login.html";
    }
    else{
        alert("Email address already exists")
    }
   }
}

function login(){
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;

    let getusers=JSON.parse(localStorage.getItem("users"));
    let userIndex= getusers.findIndex(function(value){
        if(value.email==email && value.password==password){
            return true;
        }
    })

    if(userIndex!=-1){
     alert("Successfully login");
     window.location.replace("./tictactoehtml.html");
    }
    else{
        alert("Oops!! Credential Error")
    }
}