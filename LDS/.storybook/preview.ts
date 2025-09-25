import type { Preview, StoryContext, StoryFn } from "@storybook/react-vite";
import "@styles/globals.scss";

// 전역 테마 토글 설정
export const globalTypes = {
	theme: {
		name: "Theme",
		description: "Light/Dark Theme",
		defaultValue: "light",
		toolbar: {
			icon: "mirror",
			items: [
				{ value: "light", title: "Light" },
				{ value: "dark", title: "Dark" },
			],
			dynamicTitle: true,
		},
	},
};

// Decorators
export const decorators = [
  (Story: StoryFn, context: StoryContext) => {
    const theme = context.globals.theme || "light";
    document.documentElement.setAttribute("data-theme", theme);
    return Story(context.args, context);
  },
];


const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},

		a11y: {
			// 'todo' - show a11y violations in the test UI only
			// 'error' - fail CI on a11y violations
			// 'off' - skip a11y checks entirely
			test: "todo",
		},
		layout: "centered",
	},
};

export default preview;
