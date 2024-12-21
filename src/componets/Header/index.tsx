import { useState } from "react";
import { styled } from "styled-components";
import { FaBars } from "react-icons/fa";

const HeaderComponent = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Header>
            <Nav>
                <ChangeTableButton onClick={toggleMenu}>
                    Gerar com PHA
                </ChangeTableButton>
                <Hamburger onClick={toggleMenu}>
                    <FaBars />
                </Hamburger>
                <NavList isOpen={isOpen}>
                    <NavItem>
                        <NavLink href="#">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Sobre</NavLink>
                    </NavItem>
                </NavList>
            </Nav>
        </Header>
    );
};

const Header = styled.header`
    background:rgb(130, 183, 235);
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
`;

const ChangeTableButton = styled.button`
    height: 3rem;
    width: 7rem;
    cursor: pointer;
`;

const Hamburger = styled.div`
    display: none;
    cursor: pointer;

    @media (max-width: 768px) {
        display: block;
    }
`;

const NavList = styled.ul<{ isOpen: boolean }>`
    display: flex;
    list-style: none;

    @media (max-width: 768px) {
        display: ${({ isOpen }) => (isOpen ? "block" : "none")};
        position: absolute;
        top: 4rem;
        right: 1rem;
        background: white;
        border: 1px solid #ccc;
        padding: 1rem;
    }
`;

const NavItem = styled.li`
    margin-left: 1rem;

    @media (max-width: 768px) {
        margin: 0.5rem 0;
    }
`;

const NavLink = styled.a`
    color: #333;
    text-decoration: none;
    font-size: 1.2rem;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

export default HeaderComponent;
