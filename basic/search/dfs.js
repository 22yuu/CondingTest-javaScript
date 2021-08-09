const graph = {
    A: ["B", "C"],
    B: ["A", "D"],
    C: ["A", "G", "H", "I"],
    D: ["B", "E", "F"],
    E: ["D"],
    F: ["D"],
    G: ["C"],
    H: ["C"],
    I: ["C", "J"],
    J: ["I"]
};

const dfs = (graph, startNode) => {
    let needVisitStack = [];       // 탐색을 마친 노드들
    let visitedQueue = [];     // 탐색을 해야할 노드들

    needVisitStack.push(startNode);

    while(needVisitStack.length !== 0) {
        const node = needVisitStack.pop();
        if(!visitedQueue.includes(node)) {
            visitedQueue.push(node);
            needVisitStack = [...needVisitStack, ...graph[node]];
        }
    }
    return visitedQueue;
};


console.log(dfs(graph, 'A'));