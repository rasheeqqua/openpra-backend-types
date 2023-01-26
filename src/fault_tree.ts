export enum ReferenceTypes {
    GATES = "gates",
    BASIC_EVENTS = "basic_events",
    HOUSE_EVENTS = "house_events",
    FUNCTIONAL_EVENT = "functional_event",
    PATHS = "paths",
    BRANCHES = "branches",
    FUNCTIONAL_EVENTS = "functional_events",
    INITIAL_STATE = "initial_state",
    SEQUENCES = "sequences",
    BAYESIAN_NODES = "bayesian_nodes",
    STATES = "states"
  }

export enum ProxyTypes {
    COLLECT_FORMULA = "CollectFormula",
    COLLECT_EXPRESSION = "CollectExpression",
    EVENT_REFERENCE = "EventReference",
    LOGICAL_EXPRESSION = "LogicalExpression",
    FLOAT = "Float",
    STRING_DISTRIBUTION = "StringDistribution",
    EXPONENTIAL_DISTRIBUTION = "ExponentialDistribution",
    LOG_NORMAL_DISTRIBUTION = "LognormalDistribution",
    WEIBULL_DISTRIBUTION = "WeibullDistribution",
    NORMAL_DISTRIBUTION = "NormalDistribution",
    UNIFORM_DISTRIBUTION = "UniformDistribution",
    NON_PARAMETRIC_DISTRIBUTION = "NonParametricDistribution",
    FORK = "Fork",
    END_STATE = "EndState",
    BBN_LINK_EXPRESSION = "BBNLinkExpression",
    PARTS_FIT_EXPRESSION = "PartsFITExpression",
    DISTRIBUTION = "Distribution"
  }
  
  export enum ROLE_CHOICES {
    PUBLIC = "public",
    PRIVATE = "private",
  }
  
  export enum GateTypes {
    AND = "and",
    AT_LEAST = "atleast",
    CARDINALITY = "cardinality",
    IFF = "iff",
    IMPLY = "imply",
    NAND = "nand",
    NOR = "nor",
    NOT = "not",
    OR = "or",
    XOR = "xor"
  }

  export interface Label {
    name: string;
    description: string;
    frequency? : string;
  }

  export interface Position {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
  }

  export interface OutcomeJSON {
    name?: string;
    reference_type?: ReferenceTypes;
    tree_id?: number;
    path?: string;
    make_instance?: boolean;
    _proxy?: ProxyTypes;
  }
  
  export interface FormulaJSON {
    _proxy: ProxyTypes;
    outcome?: OutcomeJSON;
    expr?: GateTypes;
    formulas?: OutcomeJSON[];
    min_value?: number;
  }
  
  export interface FaultTreeMxGraphJSON {
    [ReferenceTypes.BASIC_EVENTS]: {[index: string]:
    {
      expression: 
      { 
        _proxy: ProxyTypes;
      };
      source_type: string;
      label: Label;
      style?: 
      { 
        position?: Position;
      };
      role?: ROLE_CHOICES;
    }};
    [ReferenceTypes.HOUSE_EVENTS]: {[index: string]:
    {
      constant: 
      {
        value: boolean;
      };
      label: Label;
      style?: 
      { 
        position?: Position;
      };
      role?: ROLE_CHOICES;
    }};
    [ReferenceTypes.GATES]: {[index: string]:
    {
      formula: FormulaJSON | OutcomeJSON;
      label: Label;
      style?: 
      { 
        position?: Position;
      };
      role?: ROLE_CHOICES;
    }};
    components: {[index: string]: any};
    top_node: {
      name?: string;
      reference_type?: ReferenceTypes;
      tree_id?: number;
      path?: string;
      make_instance?: boolean;
      _proxy?: ProxyTypes;
    };
    name: string;
    model_tree_id: number;
    label: {
      name: string;
      description: string;
      frequency? : string;
    };
  }