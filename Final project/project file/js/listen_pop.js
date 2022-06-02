const tracks = [
    {
      "id": "4A2CyJ3VhCxiQCYXlV6zRL",
      "name": "About Damn Time",
      "preview_url": "https://p.scdn.co/mp3-preview/0117d539ace138b5897ca07397d622ceaa693735?cid=162b7dc01f3a4a2ca32ed3cec83d1e02&amp;utm_medium=facebook",
      "image_url": "https://i.scdn.co/image/ab67616d0000b2734efe2d8c1c2c9a69046ab556"
    },
    {
      "id": "4LRPiXqCikLlN15c3yImP7",
      "name": "As It Was",
      "preview_url": "https://p.scdn.co/mp3-preview/c871f7a3b36ad708640a833fbf7a0b9e84c5b688?cid=162b7dc01f3a4a2ca32ed3cec83d1e02&amp;utm_medium=facebook",
      "image_url": "https://i.scdn.co/image/ab67616d0000b273b46f74097655d7f353caab14"
    },
    {
      "id": "1QxIFMs4M8qd5cbJJu80v4",
      "name": "Skyline",
      "preview_url": "https://p.scdn.co/mp3-preview/e8d9d7acbc842b4515dfbe478edf0f2b1dfea848?cid=162b7dc01f3a4a2ca32ed3cec83d1e02&amp;utm_medium=facebook",
      "image_url": "https://i.scdn.co/image/ab67616d0000b273b25a6f8bac702391f3e59129"
    },
    {
      "id": "1dGr1c8CrMLDpV6mPbImSI",
      "name": "Lover",
      "preview_url": "https://p.scdn.co/mp3-preview/2d48ff67d52af51d1a52a44e2830f384dcd11114?cid=162b7dc01f3a4a2ca32ed3cec83d1e02&amp;utm_medium=facebook",
      "image_url": "https://i.scdn.co/image/ab67616d0000b273e787cffec20aa2a396a61647"
    },
    {
      "id": "39LLxExYz6ewLAcYrzQQyP",
      "name": "Levitating",
      "preview_url": "https://p.scdn.co/mp3-preview/130e18a8f12e319b06032640c6b75e3881719684?cid=162b7dc01f3a4a2ca32ed3cec83d1e02&amp;utm_medium=facebook",
      "image_url": "https://i.scdn.co/image/ab67616d0000b273bd26ede1ae69327010d49946"
	},
    {
      "id": "7rl7ao5pb9BhvAzPdWStxi",
      "name": "Telephone",
      "preview_url": "https://p.scdn.co/mp3-preview/886a6d1203ce8dc1c983b0e7352b5422b8d3d14f?cid=162b7dc01f3a4a2ca32ed3cec83d1e02&amp;utm_medium=facebook",
      "image_url": "https://i.scdn.co/image/ab67616d0000b273bfd247438980173d32fd5ba8"
    },
    {
      "id": "2DMS94YwgfKZyjA5sIyCxf",
      "name": "Call Me Maybe",
      "preview_url": "https://p.scdn.co/mp3-preview/2ab4bc7ae95eb5e8520c8121ac67998287dcc82b?cid=162b7dc01f3a4a2ca32ed3cec83d1e02&amp;utm_medium=facebook",
      "image_url": "https://i.scdn.co/image/ab67616d0000b27352d36c5a4e5fd5c7b5ceaa22"
    },
    {
      "id": "4OafepJy2teCjYJbvFE60J",
      "name": "breathin",
      "preview_url": "https://p.scdn.co/mp3-preview/3d250e99470b24623df040e24b621d967d8773c9?cid=162b7dc01f3a4a2ca32ed3cec83d1e02&amp;utm_medium=facebook",
      "image_url": "https://i.scdn.co/image/ab67616d0000b273c3af0c2355c24ed7023cd394"
    },
    {
      "id": "2Fxmhks0bxGSBdJ92vM42m",
      "name": "bad guy",
      "preview_url": "https://p.scdn.co/mp3-preview/96cd58badeeabc3c3037b4649571c8fb6b8ebd60?cid=162b7dc01f3a4a2ca32ed3cec83d1e02&amp;utm_medium=facebook",
      "image_url": "https://i.scdn.co/image/ab67616d0000b27350a3147b4edd7701a876c6ce"
    },
    {
      "id": "3RhyHYnYxuGnP8njFlNxHq",
      "name": "don't come back",
      "preview_url": "https://p.scdn.co/mp3-preview/8fae7db9b2004ad4ee4d647422fad48c567df1ec?cid=162b7dc01f3a4a2ca32ed3cec83d1e02&amp;utm_medium=facebook",
      "image_url": "https://i.scdn.co/image/ab67616d0000b273f7108342ef45a402af8206b2"
    },
    {
      "id": "2tGvwE8GcFKwNdAXMnlbfl",
      "name": "happier",
      "preview_url": "https://p.scdn.co/mp3-preview/1519f068b8a9cc3b8caa86c3e19809b37eb2d83b?cid=162b7dc01f3a4a2ca32ed3cec83d1e02&amp;utm_medium=facebook",
      "image_url": "https://i.scdn.co/image/ab67616d0000b273a91c10fe9472d9bd89802e5a"
    },
    {
      "id": "5OndtwLGA9O6XHFcGm2H7r",
      "name": "Out Of The Woods",
      "preview_url": "https://p.scdn.co/mp3-preview/619ffdd0ee08ce9880a4cb64df45ebef3821458a?cid=162b7dc01f3a4a2ca32ed3cec83d1e02&amp;utm_medium=facebook",
      "image_url": "https://i.scdn.co/image/ab67616d0000b2739abdf14e6058bd3903686148",
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
