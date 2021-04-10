import { Stack } from "./types";

export class JointsStack implements Stack<TreeJoint> {
  private items: List<TreeJoint> = [];

  public push(item: TreeJoint): void {
    this.items.push(item);
  }

  public pop(): TreeJoint {
    if (this.items.length <= 0) {
      throw new Error("Underflow error: The stack is empty.");
    }

    const item = this.items.pop()!;
    return item;
  }

  public peek(): TreeJoint {
    const items = this.items;
    const last = items.length - 1;
    return items[last];
  }
}
