export const SUMAR = "SUMAR";
export const RESTAR = "RESTAR";
export const MULTIPLICAR = "MULTIPLICAR";
export const DIVIDIR = "DIVIDIR";
export const VALUEX = "VALUEX";
export const VALUEY = "VALUEY";

export const operation = (value) => {
  return { type: value };
};

export const change = (event) => {
  return { type: event.target.name.toUpperCase(), item: event.target.value };
};
