import React from 'react';
import { FlexColumn, FlexRow } from '../../utils/containers';
import {H1, H2, H3, Body} from "../../utils/fonts";
import theme from "../../utils/theme";

const Question = (props) => {
    return (
        <FlexColumn gap='44px' alignmentX='flex-start'>
            <H3  maxWidth='490px'>
                {props.title}
            </H3>
            <FlexColumn gap='24px' alignmentX='flex-start'>
                {props.options.map((option) => {
                    return (
                    <FlexRow key={option.id} gap='20px'>
                        <FlexRow width={props.type === 'number' || props.type === 'text' ? '120px' : '20px'} 
                            order={props.type === 'number' || props.type === 'text' ? 2 : 0} 
                            height={props.type === 'number' || props.type === 'text' ? '32px' : '20px'}
                            padding={props.type === 'number' || props.type === 'text' ? '8px' : '0'}
                            id={option.id} name={option.name} backgroundColor={'#fff'} borderRadius='4px'
                            border={`1px solid ${theme.colors.dark}`} color={theme.colors.dark}
                            margin={props.type === 'number' || props.type === 'text' ? '2px 0 0 0' : '0'} 
                            as='input' type={props.type} 
                            onChange={(e) => props.updateState(e)}/>
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