import { Header } from '@components/Header';
import {Container, Content, Icon} from './styles';

import {UsersThree} from 'phosphor-react-native'
import { Highlight } from '@components/HighLights';
import { Button } from '@components/Button';
import { Input } from '@components/Input';

export function NewGroups(){
    return(
        <Container>
            <Header
            showBackButton
            />
        <Content>
            <Icon/>

            <Highlight
            title="Nova Turma"
            subtitle="Crie uma nova turma"
            />
            
            <Input
            placeholder="Nome da Turma"
            />

            <Button
            title="Criar"
            style={{marginTop:20}}
            />

          
        </Content>

        </Container>
    )
}