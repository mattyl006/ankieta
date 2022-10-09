import React, { useEffect } from 'react';
import theme from "../utils/theme";
import {H1, H2, Body, Medium} from "../utils/fonts";
import {FlexColumn, FlexRow, Grid} from "../utils/containers";
import { useParams } from 'react-router-dom';
import { link_backend } from './link';
const FilledForm = () => {
    const formId = useParams().id
    const [form, setForm] = React.useState(null);

    const aa_xd = (liczba) => {
        debugger
        if (liczba >= 0.4){
            return (<p style={{color: 'red'}}>Stan zagrażający</p>)
        }
        if (liczba >= 0.2){
            return (<p style={{color: 'orange'}}>Możliwy stan zagrażający</p>)
        }
        if (liczba >= 0) {
            return (<p style={{color: 'green'}}>Stan niezagrażający</p>)
        }
        return null
    }

    const returnResult = () => {
        if (form) {

            return (
            <>
                {aa_xd(form.result[1][0][1])}
            </>
            )
        }
    }

    const inputValueFormat = (input) => {
        switch (input) {
            case 0:
                return 'Nie';
            case 1:
                return 'Tak';
            default:
              return input;
        }
    }

    const attributeFormat = (input) => {
        switch (input) {
            case 'userId':
                return 'Numer pacjenta: ';
            case 'name':
                return 'Imię: ';
            case 'surname':
              return 'Nazwisko: ';
            case 'age':
              return 'Wiek: ';
            case 'weight':
              return 'Waga: ';
            case 'height':
              return 'Wzrost: ';
            case 'isMale':
              return 'Płeć: '; 
            case 'hypertension':
                return 'Nadciśnienie: ';
            case 'heart_disease':
                return 'Choroba serca: ';
            case 'is_urban':
                return 'Mieszka w mieście: ';
            case 'ever_married':
                return 'Żonaty: ';
            case 'avg_glucose_level':
                return 'Poziom cukru we krwi: ';
            default:
              console.log(`Sorry, we are out of cases`);
        }
    }

    // Example POST method implementation:
    async function getData(url = '', body) {
        // Default options are marked with *
        const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(body) // body data type must match "Content-Type" header    
    });
        return response.json(); // parses JSON response into native JavaScript objects
    }
    async function getList() {
        let result = await getData(link_backend + '/list', {"uuid": formId});
        setForm(result)
    }

    useEffect(() => {
        getList()
    }, [])


    const render_xd = (elem) => {
        if (elem[0] == 'height' ) {
            return (
                <>
                    <Medium>
                        {attributeFormat(elem[0])}&nbsp;
                    </Medium>
                    <Body>
                        {elem[1].toString() + ' cm'}
                    </Body>
                </>
            )

        }
        if (elem[0] == 'weight' ) {
            return (
                <>
                    <Medium>
                        {attributeFormat(elem[0])}&nbsp;
                    </Medium>
                    <Body>
                        {elem[1].toString() + ' kg'}
                    </Body>
                </>
            )

        }

        if (elem[0] == 'avg_glucose_level' ) {
            return (
                <>
                    <Medium>
                        {attributeFormat(elem[0])}&nbsp;
                    </Medium>
                    <Body>
                        {elem[1] == 0 ? "Nie wypełniono" : elem[1].toString() + ' mg'}
                    </Body>
                </>
            )

        }

        if (elem[0] == 'isMale') {
            return (
                <>
                    <Medium>
                        {attributeFormat(elem[0])}&nbsp;
                    </Medium>
                    <Body>
                        {elem[1] == 0 ? 'Kobieta' : 'Mężczyzna'}
                    </Body>
                </>
            )

        }

        return (
            <>
                <Medium>
                    {attributeFormat(elem[0])}&nbsp;
                </Medium>
                <Body>
                    {inputValueFormat(elem[1])}
                </Body>
            </>
        )

    }
 
    return (
        <FlexColumn width='100%' gap='36px'>
            <H1 as='h1' color={theme.colors.brand}>
                Pacjent: {form ? form.name : ''} {form ? form.surname : ''}
            </H1>
            {form ? <FlexColumn alignmentX='flex-start' gap='36px'>
                {Object.entries(form).map((elem, index) => {
                    if (elem[0] !== 'result') {
                        return (
                            <FlexRow key={index} alignmentX='flex-start'>
                                {render_xd(elem)}

                            </FlexRow>
                        )
                    }
                })}
            </FlexColumn> : ''}
            <FlexRow alignmentX='flex-start'>
                <Medium>
                    Wstępna diagnoza:&nbsp;
                </Medium>
                <Medium>
                    {returnResult()}
                </Medium>
            </FlexRow>
        </FlexColumn>
    );
};

export default FilledForm;