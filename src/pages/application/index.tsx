import type {JSX} from 'react';
import Sheet from "../../components/sheet";
import Toolbar from "../../components/toolbar";
import Hero from "../../sections/hero";
import './style.scss'

export default function Application(): JSX.Element {
    return (
        <div className="application">
            <Sheet>
                <Hero>
                    <Toolbar/>
                </Hero>
            </Sheet>
        </div>
    )
}