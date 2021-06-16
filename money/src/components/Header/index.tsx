
import logoImg from '../../assets/logo.png'

import { Container, Content } from './styles'

interface HeaderPropos{
    onOpenNewTransactionModal: () => void
}
export function Header({onOpenNewTransactionModal}: HeaderPropos) {
    return (
        <Container>
            <Content>
            <img src={logoImg} alt="app money" width="150" height="62"/>
                <button type="button" onClick={onOpenNewTransactionModal}>
                   Minha Carteirinha
                </button>


                </Content >
        </Container >
    )
}