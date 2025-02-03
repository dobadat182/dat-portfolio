export type Project = {
  title?: string;
  shortName?: string;
  description?: string;
  startDate?: Date;
  endDate?: Date;
  status: string;
  image?: string;
  url?: string | null;
  technology: string[];
};
