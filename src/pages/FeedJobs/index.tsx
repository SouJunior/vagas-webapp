import Cognito from '../../assets/imgs/cognito.svg';
import Work from '../../assets/imgs/work.svg';

import Select from 'react-select';

import * as S from './style';

const options = [
    { value: 'recents', label: 'Mais recentes' },
    { value: 'old', label: 'Mais antigos' },
];

const FeedJobs = () => {
    return (
        <S.Container>
            <S.SectionFilters>
                <Select
                    options={options}
                    defaultValue={[options[0]]}
                    styles={S.SelectDate}
                />
            </S.SectionFilters>

            <S.SectionJob>
                <S.ContainerAllJobs>
                    <S.HeaderAllJobs>
                        <S.AllJobsTitle>UX Design</S.AllJobsTitle>
                        <S.AllJobsQuantity>
                            <strong> 50 vagas </strong> encontradas
                        </S.AllJobsQuantity>
                    </S.HeaderAllJobs>

                    <S.BoxJob isActive>
                        <figure>
                            <S.CompanyImage src={Cognito} alt="cognito" />
                        </figure>

                        <S.JobInfo>
                            <S.ParagraphMd>
                                UI/UX Designer Junior - São Paulo
                            </S.ParagraphMd>

                            <S.ParagraphSm>Cognito</S.ParagraphSm>

                            <S.ParagraphSm opacity="0.9">
                                São Paulo Capital, São Paulo, Brasil
                            </S.ParagraphSm>

                            <S.ParagraphSm opacity="0.9">
                                Remoto - Junior - CLT
                            </S.ParagraphSm>

                            <S.LabelSm opacity="0.9">Há 22h</S.LabelSm>
                        </S.JobInfo>
                    </S.BoxJob>

                    <S.BoxJob>
                        <figure>
                            <S.CompanyImage src={Cognito} alt="cognito" />
                        </figure>

                        <S.JobInfo>
                            <S.ParagraphMd>
                                UI/UX Designer Junior - São Paulo
                            </S.ParagraphMd>

                            <S.ParagraphSm>Cognito</S.ParagraphSm>

                            <S.ParagraphSm opacity="0.9">
                                São Paulo Capital, São Paulo, Brasil
                            </S.ParagraphSm>

                            <S.ParagraphSm opacity="0.9">
                                Remoto - Junior - CLT
                            </S.ParagraphSm>

                            <S.LabelSm opacity="0.9">Há 22h</S.LabelSm>
                        </S.JobInfo>
                    </S.BoxJob>
                    <S.BoxJob>
                        <figure>
                            <S.CompanyImage src={Cognito} alt="cognito" />
                        </figure>

                        <S.JobInfo>
                            <S.ParagraphMd>
                                UI/UX Designer Junior - São Paulo
                            </S.ParagraphMd>

                            <S.ParagraphSm>Cognito</S.ParagraphSm>

                            <S.ParagraphSm opacity="0.9">
                                São Paulo Capital, São Paulo, Brasil
                            </S.ParagraphSm>

                            <S.ParagraphSm opacity="0.9">
                                Remoto - Junior - CLT
                            </S.ParagraphSm>

                            <S.LabelSm opacity="0.9">Há 22h</S.LabelSm>
                        </S.JobInfo>
                    </S.BoxJob>
                    <S.BoxJob>
                        <figure>
                            <S.CompanyImage src={Cognito} alt="cognito" />
                        </figure>

                        <S.JobInfo>
                            <S.ParagraphMd>
                                UI/UX Designer Junior - São Paulo
                            </S.ParagraphMd>

                            <S.ParagraphSm>Cognito</S.ParagraphSm>

                            <S.ParagraphSm opacity="0.9">
                                São Paulo Capital, São Paulo, Brasil
                            </S.ParagraphSm>

                            <S.ParagraphSm opacity="0.9">
                                Remoto - Junior - CLT
                            </S.ParagraphSm>

                            <S.LabelSm opacity="0.9">Há 22h</S.LabelSm>
                        </S.JobInfo>
                    </S.BoxJob>
                    <S.BoxJob>
                        <figure>
                            <S.CompanyImage src={Cognito} alt="cognito" />
                        </figure>

                        <S.JobInfo>
                            <S.ParagraphMd>
                                UI/UX Designer Junior - São Paulo
                            </S.ParagraphMd>

                            <S.ParagraphSm>Cognito</S.ParagraphSm>

                            <S.ParagraphSm opacity="0.9">
                                São Paulo Capital, São Paulo, Brasil
                            </S.ParagraphSm>

                            <S.ParagraphSm opacity="0.9">
                                Remoto - Junior - CLT
                            </S.ParagraphSm>

                            <S.LabelSm opacity="0.9">Há 22h</S.LabelSm>
                        </S.JobInfo>
                    </S.BoxJob>
                    <S.BoxJob>
                        <figure>
                            <S.CompanyImage src={Cognito} alt="cognito" />
                        </figure>

                        <S.JobInfo>
                            <S.ParagraphMd>
                                UI/UX Designer Junior - São Paulo
                            </S.ParagraphMd>

                            <S.ParagraphSm>Cognito</S.ParagraphSm>

                            <S.ParagraphSm opacity="0.9">
                                São Paulo Capital, São Paulo, Brasil
                            </S.ParagraphSm>

                            <S.ParagraphSm opacity="0.9">
                                Remoto - Junior - CLT
                            </S.ParagraphSm>

                            <S.LabelSm opacity="0.9">Há 22h</S.LabelSm>
                        </S.JobInfo>
                    </S.BoxJob>
                    <S.BoxJob>
                        <figure>
                            <S.CompanyImage src={Cognito} alt="cognito" />
                        </figure>

                        <S.JobInfo>
                            <S.ParagraphMd>
                                UI/UX Designer Junior - São Paulo
                            </S.ParagraphMd>

                            <S.ParagraphSm>Cognito</S.ParagraphSm>

                            <S.ParagraphSm opacity="0.9">
                                São Paulo Capital, São Paulo, Brasil
                            </S.ParagraphSm>

                            <S.ParagraphSm opacity="0.9">
                                Remoto - Junior - CLT
                            </S.ParagraphSm>

                            <S.LabelSm opacity="0.9">Há 22h</S.LabelSm>
                        </S.JobInfo>
                    </S.BoxJob>
                    <S.BoxJob>
                        <figure>
                            <S.CompanyImage src={Cognito} alt="cognito" />
                        </figure>

                        <S.JobInfo>
                            <S.ParagraphMd>
                                UI/UX Designer Junior - São Paulo
                            </S.ParagraphMd>

                            <S.ParagraphSm>Cognito</S.ParagraphSm>

                            <S.ParagraphSm opacity="0.9">
                                São Paulo Capital, São Paulo, Brasil
                            </S.ParagraphSm>

                            <S.ParagraphSm opacity="0.9">
                                Remoto - Junior - CLT
                            </S.ParagraphSm>

                            <S.LabelSm opacity="0.9">Há 22h</S.LabelSm>
                        </S.JobInfo>
                    </S.BoxJob>
                    <S.BoxJob>
                        <figure>
                            <S.CompanyImage src={Cognito} alt="cognito" />
                        </figure>

                        <S.JobInfo>
                            <S.ParagraphMd>
                                UI/UX Designer Junior - São Paulo
                            </S.ParagraphMd>

                            <S.ParagraphSm>Cognito</S.ParagraphSm>

                            <S.ParagraphSm opacity="0.9">
                                São Paulo Capital, São Paulo, Brasil
                            </S.ParagraphSm>

                            <S.ParagraphSm opacity="0.9">
                                Remoto - Junior - CLT
                            </S.ParagraphSm>

                            <S.LabelSm opacity="0.9">Há 22h</S.LabelSm>
                        </S.JobInfo>
                    </S.BoxJob>
                </S.ContainerAllJobs>

                <S.ContainerSelectedJob>
                    <S.HeaderSelectedJob>
                        <S.BoxHeaderSelectedJob>
                            <S.SubtitleSm>
                                UX Designer Junior - São Paulo
                            </S.SubtitleSm>

                            <S.InlineContent gap="4px">
                                <S.ParagraphSm color="#323232" weigth="500">
                                    Cognito
                                </S.ParagraphSm>

                                <S.ParagraphSm color="#323232" opacity="0.9">
                                    São Paulo Capital, São Paulo, Brasil
                                </S.ParagraphSm>
                            </S.InlineContent>

                            <S.InlineContent gap="4px">
                                <S.LabelSm> Há 22h - </S.LabelSm>
                                <S.LabelSm color="#323232">
                                    {' '}
                                    50 candidaturas
                                </S.LabelSm>
                            </S.InlineContent>
                        </S.BoxHeaderSelectedJob>

                        <div>
                            <S.Button>Candidatar-se</S.Button>
                        </div>
                    </S.HeaderSelectedJob>

                    <S.SelectedJobContent>
                        <S.InlineContent gap="8px">
                            <S.IconWork src={Work} alt="work" />

                            <S.Badge>
                                <S.ParagraphSm color="#001633">
                                    Tempo Integral
                                </S.ParagraphSm>
                            </S.Badge>
                            <S.Badge>
                                <S.ParagraphSm color="#001633">
                                    Remoto
                                </S.ParagraphSm>
                            </S.Badge>
                            <S.Badge>
                                <S.ParagraphSm color="#001633">
                                    Junior
                                </S.ParagraphSm>
                            </S.Badge>
                            <S.Badge>
                                <S.ParagraphSm color="#001633">
                                    CLT
                                </S.ParagraphSm>
                            </S.Badge>
                        </S.InlineContent>

                        <S.ParagraphMd>Descrição da vaga</S.ParagraphMd>

                        <S.ParagraphSm color="#515050">
                            Procuramos um profissional para ocupar a posição de
                            UX Designer em um cliente referência no setor de
                            produção de imunobiológicos (vacinas) e análises
                            laboratoriais veterinários.
                        </S.ParagraphSm>

                        <S.ParagraphSm color="#515050">
                            Culturalmente, procuramos uma pessoa que:
                        </S.ParagraphSm>

                        <S.List>
                            <li>seja curiosa por natureza</li>
                            <li>perfil mão na massa e ágil</li>
                            <li>sabe ouvir e se comunicar</li>
                            <li>
                                busca e tenha um histórico de aprendizado
                                contínuo;
                            </li>
                            <li>
                                busca e fomenta a colaboração, mas também tenha
                                as suas contribuições individuais inovadoras
                            </li>
                            <li>
                                entenda o objetivo e propósito da empresa, e
                                consiga atuar com autonomia dentro de suas
                                responsabilidades.
                            </li>
                        </S.List>
                        <S.ParagraphSm color="#515050">
                            Procuramos um profissional para ocupar a posição de
                            UX Designer em um cliente referência no setor de
                            produção de imunobiológicos (vacinas) e análises
                            laboratoriais veterinários.
                        </S.ParagraphSm>

                        <S.ParagraphSm color="#515050">
                            Culturalmente, procuramos uma pessoa que:
                        </S.ParagraphSm>

                        <S.List>
                            <li>seja curiosa por natureza</li>
                            <li>perfil mão na massa e ágil</li>
                            <li>sabe ouvir e se comunicar</li>
                            <li>
                                busca e tenha um histórico de aprendizado
                                contínuo;
                            </li>
                            <li>
                                busca e fomenta a colaboração, mas também tenha
                                as suas contribuições individuais inovadoras
                            </li>
                            <li>
                                entenda o objetivo e propósito da empresa, e
                                consiga atuar com autonomia dentro de suas
                                responsabilidades.
                            </li>
                        </S.List>
                        <S.ParagraphSm color="#515050">
                            Procuramos um profissional para ocupar a posição de
                            UX Designer em um cliente referência no setor de
                            produção de imunobiológicos (vacinas) e análises
                            laboratoriais veterinários.
                        </S.ParagraphSm>

                        <S.ParagraphSm color="#515050">
                            Culturalmente, procuramos uma pessoa que:
                        </S.ParagraphSm>

                        <S.List>
                            <li>seja curiosa por natureza</li>
                            <li>perfil mão na massa e ágil</li>
                            <li>sabe ouvir e se comunicar</li>
                            <li>
                                busca e tenha um histórico de aprendizado
                                contínuo;
                            </li>
                            <li>
                                busca e fomenta a colaboração, mas também tenha
                                as suas contribuições individuais inovadoras
                            </li>
                            <li>
                                entenda o objetivo e propósito da empresa, e
                                consiga atuar com autonomia dentro de suas
                                responsabilidades.
                            </li>
                        </S.List>
                    </S.SelectedJobContent>
                </S.ContainerSelectedJob>
            </S.SectionJob>
        </S.Container>
    );
};

export default FeedJobs;
