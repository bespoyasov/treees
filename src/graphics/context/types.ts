// Better not to depend directly on `CanvasRenderingContext2D`.

export type DrawingContext = Nullable<CanvasRenderingContext2D>;

export interface DrawingContextProvider {
  getInstance(): DrawingContext;
}
