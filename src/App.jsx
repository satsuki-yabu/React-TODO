import React from "react";
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
