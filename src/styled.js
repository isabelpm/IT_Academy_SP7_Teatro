import styled, { createGlobalStyle } from 'styled-components';
import imagenFondo from '../src/assets/img/fondo.png'

// Style-components: Titular
export const Titular = styled.div`
    font-size: 2.5rem;
    font-weight:300;
    margin-left:3rem;
    text-align:left;
    color: #783b66;
`;

// Style-components: Subtítulo
export const Subtitulo = styled.div`
    font-size: 2rem;
    font-weight:600;
    text-align:left;
    margin-left:3rem;
    color: #783b66;
`;

// Style-components: Info
export const Info = styled.div`
    font-size: 1rem;
    font-weight:300;
    font-style:italic;
    margin-left:3rem;
     margin-bottom:6rem;
    text-align:left;
    color: #783b66;
    
`;

// Style - components: Caja Texto
export const Box2 = styled.div`
    width:40rem;
    height:12rem;
    justify-content:flex-start;
    padding:2rem;
    margin-bottom:2rem;
    background-color:white;
    box-shadow: 5px 5px 30px  #783b66;
        
`;

// Style - components: Caja- Botones 
export const Row = styled.div`
    display: grid;
    grid-template-columns: 10% 10% auto;
    margin-left:3rem;
    text-align:center;
    justify-content:left;
    
`;

// Style - components: Botón
export const Btn = styled.button`
    padding: 5px;
    margin:3%;
    border-radius:5px;
    border: 2px solid  white;
    box-shadow: 5px 8px 30px  #783b66;
    font-size: 2rem;
    color: white;
    background-color:lightcoral;  
`;


// Style - components: Linia-Parágrafo
export const P = styled.p`
    width:40rem;
    font-size: 1.6rem;
    text-align:left;
    color:lightcoral;
`;

export const GlobalStyle = createGlobalStyle`
body{
    margin:0;
    padding:0;
    background-color:lightcoral;
    background-image: url(${imagenFondo});
    background-position: right 0px top -100px;
    background-repeat: no-repeat;
    font-family: 'Inconsolata', monospace;
    
}

`;