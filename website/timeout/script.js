let timeoutid;
function starttimer(){
    timeoutid = setTimeout(() => {
        window.alert("Hello")
    }, 3000);
    console.log("started");
}

function cleartimer(){
    clearTimeout(timeoutid);
    console.log("cleared");
}