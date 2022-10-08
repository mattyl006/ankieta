import React from 'react';
import {H1, H2, Body} from "../utils/fonts";
import {FlexColumn, FlexRow} from "../utils/containers";
import theme from "../utils/theme";
import Question from '../components/sections/Question';

const StartPage = () => {
    const [formState, setFormState] = React.useState({
        isMale: 0,
        ever_married: 0,
        heart_disease: 0,
        hypertension: 0,
        is_urban: 0,
        age: 0,
        weight: 0,
        height: 0,
        avg_glucose_level: 0,
    });
    const updateState = (event) => {
        let newState = {...formState};
        if (event.target.type === 'radio') {
            newState[event.target.name] = Number(event.target.id.slice(-1) - 1);
        }
        if (event.target.type === 'number') {
            newState[event.target.name] = Number(event.target.value);
        }
        console.log("target name");
        console.log(event.target.name);
        console.log("value");
        console.log(event.target.value);
        setFormState(newState);
    };
    // Example POST method implementation:
    async function postData(url = '', data = {}) {
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
        body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
    }
    const sendAnswers = () => {
        console.log(postData('http://127.0.0.1:8000/model', formState));
    }
    return (
        <FlexColumn width='100%' gap='36px'>
            {/* <H1 as='h1' color={theme.colors.brand}>
                Ankieta dla pacjenta
            </H1> */}
            <FlexColumn as='section' alignmentX='flex-start' gap='36px'>
                <H2 as='h2' color={theme.colors.brand}>
                    Wybierz jedną odpowiedź
                </H2>
                <Question type='radio' updateState={updateState}
                    title='1. Płeć' 
                    options={[
                        {text: 'Kobieta', id: 'isMale1', name: 'isMale'},
                        {text: 'Mężczyzna', id: 'isMale2', name: 'isMale'},
                    ]} />
                <Question type='radio' updateState={updateState}
                    title='2. Czy jesteś w związku?' 
                    options={[
                        {text: 'Nie', id: 'ever_married1', name: 'ever_married'},
                        {text: 'Tak', id: 'ever_married2', name: 'ever_married'},
                    ]} />
                <Question type='radio' updateState={updateState}
                    title='3. Czy chorował/a Pan/Pani na serce?' 
                    options={[
                        {text: 'Nie', id: 'heart_disease1', name: 'heart_disease'},
                        {text: 'Tak', id: 'heart_disease2', name: 'heart_disease'},
                    ]} />
                <Question type='radio' updateState={updateState}
                    title='4. Nadcisnienie' 
                    options={[
                        {text: 'Nie', id: 'hypertension1', name: 'hypertension'},
                        {text: 'Tak', id: 'hypertension2', name: 'hypertension'},
                    ]} />
                <Question type='radio' updateState={updateState}
                    title='5. Miejsce zamieszkania' 
                    options={[
                        {text: 'Wieś', id: 'is_urban1', name: 'is_urban'},
                        {text: 'Miasto', id: 'is_urban2', name: 'is_urban'},
                ]} />
            </FlexColumn>
            <FlexColumn as='section' alignmentX='flex-start' gap='36px'>
                <H2 as='h2' color={theme.colors.brand}>
                    Wpisz poprawną odpowiedź
                </H2>
                <Question type='number' updateState={updateState}
                    title='6. Ile masz lat?' 
                    options={[
                        {text: 'Wiek:', id: 'age', name: 'age'},
                ]} />
                <Question type='number' updateState={updateState}
                    title='7. Podaj swoją wagę' 
                    options={[
                        {text: 'Waga:', id: 'weight', name: 'weight'},
                ]} />
                <Question type='number' updateState={updateState}
                    title='8. Podaj swój wzrost' 
                    options={[
                        {text: 'Wzrost:', id: 'height', name: 'height'},
                ]} />
                <Question type='number' updateState={updateState}
                    title='9. Średni poziom cukru we krwi' 
                    options={[
                        {text: 'Poziom cukru:', id: 'avg_glucose_level', name: 'avg_glucose_level'},
                ]} />
            </FlexColumn>
            <FlexRow margin='32px 0 0 0' backgroundColor={theme.colors.brand} 
                     color={theme.colors.light} borderRadius='8px' cursor='pointer'
                     width='100px' height='48px' as='button' onClick={sendAnswers}>
                Prześlij
            </FlexRow>
        </FlexColumn>
    );
};

export default StartPage;