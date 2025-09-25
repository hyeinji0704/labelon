import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";

const meta: Meta<typeof Select> = {
	title: "Components/Select",
	component: Select,
	tags: ["autodocs"],
	argTypes: {
		disabled: { control: "boolean" },
		id: { control: false }, // 스토리북에서 단독 사용 시 의미 없음
	},
  parameters: {
    docs: {
      story: {
        inline: false, // iframe 안에서 전체 화면으로 보이게
        height: '400px', // 높이 강제 지정
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
	args: {
		options: [
			{ value: "basic", label: "기본형" },
			{ value: "advanced", label: "고급형" },
		],
		value: "basic",
	},
};

export const Disabled: Story = {
	args: {
		options: [
			{ value: "basic", label: "기본형" },
			{ value: "advanced", label: "고급형" },
		],
		value: "basic",
		disabled: true,
	},
};
