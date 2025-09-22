import type { Meta, StoryObj } from '@storybook/react';
import { FormSection } from './FormSection';
import { FormField } from '../FormField/FormField';
import { AccordionItem } from '../Accordion/AccordionItem';
import { TextField } from '../TextField/TextField';
import { TagList } from '../Tag/TagList';

const meta: Meta<typeof FormSection> = {
  title: 'Components/FormSection',
  component: FormSection,
};
export default meta;

type Story = StoryObj<typeof FormSection>;

export const Example: Story = {
  render: () => (
    <FormSection title="데이터 타입">
      <FormField
        label="유형"
        options={[
          { value: 'basic', label: '기본형' },
          { value: 'advanced', label: '고급형' },
        ]}
      />
    </FormSection>
  ),
};

export const WithAccordionItems: Story = {
  render: () => (
    <FormSection title="질문 세트">
      <AccordionItem title="세트 01" defaultOpen>
        <FormSection title="질문">
          <TextField placeholder="내용을 입력하세요." />
        </FormSection>

        <FormSection title="답변">
          <TextField placeholder="내용을 입력하세요." rows={3} />
        </FormSection>

        <FormSection title="관련 근거">
          <TagList
            items={[
              { label: '법령근거 제58조 2항', variant: 'semantic' },
              { label: '전파법 시행령 제77조 2항', variant: 'semantic' },
              { label: '방송통신기자재 적합성 평가', variant: 'semantic' },
            ]}
          />
        </FormSection>
      </AccordionItem>

      <AccordionItem title="세트 02">
        <FormSection title="질문">
          <TextField placeholder="세트 02 질문 입력" />
        </FormSection>
      </AccordionItem>
    </FormSection>
  ),
};
