import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useApi } from '../hooks/useApi';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/Auth/AuthContext';
import { Footer } from '../components/Footer';
import Header from '../components/Header';
import { Container } from '../components/styles/Container.styled';
import { Main } from './styles/Home.styles';

const VerifyEmail = () => {
    const { user } = useContext(AuthContext);
    const [searchParams, setSearchParams] = useSearchParams();
    const [responseData, setResponseData] = useState({});

    const api = useApi();
    //extrai o id da URL
    const id = searchParams.get('id');
    //extrau o type da url
    const type = searchParams.get('type');

    const navigate = useNavigate();

    // useEffect(() => {
    //     const activateEmail = async () => {
    //         if (type === 'USER') {
    //             try {
    //                 if (id) {
    //                     const res = await api.activateEmailUser(id);
    //                     setResponseData(res);
    //                 }
    //             } catch (err) {
    //                 console.error('Erro ao ativar o e-mail:', err);
    //             }
    //         } else {
    //             try {
    //                 if (id) {
    //                     const res = await api.activateEmailCompany(id);
    //                     setResponseData(res);
    //                 }
    //             } catch (err) {
    //                 console.error('Erro ao ativar o e-mail', err);
    //             }
    //         }
    //     };

    //     if (user?.id) {
    //         navigate('/');
    //     } else {
    //         activateEmail();
    //     }
    // }, [id, user]);

    // return (
    //     <>
    //         <Header pageName="Confirmação de Email" backTo="/" />
    //         <Main>
    //             {responseData ? (
    //                 <Container>
    //                     <h1>Email confirmado com sucesso!</h1>
    //                 </Container>
    //             ) : (
    //                 <Container>
    //                     <h1>Falha ao Confirmar email</h1>
    //                 </Container>
    //             )}
    //         </Main>
    //         <Footer />
    //     </>
    // );

    useEffect(() => {
        const activateEmail = async () => {
            try {
                if (id) {
                    let res;
                    if (type === 'USER') {
                        res = await api.activateEmailUser(id);
                    } else {
                        res = await api.activateEmailCompany(id);
                    }
                    setResponseData(res);
                }
            } catch (err) {
                console.error('Erro ao ativar o e-mail:', err);
            }
        };

        if (user?.id) {
            navigate('/');
        } else {
            activateEmail();
        }
    }, [id, user]);

    return (
        <>
            <Header pageName="Confirmação de Email" backTo="/" />
            <Main>
                <Container>
                    <h1>
                        {responseData
                            ? 'Email confirmado com sucesso!'
                            : 'Falha ao Confirmar email'}
                    </h1>
                </Container>
            </Main>
            <Footer />
        </>
    );
};

export default VerifyEmail;
