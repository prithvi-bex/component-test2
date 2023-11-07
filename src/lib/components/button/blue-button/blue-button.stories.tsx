import React from 'react'
import { BlueButton, BlueButtonProps } from '.'
import { Meta } from '@storybook/react'
import { StoryFn } from '@storybook/react'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof BlueButton> = {
  title: 'Atoms/BlueButton',
  component: BlueButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    label: { control: 'text' },
    onClick: { action: 'clicked' },
  },
}
export default meta

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof BlueButton> = (args: BlueButtonProps) => <BlueButton {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'Button',
  onClick: () => alert('clicking primary'),
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Button',
  isDisabled: true,
}
