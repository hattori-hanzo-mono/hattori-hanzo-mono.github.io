import type {JSX, PropsWithChildren} from 'react';
import './style.scss';

export default function Wrapper( props: PropsWithChildren ): JSX.Element {
    return (
        <div className="wrapper">
            { props.children  }
        </div>
    )
}