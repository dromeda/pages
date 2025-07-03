interface Page {
    id: string;
    title: string;
    content: string;
    tags?: string[];
    createdAt: number;
    lastUpdate: number;
}