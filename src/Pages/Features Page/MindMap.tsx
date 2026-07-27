import React, { useMemo } from "react";

import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  Position,
  MarkerType,
} from "@xyflow/react";

import type { Node, Edge } from "@xyflow/react";

import "@xyflow/react/dist/style.css";

import dagre from "dagre";

/******************************************************
 * Replace this with your API response
 ******************************************************/

const response = {
  paper_id: "cd4d61e1-b783-44e6-b580-ac933ea2b3c9",
  mindmap: {
    title:
      "A Lightweight SAR Ship Detector Using End-to-End Image Preprocessing Network",
    mindMap: {
      name:
        "A Lightweight SAR Ship Detector Using End-to-End Image Preprocessing Network",
      type: "root",
      children: [
        {
          name: "Introduction",
          type: "section",
          children: [
            {
              name: "Problem Statement",
              type: "concept",
              children: [
                {
                  name: "Small-scale targets",
                  type: "challenge",
                },
                {
                  name: "Complex backgrounds",
                  type: "challenge",
                },
              ],
            },
            {
              name: "Methodology",
              type: "concept",
              children: [
                {
                  name: "E2IPNet",
                  type: "algorithm",
                },
                {
                  name: "CFGSPP",
                  type: "algorithm",
                },
              ],
            },
          ],
        },
        {
          name: "Methodology",
          type: "section",
          children: [
            {
              name: "E2IPNet",
              type: "algorithm",
            },
            {
              name: "CFGSPP",
              type: "algorithm",
            },
          ],
        },
        {
          name: "Dataset",
          type: "section",
          children: [
            {
              name: "SSDD",
              type: "dataset",
            },
            {
              name: "HRSID",
              type: "dataset",
            },
          ],
        },
        {
          name: "Results",
          type: "section",
          children: [
            {
              name: "AP",
              type: "metric",
              children: [
                {
                  name: "98.61%",
                  type: "value",
                },
              ],
            },
          ],
        },
      ],
    },
  },
};

/******************************************************
 * Colours
 ******************************************************/

const colours: Record<string, string> = {
  root: "#7c3aed",
  section: "#2563eb",
  concept: "#10b981",
  challenge: "#ef4444",
  algorithm: "#f97316",
  detector: "#eab308",
  dataset: "#06b6d4",
  experiment: "#ec4899",
  component: "#8b5cf6",
  metric: "#14b8a6",
  value: "#64748b",
};

/******************************************************
 * Layout
 ******************************************************/

const dagreGraph = new dagre.graphlib.Graph();

dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeWidth = 220;
const nodeHeight = 60;

function buildGraph(root: any) {
  const nodes: Node[] = [];
  const edges: Edge[] = [];

  let id = 0;

  function traverse(node: any, parent?: string) {
    const currentId = String(id++);

    nodes.push({
      id: currentId,
      data: {
        label: node.name,
      },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
      position: { x: 0, y: 0 },
      style: {
        width: nodeWidth,
        borderRadius: 10,
        
        border: "none",
        background: colours[node.type] || "#444",
        fontWeight: 600,
      },
    });

    if (parent) {
      edges.push({
        id: `${parent}-${currentId}`,
        source: parent,
        target: currentId,
        markerEnd: {
          type: MarkerType.ArrowClosed,
        },
      });
    }

    node.children?.forEach((child: any) => traverse(child, currentId));
  }

  traverse(root);

  dagreGraph.setGraph({
    rankdir: "TB",
    nodesep: 60,
    ranksep: 120,
  });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, {
      width: nodeWidth,
      height: nodeHeight,
    });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  nodes.forEach((node) => {
    const pos = dagreGraph.node(node.id);

    node.position = {
      x: pos.x - nodeWidth / 2,
      y: pos.y - nodeHeight / 2,
    };
  });

  return { nodes, edges };
}

/******************************************************
 * Component
 ******************************************************/

export default function MindMap() {
  const { nodes, edges } = useMemo(() => {
    return buildGraph(response.mindmap.mindMap);
  }, []);

  return (
    <div className="h-screen">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
      >
        <Background />
        <Controls className="bg-black text-black" />
        {/* <MiniMap className="bg-black text-black" zoomable pannable /> */}
      </ReactFlow>
    </div>
  );
}