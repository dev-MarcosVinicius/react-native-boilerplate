import styled from 'styled-components';
import { AntDesign } from "@expo/vector-icons";

export const IconGoogle = styled(AntDesign)`
    font-size: 20px;
    color: ${({ theme }) => theme.colors.shape};
`;