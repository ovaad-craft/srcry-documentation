import { TextSizeProps, TextSizeSize, TextSizeSpeed } from "@site-types";

export function createTextSize(size: TextSizeSize, speed: TextSizeSpeed): TextSizeProps{
    return `text-${size}-${speed}` as TextSizeProps;
}