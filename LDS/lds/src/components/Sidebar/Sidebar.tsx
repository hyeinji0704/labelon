import React from 'react';
import { FormSection } from '../FormSection/FormSection';
import { FormField } from '../FormField/FormField';
import { Select } from '../Select/Select';
import { Accordion } from '../Accordion/Accordion';
import { AccordionItem } from '../Accordion/AccordionItem';
import { TextField } from '../TextField/TextField';
import { TagList } from '../Tag/TagList';
import { Button } from '../Button/Button';
import './Sidebar.scss';

export const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      {/* 상단 탭 */}
      <div className="sidebar__header">
        <div className="sidebar__title-group">
            <h2 className="sidebar__title">작업 현황</h2>
            <Button label="작업가이드" variant="secondary" size="sm" />
        </div>
        <button className="sidebar__close"><img src="/images/icons/icon-close.svg"></img></button>
      </div>

      <div className="sidebar__body">
        {/* 데이터 타입 */}
        <FormSection title="데이터 타입" className="form-section--with-border">
          <FormField
            label="유형"
            options={[
              { value: 'basic', label: '기본형' },
              { value: 'advanced', label: '고급형' },
            ]}
          />
        </FormSection>

        {/* 질문 세트 */}
        <FormSection title="질문 세트">
          <Accordion>
            <AccordionItem title="세트 01" defaultOpen>
              <TextField label="질문" placeholder="내용을 입력하세요." height={60} />
              <TextField label="답변" placeholder="내용을 입력하세요." height={120} />
              <TagList
                items={[
                  {
                    label: '법령근거',
                    contents: [
                      '제58조 2항',
                      '시행령 제77조 2항',
                      '방송통신기자재 적합성 평가',
                    ],
                    variant: 'semantic',
                  },
                ]}
              />

            </AccordionItem>

            <AccordionItem title="세트 02">
              <TextField label="질문" placeholder="내용을 입력하세요." height={60} />
              <TextField label="답변" placeholder="내용을 입력하세요." height={120} />
            </AccordionItem>

            <AccordionItem title="세트 03">
              <TextField label="질문" placeholder="내용을 입력하세요." height={60} />
              <TextField label="답변" placeholder="내용을 입력하세요." height={120} />
            </AccordionItem>
          </Accordion>
        </FormSection>

        
      </div>

      {/* 하단 버튼 */}
      <div className="sidebar__footer">
        {/* 지문 작업 가능여부 */}
        <FormSection title="지문 작업 가능여부">
          <FormField
            label="가능여부"
            options={[
              { value: 'available', label: '가능' },
              { value: 'unavailable', label: '불가능' },
            ]}
          />
        </FormSection>
        <Button label="제출하기" variant="primary" size="lg" />
      </div>
    </aside>
  );
};
