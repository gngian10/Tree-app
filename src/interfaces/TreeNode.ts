export interface TreeNode {
    children: TreeNode[];
    text: string;
    type: "file" | "folder";
}
