'use client';

import {
    useState,
    useEffect,
    memo,
} from 'react';
import mermaid from 'mermaid';

type TMyMermaidProps = {
    mermaidCode: string;
};

function MyMermaid(props: TMyMermaidProps) {
    const {
        mermaidCode,
    } = props;

    const [mermaidSvgString, setMermaidSvgString] = useState<string | null>(null);

    useEffect(() => {
        mermaid.initialize({
            startOnLoad: true,
        });
    }, []);

    useEffect(() => {
        async function renderMermaidSvg() {
            const mermaidSvg = await mermaid.render(
                'chocobe-mermaid-id',
                mermaidCode
            );

            const {
                svg,
            } = mermaidSvg;

            setMermaidSvgString(svg);
        }

        renderMermaidSvg();
    }, [mermaidCode]);

    return (
        <div>
            {mermaidSvgString && (
                <div>
                    <pre dangerouslySetInnerHTML={{ __html: mermaidSvgString }} />
                </div>
            )}
        </div>
    );
}

export default memo(MyMermaid);
