export as namespace SiebelJS

export function Namespace(name: string): void
export function Dependency(name: string): any
export function Extend<T, S>(target: T, superclass: S): void