import './style.scss'
import type {JSX, PropsWithChildren} from 'react';

export default function Application( props: PropsWithChildren ): JSX.Element {
    return ( <div id="application">{ props.children }</div> )
}