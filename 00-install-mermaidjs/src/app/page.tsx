import MyMermaid from '@/components/MyMermaid';

const mermaidCode = `
erDiagram
    CUSTOMER }|..|{ DELIVERY-ADDRESS : has
    CUSTOMER ||--o{ ORDER : places
    CUSTOMER ||--o{ INVOICE : "liable for"
    DELIVERY-ADDRESS ||--o{ ORDER : receives
    INVOICE ||--|{ ORDER : covers
    ORDER ||--|{ ORDER-ITEM : includes
    PRODUCT-CATEGORY ||--|{ PRODUCT : contains
    PRODUCT ||--o{ ORDER-ITEM : "ordered in"
`.trim();

function App() {
    return (
        <div>
            {/* <h1>Install Mermaid.js</h1> */}

            <MyMermaid mermaidCode={mermaidCode} />
        </div>
    );
}

export default App;
