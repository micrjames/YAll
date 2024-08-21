import { Node } from "./Node";
import { StringBuilder } from "./StringBuilder/StringBuilder";

export class YAll<T> {
   private head: (Node<T> | null);
   private _size: number; 

   constructor() {
	  this.head = null;
	  this._size = 0;
   }

   // O(1)
   get empty(): boolean {
	  return this._size === 0;
   }

   get size(): number {
	  return this._size;
   }

   // O(1)
   // Add to the beginning of the list.
   push_front(Key: T) {
	  const node = new Node<T>(Key);
	  if(!this.empty) node.next = this.head;
	  this.head = node;
	  this._size++;
   }

   // Add to the end of the list.
   push_back(Key: T) {
	  this.addTo(Key, this.size);
   }

   insert(Key: T, whichNodeIdx: number) {
	  if(whichNodeIdx < 0 || whichNodeIdx > this._size)
		 throw new Error("Out of Bounds.");
	  if(whichNodeIdx === 0) this.push_front(Key);
	  else
		 this.addTo(Key, whichNodeIdx, (node, previousNode) => {
			node.next = previousNode!.next;
		 });
   }

   addTo(Key: T, itToIdx: number, cb?: (node: Node<T>, previousNode: Node<T>) => void) {
	  const node = new Node<T>(Key);
	  if(this.empty) this.head = node;
	  else {
		 const previousNode = this.iterateTo(this.head, itToIdx);
		 if(cb) cb(node, previousNode);
		 previousNode!.next = node;
	  }
	  this._size++;
   }

   // Remove from specific index
   erase(index: number) {
	   if(index < 0 || index > this._size) return null;

	   let removedNode = null;
	   if(index == 0) {
		   removedNode = this.head;
		   this.head = this.head!.next;
	   } else {
		   let previousNode = this.head;
		   for(let i = 0; i < index - 1; i++)
			   previousNode = previousNode!.next;
			   removedNode = previousNode!.next;
			   previousNode!.next = removedNode!.next;
	   }

	   this._size--;
   }

   // Remove a value
   remove_value(Key: T) {
	   if(this.empty) return;

	   if(this.head?.Key === Key) {
		   this.head = this.head!.next;
		   this._size--;
	   } else {
		   let previousNode = this.head;
		   while(previousNode!.next && previousNode!.next.Key !== Key)
			   previousNode = previousNode!.next;

		   if(previousNode?.next) {
			   let removedNode = previousNode!.next;
			   previousNode!.next = removedNode!.next;
			   this._size--;
		   }
	   }
   }

   reverse() {
	  let previousNode = null;
	  let currentNode = this.head;

	  do {
		 let nextNode = currentNode.next;
		 currentNode.next = previousNode;
		 previousNode = currentNode;
		 currentNode = nextNode;
	  } while(currentNode);

	  this.head = previousNode;
   }

   idx_at(Key: T): number {
	  if(this.empty) return;
	  else {
		 let whichNodeIdx = 0;
		 let currentNode = this.head;

		 while(currentNode) {
			if(currentNode.Key === Key) return whichNodeIdx;
			currentNode = currentNode.next;
			whichNodeIdx++;
		 }
	  }
   }

   toString(): string {
	  if(this.empty) return;
	  else {
		 let sb: StringBuilder = new StringBuilder();

		 this.iterate(this.head, node => {
		    sb.append(`${node.Key}`).append(node.next ? " ➝ " : "");
		 });

		 return sb.build();
	  }
   }

   protected iterate(node: Node<T>, cb?: (node: Node<T>) => void): Node<T> {
	  do {
		 if(cb) cb(node);
		 node = node?.next;
	  } while(node);

	  return node;
   }
   protected iterateTo(node: Node<T>, whichNodeIdx: number, cb?: (node: Node<T>) => void): Node<T> {
	  for(let it = 0; it < whichNodeIdx - 1; it++) {
		 if(cb) cb(node);
		 node = node?.next;
	  }

	  return node;
   }
}
