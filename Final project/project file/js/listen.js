const tracks = [
    {
      "id": "34bqWuFJ4X1A3vCObPSNHD",
      "name": "As She's Walking Away",
      "preview_url": "https://p.scdn.co/mp3-preview/0acebc7094b62de9c38ece383f748ce76530332d?cid=162b7dc01f3a4a2ca32ed3cec83d1e02&utm_medium=facebook",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/0/00/Assheswalkingaway.jpg"
    },
    {
      "id": "2QfX9Pdz3q66fN3kCXl0Js",
      "name": "Revival",
      "preview_url": "https://p.scdn.co/mp3-preview/cf866c2b2fe8ec02c909cf60c6503e6588a71396?cid=162b7dc01f3a4a2ca32ed3cec83d1e02&utm_medium=facebook",
      "image_url": "https://m.media-amazon.com/images/I/81vgW9EaRjL._SS500_.jpg"
    },
    {
      "id": "3R6yNicsZrWF8ybl02imcB",
      "name": "Charleston Girl",
      "preview_url": "https://p.scdn.co/mp3-preview/7a5a084213ae581f8ff6f3fcc44efac48b5ed8df?cid=162b7dc01f3a4a2ca32ed3cec83d1e02&utm_medium=facebook",
      "image_url": "https://f4.bcbits.com/img/a0690119761_10.jpg"
    },
    {
      "id": "3746VOqCr3ys3lQdhmDoyH?si=9cf5f430db5a4caf&nd=1",
      "name": "This Bar",
      "preview_url": "https://p.scdn.co/mp3-preview/3322a043d95e77d2be4b90e800171d7686b0a356?cid=162b7dc01f3a4a2ca32ed3cec83d1e02&utm_medium=facebook",
      "image_url": "https://i.scdn.co/image/ab67616d00001e027d6813fd233f3bc4977cceca"
    },
    {
      "id": "7GQjJEwqlp6m5HNWVQd6OR",
      "name": "Good Directions",
      "preview_url": "https://p.scdn.co/mp3-preview/c3c2b1e616f4eb820159843ea17350b535e24e17?cid=162b7dc01f3a4a2ca32ed3cec83d1e02&utm_medium=facebook",
      "image_url": "https://i.scdn.co/image/ab67616d0000b2735ca80b7dafc3dcf967431b54"
	},
    {
      "id": "6MYdMbZBtcUZSmcUDBkSZA?si=6563b3310e344a25&nd=1",
      "name": "County Line",
      "preview_url": "https://p.scdn.co/mp3-preview/c4976db5965c39a884ec4c9ca497830d2829d455?cid=162b7dc01f3a4a2ca32ed3cec83d1e02&utm_medium=facebook",
      "image_url": "https://i.scdn.co/image/ab67616d0000b273364a6bc0db877ac0b3964d95"
    },
    {
      "id": "6IBcOGPsniK3Pso1wHIhew",
      "name": "Forever After All",
      "preview_url": "https://p.scdn.co/mp3-preview/f567554645060dc7b98d805c539ffd91d9f0f060?cid=162b7dc01f3a4a2ca32ed3cec83d1e02&utm_medium=facebook",
      "image_url": "https://i.scdn.co/image/ab67616d0000b273433fa8ed8901569b606a715e"
    },
    {
      "id": "0i5el041vd6nxrGEU8QRxy",
      "name": "Cruise",
      "preview_url": "https://p.scdn.co/mp3-preview/4b0c5fb66a2997be9ec72d07c6c2b6a0ed667c27?cid=162b7dc01f3a4a2ca32ed3cec83d1e02&utm_medium=facebook",
      "image_url": "https://i.scdn.co/image/ab67616d0000b273f5601676db551cb2a09e70a0"
    },
    {
      "id": "4rW9EUFaMSNVY8JhbqrB6z",
      "name": "Me and My Kind",
      "preview_url": "https://p.scdn.co/mp3-preview/42c4a435d65e9e17df8dee6684ccbd7c2425219c?cid=162b7dc01f3a4a2ca32ed3cec83d1e02&utm_medium=facebook",
      "image_url": "https://i.scdn.co/image/ab67616d0000b2739252c9fcdef40fc5c6d30f14"
    },
    {
      "id": "6vC90OOjZR165Hw8CpsqEm",
      "name": "Pretty Heart",
      "preview_url": "https://p.scdn.co/mp3-preview/cc1b7c90d0f38fedad84d2bced230ea93c43fd09?cid=162b7dc01f3a4a2ca32ed3cec83d1e02&utm_medium=facebook",
      "image_url": "https://i.scdn.co/image/ab67616d0000b273f23270068f04378bfadd4075"
    },
    {
      "id": "5XqHOqbjKb7YsQV6f3eGeD",
      "name": "Georgia Time",
      "preview_url": "https://p.scdn.co/mp3-preview/0d7df309487dcb0d7691ea6de15afb4ba2dd4216?cid=162b7dc01f3a4a2ca32ed3cec83d1e02&utm_medium=facebook",
      "image_url": "https://i.scdn.co/image/ab67616d0000b2736398dd7b89099502e51c49ff"
    },
    {
      "id": "20DfkHC5grnKNJCzZQB6KC",
      "name": "Good Girl",
      "preview_url": "http://p.scdn.co/mp3-preview/da396303c34611b18470e489d36c2fe5995baf5a?cid=162b7dc01f3a4a2ca32ed3cec83d1e02",
      "image_url": "https://i.scdn.co/image/ab67616d0000b27324e1589fb3eab8ae8831f388",
    },
];

let index = 0;

for(const track of tracks){
  const template = `
  <div data-index="${index}" onclick="playSong(event);">
        <img src="${track.image_url}" />
        <h2>${track.name}</h2>
    </div>`;
    index += 1;
    document.querySelector("main").innerHTML += template;

}

const playSong = (ev) => {
  const index = ev.currentTarget.dataset.index;
  const track = tracks[index].preview_url;
  document.querySelector("#audio-source").src = track;

   const audio = document.querySelector("audio");
   audio.load();
   audio.play();
}
