import styled from 'styled-components';

const FooterComponent = () => {
    return (
        <Footer>
            <FooterText>By InfoTech</FooterText>
            <SocialMediaIcons />
        </Footer>
    );
}

const Footer = styled.footer`
    background:rgb(130, 183, 235);
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const FooterText = styled.p`
    font-size: 14pt;
    color: #333;
`;

const SocialMediaIcons = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
`;

export default FooterComponent;