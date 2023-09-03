import { BoxSizeProps, LineSizeProps, TextSizeProps } from "@site-types";

export function createCssVariable(prop: BoxSizeProps | TextSizeProps | LineSizeProps): string{
    return `var(--${prop})`;
}