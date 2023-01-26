export enum TreeTypes {
    EVENT_TREE = 'e',
    EVENT_SEQUENCE_DIAGRAM = 'e',
    FAULT_TREE = 'f',
    BAYESIAN_NETWORK = 'b',
    MANAGEMENT_FAULT_TREE = 'm',
    INITIATING_EVENT = 'i'
  }

  export interface TreeProps {
    id: number;
    title: string;
    date_created: string;
    date_modified: string;
    creator: number;
    description: string;
    assigned_users: number[];
    valid: boolean;
    tree_type: TreeTypes;
  }