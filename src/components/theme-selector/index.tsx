import type {JSX} from 'react';
import {useColorScheme} from "../../hooks/color-theme";
import './style.scss'

export default function ThemeSelector(): JSX.Element {
    const { scheme, toggle } = useColorScheme();
    return (
        <div className="theme-selector" onClick={ toggle }>
            color theme: <b>{ scheme }</b>
        </div>
    )
}