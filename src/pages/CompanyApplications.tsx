import React from 'react';
import Applicant from '../components/Applicant';
import {
    ApplicantsContainer,
    ApplicantsList,
    PageTitle,
    Container,
} from './styles/CompanyApplicationsStyles';

const CompanyApplications = () => {
    return (
        <Container>
            <PageTitle>Candidaturas</PageTitle>
            <ApplicantsContainer>
                <ApplicantsList>
                    <Applicant>José da Silva</Applicant>
                    <Applicant>José da Silva</Applicant>
                    <Applicant>José da Silva</Applicant>
                    <Applicant>José da Silva</Applicant>
                    <Applicant>José da Silva</Applicant>
                    <Applicant>José da Silva</Applicant>
                </ApplicantsList>
            </ApplicantsContainer>
        </Container>
    );
};

export default CompanyApplications;
