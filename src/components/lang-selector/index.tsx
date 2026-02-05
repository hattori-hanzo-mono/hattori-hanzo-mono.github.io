import type {JSX} from 'react';
import {useCallback} from 'react';
import {useTranslation} from "react-i18next";
import {available as LANGUAGES_AVAILABLE, type TI18N} from "../../core/constants";
import './style.scss';

export default function LangSelector(): JSX.Element {
    const { i18n } = useTranslation();
    const onChangeLanguage= useCallback(
        ( event: React.MouseEvent<HTMLButtonElement> ) =>
            ( i18n.changeLanguage( event.currentTarget.dataset.lang! ) ),[ i18n ]
    ) ;
    return (
        <div className="lang-selector">
            { LANGUAGES_AVAILABLE.map( ( lang: TI18N, key: number ) => (
                <button key={ key } data-lang={ lang } onClick={ onChangeLanguage }>{ lang }</button>
            )) }
        </div>
    )
}