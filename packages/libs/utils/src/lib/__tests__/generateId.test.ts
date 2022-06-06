import * as util from "../generateId";

describe("generateId", () => {
	it("should return a 32 character hex id", () => {
		// Setup
		const spy = jest.spyOn(util, "generateId");
		const { generateId } = util;

		// Work
		const id = generateId();

		// Assertions
		expect(spy).toHaveBeenCalledWith();
		expect(id).toHaveLength(32);
	});
});