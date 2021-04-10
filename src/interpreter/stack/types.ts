export interface Stack<TItem> {
  push(item: TItem): void;
  pop(): TItem;
  peek(): TItem;
}
