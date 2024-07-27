import { link } from "fs";
import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
  RxFigmaLogo,
} from "react-icons/rx";

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/10ilham.m/",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://www.facebook.com/10ilhamm/",
  },
  {
    name: "Github",
    icon: RxGithubLogo,
    link: "https://github.com/10ilham",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },

  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const CERTIFICATE = [
  {
    title: "Database Design Course Completion",
    description:
      "Certificate DD Database Design Learner Course Completion Oracle Academy",
    image: "/certificate/course_database.jpg",
    link: "",
  },
  {
    title: "Final Exam Database Design",
    description:
      "Certificate Final Exam DD Database Design Learner Oracle Academy",
    image: "/certificate/finalexam.jpg",
    link: "",
  },
  {
    title: "Database Programming with SQL Course Completion",
    description:
      "Certificate DP Database Programming with SQL Learner Oracle Academy",
    image: "/certificate/course_sql.jpg",
    link: "",
  },
  {
    title: "Final Exam Database Programming with SQL",
    description:
      "Certificate Final Exam DP Database Programming with SQL Learner Oracle Academy",
    image: "/certificate/course_sql.jpg",
    link: "",
  },
] as const;

export const CERTIFICATE2 = [
  {
    title: "Computer Hardware Course Completion",
    description:
      "Certificate of Course Completion Computer Hardware Cisco Networking Academy",
    image: "/certificate/computer.jpg",
    link: "https://www.credly.com/badges/e77749c8-c389-4b0f-97aa-77aa142a8c57/public_url",
  },
  {
    title: "Operating System Course Completion",
    description:
      "Certificate of Course Completion Operating System Cisco Networking Academy",
    image: "/certificate/operatingsystem.jpg",
    link: "https://www.credly.com/badges/f94ea99f-484b-4fb3-a4d4-d05a13dd9401/public_url",
  },
  {
    title: "Credential Completing Introduction to Network",
    description:
      "Certificate Credential Completing Introduction to Network Cisco Networking Academy",
    image: "/certificate/credential_cisco.jpg",
    link: "https://www.credly.com/badges/07d8509e-1850-4d60-a3a7-e76ea29057d6/public_url",
  },
  {
    title: "NDG Linux Unhatched",
    description:
      "Certificate Completing NDG Linux Unhatched course in Cisco Networking Academy",
    image: "/certificate/linux.jpg",
    link: "",
  },
] as const;

export const CERTIFICATE3 = [
  {
    title: "Junior Web Developer",
    description: "Certificate Training Junior Web Developer Kominfo",
    image: "/certificate/jwd.png",
    link: "https://digitalent.kominfo.go.id/cek-sertifikat?registrasi=19362591110-20",
  },
  {
    title: "Programming and Software Development",
    description: "Certificate of Competence Junior Web Developver BNSP",
    image: "/certificate/bnsp.png",
    link: "",
  },
  {
    title: "MikroTik Certified Network Associate",
    description: "Certificate MikroTik Certified Network Associate",
    image: "/certificate/mtcna.png",
    link: "",
  },
] as const;

export const PROJECTS = [
  {
    title: "Sistem Informasi Kuesioner Prodi",
    description: "Aplications Sistem Informasi Kuesioner Prodi Website Based",
    image: "/projects/kuesioner.png",
    link: "",
  },
  {
    title: "Sistem Informasi Rawat Inap",
    description: "Aplications Sistem Informasi Rawat Inap Website Based",
    image: "/projects/sistemrawatinap.png",
    link: "",
  },
  {
    title: "Sistem Informasi Manajemen Puskesmas",
    description:
      "Aplications Sistem Informasi Manajemen Puskesmas Desktop Based",
    image: "/projects/simapus.png",
    link: "https://e-hakcipta.dgip.go.id/index.php/c?code=ZmMwMWQzY2JhZWRkZWI3MGY4ODZjYmQ2YmZkMTNiM2QK",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/10ilham",
      },
      {
        name: "Figma",
        icon: RxFigmaLogo,
        link: "https://www.figma.com/@ilhammunawar",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://www.instagram.com/10ilham.m/",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://x.com/10iIlham",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/ilhammunawar/",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Certificate",
    link: "#certificate",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;
