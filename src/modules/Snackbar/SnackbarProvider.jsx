import React, { useState, useRef, useMemo, useEffect } from 'react';

import Snackbar from './Snackbar.jsx';
import SnackbarContext from './SnackbarContext.jsx';

export default function SnackbarProvider(props) {
    const { children } = props;
    const queueRef = useRef([]);
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState([]);

    useEffect(() => {
        processQueue();
    }, [open]);

    const processQueue = () => {
        if (queueRef.current.length <= 0 || open) {
            return;
        }

        setOpen(true);
        setMessage(queueRef.current.shift());
    };

    const pushMessageInQueue = ({ message, key, ...options }) => {
        const id = key || new Date().getTime();
        queueRef.current.push({
            key: id,
            message,
            options,
        });
    };

    const openSnackbar = snackbarItems => {
        snackbarItems.forEach(item => pushMessageInQueue(item));

        processQueue();
    };

    const removeMessageFromQueue = messageKey => {
        queueRef.current = queueRef.current.filter(
            message => message.key !== messageKey,
        );
    };

    const closeSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        removeMessageFromQueue(event);
        (!event || message.key === event) && setOpen(false);
    };

    const value = useMemo(() => ({ openSnackbar, closeSnackbar }), [
        openSnackbar,
        closeSnackbar,
    ]);

    return (
        <SnackbarContext.Provider value={value}>
            {children}
            <Snackbar
                key={message ? message.key : undefined}
                open={open}
                onClose={closeSnackbar}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
                message={message ? message.message : undefined}
                {...message.options}
            />
        </SnackbarContext.Provider>
    );
}
