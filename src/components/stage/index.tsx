import type {JSX} from 'react';
import { useTranslation } from "react-i18next";
import './style.scss'

export default function Stage(): JSX.Element {
    const { t, i18n } = useTranslation();
    return (
        <div id="stage">
            { t("title") }
            <br/>
            <button onClick={() => i18n.changeLanguage("ua")}>ua</button>
            <button onClick={() => i18n.changeLanguage("en")}>en</button>
        </div>
    )
}