import React from 'react';
import theme from "../utils/theme";
import {H1, H2, Body} from "../utils/fonts";
import {FlexColumn, FlexRow} from "../utils/containers";

const PatientsList = () => {
    return (
        <FlexColumn width='100%' gap='36px'>
            <H1 as='h1' color={theme.colors.brand}>
                Ankiety pacjentów
            </H1>
        </FlexColumn>
    );
};

export default PatientsList;