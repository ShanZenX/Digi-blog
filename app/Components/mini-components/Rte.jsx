// import React, { useState, useEffect } from 'react';
// import dynamic from 'next/dynamic';

// const DynamicJoditEditor = dynamic(() => import('jodit-react'), { ssr: false });

// export default function Rte() {
//     const [value, setValue] = useState("");

//     const handleChange = (content) => {
//         console.log(content);
//         setValue(content);
//     };

//     return (
//         <div>
//             <DynamicJoditEditor
//                 tabIndex={1}
//                 onBlur={newContent => setValue(newContent)}
//                 onChange={newContent => handleChange(newContent)}
//             />
//         </div>
//     );
// }
