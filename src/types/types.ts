
type Benefits = {
  benefits: string[];
  title: string;
};

type Owner = {
  benefits: Benefits;
  funding: string;
  companyName: string;
  rating: string;
  evaluatedSize: number | null;
  photo: string;
  locationAddress: string;
  teamSize: number;
  _id: string;
  locationCoordinates: unknown | null;
  isClaimed: boolean;
  slug: string;
  activated: boolean;
};

export type Job = {
  owner: Owner;
  createdAt: string;
  locationAddress: string;
  locationCoordinates: unknown | null;
  title: string;
  type: string;
  url: string;
  updatedAt: string;
  _id: string;
};