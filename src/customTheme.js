import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import {primaryLight, primaryDark, primaryMain, secondaryMain, fontFamily} from './constants';

let customTheme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: primaryMain,
            light: primaryLight,
            dark: primaryDark
        },
        text: {
            primary: 'white',
            secondary: secondaryMain
        }
    },
    typography: {
        fontFamily: fontFamily.join(',')
    }
});
customTheme = responsiveFontSizes(customTheme);

export {customTheme};