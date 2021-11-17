import { ComponentMeta, ComponentStory } from "@storybook/react";
import { EggButton } from "../../../components/EggButton/EggButton";



export default {
    title: 'UI/EggButton',
    component: EggButton,
    // argTypes: {
    //     size:{ control: 'select' },
    //     color:{ control: 'select' },
    //     fontColor: { control: 'color' },
    //     backgroundColor: { control: 'color' }
    // }
} as ComponentMeta<typeof EggButton>

const Template: ComponentStory<typeof EggButton> = ( args ) => <EggButton { ...args } />


export const NormalButton = Template.bind({});
NormalButton.args = {
    children: <span>Test the button</span>,
    bold: true,
    size: 'small',
    onClick: () => {
        console.log('Hola mundo')
    }
}

