class MyQueue {
    constructor() {
        this._arr = [];
    }

    // 삽입 enque
    enqueue(item) {
        this._arr.push(item);
    }
    
    // 삭제 deque
    dequeue() {
        this._arr.shift();
    }

    // size 
    size() {
        return this._arr.length;
    }

    // empty 체크
    isEmpty() {

        if(this._arr.length == 0) return true;
        else return false;
    }
}

const que = new MyQueue();

que.enqueue(1);
que.enqueue(2);
que.enqueue(3);

console.log(que);
console.log(que.size());
console.log(que.isEmpty());

