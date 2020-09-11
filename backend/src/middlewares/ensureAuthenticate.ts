import { Request, Response, NextFunction } from 'express';

import { verify } from 'jsonwebtoken';
import AuthSecret from '../configs/AuthSecret';

interface TokenPayload {
    iat: number;
    exp: number;
    sub: string;
}

function ensureAuhenticated(
    request: Request,
    response: Response,
    next: NextFunction,
): void {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new Error('JWT token is missing');
    }

    const [, token] = authHeader.split(' ');

    try {
        const decoded = verify(token, AuthSecret.jwt.secret);

        const { sub } = decoded as TokenPayload;

        request.user = {
            id: sub,
        };

        return next();
    } catch {
        throw new Error('Invalid JWT token');
    }
}

export default ensureAuhenticated;
