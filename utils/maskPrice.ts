export const maskPrice = (str: number): string => {
  // return String(str).replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

  const numero = str.toFixed(2).split(".");
  numero[0] = "R$ " + numero[0].split(/(?=(?:...)*$)/).join(".");
  return numero.join(",");
};
