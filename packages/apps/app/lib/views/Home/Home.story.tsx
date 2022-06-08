import { ComponentMeta, ComponentStory } from "@storybook/react";
import Home from "./Home";

const Template: ComponentStory<typeof Home> = args => <Home {...args} />;

const Primary = Template.bind({ });
Primary.args = { };

const story: ComponentMeta<typeof Home> = {
    title: "Home",
    component: Home
};

export default story;