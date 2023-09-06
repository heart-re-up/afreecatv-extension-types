import {AuthInfo} from "../model/auth-info";
import {BroadInfo} from "../model/broad-info";
import {PlayerInfo} from "../model/player-info";
import {CursorMovedEvent} from "../event/cursor-moved-event";
import {Broadcast} from "./broadcast";
import {Chat} from "./chat";

export interface Common {
    /**
     * Call the callback function when
     * @param callback
     */
    handleInitialization(callback: (userInfo: AuthInfo, broadInfo: BroadInfo, playerInfo: PlayerInfo) => void): void

    handleAuthorized(callback: (userInfo: AuthInfo) => void): void

    handleBroadInfoChanged(callback: (broadInfo: BroadInfo) => void): void

    handlePlayerPropertyChanged(callback: (playerInfo: PlayerInfo) => void): void

    handleCursorMoved(callback: (event: CursorMovedEvent) => void): void

    /**
     * 플레이어에서 확장 프로그램 UI가 숨겨지거나 다시 노출되는 경우 상태 여부를 수신합니다.
     *
     * 프릭샷으로 전달되지 않습니다.
     *
     * @param callback
     */
    handleVisibilityChanged(callback: (isVisible: boolean) => void): void

    /**
     * 플레이어의 확장 프로그램 UI 내 아이템 섬네일에 마우스 커서가 접근했을때 상태 여부를 수신합니다. 확장 프로그램의 가시성을 조정할 수 있습니다.
     *
     * 프릭샷 및 모바일로 전달되지 않습니다.
     *
     * @param callback
     */
    handleHovered(callback: (isHover: boolean) => void): void

    handleError(callback: (error: Error) => void): void

    /**
     * 방송 정보와 관련된 API 입니다.
     */
    broadcast: Broadcast

    /**
     * 채팅과 관련된 API 입니다.
     */
    chat: Chat
}