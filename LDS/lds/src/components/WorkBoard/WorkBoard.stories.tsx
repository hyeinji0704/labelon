import type { Meta, StoryObj } from '@storybook/react';
import { WorkBoard } from './WorkBoard';
import { TagField } from '../TagField/TagField';

const meta: Meta<typeof WorkBoard> = {
  title: 'Components/WorkBoard',
  component: WorkBoard,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    mode: {
      control: 'radio',
      options: ['image', 'fields'],
    },
    textValues: {
      control: 'object', // ✅ 배열/객체 컨트롤
    },
  },
};

export default meta;
type Story = StoryObj<typeof WorkBoard>;

export const Playground: Story = {
  args: {
    title: '작업데이터',
    time: '40분 51초',
    approvedCount: 30,
    totalCount: 100,
    mode: 'fields',
    textValues: {
      serial: 'ABC-12345',
      name: '스마트폰',
      target: '노트북',
      country: '대한민국',
      status: '승인완료',
      note: 'A design system for enterprise-level products. Create an efficient and enjoyable work experience. Create an efficient and enjoyable work experience.',
    },
  },
  render: (args) => (
    <WorkBoard
      title={args.title}
      time={args.time}
      approvedCount={args.approvedCount}
      totalCount={args.totalCount}
      mode={args.mode} // ✅ 추가
    >
      {args.mode === 'image' ? (
        <img src="/images/sample-image.png" alt="샘플 이미지" />
      ) : (
        <>
          <TagField
            tag={{ label: '인증/등록번호' }}
            textField={{ variant: 'default', value: args.textValues.serial }}
          />
          <TagField
            tag={{ label: '기자재 명칭' }}
            textField={{ variant: 'default', value: args.textValues.name }}
          />
          <TagField
            tag={{ label: '개정 대상기자재' }}
            textField={{ variant: 'default', value: args.textValues.target }}
          />
          <TagField
            tag={{ label: '제조국가' }}
            textField={{ variant: 'default', value: args.textValues.country }}
          />
          <TagField
            tag={{ label: '개정 대상기자재' }}
            textField={{ variant: 'default', value: args.textValues.target }}
          />
          <TagField
            tag={{ label: '제조국가' }}
            textField={{ variant: 'default', value: args.textValues.country }}
          />
          <TagField
            tag={{ label: '인증상태' }}
            textField={{ variant: 'default', value: args.textValues.status }}
          />
          <TagField
            tag={{ label: '인증상태' }}
            textField={{ variant: 'default', value: args.textValues.status }}
          />
          <TagField
            tag={{ label: '인증상태' }}
            textField={{ variant: 'default', value: args.textValues.status }}
          />
          <TagField
            tag={{ label: '비고' }}
            textField={{ variant: 'default', value: args.textValues.note }}
          />
        </>
      )}
    </WorkBoard>
  ),
};
