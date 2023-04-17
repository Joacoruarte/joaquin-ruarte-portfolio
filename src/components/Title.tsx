interface TitleProps {
  title: string;
  traduction?: string
}

export default function Title({ title , traduction = '' }: TitleProps) {
  return (
    <>
      <h1
        className={'title'}
      >
        {title}
      </h1>
      {traduction && <p className="traduction_title">{traduction}</p>}
    </>
  );
}
