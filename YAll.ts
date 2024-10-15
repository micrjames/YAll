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

   front(): T {
	  return this.head?.Key;
   }

   back(): T {
	  const lastNode = this.iterateTo(this.head, this.size);
	  return lastNode?.Key;
   }

   pop_front(): T | null {
	  if(this.empty) return null;
	  let removedNode = null;
	  this._size--;
	  removedNode = this.head;
	  this.head = this.head!.next;

	  return removedNode?.Key;
   }

   pop_back(): T | null {
	  if(this.empty) return null;

	  const whichNodeIdx = this._size;
	  let removedNode = null;
	  let previousNode = this.head;
	  for(let i = 0; i < whichNodeIdx - 1; i++) {
	     previousNode = previousNode!.next;
		 removedNode = previousNode!.next;
		 previousNode!.next = removedNode!.next;
	  }
	  this._size--;

	  return removedNode?.Key;
   }

   value_at(whichNodeIdx: number): T | null {
	  if(whichNodeIdx < 0 || whichNodeIdx > this._size)
		 throw new Error("Out of Bounds.");
	  return this.iterateTo(this.head, whichNodeIdx)?.Key;
   }

   value_n_from_end(idx: number): T | null {
	  const idx_to_end = this.size - idx;
	  return this.value_at(idx_to_end);
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

   protected addTo(Key: T, itToIdx: number, cb?: (node: Node<T>, previousNode: Node<T>) => void) {
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
   erase(whichNodeIdx: number) {
	  if(whichNodeIdx < 0 || whichNodeIdx > this._size)
		 throw new Error("Out of Bounds.");

	  let removedNode = null;
	  if(whichNodeIdx === 0) {
		   removedNode = this.head;
		   this.head = this.head!.next;
	   } else {
		   let previousNode = this.head;
		   for(let i = 0; i < whichNodeIdx - 1; i++) {
			   previousNode = previousNode!.next;
			   removedNode = previousNode!.next;
			   previousNode!.next = removedNode!.next;
		   }
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
	  let node = this.head;

	  do {
		 let nextNode = node.next;
		 node.next = previousNode;
		 previousNode = node;
		 node = nextNode;
	  } while(node);

	  this.head = previousNode;
   }

   idx_at(Key: T): number {
	  if(this.empty) return -1;
	  else {
		 let whichNodeIdx = 0;
		 let idx: number;

		 this.iterate(this.head, node => {
			if(node.Key === Key) {
			   idx = whichNodeIdx;
			   return;
			}
			whichNodeIdx++;
		 });

		 return idx;
	  }
   }

   toString(): string {
	  if(this.empty) return;
	  else {
		 let keyStr: string;
		 let sb: StringBuilder = new StringBuilder();

		 this.iterate(this.head, node => {
			let Key = node.Key;
			if(typeof Key === "object")
			   keyStr = JSON.stringify(Key);
			else
			   keyStr = `${Key}`;
			sb.append(keyStr).append(node.next ? " ➝ " : "");
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
