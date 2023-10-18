import {
    Container, MenuItem, ButtonIcon,
} from "./styled";
import NotificationIcon from '../../asset/sino_382bed4de97b4204abbd5eb05c8795d9.png';
import ShortsIcon from '../../asset/shorts.png';
import BibliotecaIcon from '../../asset/biblioteca.png';
import { useNavigate } from "react-router-dom";
import { ButtonContainer } from "../header/styled";


const items = [{name: 'Início', link: '/'}, {name:'Biblioteca', link: '/libary'}, {name: 'Hitórico', link: '/history'}]

interface IProps{
    openMenu: boolean;
}

function Menu( { openMenu } :IProps){

    const navigate =useNavigate();

    return (
        <Container openMenu= { openMenu }>
            {items.map((item) => (

                <MenuItem openMenu={openMenu} onClick={() => navigate(item.link)}>
                    <ButtonContainer>
                     <ButtonIcon alt="" src={NotificationIcon}/>

                    </ButtonContainer>
                                  
                        
                
                    
            
                     
                     <span>{item.name}</span>
                     
                </MenuItem>

            ))}

        </Container>
    )
}

export default Menu;