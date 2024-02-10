import { useAuth0 } from '@auth0/auth0-react';

export const Login = () => {
    const { loginWithRedirect, isAuthenticated, user } = useAuth0();

    const handleLoginRedirect = () => {
        if (isAuthenticated && user) {
            localStorage.setItem('auth0_authenticated', 'true');
            localStorage.setItem('auth0_user', JSON.stringify(user));
        }
    };

    return (
        <>
            <button onClick={() => { loginWithRedirect(); handleLoginRedirect(); }}>Login</button>
        </>
    );
};
