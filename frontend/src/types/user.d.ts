export type User = {
    Id: string,
    FullName: string;
    Phone: string;
    Email: string;
}

interface Authority {
    authority: string;
   }

export type TSessionUser = {
    user: {
    id: number;
    name: string;
    email?: string;
    username: string;
    mobile: string;
    authorities: Authority[];
    enabled: boolean;
    accountNonLocked: boolean;
    credentialsNonExpired: boolean;
    accountNonExpired: boolean;
    }
}

interface JwtPayload {
    jti: string;
    sub: string;
    authorities: Authority[];
    user: UserDetails;
    iat: number;
    exp: number;
   }