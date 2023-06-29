import { Paperclip } from 'phosphor-react';
import { Attach, ChooseResumeContainer } from './styles';

const ChooseResume = ({ data }: any) => {
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
                    <div>{data}</div>
                )}
            </div>
        </ChooseResumeContainer>
    );
};

export default ChooseResume;
