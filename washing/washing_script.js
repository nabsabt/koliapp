
var machine_1 = [
    { idopont: "8:00-9:00", hetfo: "", kedd:"" , szerda: "", csutortok: "", pentek: "", szombat: "", vasarnap: "" },
    { idopont: "9:00-10:00",hetfo: "", kedd: "" , szerda: "", csutortok: "", pentek: "", szombat: "", vasarnap: "" },
    { idopont: "10:00-11:00",hetfo: "", kedd: "", szerda: "", csutortok: "", pentek: "", szombat: "", vasarnap: "" },
    { idopont: "11:00-12:00",hetfo: "", kedd: "", szerda: "", csutortok: "", pentek: "", szombat: "", vasarnap: "" },
    { idopont: "12:00-13:00",hetfo: "", kedd: "", szerda: "", csutortok: "", pentek: "", szombat: "", vasarnap: "" },
    { idopont: "13:00-14:00",hetfo: "", kedd: "", szerda: "", csutortok: "", pentek: "", szombat: "", vasarnap: "" },
    { idopont: "14:00-15:00",hetfo: "", kedd: "", szerda: "", csutortok: "", pentek: "", szombat: "", vasarnap: "" },
    { idopont: "15:00-16:00",hetfo: "", kedd: "", szerda: "", csutortok: "", pentek: "", szombat: "", vasarnap: "" },
    { idopont: "16:00-17:00",hetfo: "", kedd: "", szerda: "", csutortok: "", pentek: "", szombat: "", vasarnap: "" },
    { idopont: "17:00-18:00",hetfo: "", kedd: "", szerda: "", csutortok: "", pentek: "", szombat: "", vasarnap: "" },
    { idopont: "18:00-19:00",hetfo: "", kedd: "", szerda: "", csutortok: "", pentek: "", szombat: "", vasarnap: "" },
    { idopont: "19:00-20:00",hetfo: "", kedd: "", szerda: "", csutortok: "", pentek: "", szombat: "", vasarnap: "" },
    { idopont: "21:00-22:00",hetfo: "", kedd: "", szerda: "", csutortok: "", pentek: "", szombat: "", vasarnap: "" },
    { idopont: "22:00-23:00",hetfo: "", kedd: "", szerda: "", csutortok: "", pentek: "", szombat: "", vasarnap: "" }
];

function generateTableHead(tableConst, dataConst) {
  var thead = tableConst.createTHead();
  var row = thead.insertRow();
  for (var key of dataConst) {
    var th = document.createElement("th");
    var text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}
var table1 = document.getElementById("table1");
var data = Object.keys(machine_1[0]);

generateTableHead(table1, data);

function generateTable(table1, data){
    for(var element of data){
        var row = table1.insertRow();
        for (key in element){
            var cell = row.insertCell();
            var text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}

generateTable(table1, machine_1);


var tableDataStyle = document.getElementsByTagName('td');



////here I set the style of the table data (except for the tablehead and the first column)



for (var i = 0; i < tableDataStyle.length; i++){
    if(i!=0 && i%8 != 0){
        tableDataStyle[i].style.width = '200px';
        tableDataStyle[i].style.height = "30px";
        tableDataStyle[i].style.border = "solid";
        tableDataStyle[i].style.backgroundColor = "white";

    }
    else {
        tableDataStyle[i].style.width = "200px";
        tableDataStyle[i].style.height = "30px";
    }
}

////here I add event listener to the table elements
var reserveCounter = 0;

for(var i=1; i<15; i++){
    for(var j=1; j<8; j++){
        table1.rows[i].cells[j].addEventListener("click", function(){
            this.style.backgroundColor = "rgba(255,0,0,0.6)";
            this.innerHTML = "F51ZA1";
            this.style.transition = "400ms";
            reserveCounter++;
            if (reserveCounter >= 3){
                this.removeEventListener("click", function(){})
                console.log("you can only res 2");
                this.style.backgroundColor = "white";
                this.innerHTML = "";
                reserveCounter = 0;
            }
        })
    }
}

////here I remove the reservations via button

document.getElementById("remove_reservation").addEventListener("click", function(){
    for(var i=1; i<15; i++){
        for(var j=1; j<8; j++){
            table1.rows[i].cells[j].innerHTML = "";
            table1.rows[i].cells[j].style.backgroundColor = "white";
            reserveCounter = 0;
        }
    }
})


