import {type TDataLoaderHook} from "./types";
import {useTranslation} from "react-i18next";

const mdModules = import.meta.glob("../../data/**/*.md", { as: "raw" });
export function useDataLoader(): TDataLoaderHook {
    const { i18n } = useTranslation() ;
    async function getResource( id: string ): Promise<string> {
        const path = `../../data/${ i18n.language }/${ id }.md`;
        const loader = mdModules[path];
        return loader ? await loader() : "?";
    }

    return { getResource };
}
