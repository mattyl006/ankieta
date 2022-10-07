import React from 'react';
import {FlexRow} from "../../utils/containers";
import theme from "../../utils/theme";

const NavBar = () => {
    return (
        <FlexRow width='100%' height='48px' position='fixed' top='0' zIndex='10' left='0' backgroundColor={theme.colors.green}>
        </FlexRow>
    );
};

export default NavBar;