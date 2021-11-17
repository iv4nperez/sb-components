import { ReactElement } from 'react'
import { ButtonStyled } from './StyledButton'

export interface buttonProps {
    // height: string,
    // width: string,
    bold: boolean,
    children: ReactElement | ReactElement[],
    className: string,
    disabled: boolean,
    id?: string,
    onClick?: () => void,
    type: 'button' | 'submit' | 'reset',
    size: 'small' | 'normal' | 'large',
    backgroundColor?: string
}


export const EggButton = ( { 
    children,
    type ="button",
    disabled = false, 
    className ="",
    bold = false,
    ...rest

}:buttonProps) => {
    return (
        <ButtonStyled  
            disabled={ disabled } 
            type={ type } 
            className={ className } 
            { ...rest }
            style={  bold ? { fontWeight: 'bold' } : { fontWeight: 'normal' } }
        >
            { children }
        </ButtonStyled>
    )
}
