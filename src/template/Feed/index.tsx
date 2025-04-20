import ExampleComponent from 'components/ExampleComponent';
import React from 'react';
import * as S from './styles';

const ExampleTemplate = () => {
    return (
        <S.Container>
            <S.Title>Treinamento Introdutório de Front</S.Title>
            <S.Comment>Template criado em Abril de 2025</S.Comment>
            <S.Description>Template criado por Moizés Ávila</S.Description>
            <ExampleComponent width="128px" />
        </S.Container>
    );
};
export default ExampleTemplate;
