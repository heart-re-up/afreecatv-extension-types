import {Common} from "./sdk/common";

/**
 * 아프리카 SDK javascript 가 정상적으로 로드되면 전역 window 에 AFREECA 라는 객체가 생긴다.
 */
declare global {
    interface Window {
        AFREECA: typeof Afreeca
    }
}

/**
 * 아프리카 SDK 의 객체는 ext 함수를 통해서 Common SDK 를 반환한다.
 * 직접 정의한 모듈이 아니기 때문에 Ambient Module 로 정의한다.
 */
declare module Afreeca {
    export function ext(): Common
}

export * from './sdk/common'
export * from './sdk/chat'
export * from './sdk/broadcast'
export * from './type'
export * from './model/user'
export * from './model/auth-info'
export * from './model/player-info'
export * from './model/broad-info'
export * from './model/resolution'
export * from './model/message-payload'
export * from './event/cursor-moved-event'
