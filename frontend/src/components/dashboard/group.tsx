import { Container } from '../../styles/styles_group'
import { Summary } from "./summary";
import { TransactionsTable } from './TransactionTable';

export function Unit(){
    return(
        <Container>
            <Summary />      
            <TransactionsTable /> 
        </Container>
    )
}