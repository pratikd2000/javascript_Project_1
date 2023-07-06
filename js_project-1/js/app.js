const endDate = "27  jun 2023 11:41 PM"

document.getElementById("end-date").innerHTML = endDate;

const inputs= document.querySelectorAll("input")

//create one constant arrow function

function stopWatch() {
    let end_session = new Date(endDate);
    let start_session = new Date();

    // console.log(end_session);   check data in console pannel
    // console.log(start_session);

    // const diffrance = end_session - start_session ;  output is in mili-second convert

    const diffrance = (end_session - start_session) / 1000; //now output is in second

    if(diffrance<0) return document.getElementById("wish_me").innerHTML="JAI SHREE RAM"

    console.log(diffrance);  // you have to convert it into day,min,sec

    //console.log(Math.floor(diffrance / 3600 /24))  // converted into days same for min and sec 
    inputs[0].value=Math.floor(diffrance / 3600 /24);     //days
    inputs[1].value=Math.floor(diffrance / 3600 ) % 24;   //hours
    inputs[2].value=Math.floor(diffrance / 60) % 60 ;     //minute
    inputs[3].value=Math.floor(diffrance) % 60;           //seconds
    
}

//initial call 
stopWatch()

// set interval for refresh the page in particuler time 

setInterval( () =>{
    stopWatch() 
},1000) ;