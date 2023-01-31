import { FaultTreeJSON } from "./fault_tree";
import { EventTreeJSON } from "./event_tree";
import { BayesianNetworkJSON } from "./bayesian_network";
declare enum TREE_TYPES {
    EVENT_TREE = "e",
    EVENT_SEQUENCE_DIAGRAM = "e",
    FAULT_TREE = "f",
    BAYESIAN_NETWORK = "b",
    MANAGEMENT_FAULT_TREE = "m",
    INITIATING_EVENT = "i"
}
export interface hcl_tree_data {
    tree_type: TREE_TYPES;
    tree_data: FaultTreeJSON | EventTreeJSON | BayesianNetworkJSON;
}
export {};
