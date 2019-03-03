import React from 'react';
import {
  Text
} from 'react-native';

const en = {
  peso: 'Weight',

  altura: 'Height',

  imc: 'BMI',

  bajopesosevero:
  <Text>
    Severe
    {'\n'}
    Underweight
  </Text>,

  bajopesomoderado:
  <Text>
    Moderate
    {'\n'}
    Underweight
  </Text>,

  bajopesoleve:
  <Text>
    Light
    {'\n'}
    Underweight
  </Text>,

  pesonormal:
  <Text>
    Healthy
    {'\n'}
    & Ideal
    {'\n'}
    Weight
    {' '}
  </Text>,

  sobrepeso: <Text>Overweight</Text>,

  obesidadleve:
  <Text>
    Light
    {'\n'}
    Obesity
    {'\n'}
    [Type I]
  </Text>,

  obesidadmoderada:
  <Text>
    Moderate
    {'\n'}
    Obesity
    {'\n'}
    [Type II]
  </Text>,

  obesidadmorbida:
  <Text>
    Morbid
    {'\n'}
    Obesity
    {'\n'}
    [Type III]
  </Text>
};


const es = {
  peso: 'Peso',

  altura: 'Altura',

  imc: 'IMC',

  bajopesosevero:
  <Text>
    Bajo
    {'\n'}
    Peso
    {'\n'}
    Severo
  </Text>,

  bajopesomoderado:
  <Text>
    {' '}
    Bajo
    {'\n'}
    Peso
    {'\n'}
    Moderado
    {' '}
  </Text>,

  bajopesoleve:
  <Text>
    {' '}
    Bajo Peso
    {'\n'}
    Ligero
    {' '}
  </Text>,

  pesonormal:
  <Text>
    Peso
    {'\n'}
    Saludable
    {'\n'}
    e Ideal
    {' '}
  </Text>,

  sobrepeso: <Text> Sobrepeso </Text>,

  obesidadleve:
  <Text>
    {' '}
    Obesidad
    {'\n'}
    Leve
    {'\n'}
    [Tipo I]
  </Text>,

  obesidadmoderada:
  <Text>
    {' '}
    Obesidad
    {'\n'}
    Moderada
    {'\n'}
    [Tipo II]
  </Text>,

  obesidadmorbida:
  <Text>
    {' '}
Obesidad
    {'\n'}
Morbida
    {'\n'}
[Tipo III]
  </Text>
};


const pt = {
  peso: 'Peso',

  altura: 'Altura',

  imc: 'IMC',

  bajopesosevero:
  <Text>
    Baixo
    {'\n'}
    Peso
    {'\n'}
    Severo
  </Text>,

  bajopesomoderado:
  <Text>
    {' '}
    Baixo
    {'\n'}
    Peso
    {'\n'}
    Moderado
    {' '}
  </Text>,

  bajopesoleve:
  <Text>
    {' '}
    Baixo Peso
    {'\n'}
    Leve
    {' '}
  </Text>,

  pesonormal:
  <Text>
    Peso
    {'\n'}
    Saudável
    {'\n'}
    e Ideal
    {' '}
  </Text>,

  sobrepeso:
  <Text>
    {' '}
    Excesso
    {'\n'}
    de peso
    {' '}
  </Text>,

  obesidadleve:
  <Text>
    {' '}
    Obesidade
    {'\n'}
    Leve
    {'\n'}
    [Tipo I]
  </Text>,

  obesidadmoderada:
  <Text>
    {' '}
    Obesidade
    {'\n'}
    Moderada
    {'\n'}
    [Tipo II]
  </Text>,

  obesidadmorbida:
  <Text>
    {' '}
    Obesidade
    {'\n'}
    Morbida
    {'\n'}
    [Tipo III]
  </Text>
};

export { en, es, pt };
