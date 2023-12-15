document.querySelector('.LogOutButton').addEventListener('click', () => {
    window.location.href = "Login And Register.html"
})

console.log("testing");

document.querySelector('.VotePage').addEventListener('click', () => {
    window.location.href = "Admin Manage Candidate.html";
})

let resultbox = '';

CandidatePosition.forEach((WhatPos, index) => {
    resultbox += `
    <div class = "Results1">
        <div class = "PositionTitleAdmin">${CandidatePosition[index].Position}</div>
        <div class = "CandidateVoteCountsAdmin${index}">
            
        </div>
    </div>

    <style>
        .CandidateVoteCountsAdmin${index}{
            margin-left: 10%;
            margin-top: 20px;
        }
    </style>
    `
});


let insideResultBox = insideResultBox1 = insideResultBox2 = insideResultBox3 = insideResultBox4 = insideResultBox5 = insideResultBox6 = insideResultBox7 = '';

FirstPageCandidates.forEach((AdminFPC, index) => {
    insideResultBox += `
        <div>${AdminFPC.Name}: ${AdminFPC.Votes} votes</div>
    `
});

SecondPageCandidates.forEach((AdminFPC1, index) => {
    insideResultBox1 += `
        <div>${AdminFPC1.Name}: ${AdminFPC1.Votes} votes</div>
    `
});

ThirdPageCandidates.forEach((AdminFPC, index) => {
    insideResultBox2 += `
        <div>${AdminFPC.Name}: ${AdminFPC.Votes} votes</div>
    `
});

FourthPageCandidates.forEach((AdminFPC, index) => {
    insideResultBox3 += `
        <div>${AdminFPC.Name}: ${AdminFPC.Votes} votes</div>
    `
});

FifthPageCandidates.forEach((AdminFPC, index) => {
    insideResultBox4 += `
        <div>${AdminFPC.Name}: ${AdminFPC.Votes} votes</div>
    `
});

SixthPageCandidates.forEach((AdminFPC, index) => {
    insideResultBox5 += `
        <div>${AdminFPC.Name}: ${AdminFPC.Votes} votes</div>
    `
});

SeventhPageCandidates.forEach((AdminFPC, index) => {
    insideResultBox6 += `
        <div>${AdminFPC.Name}: ${AdminFPC.Votes} votes</div>
    `
});


document.querySelector('.DashboardComponentsAdmin').innerHTML = resultbox;



let abc = [
    {
        Name: "Ted",
        Age: 80
    },
    {
        Name: "Brad",
        Age: 25
    },
    {
        Name: "Bean",
        Age: 27
    }
]

console.log(abc);



let TheVariable = [];
//Collect all the numbers to be compared
for(let i = 0; i < abc.length; i++){
    TheVariable.push(abc[i].Age)
}



console.log(TheVariable);

//Get the highhest votes

console.log(Math.max(...TheVariable));
let FindThis = Math.max(...TheVariable);

//Get the index of the highest vote
const getAge = (Age, TheArray) => TheArray.findIndex(val => val.Age === Age);

console.log((getAge(FindThis, abc)));
let found = (getAge(FindThis, abc));

//Display the result:
console.log(abc[found].Name);

document.querySelector('.CandidateVoteCountsAdmin0').innerHTML = insideResultBox;
document.querySelector('.CandidateVoteCountsAdmin1').innerHTML = insideResultBox1;
document.querySelector('.CandidateVoteCountsAdmin2').innerHTML = insideResultBox2;
document.querySelector('.CandidateVoteCountsAdmin3').innerHTML = insideResultBox3;
document.querySelector('.CandidateVoteCountsAdmin4').innerHTML = insideResultBox4;
document.querySelector('.CandidateVoteCountsAdmin5').innerHTML = insideResultBox5;
document.querySelector('.CandidateVoteCountsAdmin6').innerHTML = insideResultBox6;




console.log(Win1);

//Put in a each Variable, name "WinnerHighest, 1, 2, 3, 4, 5"
let x = Math.max(...Win1);
console.log("The x is below: ");
console.log(x); 


console.log("FirstCandidates below: ")
console.log(FirstPageCandidates)

let getNameWinner = (HighVote, VoteArray) => VoteArray.findIndex(value1 => value1.HighVote === HighVote);
let searchThis = (getNameWinner(x, FirstPageCandidates));


console.log(searchThis);