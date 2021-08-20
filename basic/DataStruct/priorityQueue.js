// https://velog.io/@cada/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%A1%9C-%EC%9A%B0%EC%84%A0%EC%88%9C%EC%9C%84-%ED%81%90-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0

class QElement {
    constructor(element, priority) {
        this.element = element;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.queue = [];
    }
}


// 삽입 메소드 구현
// 데이터의 우선순위에 따라 큐의 적절한 위치에 삽입
function enqueue(element, priority) {
    const qElement = new QElement(element, priority);
    let isContain = false;

    // 전체 데이터를 순회하면서 자신의 우선순위가 더 높은 위치를 탐색
    // splice 함수는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경
    // array.splice(startIndex, deleteCount, item1, item2, ...)
    for(let i=0, j=this.queue.length; i<j; i++) {
        if(this.queue[i].priority < element.priority) {
          this.queue.splice(i, 0, qElement);
          isContain = true;
          break;
        }
      }

    // 큐에 자신보다 더 낮은 우선순위를 가진 요소가 없을 때, 큐의 맨 마지막에 삽입
    if(!isContain) {
        this.queue.push(qElement);
    }
}

// 삭제 메소드 구현

function dequeue() {
    // 큐가 비어있을 때는 오류를 발생시킨다.
    // 비어있지 않다면 첫번째 요소를 삭제하고 반환한다.
    if(this.queue.length === 0) {
        return new Error("우선순위 큐에 데이터가 없습니다.");
    }
    return this.queue.shift();
}

function front() {
    if(this.queue.length === 0) {
        return new Error("우선순위 큐에 데이터가 없습니다.");
    }
    return this.queue[0];
}

function rear() {
    if(this.queue.length === 0) {
        return new Error("우선순위 큐에 데이터가 없습니다.");
    }
    return this.queue[this.queue.length - 1];
}

function isEmpty() {
    return this.queue.length === 0;
}

function print() {
    let str ="";
    this.queue.forEach(item => str += item.element + " ");
    return str;
}

enqueue(1, 3);
enqueue(2, 2);
enqueue(3, 4);
enqueue(4, 1);

print();