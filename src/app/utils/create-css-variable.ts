import { BoxSizeProps, TextSizeProps } from "@site-types";

export function createCssVariable(prop: BoxSizeProps | TextSizeProps): string{
    return `var(--${prop})`;
}