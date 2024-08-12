import React, { useState } from 'react';
import { Link } from 'wasp/client/router';
import { useQuery, useAction, getReport, createReport } from 'wasp/client/operations';

const DashboardPage = () => {
  const { data: reports, isLoading, error } = useQuery(getReport);
  const createReportFn = useAction(createReport);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [pdf, setPdf] = useState('');

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  const handleCreateReport = () => {
    createReportFn({ title, content, image, pdf });
    setTitle('');
    setContent('');
    setImage('');
    setPdf('');
  };

  return (
    <div className='p-4'>
      <div className='flex items-center justify-between mb-4'>
        <input type='text' placeholder='Title' className='px-1 py-2 border rounded text-lg' value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type='text' placeholder='Content' className='px-1 py-2 border rounded text-lg' value={content} onChange={(e) => setContent(e.target.value)} />
        <input type='text' placeholder='Image' className='px-1 py-2 border rounded text-lg' value={image} onChange={(e) => setImage(e.target.value)} />
        <input type='text' placeholder='PDF' className='px-1 py-2 border rounded text-lg' value={pdf} onChange={(e) => setPdf(e.target.value)} />
        <button onClick={handleCreateReport} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Create Report</button>
      </div>
      {reports.map((report) => (
        <div key={report.id} className='bg-gray-100 p-4 mb-4 rounded-lg'>
          <div>Title: {report.title}</div>
          <div>Content: {report.content}</div>
          <div>Image: {report.image}</div>
          <div>PDF: {report.pdf}</div>
        </div>
      ))}
    </div>
  );
}

export default DashboardPage;