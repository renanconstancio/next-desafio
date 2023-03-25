export type Setting = {
  title: string;
  fantasy_company: string;
  business_name: string;
  address: string;
  phones: [{ title: string; number: string; position: number }];
  theme: [
    {
      color: string;
    },
  ];
  payments: [
    {
      name: string;
      discount: number;
      minvalue: number;
      maxinstallment: number;
    },
  ];
};
