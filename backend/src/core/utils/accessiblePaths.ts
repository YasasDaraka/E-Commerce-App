
export type Role = 'ADMIN' | 'USER'; 

export interface Route {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    path: string;
}

export type AccessiblePaths = {
    [key in Role]: Route[];
};

const basePath = process.env.API_BASE_PATH || '/app/api/v1';

export const accessiblePaths: AccessiblePaths = {
    ADMIN: [
        { method: 'POST', path: basePath+'/signIn/' },
        { method: 'POST', path: basePath+'/refreshToken' },
        { method: 'POST', path: basePath+'/logout' },
    ],
    USER: [
        { method: 'POST', path: basePath+'/signIn' },
        { method: 'POST', path: basePath+'/refreshToken' },
        { method: 'POST', path: basePath+'/logout' },
    ]
};

export const dirrectAccessRoutes = ['/app/api/v1/auth/signIn', '/app/api/v1/auth/logout'];