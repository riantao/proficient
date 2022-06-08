import renderer from "react-test-renderer";
import Customers from "./Customers";

describe("Customers view", () => {
    it("should render Customers view", () => {
        const tree = renderer.create(<Customers/>).toJSON();

        expect(tree).toMatchSnapshot();
    });
});