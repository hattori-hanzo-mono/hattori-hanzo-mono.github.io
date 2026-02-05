import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import Application from './pages/application'
import "./core/i18n";
import './styles/global.scss'

function bootstrap(): void {
    const root: HTMLElement | null = document.getElementById('root')
    if( root ) {
        createRoot( root ! ).render(
            <StrictMode>
                <Application/>
            </StrictMode>
        )
    } else {
        throw new Error( 'Bootstrap([ error ]): "root" not found' )
    }
}

bootstrap() ;