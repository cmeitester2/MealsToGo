import { SafeAreaView, StatusBar } from 'react-native';
import styled from "styled-components/native"; 

export const SafeArea = styled(SafeAreaView)`
    flex: 1;
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
//currentHeight is not defined for ios and SafeAreaView works directly for ios but not android