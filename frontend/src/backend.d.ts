import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Booking {
    service: string;
    name: string;
    email: string;
    message: string;
    preferredDate: string;
    phone: string;
}
export interface backendInterface {
    getBookings(): Promise<Array<Booking>>;
    submitBooking(name: string, email: string, phone: string, service: string, preferredDate: string, message: string): Promise<void>;
}
