import type {JSX} from 'react';
import {useColorScheme} from "../../hooks/color-theme";
import {useTranslation} from "react-i18next";
import './style.scss'

export default function ThemeSelector(): JSX.Element {
    const { t } = useTranslation() ;
    const { scheme, toggle } = useColorScheme();
    return (
        <div className="theme-selector">
            <p className="label">{ t("colorScheme") }</p>
            <p className="value" onClick={ toggle }>{ scheme }</p>
        </div>
    )
}