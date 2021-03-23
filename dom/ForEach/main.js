
function follow(){
  console.log('followしました')
};
const btn = document.getElementById('target_button');
btn.addEventListener('dblclick', ()=>{
  follow();
});

let youtuber = {
  list:{
    business:{
      youtuber:[
        {name:"しまぶー",age:20,teachPrograming(){} },
        {name:"あっちゃん",age:37,teachSociety(){} }, 
      ]
    }
  }
};

window.document.getElementById