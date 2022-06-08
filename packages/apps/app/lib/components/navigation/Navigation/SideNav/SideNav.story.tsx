import { ComponentMeta, ComponentStory } from "@storybook/react";
import SideNav from "./SideNav";

const Template: ComponentStory<typeof SideNav> = args => <SideNav {...args} />;

const Primary = Template.bind({});
Primary.args = { };

const story: ComponentMeta<typeof SideNav> = {
    title: "SideNav",
    component: SideNav
};

export default story;