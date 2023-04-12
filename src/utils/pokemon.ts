export type StatsType = {
  base_stat?: number;
  name?: string;
  stat: { name: string; url: string };
};

export interface AbilitiesType {
  ability: { name: string; url: string };
}

export interface MovesType {
  move: { name: string; url: string };
}

export interface PokemonType {
  id?: number;
  url?: string;
  name?: string;
  height?: number;
  weight?: number;
  base_experience?: number;
  stats?: StatsType[];
  moves?: { results: MovesType[] };
  abilities?: { results: AbilitiesType[] };
}
