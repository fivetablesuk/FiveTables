export const SECTORS = [
  { value: "medicine-dentistry", label: "I — Medicine & Dentistry" },
  { value: "law-legal", label: "II — Law & Legal Services" },
  { value: "banking-finance-fintech", label: "III — Banking, Finance & FinTech" },
  { value: "technology-engineering", label: "IV — Technology & Engineering" },
  { value: "business-leadership", label: "V — Business & Leadership" },
] as const;

export type SectorValue = (typeof SECTORS)[number]["value"];
