import React from 'react';
import SnackbarTest from './components/SnackbarTest';
import { SnackbarProvider } from './modules/Snackbar';

function App() {
    return (
        <div className="App">
            <SnackbarProvider>
                <SnackbarTest />
            </SnackbarProvider>
        </div>
    );
}

export default App;
