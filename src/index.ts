import { FaultTreeJSON } from "./fault_tree";
import { EventTreeJSON } from "./event_tree";
import { BayesianNetworkJSON } from "./bayesian_network";

export interface hcl_tree_data {
  tree_data: FaultTreeJSON | EventTreeJSON | BayesianNetworkJSON
}