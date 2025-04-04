import * as React from 'react';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

interface CustomizedSnackbarsProps {
  trigger?: boolean;
}

export default function CustomizedSnackbars({ trigger }: CustomizedSnackbarsProps) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (trigger) {
      setOpen(true);
    }
  }, [trigger]);

  const handleClose = (
    _event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === 'clickaway') return;
    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity="success"
        variant="filled"
        sx={{ width: '100%' }}
      >
        This is a success Alert inside a Snackbar!
      </Alert>
    </Snackbar>
  );
}

