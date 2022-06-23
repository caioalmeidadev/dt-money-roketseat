import {  useTransactions } from "../../hooks/useTransactions";

import IncomingImg from '../../assets/income.svg'
import OutComingImg from '../../assets/outcome.svg'
import TotalImg from '../../assets/total.svg'

import { Container } from "./styles";

export function Summary() {
    const { transactions } = useTransactions();

    const summary = transactions.reduce((acc,transaction) => {
        if(transaction.type === 'deposit'){
            acc.deposit += transaction.amount;
            acc.total += transaction.amount;
        } else {
            acc.withdraw += transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc;
    },{
        deposit:0,
        withdraw:0,
        total:0
    });

    return (
       <Container>
           <div>
                <header>
                    <p>Entradas</p>
                    <img src={IncomingImg} alt="income" />
                </header>
                <strong>{summary.deposit}</strong>
            </div>
           <div>
                <header>
                    <p>Saidas</p>
                    <img src={OutComingImg} alt="outcome" />
                </header>
                <strong>{summary.withdraw}</strong>
            </div>
           <div className="highligth-background">
                <header>
                    <p>Total</p>
                    <img src={TotalImg} alt="total" />
                </header>
                <strong>{summary.total}</strong>
            </div>
       </Container>
    );
}