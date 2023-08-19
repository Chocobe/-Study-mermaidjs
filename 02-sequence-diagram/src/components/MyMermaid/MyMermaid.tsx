'use client';

// react
import {
    useState,
    useEffect,
    memo,
} from 'react';
// mermaid
import mermaid from 'mermaid';

type TMyMermaidProps = {
    id?: string;
    mermaidCode: string;
};

function MyMermaid(props: TMyMermaidProps) {
    const {
        id = 'myMermaid',
        mermaidCode,
    } = props;

    //
    // state
    //
    const [mermaidSvgString, setMermaidSvgString] = useState<string | null>(null);

    //
    // effect
    //
    useEffect(function initMermaid() {
        mermaid.initialize({
            startOnLoad: true,
        });
    }, []);

    useEffect(function initMermaidCode() {
        async function renderMermaidCode() {
            const {
                svg,
            } = await mermaid.render(id, mermaidCode);

            setMermaidSvgString(svg);
        }

        renderMermaidCode();
    }, [id, mermaidCode]);

    if (!mermaidSvgString) {
        return null;
    }

    return (
        <div>
            <pre 
                className="mermaid" 
                dangerouslySetInnerHTML={{ __html: mermaidSvgString }} />
        </div>
    );
}

export default memo(MyMermaid);
