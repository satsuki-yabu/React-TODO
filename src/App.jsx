import React, { useState } from "react";
import "./styles.css";

//実装機能　入力フォームに入れる。→値を受け取る
//その値を、未完了リストに反映する
//未完了リストに載せるのは、リストと、ボタン２つ

//完了ボタンを押すと、未完了リストから削除される。
//そのリストが、完了リストに反映される
//完了リストに載せるのは、リストと、ボタン１つ

//削除ボタンを押すと、未完了リストから削除される。

//戻すボタンを押すと、完了リストから削除される。
//そのリストが、未完了リストに反映される
//未完了リストに載せるのは、リストと、ボタン２つ

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState(["あああ", "いいい"]);

  const [completeTodos, setCompleteTodos] = useState(["ううう"]);

  return (
    <>
      <div className="input-area">
        <input placeholder="TODO入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了リスト</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <div className="list-row">
                <li>あああ</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了リスト</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
