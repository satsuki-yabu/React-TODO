import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div>
        <input placeholder="TODO入力" />
        <button>追加</button>
      </div>
      <div>
        <p>未完了リスト</p>
        <ul>
          <li>TODOです</li>
          <button>完了</button>
          <button>削除</button>
        </ul>
      </div>
      <div>
        <p>完了リスト</p>
        <ul>
          <li>TODOでした</li>
          <button>戻す</button>
        </ul>
      </div>
    </>
  );
};
