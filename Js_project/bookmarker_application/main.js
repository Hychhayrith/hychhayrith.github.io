document.getElementById("bookmarkForm").addEventListener("submit", bookmarkForm);
function bookmarkForm(e){
    //console.log("it work");
    var bookmark = {
        siteName : document.getElementById("siteName").value,
        siteUrl : document.getElementById("siteUrl").value
    };
    // if(!validateForm(bookmark.siteName, bookmark.siteUrl)){
    //     return false;
    // }

    if(localStorage.getItem('bookmarks') === null){
        var bookmarks = [];
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }else{
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }
    
    document.getElementById("bookmarkForm").reset();
    fetchBookmark();
    e.preventDefault();
} 

function deleteBookmark(url){
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    
    for(var i = 0; i < bookmarks.length; i++){
        var objUrl = ' '+ bookmarks[i].siteUrl;
        console.log(objUrl);
        console.log(url);
        if(objUrl == url){
            bookmarks.splice(i, 1);
        }

        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
        fetchBookmark();
    }
}


function fetchBookmark(){
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    // console.log(bookmarks);
    var bookmarkResult = document.getElementById("bookmarkResult");
    bookmarkResult.innerHTML = "";
    for(var i = 0; i < bookmarks.length; i++){
        var name = bookmarks[i].siteName;
        var url = bookmarks[i].siteUrl;
        bookmarkResult.innerHTML += '<div class="well">'+
                                    '<h3>'+name+
                                    ' <a href="'+url+'" class="btn btn-default" target="_blank">Visit</a> ' +
                                    ' <a href="#" class="btn btn-danger" onclick="deleteBookmark(\' '+url +'\')">Delete</a> '+
                                    '</h3>'+
                                    '</div>';
    }
}

function search(){
    var siteName = document.getElementById("name").value;
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    var searchResult = document.getElementById("searchResult");
    searchResult.innerHTML = "";
    var searchResultHeader = document.getElementById("sRH");
    searchResultHeader.innerHTML = "Search Result";
    for(var i = 0; i < bookmarks.length; i++){
        if(siteName == bookmarks[i].siteName){
            console.log(siteName);
            console.log(bookmarks[i].siteName);
            console.log("true");
            var name = bookmarks[i].siteName;
            var url = bookmarks[i].siteUrl;
            searchResult.innerHTML += '<div class="well">'+
            '<h3>'+name+
            ' <a href="'+url+'" class="btn btn-default" target="_blank">Visit</a> ' +
            ' <a href="#" class="btn btn-danger" onclick="deleteBookmark(\' '+url +'\')">Delete</a> '+
            '</h3>'+
            '</div>';

        }else{
            searchResult.innerHTML = "Sorry! your site name is not found."
        }
    }
}