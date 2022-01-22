class LinkedNode {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }

    append(data) {
        const newNode = new LinkedNode(data);
      
        if (!this.head || !this.tail) {
          this.head = newNode;
          this.tail = newNode;
      
          return this;
        }
     
        this.tail.next = newNode;
      
        this.tail = newNode;
      
        return this;
    }
    
    delete(data) {
        if (!this.head) {
          return null;
        }
      
        let deletedNode = null;
      
        while (this.head && this.head.data === data) {
          deletedNode = this.head;
      
          this.head = this.head.next;
        }
      
        let currentNode = this.head;
    
        if (currentNode !== null) {
          while (currentNode.next) {
            if (currentNode.next.data === data) {
              deletedNode = currentNode.next;
              currentNode.next = currentNode.next.next;
            } else {
              currentNode = currentNode.next;
            }
          }
        }
      
        if (this.tail && this.tail.data === data) {
          this.tail = currentNode;
        }
      
        return deletedNode;
    }

    find(data) {
        if (!this.head) {
          return null;
        }
      
        let currentNode = this.head;
      
        while (currentNode) {
          if (data !== undefined && currentNode.data === data) {
            return currentNode;
          }

          currentNode = currentNode.next;
        }
      
        return null;
    }

    print() {
        console.log(this.head);
    }
}

const linkedListCheck = new LinkedList();
linkedListCheck.append(32568);
linkedListCheck.append('hi');
linkedListCheck.print();
linkedListCheck.delete('hi');
linkedListCheck.append(9);
const result = linkedListCheck.find(32568);
console.log(result);
linkedListCheck.print();


