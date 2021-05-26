class LinkedList{
    constructor(){
        this.head = null; //first element of the list
        this.tail = null; //last element of the list
    }

    append(value) {
        const newNode = { value: value, next: null};

        if(this.tail) {
            this.tail.next =newNode; //adding the value in the next to link the list
        }
        this.tail= newNode; //changing the value of entire til to the next value i.e the next item in the list
        if(!this.head){ // adding value to head if the head if empty
            this.head = newNode;
        }
    }

    toArray() {
        const elements = [];

        let curNode = this.head;
        while (curNode) {
            elements.push(curNode); //to create an array of the linkedList
            curNode= curNode.next;
        }

        return elements;
    }
}

const LinkedList1 = new LinkedList();

LinkedList1.append(1);
LinkedList1.append("hello world");
LinkedList1.append("jyoti");
LinkedList1.append(true);
LinkedList1.append(67.70);

console.log(LinkedList1.toArray());