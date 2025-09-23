import '@styles/globals.scss';
import type { Preview } from '@storybook/react';

// 전역 테마 토글 설정
export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Light/Dark Theme',
    defaultValue: 'light',
    toolbar: {
      icon: 'mirror',
      items: [
        { value: 'light', title: 'Light' },
        { value: 'dark', title: 'Dark' },
      ],
      dynamicTitle: true,
    },
  },
};

// Decorators
export const decorators = [
  (Story: any, context: any) => {
    const theme = context.globals.theme || 'light';
    document.documentElement.setAttribute('data-theme', theme);
    return Story();
  },
];

// Preview 설정
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: { test: 'todo' },
    layout: 'centered',
  },
};

export default preview;
