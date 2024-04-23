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

export interface TypeAndRarity {
  name: string | undefined;
  id: number | undefined;
  value: string | undefined;
}


export interface PokemonCard {
  id: string;
  name: string;
  supertype: string;
  subtypes: string[];
  level: string;
  hp: string;
  types: string[];
  evolvesFrom: string;
  abilities: Ability[];
  attacks: Attack[];
  weaknesses: Weakness[];
  retreatCost: string[];
  convertedRetreatCost: number;
  set: Set;
  number: string;
  artist: string;
  rarity: string;
  flavorText: string;
  nationalPokedexNumbers: number[];
  legalities: Legalities;
  images: Images2;
  tcgplayer: Tcgplayer;
  cardmarket: Cardmarket;
}

interface Cardmarket {
  url: string;
  updatedAt: string;
  prices: Prices2;
}

interface Prices2 {
  averageSellPrice: number;
  lowPrice: number;
  trendPrice: number;
  germanProLow: number;
  suggestedPrice: number;
  reverseHoloSell: number;
  reverseHoloLow: number;
  reverseHoloTrend: number;
  lowPriceExPlus: number;
  avg1: number;
  avg7: number;
  avg30: number;
  reverseHoloAvg1: number;
  reverseHoloAvg7: number;
  reverseHoloAvg30: number;
}

interface Tcgplayer {
  url: string;
  updatedAt: string;
  prices: Prices;
}

interface Prices {
  holofoil: Holofoil;
}

interface Holofoil {
  low: number;
  mid: number;
  high: number;
  market: number;
  directLow: null;
}

interface Images2 {
  small: string;
  large: string;
}

interface Set {
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

interface Weakness {
  type: string;
  value: string;
}

interface Attack {
  name: string;
  cost: string[];
  convertedEnergyCost: number;
  damage: string;
  text: string;
}

interface Ability {
  name: string;
  text: string;
  type: string;
}


