export const COUPON_CODES = {
    BFRIDAY: "BFRIDAY",
    SEMIANNUAL: "SEMIANNUAL",
    XMAS2025: "XMAS2025",
    CYBER: "CYBER"
} as const;

export type CouponCode = keyof typeof COUPON_CODES;