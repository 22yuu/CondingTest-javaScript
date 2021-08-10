let fs = require("fs");
let graph = fs.readFileSync("/dev/stdin").toString().split("\n");
const N = Number(graph[0].split(" ")[0]); // 행
const M = Number(graph[0].split(" ")[1]); // 열
graph.shift();
graph = graph.map((element) => element.trim().split(""));
const visited = Array.from(new Array(N), () => new Array(M).fill(0));
const path = Array.from(new Array(N), () => new Array(M).fill(0));

const moveRow = [0, 0, 1, -1];
const moveCol = [1, -1, 0, 0];
const rangeCheck = (row, col) => {
  if (row >= 0 && row < N && col >= 0 && col < M) {
    return true;
  }
  return false;
};
const BFS = (r, c) => {
  const queue = [];
  queue.push([r, c]);
  path[r][c] = 1;

  while (queue.length) {
    const target = queue.shift();
    currentRow = target[0];
    currentCol = target[1];

    if (!visited[currentRow][currentCol]) {
      visited[currentRow][currentCol] = 1; // 방문처리

      for (let n = 0; n < 4; n++) {
        const nextRow = currentRow + moveRow[n];
        const nextCol = currentCol + moveCol[n];
        if (
          rangeCheck(nextRow, nextCol) &&
          Number(graph[nextRow][nextCol]) === 1 &&
          !visited[nextRow][nextCol]
        ) {
          queue.push([nextRow, nextCol]);
          path[nextRow][nextCol] = path[currentRow][currentCol] + 1;
        }
      }
    }
  }
};

BFS(0, 0);
console.log(path[N - 1][M - 1]);