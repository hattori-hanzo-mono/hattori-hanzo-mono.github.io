import {type TDataLoaderHook} from "./types";
import {useTranslation} from "react-i18next";

export function useDataLoader(): TDataLoaderHook {
    const { i18n } = useTranslation() ;
    async function getResource( id: string ): Promise<string> {
        const moduleURI: string = `/assets/data/${ i18n.language }/${ id }.md?raw` ;
        const module: any = await import( moduleURI ) ;
        return Promise.resolve( module.default as string );
    }

    return { getResource };
}
