type Title = {
  title: string;
};

export default function H3Title({ title }: Title) {
  return <h3 className="mt-3 mb-5 font-bold">{title}</h3>;
}
