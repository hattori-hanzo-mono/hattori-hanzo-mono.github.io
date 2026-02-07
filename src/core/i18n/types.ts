export type TI18N = typeof I18N[ keyof typeof I18N ] ;
export const I18N = {
    UA: 'ua',
    EN: 'en'
} as const ;

export const available: TI18N[] = [ I18N.UA, I18N.EN ] ;