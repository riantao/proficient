import { projectToOption } from "../projectToOption";

describe("projectToOption", () => {
    it("should return a select option from a project", () => {
        const input: any = {
            id: "123"
        };
        const output = {
            label: "123",
            value: "123"
        };
        
        expect(projectToOption(input)).toEqual(output);
    });
});