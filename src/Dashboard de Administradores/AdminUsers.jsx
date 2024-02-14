import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AdminUser = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        try {
<<<<<<< HEAD
            const response = await fetch('https://animaliashop-backend.onrender.com/users');
=======
            const response = await fetch('http://localhost:3001/users');
>>>>>>> 265b6ad3769bdd51cd7657a583b2a5062edb4d68
            const data = await response.json();

            setUsers(data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleUpdateRole = async (userId, isAdmin) => {
        try {
<<<<<<< HEAD
            const response = await fetch(`https://animaliashop-backend.onrender.com/users/${userId}/role`, {
=======
            const response = await fetch(`http://localhost:3001/users/${userId}/role`, {
>>>>>>> 265b6ad3769bdd51cd7657a583b2a5062edb4d68
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ isAdmin })
            });

            if (!response.ok) {
                console.error('Error updating user role:', response.statusText);
                return;
            }

          
            
            setUsers(prevUsers => {
                return prevUsers.map(user => {
                    if (user.id === userId) {
                        return { ...user, isAdmin };
                    }
                    return user;
                });
            });
        } catch (error) {
            console.error('Error updating user role:', error);
        }
    };

    const handleBanUser = async (userId, isBanned) => {
        try {
<<<<<<< HEAD
            const response = await fetch(`https://animaliashop-backend.onrender.com/users/${userId}/banned`, {
=======
            const response = await fetch(`http://localhost:3001/users/${userId}/banned`, {
>>>>>>> 265b6ad3769bdd51cd7657a583b2a5062edb4d68
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ isBanned })
            });

            if (!response.ok) {
                console.error('Error updating user ban status:', response.statusText);
                return;
            }

         
            
            setUsers(prevUsers => {
                return prevUsers.map(user => {
                    if (user.id === userId) {
                        return { ...user, isBanned };
                    }
                    return user;
                });
            });
        } catch (error) {
            console.error('Error updating user ban status:', error);
        }
    };

    return (
        <div className="max-w-2x1 mx-auto p-4">
            
            <div className="flex justify-between items-center mb-4">
                <Link to='/dashboard/HomeDashboard' className="block py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded text-center text-sm">
                    HomeDashboard
                </Link>
               
            </div>

            <ul className="space-y-4">
                {users.map(user => (
                    <li key={user.id} className="flex items-center justify-between border border-gray-300 rounded p-3">
                        <span>{user.name}</span>
                        <div>
                            <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 ${user.isAdmin ? 'bg-green-500' : 'bg-gray-500'}`} onClick={() => handleUpdateRole(user.id, !user.isAdmin)}>
                                {user.isAdmin ? 'Quitar admin' : 'Hacer admin'}
                            </button >
                            <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 ${user.isBanned ? 'bg-red-500' : 'bg-yellow-500'}`} onClick={() => handleBanUser(user.id, !user.isBanned)}>
                                {user.isBanned ? 'Quitar ban' : 'Banear'}
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminUser;
