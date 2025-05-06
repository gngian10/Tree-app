import { useState } from "react";
import "./App.css";
import { TreeNodeComponent } from "./components/TreeNodeComponent";
import type { TreeNode } from "./interfaces/TreeNode";
import { initialTree } from "./constants/treeData";

function App() {
    const [root, setRoot] = useState<TreeNode>(initialTree);

    return (
        <div className="p-8">
            <TreeNodeComponent node={root} />
        </div>
    );
}

export default App;
