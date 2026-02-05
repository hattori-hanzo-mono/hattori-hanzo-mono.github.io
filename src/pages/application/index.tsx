import type {JSX} from 'react';
import Stage from '../../components/stage'
import './style.scss'

export default function Application(): JSX.Element {
    return (
        <div id="application">
            <Stage/>
        </div>
    )
}