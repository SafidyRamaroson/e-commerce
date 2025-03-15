
import crypto from 'crypto';

{/**Pour generer un OTP de 6 chiffres par default */}
export function generateSimpleOTP({
    min = 100000 ,
    max = 1000000
}: {
    min?: number,
    max?: number
} = {}){
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);

    return crypto.randomInt(minCeiled, maxFloored);
}