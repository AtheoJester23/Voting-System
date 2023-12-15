console.log(StudentsAccs);

var access = false;

const SN = document.querySelector('.StudentNumber');

const SP = document.querySelector('.StudentPassword')

document.body.addEventListener('keypress', (event) => {
    if(event.key === 'Enter'){
        DoneLogin();
    }
})

function DoneLogin(){
    for(let i = 0; i < StudentsAccs.length; i++){
        if(SN.value === StudentsAccs[i].StudNum && SP.value === StudentsAccs[i].StudPass){
            access = true;
        }
    }

    if(access === true){
        for(let i = 0; i < StudentsAccs.length; i++){
            if(SN.value === StudentsAccs[i].StudNum && SP.value === StudentsAccs[i].StudPass){
                console.log('success!')
                currentUser[0] = SN.value;
                localStorage.setItem('CUser', JSON.stringify(currentUser));
                window.location.href = "Dashboard.html";
                return;
            }
        }
    }else{
        alert('Invalid Login Credentials');
        return;
    }
}


localStorage.setItem('CUser', JSON.stringify(currentUser));

document.querySelector('.ProceedStudent').addEventListener('click',() => {
    // currentUser.push("TestingAnotherUser");
    DoneLogin();
});

function myFunction() {
    var x = document.querySelector(".StudentPassword");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }