import React from 'react';
import { FlexColumn, FlexRow } from '../../utils/containers';
import {H1, H2, H3, Body} from "../../utils/fonts";
import theme from "../../utils/theme";

const Question = (props) => {
    return (
        <FlexColumn gap='44px' alignmentX='flex-start'>
            <H3>
                {props.title}
            </H3>
            <FlexColumn gap='24px' alignmentX='flex-start'>
                {props.options.map((option) => {
                    return (
                    <FlexRow key={option.id} gap='20px'>
                        <FlexRow width={props.type === 'number' ? '60px' : '20px'} 
                                 order={props.type === 'number' ? 2 : 0} 
                                 height={props.type === 'number' ? '32px' : '20px'}
                                 padding={props.type === 'number' ? '8px' : '0'}
                                 id={option.id} name={option.name} backgroundColor={'#fff'}
                                 border={`1px solid ${theme.colors.dark}`} 
                                 margin={props.type === 'number' ? '2px 0 0 0' : '0'} 
                                 as='input' type={props.type} onChange={(e) => props.onChange(e)}/>
                        <Body id={option.id} htmlFor={option.id} as='label'>
                            {option.text}
                        </Body>
                    </FlexRow>
                    )
                })}
            </FlexColumn>
        </FlexColumn>
    );
};


export default Question;