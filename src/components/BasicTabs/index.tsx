import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import CircleGreen from '../../assets/imgs/circle-application-green.svg';
import CircleRed from '../../assets/imgs/circle-application-red.svg';
import OutlinedCard from '../OutlinedCard';
import { useEffect, useState } from 'react';
import ProfileIcon from '../../assets/imgs/userIcon.svg';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { useApi } from '../../hooks/useApi';

import { ContainerCards } from './styles';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface MergedVaga {
  id: string;
  jobId: string;
  image: string;
  companyName: string;
  position: string;
  applicationDate: string;
  closingDate: string;
  status: string;
}

interface Company {
  id: string;
  companyName: string;
  profile: string | null;
}

interface JobDetail {
  id: string;
  title: string;
  description: string;
  prerequisites: string;
  benefits: string;
  type: string;
  typeContract: string;
  salaryMin: number;
  salaryMax: number;
  modality: string;
  federalUnit: string;
  city: string;
  openEndedContract: boolean;
  contractType: string;
  contractText: string;
  affirmative: boolean;
  affirmativeType: string;
  company_id: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  content: any;
  comments: any[];
  company: Company;
  applications: any[];
}

interface Application {
  id: string;
  jobId: string;
  dateCandidacy: string;
  dateClosing: string;
  status: string;
}

type ApiResponse = Application[] | { statusCode: number; message: string };

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
  const [jobDetails, setJobDetails] = useState<JobDetail[]>([]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const api = useApi();
  const [vagasFechadas, setVagasFechadas] = useState<MergedVaga[]>([]);
  const [vagasAtivas, setVagasAtivas] = useState<MergedVaga[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const mergeApplicationWithJobDetails = (
    applications: Application[],
    jobDetails: JobDetail[],
  ): MergedVaga[] => {
    return applications.map((app) => {
      const detail = jobDetails.find((job) => job.id === app.jobId);

      const profileImage =
        detail && detail.company && detail.company.profile
          ? detail.company.profile
          : ProfileIcon;

      const companyName =
        detail && detail.company && detail.company.companyName
          ? detail.company.companyName
          : 'Nome da empresa';

      const position =
        detail && detail.title ? detail.title : 'Cargo não informado';

      return {
        id: app.id,
        jobId: app.jobId,
        image: profileImage,
        companyName: companyName,
        position: position,
        applicationDate: app.dateCandidacy,
        closingDate: app.dateClosing,
        status: app.status,
      };
    });
  };

  const fetchJobDetails = async (ids: string[]) => {
    const jobs: JobDetail[] = [];

    for (const id of ids) {
      try {
        const job = await api.getJobById(id);
        if (job) {
          jobs.push(job);
        }
      } catch (error) {
        console.error(`Erro ao buscar job ${id}:`, error);
      }

      await new Promise((resolve) => setTimeout(resolve, 200));
    }
    setJobDetails(jobs);
    return jobs;
  };
  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response: ApiResponse = await api.getApplications();

      if (Array.isArray(response)) {
        const jobIds = response.map((job) => job.jobId);
        const jobDetails = await fetchJobDetails(jobIds);

        const merged = mergeApplicationWithJobDetails(response, jobDetails);

        const fechadas = merged.filter(
          (vaga) => vaga.status !== 'em andamento',
        );
        const abertas = merged.filter((vaga) => vaga.status === 'em andamento');

        setVagasFechadas(fechadas);
        setVagasAtivas(abertas);
      } else {
        console.error('Erro na API:', response.statusCode, response.message);
        setError(
          'Erro ao carregar suas candidaturas. Por favor, tente novamente.',
        );
      }
    } catch (error) {
      console.error('Erro ao buscar os dados:', error);
    } finally {
      setLoading(false);
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
      {loading ? (
        <Box sx={{ marginTop: 4 }}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Box sx={{ marginTop: 4, textAlign: 'center' }}>
          + <Typography color="error">{error}</Typography>+{' '}
          <Button onClick={fetchData} sx={{ mt: 2 }}>
            + Tentar novamente +{' '}
          </Button>
          +{' '}
        </Box>
      ) : (
        <>
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
                  image={vaga.image}
                  companyName={vaga.companyName}
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
                  image={vaga.image}
                  companyName={vaga.companyName ?? 'Nome da empresa'}
                  position={vaga.position}
                  applicationDate={vaga.applicationDate}
                  closingDate={vaga.closingDate}
                  status={vaga.status}
                />
              ))}
            </ContainerCards>
          </CustomTabPanel>
        </>
      )}
    </Box>
  );
}
