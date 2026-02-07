import {useCallback, useEffect, useState} from "react";
import {SCHEMES, type TScheme} from "./types.ts";

const SELECTOR_TEMPLATE: string = `(prefers-color-scheme: ${ SCHEMES.DARK })` ;
const SELECTOR_COLOR_SCHEME: string = `color-scheme` ;

const getSystemSchemeByDefault = (): TScheme => window.matchMedia( SELECTOR_TEMPLATE ).matches ? SCHEMES.DARK : SCHEMES.LIGHT ;

export function useColorScheme() {
    const [scheme, setScheme] = useState<TScheme>(() => {
        const saved = localStorage.getItem( SELECTOR_COLOR_SCHEME ) as TScheme | null;
        return saved ?? getSystemSchemeByDefault() ;
    });

    // применяем в DOM
    useEffect(() => {
        document.documentElement.style.colorScheme = scheme;
        document.documentElement.dataset.theme = scheme ;
        localStorage.setItem( SELECTOR_COLOR_SCHEME, scheme );
    }, [scheme]);

    // реакция на смену темы ОС
    useEffect(() => {
        const media = window.matchMedia(SELECTOR_TEMPLATE);
        const listener = () => {
            const saved = localStorage.getItem(SELECTOR_COLOR_SCHEME);
            if ( ! saved ) setScheme(getSystemSchemeByDefault());
        };

        media.addEventListener("change", listener);
        return () => media.removeEventListener("change", listener);
    }, []);

    const toggle = useCallback(() => { setScheme(prev => (prev === SCHEMES.DARK ? SCHEMES.LIGHT : SCHEMES.DARK)) }, []);
    const setDark = useCallback(() => setScheme( SCHEMES.DARK ), []);
    const setLight = useCallback(() => setScheme( SCHEMES.LIGHT ), []);

    return { scheme, toggle, setDark, setLight };
}
