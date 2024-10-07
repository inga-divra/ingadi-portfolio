import Link from "next/link"
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: 'https://github.com/inga-divra' },
    { icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/inga-divra-b15532219/' },
    { icon: <FaInstagram />, path: 'https://www.instagram.com/inga.divra/' },
];

const Socials = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((social, index) => {
                return (
                    <Link
                        className={iconStyles}
                        key={index}
                        href={social.path}
                        target='_blank'
                        rel='noopener noreferrer' >
                        {social.icon}
                    </Link>
                );
            })}
        </div>
    );
}

export default Socials
