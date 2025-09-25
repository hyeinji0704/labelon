import type { Meta, StoryObj } from "@storybook/react";
import { MainPage } from "./MainPage";

const meta: Meta<typeof MainPage> = {
	title: "pages/MainPage",
	component: MainPage,
	parameters: {
		layout: "fullscreen",
	},
	argTypes: {
		workboardMode: {
			control: "radio",
			options: ["image", "fields"],
			description: "WorkBoard 표시 모드",
		},
		sidebarOpen: {
			control: "boolean",
			description: "사이드바 열림 여부",
		},
	},
};

export default meta;
type Story = StoryObj<typeof MainPage>;

export const Playground: Story = {
	args: {
		workboardMode: "fields",
		sidebarOpen: true,
	},
	render: (args) => <MainPage {...args} />,
};
