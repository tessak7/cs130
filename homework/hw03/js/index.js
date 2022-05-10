/**
 * 
 * -------------------------------------
 * DOM Manipulation / Traversal Activity
 * -------------------------------------
 * 
 * 1. Create and attach an event handler (function) to each ".image" 
 * element so that when the ".image" element is clicked, the corresponding 
 * image loads in the .featured image element.
 * 
 * 2. Create event handlers for the next and previous buttons. The next button should
 *    show the next image in the thumbnail list. The previous should show the previous.
 * 
 * 3. If you get to the end, start at the beginning. 
 * 
 * 4. If you get to the beginning, loop around to the end.
 * 
 * 
 */

 const images = [
    'images/field1.jpg',
    'images/purple.jpg',
    'images/jar.jpg',
    'images/green.jpg',
    'images/green1.jpg',
    'images/purple1.jpg',
    'images/magnolias.jpg',
    'images/daisy1.jpg'
];


const initScreen = () => {
    images.forEach((image, idx) => {
        document.querySelector('.cards').innerHTML += `
        <li class="card">
            <button class="image" 
                style="background-image:url('${image}')"
                data-index=${idx}"
                aria-label="Displays image ${idx} in the main panel."></button>
        </li>`;
    });
};

initScreen();
//function to show the image 
const showImage = (ev) => {
	const elem = ev.currentTarget;
	ind = parseInt(elem.dataset.index);
	document.querySelector(".featured_image").style.backgroundImage =elem.style.backgroundImage;
  };
  //function called ONCLICK for next biutton
  const next = (ev) => {
	if (ind  +1 > images.length - 1) {
		ind = 0;
	  } else {
		ind = ind+ 1;
	  }
	//console.log("mommy", ind);//debugging
	document.querySelector(".featured_image").style.backgroundImage = `url(${images[ind]})`;
  };
//function called ONCLICK for previous biutton
  const previous = (ev) => {
	
	if (ind  -1 < 0) {
		ind = images.length - 1;
	  } else {
		ind = ind - 1;
	  }
	document.querySelector(".featured_image").style.backgroundImage = `url(${images[ind]})`;
  };
  
  
  const imageElements = document.querySelectorAll(".image");
  for (const elem of imageElements) {
	elem.onclick = showImage;
  }
  //need to set it to 0 or else there will be an "index unknown error"
  ind = 0
  document.querySelector(".next").onclick = next;
  document.querySelector(".prev").onclick = previous;
  document.querySelector(".featured_image").onclick = next;