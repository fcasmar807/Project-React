import { useState, useContext } from "react";
import { UserContext } from "../contexts/ContextUser";
import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword, signOutUser } from "../utils/firebase";
import { validation } from "../utils/validationForm";
import { useDebouncedCallback } from "use-debounce";
import FormInput from "./formInput";
import FormInput2 from "./formInput_masEscalable";

function SignInForm2() {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [email, setEmail] = useState(undefined);
    const [passwd, setPasswd] = useState(undefined);
    const [errorEmail, setErrorEmail] = useState(null);
    const [errorPasswd, setErrorPasswd] = useState(null);

    const debounceEmail = useDebouncedCallback((currentEmail) => {
        if (!validation.isValidEmail(currentEmail)) {
            setErrorEmail("email incorrecto");
        } else {
            setErrorEmail(null);
        }
    }, 3000);

    const handleEmail = (event) => {
        const currentEmail = event.target.value;
        setEmail(currentEmail);
        debounceEmail(currentEmail);
    };

    const debouncePasswd = useDebouncedCallback((currentPasswd) => {
        if (!validation.isValidPassword(currentPasswd)) {
            setErrorPasswd("contraseña incorrecta");
        } else {
            setErrorPasswd(null);
        }
    }, 3000);

    const handlePasswd = (event) => {
        const currentPasswd = event.target.value;
        setPasswd(currentPasswd);
        debouncePasswd(currentPasswd);
    };

    const handleGoogle = async () => {
        try {
            const responseAuth = await signInWithGooglePopup();
            console.log("respuesta auth", responseAuth);
            const responseDatabase = await createUserDocumentFromAuth(responseAuth.user, {rol: "admin" });
            console.log("respuesta database", responseDatabase);
        } catch (exception) {
            console.error("movida error", exception);
        }
    };

    const handleLogout = async () => {
        try {
            const response = await signOutUser();
            console.log(response);
            setCurrentUser(null);
        } catch (error) {
            console.log("error", error);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <FormInput2
                label="Email"
                id="email"
                type="email"
                value={email}
                onChange={handleEmail}
                error={errorEmail}
                required
            />

            <FormInput
                label="Password"
                id="passwd"
                type="password"
                value={passwd}
                onChange={handlePasswd}
                error={errorPasswd}
                required
            />

            <div>
                <button type="submit">Login con usuario y passwd</button>
                <button type="button" onClick={handleGoogle}>
                    Login con Google
                </button>
            </div>
        </form>
    );
}

export default SignInForm2;