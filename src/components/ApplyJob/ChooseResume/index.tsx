import { Paperclip } from 'phosphor-react';
import { Attach, ChooseResumeContainer, ResumesContainer } from './styles';

// NOTE: Not typed yet because de data type is gonna change
const ChooseResume = ({ data, setSelectedResume }: any) => {
    return (
        <ChooseResumeContainer>
            <div>Escolha seu currículo:</div>
            <div>
                {data === undefined ? (
                    <Attach>
                        <Paperclip size={28} />
                        <p>Anexar Currículo</p>
                    </Attach>
                ) : (
                    <ResumesContainer>
                        {/* NOTE: Slice should be removed when backend limit 2 resumes per user*/}

                        {data.map((resume: any, index: any) => (
                            <div
                                key={index}
                                onClick={() => setSelectedResume(resume)}
                            >
                                <img
                                    src="/assets/choose-pdf.svg"
                                    alt="PDF"
                                    width={32}
                                    height={32}
                                />
                                <p>{resume.fileKey}</p>
                            </div>
                        ))}
                    </ResumesContainer>
                )}
            </div>
        </ChooseResumeContainer>
    );
};

export default ChooseResume;
