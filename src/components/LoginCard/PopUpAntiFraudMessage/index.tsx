import { Link, Alert, IconButton, Box, useMediaQuery, AlertTitle, Typography, Dialog } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/Auth/AuthContext';

const PopUpAntiFraudMessage = () => {

    const { setPopUpAntiFraudOpen } = useContext(AuthContext);
    const mobile = useMediaQuery('(max-width:600px)');
    const [expand, setExpand] = useState(false);

    const handleExpand = () => {
        setExpand(true);
    };

    return (
        <Box sx={{
            alignSelf: !expand ? "center" : undefined,
            width: "100%",
            height: expand ? "100%" : undefined,
            position: expand ? "fixed" : undefined,
            display: expand ? "flex" : undefined,
            justifyContent: expand ? "center" : undefined,
            background: expand ? "rgba(93, 95, 93, 0.3)" : undefined,
            backdropFilter: expand ? "blur(7px)" : undefined,
            zIndex: "2",
        }}
        >
            <Box sx={{ marginTop: expand ? "78px" : "8px", marginX: mobile ? "5px" : "30px" }}>
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
                        background: '#FFFF',
                        borderRadius: "8px",
                        color: "#4D4D4D",
                        fontSize: "16px",
                        fontWeight: "400",
                        '& .MuiAlert-message': { width: "100%" },
                    }}
                >
                    <AlertTitle sx={{ marginBottom: "20px" }}>
                        Cuidado com fraudes de pessoas ou empresas que tentam se passar pela SouJunior! <Link sx={{ cursor: 'pointer' }} underline="none" onClick={handleExpand}>Ler Mais</Link>
                    </AlertTitle>
                    {
                        expand &&
                        <>
                            <Typography>A SouJunior é portal gratuito para candidatos e empresas. Você nunca deve enviar pagamentos a empresas ou pessoas que afirmam ser representantes da SouJunior.</Typography>
                            <Typography> Se você achar que pode ter sido vítima de fraude, siga <Link sx={{ cursor: 'pointer' }} underline="none">esses passos</Link>.</Typography>
                            <Typography> Link <Link sx={{ cursor: 'pointer' }} underline="none">Termos de uso.</Link></Typography>
                        </>
                    }
                </Alert>
            </Box>
        </Box>
    )
}

export default PopUpAntiFraudMessage