const StudentsAccs = [
    {
        StudNum: '2023500001',
        StudPass: 'abcde',
        Name: "Atheo Jester S. Baltazar",
        Voted: false
    },
    {
        StudNum: "2023500002",
        StudPass: "123456",
        Name: "John Carlo Rica",
        Voted: false
    }
]

SaveUserVoted();
function SaveUserVoted(){
    localStorage.setItem('UsersInfo', JSON.stringify(StudentsAccs));
}

let currentUser = JSON.parse(localStorage.getItem('CUser'));

let currentVote = JSON.parse(localStorage.getItem('CandIndex'));

let currentVoteState = JSON.parse(localStorage.getItem('VoteState'));

let activeAccount = JSON.parse(localStorage.getItem('ActiveAcc'));

let voteCounted = JSON.parse(localStorage.getItem('CountOfVotes'));

let MonitorVoteCounting = JSON.parse(localStorage.getItem('MVCSave'));

let EndVoting = JSON.parse(localStorage.getItem('SaveEnd'));






function SetAllMVC0(){
    for(let SetAllMVC = 0; SetAllMVC < MonitorVoteCounting.length; SetAllMVC++){
        MonitorVoteCounting[SetAllMVC] = false;
    }
    SaveMVC();
}

function SaveMVC(){
    localStorage.setItem('MVCSave', JSON.stringify(MonitorVoteCounting));
}

function SaveActiveAcc(){
    localStorage.setItem('ActiveAcc', JSON.stringify(activeAccount))
}

function SaveVoteState(){
    localStorage.setItem('VoteState', JSON.stringify(currentVoteState));
}

function SaveCandIndex(){
    localStorage.setItem('CandIndex', JSON.stringify(currentVote))
}

function SaveCountedVote(){
    localStorage.setItem('CountOfVotes', JSON.stringify(voteCounted))
}

function PlusVoteCount(){
    voteCounted += 1;
    SaveCountedVote();
}

function MinusVoteCount(){
    voteCounted -= 1;
    SaveCountedVote();
}

function SaveEndOfVoting(){
    localStorage.setItem('SaveEnd', EndVoting);
}