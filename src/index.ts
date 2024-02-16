import Common from "./sdk/Common";

/**
 * 아프리카 SDK 의 객체는 ext 함수를 통해서 Common SDK 를 반환한다.
 * 직접 정의한 모듈이 아니기 때문에 Ambient Module 로 정의한다.
 */
// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Afreeca {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  export function ext(): Common;
}

/**
 * 아프리카 SDK javascript 가 정상적으로 로드되면 전역 window 에 AFREECA 라는 객체가 생긴다.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-namespace
declare namespace global {
  export interface Window {
    AFREECA: typeof Afreeca;
  }
}
