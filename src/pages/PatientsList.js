import React, { useEffect } from 'react';
import theme from "../utils/theme";
import {H1, H2, Body} from "../utils/fonts";
import {FlexColumn, FlexRow} from "../utils/containers";
import { Link } from 'react-router-dom'


const PatientsList = () => {


    const [list, setList] = React.useState(null);
    
    // Example POST method implementation:
    async function getData(url = '') {
        // Default options are marked with *
        const response = await fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        });
        return response.json(); // parses JSON response into native JavaScript objects
    }
    async function getList() {
        let result = await getData('http://127.0.0.1:8000/list');
        setList(result)
    }

    useEffect(() => {
        getList()        
    }, [])

    const renderList = () => {
        if (list){
            return Object.keys(list).map(function(key, index) {
                debugger
                return (
                <tr>
                    <td style={{paddingRight: '35px'}}>
                         <Link to={"/filled-form/" + key.toString()}>
                         {list[key]["userId"]} 
                         </Link>
                        </td>
                    <td>{list[key]["name"]}</td>
                    <td>{list[key]["surname"]}</td>
                </tr>
                )
              });
        }
        return null
    }

    return (
        <FlexColumn width='100%' gap='36px'>
            <H1 as='h1' color={theme.colors.brand}>
                Ankiety pacjentów
            </H1>
            <table>
                <tr>
                    <th style={{paddingRight: '35px'}}>Numer w kolejce</th>
                    <th>Imię</th>
                    <th>Nazwisko</th>
                </tr>
                {renderList()}
            </table>
        </FlexColumn>
    );
};

export default PatientsList;