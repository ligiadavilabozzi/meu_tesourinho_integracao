import Modal from 'react-modal'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import closeImg from '../../assets/close.svg'
import {Container, TransactionTypeContainer, RadioBox} from '../NewTransactionModal/styles'
import {useState} from 'react'

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: ()=>void;
    }

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){
    const[type,setType]= useState('deposit');
    

    
    return(
        <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        >
            <Container>
                <button type="button" 
                onClick={onRequestClose} 
                className="react-modal-close">
                    <img src={closeImg} alt="Fechar Botão" />
                </button>

            <h2>Cadastrar Transação</h2>

            <input placeholder="Titulo"/>
            
            <input type="number" 
            placeholder="Valor"/>


            <TransactionTypeContainer>
            <RadioBox
            type="button"
            
            onClick={()=>{setType('deposit')}}
            >
            <img src={incomeImg} alt="Entrada"/>
            <span>Entrada</span>   
            </RadioBox>

            <RadioBox
            type="button"
            onClick={()=>{setType('withdraw')}}
            >
            <img src={outcomeImg} alt="Saída"/>
            <span>Saída</span>   
            </RadioBox>

            </TransactionTypeContainer>
            <input placeholder="Titulo"/>

            <input placeholder="Categoria"/>

            <button type="submit">
                Cadastrar
                </button>            
                </Container>
        </Modal>
    )
}