let Something = '';

console.log(CandidatePosition);

console.log(FirstPageCandidates);

function SaveFPCand(){
    localStorage.setItem('FPCandidates', JSON.stringify(FirstPageCandidates));
}

document.querySelector('.LogOutButton').addEventListener('click', () => {
    window.location.href = "/Login And Register.html"
})

function SaveCandidatePosition(){
    localStorage.setItem('PositionName', JSON.stringify(CandidatePosition));
}

document.querySelector('.AddACandidate').addEventListener('click', () => {
    document.querySelector('.AddACandidateToPosition').style.display = "inline";
})

document.querySelector('.CancelAddCandToPos').addEventListener('click', () => {
    document.querySelector('.AddACandidateToPosition').style.display = "none";
})


//Start here

document.querySelector('.ThePosition').innerHTML = CandidatePosition[0].Position;

document.querySelector('.ChangePositionTitleIcon').addEventListener('click', () => {
    document.querySelector('.ChangePositionTitle').style.display = "inline";
})

document.querySelector('.CancelEditPos').addEventListener('click', () => {
    document.querySelector('.ChangePositionTitle').style.display = "none";
})

let RnmTitlePos = document.querySelector('.RenamePosTitle');

document.querySelector('.ProceedEditPos').addEventListener('click', () => {
    CandidatePosition[0].Position = RnmTitlePos.value;
    SaveCandidatePosition();
    window.location.reload();
})


let AddImgFP = document.querySelector('.AddImg');
let AddNameFP = document.querySelector('.AddName');
let AddYLFP = document.querySelector('.AddYL');
let AddCourseFP = document.querySelector('.AddCourse');

document.querySelector('.ProceedAddCandToPos').addEventListener('click', () => {
    FirstPageCandidates.push({Picture: AddImgFP.value, Name: AddNameFP.value, Year_Level: AddYLFP.value, Course: AddCourseFP.value, Votes: 0});
    SaveFPCand();
    window.location.reload();
})

FirstPageCandidates.forEach((Candidates, index) => {
    Something += `
    <div class = "PageVoteBox">
        <img src="${Candidates.Picture}" alt="" class = "Photo">
        <div class = "TextInfo">
            <div>Name: ${Candidates.Name}</div>
            <div>Year Level: ${Candidates.Year_Level}</div>
            <div>Course: ${Candidates.Course}</div>
        </div>
        <div class = "OptEdittheCandidate">
            <button onclick = "OpnTheEditCand(${index})">Edit</button>
            <button onclick = "CheckToDelete(${index})">Delete</button>
        </div>

        <div class = "Edit${index}">
            <legend style="text-align: center;">Candidate's Info: </legend>
            <div>Image Location: </div>
            <input type="text" class="EditInputImg${index}" placeholder="${Candidates.Picture}">
            <div>Name: </div>
            <input type="text" class = "EditInputName${index}" placeholder="${Candidates.Name}">
            <div>Year Level: </div>
            <input type="text" class = "EditInputYL${index}" placeholder="${Candidates.Year_Level}">
            <div>Course: </div>
            <input type="text" class = "EditInputCourse${index}" placeholder="${Candidates.Course}">
            <div>
                <button class = "CancelEditCandidate${index}" onclick = "ClsTheEditCand(${index})">Cancel</button>
                <button class = "ProceedEditCandidate${index}" onclick = "GoEditInfo(${index})">Change</button>
            </div>
        </div>

        <div class = "AlertDelete${index}">   
        <div>Are you sure you want to permanently remove this Candidate?</div>
        <div class = "AlertDelOption">
            <button class = "buttonCancelDelete${index}" onclick = "CancelRemovalCand(${index})">Cancel</button>
            <button class = "buttonProceedDelete${index}" onclick = "ContinueRemovalCand(${index})">Delete</button>
        </div>
    </div>
    </div>


    <style>
        .AlertDelete${index}{
            display: flex;
            flex-direction: column;
            background-color: white;
            border-radius: 10px;
            position: absolute;
            top: 40%;
            left: -10;
            padding: 10px 10px;
            box-shadow: 0px 1px 3px #888888;
            display: none;
            opacity: 1;
            user-select: none;
            justify-content: center;
            width: 273px;
            z-index: 200;
        }

        .AlertDelOption{
            display: flex;
            justify-content: right;
            gap: 5px;
        }
        
        .Edit${index}{
            display: flex;
            flex-direction: column;
            background-color: white;
            border-radius: 10px;
            position: absolute;
            top: 5px;
            right: -10;
            padding: 10px 10px;
            box-shadow: 0px 1px 3px #888888;
            display: none;
            opacity: 1;
            user-select: none;
            justify-content: center;
            align-items: center;
            gap: 10px;
            flex-shrink: 0;
            z-index: 200;
        }
        @media (min-width: 320px) and (max-width: 1422px){
            .PageVoteBox{
                height: 450px
                width: 500px;
                padding: 60px 30px;
                font-size: xx-large;
            }

            .PageVoteBox button{
                font-size: xx-large;
                margin-top: 20px;
            }

            .Edit${index} input{
                height: 60px;
                font-size: xx-large;
            }

            .Edit${index}{
                margin-left: 100px;
            }
        }

    </style>
    `
});

document.querySelector('.CandidatesGridList').innerHTML = Something;

function OpnTheEditCand(Which){
    document.querySelector(`.Edit${Which}`).style.display = "inline";
}

function ClsTheEditCand(Who){
    document.querySelector(`.Edit${Who}`).style.display = "none";
}


function GoEditInfo(What){
    let EdtInpPicFP = document.querySelector(`.EditInputImg${What}`);
    let EdtInpNameFP = document.querySelector(`.EditInputName${What}`);
    let EdtInpYLFP = document.querySelector(`.EditInputYL${What}`);
    let EdtInpCourseFP = document.querySelector(`.EditInputCourse${What}`);

    if(EdtInpCourseFP.value === "" && EdtInpYLFP.value === "" && EdtInpNameFP.value === "" && EdtInpPicFP.value === ""){
        alert("Put information to proceed");
    }else if(EdtInpPicFP.value === "" && EdtInpYLFP.value === "" && EdtInpCourseFP.value === ""){
        FirstPageCandidates[What].Name = EdtInpNameFP.value;
        SaveFPCand();
        window.location.reload();
    }else if(EdtInpNameFP.value === "" && EdtInpYLFP.value === "" && EdtInpCourseFP.value === ""){
        FirstPageCandidates[What].Picture = EdtInpPicFP.value;
        SaveFPCand();
        window.location.reload();
    }else if(EdtInpYLFP.value === "" && EdtInpNameFP.value === "" && EdtInpPicFP.value === ""){
        FirstPageCandidates[What].Course = EdtInpCourseFP.value;
        SaveFPCand();
        window.location.reload();
    }else if(EdtInpCourseFP.value === "" && EdtInpNameFP.value === "" && EdtInpPicFP.value === ""){
        FirstPageCandidates[What].Year_Level = EdtInpYLFP.value;
        SaveFPCand();
        window.location.reload();
    }
}

function CheckToDelete(Point){
    document.querySelector(`.AlertDelete${Point}`).style.display = "inline";
}

function CancelRemovalCand(CloseThis){
    document.querySelector(`.AlertDelete${CloseThis}`).style.display = "none";
}

function ContinueRemovalCand(DeleteThis){
    FirstPageCandidates.splice(DeleteThis, 1);
    SaveFPCand();
    window.location.reload();
}

document.querySelector('.DashboardPage').addEventListener('click', () => {
    window.location.href = "/Admin Dashboard.html";
})