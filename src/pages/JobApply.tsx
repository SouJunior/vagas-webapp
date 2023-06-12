import React from 'react';
import Header from '../components/Header';
import { FilterContainer, JobApplyContainer } from './styles/JobApply.styles';
import JobFilter from '../components/JobFilter';

const JobApply = () => {
    return (
        <JobApplyContainer>
            <Header pageName="Feed de Vagas" backTo={'/jobs'}></Header>
            <FilterContainer>
                <JobFilter />
            </FilterContainer>
        </JobApplyContainer>
    );
};

export default JobApply;
