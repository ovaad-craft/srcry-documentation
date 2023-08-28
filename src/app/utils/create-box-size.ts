import { BoxSizeProps, BoxSizeScale, BoxSizeSize, BoxSizeSpeed } from "@site-types";

export function createBoxSize(size: BoxSizeSize, scale: BoxSizeScale, speed: BoxSizeSpeed): BoxSizeProps{
    return `${size}-${scale}-${speed}` as BoxSizeProps;
}