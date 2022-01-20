import styled from 'styled-components';

export const NavBar = styled.div`
    display: ${props => 'props.display' === 'none' ? 'none' : 'block'};
`;

export const NavButton = styled.button`
    display: ${props => 'props.display' === 'none' ? 'none' : 'block'};
    position: absolute;
    right: 30px;
    top: 32px;
`;