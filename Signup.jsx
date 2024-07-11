import "./Signup.css";
import { useState, useRef } from "react";

const SignUp = ({ onCreate }) => {
  const [Id, setId] = useState("");
  const IdRef = useRef();

  const onChangeId = (e) => {
    setId(e.target.value);
  };
  const onSubmit = () => {
    if (Id === "") {
      IdRef.current.focus();
      return;
    } else if (Id.length < 6 || Id.length > 20) {
      console.log("fail");
      return;
    } else {
      console.log("success");
    }
    onCreate(Id);
    setId("");
  };
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };
  return (
    <div className="Sign">
      <h2>회원가입</h2>
      <div className="info">
        <span>아이디</span>
        <div className="confirm">
          <input
            ref={IdRef}
            value={Id}
            onChange={onChangeId}
            onKeyDown={onKeyDown}
            placeholder="아이디를 입력(6~20자)"
          />
          <button onClick={onSubmit}>중복검사</button>
        </div>
        <span>비밀번호</span>
        <input
          type="password"
          placeholder="비밀번호를 입력(문자,숫자,특수문자포함 4~10)"
        />
        <span>비밀번호 확인</span>
        <input type="password" placeholder="비밀번호 재입력" />
        <span>관심기사자격증</span>
        <select name="certificate">
          <option value="">정보처리기사</option>
          <option value="">위험물산업안전기사</option>
          <option value="">전기기사</option>
        </select>
      </div>
      <button>가입</button>
    </div>
  );
};
export default SignUp;
