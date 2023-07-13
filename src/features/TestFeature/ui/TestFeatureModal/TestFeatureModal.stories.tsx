import type { Meta, StoryObj } from '@storybook/react';
import { TestFeatureModal } from './TestFeatureModal';

const meta: Meta<typeof TestFeatureModal> = {
  title: 'Example/TestFeatureModal',
  component: TestFeatureModal,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof TestFeatureModal>;

export const TestFeatureModalDefault: Story = {

};
