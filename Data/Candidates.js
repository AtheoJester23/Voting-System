let FirstPageCandidates = JSON.parse(localStorage.getItem('FPCandidates'));

let SecondPageCandidates = JSON.parse(localStorage.getItem('SPCandidates'));

let ThirdPageCandidates = JSON.parse(localStorage.getItem('TPCandidates'));

let FourthPageCandidates = JSON.parse(localStorage.getItem('FthPCandidates'));

let FifthPageCandidates = JSON.parse(localStorage.getItem('FifthPCandidates'));

let SixthPageCandidates = JSON.parse(localStorage.getItem('SxthPCandidates'));

let SeventhPageCandidates = JSON.parse(localStorage.getItem('SvnthPCandidates'));

let Win1 = JSON.parse(localStorage.getItem('W1'));

let NewWin1 = [];



function SaveWin1(){
    localStorage.setItem('W1',JSON.stringify(Win1))
}



const getW1 = (WinVote, TheArray1) => TheArray1.findIndex(val1 => val1.WinVote === WinVote);


function EndeEnd(){
    for(let WinCand = 0; WinCand < FirstPageCandidates.length; WinCand++){
        Win1.push(FirstPageCandidates[WinCand].Votes)
    }
    

}



function SaveFPCand(){
    localStorage.setItem('FPCandidates', JSON.stringify(FirstPageCandidates));
}

function SaveSPCand(){
    localStorage.setItem('SPCandidates', JSON.stringify(SecondPageCandidates));
}

function SaveTPCand(){
    localStorage.setItem('TPCandidates', JSON.stringify(ThirdPageCandidates));
}

function SaveFthPCand(){
    localStorage.setItem('FthPCandidates', JSON.stringify(FourthPageCandidates));
}

function SaveFfthPCand(){
    localStorage.setItem('FifthPCandidates', JSON.stringify(FifthPageCandidates));
}

function SaveSxthPCand(){
    localStorage.setItem('SxthPCandidates', JSON.stringify(SixthPageCandidates));
}

function SaveSvnthPCand(){
    localStorage.setItem('SvnthPCandidates', JSON.stringify(SeventhPageCandidates));
}