import Button from '@newline-ds/react/src/Button';
import { ButtonProps } from '@newline-ds/react/src/Button';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Newline/Button',
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
  children: 'Demo Button',
  disabled: false,
  loading: false,
};
