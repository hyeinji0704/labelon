// src/components/FormSection/FormSection.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "../Accordion/Accordion";
import { AccordionItem } from "../Accordion/AccordionItem";
import { FormField } from "../FormField/FormField";
import { TagList } from "../Tag/TagList";
import { TextField } from "../TextField/TextField";
import { FormSection } from "./FormSection";

// 1) FormSection의 props + 스토리 전용 토글을 합친 Args 타입
type FormSectionProps = React.ComponentProps<typeof FormSection>;
type StoryArgs = FormSectionProps & {
  showForm: boolean;
  showTags: boolean;
};

// 2) Meta를 커스텀 Args로 타이핑
const meta: Meta<StoryArgs> = {
  title: "Components/FormSection",
  component: FormSection,
  parameters: { layout: "padded" },
  argTypes: {
    title: { control: "text" },
    className: { control: "text" },
    showForm: { control: "boolean" },
    showTags: { control: "boolean" },
    children: { control: false }, // children은 컨트롤 비활성화
  },
  // 기본 args (스토리 전역)
  args: {
    title: "질문 세트",
    showForm: true,
    showTags: true,
  },
};
export default meta;

type Story = StoryObj<StoryArgs>;

/** ✅ 기존 Example 유지 */
export const Example: Story = {
  args: { title: "데이터 타입" }, // 필수 args 존재하도록 지정
  render: (args) => (
    <FormSection {...args}>
      <FormField
        label="유형"
        options={[
          { value: "basic", label: "기본형" },
          { value: "advanced", label: "고급형" },
        ]}
      />
    </FormSection>
  ),
};
Example.storyName = "FormFiled 예시";

/** ✅ 아코디언 예시 (추가/교체분) */
export const WithAccordion: Story = {
  args: { title: "질문 세트", showForm: true, showTags: true },
  render: ({ showForm, showTags, ...sectionProps }) => (
    <FormSection {...sectionProps}>
      <Accordion>
        <AccordionItem title="세트 01" defaultOpen>
          {showForm && (
            <>
              <TextField label="질문" placeholder="내용을 입력하세요." />
              <TextField
                label="답변"
                placeholder="내용을 입력하세요."
                rows={3}
              />
            </>
          )}

          {showTags && (
            <TagList
              items={[
                {
                  label: "법령근거",
                  contents: [
                    "제58조 2항",
                    "시행령 제77조 2항",
                    "방송통신기자재 적합성 평가",
                  ],
                  variant: "semantic",
                },
              ]}
            />
          )}
        </AccordionItem>

        <AccordionItem title="세트 02">
          <TextField label="질문" placeholder="세트 02 질문 입력" />
          <TextField label="답변" placeholder="세트 02 답변 입력" rows={3} />
        </AccordionItem>
      </Accordion>
    </FormSection>
  ),
  // (선택) Docs 잘림 방지
  parameters: { docs: { story: { height: "520px" } } },
};
WithAccordion.storyName = "Accordion 예시";
