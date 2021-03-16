const myMap = new Map();

myMap.set('id',1);
myMap.set('name','Honda');
console.log(myMap.get('name'));

const mapKeys = myMap.keys();

for ( key of mapKeys ){
  console.log(key);
}

const fruits = [//シンタックスシュガー ==new Array();
      "リンゴ","バナナ"
];
fruits.push("みかン");

// コールバック関数
fruits.forEach(function(fruit){
  console.log(fruit);
}
);

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
Object.keys(players).forEach(function(number){
  console.log(number);
});
