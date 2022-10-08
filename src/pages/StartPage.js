import React from 'react';
import {H1, H2, Body} from "../utils/fonts";
import {FlexColumn, FlexRow} from "../utils/containers";
import theme from "../utils/theme";
import Question from '../components/sections/Question';

const StartPage = () => {
    const [formState, setFormState] = React.useState({
        plec: 0,
        zw: 0,
        serceChor: 0,
        nadCis: 0,
        miejsceZam: 0,
        wiek: 0,
        waga: 0,
        wzrost: 0,
        pozCukr: 0,
    });
    const updateState = (event, question) => {
        let newState = {...formState};
        newState[question] = event.target.value;
        setFormState(newState);
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
                <Question type='radio'
                    title='1. Płeć' 
                    options={[
                        {text: 'Kobieta', id: 'plec1', name: 'plec'},
                        {text: 'Mężczyzna', id: 'plec2', name: 'plec'},
                    ]} />
                <Question type='radio'
                    title='2. Czy jesteś w związku?' 
                    options={[
                        {text: 'Tak', id: 'zw1', name: 'zw'},
                        {text: 'Nie', id: 'zw2', name: 'zw'},
                    ]} />
                <Question type='radio'
                    title='3. Czy chorował/a Pan/Pani na serce?' 
                    options={[
                        {text: 'Tak', id: 'serceChor1', name: 'serceChor'},
                        {text: 'Nie', id: 'serceChor2', name: 'serceChor'},
                    ]} />
                <Question type='radio'
                    title='4. Nadcisnienie' 
                    options={[
                        {text: 'Tak', id: 'nadCis1', name: 'nadCis'},
                        {text: 'Nie', id: 'nadCis2', name: 'nadCis'},
                    ]} />
                <Question type='radio'
                    title='5. Miejsce zamieszkania' 
                    options={[
                        {text: 'Miasto', id: 'miejsceZam1', name: 'miejsceZam'},
                        {text: 'Wieś', id: 'miejsceZam2', name: 'miejsceZam'},
                ]} />
            </FlexColumn>
            <FlexColumn as='section' alignmentX='flex-start' gap='36px'>
                <H2 as='h2' color={theme.colors.brand}>
                    Wpisz poprawną odpowiedź
                </H2>
                <Question type='number'
                    title='6. Ile masz lat?' 
                    options={[
                        {text: 'Wiek:', id: 'wiek', name: 'wiek'},
                ]} />
                <Question type='number'
                    title='7. Podaj swoją wagę' 
                    options={[
                        {text: 'Waga:', id: 'waga', name: 'waga'},
                ]} />
                <Question type='number'
                    title='8. Podaj swój wzrost' 
                    options={[
                        {text: 'Wzrost:', id: 'wzrost', name: 'wzrost'},
                ]} />
                <Question type='number'
                    title='9. Średni poziom cukru we krwi' 
                    options={[
                        {text: 'Poziom cukru:', id: 'pozCukr', name: 'pozCukr'},
                ]} />
            </FlexColumn>
            <FlexRow margin='32px 0 0 0' backgroundColor={theme.colors.brand} 
                     color={theme.colors.light} borderRadius='8px' cursor='pointer'
                     width='100px' height='48px' as='button'>
                Prześlij
            </FlexRow>
        </FlexColumn>
    );
};

export default StartPage;