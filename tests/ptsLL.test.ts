import { YAll } from "../YAll";

describe("A list of Points", () => {
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
   test("Should exist.", () => {
	  expect(yall).toBeDefined();
   });
   test("Should have a size of 3.", () => {
	  const ptYAllSize = yall.size;
	  expect(ptYAllSize).toBe(3);
   });
   test("Should have a size of 3.", () => {
	  let pointYall = yall.toString();
	  console.log(pointYall);
	  yall.reverse();
	  pointYall = yall.toString();
	  console.log(pointYall);
   });
});
