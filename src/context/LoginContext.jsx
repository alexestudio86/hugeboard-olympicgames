export const LoginContext = async () => {
    try {        
        const data = await signInWithEmailAndPassword(auth, 'alexestudio86@gmail.com', 'contra8');
        return { data };
    } catch (error) {
        return error
    }
};

export const handle = async () => {

};