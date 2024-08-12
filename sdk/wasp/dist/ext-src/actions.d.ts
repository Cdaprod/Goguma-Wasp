export function createAlias(args: any, context: any): Promise<any>;
export function createReport(args: any, context: any): Promise<any>;
export function deleteAlias({ aliasId }: {
    aliasId: any;
}, context: any): Promise<void>;
export function updateReport({ reportId, updatedTitle, updatedContent, updatedImage, updatedPdf }: {
    reportId: any;
    updatedTitle: any;
    updatedContent: any;
    updatedImage: any;
    updatedPdf: any;
}, context: any): Promise<any>;
