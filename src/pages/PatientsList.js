import React, { useEffect } from 'react';
import theme from "../utils/theme";
import {H1, H2, Body} from "../utils/fonts";
import {FlexColumn, FlexRow} from "../utils/containers";
import { Link } from 'react-router-dom'
import { link_backend } from './link';


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
        let result = await getData(link_backend + '/list');
        setList(result)
    }

    useEffect(() => {
        getList()        
    }, [])



    // Example POST method implementation:
    async function delete_b(url, body) {
        // Default options are marked with *
        const response = await fetch(url, {
        method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
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



    async function delete_a(k) {
        debugger
        let result = await delete_b(link_backend+ '/list', {"uuid": k});
        setList(result)
    }

    const deleteRow = (k) => {
        delete_a(k)
    }

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

    const renderList = () => {
        if (list){
            return Object.keys(list).map(function(key, index) {
                return (
                <tr>
                    <td style={{paddingRight: '35px'}}>
                         <Link to={"/filled-form/" + key.toString()}>
                         {list[key]["userId"]} 
                         </Link>
                        </td>
                    <td style={{paddingRight: '35px'}}>{list[key]["name"]}</td>
                    <td style={{paddingRight: '35px'}}>{list[key]["surname"]}</td>
                    <td style={{paddingRight: '35px'}}>{aa_xd(list[key]["result"][1][0][1])}
                    </td>
                    <td><a href="#" onClick={() => deleteRow(key)}>Archiwizuj</a></td>
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
                    <th style={{paddingRight: '35px'}}>Imię</th>
                    <th style={{paddingRight: '35px'}}>Nazwisko</th>
                    <th style={{paddingRight: '35px'}}>Wstępna diagnoza</th>
                    {/* <th>Archiwizuj</th> */}
                </tr>
                {renderList()}
            </table>
        </FlexColumn>
    );
};

export default PatientsList;