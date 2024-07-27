import { CertificateCard } from "@/components/sub/certificate-card";
import { CERTIFICATE, CERTIFICATE2, CERTIFICATE3 } from "@/constants";

export const Certificate = () => {
  return (
    <section
      id="certificate"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Certificate
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        {CERTIFICATE.map((certificate) => (
          <CertificateCard
            key={certificate.title}
            src={certificate.image}
            title={certificate.title}
            description={certificate.description}
            link={certificate.link ? certificate.link : undefined}
          />
        ))}
      </div>
      <br />

      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        {CERTIFICATE2.map((certificate) => (
          <CertificateCard
            key={certificate.title}
            src={certificate.image}
            title={certificate.title}
            description={certificate.description}
            link={certificate.link ? certificate.link : undefined}
          />
        ))}
      </div>
      <br />

      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        {CERTIFICATE3.map((certificate) => (
          <CertificateCard
            key={certificate.title}
            src={certificate.image}
            title={certificate.title}
            description={certificate.description}
            link={certificate.link ? certificate.link : undefined}
          />
        ))}
      </div>
    </section>
  );
};
