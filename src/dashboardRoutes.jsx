// // import React from 'react';
 import { Route, Routes } from 'react-router-dom';
 import HomeDashboard from '../src/Dashboard de Administradores/HomeDashboard.jsx';
//  import Deletions from '../src/Dashboard de Administradores/Deletions/Deletions.jsx'
 import CreateCategory from '../src/Dashboard de Administradores/Creation/CreateCategory.jsx';
 import CreateProduct from '../src/Dashboard de Administradores/Creation/CreateProduct.jsx';
//  import Modifications from '../src/Dashboard de Administradores/Modification/Modifications.jsx'
  import ModificationCategory from '../src/Dashboard de Administradores/Modification/ModificationCategory.jsx';
 import ModificationProduct from '../src/Dashboard de Administradores/Modification/ModificationProduct.jsx';


 const DashboardRoutes = () => {
   return (
     <Routes>
        <Route path="/" element={<HomeDashboard />} /> 
       {/* <Route path="/deletions" element={<Deletions/>} /> */}
       <Route path="/creationCategory" element={<CreateCategory />} />
       <Route path="/creationProduct" element={<CreateProduct />} />
       {/* <Route path="/modifications" element={<Modifications/>} /> */}
       <Route path="/modifications/category" element={<ModificationCategory />} /> 
       <Route path="/modifications/product/:id" element={<ModificationProduct />} />
       
     </Routes>
   );
};

export default DashboardRoutes;