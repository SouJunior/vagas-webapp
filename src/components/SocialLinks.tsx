import * as S from './FooterDefault/styles';

type SocialLinksProps = {
  color: string;
};

const SocialLinks = ({ color }: SocialLinksProps) => {
    return (
        <>
            <li>
                <a
                    href="https://www.facebook.com/people/SouJunior/100086671131030/"
                    rel="noreferrer"
                    target="_blank"
                    className={`text-[${color}]`}
                >
                    <S.FacebookIcon />
                </a>
            </li>
            <li>
                <a
                    href="https://www.instagram.com/soujunior.tech/"
                    rel="noreferrer"
                    target="_blank"  
                    className={`text-[${color}]`}
                >
                    <S.InstagramIcon />
                </a>
            </li>
            <li>
                <a
                    href="https://www.youtube.com/@soujuniortech"
                    rel="noreferrer"
                    target="_blank"
                    className={`text-[${color}]`}
                >
                    <S.YouTubeIcon />
                </a>
            </li>
              <li>
                <a
                    href="https://www.tiktok.com/@soujuniortech/"
                    rel="noreferrer"
                    target="_blank"
                    className={`text-[${color}]`}
                >
                    <S.TikTokIcon />
                </a>
            </li>
            <li>
                <a
                    href="https://github.com/SouJunior"
                    rel="noreferrer"
                    target="_blank"
                    className={`text-[${color}]`}
                >
                    <S.GitHubIcon />
                </a>
            </li>
            <li>
                <a
                    href="https://www.linkedin.com/company/soujunior/"
                    rel="noreferrer"
                    target="_blank"
                    className={`text-[${color}]`}
                >
                    <S.LinkedInIcon />
                </a>
            </li>
            <li>
                <a
                    href="https://t.me/soujuniortech"
                    rel="noreferrer"
                    target="_blank"
                    className={`text-[${color}]`}
                >
                    <S.TelegramIcon />
                </a>
            </li>
        </>
    );
};

export default SocialLinks