console.log('Testing');
let OpenOption = false;
let AOrS = document.querySelector('.AdminOrStudent');

document.querySelector('.Register').addEventListener('click',() => {
    if(OpenOption === false){
        AOrS.style.display = "inline";
        window.setTimeout(function(){
            AOrS.style.opacity = 1;
            AOrS.style.transition = "all 0.15s"
        }, 1);

        OpenOption = true;   
    }else{
        AOrS.style.display = "none";
        window.setTimeout(function(){
            AOrS.style.opacity = 0;
            AOrS.style.transition = "all 0.15s"
        }, 1);
        OpenOption = false; 
    }


    
})

document.querySelector('.Register2').addEventListener('click',() => {
    alert("In Progress");
})

document.querySelector('.OptAdmin').addEventListener('click', () => {
    window.location.href = "Admin Login.html"
})

document.querySelector('.OptStudent').addEventListener('click', () => {
    window.location.href = "Student Login.html"
})