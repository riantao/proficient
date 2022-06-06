import renderer from "react-test-renderer";
import Tabs from "./Tabs";
 
describe("Tabs component", () => {
    it("should render Tabs component", () => {
        const tree = renderer.create(
            <Tabs 
                labels={[]} 
                renderTabsContent={jest.fn()}
            />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});