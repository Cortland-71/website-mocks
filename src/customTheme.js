import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import {primaryLight, primaryDark, primaryMain, primaryText, secondaryText, fontFamily} from './constants';

let customTheme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: primaryMain,
            light: primaryLight,
            dark: primaryDark
        },
        text: {
            primary: primaryText,
            secondary: secondaryText
        }
    },
    typography: {
        fontFamily: fontFamily.join(',')
    }
});
customTheme = responsiveFontSizes(customTheme);

export {customTheme};