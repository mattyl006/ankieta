import React from 'react';
import {H1} from "../utils/fonts";
import {FlexRow} from "../utils/containers";
import theme from "../utils/theme";

const StartPage = () => {
    return (
        <>
            <H1 color={theme.colors.dark}>
                Hello hackathon
            </H1>

            <FlexRow width='100px' height='100px' backgroundColor={theme.colors.brand}>

            </FlexRow>
        </>
    );
};

export default StartPage;