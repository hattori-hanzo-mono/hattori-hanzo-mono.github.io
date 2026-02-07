export type TI18N = typeof I18N[ keyof typeof I18N ] ;

export const I18N = {
  UA: 'ua',
  EN: 'en'
} as const ;

export const I18N_LANGUAGES: Record<TI18N, string> = {
  [I18N.UA]: 'українська',
  [I18N.EN]: 'english'
} as const;

export const available: TI18N[] = [ I18N.UA, I18N.EN ] ;