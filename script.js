function age() {
    // to refresh the error texts
    document.querySelector(".error-date").innerHTML = "";
    document.querySelector(".error-month").innerHTML = "";
    document.querySelector(".error-year").innerHTML = "";
    // name of inputs that people enter
    var d1 = document.getElementById("date").value;
    var m1 = document.getElementById("month").value;
    var y1 = document.getElementById("year").value;
    
    const day = document.querySelector(".error-date");
    const month = document.querySelector(".error-month");
    const year = document.querySelector(".error-year");
    // get a new date
    var date = new Date();
    var d2 = date.getDate();
    var m2 = date.getMonth();
    var y2 = date.getFullYear();
    var monthlist = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    let flag = 1;
    // day conditions
    if(d1 === "") {
        day.innerHTML = "This field is required";
        flag = 0;
    }
    else if(d1 < 1 || d1 > monthlist[m2]) {
        day.innerHTML = "Must be a valid date";
        flag = 0;
    }
    else if(isNaN(d1)) {
        day.innerHTML = "Must be a number";
        flag = 0;
    }
    // month conditions
    if(m1 === "") {
        month.innerHTML = "This field is required";
        flag = 0;
    }
    else if(m1 < 1 || m1 > 12) {
        month.innerHTML = "Must be a valid month";
        flag = 0;
    }
    else if(isNaN(m1)) {
        month.innerHTML = "Must be a number";
        flag = 0;
    }
    // year conditions
    if(y1 === "") {
        year.innerHTML = "This field is required";
        flag = 0;
    }
    else if(y1 > y2) {
        year.innerHTML = "Must be in the past";
        flag = 0;
    }
    else if(isNaN(y1)) {
        year.innerHTML = "Must be a number";
        flag = 0;
    }
    // the color of borders and text errors
    if(!flag) {
        document.querySelector(".label-one").style.color = "rgb(219, 4, 4)";
        document.querySelector(".dd").style.borderColor = "rgb(219, 4, 4)";
        document.querySelector(".label-two").style.color = "rgb(219, 4, 4)";
        document.querySelector(".mm").style.borderColor = "rgb(219, 4, 4)";
        document.querySelector(".label-three").style.color = "rgb(219, 4, 4)";
        document.querySelector(".yy").style.borderColor = "rgb(219, 4, 4)";
    } else {
        document.querySelector(".label-one").style.color = "hsl(0, 1%, 44%)";
        document.querySelector(".dd").style.borderColor = "hsl(0, 2%, 88%)";
        document.querySelector(".label-two").style.color = "hsl(0, 1%, 44%)";
        document.querySelector(".mm").style.borderColor = "hsl(0, 2%, 88%)";
        document.querySelector(".label-three").style.color = "hsl(0, 1%, 44%)";
        document.querySelector(".yy").style.borderColor = "hsl(0, 2%, 88%)";
    }
    // if everything is ok, calculate the age and return it :
    if(flag) {
        if(d1 > d2) {
            d2 += monthlist[m2];
            flag = 1;
        }
        if((m1 - 1) > m2) {
            m2 += 12;
            y2--;
            flag = 1;
        }
        var d3 = d2 - d1;
        var m3 = m2 - m1;
        var y3 = y2 - y1;

        document.querySelector("#yyyy").innerHTML = y3;
        document.querySelector("#mm").innerHTML = m3;
        document.querySelector("#dd").innerHTML = d3;
    }
}