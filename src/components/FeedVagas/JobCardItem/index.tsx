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
    company: string;
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

const JobCardItem: React.FC<Props> = ({
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
            <Logo src="{companyLogoUrl}" alt={company} />
            <Content>
                <Title>{title}</Title>
                <Company>Autofalante Mkt</Company>
                <Location>
                    {city}/{federalUnit}
                </Location>
                <Type>
                    {modality} - {jobType} - {typeContract}
                </Type>
            </Content>
            <PublishedAt>{timeAgo}</PublishedAt>
        </Card>
    );
};

export default JobCardItem;
