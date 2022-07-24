import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import theme from '../../../global/styles/theme';
import { IconGoogle } from '../../../shared/lib/styled-components/icons';
import { ViewCenter } from '../../../shared/lib/styled-components/containers';
import { GoogleButtonLogin } from '../../../shared/lib/styled-components/buttons';

export default function GoogleLogin() {
    return (
        <ThemeProvider theme={theme}>
            <ViewCenter>
                <GoogleButtonLogin>
                    <IconGoogle
                        name={'google'}
                    />
                </GoogleButtonLogin>
            </ViewCenter>
        </ThemeProvider>
    );
};