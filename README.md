# afreecatv-extension

아프리카TV 에서 2023.08.23 부터 제공하기 시작한 확장프로그램 SDK 의 타입입니다.

모듈이 정의된 Declaration(`index.d.ts`) 파일을 제공합니다.

# 시작하기

```shell
yarn add -D @afreecatv@extension
```

# 예제

```typescript
import {Common, AuthInfo, Action, BroadInfo, PlayerInfo} from "@afreecatv/extension";

if (document.readyState === 'complete') {
    _onPageLoad();
} else {
    window.addEventListener('load', _onPageLoad, false);
    // Remove the event listener when component unmounts
    return () => window.removeEventListener('load', _onPageLoad);
}


```

# 제한사항

아프리카TV 에서 제공하는 방송 프로그램 **프릭샷**의 내장 웹 브라우저는 **2023.09.06** 기준으로 `libcef(chromium version : 73.0.3683.75)` 을 사용하고 있습니다.
해당 버전의 크로미움은 자바스크립트 `ECMA2015` 까지 지원하기 때문에 컴파일 결과는 항상 `ECMA2015` 이하로 해야합니다.