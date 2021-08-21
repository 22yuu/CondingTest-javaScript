/*
    참고사이트 : 
        - https://icksw.tistory.com/97
        - https://www.apexcel.blog/algorithm/graph/mst/mst/
        - https://maetdori.tistory.com/entry/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-Kruskal-Algorithm-Union-Find-%ED%81%AC%EB%A3%A8%EC%8A%A4%EC%B9%BC-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EC%9C%A0%EB%8B%88%EC%98%A8-%ED%8C%8C%EC%9D%B8%EB%93%9C
        - https://www.apexcel.blog/algorithm/graph/union-find/union-find/
    
    예제 문제 :
        - 백준 1197번 [최소 스패닝 트리] https://www.acmicpc.net/problem/1197
        - 백준 1976번 [여행 가자] https://www.acmicpc.net/problem/1976
        - 백준 1717번 [집합의 표현] https://www.acmicpc.net/problem/1717
        - 프로그래머스 레벨3 [섬 연결하기] https://programmers.co.kr/learn/courses/30/lessons/42861
    
    
    크루스칼 알고리즘 ( Kruskal Algorithm)
        최소 비용 신장 트리의 한 종류인 크루스칼 알고리즘 구현

    크루스칼 알고리즘이란?
        - 음수 가중치가 없는 무방향 그래프에서 모든 정점을 최소의 비용으로 연결하는 방법.
        - 이 때 사이클이 발생하면 안된다.
        - 크루스칼 알고리즘은 가중치가 작은 간선부터 확인하는 알고리즘이다.

    그런데 사이클이 발생하는 것을 어떻게 알 수 있을까?

    Union Find

    여기서 사이클을 확인하는 방법에 사용되는 개념이 Union Find(합집합 찾기)라는 알고리즘이 있다.
    Disjoin-Set 알고리즘이라고 불리는 이 알고리즘은 여러 개의 노드가 있을 때 두 노드를 선택하고
    두 노드가 같은 그래프에 속한지 판별하는 알고리즘이다.

    즉, 같은 그래프에 속한 두 노드를 연결했을 때 사이클이 발생한다.
    
    유니온-파인드에 대해서 더 자세하게 설명을 덧붙이자면, 트리형 자료 구조의 일종으로 일반적인 트리의 형태와는 조금 다르다.
    상호 배타적인 집합을 다루기 때문에 서로소 집합(disjoi set)이라고 한다. 상호 배타적이기 때문에 두 집합의 교집합은 공집합이기 때문에
    교집합 연산은 필요 없다. 해당 자료구조에서 필요한 연산은 3가지이다.
    - MakeSet(x) : 원소 x를 집합으로 만든다.
    - Find(x) :원소 x를 가진 집합을 찾는다.
    - Union(x, y) : 두 원수 x와 y를 하나의 집합으로 만든다.

*/

class DisjoinSet {
    constructor() {
        this.set = [];
    }

    makeSet = n => {
        this.rank = [];
        for(let i = 0; i < n; i++) {
            this.set[i] = i;
            this.rank[i] = 0;
        }
    }

    find = u => {
        if(u == this.set[u]) return u;
        return this.set[u] = find(this.set[u]);
    }

    union = (u, v) => {
        u = this.find(u), v = this.find(v);
        if(this.rank[u] > this.rank[v]) {
            this.set[v] = u;
        }
        else {
            this.set[u] = v;
            if( this.rank[u] === this.rank[v]) {
                this.rank[v] += 1;
            }
        }
    }
}

// 정점1, 정점2, 가중치
const graph = [
    [1, 2, 19],
    [1, 3, 13],
    [1, 4, 30],
    [1, 5, 14],
    [1, 7, 54],
    [2, 3, 12],
    [2, 6, 39],
    [3, 6, 17],
    [3, 5, 57],
    [4, 7, 28],
    [5, 7, 76],
    [6, 7, 49]
], mst = [], V = 7;

// 가중치가 작은 순으로 정렬
graph.sort((a,b) => a[2] - b[2]);

const set = new DisjoinSet();
set.makeSet(V);


for(let i = 0; i < graph.length; i++) {
    if(mst.length >= V - 1 ) break;
    const [u, v, w] = graph[i];

    if(set.find(u) !== set.find(v)) {
        set.union(u, v);
        mst.push(w);
    }
}

console.log(set);