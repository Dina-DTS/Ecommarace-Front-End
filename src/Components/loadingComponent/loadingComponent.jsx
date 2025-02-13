import React, { useEffect } from 'react';


export default  function LoadingComponent () {
   
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-8 border-white border-dotted"></div>
      </div>
    );
}

