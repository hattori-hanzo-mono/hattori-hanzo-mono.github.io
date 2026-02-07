import type {JSX} from 'react';
import LangSelector from "../lang-selector";
import ThemeSelector from "../theme-selector";
import './style.scss';

export default function Toolbar(): JSX.Element {
    return (
        <div className="toolbar">
            <div className="left">
                <LangSelector/>
            </div>
            <div className="right">
                <ThemeSelector/>
            </div>
        </div>
    )
}