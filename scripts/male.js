console.log("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
var photoCount = 4;
      //змінна кількість фотуів , які треба перегорнути
      var currentPhotoIndex = 1;
      //змінна яка містить індекч поточного номера фото 
      function showNextPhoto(){
      //створюємо функцію для гортання фото
        currentPhotoIndex++;
        //додаємо 1 до поточного зміної із номером фото
        if (currentPhotoIndex > photoCount) currentPhotoIndex = 1;
        //умова , що дозволяє по колу перемикати фото від 1 до 5 влючно, а потім знаву від 1 до 5 включно
        var elementPhoto = document.getElementById("currentPhoto");
        //помістити у змінні витягнути елемент
        elementPhoto.src ="images2/photo" + currentPhotoIndex + ".png";//заміни номер у назві фото на поточний
      }