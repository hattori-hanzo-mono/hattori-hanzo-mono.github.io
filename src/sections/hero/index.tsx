import type {JSX, PropsWithChildren} from 'react';
import ProfileAvatar from "../../components/profile-avatar";
import Wrapper from "../../components/wrapper";
import Title from "./title";
import MarkdownContent from "../../components/markdown-content";
import './style.scss'

export default function Hero( props: PropsWithChildren ): JSX.Element {
    return (
        <>
            { props.children  }
            <div className="hero">
                <div className="left">
                    <ProfileAvatar/>
                    <Wrapper>
                        <Title/>
                    </Wrapper>
                </div>
                <div className="context">
                    <Wrapper>
                        <MarkdownContent id="hero.about" />
                    </Wrapper>
                </div>
            </div>
        </>
    )
}