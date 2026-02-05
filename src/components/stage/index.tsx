import type {JSX} from 'react';
import {useTranslation} from "react-i18next";
import './style.scss';

export default function Stage(): JSX.Element {
    const {t} = useTranslation();
    return (
        <div className="stage">
            { t("key") }<b>{ t("value") }</b>
        </div>
    )
}