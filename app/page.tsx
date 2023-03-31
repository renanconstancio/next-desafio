"use client";
import { Button } from "@components/Button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function PageHome() {
  const { push } = useRouter();

  const [location, setLocation] = useState<string>();

  useEffect(() => setLocation(window.location.host), []);

  return (
    <div className="flex flex-1 flex-col items-center justify-center min-h-screen">
      <section className="container p-9 text-center">
        <h1 className="font-lato text-3xl">Bem Vindo!!!</h1>
        <p>Para acessar, clique no link abaixo</p>
        <Button
          size="lg"
          variant="primary"
          onClick={() => push(`//sistema.${location}`)}
          type="button"
        >
          acessar sistema
        </Button>
      </section>
    </div>
  );
}
