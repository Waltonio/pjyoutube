import {
    ChannelImage, Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer
} from "./styled";

function VideoComponent(){


    return (
        <Container>
            <ImageBanner src="https://cdns-images.dzcdn.net/images/artist/7f3c0956357c326b2db2cf436f1dc8c5/500x500.jpg" />
            <TitleContainer>
                <ChannelImage>
                    WH
                </ChannelImage>
                <TextContainer>
                    <Title> Bruno Mars - Agradecimento ao Brasil </Title>
                    <TextCard>Bruno Mars</TextCard>
                    <TextCard>52 mil visualizações há 3 semanas</TextCard>
                    
                </TextContainer>
            </TitleContainer>
        </Container>

    )
}

export default VideoComponent;