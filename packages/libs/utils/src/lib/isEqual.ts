import { dequal } from "dequal";

export const isEqual = <T>(a: T, b: T):boolean => dequal(a, b);