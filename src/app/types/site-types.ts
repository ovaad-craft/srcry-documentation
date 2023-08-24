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