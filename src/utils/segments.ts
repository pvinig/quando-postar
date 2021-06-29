const segments = [
  {
    id: "healthcare",
    label: "Saúde",
  },
  {
    id: "media",
    label: "Imprensa",
  },
  {
    id: "education",
    label: "Educação",
  },
  {
    id: "nonprofit",
    label: "ONGs",
  },
  {
    id: "restaurants",
    label: "Restaurantes",
  },
  {
    id: "tech",
    label: "Tecnologia",
  },
  {
    id: "travel",
    label: "Turismo",
  },
  {
    id: "finances",
    label: "Finanças",
  },
  {
    id: "hospitality",
    label: "Hospedaria",
  },
  {
    id: "others",
    label: "Outros",
  },
];

export const getSegment = (value) => segments.find(({ id }) => id === value);

export default segments;
