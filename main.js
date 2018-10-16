for (var i = 0; i < allImages.length; i++) {

    var imageHeight = allImages[i].clientHeight;
    var imageWidth = allImages[i].clientWidth;

    allImages[i].setAttribute('src',
        'http://placedog.net/' + imageWidth + '/' + imageHeight);

}