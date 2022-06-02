const tracks = [
  {
    "id": "745H5CctFr12Mo7cqa1BMH",
    "name": "My Girl",
    "preview_url": "https://p.scdn.co/mp3-preview/a5537fe5822851b3f11b42000f94cd6b7c75ece4?cid=162b7dc01f3a4a2ca32ed3cec83d1e02&amp;utm_medium=facebook",
    "image_url": "https://i.scdn.co/image/ab67616d0000b2731a5b6271ae1c8497df20916e"
  },
  {
    "id": "3SdTKo2uVsxFblQjpScoHy",
    "name": "Stand by Me",
    "preview_url": "http://p.scdn.co/mp3-preview/512aa6460858b4d68c29c3f8e9e2d9ae4bb59c79?cid=162b7dc01f3a4a2ca32ed3cec83d1e02",
    "image_url": "https://i.scdn.co/image/ab67616d0000b2731813ea8f590a0aab2820f922"
  },
  {
    "id": "4pbG9SUmWIvsROVLF0zF9s",
    "name": "I Want To Hold Your Hand",
    "preview_url": "https://p.scdn.co/mp3-preview/d73eb9bf93d17de0a815f1661df2836e480b2772?cid=162b7dc01f3a4a2ca32ed3cec83d1e02&amp;utm_medium=facebook",
    "image_url": "https://i.scdn.co/image/ab67616d0000b273582d56ce20fe0146ffa0e5cf"
  },
  {
    "id": "1OppEieGNdItZbE14gLBEv",
    "name": "You Can't Hurry Love",
    "preview_url": "https://p.scdn.co/mp3-preview/f2393e825f7c43cb35090be18107920a196046ec?cid=162b7dc01f3a4a2ca32ed3cec83d1e02&amp;utm_medium=facebook",
    "image_url": "https://i.scdn.co/image/ab67616d0000b273a16ea5e673cc4c6e8f91d5ca"
  },
  {
    "id": "7yGR8R1HgQJeW6s3KRuyGS",
    "name": "It's My Life",
    "preview_url": "https://p.scdn.co/mp3-preview/9a9720e33458f1245c3d136ee33dd783d8899c41?cid=162b7dc01f3a4a2ca32ed3cec83d1e02&amp;utm_medium=facebook",
    "image_url": "https://i.scdn.co/image/ab67616d0000b273b89d37d22e4d2392ee12898c"
},
  {
    "id": "7eqNATKM78MkWP6aHGXHEV",
    "name": "Put Your Head on My Shoulder",
    "preview_url": "https://p.scdn.co/mp3-preview/0aaa5b08250a865e7720d3516adab2e5cea2c3b0?cid=162b7dc01f3a4a2ca32ed3cec83d1e02&amp;utm_medium=facebook",
    "image_url": "https://i.scdn.co/image/ab67616d0000b27323e5822ae255ef170c40caf0"
  },
  {
    "id": "29Xdknl9fhRsV0oOYyQOKy",
    "name": "You're the One",
    "preview_url": "https://p.scdn.co/mp3-preview/95829d06711255bb4153a5e923212c86a20a444c?cid=162b7dc01f3a4a2ca32ed3cec83d1e02&amp;utm_medium=facebook",
    "image_url": "https://i.scdn.co/image/ab67616d0000b273526603f637abbb18655e5683"
  },
  {
    "id": "6GIHqnm1jmM4J5VEfcqtXw",
    "name": "Bert's Blues",
    "preview_url": "https://p.scdn.co/mp3-preview/169cb4c168a8a834b080541d2b37cfcc31461a2c?cid=162b7dc01f3a4a2ca32ed3cec83d1e02&amp;utm_medium=facebook",
    "image_url": "https://i.scdn.co/image/ab67616d0000b27332ddd18dc88969d84dbff3ab"
  },
  {
    "id": "0LfJkvPNCNEMLpZJgDQiV1",
    "name": "The Wonder of You",
    "preview_url": "https://p.scdn.co/mp3-preview/b707aa6983fd1f28237996e08ee944686afef452?cid=162b7dc01f3a4a2ca32ed3cec83d1e02&amp;utm_medium=facebook",
    "image_url": "https://i.scdn.co/image/ab67616d0000b2738194c9102e2703a6620d3c95"
  },
  {
    "id": "0UURwtLDx1nUUgt0XIyZUG",
    "name": "End of the World",
    "preview_url": "http://p.scdn.co/mp3-preview/8bff5e3adf3ebbbfccd654d05b7639b3611ed5c9?cid=162b7dc01f3a4a2ca32ed3cec83d1e02",
    "image_url": "https://i.scdn.co/image/ab67616d0000b273947d3d6dc953fe02048b817d"
  },
  {
    "id": "0bfvHnWWOeU1U5XeKyVLbW",
    "name": "Can't Take My Eyes off You",
    "preview_url": "https://p.scdn.co/mp3-preview/5fc5685ffa0aa26bfe4402b46f942ebc8132858c?cid=162b7dc01f3a4a2ca32ed3cec83d1e02&amp;utm_medium=facebook",
    "image_url":"https://i.scdn.co/image/ab67616d0000b273328ba1034774366865d78ac1"
  },
  {
    "id": "7obb4s6A7gf0Lc2AGxodMy",
    "name": "Strangers",
    "preview_url": "https://p.scdn.co/mp3-preview/1ca94a9b68eaf030241bbefede7f0743c875395e?cid=162b7dc01f3a4a2ca32ed3cec83d1e02&amp;utm_medium=facebook",
    "image_url": "https://i.scdn.co/image/ab67616d0000b27322874c7fad7dee046bd69594",
  },
];

let index = 0;

for(const track of tracks){
const template = `
<div data-index="${index}" onclick="playSong(event);">
      <img src="${track.image_url}" alt="${`Album art for ${track.name}`}" />
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
