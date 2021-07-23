import { Container, Content } from '../../styles/styles_HeaderDash'

interface HeaderPropos{
    onOpenNewTransactionModal: () => void
}
export function HeaderDash({onOpenNewTransactionModal}: HeaderPropos) {
    return (
        <Container>
            <Content>
                <button type="button" onClick={onOpenNewTransactionModal}>
                Minha Carteirinha
                </button>
                </Content >
        </Container >
    );
}