var textCols = $(".col-10");
var submissionSpan = document.querySelector(".description");
var submitBtn = document.getElementsByClassName(".saveBtn");

//grabs current hour
moment().hours()



for (let i = 0; i < textCols.length; i++) {
    // console.log(textCols[i])
    // console.log(textCols[i].getAttribute("data-value"));
    
    if (parseInt(textCols[i].getAttribute("data-value")) === moment().hours()) {
        textCols[i].classList.add("present")

    }

    else if (parseInt(textCols[i].getAttribute("data-value")) > moment().hours()) {
        textCols[i].classList.add("future")
    }

    else if (parseInt(textCols[i].getAttribute("data-value")) < moment().hours()) {
        textCols[i].classList.add("past")
    }
}

submitBtn.addEventListener("click", function(event){

    
    localStorage.setItem("textarea", JSON.stringify(textarea));
})

function render(){

    var recentSubmission = JSON.parse(localStorage.getItem("textarea"));
    submissionSpan.textContent = recentSubmission
}

