export function assert(
  condition: unknown,
  message?: string
): asserts condition {
  if (!condition) {
    throw new Error(message || "assertion failed");
  }
}

export function todo<T>(message: string, ..._ignored: unknown[]): T {
  throw new Error(`TODO: ${message}`);
}
