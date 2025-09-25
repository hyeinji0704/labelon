import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "./Tag";

const meta: Meta<typeof Tag> = {
  title: "Components/Tag",
  component: Tag,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["default", "semantic"] },
    label: { control: "text" },
    contents: { control: "object", description: "태그 내용 목록 (배열)" },
    showIcon: { control: "boolean" }, // ✅ 컨트롤에서 on/off 가능
  },
};
export default meta;

type Story = StoryObj<typeof Tag>;

export const Primary: Story = {
  args: {
    label: "법령근거",
    contents: ["전파법 제58조의 2제2항"],
    variant: "default",
    showIcon: true, // ✅ 기본 아이콘 표시
  },
};

export const WithoutIcon: Story = {
  args: {
    label: "법령근거",
    contents: [],       // 내용 없음
    variant: "default",
    showIcon: false,    // ✅ 아이콘 완전히 숨김(렌더 X)
  },
};

export const Semantic: Story = {
  args: {
    label: "법령근거",
    contents: ["전파법 제58조의 2제2항", "전파법 제58조 제3조"],
    variant: "semantic",
    showIcon: true,
  },
};
