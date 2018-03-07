var fs = require('fs');
var date = new Date();
var YY = date.getFullYear(), MM = ('0'+(date.getMonth()+1)).substr(-2),//год, месяц
    DD = ('0'+(date.getDay()+1)).substr(-2), HH = ('0'+(date.getHours()+1)).substr(-2),//день, час
    II = ('0'+(date.getMinutes()+1)).substr(-2), SS = ('0'+(date.getSeconds()+1)).substr(-2);//минуты,секунды

var dateNow = YY+'_'+MM+'_'+DD+'_'+HH+'_'+II+'_'+SS;
console.log(dateNow);

var fileContent = fs.readFileSync("file.html","utf-8");
console.log(fileContent);
fs.writeFileSync(dateNow+".html",
    "<html>" +
    "<head>" +
    "   <title>Файл, созданный скриптом</title>" +
        "<meta charset='utf-8'/>" +
    "</head>"+
    "<body> "+
        '<p> Lorem ipsum dolor sit amet. </p>'+
    "</body>"+
    "</html>"
);
function getHTML () {
    return "<html>" +
        "<head>" +
        "   <title>Файл, созданный скриптом</title>" +
        "<meta charset='utf-8'/>" +
        "</head>"+
        "<body> "+
        '<p> Lorem ipsum dolor sit amet. </p>'+
        "</body>"+
        "</html>";
}
console.log( getHTML() );