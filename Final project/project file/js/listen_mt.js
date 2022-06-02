const tracks = [
  {
    "id": "2zTjKIhgvU7mt6pbkWdzhi",
    "name": "Ring of Keys",
    "preview_url": "https://p.scdn.co/mp3-preview/5419fcd0784b23c063aaa22acf39a9641a5d0c56?cid=162b7dc01f3a4a2ca32ed3cec83d1e02&amp;utm_medium=facebook",
    "image_url": "https://i.scdn.co/image/ab67616d0000b2735e8ae8236931f31cf75f9820"
  },
  {
    "id": "3WkgLAd7jGX3sZikfkF0lU",
    "name": "For Good",
    "preview_url": "https://p.scdn.co/mp3-preview/d4132909093f116518979d83d85a26c2156e1582?cid=162b7dc01f3a4a2ca32ed3cec83d1e02&amp;utm_medium=facebook",
    "image_url": "https://i.scdn.co/image/ab67616d0000b273f3eaae22e1c6b26400073c05"
  },
  {
    "id": "5EtdXtBNGevHrD8fqDEbDi",
    "name": "Superboy and the Invisible Girl",
    "preview_url": "https://p.scdn.co/mp3-preview/96abc2cb15bbbc982249b6b9dd4e4f68fd25e2d5?cid=162b7dc01f3a4a2ca32ed3cec83d1e02&amp;utm_medium=facebook",
    "image_url": "https://i.scdn.co/image/ab67616d0000b2738add1bbf8e9fe4b121b1e8a6"
  },
  {
    "id": "2OShSwyI5I6XU45ipUux6Q",
    "name": "Quiet",
    "preview_url": "https://p.scdn.co/mp3-preview/b058864b25fbe00eb66c57c6477e8ae74e111d7d?cid=162b7dc01f3a4a2ca32ed3cec83d1e02&amp;utm_medium=facebook",
    "image_url": "https://i.scdn.co/image/ab67616d0000b2737f8f86bc7bb07622e1691b7e"
  },
  {
    "id": "6afiCaFJHdZSd0w6hv6OE3",
    "name": "Into the Woods",
    "preview_url": "https://p.scdn.co/mp3-preview/a4e78563b2f4fde0b363be40024216713539aa2f?cid=162b7dc01f3a4a2ca32ed3cec83d1e02&amp;utm_medium=facebook",
    "image_url": "https://i.scdn.co/image/ab67616d0000b2736d2914d076b1e4af7ecd1f33"
},
  {
    "id": "0gMW8XpPFPjoApDii5Tj1u",
    "name": "Waving Through a Window",
    "preview_url": "https://p.scdn.co/mp3-preview/79c9c77487e3eada6fc1034aee835444cf871413?cid=162b7dc01f3a4a2ca32ed3cec83d1e02&amp;utm_medium=facebook",
    "image_url": "https://i.scdn.co/image/ab67616d0000b273eefa3ed06dec22db89d0e793"
  },
  {
    "id": "5LdUM5rhjVAVoTBHS1n7S2",
    "name": "The Song of Purple Summer",
    "preview_url": "https://p.scdn.co/mp3-preview/389700cd9ff240995640f472316fd5bd6f626f6a?cid=162b7dc01f3a4a2ca32ed3cec83d1e02&amp;utm_medium=facebook",
    "image_url": "https://i.scdn.co/image/ab67616d0000b273d55d1d56b272ea82d104c8e3"
  },
  {
    "id": "54Sc7mZQ1RM03STpk4SfaA",
    "name": "Helpless",
    "preview_url": "https://p.scdn.co/mp3-preview/f8bd077e5e1f31256bdbdd6f9c93798df6e84199?cid=162b7dc01f3a4a2ca32ed3cec83d1e02&amp;utm_medium=facebook",
    "image_url": "https://i.scdn.co/image/ab67616d0000b273d72fb5571087bca0a2fed008"
  },
  {
    "id": "5gw8HNcrqliEw0X6pPrPvG",
    "name": "Seasons of Love",
    "preview_url": "https://p.scdn.co/mp3-preview/64a7bd29098d879bdda347d0b5715c7afca1dbcd?cid=162b7dc01f3a4a2ca32ed3cec83d1e02&amp;utm_medium=facebook",
    "image_url": "https://i.scdn.co/image/ab67616d0000b273d272c37389bd3d9c20564166"
  },
  {
    "id": "2OIlOS419OC0McH7i27Kat",
    "name": "I'm Here",
    "preview_url": "https://p.scdn.co/mp3-preview/0317cf7df350c27739ced0390f16333f183fd650?cid=162b7dc01f3a4a2ca32ed3cec83d1e02&amp;utm_medium=facebook",
    "image_url": "https://i.scdn.co/image/ab67616d0000b273e27c8ccce6b68a25d261b27a"
  },
  {
    "id": "7CBrUf50mf2IqcRZla38by",
    "name": "She Used to be Mine",
    "preview_url": "https://p.scdn.co/mp3-preview/d70018f0d08f5090ea452392b79c86882da2cd7b?cid=162b7dc01f3a4a2ca32ed3cec83d1e02&amp;utm_medium=facebook",
    "image_url": "https://i.scdn.co/image/ab67616d0000b27338e8cc49f1303647204dec7e"
  },
  {
    "id": "48PFfbnf0ZRcGCxO4zApPp",
    "name": "Flowers",
    "preview_url": "https://p.scdn.co/mp3-preview/931c673ac168a1f74401f807150db2931067d85b?cid=162b7dc01f3a4a2ca32ed3cec83d1e02&amp;utm_medium=facebook",
    "image_url": "https://i.scdn.co/image/ab67616d0000b2736b03ab98b9ced4324735670e",
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
