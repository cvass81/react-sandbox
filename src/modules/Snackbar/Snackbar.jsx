import React from 'react';
import MuiSnackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

import makeStyles from '@material-ui/core/styles/makeStyles';

const snackbarStyles = makeStyles(
    theme => ({
        anchorOriginTopCenter: {
            top: 56,
        },
        alert: {
            maxWidth: 600,
            flexGrow: 1,
            [theme.breakpoints.up('sm')]: {
                flexGrow: 'initial',
                minWidth: 288,
            },
        },
    }),
    { name: 'Snackbar' },
);

const Snackbar = React.forwardRef((props, ref) => {
    const {
        message,
        action,
        severity,
        autoHideDuration = 4000,
        ...other
    } = props;
    const classes = snackbarStyles();
    return (
        <MuiSnackbar
            ref={ref}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            autoHideDuration={autoHideDuration}
            classes={{ anchorOriginTopCenter: classes.anchorOriginTopCenter }}
            {...other}
        >
            <Alert
                severity={severity}
                action={action}
                variant="filled"
                elevation={6}
                className={classes.alert}
            >
                {message}
            </Alert>
        </MuiSnackbar>
    );
});

export default Snackbar;
