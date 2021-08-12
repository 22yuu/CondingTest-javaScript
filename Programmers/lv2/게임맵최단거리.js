// https://programmers.co.kr/learn/courses/30/lessons/1844?language=javascript

const maps = [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]];

const dx = [1, -1,  0, 0];
const dy = [0,  0, -1, 1];
const visited = [];


function solution(maps) {
    const answer = 0;
    const N = maps.length;
    const M = maps[0].length;

    console.log(`N : ${N}, M : ${M}`);

    for(var i = 0; i < N; i++) {
        visited.push(new Array(N).fill(0));
    }

    const bfs = (x, y) => {
        const queue = [];
        queue.push([x, y, 0]);
        visited[x][y] = 1;
        console.log(`x : ${x}, y : ${y}`);

        while(queue.length) {
            const np = queue.shift();
            currentX = np[0];
            currentY = np[1];

            console.log(np);
            console.log(`np[0] : ${currentX}, np[1] : ${currentY}`);

            if(np[0] == N - 1 && np[1] == M-1 ) return np[2];

            for(let d = 0; d < 4; d++) {
                const nx = np[0] + dx[d];
                const ny = np[1] + dy[d];
                console.log(`nx : ${nx}, ny : ${ny}`);

                if(nx < 0 || nx >= N || ny < 0 || ny >= M || maps[nx][ny] == 0)  continue;

                if(visited[nx][ny] == 1) continue;

                visited[nx][ny] = 1;
                queue.push([nx, ny, np[2] + maps[nx][ny]]);
            }
        }
        return -1;
    }
    return bfs(0,0);
}

solution(maps);