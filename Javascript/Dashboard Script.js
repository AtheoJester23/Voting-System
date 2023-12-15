document.querySelector('.DashboardGreetings').innerHTML = `Hello <div class = "HighlightName">${StudentsAccs[1].Name}</div>`


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

document.querySelector('.VotePage').addEventListener('click', () => {
    window.location.href = "Vote Page.html";
})

document.querySelector('.HeaderUserName').innerHTML = "Fix this" + currentUser[0];

console.log(currentUser);



for(let i = 0; i < StudentsAccs.length; i++){
    let getFirstword = StudentsAccs[i].Name.split(' '); 
    if(currentUser[0] === StudentsAccs[i].StudNum){
        document.querySelector('.HeaderUserName').innerHTML = StudentsAccs[i].Name; 
        document.querySelector('.DashboardGreetings').innerHTML = `Hello <div class = "HighlightName">${getFirstword[0]}</div>`

    }
}

let Fill1 = Fill2 = Fill3 = Fill4 = Fill5 = Fill6 = Fill7 = '';


console.log(SecondPageCandidates)

FirstPageCandidates.forEach((FPC) => {
    Fill1 += `
    <div class = "CandidatesPrev">
        <img src="${FPC.Picture}" alt="" class = "PrevPicCand">
        <p>${FPC.Name}</p>
    </div>
    `
});

SecondPageCandidates.forEach((SPC) => {
    Fill2 += `
    <div class = "CandidatesPrev">
        <img src="${SPC.Picture}" alt="" class = "PrevPicCand">
        <p>${SPC.Name}</p>
    </div>
    `
})

ThirdPageCandidates.forEach((TPC) => {
    Fill3 += `
    <div class = "CandidatesPrev">
        <img src="${TPC.Picture}" alt="" class = "PrevPicCand">
        <p>${TPC.Name}</p>
    </div>
    `
})

FourthPageCandidates.forEach((FPC) => {
    Fill4 += `
    <div class = "CandidatesPrev">
        <img src="${FPC.Picture}" alt="" class = "PrevPicCand">
        <p>${FPC.Name}</p>
    </div>
    `
})

FifthPageCandidates.forEach((ffthPC) => {
    Fill5 += `
    <div class = "CandidatesPrev">
        <img src="${ffthPC.Picture}" alt="" class = "PrevPicCand">
        <p>${ffthPC.Name}</p>
    </div>
    `
})

SixthPageCandidates.forEach((SxthPC) => {
    Fill6 += `
    <div class = "CandidatesPrev">
        <img src="${SxthPC.Picture}" alt="" class = "PrevPicCand">
        <p>${SxthPC.Name}</p>
    </div>
    `
})

SeventhPageCandidates.forEach((SvnthPC) => {
    Fill7 += `
    <div class = "CandidatesPrev">
        <img src="${SvnthPC.Picture}" alt="" class = "PrevPicCand">
        <p>${SvnthPC.Name}</p>
    </div>
    `
})


document.querySelector('.CandidatesFP').innerHTML = Fill1;
document.querySelector('.CandidatesSP').innerHTML = Fill2;
document.querySelector('.CandidatesTP').innerHTML = Fill3;
document.querySelector('.CandidatesFthP').innerHTML = Fill4;
document.querySelector('.CandidatesFfthP').innerHTML = Fill5;
document.querySelector('.CandidatesSxthP').innerHTML = Fill6;
document.querySelector('.CandidatesSvnthP').innerHTML = Fill7;



document.querySelector('.Winner1Voter').innerHTML = CandidatePosition[0].Position + `: ` + FirstPageCandidates[1].Name;
document.querySelector('.Winner2Voter').innerHTML = CandidatePosition[1].Position + `: ` + SecondPageCandidates[1].Name;
document.querySelector('.Winner3Voter').innerHTML = CandidatePosition[2].Position + `: ` + ThirdPageCandidates[0].Name;
document.querySelector('.Winner4Voter').innerHTML = CandidatePosition[3].Position + `: ` + FourthPageCandidates[0].Name;
document.querySelector('.Winner5Voter').innerHTML = CandidatePosition[4].Position + `: ` + FifthPageCandidates[1].Name;
document.querySelector('.Winner6Voter').innerHTML = CandidatePosition[5].Position + `: ` + SixthPageCandidates[0].Name;
document.querySelector('.Winner7Voter').innerHTML = CandidatePosition[6].Position + `: `+ SeventhPageCandidates[1].Name;

if(EndVoting === true){
    document.querySelector('.DashGrid').style.display = "none";
    document.querySelector('.TheResultVoter').style.display = "block";
}