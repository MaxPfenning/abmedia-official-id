import { de } from './de';
import { en } from './en';

export const translations = { de, en };
export type Language = 'de' | 'en';
export type TranslationKeys = typeof en;
