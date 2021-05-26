class LinkedList{
    constructor(){
        this.head = null; //first element of the list
        this.tail = null; //last element of the list
    }

    append(value) { //adding a node at the end of the list
        const newNode = { value: value, next: null};

        if(this.tail) {
            this.tail.next =newNode; //adding the value in the next to link the list
        }
        this.tail= newNode; //changing the value of entire til to the next nodee i.e the next item in the list
        if(!this.head){ // adding value to head if the head if empty
            this.head = newNode;
        }
    }

    prepend(value) { //adding a node in the beginning of the list
        const newNode = { value: value, next: this.head} //as we are prepending the node, next cant be null, it has to contain the the value os the 1st node in the previous list
        
        this.head = newNode; //this will make the head equal to the new value
        if(!this.tail){ //if the list is empty i.e there is no head or tail then this will ceate a tail.
            this.tail=newNode
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
LinkedList1.prepend("i am first")

console.log(LinkedList1.toArray());