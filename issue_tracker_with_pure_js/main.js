document.getElementById("issueingForm").addEventListener("submit", saveIssue);
// var issue = {
//     id: '098948848',//chance.guid(),
//     status: "Open",
//     desc: 'Error function X',
//     severity: 'Low',
//     assign: 'Hy chhayrith'
// };

function saveIssue(e){
    // var desc = ;
    // // console.log("description: "+ desc);
    // var severity = ;
    // // console.log("severity" + severity);
    // var assign = ;
    // // console.log("assign to: "+ assign);
    var issue = {
        id: chance.guid(),
        status: "Open",
        desc: document.getElementById("issueDesc").value,
        severity: document.getElementById("issueSeverity").value,
        assign: document.getElementById("issueAssign").value
    };
    // console.log(issue);
    if(localStorage.getItem('issues') == null){
        var issueList = [];
        issueList.push(issue);
        localStorage.setItem("issues", JSON.stringify(issueList));
    }else{
        var issueList = JSON.parse(localStorage.getItem('issues'));
        issueList.push(issue);
        localStorage.setItem("issues", JSON.stringify(issueList));
    }
    // document.getElementById("issueingForm").reset();
    // var issueList = JSON.parse(localStorage.getItem('issues'));
    // console.log(issueList);
    fetchIssue();

    e.preventDefault();
}

function statusClose(id){
    var issueList = JSON.parse(localStorage.getItem('issues'));
    var errId = "'" + id + "'";
    for(var i = 0; i < issueList.length; i++){
        var inputId = "' " +issueList[i].id + "'";
        console.log(errId); 
        console.log(inputId);
        if(inputId == errId){
            issueList[i].status = "Closed";
        }
    }
    // console.log(issueList);
    localStorage.setItem("issues", JSON.stringify(issueList));
    fetchIssue();
}

function statusDelete(id){
    var issueList = JSON.parse(localStorage.getItem('issues'));
    var errId = "'" + id + "'";
    for(var i = 0; i < issueList.length; i++){
        var inputId = "' " +issueList[i].id + "'";
        console.log(errId); 
        console.log(inputId);
        if(inputId == errId){
            issueList.splice(i, 1);
            // console.log("true");
        }
    }


    localStorage.setItem("issues", JSON.stringify(issueList));
    fetchIssue();
}

function fetchIssue(){
    var issueList = JSON.parse(localStorage.getItem("issues"));
    var issueItem = document.getElementById("issueItem");
    issueItem.innerHTML = '';
    for(var i = 0; i < issueList.length; i++){
        var id = issueList[i].id;
        var status = issueList[i].status;
        var desc = issueList[i].desc;
        var severity = issueList[i].severity;
        var assign = issueList[i].assign;
        issueItem.innerHTML += '<div class="well">'+
                                '<h6>Issue ID: ' + id + '</h6>' +
                                '<p class="label label-info">' + status + '</p>'+
                                '<h3>' + desc + '</h3>'+
                                '<p><span class="glyphicon glyphicon-time"></span> ' + severity + '</p>'+
                                '<p><span class="glyphicon glyphicon-user"></span> ' + assign + '</p>'+
                                '<a href="#" class="btn btn-warning" onclick="statusClose(\' '+ id +'\')">close</a>'+ " " +
                                '<a href="#" class="btn btn-danger" onclick="statusDelete(\' '+ id +'\')">Delete</a>'+
                                '</div>';
    }
}