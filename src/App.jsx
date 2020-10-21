import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div className="input-area">
        <input placeholder="TODO入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了リスト</p>
        <ul className="list-row">
          <li>TODOです</li>
          <button>完了</button>
          <button>削除</button>
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了リスト</p>
        <ul className="list-row">
          <li>TODOでした</li>
          <button>戻す</button>
        </ul>
      </div>
    </>
  );
};
