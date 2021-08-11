//https://www.acmicpc.net/submit/2667/32102920

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
const N = Number(input[0]);
input.shift();
input = input.map((element) => {
  return element
    .trim()
    .split("")
    .map((element) => Number(element));
});
const visited = [];
for (let i = 0; i < N; i++) {
  visited.push(new Array(N).fill(0));
}

// x : 행 / y: 열
const moveRow = [0, 0, 1, -1]; // 동, 서, 남, 북
const moveCol = [1, -1, 0, 0]; // 동, 서, 남, 북

// 범위 체크
const rangeCheck = (row, col) => {
  if (row >= 0 && row < N && col >= 0 && col < N) {
    return true;
  }
  return false;
};

// DFS
const DFS = (row, col) => {
  if (
    rangeCheck(row, col) === true &&
    input[row][col] === 1 &&
    visited[row][col] === 0
  ) {
    // 범위안에 들어가고 && 방문한적이 없으면 DFS 탐색
    visited[row][col] = 1; // 방문 처리
    number++;
    for (let n = 0; n < moveRow.length; n++) {
      DFS(row + moveRow[n], col + moveCol[n]);
    }
  }
};

const complex = [];
let number = 0;

for (let row = 0; row < N; row++) {
  for (let col = 0; col < N; col++) {
    if (Number(input[row][col]) === 1 && visited[row][col] === 0) {
      DFS(row, col);
      complex.push(number);
      number = 0;
    }
  }
}
complex.sort((a, b) => a - b); // 오름차순으로 정렬!
const answer = [complex.length, ...complex];

console.log(answer.join("\n"));