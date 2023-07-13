import type { Meta, StoryObj } from '@storybook/react';
import { TestFeatureButton } from './TestFeatureButton';

const meta: Meta<typeof TestFeatureButton> = {
  title: 'Example/TestFeatureButton',
  component: TestFeatureButton,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof TestFeatureButton>;

export const TestFeatureButtonDefault: Story = {

};
