import "dotenv/config";
import JWT from "jsonwebtoken";
import type { User } from "../../prisma/generated/prisma/client.js";
import type { Request, Response } from "express";

export default function generateToken(payload: User)
{
    const secret = process.env.SECRET_TOKEN || 'secret';
    return JWT.sign(
            {id: payload.id, username: payload.user_name, role: payload.role},
            secret,
            {expiresIn: '1h'}
        )
}