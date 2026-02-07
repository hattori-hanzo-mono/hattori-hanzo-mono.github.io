import type {JSX} from 'react';
import { useEffect, useState } from 'react';
import type {TMarkdownLayoutProps} from "./types.ts";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";
import {useDataLoader} from "../../hooks/data-loader";
import {useTranslation} from "react-i18next";
import './style.scss';

export default function MarkdownContent( props: TMarkdownLayoutProps ): JSX.Element {
    const { id } = props ;
    const [ md, setMarkdownData ] = useState<string>() ;
    const { i18n } = useTranslation() ;
    const { getResource } = useDataLoader() ;

    async function load(): Promise<void> {
        setMarkdownData( await getResource( id ) ) ;
    }

    useEffect(() => { load() }, [ i18n.language ]);

    return (
        <div className="markdown-layout">
            <ReactMarkdown remarkPlugins={[ remarkGfm ]} rehypePlugins={[ rehypeSanitize ]}>
                { md }
            </ReactMarkdown>
        </div>
    )
}