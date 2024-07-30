import { Node } from "./Node";

export class YAll<T> {
   private head: (Node<T> | null);
   private _size: number; 

   constructor() {
	  this.head = null;
	  this._size = 0;
   }

   // O(1)
   get isEmpty(): boolean {
	  return this._size === 0;
   }

   get size(): number {
	  return this._size;
   }

   // O(1)
   // Add to the beginning of the list.
   prepend(Key: T) {
	  const node = new Node<T>(Key);
	  if(!this.isEmpty)
		 node.next = this.head;
	  this.head = node;
	  this._size++;
   }

   // Add to the end of the list.
   append(Key: T) {
	  const node = new Node(Key);
	  if(this.isEmpty)
		 this.head = node;
	  else {
		 let previousNode = this.head;
		 while(previousNode?.next)
			previousNode = previousNode.next;
		 previousNode!.next = node;
	  }
	  this._size++;
   }

   searchKey(Key: T) {
	  if(this.isEmpty) return;
	  else {
		 let whichNodeIdx = 0;
		 let currentNode = this.head;

		 while(currentNode) {
			if(currentNode.Key = Key) return whichNodeIdx;
			currentNode = currentNode.next;
			whichNodeIdx++;
		 }
	  }
   }

   toString() {
	  if(this.isEmpty) {
		 console.log("List is empty.");
		 return;
	  } else {
		 let current = this.head;
		 let output = "";
		 while(current) {
			output += current.Key;
			output += current.next ? " ➝ " : "";
			current = current.next;
		 }

		 console.log("linked list: ", output);
	  }
   }
}
