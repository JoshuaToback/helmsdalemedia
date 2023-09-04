import React from 'react';

const PDFViewer = () => {
  const pdfUrl = 'src/images/DanielleTobackMediaKit.pdf';
  return (
    <div className="pdf-container">
      <iframe
        title="PDF Viewer"
        src={pdfUrl}
        width="100%"
        height="500px"
        type="application/pdf"
        allowFullScreen
      />
    </div>
  );
};

export default PDFViewer;
