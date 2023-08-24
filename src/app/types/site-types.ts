export type Empty = '--';
export type One = '1';
export type Two = '2';
export type Three = '3';
export type Four = '4';
export type Five = '5';
export type Six = '6';
export type Seven = '7';
export type Eight = '8';
export type Nine = '9';
export type Ten = '10';
export type Eleven = '11';

export type MicroBoxSize = 'micro';
export type XTinyBoxSize = 'xTiny';
export type TinyBoxSize = 'tiny';
export type XSmallBoxSize = 'xSmall';
export type SmallBoxSize = 'small';
export type LoMedBoxSize = 'loMed';
export type HiMedBoxSize = 'hiMed';
export type LargeBoxSize = 'large';
export type JumboBoxSize = 'jumbo';

export type BoxSizeSize = Empty | MicroBoxSize | XTinyBoxSize | TinyBoxSize | XSmallBoxSize | SmallBoxSize | LoMedBoxSize | HiMedBoxSize | LargeBoxSize | JumboBoxSize;
export type BoxSizeScale = Empty | One | Two;
export type BoxSizeSpeed = Empty | One | Two | Three | Four | Five | Six | Seven | Eight | Nine | Ten | Eleven;

export interface BoxSizeInterface{
    size : BoxSizeSize;
    scale : BoxSizeScale;
    speed : BoxSizeSpeed;
}


export interface BoxAnalyzerInterface{
    coreBoxWidth: number;
    fullBoxWidth: number;
}

export interface Link{
    id: string;
    title: string;
    path?: string;
    subLinks?: Link[];
    breadCrumbs?: string[];
}

export interface CardSummaryData{
    id: string;
    title: string;
    description: string;
    path: string;
    breadCrumbs?: string[];
}

export interface PaginationItem{
    id: string;
    title: string;
    path: string;
    breadcrumbs?: string[];
}

export interface PaginationData{
    previous?: PaginationItem;
    next?: PaginationItem;
}

export interface WindowSize{
    width: number;
    height: number;
}