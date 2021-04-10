import { SystemBuilder, SystemSettings } from "./types";

export class Builder implements SystemBuilder {
  private state: SystemState = "";

  public build({ initiator, rules, iterations }: SystemSettings): Expression {
    this.state = initiator;

    for (let i = 0; i < iterations; i++) {
      this.applyRules(rules);
    }

    return this.state;
  }

  private applyRules(rules: RuleSet): void {
    const characters: List<Character> = this.state.split("");
    this.state = "";

    for (const character of characters) {
      const addition = rules[character] ?? character;
      this.state += addition;
    }
  }
}
