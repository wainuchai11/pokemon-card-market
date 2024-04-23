export interface CardSet {
  id: string;
  name: string;
  series: string;
  printedTotal: number;
  total: number;
  legalities: Legalities;
  ptcgoCode: string;
  releaseDate: string;
  updatedAt: string;
  images: Images;
}

interface Images {
  symbol: string;
  logo: string;
}

interface Legalities {
  unlimited: string;
}

