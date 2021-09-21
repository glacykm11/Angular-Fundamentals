import { InjectionToken } from "@angular/core";

export let TOASTR_TOKEN = new InjectionToken<any>('toastr')

export interface Toastr {
    success (msg: string, title?: string): void
    info (msg: string, title?: string): void
    warning (msg: string, title?: string): void
    error (msg: string, title?: string): void
}