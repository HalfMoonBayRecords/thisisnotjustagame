
var fname, lname;
fname = document.getElementsByName("fname")[0].value;
lname = document.getElementsByName("fname")[0].value;
            
function idPlayer() {
    if(fname = "Administrator", lname = "01"){
        setAdmin();
    } else {
        setPlayer();
    }
}

function setAdmin() {
    window.open("admin.html", "_top");
}

function setPlayer(){
    window.open("lobby.html", "_top");
}
