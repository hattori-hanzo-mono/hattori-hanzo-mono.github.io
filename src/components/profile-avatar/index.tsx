import type {JSX, PropsWithChildren} from 'react';
import image from "../../assets/profile-avatar.jpg";
import './style.scss';

export default function ProfileAvatar( props: PropsWithChildren ): JSX.Element {
    return (
        <div className="profile-avatar">
            <img src={ image } alt="profile-avatar" />
            { props.children  }
        </div>
    )
}