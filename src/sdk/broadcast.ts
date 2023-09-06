export interface Broadcast {
    listen(callback: (action: string, message: any, fromId: string) => void): void

    send(action: string, message: any): void

    whisper(userId: string, action: string, message: any): void
}