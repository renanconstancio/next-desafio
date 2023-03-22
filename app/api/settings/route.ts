import { NextResponse } from "next/server";

export async function GET(_req: Request) {
  return NextResponse.json({
    title: "string",
    fantasy_company: "Teste",
    business_name: "Teste",
    address: "Teste",
    phones: [
      { title: "whatsapp", number: "(16) 99999-9999", position: 2 },
      { title: "Fixo", number: "(16) 99999-9999", position: 1 },
    ],
    theme: [
      {
        color: "Teste",
      },
    ],
    payments: [
      {
        name: "Teste",
        discount: 1,
        minvalue: 1,
        maxinstallment: 1,
      },
    ],
  });
}
