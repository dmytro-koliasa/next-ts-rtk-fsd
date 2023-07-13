import type { Meta, StoryObj } from '@storybook/react';
import { MainView } from './MainView';

const meta: Meta<typeof MainView> = {
  title: 'Example/MainView',
  component: MainView,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof MainView>;

export const MainViewDefault: Story = {

};
