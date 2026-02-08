import Link from "next/link";
import { FaGithub, FaLinkedinIn} from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/marlonhario" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/marlon-hario/" },
  // { icon: <FaYoutube />, path: "" },
  // { icon: <FaTwitter />, path: "" },
];

const Social = ({
  containerStyles,
  iconStyles,
}: {
  containerStyles: string;
  iconStyles: string;
}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
