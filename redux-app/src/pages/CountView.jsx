// 전역 상태 count 조회 로직을 위한 코드
// ...
import { useSelector } from "react-redux";
export default function CountView() {
  const count = useSelector((state) => state.counter.count);
  // 전역 상태 count 조회 로직을 위한 코드
  // ...

  return (
    <div>
      <div>전역 상태 count: {count}</div>
    </div>
  );
}
