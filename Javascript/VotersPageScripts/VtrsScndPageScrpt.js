console.log("This is 2nd page for voters")
console.log("The Position of candidates is below:")
console.log(CandidatePosition);


//ChangeThis
console.log("The [current]PageCandidates is below:")
console.log(SecondPageCandidates);

console.log("The currentVote is below:");
console.log(currentVote);

// FirstPageCandidates.findIndex((n) => n.Name === "Claudia Wells")
// alert("Find a way to get the index of the voted candidate and put it in a new data js, that then be used to add vote to candidate, then after log out, that list will be removed");

function SaveCandidatePosition(){
    localStorage.setItem('PositionName', JSON.stringify(CandidatePosition));
}

for(let i = 0; i < StudentsAccs.length; i++){
    if(currentUser[0] === StudentsAccs[i].StudNum){
        document.querySelector('.HeaderUserName').innerHTML = StudentsAccs[i].Name;

    }
}

//ChangeThis
document.querySelector('.ThePosition').innerHTML = CandidatePosition[1].Position;


let Something = '';

SecondPageCandidates.forEach((Candidates, index) => {
    Something += `
    <div class = "PageVoteBox${index}">
        <img src="${Candidates.Picture}" alt="" class = "Photo">
        <div class = "TextInfo">
            <div>Name: ${Candidates.Name}</div>
            <div>Year Level: ${Candidates.Year_Level}</div>
            <div>Course: ${Candidates.Course}</div>
        </div>
        <div class = "OptEdittheCandidate">
            <button onclick = "GetCandidateIndex2(${index})" class = "VoteThisCand${index}">Vote</button>
        </div>

    </div>
    </div>


    <style>
        .PageVoteBox${index}{
            background-color: white;
            border-radius: 10px;
            width: 200px;
            height: 350px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            box-shadow: 0px 1px 3px #888888;
            position: relative;
            color: black;
            border-color: Green;
            border: none;
        }

        .VoteThisCand${index}:hover{
            cursor: pointer;
        }

        @media (min-width: 320px) and (max-width: 1422px){
            .PageVoteBox${index}{
                height: 450px
                width: 500px;
                padding: 60px 30px;
            }

            .PageVoteBox${index} button{
                font-size: xx-large;
                margin-top: 20px;
            }
        }
    </style>
    `
});

// delete a property of array inside object
// console.log(delete currentVote[1].First);

console.log(MonitorVoteCounting);

//ChangeThis
function GetCandidateIndex2(VoteCand){
    if(MonitorVoteCounting[1] === false){
        currentVote[1].Second = VoteCand;
        currentVoteState[1] = true;
        MonitorVoteCounting[1] = true;
        SaveMVC();
        SaveVoteState();
        SaveCandIndex();
        PlusVoteCount();
        window.location.href = "/Vote Page.html";
    }else if(MonitorVoteCounting[1] === true){
        currentVoteState[1] = false;
        MonitorVoteCounting[1] = false;
        SaveMVC();
        SaveVoteState();
        if(voteCounted > 0){
            MinusVoteCount();
        };
        window.location.reload();
    }
}

document.querySelector('.CandidatesGridList').innerHTML = Something;

document.querySelector('.DashboardPage').addEventListener('click', () => {
    window.location.href = "/Dashboard.html";
})

document.querySelector('.LogOutButton').addEventListener('click', () => {
    currentUser.splice(0,1);
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
    SaveCandIndex();
    voteCounted = 0;
    SaveCountedVote();
    SetAllMVC0();
    window.location.href = "/Login And Register.html"
})

//ChangeThis and one on the Vote Page.js
if(currentVote[1].Second < 10){
    if(MonitorVoteCounting[1] === true){
        if(currentVoteState[1] === true){
            document.querySelector(`.PageVoteBox${currentVote[1].Second}`).style.border = "Thin solid Green";
        }
    }else if(MonitorVoteCounting[1] === false){
        document.querySelector(`.PageVoteBox${currentVote[1].Second}`).style.border = "none";
    }
}