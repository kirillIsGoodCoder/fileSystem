var fs = require('fs');
var myHTML = require('./images/myHTML');

function getImages () {
    var files = fs.readdirSync( './images' , 'utf-8' );//массив с элементами из папки.
    var newFiles = [];
    for ( var i = 0; i < files.length; i++ ){
        if( isImage(files[i]) ){
            newFiles.push(files[i]);//записываем изображения в новый массив.
        }
    }
    console.log(newFiles);
    return newFiles;
};

function isImage (fileName) {
    if ( fileName.slice(fileName.lastIndexOf('.')).toString() === ".jpg") {
        return true;// прверяет файл, возвращает boolean.
    } else return false;
}
var images = getImages();

var tags = '';
for (var i = 0; i< images.length; i ++){
    tags += '<image src="'+images[i]+'">';
}
console.log(tags);
console.log(myHTML.getHTML('Заголовок', tags));
