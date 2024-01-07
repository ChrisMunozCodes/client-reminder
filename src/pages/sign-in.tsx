import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const SignInPage = () => (
    <SignIn
        appearance={{
            baseTheme: dark
        }}
    />
);

export default SignInPage;