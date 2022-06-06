import renderer from "react-test-renderer";
import Home from "./Home";

describe("Home feature", () => {
    it("should render Home feature", () => {
        const tree = renderer.create(<Home/>).toJSON();

        expect(tree).toMatchSnapshot();
    });
});