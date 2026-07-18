import MermaidRenderer from "../../Components/MermaidRender";

const mermaidDiagram = `
mindmap
  root((Research IQ))
    📄 Paper
      Upload PDF
      Extract Text
      Parse Metadata
    🤖 AI Analysis
      Summary
      Citation
      Keywords
      Neural Network
    📊 Visualization
      Mermaid
      SVG
      Zoom
    📚 Literature
      Related Papers
      References
      Authors
    ⚡ Future Scope
      React Flow
      D3
      Graph Database
`;

const MindMap = () => {
  return (
    <div className="min-h-screen  px-10 py-8 justify-center items-center flex">
      <h1 className="mb-8 text-center text-4xl font-bold ">
        Research-IQ Mind Map
      </h1>

      <MermaidRenderer diagram={mermaidDiagram} />
    </div>
  );
};

export default MindMap;