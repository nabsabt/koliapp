//source:
//https://www.grapecity.com/blogs/how-to-importexport-excel-files-using-javascript-and-spread-sheets

var workbook = new GC.Spread.Sheets.Workbook(document.getElementById("ss"));  
$(document).ready(function () {  
    $.support.cors = true; 
    //var workbook = new GC.Spread.Sheets.Workbook(document.getElementById("ss"));  
});  
var excelIO = new GC.Spread.Excel.IO();  


//var excelUrl = $("#importUrl").val();  

function ImportFile() {  
    var excelUrl = "table_of_dates.xlsx";  

    var oReq = new XMLHttpRequest();  
    oReq.open('get', excelUrl, true);  
    oReq.responseType = 'blob';  
    oReq.onload = function () {  
        var blob = oReq.response;  
        excelIO.open(blob, LoadSpread, function (message) {  
            console.log(message);  
        });  
    };  
    oReq.send(null);  
}  
function LoadSpread(json) {  
    jsonData = json;  
    workbook.fromJSON(json);  

    workbook.setActiveSheet("Revenues (Sales)");  
}  

document.getElementById("addData").onclick = function () {  
    var sheet = workbook.getActiveSheet();  
    sheet.setValue(1, 1, "nagybence"); 
}  