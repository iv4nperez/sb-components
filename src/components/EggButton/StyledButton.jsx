import styled from "styled-components";


const sizeButton = [
    {
        size: 'small',
        padding: '8px 20px'
    },
    {
        size: 'normal',
        padding: '12px 20px'
    },
    {
        size: 'large',
        padding: '16px 20px'
    }
];


export const ButtonStyled = styled.button`
    justify-content: center;
    align-items: center;
    padding: ${ (props) => {
        const value = sizeButton.find(item => item.size === props.size )
        return (value?.padding || sizeButton[1].padding)
    }};
    background-color: white;
    border: 2px solid #000;
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.05);
    /* width: ${ (props) => props.width ? props.width : '100%' };
    height: ${ ( props ) => props.height ? props.height : '50px' }; */
    border-radius: 5px;
    position: relative;
    font-weight: bold;
    &:hover {
        cursor: pointer;
        background-color: #ffcf00;
        border: 2px solid #ffcf00;
    }
    &:disabled {
        cursor: not-allowed;
        box-shadow: none;
        border: 2px solid #b7b7ce;
    }
`