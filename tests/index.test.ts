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
		 yall.toString();
	  });
	  test("Should be empty.", () => {
		 const yallIsEmpty = yall.isEmpty;
		 expect(yallIsEmpty).toBeTruthy();
	  });
   });
   describe("Having its values modified", () => {
	  let appendedValue: number;
	  beforeAll(() => {
		 appendedValue = 1;
		 yall.append(appendedValue);
		 yall.toString();
		 listSize++;
	  });
	  describe("Appending a value", () => {
		 test("Should have one value in the linked list.", () => {
			const yallSize = yall.size;
			expect(yallSize).toBe(listSize);
		 });
		 test("Should give index 0 as the index of the appended value.", () => {
			const idx = yall.searchKey(appendedValue);
			expect(idx).toBe(0);
		 });
	  });
	  describe("Prepending a value", () => {
		 let prependedValue: number;
		 beforeAll(() => {
			prependedValue = 2;
			yall.prepend(prependedValue);
			yall.toString();
			listSize++;
		 });
		 test("Should have two values in the linked list.", () => {
			const yallSize = yall.size;
			expect(yallSize).toBe(listSize);
		 });
		 test("Should give index 0 as the index of the prepended value.", () => {
			const idx = yall.searchKey(prependedValue);
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
			yall.toString();
			listSize++;
		 });
		 test("Should have three values in the linked list.", () => {
			const yallSize = yall.size;
			expect(yallSize).toBe(listSize);
		 });
		 test("Should give index 1 as the index of the inserted value.", () => {
			const idx = yall.searchKey(insertedValue);
			console.log(idx);
			expect(idx).toBe(insertionIdx);
		 });
	  });
   });
});
