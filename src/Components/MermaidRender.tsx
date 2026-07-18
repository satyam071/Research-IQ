import { useEffect, useRef } from "react";
import mermaid from "mermaid";

mermaid.initialize({
  startOnLoad: false,
  theme: "dark",
  securityLevel: "loose",
});

interface Props {
  diagram: string;
}

const MermaidRenderer = ({ diagram }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const renderDiagram = async () => {
      if (!containerRef.current) return;

      try {
        containerRef.current.innerHTML = "";

        const id = `mermaid-${Date.now()}`;

        const { svg } = await mermaid.render(id, diagram);

        containerRef.current.innerHTML = svg;
      } catch (err) {
        console.error(err);

        containerRef.current.innerHTML = `
        <div style="color:red">
            Failed to render Mermaid Diagram
        </div>
        `;
      }
    };

    renderDiagram();
  }, [diagram]);

  return (
    <div
      ref={containerRef}
      className="w-full overflow-auto rounded-xl  p-10 shadow-xl"
    />
  );
};

export default MermaidRenderer;