import styled from "styled-components";
import { fonts } from "src/helpers";

const { poppinsSemiBold, poppinsRegular } = fonts

export const Heading = styled.section`
    font-family: ${poppinsSemiBold};
    font-size: ${({ fontSize }) => fontSize ? fontSize : "46px"};
    padding-block: ${({ paddingBlock }) => paddingBlock ? paddingBlock : '20px'};
    color: #1F1F1F;
    

`

export const Heading2= styled.section`
    font-family: ${poppinsSemiBold};
    font-size: ${({ fontSize }) => fontSize ? fontSize : "40px"};
    color: #1F1F1F;
    
    span{
        font-family: 'Poppins';
        font-size: 21px;
        color: #454545;
    }
`

