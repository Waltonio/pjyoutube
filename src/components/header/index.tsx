import { 
    Container, 
    LogoContainer, 
    ButtonContainer, 
    ButtonIcon, 
    SearchContainer,
    SearchInputContainer,
    SearchInput,
    SearchButton,
    HeaderButton,

 } from "./styled";

import HamburgueIcon from '../../asset/hamburger_2e5c6c0eec5a49acb97201c3f1e16542.png';
import Logo from '../../asset/YouTube-Logo_2cad60d8881f48c099a2043ad35e0b4b.png';
import SearchIcon from '../../asset/search_117b78df834249fdb899e63f5f5a8aac.png';
import MicIcon from     '../../asset/microfone-gravador_5aec03c3660f4d97b7d99219e43f0185.png';
import VideoIcon from '../../asset/video_1.png';
import NotificationIcon from '../../asset/sino_382bed4de97b4204abbd5eb05c8795d9.png';

interface IProps{
    openMenu: boolean,
    setOpenMenu: (openMenu: boolean) => void
}

function Header({openMenu, setOpenMenu}: IProps) {
    return (
        <Container>
            <LogoContainer>
                <ButtonContainer onClick={() => setOpenMenu(!openMenu)}>
                    <ButtonIcon alt="" src={HamburgueIcon} />
                </ButtonContainer>
                <img 
                    style={{cursor: 'pointer', width: '100px'}}
                    alt=''
                    src={Logo}
                />
            </LogoContainer>

            <SearchContainer>
                <SearchInputContainer>
                    <SearchInput placeholder="Pesquisar" />
                </SearchInputContainer>
                <SearchButton>
                    <ButtonIcon alt="" src={SearchIcon} />
                </SearchButton>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="" src={MicIcon} />
                </ButtonContainer>
            </SearchContainer>

            <HeaderButton>
                 <ButtonContainer>
                    <ButtonIcon alt="" src={VideoIcon} />
                 </ButtonContainer>
                 <ButtonContainer>
                    <ButtonIcon alt="" src={NotificationIcon} />
                 </ButtonContainer>
                 <ButtonContainer>
                    C
                 </ButtonContainer>
            </HeaderButton>


        </Container>
    )
}

export default Header;