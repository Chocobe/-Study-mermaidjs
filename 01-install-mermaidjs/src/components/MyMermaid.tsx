'use client';

import {
    useState,
    useEffect,
    memo,
} from 'react';
import mermaid from 'mermaid';

type TMyMermaidProps = {
    chartString: string;
};

function MyMermaid(props: TMyMermaidProps) {
    const {
        chartString,
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
                chartString
            );

            const {
                svg,
            } = mermaidSvg;

            setMermaidSvgString(svg);
        }

        renderMermaidSvg();
    }, [chartString]);

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
