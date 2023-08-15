'use client';

// react
import {
    useState,
    useCallback,
    useEffect,
    memo,
} from 'react';
// mermaidjs
import mermaid from 'mermaid';

type TMyMermaidProps = {
    id: string;
    mermaidCode: string;
};

function MyMermaid(props: TMyMermaidProps) {
    const {
        id,
        mermaidCode,
    } = props;

    //
    // state
    //
    const [mermaidSvgString, setMermaidSvgString] = useState<string | null>(null);

    const renderMermaidCode = useCallback(async () => {
        if (!mermaidCode) {
            return;
        }

        const {
            svg,
        } = await mermaid.render(id, mermaidCode);

        setMermaidSvgString(svg);
    }, [id, mermaidCode]);

    //
    // effect
    //
    useEffect(function initMermaid() {
        mermaid.initialize({
            startOnLoad: true,
        });
    }, []);

    useEffect(function renderMermaidSvg() {
        renderMermaidCode();
    }, [renderMermaidCode]);

    if (!mermaidSvgString) {
        return null;
    }

    return (
        <pre
            className="mermaid"
            dangerouslySetInnerHTML={{ __html: mermaidSvgString }} />
    );
}

export default memo(MyMermaid);
