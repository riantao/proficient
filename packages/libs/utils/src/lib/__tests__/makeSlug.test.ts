import { makeSlug } from "../makeSlug";

describe("makeSlug", () => {
    it("should return 'polytainers' from 'Polytainers'", () => {
        const customer = "Polytainers"
        const slug = "polytainers";

        expect(makeSlug(customer)).toEqual(slug);
    });
});