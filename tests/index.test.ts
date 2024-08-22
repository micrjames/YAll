import { YAll } from "../YAll";

describe("A linked list", () => {
   let yall: YAll<number>;
   let listSize: number;
   beforeAll(() => {
	  yall = new YAll(); 
	  listSize = 0;
   });
   describe("Created", () => {
	  test("Should exist.", () => {
		 expect(yall).toBeDefined();
	  });
	  test("Should be empty.", () => {
		 const yallIsEmpty = yall.empty;
		 expect(yallIsEmpty).toBeTruthy();
	  });
   });
   describe("Having its values added to", () => {
	  let appendedValue: number;
	  beforeAll(() => {
		 appendedValue = 1;
	 	 yall.push_back(appendedValue);
		 console.log(yall.toString());
		 listSize++;
	  });
	  describe("Appending a value", () => {
		 test("Should have one value in the linked list.", () => {
			const yallSize = yall.size;
			expect(yallSize).toBe(listSize);
		 });
		 test("Should give index 0 as the index of the appended value.", () => {
			const idx = yall.idx_at(appendedValue);
			expect(idx).toBe(0);
		 });
	  });
	  describe("Prepending a value", () => {
		 let prependedValue: number;
		 beforeAll(() => {
			prependedValue = 2;
			yall.push_front(prependedValue);
			console.log(yall.toString());
			listSize++;
		 });
		 test("Should have two values in the linked list.", () => {
			const yallSize = yall.size;
			expect(yallSize).toBe(listSize);
		 });
		 test("Should give index 0 as the index of the prepended value.", () => {
			const idx = yall.idx_at(prependedValue);
			console.log(idx);
			expect(idx).toBe(0);
		 });
	  });
	  describe("inserting a value", () => {
		 let insertedValue: number;
		 let insertionIdx: number;
		 beforeAll(() => {
			insertedValue = 3;
			insertionIdx = 2;
			yall.insert(insertedValue, insertionIdx);
			console.log(yall.toString());
			listSize++;
		 });
		 test("Should throw an error if we insert a value at an index  of -1.", () => {
			expect(() => {
			   yall.insert(4, -1);
			}).toThrow("Out of Bounds.");
		 });
		 test("Should throw an error if we insert a value at an index  outside the linked list.", () => {
			expect(() => {
			   yall.insert(5, yall.size+1);
			}).toThrow("Out of Bounds.");
		 });
		 test("Should have three values in the linked list.", () => {
			const yallSize = yall.size;
			expect(yallSize).toBe(listSize);
		 });
		 test(`Should give index ${insertionIdx} as the index of the inserted value.`, () => {
			const idx = yall.idx_at(insertedValue);
			expect(idx).toBe(insertionIdx);
		 });
	  });
   });
   describe("Reversing the list", () => {
	  let yallRev: YAll<number>;
	  let revListSize: number;
	  let yallString: string;
	  let yallRevString: string;
	  beforeAll(() => {
		 yallString = yall.toString();
		 listSize = yall.size;
		 console.log(yall.toString());
		 yall.reverse();
		 console.log(yall.toString());
		 yallRev = yall;
		 yallRevString = yallRev.toString();
		 revListSize = yallRev.size;
	  });
	  test("Should exist.", () => {
		 expect(yallRev).toBeDefined(); 
	  });
	  test("Should have the same size as before the reversal.", () => {
		 expect(revListSize).toBe(listSize);
	  });
	  test("Should give the reversed list from the original.", () => {
		 const reversedYallString = yallString.split('').reduce((reversed, char) => char + reversed, '');
		 const stringsEqual = yallRevString === reversedYallString;
		 expect(stringsEqual).toBeTruthy();
	  });
	  test("Should be able to get the original back from a subsequent reversal.", () => {
		 yallRev.reverse();
		 const reReversedYallString = yallRev.toString();
		 const stringsEqual = reReversedYallString === yallString;
		 expect(stringsEqual).toBeTruthy();
	  });
   });
});
describe("A Point", () => {
   interface Point {
	   x: number;
	   y: number;
   };
   let p1: Point;
   let p2: Point;
   let p3: Point;
   let yall: YAll<Point>;
   beforeAll(() => {
	  yall = new YAll(); 
	  p1 = {x: 0, y: 0};
	  yall.push_back(p1);
	  p2 = {x: 1, y: 0};
	  yall.push_back(p2);
	  p3 = {x: 0, y: 1};
	  yall.push_back(p3);
   });
   test("The snake exists.", () => {
	  let snakeYall = yall.toString();
	  console.log(snakeYall);
	  yall.reverse();
	  snakeYall = yall.toString();
	  console.log(snakeYall);
   });
});
