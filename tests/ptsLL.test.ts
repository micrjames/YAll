import { YAll } from "../YAll";
import { IPoint } from "./IPoint";

describe("A list of Points", () => {
   let pts: IPoint[];
   let yall: YAll<IPoint>;
   let listSize: number;
   beforeAll(() => {
	  yall = new YAll(); 
	  pts = [
		 {x: 0, y: 0},
		 {x: 1, y: 0},
		 {x: 0, y: 1}
	  ];

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
	  let appendedValue: IPoint;
	  beforeAll(() => {
		 appendedValue = pts[0];
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
		 let prependedValue: IPoint;
		 beforeAll(() => {
			prependedValue = pts[1];
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
		 let insertedValue: IPoint;
		 let insertionIdx: number;
		 beforeAll(() => {
			insertedValue = pts[2];
			insertionIdx = 2;
			yall.insert(insertedValue, insertionIdx);
			console.log(yall.toString());
			listSize++;
		 });
		 test("Should throw an error if we insert a value at an index  of -1.", () => {
			expect(() => {
			   yall.insert({x: -1, y: -1}, -1);
			}).toThrow("Out of Bounds.");
		 });
		 test("Should throw an error if we insert a value at an index  outside the linked list.", () => {
			expect(() => {
			   yall.insert({x: -1, y: -1}, yall.size+1);
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
});
