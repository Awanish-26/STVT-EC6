import React from 'react';

const FormSection = ({ title, children }) => (
  <div>
    <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
      {title}
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {children}
    </div>
  </div>
);

export default FormSection;