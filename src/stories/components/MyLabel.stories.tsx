import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel";

export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {
        size:{ control: 'select' },
        color:{ control: 'select' },
        fontColor: { control: 'color' },
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof MyLabel>

const Template: ComponentStory<typeof MyLabel> = ( args ) => <MyLabel { ...args } />


export const Basic = Template.bind({});
Basic.args = {
    label: 'Basic Label',
    size: 'normal',
    allCaps: false
}

export const AllCaps = Template.bind({});
AllCaps.args = {
    label: 'AllCaps Label',
    size: 'normal',
    allCaps: true
}

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Secondary Label',
    size: 'normal',
    color: 'secondary'
}

export const Tertiary = Template.bind({});
Tertiary.args = {
    label: 'Tertiary Label',
    size: 'normal',
    color: 'tertiary'
}

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
    label: 'CustomFontColor',
    size: 'h1',
    fontColor: '#000a9047'
}

export const CustomBackgroundColor = Template.bind({});
CustomBackgroundColor.args = {
    label: 'CustomFontColor',
    size: 'h1',
    fontColor: '#16028846',
    backgroundColor: '#527e3546'
}