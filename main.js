const myMap = new Map();

myMap.set('id',1);
myMap.set('name','Honda');
console.log(myMap.get('id'));

const mapKeys = myMap.keys();

for ( key of mapKeys ){
  console.log(key);
}

const fruits = [//シンタックスシュガー ==new Array();
      "リンゴ","バナナ"
];
fruits.push("みかン");

// コールバック関数
// fruits.forEach(function(fruit){
//   console.log(fruit);
// }
// );
fruits.forEach(fruit => console.log(fruit));



//アロー関数 有名・無名 選べる
// const firstArrow = () => {console.log('Hello,arrow')};
const firstArrow = () => console.log('Hello,arrow');

firstArrow();

const getItem = () => {console.log('あろー')};
getItem();

//Array.filter

const scores = [10,20,30,40,50];

const goodScores = scores.filter(eachScore => eachScore >= 30);

console.log(goodScores);

const Chars = ["a", "b", "c", "d"];

const findChar = Chars.find(eachChar => eachChar === "b");
console.log(findChar);

const userList = [0,1,2,3,4,5];

const userIdList = userList.map(id => {
  return `user_${id}`;
})
console.log(userIdList);
console.table(userIdList);


const Rolls = ['atacker','braster', 'jammer', 'healer'];
const OffensiveRolls = Rolls.filter(eachRoll => eachRoll !== 'healer');
console.log(OffensiveRolls);

// const players  = new Object();・・・下の意味と一緒


const postalCode ='1234-5678';
console.log(typeof(postalCode));
const changedToNum = Number(postalCode);
console.log(typeof(changedToNum),changedToNum);//numberだがNaN


// checkPostalCode:function(){
  // }以下の書き方と同意
  const postal ={

  // postalCode : '1234-5678',

  checkPostalCode(string){
    const replacedPostalCode = string.replace("-","").length;//メソッドチェーン。replace の後にlengthを繋げている
    if (replacedPostalCode === 7 ){
      return true;
    }else{
      return false;
    }
  }
}
console.log(postal.checkPostalCode(postalCode));
// const checking = function checkPostalCode(string){
//   const replacedPostalCode = string.replace("-","");
//   if (replacedPostalCode.length === 7 ){
//     return true;
//   }else{
//     return false;
//   }
// }
// const SamuraiJapan = {
//   player:{
//     player1:{
//       name: 'イチロー',
//       condition :'retired',
//     },
//     player2:{
//       name: '松井',
//       condition :'retired', 
//     },
//   },

//   getName(){
//   const playersName = Object.values(this.player);
//     console.log(playersName);
//     Object.forEach(funtion()
//     )
//   },
// };
// SamuraiJapan.getName();


const objObj = {
  test1:0,
  test2:1,
  test3:3,
}
console.log(objObj.test1);
console.log(Object.values(objObj));

for (  value of Object.values(objObj) )
{
  console.log(value);
}

const players = {
  "Honda":{
    "number":4,
    "dominant_foot":'left',
  },
  "Kagawa":{
    "number":10,
    "dominant_foot":'right',
  }
}
//取得の際にはオブジェクト・オブジェクトを使う
