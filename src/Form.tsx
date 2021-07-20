import React, { FC, useState } from "react";

const Form: FC = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <form action="">
        <p>
          メールアドレス：
          <input
            className="email"
            type="email"
            onChange={(e) => setMail(e.target.value)}
            value={mail}
          />
        </p>
        <p>
          パスワード
          <input
            className="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </p>
        <p>
          <input className="submit" type="submit" value="送信" />
        </p>
      </form>
    </div>
  );
};

export default Form;
