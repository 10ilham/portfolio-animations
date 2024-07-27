import Image from "next/image";
import Link from "next/link";

type CertificateCardProps = {
  src: string;
  title: string;
  description: string;
  link?: string; // link is now optional
};

export const CertificateCard = ({
  src,
  title,
  description,
  link,
}: CertificateCardProps) => {
  const CardContent = () => (
    <>
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />
      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </>
  );

  return link ? (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]"
    >
      <CardContent />
    </Link>
  ) : (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <CardContent />
    </div>
  );
};
