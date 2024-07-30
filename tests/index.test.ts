import { YAll } from "../YAll";

describe("A linked list", () => {
   let yall: YAll<number>;
   beforeAll(() => {
	  yall = new YAll(); 
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
	  });
	  describe("Appending a value", () => {
		 test("Should have one value in the linked list.", () => {
			const yallSize = yall.size;
			expect(yallSize).toBe(1);
		 });
		 test("Should give index 0 as the index of the appended value.", () => {
			const idx = yall.searchKey(1);
			expect(yall.searchKey(appendedValue)).toBe(idx);
		 });
	  });
	  describe("Prepending a value", () => {
		 let prependedValue: number;
		 beforeAll(() => {
			prependedValue = 2;
			yall.prepend(prependedValue);
		 });
		 test("Should have two values in the linked list.", () => {
			const yallSize = yall.size;
			expect(yallSize).toBe(2);
		 });
		 test("Should give index 0 as the index of the prepended value.", () => {
			const idx = yall.searchKey(2);
			expect(yall.searchKey(prependedValue)).toBe(idx);
		 });
	  });
   });
});
