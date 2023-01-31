declare enum ROLE_CHOICES {
    PUBLIC = "public",
    PRIVATE = "private"
}
declare enum REFERENCE_TYPES {
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
declare enum PROXY_TYPES {
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
declare enum GATE_TYPES {
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
interface Expression {
    _proxy: string;
}
interface Label {
    name: string;
    description: string;
    frequency?: string;
}
interface Position {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
}
interface Style {
    position?: Position;
}
interface Constant {
    value: boolean;
}
interface Outcome {
    name?: string;
    reference_type?: REFERENCE_TYPES;
    tree_id?: number;
    path?: string;
    make_instance?: boolean;
    _proxy?: PROXY_TYPES;
}
interface Formula {
    _proxy: PROXY_TYPES;
    outcome?: Outcome;
    expr?: GATE_TYPES;
    formulas?: Outcome[];
    min_value?: number;
}
interface Basic_Event {
    expression: Expression;
    source_type: string;
    label: Label;
    style?: Style;
    role?: ROLE_CHOICES;
}
interface House_Event {
    constant: Constant;
    label: Label;
    style?: Style;
    role?: ROLE_CHOICES;
}
interface Gate {
    formula: Formula | Outcome;
    label: Label;
    style?: Style;
    role?: ROLE_CHOICES;
}
interface Top_Node {
    name?: string;
    reference_type?: REFERENCE_TYPES;
    tree_id?: number;
    path?: string;
    make_instance?: boolean;
    _proxy?: PROXY_TYPES;
}
export interface FaultTreeJSON {
    basic_events: {
        [index: string]: Basic_Event;
    };
    house_events: {
        [index: string]: House_Event;
    };
    gates: {
        [index: string]: Gate;
    };
    components: {
        [index: string]: any;
    };
    top_node: Top_Node;
    name: string;
    model_tree_id: number;
    label: Label;
}
export {};
