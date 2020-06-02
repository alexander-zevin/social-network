import {createMuiTheme, Theme} from "@material-ui/core";
import {blue} from "@material-ui/core/colors";

const theme: Theme = createMuiTheme({
    palette: {
        primary: {
            main: blue[800]
        }
    }
});

export default theme