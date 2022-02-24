import useLocalStorage from './useLocalStorage';

export const useUser = () => {
    const [user, setUser] = useLocalStorage('user', null);

    const clearUser = () => setUser(null);
    const isLoggedIn = !!user;

    return {
        user, setUser, clearUser, isLoggedIn
    }
}