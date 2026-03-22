export type Language = 'da' | 'en' | 'de';

export interface Role {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
}

export interface PlayerRole {
  playerId: number;
  role: Role;
  color: string;
}
