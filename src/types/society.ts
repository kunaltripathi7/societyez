// src/types/society.ts

import { ReactNode } from "react";

export interface SocietyData {
  name: string;
  id: string;
  registrationDate: string;
  adminInCharge: string;
  address: {
    street: string;
    sector: string;
    city: string;
  };
}

export interface Tab {
  id: string;
  label: string;
  icon: ReactNode;
}

export interface TabNavigationProps {
  activeTab: string;
  tabs: Tab[];
  onTabChange: (tabId: string) => void;
}

export interface CardProps {
  title: string;
  children: ReactNode;
}

export interface InfoRowProps {
  label: string | null;
  value: string;
}

export interface OutletContextType {
  societyData: SocietyData;
}
