import React from 'react';
import theme from "../utils/theme";
import {H1, H2, Body, Medium} from "../utils/fonts";
import {FlexColumn, FlexRow} from "../utils/containers";

const PatientForm = (props) => {
    return (
        <FlexColumn width='100%' gap='36px'>
            <H1 as='h1' color={theme.colors.brand}>
                Ankieta pacjenta
            </H1>
            <Medium>
                Ankieta przesłana, dziękujemy za jej wypełnienie
            </Medium>
            {/* <FlexColumn width='' alignmentX='flex-start'>
                {Object.entries(props.data).map((elem, index) => {
                    if (elem[0] !== 'result') {
                        return (
                            <FlexRow key={index}>
                                <Medium>
                                    {elem[0]}:
                                </Medium>
                                <Body>
                                    {elem[1]}
                                </Body>
                            </FlexRow>
                        )
                    }
                })}
            </FlexColumn> */}
        </FlexColumn>
    );
};

export default PatientForm;