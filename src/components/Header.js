import React from 'react';
import PropType from 'prop-types';
import styled from '@emotion/styled'

const ContenedorHeader = styled.header`
    background-color: #26C6DA;
    padding : 10px;
    font-weight : bold;
    color: #FFFFFF;
`;


const TextHeader = styled.h1`
    font-size: 2rem;
    margin: 0px;
    font-family: 'Slabo 27px', serif;
    text-align: center;
`;
const Header = ({titulo}) => {
    return (  
        <ContenedorHeader>            
            <TextHeader>
                {titulo}
            </TextHeader>        
        </ContenedorHeader>

    );
}
 
Header.propType = {
    titulo : PropType.string.isRequired

}
export default Header;