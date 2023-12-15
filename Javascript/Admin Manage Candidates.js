// document.querySelector('.OptVotersPosition').innerHTML = AddedPosition;
document.querySelector('.FrstPage').innerHTML = `${CandidatePosition[0].Position}`;
document.querySelector('.ScndPage').innerHTML = `${CandidatePosition[1].Position}`;
document.querySelector('.ThrdPage').innerHTML = `${CandidatePosition[2].Position}`;
document.querySelector('.FrthPage').innerHTML = `${CandidatePosition[3].Position}`;
document.querySelector('.FfthPage').innerHTML = `${CandidatePosition[4].Position}`;
document.querySelector('.SxthPage').innerHTML = `${CandidatePosition[5].Position}`;
document.querySelector('.SvnthPage').innerHTML = `${CandidatePosition[6].Position}`;

document.querySelector('.FrstPage').addEventListener('click', () => {
    window.location.href = "Pages/FirstPage.html";
})


console.log(CandidatePosition);

function CandidateCheckpoint(){
    localStorage.setItem("PositionOfCandidate", JSON.stringify(CandidatePosition));
}


document.querySelector('.LogOutButton').addEventListener('click', () => {
    window.location.href = "Login And Register.html"
})

document.querySelector('.DashboardPage').addEventListener('click', () => {
    window.location.href = "Admin Dashboard.html";
})

let inputPosition = document.querySelector('.PositionToBeAdded');

function StopInfo(numero){
    document.querySelector(`.CandidateInformations${numero}`).style.display = "none";
}


document.querySelector('.AddPos').style.display = "none";

console.log(Win1);

document.querySelector('.EndVote').addEventListener('click', () => {
    document.querySelector('.PermaPosition').style.display = "none";
    document.querySelector('.AddPos').style.display = "none";
    document.querySelector('.EndVote').style.display = "none";
    document.querySelector('.FinalResultAdmin').style.display = "inline";
    EndVoting = true;
    EndeEnd();
    SaveEndOfVoting();

    console.log(Win1);
    let abcdefghijk = Math.max(...Win1)
    console.log(abcdefghijk); 
    console.log(getW1(abcdefghijk, FirstPageCandidates));
})


document.querySelector('.FrstPage').addEventListener('click', () => {
    window.location.href = "Pages/FirstPage.html";
})

document.querySelector('.ScndPage').addEventListener('click', () => {
    window.location.href = "Pages/SecondPage.html";
})

document.querySelector('.ThrdPage').addEventListener('click', () => {
    window.location.href = "Pages/ThirdPage.html";
})

document.querySelector('.FrthPage').addEventListener('click', () => {
    window.location.href = "Pages/FourthPage.html";
})

document.querySelector('.FfthPage').addEventListener('click', () => {
    window.location.href = "Pages/FifthPage.html";
})


document.querySelector('.SxthPage').addEventListener('click', () => {
    window.location.href = "Pages/SixthPage.html";
})

document.querySelector('.SvnthPage').addEventListener('click', () => {
    window.location.href = "Pages/SeventhPage.html";
})

document.querySelector('.Winner1Admin').innerHTML = CandidatePosition[0].Position + `: ` + FirstPageCandidates[1].Name;
document.querySelector('.Winner2Admin').innerHTML = CandidatePosition[1].Position + `: ` + SecondPageCandidates[1].Name;
document.querySelector('.Winner3Admin').innerHTML = CandidatePosition[2].Position + `: ` + ThirdPageCandidates[0].Name;
document.querySelector('.Winner4Admin').innerHTML = CandidatePosition[3].Position + `: ` + FourthPageCandidates[0].Name;
document.querySelector('.Winner5Admin').innerHTML = CandidatePosition[4].Position + `: ` + FifthPageCandidates[1].Name;
document.querySelector('.Winner6Admin').innerHTML = CandidatePosition[5].Position + `: ` + SixthPageCandidates[0].Name;
document.querySelector('.Winner7Admin').innerHTML = CandidatePosition[6].Position + `: `+ SeventhPageCandidates[1].Name;



if(EndVoting === true){
    document.querySelector('.PermaPosition').style.display = "none";
    document.querySelector('.AddPos').style.display = "none";
    document.querySelector('.EndVote').style.display = "none";
    document.querySelector('.FinalResultAdmin').style.display = "block";
}