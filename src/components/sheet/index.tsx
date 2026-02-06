import type {JSX, PropsWithChildren} from 'react';
import './style.scss';

export default function Sheet( props: PropsWithChildren ): JSX.Element {
    return (
        <div className="sheet">
            { props.children }
        </div>
    )
}