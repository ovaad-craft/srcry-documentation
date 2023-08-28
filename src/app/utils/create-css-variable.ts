import { BoxSizeProps } from "@site-types";

export function createCssVariable(prop: BoxSizeProps): string{
    return `var(--${prop})`;
}