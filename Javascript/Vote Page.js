document.querySelector('.LogOutButton').addEventListener('click', () => {
    currentUser.splice(0,1);
    activeAccount.splice(0,1);
    localStorage.setItem('CUser', JSON.stringify(currentUser));
    localStorage.setItem('CUser', JSON.stringify(currentUser));
    currentVote[0].First = 100;
    currentVote[1].Second = 100;
    currentVote[2].Third = 100;
    currentVote[3].Fourth=100;
    currentVote[4].Fifth=100;
    currentVote[5].Sixth=100;
    currentVote[6].Seventh=100;
    currentVote[7].Eight=100;
    currentVote[8].Ninth=100;
    currentVote[9].Tenth=100;
    //AddThis
    SetAllMVC0();
    voteCounted = 0;
    SaveCountedVote();
    SaveActiveAcc();
    SaveCandIndex();
    window.location.href = "Login And Register.html"
})


console.log(currentVoteState);
console.log("SeventhPageCandidates Below")
console.log(SeventhPageCandidates);
console.log("Candidate positions below: ");
console.log(CandidatePosition);
console.log("CurrentVote below: ")
console.log(currentVote);
console.log("ActiveAccount below: ")
console.log(activeAccount);
console.log("Monitor Vote Counting Below: ");
console.log(MonitorVoteCounting);

document.querySelector('This is vote page')

document.querySelector('.VtrsFirstPageChoice').innerHTML =   `${CandidatePosition[0].Position}:`
document.querySelector('.VtrsSecondPageChoice').innerHTML =   `${CandidatePosition[1].Position}: `
document.querySelector('.VtrsThirdPageChoice').innerHTML =   `${CandidatePosition[2].Position}: `
document.querySelector('.VtrsFourthPageChoice').innerHTML =   `${CandidatePosition[3].Position}: `
document.querySelector('.VtrsFifthPageChoice').innerHTML =   `${CandidatePosition[4].Position}: `
document.querySelector('.VtrsSixthPageChoice').innerHTML =   `${CandidatePosition[5].Position}: `
document.querySelector('.VtrsSeventhPageChoice').innerHTML =   `${CandidatePosition[6].Position}: `

// currentVoteState[0] = false;
console.log(currentVoteState);
console.log("MonitorVoteCounting below:")
console.log(MonitorVoteCounting);


if(currentVote[0].First < 10){
    if(currentVoteState[0] === false){
        document.querySelector('.Choice1').innerHTML = '';
    }else if(currentVoteState[0] === true){
        document.querySelector('.Choice1').innerHTML = `${FirstPageCandidates[currentVote[0].First].Name}`
    }
}

if(currentVote[1].Second < 10){
    if(currentVoteState[1] === false){
        document.querySelector('.Choice2').innerHTML = '';
    }else if(currentVoteState[1] === true){
        document.querySelector('.Choice2').innerHTML = `${SecondPageCandidates[currentVote[1].Second].Name}`
    }
}

if(currentVote[2].Third < 10){
    if(currentVoteState[2] === false){
        document.querySelector('.Choice3').innerHTML = '';
    }else if(currentVoteState[2] === true){
        document.querySelector('.Choice3').innerHTML = `${ThirdPageCandidates[currentVote[2].Third].Name}`
    }
}

if(currentVote[3].Fourth < 10){
    if(currentVoteState[3] === false){
        document.querySelector('.Choice4').innerHTML = '';
    }else if(currentVoteState[3] === true){
        document.querySelector('.Choice4').innerHTML = `${FourthPageCandidates[currentVote[3].Fourth].Name}`
    }
}

if(currentVote[4].Fifth < 10){
    if(currentVoteState[4] === false){
        document.querySelector('.Choice5').innerHTML = '';
    }else if(currentVoteState[4] === true){
        document.querySelector('.Choice5').innerHTML = `${FifthPageCandidates[currentVote[4].Fifth].Name}`
    }
}

if(currentVote[5].Sixth < 10){
    if(currentVoteState[5] === false){
        document.querySelector('.Choice6').innerHTML = '';
    }else if(currentVoteState[5] === true){
        document.querySelector('.Choice6').innerHTML = `${SixthPageCandidates[currentVote[5].Sixth].Name}`
    }
}

if(currentVote[6].Seventh < 10){
    if(currentVoteState[6] === false){
        document.querySelector('.Choice7').innerHTML = '';
    }else if(currentVoteState[6] === true){
        document.querySelector('.Choice7').innerHTML = `${SeventhPageCandidates[currentVote[6].Seventh].Name}`
    }
}

