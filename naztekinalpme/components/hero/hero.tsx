import Link from "next/link";
import Image from "next/image";
import style from "./hero.module.scss";
import GitHubIcon from "../../assets/icons/github.svg";
import MailIcon from "../../assets/icons/mail.svg";
import MediumIcon from "../../assets/icons/medium.svg";
import LinkedInIcon from "../../assets/icons/linkedin.svg";
import { Tooltip } from "@nextui-org/react";
import { useState } from "react";

const Hero = () => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const tooltipContent = (
    <div
      style={{
        fontSize: "12px",
        lineHeight: "1.5",
        textAlign: "center",
      }}
    >
      {isCopied ? (
        <div>Successfully copied!</div>
      ) : (
        <div>Click to copy to clipboard</div>
      )}
      {!isCopied && <div>tekinalpnaz@gmail.com</div>}
    </div>
  );

  return (
    <div className={style.hero__container}>
      <h1 className={style.hero__title}>
        Hey, I’m Naz Tekinalp, a Software QA Engineer.
      </h1>

      <p className={style.hero__subtitle}>
        Currently I’m working at EPAM Systems as Software QA Engineer
      </p>

      <div className={style.hero__links}>
        <Link href="https://github.com/naztekinalp" passHref>
          <a target="_blank" rel="noreferrer noopener">
            <Image src={GitHubIcon} alt="GitHub" />
          </a>
        </Link>
        <Tooltip content={tooltipContent}>
          <Image
            style={{ cursor: "pointer" }}
            src={MailIcon}
            alt="Mail"
            height={27}
            width={33}
            onClick={() => {
              navigator.clipboard.writeText("tekinalpnaz@gmail.com");
              setIsCopied(true);
            }}
            onMouseLeave={() => setTimeout(() => setIsCopied(false), 150)}
          />
        </Tooltip>
        <Link href="https://medium.com/@naztekinalp" passHref>
          <a target="_blank" rel="noreferrer noopener">
            <Image src={MediumIcon} alt="Medium" />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/naztekinalp/" passHref>
          <a target="_blank" rel="noreferrer noopener">
            <Image src={LinkedInIcon} alt="LinkedIn" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
