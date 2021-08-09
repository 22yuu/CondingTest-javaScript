class Node {
    constructor(data) {
        this.data = data;
        this.child = [];
    }

    add(data) {
        this.child.push(new Node(data));
    }

    remove(data) {
        this.child = this.child.filter(child=> child.data === data? false : true);
    }
}

class Tree {
    constructor() {
        this.root = null;
    }
}

const t = new Tree();       // 빈 트리 생성
t.root = new Node('a');     // 루트가 node 'a'의 주소를 가리키면 'a'의 자식들까지 접근 가능하다.
t.root.add('b');            // a의 자식 'b', 'c'
t.root.add('c');
t.root.child[0].add('d');   // 'b'의 자식으로 'd'가 추가된다.