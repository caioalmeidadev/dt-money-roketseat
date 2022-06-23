import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { useTransactions } from '../../hooks/useTransactions';

import CloseIMG from '../../assets/close.svg';
import IncomeIMG from '../../assets/income.svg';
import OutcomeIMG from '../../assets/outcome.svg';

import { Container , TransactionTypeContainer , RadioBox} from './styles';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void
}

export function NewTransactionModal({isOpen, onRequestClose}:NewTransactionModalProps) {
    const [type,setType] = useState('deposit');
    const [title,setTitle] = useState('');
    const [amount,setAmount] = useState(0);
    const [category,setCategory] = useState('');

    const {createTransaction} = useTransactions();

    async function handleCreateNewTransaction(event:FormEvent) {
        event.preventDefault();

       await createTransaction({
           title,
           amount,
           type,
           category
       })
       setTitle('');
       setType('deposit');
       setAmount(0);
       setCategory('');
       onRequestClose();
    }


    return (
        <Modal 
         isOpen={isOpen}
         onRequestClose={onRequestClose}
         overlayClassName="react-modal-overlay"
         className="react-modal-content"
         >
             <button type="button" onClick={onRequestClose} className="react-modal-close">
                 <img src={CloseIMG} alt="close" />
             </button>
             <Container onSubmit={handleCreateNewTransaction}>
             <h2>Cadastrar Transação</h2>

             <input placeholder="Titulo" value={title} onChange={event => setTitle(event.target.value)} />
             <input placeholder="Valor" type="number" value={amount} onChange={event => setAmount(Number(event.target.value))}/>

             <TransactionTypeContainer>
                <RadioBox 
                    type="button" 
                    onClick={() => { setType('deposit')}}
                    isActive={type === 'deposit'} 
                    activeColor="green"
                >
                    <img src={IncomeIMG} alt="entrada" />
                    <span>Entrada</span>
                </RadioBox>

                <RadioBox 
                    type="button" 
                    onClick={() => { setType('withdraw')}}
                    isActive={type === 'withdraw'}
                    activeColor="red"
                >
                    <img src={OutcomeIMG} alt="saida" />
                    <span>Saída</span>
                </RadioBox>

             </TransactionTypeContainer>

             <input placeholder="Categoria" value={category} onChange={event => setCategory(event.target.value)} />

             <button type="submit">
                 Cadastrar
             </button>

             </Container>
         </Modal>
    );
}