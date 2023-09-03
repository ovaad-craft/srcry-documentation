import { LineSizeProps, LineSizes } from "@site-types";

export function createLineSize(size: LineSizes): LineSizeProps{
    return `line-${size}` as LineSizeProps;
}