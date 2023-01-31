interface Expression {
    _proxy: string;
}

interface Label {
    name: string,
    description: string,
    frequency? : string
  }

interface Position {
    x?: number,
    y?: number,
    width?: number,
    height?: number
}

interface Style {
    position: Position
}

interface Constant {
    value: boolean
}

interface Outcome {
    name?: string,
    reference_type?: string,
    tree_id?: number,
    path?: string,
    make_instance?: boolean,
    _proxy?: string,
}

interface Formula {
    _proxy: string,
    outcome?: Outcome,
    expr?: string,
    formulas?: Outcome[],
    min_value?: number
}

interface Basic_Event {
    expression: Expression,
    source_type: string,
    label: Label,
    style?: Style,
    role?: string
}

interface House_Event {
    constant: Constant,
    label: Label,
    style?: Style,
    role?: string
}

interface Gate {
    formula: Formula | Outcome,
    label: Label,
    style?: Style,
    role?: string
}

interface Component {
    [index: string]: any;
}

interface Top_Node {
    name?: string,
    reference_type?: string,
    tree_id?: number,
    path?: string,
    make_instance?: boolean,
    _proxy?: string
}

export interface FaultTreeJSON {
    basic_events: {[index: string]: Basic_Event};
    house_events: {[index: string]: House_Event};
    gates: {[index: string]: Gate};
    components: {[index: string]: Component};
    top_node: Top_Node;
    name: string
    model_tree_id: number;
    label: Label;
}