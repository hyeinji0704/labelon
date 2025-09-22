import * as a11yAddonAnnotations from '@storybook/addon-a11y/preview';
import { setProjectAnnotations } from '@storybook/react';
import * as projectAnnotations from './preview';

// 스토리북 a11y + 프로젝트 프리뷰 설정을 Vitest 환경에도 적용
setProjectAnnotations([a11yAddonAnnotations, projectAnnotations]);
