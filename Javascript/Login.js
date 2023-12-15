



function Selected(evt, Opt){
    var i, Datas, OptionButton, ProceedButton;
    Datas = document.getElementsByClassName("Datas");
    ProceedButton = document.querySelector('.Proceed');
    
    for(i = 0; i<Datas.length; i++){
        Datas[i].style.display = "none";
    }
    OptionButton = document.getElementsByClassName("OptionButton");
    for(i = 0; i < OptionButton.length; i++){
        OptionButton[i].className = OptionButton[i].className.replace("active", "");
    }
    document.getElementById(Opt).style.display = "block";
    evt.currentTarget.className += " active";
}

document.querySelector('.SOption').addEventListener('click', () => Selected(event, 'Student'))

document.querySelector('.AOption').addEventListener('click', () => Selected(event, 'Admin'))




//inputs(Student)
const SN = document.querySelector('.StudentNumber');

const SP = document.querySelector('.StudentPassword')

document.querySelector('.ProceedStudent').addEventListener('click', () => {
    for(let i = 0; i < StudentsAccs.length; i++){
        if(SN.value === StudentsAccs[i].StudNum && SP.value === StudentsAccs[i].StudPass){
            console.log('success!')
            window.location.href = "Dashboard.html";
            return;
        }else{
            console.log('try again!')
            return;
        }
    }
});






document.querySelector('.ProceedAdmin').addEventListener('click', () => {console.log('Admin')});