import {Container, ButtonTypeStyleProps, Title} from './styles';

import { TouchableOpacityProps } from 'react-native';

 type Props = TouchableOpacityProps & {
    title: string;
    type?: ButtonTypeStyleProps 
}

export function Button({type='PRIMARY',title, ...rest}: Props){
    return (
        <Container
        type={type}
         {...rest}
         >

            <Title>
                {title}
            </Title>

        </Container>
    )
}