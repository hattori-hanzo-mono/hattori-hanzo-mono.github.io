import type {JSX} from 'react';
import {useCallback} from 'react';
import {useTranslation} from "react-i18next";
import {available as LANGUAGES_AVAILABLE, I18N_LANGUAGES, type TI18N} from "../../core/i18n/types.ts";
import './style.scss';

export default function LangSelector(): JSX.Element {
    const { i18n, t } = useTranslation() ;
    const onChangeLanguage= useCallback(
        ( event: React.MouseEvent<HTMLElement> ) =>
            ( i18n.changeLanguage( event.currentTarget.dataset.lang! ) ), [ i18n ]
    ) ;
    return (
        <div className="lang-selector">
            <p className="label">{ t("language") }</p>
            { LANGUAGES_AVAILABLE.map( ( lang: TI18N, key: number ) => (
                <p className="value" key={ key } data-selected={ lang === i18n.language } data-lang={ lang } onClick={ onChangeLanguage }>{ I18N_LANGUAGES[ lang ] }</p>
            )) }
        </div>
    )
}