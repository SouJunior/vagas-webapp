import { TiSocialFacebook } from 'react-icons/ti';
import { RiInstagramFill } from 'react-icons/ri';
import { BsYoutube, BsTelegram, BsGithub } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { SiTiktok } from 'react-icons/si';

const SocialLinks = () => {
    const iconStyle = 'w-5 h-5 text-[#666]';

    return (
        <ul className="flex flex-wrap gap-3 w-40 -ml-2">
            <li className="list-none">
                <a
                    href="https://www.facebook.com/people/SouJunior/100086671131030/"
                    rel="noreferrer"
                    target="_blank"
                >
                    <TiSocialFacebook className={iconStyle} />
                </a>
            </li>
            <li className="list-none">
                <a
                    href="https://www.instagram.com/soujunior.tech/"
                    rel="noreferrer"
                    target="_blank"
                >
                    <RiInstagramFill className={iconStyle} />
                </a>
            </li>
            <li className="list-none">
                <a
                    href="https://www.youtube.com/@soujuniortech"
                    rel="noreferrer"
                    target="_blank"
                >
                    <BsYoutube className={iconStyle} />
                </a>
            </li>
            <li className="list-none">
                <a
                    href="https://www.tiktok.com/@soujuniortech/"
                    rel="noreferrer"
                    target="_blank"
                >
                    <SiTiktok className={iconStyle} />
                </a>
            </li>
            <li className="list-none">
                <a
                    href="https://github.com/SouJunior"
                    rel="noreferrer"
                    target="_blank"
                >
                    <BsGithub className={iconStyle} />
                </a>
            </li>
            <li className="list-none">
                <a
                    href="https://www.linkedin.com/company/soujunior/"
                    rel="noreferrer"
                    target="_blank"
                >
                    <AiFillLinkedin className={iconStyle} />
                </a>
            </li>
            <li className="list-none">
                <a
                    href="https://t.me/soujuniortech"
                    rel="noreferrer"
                    target="_blank"
                >
                    <BsTelegram className={iconStyle} />
                </a>
            </li>
        </ul>
    );
};

export default SocialLinks;
