import { ComponentMeta, ComponentStory } from "@storybook/react";
import Navigation from "./Navigation";

const Template: ComponentStory<typeof Navigation> = args => <Navigation {...args} />;

const Primary = Template.bind({});
Primary.args = { };

const story: ComponentMeta<typeof Navigation> = {
    title: "Navigation",
    component: Navigation
};

export default story;