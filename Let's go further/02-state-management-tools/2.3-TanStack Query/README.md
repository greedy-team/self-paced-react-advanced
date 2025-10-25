# 02-3. 서버상태관리 - TanStack Query

## 🎯 요구사항

```
 npm install @tanstack/react-query
```

- TanStack Query를 사용해서 애플리케이션 내의 클라이언트 상태, 서버 상태 분리에 대해 마이그레이션을 해보세요.
- TanStack Query를 **왜** 사용하는지, 기존 코드와 비교했을때 어떤 점이 달랐는지, 또 trade-off가 있는지 적어주세요.
  - 기술적인 것도 좋고 개발자의 경험 측면에서도 좋습니다.
- (선택) TanStack Query Devtools를 이용하고 Query의 변화와 Mutation의 발생을 확인해보세요.
- (선택) 낙관적 업데이트를 적용해보고 어떤 trade-off가 있는지 적어주세요.

### 😗구현 예시

- 컴포넌트의 이름이나 구조는 마음대로 변경해도 좋습니다.
- 아래는 main.jsx의 설정 모습입니다.

```javascript
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
```

## ✅ 키워드

- 서버상태관리
- TanStack Query
- Query Client
- Query Key
- Query Functions
- Mutations
- Optimistic Update

## 🧙‍♀️ 진행 가이드

- 진행시간 : 12시간 내에 완료하는 것을 목표로 합니다.

## 🔗 참고 문서

- [TanStack Query 공식문서](https://tanstack.com/query/latest/docs/framework/react/overview)
- [테코톡(시모의 TanStack Query)](https://www.youtube.com/watch?v=RfK15tw8H-I)
