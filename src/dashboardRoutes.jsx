//  React, hooks y componentes de React
import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

// dashboard
import HomeDashboard from '../src/Dashboard de Administradores/HomeDashboard.jsx';
import CreateCategory from '../src/Dashboard de Administradores/Creation/CreateCategory.jsx';
import CreateProduct from '../src/Dashboard de Administradores/Creation/CreateProduct.jsx';
<<<<<<< HEAD
import ModificationCategory from '../src/Dashboard de Administradores/Modification/ModificationCategory.jsx';
=======

>>>>>>> 265b6ad3769bdd51cd7657a583b2a5062edb4d68
import ModificationProduct from '../src/Dashboard de Administradores/Modification/ModificationProduct.jsx';
import AdminUsers from '../src/Dashboard de Administradores/AdminUsers.jsx';

const DashboardRoutes = () => {
  const { isAuthenticated, isLoading, user } = useAuth0();
  const [isAdmin, setIsAdmin] = useState(false);
  const [loadingUser, setLoadingUser] = useState(true);
 
  useEffect(() => {
    const fetchUserData = async () => {
      if (isAuthenticated && user) {
        try {
          const response = await fetch('http://localhost:3001/users');
          const users = await response.json();
          const authenticatedUser = users.find(u => u.email === user.email);
<<<<<<< HEAD
          setIsAdmin(authenticatedUser && authenticatedUser.isAdmin);
=======
          if(authenticatedUser){
            setIsAdmin( authenticatedUser.isAdmin);
         }
>>>>>>> 265b6ad3769bdd51cd7657a583b2a5062edb4d68
        } catch (error) {
          console.error('Error fetching user data:', error);
        } finally {
          setLoadingUser(false);
        }
      } else {
      
        setLoadingUser(false);
      }
    };

    fetchUserData();
  }, [isAuthenticated, user]);

  if (isLoading || loadingUser) {
    return <div>Loading...</div>;
  }

  
  if (!isAuthenticated || !isAdmin) {
    return <Navigate to="/" />;
  }

  return (
    <Routes>
        <Route path="/" element={<AdminUsers />}/>
        <Route path="/creationCategory" element={<CreateCategory />} />
        <Route path="/creationProduct" element={<CreateProduct />} />
<<<<<<< HEAD
        <Route path="/modifications/category" element={<ModificationCategory />} /> 
=======
        
>>>>>>> 265b6ad3769bdd51cd7657a583b2a5062edb4d68
       <Route path="/modifications/product/:id" element={<ModificationProduct />} />
        
        <Route path="/HomeDashboard" element={<HomeDashboard />} />
    </Routes>
  );
};

export default DashboardRoutes;
