import React from 'react';
import { Header } from '@/components/Header/Header';
import { WorkBoard } from '@/components/WorkBoard/WorkBoard';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { TagField } from '@/components/TagField/TagField';
import './MainPage.scss';

interface MainPageProps {
  workboardMode?: 'image' | 'fields';
  darkMode?: boolean;
  sidebarOpen?: boolean; // ✅ 열림/닫힘 상태
}

export const MainPage: React.FC<MainPageProps> = ({
  workboardMode = 'fields',
  darkMode = false,
  sidebarOpen = true,
}) => {
  return (
    <div className={`main-page ${darkMode ? 'is-dark' : ''}`}>
      <Header
        logo="/images/labelon_logo.svg"
        appName="Label ON"
        userName="천수희"
        darkMode={darkMode}
        onToggleMode={() => console.log('mode toggle')}
        icons={{
          moon: '/images/icons/moon.svg',
          sun: '/images/icons/sun.svg',
          user: {
            light: '/images/icons/icon-user.svg',
            dark: '/images/icons/icon-user-dark.svg',
          },
        }}
      />

      <div className="main-page__body">
        {/* 중앙 WorkBoard */}
        <main className="main-page__content">
          <WorkBoard
            title="작업데이터"
            time="40분 51초"
            approvedCount={30}
            totalCount={100}
            mode={workboardMode}
          >
            {workboardMode === 'image' ? (
              <img src="/images/sample-image.png" alt="샘플 이미지" />
            ) : (
              <>
                <TagField
                  tag={{ label: '인증/등록번호' }}
                  textField={{ variant: 'default', value: 'ABC-12345' }}
                />
                <TagField
                  tag={{ label: '기자재 명칭' }}
                  textField={{ variant: 'default', value: '스마트폰' }}
                />
                <TagField
                  tag={{ label: '제조국가' }}
                  textField={{ variant: 'default', value: '대한민국' }}
                />
                <TagField
                  tag={{ label: '인증/등록번호' }}
                  textField={{ variant: 'default', value: 'ABC-12345' }}
                />
                <TagField
                  tag={{ label: '기자재 명칭' }}
                  textField={{ variant: 'default', value: '스마트폰' }}
                />
                <TagField
                  tag={{ label: '제조국가' }}
                  textField={{ variant: 'default', value: '대한민국' }}
                />
                <TagField
                  tag={{ label: '인증/등록번호' }}
                  textField={{ variant: 'default', value: 'ABC-12345' }}
                />
                <TagField
                  tag={{ label: '기자재 명칭' }}
                  textField={{ variant: 'default', value: '스마트폰' }}
                />
                <TagField
                  tag={{ label: '제조국가' }}
                  textField={{ variant: 'default', value: '대한민국' }}
                />
                <TagField
                  tag={{ label: '제조국가' }}
                  textField={{
                    variant: 'default',
                    value:
                      '대한민국대한민국대한민국대한민국대한민국대한민국대한민국대한민국대한민국대한민국대한민국대한민국대한민국대한민국대한민국',
                  }}
                />
              </>
            )}
          </WorkBoard>
        </main>

        {/* ✅ Sidebar는 항상 존재, 열림/닫힘은 props로만 제어 */}
        <aside className="main-page__sidebar">
          <Sidebar isOpen={sidebarOpen} />
        </aside>
      </div>
    </div>
  );
};
