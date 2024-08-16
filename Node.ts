import { YANode } from "./YANode/YANode";

export class Node<T> implements YANode<T> {
   Key: T;
   next: YANode<T>;
   constructor(Key: T) {
	  this.Key = Key;
	  this.next = null;
   }
}
