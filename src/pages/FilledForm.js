import React, { useEffect } from 'react';
import theme from "../utils/theme";
import {H1, H2, Body, Medium} from "../utils/fonts";
import {FlexColumn, FlexRow} from "../utils/containers";
import { useParams } from 'react-router-dom';

const FilledForm = (props) => {


    const formId = useParams().id
    const [form, setForm] = React.useState(null);

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
        let result = await getData('http://127.0.0.1:8000/list', {"uuid": formId});
        setForm(result)
        debugger
    }


    useEffect(() => {
        getList()
    }, [])
 
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

export default FilledForm;