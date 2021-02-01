export interface Item {
    id?: number;
    name: string;
    date: string;
    qty: number;
    status: ItemStatus
}

export enum ItemStatus {
    ACTIVE = 'Active',
    INACTIVE = 'InActive'
}