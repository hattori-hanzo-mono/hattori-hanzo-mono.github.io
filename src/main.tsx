import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import Application from './pages/application'
import Stage from './components/stage'
import "./i18n";
import './styles/global.scss'

function bootstrap(): void {
    const root: HTMLElement | null = document.getElementById('root')
    if( root ) {
        createRoot( root ! ).render(
            <StrictMode>
                <Application>
                    <Stage/>
                </Application>
            </StrictMode>
        )
    } else {
        throw new Error( 'Bootstrap([ error ]): "root" not found' )
    }
}

bootstrap() ;