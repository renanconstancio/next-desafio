"use client";
import { Button } from "@components/Button";
import { useRouter } from "next/navigation";

export default function PageHome() {
  const location = window.location.host;

  const { push } = useRouter();

  return (
    <section className="container p-9 text-center">
      <h1 className="font-lato text-3xl">Não há nada por aqui!!!</h1>
      <p>Que tal você tentar algo como</p>
      <Button
        size="xs"
        variant="primary"
        onClick={() => push(`//acme.${location}`)}
        type="button"
      >
        {`acme.${location}`}
      </Button>
      <br />
      <Button
        size="xs"
        variant="secondary"
        onClick={() => push(`//acme.${location}`)}
        type="button"
      >
        {`acme.${location}`}
      </Button>
    </section>
  );
}
