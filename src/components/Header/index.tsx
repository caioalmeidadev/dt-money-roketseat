import logo from '../../assets/logo.svg'
import { Contatiner,Content } from './styles';
interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}: HeaderProps) {


 return (
     <Contatiner>
         <Content>
         <img src={logo} alt="dt money" />
         <button type="button" onClick={onOpenNewTransactionModal}>
             Nova Transação
         </button>
         
         </Content>
     </Contatiner>
 );
}