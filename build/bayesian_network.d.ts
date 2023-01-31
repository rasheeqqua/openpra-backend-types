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
declare enum DISTRIBUTION_TIME_DEPENDENCE {
    TIME_INDEPENDENT = "On Demand",
    TIME_DEPENDENT = "During Operation"
}
declare enum NORMAL_PARAMS {
    MeanStd = "mean & std",
    MedianErrorFactor = "median & error factor",
    Percentiles = "percentiles"
}
interface Position {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
}
interface Outcome {
    name?: string;
    reference_type?: REFERENCE_TYPES;
    tree_id?: number;
    path?: string;
    make_instance?: boolean;
    _proxy?: PROXY_TYPES;
}
interface Expression {
    _proxy: PROXY_TYPES;
    value?: number;
    user_expression?: string;
    test_interval?: number;
    failure_rate?: number;
    mean?: number;
    std?: number;
    median?: number;
    error_factor?: number;
    p5?: number;
    p95?: number;
    _params?: ['mean', 'std'] | ['median', 'error_factor'] | ['p5', 'p95'];
    shape?: number;
    scale?: number;
    normal_mean?: number;
    normal_std?: number;
    normal_median?: number;
    normal_error_factor?: number;
    normal_p5?: number;
    normal_p95?: number;
    normal_params?: NORMAL_PARAMS;
    log_normal_mean?: number;
    log_normal_std?: number;
    log_normal_median?: number;
    log_normal_error_factor?: number;
    log_normal_p5?: number;
    log_normal_p95?: number;
    log_normal_params?: NORMAL_PARAMS;
    exponential_test_interval?: number;
    weibull_test_interval?: number;
    parts_fit_test_interval?: number;
    distribution_time_dependence?: DISTRIBUTION_TIME_DEPENDENCE;
    max?: number;
    min?: number;
    state_ref?: Outcome;
    uncertain?: boolean;
    part_id?: number;
    formulas?: Expression[];
    expr?: GATE_TYPES;
    time_to_failure?: number[];
    estimated_reliability?: number[];
}
interface BayesianStateProbability {
    expression: Expression;
    states?: Outcome[];
}
interface Label {
    name: string;
    description: string;
    frequency?: string;
}
interface BayesianNodeState {
    probabilities: BayesianStateProbability[];
    label: Label;
}
interface BayesianNode {
    states: Record<string, BayesianNodeState>;
    dependencies?: Outcome[];
    style?: {
        position?: Position;
    };
    role?: ROLE_CHOICES;
    label: Label;
}
export interface BayesianNetworkJSON {
    bayesian_nodes: {
        [key: string]: BayesianNode;
    };
    name: string;
    model_tree_id: number;
    label: Label;
}
export {};
