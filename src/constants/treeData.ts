import type { TreeNode } from "../interfaces/TreeNode";

export const initialTree: TreeNode = {
    text: "root",
    type: "folder",
    children: [
        {
            text: "folder1",
            type: "folder",
            children: [
                {
                    text: "folder1-1",
                    type: "folder",
                    children: [
                        { text: "file1-1-1.txt", type: "file", children: [] },
                        { text: "file1-1-2.txt", type: "file", children: [] },
                    ],
                },
                {
                    text: "file1-2.txt",
                    type: "file",
                    children: [],
                },
            ],
        },
        {
            text: "folder2",
            type: "folder",
            children: [
                {
                    text: "folder2-1",
                    type: "folder",
                    children: [
                        { text: "file2-1-1", type: "file", children: [] },
                    ],
                },
            ],
        },
    ],
};
