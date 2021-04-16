type Combined<TCharacter> = TCharacter;
type Transformed<TExpression> = TExpression;

type Character = string;
type Variable = Character;
type Constant = Character;

type Expression = Combined<Variable | Constant>;
type RuleSet = Record<Expression, Transformed<Expression>>;

type Axiom = Variable;
type SystemState = Expression;
type IterationsCount = number;
