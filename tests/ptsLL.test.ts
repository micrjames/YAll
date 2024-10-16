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
   describe("Reversing the list", () => {
	  let yallRev: YAll<IPoint>;
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
		 const reversedYallString = yallString.split(' ➝ ').reverse().join(' ➝ ');
		 const stringsEqual = yallRevString === reversedYallString;
		 expect(stringsEqual).toBeTruthy();
		 console.log(yallRevString, reversedYallString);
	  });
	  test("Should be able to get the original back from a subsequent reversal.", () => {
		 yallRev.reverse();
		 const reReversedYallString = yallRev.toString();
		 const stringsEqual = reReversedYallString === yallString;
		 expect(stringsEqual).toBeTruthy();
	  });
   });
   describe("Erase from the list at an index", () => {
	  let yallString: string;
	  let yallListElements: string[];
	  let yallListElementsStr: string;
	  let idxToErase: number;
	  let yallListElementsFiltered: string[];
	  beforeAll(() => {
		 yallString = yall.toString();
		 yallListElements = yallString.split("➝");
		 idxToErase = 0;
		 yallListElementsFiltered = yallListElements.filter((_, idx) => idx !== idxToErase);
		 yallListElementsStr = yallListElementsFiltered.join("➝").trim();
		 --listSize;
		 yall.erase(idxToErase);
		 console.log(yallListElementsStr, yall.toString());
	  });
	  test("Should have a size of 2.", () => {
		 const yallSize = yall.size;
		 const yallListElementsFilteredSize = yallListElementsFiltered.length;
		 expect(yallSize).toBe(yallListElementsFilteredSize);
	  });
	  test("Should have the element at index 0 removed.", () => {
		 yallString = yall.toString();
	     expect(yallString).toBe(yallListElementsStr);
	  });
   });
   describe("Remove a specific 'Key' from the list", () => {
	  let yallString: string;
	  let yallListElements: string[];
	  let yallListElementsStr: string;
	  let KeyToRemove: string;
	  let yallListElementsFiltered: string[];
	  beforeAll(() => {
		 yallString = yall.toString();
		 yallListElements = yallString.split("➝");
		 KeyToRemove = JSON.stringify({"x": 0, "y": 0});
		 yallListElementsFiltered = yallListElements.filter(el => el !== KeyToRemove);
		 yallListElementsStr = yallListElementsFiltered.join("➝").trim();
		 --listSize;
		 yall.remove_value(JSON.parse(KeyToRemove));
		 console.log(yallListElementsStr, yall.toString());
	  });
	  test("Should have a size of 2.", () => {
		 const yallSize = yall.size;
		 const yallListElementsFilteredSize = yallListElementsFiltered.length;
		 expect(yallSize).toBe(yallListElementsFilteredSize);
	  });
	  test("Should have the element at index 0 removed.", () => {
		 yallString = yall.toString();
	     expect(yallString).toBe(yallListElementsStr);
	  });
   });
   describe("Get the value of the front item.", () => {
	  let yallString: string;
	  let yallStringSize: number;
	  let frontValue: IPoint;
	  beforeAll(() => {
		 yallString = yall.toString();
		 yallStringSize = yall.size;
		 frontValue = yall.front();
	  });
	  // TODO: Check type of 'frontValue'
	  test(`Should have the value of the first element of the list, ${yallString}.`, () => {
		 const yallNodes = yallString.split("➝");
		 const firstEl = yallNodes.shift().trim();
		 expect(JSON.stringify(frontValue)).toBe(firstEl);
	  });
	  test("The list should still be same as before.", () => {
		 expect(yallString).toEqual(yall.toString());
	  });
	  test(`Should still have a size of ${yallStringSize} after callng the method.`, () => {
		 expect(yallStringSize).toBe(yall.size);
	  });
   });
   describe("Get the value of the end item.", () => {
	  let yallString: string;
	  let yallStringSize: number;
	  let backValue: IPoint;
	  beforeAll(() => {
		 yallString = yall.toString();
		 yallStringSize = yall.size;
		 backValue = yall.back();
	  });
	  // TODO: Check type of 'frontValue'
	  /*
	  test("Should be a number.", () => {
		 expect(backValue).toStrictEqual(expect.any(Number));
	  });
	  */
	  test(`Should have the value of the last element of the list, ${yallString}.`, () => {
		 const yallNodes = yallString.split("➝");
		 const lastEl = yallNodes.pop().trim();
		 expect(JSON.stringify(backValue)).toBe(lastEl);
	  });
	  test("The list should still be same as before.", () => {
		 expect(yallString).toEqual(yall.toString());
	  });
	  test(`Should still have a size of ${yallStringSize} after calling the method.`, () => {
		 expect(yallStringSize).toBe(yall.size);
	  });
   });
   describe("Remove the front item and return its value.", () => {
	  let yallString: string;
	  let yallStringSize: number;
	  let frontItem: IPoint;
	  beforeAll(() => {
		 yallString = yall.toString();
		 yallStringSize = yall.size;
		 frontItem = yall.pop_front();
	  });
	  // TODO: Check type of 'frontValue'
	  /*
	  test("Should be a number.", () => {
		 expect(backValue).toStrictEqual(expect.any(Number));
	  });
	  */
	  test(`Should have the value of the first element of the list, ${yallString}.`, () => {
		 const yallNodes = yallString.split("➝");
		 const firstEl = yallNodes.shift().trim();
		 expect(JSON.stringify(frontItem)).toBe(firstEl);
	  });
	  test("The list should not be the same as before.", () => {
		 expect(yallString).not.toBe(yall.toString());
	  });
	  test(`Should have the size of ${yallStringSize - 1} after calling the method.`, () => {
		 const newYallStringSize = yall.size;
		 expect(newYallStringSize).toBe(yallStringSize-1);
	  });
   });
});
/*
*/
