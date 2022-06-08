import renderer from "react-test-renderer";
import Navigation from "./Navigation";

describe("Navigation feature", () => {
    it("should render Navigation feature", ()=> {
        const tree = renderer.create(<Navigation/>).toJSON();

        expect(tree).toMatchSnapshot();
    });
});