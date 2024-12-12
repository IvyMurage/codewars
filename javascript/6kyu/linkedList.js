class Node {
    constructor(value){
        this.data = value // this is the value of the node
        this.next = null // pointer to the next node
    }
}

class LinkedList {
    constructor() {
        this.head = null // first node in the list
        this.size = 0 // number of nodes in the list
    }

    append(data){
        const newNode = new Node(data)
        if(!this.head){
            this.head = newNode // if there is no head, the new node is the head
        }
        else{
            let current = this.head
            while(current.next){
                current = current.next
            }
            current.next = newNode

        }
        this.size++
        
    }

    insertAt(data, index) {
        if(index < 0 || index > this.size) return 0;

        const node = new Node(data)

        if(index === 0) {
            node.next = this.head;
            this.head = node;
        }
        else {
            let current  = this.head;
            let previous;
            let count = 0;

            while(count < index){
                previous = current;
                current = current.next;
                count++;
            }
            node.next = current;
            previous.next = node;
        }
    }
}


const list = new LinkedList()
list.append(12)
list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)
list.append(6)
list.append(7)
list.append(8)
// 12 - 1 - 2 - 3 - 4 - 5 - 6 - 7 - 8 - 9 - 10 - 11
// head -> 12
// head.next -> 1
// head.next.next -> 2