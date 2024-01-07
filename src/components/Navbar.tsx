import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, } from "@nextui-org/react";
// import { AcmeLogo } from "./AcmeLogo.jsx";
import { SignIn, SignInButton, SignOutButton, useUser } from "@clerk/nextjs";

export default function App() {
    const user = useUser()
    return (
        <Navbar shouldHideOnScroll>
            <NavbarBrand>
                {/* <AcmeLogo /> */}
                <p className="font-bold text-inherit">ACME</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Features
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="#" aria-current="page">
                        Customers
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Integrations
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                {/* <NavbarItem className="hidden lg:flex">
                    <Link href="#">Login</Link>
                </NavbarItem> */}
                <NavbarItem>
                    <div>

                        {!user.isSignedIn && <Button color="success" variant="ghost">
                            <SignInButton />
                        </Button>}
                        {!!user.isSignedIn && <Button color="danger" variant="ghost">
                            <SignOutButton />
                        </Button>}
                    </div>
                    {/* <SignInButton>
                            <button className="">Sign in with Clerk</button>
                        </SignInButton> */}
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
