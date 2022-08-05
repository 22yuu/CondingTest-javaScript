// 자바스크립트 해시맵

// const map = {};

// map['key1'] = 'value';
// map[0] = 1;
// map[1] = 2;

// if(map[0]) {
//     console.log('Map contains 0');
// }

// console.log(map['key1']);

// 다양한 key를 사용하는 법

const map = new Map();
const myFunc = () => console.log('I am a useful function');
const myNumber = 666;
const myObject = {
    name: 'plainObjectValue',
    otherKey: 'otherValue'
}

map.set(myFunc, 'function as a key');
map.set(myNumber, 'number as a key');
map.set(myObject, 'object as a key');

console.log(map.get(myFunc));
console.log(map.get(myNumber));
console.log(map.get(myObject));

// size 사용 가능

console.log(map.size);

// 반복문 사용

for (let [key, value] of map) {
    console.log(`${key} = ${value}`);
}