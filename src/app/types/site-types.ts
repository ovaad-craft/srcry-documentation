export interface Link{
    id: string;
    title: string;
    path?: string;
    subLinks?: Link[];
}

export interface CardSummaryData{
    id: string;
    title: string;
    description: string;
    path: string;
    breadCrumbs?: string[];
}