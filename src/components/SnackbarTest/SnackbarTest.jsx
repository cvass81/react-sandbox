import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import { SnackbarContext } from '../../modules/Snackbar';

const SnackbarTest = () => {
    const { openSnackbar } = useContext(SnackbarContext);
    const handleOpenSnackbar = () => {
        openSnackbar([
            {
                message: 'Snackbar One',
                key: 'one',
                severity: 'warning',
                autoHideDuration: 3000,
            },
            {
                message: 'Snackbar Two',
                key: 'two',
                severity: 'info',
                autoHideDuration: 3000,
            },
        ]);
    };

    return <Button onClick={handleOpenSnackbar}>OpenSnackbars</Button>;
};

export default SnackbarTest;
