import type {JSX} from 'react';
import './style.scss'

export default function Title(): JSX.Element {
    return (
        <div className="title">
            <h3>Мыльченко Александр</h3>
            <p>const<span>антинович</span></p>
        </div>
    )
}