import logo from '../../assets/logo.svg'
import { Contatiner,Content } from './styles';


export function Header() {
 return (
     <Contatiner>
         <Content>
         <img src={logo} alt="dt money" />
         <button type="button">
             Nova Transação
         </button>
         </Content>
     </Contatiner>
 );
}