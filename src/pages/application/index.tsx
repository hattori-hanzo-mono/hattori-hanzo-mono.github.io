import type {JSX} from 'react';
import Stage from '../../components/stage'
import ThemeSelector from "../../components/theme-selector";
import LangSelector from "../../components/lang-selector";
import './style.scss'

export default function Application(): JSX.Element {
    return (
        <div className="application">
            <Stage/>
            <LangSelector/>
            <ThemeSelector/>
        </div>
    )
}