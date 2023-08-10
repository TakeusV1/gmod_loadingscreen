var totalfilez
//Gets initial total files needed.
function SetFilesTotal(total) {
    totalfilez = total;
    window.totalfiles = total;
}
//Update Progress Bar
function SetFilesNeeded(needed) {
    window.filesleft = needed;
    if(needed < 1) {
        var neededz = window.totalfiles;
    } else {
        var neededz = needed;
    }
    var percent = Math.ceil((((window.totalfiles-neededz)/2)/(window.totalfiles/2))*100);
    if(!isNan(percent)) {
        $('#progressbar').css({ "width" : percent+"%"});
        $('#progressbar').empty().append(percent+"%");
    }
}
//Update loading header text.
function SetStatusChanged( status ) {
    /*
    Retrieving server info...
    Getting addon info for #------
    Found '--'
    Mounting Addons
    Workshop Complete
    Sending client info...
    */
    if(status == 'Retrieving server info...') {
        $('#progressbar').css({ "width" : "10%"});
        $('#subtext1').empty().append("Initializing...");
    }
    if(status == 'Mounting Addons') {
        $('#progressbar').css({ "width" : "50%"});
        $('#subtext1').empty().append("Mounting Addons");
    }
    if(status == 'Workshop Complete') {
        $('#progressbar').css({ "width" : "80%"});
        $('#subtext1').empty().append("Workshop Complete");
    }
    if(status == 'Sending client info...') {
        $('#progressbar').css({"width" : "100%"}, 15000);
        $('#subtext1').empty().append('Finalizing...');
    }
}
//Downloading file event.
function DownloadingFile(fileName) {
    $('#subtext1').empty().append('Obtaining '+fileName+'.</br><b>'+window.filesleft+'</b> out of <b>'+window.totalfiles+'</b>');
}