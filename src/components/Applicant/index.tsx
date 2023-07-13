import React, { ReactNode } from 'react';
import { ApplicantName, Container } from './styles';
import { Paperclip, User } from 'phosphor-react';

interface ApplicantProps {
    children: ReactNode;
}

const Applicant = ({ children }: ApplicantProps) => {
    return (
        <Container>
            <div>
                <User size={22} weight="regular" />
                <ApplicantName>{children}</ApplicantName>
            </div>
            <Paperclip size={23} weight="regular" />
        </Container>
    );
};

export default Applicant;
