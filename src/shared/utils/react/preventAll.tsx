import { preventDefault } from "./preventDefault";
import { stopPropagation } from "./stopPropagation";

export function preventAll<T extends (e: any) => void>(fn: T) {
    return stopPropagation(preventDefault(fn));
}
