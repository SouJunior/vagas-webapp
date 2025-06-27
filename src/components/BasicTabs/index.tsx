import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import CircleGreen from '../../assets/imgs/circle-application-green.svg';
import CircleRed from '../../assets/imgs/circle-application-red.svg';
import OutlinedCard from '../OutlinedCard';
import { useEffect, useState } from 'react';
import ProfileIcon from '../../assets/imgs/userIcon.svg';

import { useApi } from '../../hooks/useApi';

import { ContainerCards } from './styles';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);
    const [jobDetails, setJobDetails] = useState([]);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const api = useApi();
    const [results, setResults] = useState([]);
    const [vagasFechadas, setVagasFechadas] = useState([]);
    const [vagasAtivas, setVagasAtivas] = useState([]);

    const mergeApplicationWithJobDetails = (
        applications: any[],
        jobDetails: any[],
    ) => {
        return applications.map((app) => {
            const detail = jobDetails.find((job) => job.id === app.jobId);
            return {
                id: app.id,
                jobId: app.jobId,
                image: detail?.image || '',
                enterprise: detail?.company || '',
                position: detail?.title || '',
                applicationDate: app.dateCandidacy,
                closingDate: app.dateClosing,
                status: app.status,
            };
        });
    };

    const fetchJobDetails = async (ids: any[]) => {
        try {
            const jobs = await Promise.all(
                ids.map(async (id) => {
                    try {
                        const job = await api.getJobById(id);
                        return job;
                    } catch (error) {
                        console.error(`Erro ao buscar job ${id}:`, error);
                        return null;
                    }
                }),
            );
            const filteredJobs = jobs.filter((job) => job !== null);
            setJobDetails(filteredJobs);
            return filteredJobs;
        } catch (error) {
            console.error('Erro geral ao buscar detalhes dos jobs:', error);
            return [];
        }
    };

    const fetchData = async () => {
        try {
            const response = await api.getApplications();
            if (!response.statusCode) {
                setResults(response);

                const jobIds = await response.map((job) => job.jobId);
                const jobDetails = await fetchJobDetails(jobIds);

                const merged = mergeApplicationWithJobDetails(
                    response,
                    jobDetails,
                );

                const fechadas = merged.filter(
                    (vaga) => vaga.status !== 'em andamento',
                );
                const abertas = merged.filter(
                    (vaga) => vaga.status === 'em andamento',
                );

                setVagasFechadas(fechadas);
                setVagasAtivas(abertas);
            }
        } catch (error) {
            console.error('Erro ao buscar os dados:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const activeCount = vagasAtivas.length;
    const closedCount = vagasFechadas.length;

    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '80%' }}>
                <Tabs
                    centered
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                >
                    <Tab
                        style={{ fontFamily: 'Radio Canada', color: '#101828' }}
                        label={
                            <Box sx={{ display: 'flex', fontSize: '16px' }}>
                                <img
                                    src={CircleGreen}
                                    alt="Circle Green"
                                    style={{
                                        width: '12px',
                                        marginRight: '8px',
                                    }}
                                />
                                {`Ativas (${activeCount})`}
                            </Box>
                        }
                        {...a11yProps(0)}
                    />
                    <Tab
                        style={{ fontFamily: 'Radio Canada' }}
                        label={
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    fontSize: '16px',
                                }}
                            >
                                <img
                                    src={CircleRed}
                                    alt="Circle Red"
                                    style={{
                                        width: '12px',
                                        marginRight: '8px',
                                    }}
                                />
                                {`Encerradas (${closedCount})`}
                            </Box>
                        }
                        {...a11yProps(1)}
                    />
                </Tabs>
            </Box>

            <CustomTabPanel value={value} index={0}>
                <ContainerCards>
                    {vagasAtivas?.map((vaga) => (
                        <OutlinedCard
                            key={vaga.id}
                            id={vaga.id}
                            image={
                                vaga.enterprise.profile
                                    ? vaga.enterprise.profile
                                    : ProfileIcon
                            }
                            enterprise={vaga.enterprise.companyName}
                            position={vaga.position}
                            applicationDate={vaga.applicationDate}
                            closingDate={vaga.closingDate}
                            status={vaga.status}
                        />
                    ))}
                </ContainerCards>
            </CustomTabPanel>

            <CustomTabPanel value={value} index={1}>
                <ContainerCards>
                    {vagasFechadas?.map((vaga) => (
                        <OutlinedCard
                            key={vaga.id}
                            id={vaga.id}
                            image={
                                vaga.enterprise.profile
                                    ? vaga.enterprise.profile
                                    : ProfileIcon
                            }
                            enterprise={vaga.enterprise.companyName}
                            position={vaga.position}
                            applicationDate={vaga.applicationDate}
                            closingDate={vaga.closingDate}
                            status={vaga.status}
                        />
                    ))}
                </ContainerCards>
            </CustomTabPanel>
        </Box>
    );
}
