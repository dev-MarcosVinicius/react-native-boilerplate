import styled from 'styled-components';

export const GoogleButtonLogin = styled.TouchableOpacity`
    width: 15%;
    background-color: ${({ theme }) => theme.colors.success};
    border-radius: 5px;
    align-items: center;
    padding: 18px;
`;