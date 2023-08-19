// UI component
import MyMermaid from '@/components/MyMermaid/MyMermaid';

const mermaidCode = `
flowchart LR
  hello
  world

  hello -- 헬로 --> world
`;

function Home() {
  return (
    <div>
      <MyMermaid mermaidCode={mermaidCode} />
    </div>
  );
}

export default Home;
