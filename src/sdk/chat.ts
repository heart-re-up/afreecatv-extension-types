import {Action} from "../type";

export interface Chat {
    /**
     * 채팅이 발생되면 콜백이 호출됩니다.
     *
     * @param callback
     */
    listen(callback: (action: Action, payload: any) => void): void

    /**
     * 현재 채팅방에 채팅을 보냅니다.
     *
     * @param action
     * @param message
     */
    send(action: Action, message: string): void
}