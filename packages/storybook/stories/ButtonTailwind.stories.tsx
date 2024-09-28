import Button, { ButtonProps } from '@newline-ds/react/src/ButtonTailwind';
import { Meta, StoryFn } from '@storybook/react';
import '@newline-ds/react/lib/output.css';

export default {
  title: 'Newline/ButtonTailwind',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      toc: {
        disable: true, // 👈 Disables the table of contents
      },
    },
  },
} as Meta<typeof Button>;

const Template: StoryFn<ButtonProps> = (args: ButtonProps) => (
  <Button {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'Tailwind Demo',
  disabled: false,
  loading: false,
};
