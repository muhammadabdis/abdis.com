interface Props {
  title: string;
  description: React.ReactElement;
  callToAction?: React.ReactNode;
}

export default function Hero(props: Props) {
  return (
    <header className="py-6 px-6">
      <h1 className="font-extrabold text-2xl">{props.title}</h1>

      <p className="text-xl mt-4">{props.description}</p>

      <div className="mt-4">{props.callToAction}</div>
    </header>
  );
}
