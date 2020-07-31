var textCols = $(".col-10");
var saved = localStorage.getItem('textCols');

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

$(".savebtn").on("click", function(){
    localStorage.setItem('textCols', textCols.innerHTML);
})

// var saved = localStorage.getItem('textCols');

if (saved) {
    textCols.innerHTML = saved;
}

