import { ArrowRight } from "../../components/icons";

interface Experience {
  from: number;
  to: number | null;
  office: string;
}

interface Props {
  items: Experience[];
}

export default function Experiences({ items }: Props) {
  return (
    <section className="mb-8">
      <h4 className="font-extrabold text-lg mb-3">Experiences</h4>

      {items.map((exp) => {
        return (
          <div className="mt-2 flex" key={exp.office}>
            <div className="mr-3.5 text-[#5A5A5A]">
              <span>{exp.from}</span>
              <span className="mx-2">
                <ArrowRight color="#5A5A5A" />
              </span>
              <span>{exp.to || "Sekarang"}</span>
            </div>

            <div>{exp.office}</div>
          </div>
        );
      })}
    </section>
  );
}
