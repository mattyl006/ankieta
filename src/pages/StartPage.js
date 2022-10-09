import React from 'react';
import {H1, H2, Body} from "../utils/fonts";
import {FlexColumn, FlexRow} from "../utils/containers";
import theme from "../utils/theme";
import Question from '../components/sections/Question';
import PatientForm from './PatientForm';
import { link_backend } from './link';

const StartPage = () => {
    const [doctorView, setDoctorView] = React.useState(false);
    const [formState, setFormState] = React.useState({
        userId: '',
        name: '',
        surname: '',
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
        if (event.target.type === 'text') {
            newState[event.target.name] = event.target.value;
        }
        if (event.target.type === 'radio') {
            newState[event.target.name] = Number(event.target.id.slice(-1) - 1);
        }
        if (event.target.type === 'number') {
            newState[event.target.name] = Number(event.target.value);
        }
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
    async function sendAnswers() {
        let result = await postData(link_backend + '/model', formState);
        console.log(result);
        setDoctorView(result);
    }
    return (
        <>
            <FlexColumn width='100%' gap='36px' display={doctorView ? 'none' : 'flex'}>
                {/* <H1 as='h1' color={theme.colors.brand}>
                    Ankieta dla pacjenta
                </H1> */}
                <FlexColumn as='section' alignmentX='flex-start' gap='36px'>
                    <H2 as='h2' color={theme.colors.brand}>
                        Sekcja danych osobowych
                    </H2>
                    <Question type='text' updateState={updateState}
                        title='1. Wprowadź swój numer w kolejce:' 
                        options={[
                            {text: 'Numer:', 
                                id: 'userId', name: 'userId'},
                        ]} />
                    <Question type='text' updateState={updateState}
                        title='2. Wprowadź imię' 
                        options={[
                            {text: 'Imię:', id: 'name', name: 'name'},
                        ]} />
                    <Question type='text' updateState={updateState}
                        title='3. Wprowadź nazwisko' 
                        options={[
                            {text: 'Nazwisko:', id: 'surname', name: 'surname'},
                        ]} />
                </FlexColumn>
                <FlexColumn as='section' alignmentX='flex-start' gap='36px'>
                    <H2 as='h2' color={theme.colors.brand}>
                        Wybierz jedną odpowiedź
                    </H2>
                    <Question type='radio' updateState={updateState}
                        title='4. Wybierz płeć' 
                        options={[
                            {text: 'Kobieta', id: 'isMale1', name: 'isMale'},
                            {text: 'Mężczyzna', id: 'isMale2', name: 'isMale'},
                        ]} />
                    <Question type='radio' updateState={updateState}
                        title='5. Czy jesteś w związku?' 
                        options={[
                            {text: 'Nie', id: 'ever_married1', name: 'ever_married'},
                            {text: 'Tak', id: 'ever_married2', name: 'ever_married'},
                        ]} />
                    <Question type='radio' updateState={updateState}
                        title='6. Czy chorowałeś/aś na serce?' 
                        options={[
                            {text: 'Nie', id: 'heart_disease1', name: 'heart_disease'},
                            {text: 'Tak', id: 'heart_disease2', name: 'heart_disease'},
                        ]} />
                    <Question type='radio' updateState={updateState}
                        title='7. Czy masz problemy z nadciśnieniem' 
                        options={[
                            {text: 'Nie', id: 'hypertension1', name: 'hypertension'},
                            {text: 'Tak', id: 'hypertension2', name: 'hypertension'},
                        ]} />
                    <Question type='radio' updateState={updateState}
                        title='8. Wybierz typ zamieszkaia' 
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
                        title='9. Podaj swój wiek?' 
                        options={[
                            {text: 'Wiek:', id: 'age', name: 'age'},
                    ]} />
                    <Question type='number' updateState={updateState}
                        title='10. Podaj swoją wagę (w kilogramach)' 
                        options={[
                            {text: 'Waga:', id: 'weight', name: 'weight'},
                    ]} />
                    <Question type='number' updateState={updateState}
                        title='11. Podaj swój wzrost (w centymetrach)' 
                        options={[
                            {text: 'Wzrost:', id: 'height', name: 'height'},
                    ]} />
                    <Question type='number' updateState={updateState}
                        title='12. Średni poziom cukru we krwi w mg (pole opcjonalne)' 
                        options={[
                            {text: 'Poziom cukru:', id: 'avg_glucose_level', 
                                name: 'avg_glucose_level'},
                    ]} />
                </FlexColumn>
                <FlexRow margin='32px 0 0 0' backgroundColor={theme.colors.brand} 
                        color={theme.colors.light} borderRadius='8px' cursor='pointer'
                        width='100px' height='48px' as='button' onClick={sendAnswers}>
                    Prześlij
                </FlexRow>
            </FlexColumn>
            {doctorView ? <PatientForm data={doctorView}/> : ''}
        </>
    );
};

export default StartPage;