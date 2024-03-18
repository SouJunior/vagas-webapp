import { Link, Alert, IconButton, Box, useMediaQuery } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/Auth/AuthContext';

const PopUpAntiFraudMessage = () => {
    const { setPopUpAntiFraudOpen } = useContext(AuthContext);
    const mobile = useMediaQuery('(max-width:600px)');

    return (
        <Box sx={{ alignSelf: 'center', margin: '8px', width: !mobile ? '85%' : undefined }}>
            <Alert
                variant="outlined"
                icon={false}
                severity="info"
                action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            setPopUpAntiFraudOpen(false);
                        }}
                    >
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                }
                sx={{
                    borderRadius: '8px',
                    color: '#4D4D4D', 
                    fontSize: '16px', 
                    '& .MuiAlert-message': { width:'100%'}
                }}
            >
                Cuidado com fraudes de pessoas ou empresas que tentam se passar pela SouJunior! <Link href="" underline="none">Ler Mais</Link>

            </Alert>
        </Box>
    )
}

export default PopUpAntiFraudMessage