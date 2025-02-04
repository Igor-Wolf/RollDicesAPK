import styled from 'styled-components/native';


export const Container = styled.View`
  display:flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 10px;
  
`;
export const ContainerTitle = styled.View`
  display:flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: green;
  
`;
export const ContainerExemples = styled.View`
  display:flex;
  flex: 1;
  padding: 10px;
  background-color: wheat;
  width: 100%;
  border-radius: 5px;
  margin-top: 20px;
  
`;


export const ScrollContainer = styled.ScrollView`
  background-color: black;
    flex-grow: 1;
    
`;


export const Safe = styled.SafeAreaView`

  display:flex;
  flex:1;
  background-color: blue;
  justify-content: center;

`



export const TitleContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;  
  padding: 20px;
  border-radius: 10px;
  
  
`;

export const FontTitle = styled.Text`

  font-size:30px;
  color: white;
  

`

export const ImputNumber = styled.TextInput`
  width:100%;
  background-color: gray;
  margin-bottom: 10px;
  border-radius: 5px;
  font-size: 20px;


`
export const TextResult = styled.Text`

  
  margin: 5px;
  border-radius: 5px;
  font-size: 20px;
  color:white;

`
export const TextExamples = styled.Text`

  
  margin: 5px;
  border-radius: 5px;
  font-size: 20px;
  color:black;

`
export const ButtonResult = styled.TouchableOpacity`

  
  margin: 5px;
  border-radius: 5px;
  font-size: 20px;
  background-color: green;
  elevation: 10;
  max-width:150px;
  

`


