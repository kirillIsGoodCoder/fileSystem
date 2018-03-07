function getHTML (title, content) {
    return "<html>" +
        "<head>" +
        "   <title>"+title+"</title>" +
        "<meta charset='utf-8'/>" +
        "</head>"+
        "<body> "+content+"</body>"+
        "</html>";
}
console.log( getHTML('Кастомный тайтл', "Интересный контент") );

module.exports.getHTML = getHTML;