import React, {useContext} from 'react';
import Button from '@material-ui/core/Button';
import {SnackbarContext} from '../../modules/Snackbar';

const SnackbarTest = () => {
    const {openSnackbar} = useContext(SnackbarContext);
    const handleOpenSnackbar = () => {
        openSnackbar('Latest available vessel position is more than 3 hours ago. ETD set accordingly.', {
            key: 'lastPosUnix',
            severity: 'warning',
            autoHideDuration: 3000,
        });
        openSnackbar('Latest available vessel position is more than 3 hours ago. ETD set accordingly.', {
            key: 'lastPosUnix',
            severity: 'info',
            autoHideDuration: 3000,
        });
    };

    return (
        <Button onClick={handleOpenSnackbar}>
            OpenSnackbars
        </Button>
    );
};

export default SnackbarTest;
