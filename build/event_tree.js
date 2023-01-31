"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var REFERENCE_TYPES;
(function (REFERENCE_TYPES) {
    REFERENCE_TYPES["GATES"] = "gates";
    REFERENCE_TYPES["BASIC_EVENTS"] = "basic_events";
    REFERENCE_TYPES["HOUSE_EVENTS"] = "house_events";
    REFERENCE_TYPES["FUNCTIONAL_EVENT"] = "functional_event";
    REFERENCE_TYPES["PATHS"] = "paths";
    REFERENCE_TYPES["BRANCHES"] = "branches";
    REFERENCE_TYPES["FUNCTIONAL_EVENTS"] = "functional_events";
    REFERENCE_TYPES["INITIAL_STATE"] = "initial_state";
    REFERENCE_TYPES["SEQUENCES"] = "sequences";
    REFERENCE_TYPES["BAYESIAN_NODES"] = "bayesian_nodes";
    REFERENCE_TYPES["STATES"] = "states";
})(REFERENCE_TYPES || (REFERENCE_TYPES = {}));
var PROXY_TYPES;
(function (PROXY_TYPES) {
    PROXY_TYPES["COLLECT_FORMULA"] = "CollectFormula";
    PROXY_TYPES["COLLECT_EXPRESSION"] = "CollectExpression";
    PROXY_TYPES["EVENT_REFERENCE"] = "EventReference";
    PROXY_TYPES["LOGICAL_EXPRESSION"] = "LogicalExpression";
    PROXY_TYPES["FLOAT"] = "Float";
    PROXY_TYPES["STRING_DISTRIBUTION"] = "StringDistribution";
    PROXY_TYPES["EXPONENTIAL_DISTRIBUTION"] = "ExponentialDistribution";
    PROXY_TYPES["LOG_NORMAL_DISTRIBUTION"] = "LognormalDistribution";
    PROXY_TYPES["WEIBULL_DISTRIBUTION"] = "WeibullDistribution";
    PROXY_TYPES["NORMAL_DISTRIBUTION"] = "NormalDistribution";
    PROXY_TYPES["UNIFORM_DISTRIBUTION"] = "UniformDistribution";
    PROXY_TYPES["NON_PARAMETRIC_DISTRIBUTION"] = "NonParametricDistribution";
    PROXY_TYPES["FORK"] = "Fork";
    PROXY_TYPES["END_STATE"] = "EndState";
    PROXY_TYPES["BBN_LINK_EXPRESSION"] = "BBNLinkExpression";
    PROXY_TYPES["PARTS_FIT_EXPRESSION"] = "PartsFITExpression";
    PROXY_TYPES["DISTRIBUTION"] = "Distribution";
})(PROXY_TYPES || (PROXY_TYPES = {}));
var GATE_TYPES;
(function (GATE_TYPES) {
    GATE_TYPES["AND"] = "and";
    GATE_TYPES["AT_LEAST"] = "atleast";
    GATE_TYPES["CARDINALITY"] = "cardinality";
    GATE_TYPES["IFF"] = "iff";
    GATE_TYPES["IMPLY"] = "imply";
    GATE_TYPES["NAND"] = "nand";
    GATE_TYPES["NOR"] = "nor";
    GATE_TYPES["NOT"] = "not";
    GATE_TYPES["OR"] = "or";
    GATE_TYPES["XOR"] = "xor";
})(GATE_TYPES || (GATE_TYPES = {}));
var DISTRIBUTION_TIME_DEPENDENCE;
(function (DISTRIBUTION_TIME_DEPENDENCE) {
    DISTRIBUTION_TIME_DEPENDENCE["TIME_INDEPENDENT"] = "On Demand";
    DISTRIBUTION_TIME_DEPENDENCE["TIME_DEPENDENT"] = "During Operation";
})(DISTRIBUTION_TIME_DEPENDENCE || (DISTRIBUTION_TIME_DEPENDENCE = {}));
var NORMAL_PARAMS;
(function (NORMAL_PARAMS) {
    NORMAL_PARAMS["MeanStd"] = "mean & std";
    NORMAL_PARAMS["MedianErrorFactor"] = "median & error factor";
    NORMAL_PARAMS["Percentiles"] = "percentiles";
})(NORMAL_PARAMS || (NORMAL_PARAMS = {}));
var ROLE_CHOICES;
(function (ROLE_CHOICES) {
    ROLE_CHOICES["PUBLIC"] = "public";
    ROLE_CHOICES["PRIVATE"] = "private";
})(ROLE_CHOICES || (ROLE_CHOICES = {}));
