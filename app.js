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

    find(value){
        if(!this.head){
            return null;
        }

        let curNode = this.head;

        while (curNode) {
            if(curNode.value===value){
                return curNode;
            }
            curNode = curNode.next;
        }

        return null;
    }

    delete(value){
        if(!this.head){
            console.log("the list is empty");
            return;
        }

        while (this.head && this.head.value === value){
            this.head=this.head.next;
        }

        let curNode = this.head;

        while(curNode.next){
            if (curNode.next.value===value){
                curNode.next =curNode.next.next; //updating the next property of the current node to the next node of the node getting deleted
            }
            else{
                curNode= curNode.next; //updating the value of current node for the loop to work
            }
        }

        if(this.tail.value===value){
            this.tail = curNode;
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
LinkedList1.append("jyoti");
LinkedList1.append("jyoti");
LinkedList1.append(true);
LinkedList1.append(67.70);
LinkedList1.prepend("i am first");

console.log(LinkedList1.toArray());

LinkedList1.delete("i am first");
LinkedList1.delete(67.70);
LinkedList1.delete("jyoti");

console.log(LinkedList1.toArray());

console.log(LinkedList1.find("jyoti"));
console.log(LinkedList1.find(1));