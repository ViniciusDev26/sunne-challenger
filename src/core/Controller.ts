export interface Controller<T = any, R = any> {
  handle: (request: T) => Promise<R>
}