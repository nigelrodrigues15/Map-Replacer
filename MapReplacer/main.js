// //changes background color to purple
// document.body.style.backgroundColor = "purple";

// //changes css style of a the page
// document.body.style = "transition: 5s; transform: rotate(5deg) scale(0.8); background-color: grey; color: white;";

// // get all html nodes with id="main" on the webpage and console log it
// const allIds = document.getElementById("main");
// console.log(allIds);

// get all images on the webpage
const allImages = document.getElementsByTagName('img');
// console.log(allImages);


for (var i = 0; i < allImages.length; i++) {

  var imageHeight = allImages[i].clientHeight;
  var imageWidth = allImages[i].clientWidth;

  allImages[i].setAttribute('src',
  'http://placedog.net/' + imageWidth + '/' + imageHeight );

}

// for (var i = 0; i < allImages.length; i++) {
//   allImages[i].addEventListener('click', function() {
//     console.log(this);
//
//     var thisImageHeight = this.clientHeight;
//     var thisImageWidth = this.clientWidth;
//
//     this.setAttribute('src',
//     'http://placedog.net/' + thisImageWidth + '/' + thisImageHeight );
//
//   })
//
// }

// for (var i = 0; i < allImages.length; i++) {
//   allImages[i].addEventListener('click', function() {
//     // //hiding the image
//     // this.setAttribute('style', 'opacity: 0')
//     // this.setAttribute('style', 'visibility: hidden')
//     // //deleteing the image
//     // this.remove()

//     this.setAttribute('style', 'opacity: 0.1')
//     this.setAttribute('style', 'filter: blur(5px)')

//   })
// }

// document.body.style = "transition: 5s; transform: rotate(5deg) scale(0.8); background-color: grey; color: white;";
//
// for (var i = 0; i < allImages.length; i++) {
//   var imageHeight = allImages[i].clientHeight;
//   var imageWidth = allImages[i].clientWidth;
//
//   //cant use file for live links, only works for offline links
//   allImages[i].setAttribute('src', 'file:///C:/Users/nigel/Documents/Coding_Directory/Canada%20Learning%20to%20Code/llc-intro-to-browser-extensions-master/first-extension/images/get_started128.png' );
// }
