function GetSong(){
    var sonG = 
    [{sonG: {"id": "2tznHmp70DxMyr2XhWLOW0",
    "name": "Cigarette Daydreams",
    "preview_url": "https://p.scdn.co/mp3-preview/b27a6307585a54b232d1156b0814166c1519cd22?cid=162b7dc01f3a4a2ca32ed3cec83d1e02&amp;utm_medium=facebook",
    "image_url": "https://i.scdn.co/image/ab67616d0000b273fb1cb900d28642e668d77b12"}},
    {sonG: {
        "id": "57RA3JGafJm5zRtKJiKPIm",
        "name": "Are You Bored Yet?",
        "preview_url": "https://p.scdn.co/mp3-preview/075715293e8883dcaa5f21766f94685adfa95886?cid=162b7dc01f3a4a2ca32ed3cec83d1e02&amp;utm_medium=facebook",
        "image_url": "https://i.scdn.co/image/ab67616d0000b27384feca0133d9a8e6539a8325"
      }},
    //  {sonG:'https://www.youtube.com/embed/DZ6yrWkdaJw'}
];
    
    var rando = song[Math.floor(Math.random() * song.length)];
      
    document.getElementById("sonG").src=rando.song1;
      
    document.getElementById("sonG").height = "100%";
    document.getElementById("sonG").width = "100%";
    }
    
    
