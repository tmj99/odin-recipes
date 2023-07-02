class Node {
    constructor (data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class linkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // insert first

    insertFirst(data){
        this.head = new Node (data, this.head);
    }
}