import { capitalize } from "../capitalize";

describe("capitalize", () => {
    it("should return capitalized form of 'proficient'", () => {
        const expectation = "Proficient";
        const result = capitalize("proficient");

        expect(result).toBe(expectation);
    });

    it("should only return capitalized form of 'HUSKY'", () => {
        const expectation = "Husky";
        const result = capitalize("HUSKY");

        expect(result).toBe(expectation);
    });
});