import type {JSX} from 'react';
import {useCallback} from 'react';
import {useTranslation} from "react-i18next";
import './style.scss';

export default function LangSelector(): JSX.Element {
    const { i18n, t } = useTranslation() ;
    const onChangeLanguage= useCallback(
        ( event: React.MouseEvent<HTMLElement> ) =>
        ( i18n.changeLanguage( event.currentTarget.dataset.lang ! ) ), [ i18n ]
    ) ;

    const Switcher = (): JSX.Element => (
        <>{ Object
                .keys( i18n.options.resources || {} )
                .map( ( lang, key ) => (
                    <p className="value"
                       key={ key }
                       data-selected={ lang === i18n.language }
                       data-lang={ lang }
                       onClick={ onChangeLanguage }
                    >{ i18n.getResource( lang, "dictionary", "id" ) }
                    </p> )
                )
        } </> ) ;

    return (
        <div className="lang-selector">
            <p className="label">{ t("language") }</p>
            <Switcher/>
        </div>
    )
}