
// EX7: Write a function to change the h1 text to something else
const changeH1 = function () {
    document.querySelector("h1").innerText = "Changed!";
  };
 
 
 
 // EX8: Write a function to change the page background color
 
 const changeBackgroundColor = function() {
    document.querySelector("body").style.background = "white";
 }
 
 
 
 // EX9: Write a function to change the footer address with a fake one
 
 const changeFakeAddress = function() {
    document.getElementById("address").innerText = "New Address!" ;
    // document.querySelector("footer > div:nth-child(2)").innerHTML =
       //   "FAKE ADDRESS ÃƒÂ°Ã…Â¸Ã‚Â¤Ã‚Â«";
       // document.querySelector('#address').innerText = "FAKE ADDRESS"
 }
 
 
 
 
 // EX10: Write a function to add a CSS class to every Amazon link
 
 const addClassToLinks = function() {
    let aTags = document.querySelectorAll("a")
    for (let i=0; i<aTags.length; i++) {
       aTags[i].classList.add("newLink")
    }
 
    // for (let node of document.querySelectorAll("a")) {
       //   node.classList.add("giant-font");
       // }
 }
 
 
 
 
 
 // EX11: Write a function to toggle a CSS class for all the images in the table; that class should set the visibility of the image
 
 const toggleImagesClass = function(){
    let images = document.querySelectorAll("img")
    for (let i = 0; i < images.length; i++) {
       const singleImg = images[i];
       singleImg.classList.toggle("hidden")
    }
 
       // for (let image of document.querySelectorAll("img")) {
       //   image.classList.toggle("hidden"); // if the class is already set, remove it. otherwise, add it
       // }
 
 }
 
 
 
 
 // EX12: Write a function to color the price of the products in a different one every time it's invoked
 
     const getRandomColor = function() {
        const red = Math.round(Math.random() *255);
        const green = Math.round(Math.random() * 255);
        const blue = Math.round(Math.random() * 255);
        return "rgb(" + red + ", " + "green" + ", " + "blue" + ")";
 
     }
 
     const setRandomColor = function() {
        const randomColor = getRandomColor();
        let prices = document.querySelectorAll(".price")
        for (let i = 0; i<prices.length; i++) {
           let singlePrince = prices[i]
           singlePrince.style.color = randomColor
        }
 
        // for (let price of document.querySelectorAll("tr > td:nth-child(4)")) {
       //   price.style.color = color;
       // }
     }
   
 
   