import { useState } from "react";
import type { TreeNode } from "../interfaces/TreeNode";

export function TreeNodeComponent({ node }: { node: TreeNode }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <>
            {node.type === "folder" ? (
                <button
                    className="text-blue-400 hover:text-blue-500 block mb-2"
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    {node.text} {isExpanded ? "-" : "+"}
                </button>
            ) : (
                <div>{node.text}</div>
            )}
            {isExpanded && (
                <div className="pl-4 space-y-2">
                    {node.children.map((child, index) => (
                        <TreeNodeComponent key={index} node={child} />
                    ))}
                </div>
            )}
        </>
    );
}
