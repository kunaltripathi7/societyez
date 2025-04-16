export type SocietyDetails = {
  name: string;
  id: string;
  registrationDate: string;
  adminInCharge: string;
  address: {
    street: string;
    sector: string;
    city: string;
  };
};

export type TabData = {
  id: string;
  label: string;
  icon: React.ReactNode;
};
