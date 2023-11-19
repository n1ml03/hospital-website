import { 
    Refine,
    GitHubBanner, 
    WelcomePage,
    Authenticated
,AuthPage,ErrorComponent
,AuthBindings, 
} from '@refinedev/core';
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";


import dataProvider from "@refinedev/simple-rest";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import routerBindings, { NavigateToResource, CatchAllNavigate, UnsavedChangesNotifier, DocumentTitleHandler } from "@refinedev/react-router-v6";
import axios, { AxiosRequestConfig } from "axios";
import "./main.css";
import { Login } from "./pages/login";
import { CredentialResponse } from "./interfaces/google";
import { parseJwt } from "./utils/parse-jwt";
import { Booking, Home, Services, Blogs, Contact, About, Hospitals } from './pages';
import { Book, Footer, Navbar } from './components';

const axiosInstance = axios.create();
axiosInstance.interceptors.request.use((request: AxiosRequestConfig) => {
const token = localStorage.getItem("token");
if (request.headers) {
    request.headers["Authorization"] = `Bearer ${token}`;
} else {
    request.headers = {
        Authorization: `Bearer ${token}`,
    };
}

return request;
});



function App() {
    const authProvider: AuthBindings = {
        login: async ({ credential }: CredentialResponse) => {
            const profileObj = credential ? parseJwt(credential) : null;

            if (profileObj) {
                localStorage.setItem(
                    "user",
                    JSON.stringify({
                        ...profileObj,
                        avatar: profileObj.picture,
                    }),
                );
                
    localStorage.setItem("token", `${ credential }`);

                return {
                    success: true,
                    redirectTo: "/",
                };
            }

            return {
                success: false,
            };
        },
        logout: async () => {
            const token = localStorage.getItem("token");

            if (token && typeof window !== "undefined") {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                axios.defaults.headers.common = {};
                window.google?.accounts.id.revoke(token, () => {
                    return {};
                });
            }

            return {
                success: true,
                redirectTo: "/login",
            };
        },
        onError: async (error) => {
            console.error(error);
            return { error };
        },
        check: async () => {
            const token = localStorage.getItem("token");

            if (token) {
                return {
                    authenticated: true,
                };
            }

            return {
                authenticated: false,
                error: {
                    message: "Check failed",
                    name: "Token not found",
                },
                logout: true,
                redirectTo: "/login",
            };
        },
        getPermissions: async () => null,
        getIdentity: async () => {
            const user = localStorage.getItem("user");
            if (user) {
                return JSON.parse(user);
            }

            return null;
        },
    };
    
    
    return (
        <BrowserRouter>
        <RefineKbarProvider>
            
            <DevtoolsProvider>
                <Refine dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
                    routerProvider={routerBindings}
                    authProvider={authProvider} 
                    options={{
                        syncWithLocation: true,
                        warnWhenUnsavedChanges: true,
                        useNewQueryKeys: true,
                            projectId: "wdXd5F-YVWOak-wRBF0P",
                        
                    }}
                >
                    <Navbar/>
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/booking" element={<Booking />} />
                        <Route path="/blogs" element={<Blogs />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/book" element={<Book />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/hospitals" element={<Hospitals />} />
                    </Routes>
                    <Footer/>
                    
                <RefineKbar />
                <UnsavedChangesNotifier />
                <DocumentTitleHandler />
                </Refine>
            </DevtoolsProvider>
            
        </RefineKbarProvider>
        </BrowserRouter>
      );
};

export default App;
