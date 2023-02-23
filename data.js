let data=[
  {
    "category": "Reaction",
    "score": 80,
    "icon": "./assets/images/icon-reaction.svg"
  },
  {
    "category": "Memory",
    "score": 92,
    "icon": "./assets/images/icon-memory.svg"
  },
  {
    "category": "Verbal",
    "score": 61,
    "icon": "./assets/images/icon-verbal.svg"
  },
  {
    "category": "Visual",
    "score": 72,
    "icon": "./assets/images/icon-visual.svg"
  }
]







// for(i=0;i<4;i++){
//   createChild(data, i);
// }

// function createChild(dataset,index){
//   console.log("index"+index);
//   const el= document.createElement("div"); 

//   el.innerHTML=`<div class="h-10  bg-slate-200 mx-auto my-5 rounded-lg py-2 flex ">
//   <img class="h-4 px-1 my-auto" src="${dataset[index].icon}" alt="">
//   <p class="font-bold text-xs align-middle my-auto ">${dataset[index].category}</p>
//   <p class="font-bold flex-grow text-right px-1 text-xs my-auto">${dataset[index].score} / 100</p>
//   </div>`
//  console.log(index)
//  document.getElementById("stats").appendChild(el);
//   console.log(el);
//   // document.getElementById("stats").appendChild(el)
// }


