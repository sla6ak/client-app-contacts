import styled from "@emotion/styled";

export const Header = styled.header`
    background-color: ${(props) => props.theme.colors.primary.main};
    display: flex;
    min-height: 50px;
    align-items: center;
`;

export const BoxHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const Footer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: ${(props) => props.theme.colors.primary.main};
    min-height: 44px;
`;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    flex-grow: 2;
    width: 100%;
    background-color: rgb(255, 255, 255);
`;
