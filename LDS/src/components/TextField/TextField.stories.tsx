import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from "./TextField";

const meta: Meta<typeof TextField> = {
	title: "Components/TextField",
	component: TextField,
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "radio",
			options: ["defualt", "question", "answer"],
		},
		placeholder: { control: "text" },
		value: { control: "text" },
		disabled: { control: "boolean" },
	},
};
export default meta;

type Story = StoryObj<typeof TextField>;

export const Default: Story = {
	args: {
		label: "질문",
		placeholder: "내용을 입력하세요.",
		variant: "question",
		disabled: false, // 기본값
	},
};

export const Disabled: Story = {
	args: {
		label: "질문",
		placeholder: "내용을 입력할 수 없음",
		variant: "question",
		disabled: true, // Storybook에서 확인 가능
	},
};
