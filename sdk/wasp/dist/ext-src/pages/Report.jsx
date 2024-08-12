import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useAction, updateReport } from 'wasp/client/operations';
import { Link } from 'wasp/client/router';
const ReportPage = () => {
    const { reportId } = useParams();
    const { data: report, isLoading, error } = useQuery(getReport);
    const updateReportFn = useAction(updateReport);
    const [updatedTitle, setUpdatedTitle] = useState((report === null || report === void 0 ? void 0 : report.title) || '');
    const [updatedContent, setUpdatedContent] = useState((report === null || report === void 0 ? void 0 : report.content) || '');
    const [updatedImage, setUpdatedImage] = useState((report === null || report === void 0 ? void 0 : report.image) || '');
    const [updatedPdf, setUpdatedPdf] = useState((report === null || report === void 0 ? void 0 : report.pdf) || '');
    const handleUpdateReport = () => {
        updateReportFn({ reportId, updatedTitle, updatedContent, updatedImage, updatedPdf });
    };
    if (isLoading)
        return 'Loading...';
    if (error)
        return 'Error: ' + error;
    return (<div className='p-4'>
      <input type='text' placeholder='Title' value={updatedTitle} onChange={(e) => setUpdatedTitle(e.target.value)} className='px-1 py-2 border rounded text-lg mb-2'/>
      <textarea placeholder='Content' value={updatedContent} onChange={(e) => setUpdatedContent(e.target.value)} className='px-1 py-2 border rounded text-lg mb-2'></textarea>
      <input type='text' placeholder='Image URL' value={updatedImage} onChange={(e) => setUpdatedImage(e.target.value)} className='px-1 py-2 border rounded text-lg mb-2'/>
      <input type='text' placeholder='PDF URL' value={updatedPdf} onChange={(e) => setUpdatedPdf(e.target.value)} className='px-1 py-2 border rounded text-lg mb-2'/>
      <button onClick={handleUpdateReport} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
        Update Report
      </button>
    </div>);
};
export default ReportPage;
//# sourceMappingURL=Report.jsx.map