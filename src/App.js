import { useState } from 'react';

//Importamos el array textos
import paragraphs from './assets/data/textos';

//Importamos el Material UI (responsive)
import { Box, Grid } from '@material-ui/core'

//Importamos el styled-component
import { Btn, Row, P, Titular, Subtitulo, Info, Box2 } from './styled';


export default () => {
    //Declaramos la variable currentSentence (frase que se mostrará por pantalla)
    const [currentSetence, setCurrentSetence] = useState(0);

    //Función frase siguiente
    const nextSentence = () => {
        if (currentSetence != paragraphs.length - 1) {
            setCurrentSetence(currentSetence + 1);
        }
    }
    //Función frase anterior
    const prevSentence = () => {
        if (currentSetence != 0) {
            setCurrentSetence(currentSetence - 1);
        }
    }

    return (
        <div>
            <Grid container>
                <Grid item xs={12} sm={10}>
                    <Box>
                        <Titular>
                            <h1>APP TEATRO</h1>
                        </Titular>
                        <Subtitulo>
                            <p>∞ Romeo & Julieta ∞ </p>
                        </Subtitulo>
                        <Info>
                            <p>(Haz clic a los botones de abajo para ver el texto)</p>
                        </Info>
                    </Box>
                    <Box2>
                        <P> {paragraphs[currentSetence]} </P>
                    </Box2>
                </Grid>
            </Grid>
            < Grid container>
                <Grid item xs={12} sm={12} >
                    <Row>
                        <Btn onClick={prevSentence}>&#8592;</Btn>
                        <Btn onClick={nextSentence}>&#8594;</Btn>
                    </Row>
                </Grid>
            </Grid>

        </div>
    );
};
