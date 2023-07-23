export interface Link{
    id: string;
    title: string;
    path?: string;
    subLinks?: Link[];
}