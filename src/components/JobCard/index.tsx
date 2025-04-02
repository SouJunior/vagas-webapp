import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import {
    Card,
    Company,
    Content,
    Location,
    Logo,
    PublishedAt,
    Title,
    Type,
} from './styles';
import { ptBR } from 'date-fns/locale';

export interface Props {
    id: string;
    title: string;
    company: any;
    city: string;
    federalUnit: string;
    jobType: string;
    typeContract: string;
    modality: string;
    publishedAt: string;
    onClick?: () => void;
    active: boolean;
    opacity: any;
}

const JobCard: React.FC<Props> = ({
    id,
    title,
    company,
    city,
    federalUnit,
    jobType,
    typeContract,
    modality,
    publishedAt,
    onClick,
    active,
    opacity,
}) => {
    const timeAgo = formatDistanceToNow(new Date(publishedAt), {
        locale: ptBR,
        addSuffix: true,
    });

    return (
        <Card tabIndex={0} onClick={onClick} active={active} opacity={opacity}>
            {company.profile === null ? (
                <Logo src="/assets/imgs/profile-image.svg" alt="default Image" />
            ) : (
                <Logo src={company.profile} alt={company.companyName} />
            )}
            <Content>
                <Title>{title}</Title>
                <Company>{company.companyName}</Company>
                <Location>
                    {city}/{federalUnit}
                </Location>
                <Type>
                    {modality === 'REMOTE' && 'REMOTO'}
                    {modality === 'HYBRID' && 'HÍBRIDO'}
                    {modality === 'IN_PERSON' && 'PRESENCIAL'} - {jobType} -{' '}
                    {typeContract == "OTHER" ? "OUTRO" : typeContract}
                </Type>
            </Content>
            <PublishedAt>{timeAgo}</PublishedAt>
        </Card>
    );
};

export default JobCard;
