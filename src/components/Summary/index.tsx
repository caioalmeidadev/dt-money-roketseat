import { Container } from "./styles";

import IncomingImg from '../../assets/income.svg'
import OutComingImg from '../../assets/outcome.svg'
import TotalImg from '../../assets/total.svg'

export function Summary() {
    return (
       <Container>
           <div>
                <header>
                    <p>Entradas</p>
                    <img src={IncomingImg} alt="income" />
                </header>
                <strong>R$ 1000,00</strong>
            </div>
           <div>
                <header>
                    <p>Saidas</p>
                    <img src={OutComingImg} alt="outcome" />
                </header>
                <strong>R$ 500,00</strong>
            </div>
           <div className="highligth-background">
                <header>
                    <p>Total</p>
                    <img src={TotalImg} alt="total" />
                </header>
                <strong>R$ 500,00</strong>
            </div>
       </Container>
    );
}