console.log("-------------------------------------");


//ChangeThis
document.querySelector('.FinalSubmit').addEventListener('click', () => {
    // AlreadyVoted();
    if(voteCounted === CandidatePosition.length){
        FirstPageCandidates[currentVote[0].First].Votes += 1;
        SecondPageCandidates[currentVote[1].Second].Votes += 1;
        ThirdPageCandidates[currentVote[2].Third].Votes += 1;
        FourthPageCandidates[currentVote[3].Fourth].Votes += 1;
        FifthPageCandidates[currentVote[4].Fifth].Votes += 1;
        SixthPageCandidates[currentVote[5].Sixth].Votes += 1;
        SeventhPageCandidates[currentVote[6].Seventh].Votes += 1;
        StudentsAccs[activeAccount].Voted = true;
        AlreadyVoted();
        SaveUserVoted();
    }else{
        alert("Missing Fields: Please Vote to All Position")
    }
    
    // document.querySelector('.DashboardComponents').style.display = "flex";
})

document.querySelector('.DashboardPage').addEventListener('click', () => {
    window.location.href = "Dashboard.html";
})

let presidents = ''

 
console.log(currentUser);

// console.log(StudentsAccs[1].Voted = true);
console.log(StudentsAccs[1]);

// console.log(activeAccount.push(1));
// console.log(activeAccount)
// console.log("-------------------------------------");
// activeAccount.splice(0,1)
// console.log(activeAccount);

function AlreadyVoted(){
    document.querySelector('.CurrentUserVote').style.display = "none";
    document.querySelector('.VoteCandidatePositions').style.display = "none";
    document.querySelector('.DashboardComponents').innerHTML = `
        <h1>Student Council Candidates</h1>
        <div class = "CenterTheImage">
            <img src="/Pictures/SuccessfullyVoted.png" alt="" class = "DoneVoting">
        </div>
        <h3 class = "UserSuccessfullyVoted">Successfully Voted!</h3>
    `
}

for(let i = 0; i < StudentsAccs.length; i++){
    if(currentUser[0] === StudentsAccs[i].StudNum){
        document.querySelector('.HeaderUserName').innerHTML = StudentsAccs[i].Name;
        activeAccount[0] = (i);
        SaveActiveAcc();
        console.log("The active account is index: " + activeAccount);
    }
}

document.querySelector('.FirstPositionStudent').innerHTML = CandidatePosition[0].Position;
document.querySelector('.SecondPositionStudent').innerHTML = CandidatePosition[1].Position;
document.querySelector('.ThirdPositionStudent').innerHTML = CandidatePosition[2].Position;
document.querySelector('.FourthPositionStudent').innerHTML = CandidatePosition[3].Position;
document.querySelector('.FifthPositionStudent').innerHTML = CandidatePosition[4].Position;
document.querySelector('.SixthPositionStudent').innerHTML = CandidatePosition[5].Position;
document.querySelector('.SeventhPositionStudent').innerHTML = CandidatePosition[6].Position;

console.log(voteCounted);

document.querySelector('.FirstPositionStudent').addEventListener('click', () => {
    window.location.href = "Pages/UserVotingPages/FirstPositionUser.html";
})

document.querySelector('.SecondPositionStudent').addEventListener('click', () => {
    window.location.href = "Pages/UserVotingPages/SecondPositionUser.html";
})

document.querySelector('.ThirdPositionStudent').addEventListener('click', () => {
    window.location.href = "Pages/UserVotingPages/ThirdPositionUser.html";
})

document.querySelector('.FourthPositionStudent').addEventListener('click', () => {
    window.location.href = "Pages/UserVotingPages/FourthPositionUser.html";
})

document.querySelector('.FifthPositionStudent').addEventListener('click', () => {
    window.location.href = "Pages/UserVotingPages/FifthPositionUser.html";
})

document.querySelector('.SixthPositionStudent').addEventListener('click', () => {
    window.location.href = "Pages/UserVotingPages/SxthPositionUser.html";
})

document.querySelector('.SeventhPositionStudent').addEventListener('click', () => {
    window.location.href = "Pages/UserVotingPages/SvnthPositionUser.html";
})

if(StudentsAccs[activeAccount].Voted === true){
    AlreadyVoted();
}

console.log(StudentsAccs);
