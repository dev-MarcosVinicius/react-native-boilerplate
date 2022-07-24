import 'styled-components';
import theme from './theme';

/**
 * Configuração para utilizar as props de estilização
 */
declare module 'styled-components' {
    type ThemeType = typeof theme;

    export interface DefaultTheme extends ThemeType {}
}