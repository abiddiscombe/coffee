import {
  CloudSunIcon,
  HeartHandshakeIcon,
  LaptopIcon,
  PawPrintIcon,
  StampIcon,
  WifiIcon,
  WineIcon,
} from "lucide-react";

export interface FilterEntry {
  id: string;
  icon: React.ReactElement;
  label: string;
}

export const filters: FilterEntry[] = [
  {
    id: "in",
    icon: <HeartHandshakeIcon />,
    label: "Independent",
  },
  {
    id: "ls",
    icon: <StampIcon />,
    label: "Loyalty Scheme",
  },
  {
    id: "fi",
    icon: <WifiIcon />,
    label: "Customer Wi-Fi",
  },
  {
    id: "lw",
    icon: <LaptopIcon />,
    label: "Laptops Welcome",
  },
  {
    id: "dw",
    icon: <PawPrintIcon />,
    label: "Dogs Welcome",
  },
  {
    id: "os",
    icon: <CloudSunIcon />,
    label: "Outside Seating",
  },
  {
    id: "lp",
    icon: <WineIcon />,
    label: "Licensed Premises",
  },
];
