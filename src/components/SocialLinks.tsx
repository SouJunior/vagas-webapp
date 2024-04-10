import * as S from './FooterDefault/styles';


const SocialLinks = () => {
    return (
        <>
            <li>
                <a
                    href="https://www.facebook.com/people/SouJunior/100086671131030/"
                    rel="noreferrer"
                    target="_blank"
                >
                    <S.FacebookIcon />
                </a>
            </li>
            <li>
                <a
                    href="https://www.instagram.com/soujunior.tech/"
                    rel="noreferrer"
                    target="_blank"
                >
                    <S.InstagramIcon />
                </a>
            </li>
            <li>
                <a
                    href="https://www.youtube.com/@soujuniortech"
                    rel="noreferrer"
                    target="_blank"
                >
                    <S.YouTubeIcon />
                </a>
            </li>
            <li>
                <a
                    href="https://www.linkedin.com/company/soujunior/"
                    rel="noreferrer"
                    target="_blank"
                >
                    <S.LinkedInIcon />
                </a>
            </li>
            <li>
                <a
                    href="https://github.com/SouJunior"
                    rel="noreferrer"
                    target="_blank"
                >
                    <S.GitHubIcon />
                </a>
            </li>

            <li>
                <a
                    href="https://t.me/soujuniortech"
                    rel="noreferrer"
                    target="_blank"
                >
                    <S.TelegramIcon />
                </a>
            </li>
        </>
    );
};

export default SocialLinks