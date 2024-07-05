import { View } from 'react-native';

import {Container} from './styles';
import { Highlight } from '@components/HighLights';
import { Header } from '@components/Header';

export function Players(){
    return(
        <Container>
            <Header showBackButton/>
            <Highlight
                title="Nome da Turma"
                subtitle="Adicione a galera e adicione os times"
             />
            
        </Container>
    )
}