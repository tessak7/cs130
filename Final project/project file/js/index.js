

 const images = [
    'images/stranger.jpg',
    'images/lemonade.jpg',
    'images/1989.jpg',
    'images/tapestry.jpg',
    'images/lover.jpg',
    'images/blue.jpg',
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
const showImage = (ev) => {
	const elem = ev.currentTarget;
	ind = parseInt(elem.dataset.index);
	document.querySelector(".featured_image").style.backgroundImage =elem.style.backgroundImage;
  };
  const next = (ev) => {
	if (ind  +1 > images.length - 1) {
		ind = 0;
	  } else {
		ind = ind+ 1;
	  }
	document.querySelector(".featured_image").style.backgroundImage = `url(${images[ind]})`;
  };

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

  ind = 0
  document.querySelector(".next").onclick = next;
  document.querySelector(".prev").onclick = previous;
  document.querySelector(".featured_image").onclick=()=>
  window.open("https://open.spotify.com/playlist/1KFCGO9erNqc80Mmp6cJuG?si=dc886885c456465c","_blank") ;
 
 
