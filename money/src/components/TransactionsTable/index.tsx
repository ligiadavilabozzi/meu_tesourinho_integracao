import {useEffect} from 'react'
import { api } from '../../services/api';
import { Container } from "./styles";

export function TransactionsTable() {
    useEffect(() => {
    api.get('transactions')
    .then(response => console.log(response.data))
    },[]);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                    <td>Mesada</td>
                        <td className="deposit">R$100,00</td>
                        <td>Entradas</td>
                        <td>10/06/2021</td>
                    </tr>
                    <tr>
                        <td>Chiclete</td>
                        <td className="withdraw">-R$1,00</td>
                        <td>Guloseimas</td>
                        <td>10/06/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}