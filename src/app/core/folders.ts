import { TranslationKey } from './i18n/translations';

export type FolderKey =
  | 'inicio'
  | 'sobre'
  | 'projetos'
  | 'experiencia'
  | 'stack'
  | 'curiosidades'
  | 'contato';

export interface Folder {
  key: FolderKey;
  path: string;
  label: TranslationKey;
}

/** Ordem das abas. A cor de cada pasta vem de --color-folder-<key> (styles.css). */
export const FOLDERS: Folder[] = [
  { key: 'inicio', path: '/', label: 'nav.inicio' },
  { key: 'sobre', path: '/sobre', label: 'nav.sobre' },
  { key: 'projetos', path: '/projetos', label: 'nav.projetos' },
  { key: 'experiencia', path: '/experiencia', label: 'nav.experiencia' },
  { key: 'stack', path: '/stack', label: 'nav.stack' },
  { key: 'curiosidades', path: '/curiosidades', label: 'nav.curiosidades' },
  { key: 'contato', path: '/contato', label: 'nav.contato' },
];

export function folderColor(key: FolderKey): string {
  return `var(--color-folder-${key})`;
}
