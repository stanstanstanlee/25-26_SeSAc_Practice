import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gpa-4">
      <h1>홈 페이지</h1>

      {/* Link 컴포넌트 사용 */}
      <div className="m-2">
        <h3>Link 컴포넌트로 이동:</h3>
        <Link className="border-2" to="/dummy/products">
          상품 목록
        </Link>
        <br />
        <Link className="border-2" to="/dummy/carts">
          장바구니
        </Link>
        <br />
        <Link className="border-2" to="/dummy/posts">
          게시글
        </Link>
      </div>

      {/* useNavigate 훅 사용 */}
      <div className="m-2">
        <h3>useNavigate 훅으로 이동:</h3>
        <button
          className="border-2 cursor-pointer"
          onClick={() => navigate("/dummy/products")}
        >
          상품 목록
        </button>
        <br />
        <button
          className="border-2 cursor-pointer"
          onClick={() => navigate("/dummy/carts")}
        >
          장바구니
        </button>
        <br />
        <button
          className="border-2 cursor-pointer"
          onClick={() => navigate("/dummy/posts")}
        >
          게시글
        </button>
      </div>
    </div>
  );
}
