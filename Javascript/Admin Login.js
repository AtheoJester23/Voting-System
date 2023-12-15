const AdminUser = document.querySelector('.AdminUserName');
const AdminPass = document.querySelector('.AdminPassword')

document.body.addEventListener('keypress', (event) => {
    if(event.key === 'Enter'){
        DoneLogin();
    }
})

function DoneLogin(){
    if(AdminUser.value === "user" && AdminPass.value === "123456"){
        window.location.href = "Admin Dashboard.html";
        return;
    }else{
        alert('Incorrect Password')
        return;
    }
}


document.querySelector('.ProceedAdmin').addEventListener('click',() => {
    DoneLogin();
});
