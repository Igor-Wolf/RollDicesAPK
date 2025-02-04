import React, {useState} from 'react';
import {Alert} from 'react-native';

import {
  ButtonResult,
  Container,
  ContainerExemples,
  ContainerTitle,
  FontTitle,
  ImputNumber,
  Safe,
  ScrollContainer,
  TextExamples,
  TextResult,
  TitleContainer,
} from './styles';
import {rollf} from './android/app/src/utils/rollf';

function App() {
  const [parc1, setParc1] = useState(''); // Começando com uma string vazia
  const [rolling, setRolling] = useState('');

  const rolar = () => {
    let p1 = parc1;
    let resultado = rollf(p1);

    // Verificando se os valores são números válidos
    if (!resultado) {
      Alert.alert('Erro', 'Por favor, números válidos.');
      setRolling('Erro! Insira números válidos.');
    } else {
      setRolling(resultado[0].toString()); // Atualizando o estado com o resultado como string
    }
  };

  return (
    <Safe>
      <ScrollContainer contentInsetAdjustmentBehavior="automatic">
        <ContainerTitle>
          <FontTitle>Rolldices</FontTitle>
        </ContainerTitle>
        <Container>
          <TitleContainer>
            <FontTitle>Bem vindo ao Rolldices</FontTitle>
          </TitleContainer>

          <ImputNumber
            value={parc1}
            onChangeText={setParc1}
            keyboardType="default"
            placeholder="Digite a rolagem"
          />

          <TextResult>{rolling}</TextResult>
          <ButtonResult onPress={rolar}>
            <TextResult>Resultado</TextResult>
          </ButtonResult>
          <ContainerExemples>
            <TextExamples>Exemplos de rolagem:</TextExamples>
            <TextExamples>1d20 ...</TextExamples>
            <TextExamples>2d6 + 3...</TextExamples>
            <TextExamples>1d10 + 1d20...</TextExamples>
            <TextExamples>10 + 5...</TextExamples>
            <TextExamples>1d20 - 5...</TextExamples>
            <TextExamples>1d100 - 1d20...</TextExamples>
          </ContainerExemples>
        </Container>
      </ScrollContainer>
    </Safe>
  );
}

export default App;
