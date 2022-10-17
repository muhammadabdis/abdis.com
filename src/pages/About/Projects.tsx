import { Link } from "../../components/base";

interface Project {
  name: string;
  url: string;
  description: string;
}

interface Props {
  items: Project[];
}

export default function Projects({ items }: Props) {
  return (
    <section>
      <h4 className="font-extrabold text-lg mb-3">Projects</h4>

      {items.map((project) => {
        return (
          <div className="mb-5">
            <div>
              <Link
                href={project.url}
                className="uppercase"
                target="_blank"
                rel="noreferrer"
              >
                {project.name}
              </Link>
            </div>

            <p className="mt-2">{project.description}</p>
          </div>
        );
      })}
    </section>
  );
}
