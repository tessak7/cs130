const tracks = [
    {
      "id": "40iocOzytrqaRn5RbGPDNp",
      "name": "Cherry Flavoured",
      "preview_url": "http://p.scdn.co/mp3-preview/f8d62cc7e06aed056d64680534078a8605b51b27?cid=162b7dc01f3a4a2ca32ed3cec83d1e02",
      "image_url": "https://i.scdn.co/image/ab67616d0000b2731a721f3757e5b67f87e1acd3"
    },
    {
      "id": "64lsIF5pw0sJY0gV5kz0RN",
      "name": "Can I Call You Tonight?",
      "preview_url": "https://p.scdn.co/mp3-preview/1a3f351390c3d5306b363f2c5ec90771c4897b9e?cid=162b7dc01f3a4a2ca32ed3cec83d1e02&amp;utm_medium=facebook",
      "image_url": "https://i.scdn.co/image/ab67616d0000b273ccd63af052f7e438c05f6c94"
      
    }, 
    {
      "id": "2ywl3y5qm3Chrw0vlukYKV",
      "name": "Bags",
      "preview_url": "https://p.scdn.co/mp3-preview/95a2441dba97d951bbc521b067ff5772ab90ab92?cid=162b7dc01f3a4a2ca32ed3cec83d1e02&amp;utm_medium=facebook",
      "image_url": "https://i.scdn.co/image/ab67616d0000b273d96158bdfbc719901f6269a2"
    },
    {
      "id": "5naar7XewEOAjOywIp6Jjq",
      "name": "Remember When",
      "preview_url": "https://p.scdn.co/mp3-preview/013eef42a8d6c98127475045535dad200ff4385c?cid=162b7dc01f3a4a2ca32ed3cec83d1e02&amp;utm_medium=facebook",
      "image_url": "https://i.scdn.co/image/ab67616d0000b27384feca0133d9a8e6539a8325"
    },
    {
      "id": "0UV5zxRMz6AO4ZwUOZNIKI",
      "name": "Where'd All the Time Go?",
      "preview_url": "https://p.scdn.co/mp3-preview/9273c5d36c51e66d54fd4969a5377ca5292dc998?cid=162b7dc01f3a4a2ca32ed3cec83d1e02&amp;utm_medium=facebook",
      "image_url": "https://i.scdn.co/image/ab67616d0000b2730478062bc04df0947d232fcb"
	},
    {
      "id": "4MXE6VCvTsQitHWrAxj7Kg",
      "name": "Maple Syrup",
      "preview_url": "http://p.scdn.co/mp3-preview/e95f72dec3daff17d3e9b9f399d0b92b477bd05b?cid=162b7dc01f3a4a2ca32ed3cec83d1e02",
      "image_url": "https://i.scdn.co/image/ab67616d0000b2738386795a636d72e74c958590"
    },
    {
      "id": "1YOckXQBzN7SCsFA6JghOF",
      "name": "7",
      "preview_url": "https://p.scdn.co/mp3-preview/89048252d4b52dbc8df6d0bfca3aeac6f182b081?cid=162b7dc01f3a4a2ca32ed3cec83d1e02&amp;utm_medium=facebook",
      "image_url": "https://i.scdn.co/image/ab67616d0000b273c0e91add38eababb2fe28742"
    },
    {
      "id": "0VF7YLIxSQKyNiFL3X6MmN",
      "name": "Stargazing",
      "preview_url": "http://p.scdn.co/mp3-preview/e8b4f74eb94739b48f54b323f0a025ea5f6a6043?cid=162b7dc01f3a4a2ca32ed3cec83d1e02",
      "image_url": "https://i.scdn.co/image/ab67616d0000b2733552d3f419afe41cf9b0bd0a"
    },
    {
      "id": "15jIpgBlSbxsPVsKPNYkNp",
      "name": "Boyfriend",
      "preview_url": "https://p.scdn.co/mp3-preview/89fe8db28b09ae0cb183bb50769a9be7949ca876?cid=162b7dc01f3a4a2ca32ed3cec83d1e02&amp;utm_medium=facebook",
      "image_url": "https://i.scdn.co/image/ab67616d0000b273e086dd341bb0c30d235f9cac"
    },
    {
      "id": "3MMLO6TUL07tze9IXud0Vc",
      "name": "Honey",
      "preview_url": "https://p.scdn.co/mp3-preview/bd31b546b7ad17b7f49f06507c7d7afb951aee28?cid=162b7dc01f3a4a2ca32ed3cec83d1e02&amp;utm_medium=facebook",
      "image_url": "https://i.scdn.co/image/ab67616d0000b273249e7e07a7e0100ebb8bfc11" 
    },
    {
      "id": "57RA3JGafJm5zRtKJiKPIm",
      "name": "Are You Bored Yet?",
      "preview_url": "https://p.scdn.co/mp3-preview/075715293e8883dcaa5f21766f94685adfa95886?cid=162b7dc01f3a4a2ca32ed3cec83d1e02&amp;utm_medium=facebook",
      "image_url": "https://i.scdn.co/image/ab67616d0000b27384feca0133d9a8e6539a8325"
    },
    {
      "id": "2tznHmp70DxMyr2XhWLOW0",
      "name": "Cigarette Daydreams",
      "preview_url": "https://p.scdn.co/mp3-preview/b27a6307585a54b232d1156b0814166c1519cd22?cid=162b7dc01f3a4a2ca32ed3cec83d1e02&amp;utm_medium=facebook",
      "image_url": "https://i.scdn.co/image/ab67616d0000b273fb1cb900d28642e668d77b12",
    },
];

let index = 0;

for(const track of tracks){
  const template = `
  <div data-index="${index}" onclick="playSong(event);">
        <img src="${track.image_url}" alt="${`Album art for ${track.name}`}"/> 
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