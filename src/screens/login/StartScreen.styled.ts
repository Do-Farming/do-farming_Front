import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const styles = StyleSheet.create({
  container: {
    // display: 'flex',
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
});

export const MainTitle = styled.Text`
  align-items: center;
  font-size: 24px;
  font-weight: bold;
`;
