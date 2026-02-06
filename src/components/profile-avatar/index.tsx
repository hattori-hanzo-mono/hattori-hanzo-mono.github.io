import type {JSX} from 'react';
import image from "../../assets/profile-avatar.jpg";
import './style.scss';

export default function ProfileAvatar(): JSX.Element {
    return (
        <div className="profile-avatar">
            <img src={ image } alt="profile-avatar" />
        </div>
    )
}