const d = new Date();
const monthName = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const dayName = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
let month = d.getMonth();
let year = d.getFullYear();

document.getElementById("mount").innerHTML = monthName[month];

function getDaysInMonth(month, year) {
    var date = new Date(year, month, 1);
    if(date.getDay() !== 0){
        date.setDate(-date.getDay()+1);
    }
    var days = [];
    while (date.getMonth() === month - 1 || date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
}

function drawCalendar(){
    const calendarDays = getDaysInMonth(month,year);

    const calendar = document.getElementById("calendar");
    calendar.innerHTML = '';
    let divHeader = document.createElement('div');
    divHeader.classList.add('header');
    for (let index = 0; index < 7; index++) {
        let dayDiv = document.createElement('div');
        dayDiv.innerHTML = dayName[index];
        divHeader.appendChild(dayDiv);
    }
    calendar.appendChild(divHeader);
    let div;
    
    for (const day of calendarDays) {
        if(day.getDay() === 0){
            div = document.createElement("div");
            div.classList.add("days");
            calendar.appendChild(div);
            let dayDiv = document.createElement("div");
            dayDiv.innerHTML = day.getDate();
            div.appendChild(dayDiv);
        }else{
            let dayDiv = document.createElement("div");
            dayDiv.innerHTML = day.getDate();
            div.appendChild(dayDiv);
        }
    }
}

drawCalendar();

document.getElementById("previous").addEventListener("click", ()=>{
    month -= 1;
    if(month === -1){
        month = 11;
    }
    document.getElementById("mount").innerHTML = monthName[month];
    drawCalendar();
});

document.getElementById("next").addEventListener("click", ()=>{
    month += 1;
    if(month === 12){
        month = 0;
    }
    document.getElementById("mount").innerHTML = monthName[month];
    drawCalendar();
    console.log("Test!")
});
