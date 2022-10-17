import { Link } from "../../components/base";

import BackgroundDescription from "./BackgroundDescription";
import Experiences from "./Experiences";
import Projects from "./Projects";

export function About() {
  const experiences = [
    { from: 2022, to: null, office: "Awan Digital" },
    { from: 2019, to: 2021, office: "MGG Software" },
    { from: 2018, to: 2019, office: "UMB Techno Creative" },
  ];

  const projects = [
    {
      name: "Kyoo",
      url: "https://kyoo.id",
      description:
        "Platform manajemen antrian yang didesain untuk menambah efisiensi proses operasional dan meningkatkan pengalaman pengunjung.",
    },
    {
      name: "CTR",
      url: "https://psa-portal-eservices.cdaslink.sg",
      description:
        "CTR dikembangkan untuk membantu perusahaan transporter melacak status pengiriman kargo dan menyediakan monitoring lokasi secara realtime melalui visualisasi map.",
    },
    {
      name: "CDAS ePayment",
      url: "https://dashboard.eservices.cdas.link",
      description:
        "Sebuah aplikasi pencatat total tagihan driver truk di depot yang memberikan kemudahan kepada perusahaan transporter melakukan pembayaran tagihan secara digital.",
    },
  ];

  return (
    <>
      <BackgroundDescription
        title="I Code And I Love It"
        description={
          <>
            <p className="mb-4">
              Saya biasa dipanggil <strong>Abdis</strong>. Saya adalah seorang
              Fullstack Web Developer berasal dari kota kecil di Jawa Timur —{" "}
              <Link
                href="https://id.wikipedia.org/wiki/Kabupaten_Lumajang"
                target="_blank"
                rel="noreferrer"
              >
                Lumajang
              </Link>
              .
            </p>

            <p>
              Pada tahun 2018 Saya lulus dari SMK Negeri 1 Lumajang dan
              memutuskan bekerja di perusahaan konsultan IT. Melalui pengalaman
              tersebut Saya banyak berkembang sebagai programmer.
            </p>
          </>
        }
      />

      <div className="pt-4 px-6">
        <Experiences items={experiences} />

        <Projects items={projects} />
      </div>
    </>
  );
}
