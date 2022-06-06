import { isEqual } from "./isEqual";

export const bulkIsEqual = (props: [unknown, unknown][]) =>
    props.every(args => isEqual(...args));