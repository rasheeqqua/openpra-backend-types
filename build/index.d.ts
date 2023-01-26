import { FaultTreeMxGraphJSON } from "./fault_tree";
export declare enum TreeTypes {
    EVENT_TREE = "e",
    EVENT_SEQUENCE_DIAGRAM = "e",
    FAULT_TREE = "f",
    BAYESIAN_NETWORK = "b",
    MANAGEMENT_FAULT_TREE = "m",
    INITIATING_EVENT = "i"
}
export interface fault_tree {
    tree_type: TreeTypes;
    tree_data: FaultTreeMxGraphJSON;
}
