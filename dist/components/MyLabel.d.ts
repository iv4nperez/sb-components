/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
     * El campo label es el texto
     */
    label: string;
    /**
     * El size es el tama;o a mostrar
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * El allCaps en true hace el texto en mayusulas
     */
    allCaps: boolean;
    /**
     * El allCaps en true hace el texto en mayusulas
     */
    color: 'primary' | 'secondary' | 'tertiary';
    /**
    * fONT COLOR
    */
    fontColor?: string;
    /**
    * BackgroundColor
    */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, backgroundColor }: MyLabelProps) => JSX.Element;
export default MyLabel;
