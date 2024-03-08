import './App.css';
import React, { useState } from 'react';

const InputForm = () => {
  // フォームの状態を管理するためのuseStateフック
  const [email, setEmail] = useState('');
  // エラーメッセージの状態を管理するためのuseStateフック
  const [errorMessage, setErrorMessage] = useState('');

  // フォームの入力内容が変更されたときのハンドラ
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    // 入力内容が変更されるたびにエラーメッセージをクリア
    setErrorMessage('');
  };

  // メールアドレスの正規表現パターン
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // フォームが送信されたときのハンドラ
  const handleSubmit = (event) => {
    event.preventDefault();

    // バリデーションなどを行う
    if (!email) {
      setErrorMessage('メールアドレスを入力してください');
      return;
    }

    if (!emailPattern.test(email)) {
      setErrorMessage('正しいメールアドレスの形式で入力してください');
      return;
    }

    // ここでフォームの内容を利用して何かを行う（例: バリデーション、APIへの送信など）
    console.log('Submitted email:', email);
  };

  return (
    <div>
      {/* エラーメッセージがあれば表示 */}
      {errorMessage && <div style={{ color: 'red' }} class="error-message">{errorMessage}</div>}

      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <button type="submit" class="submit">Submit</button>
      </form>
    </div>
  );
};

export default InputForm;

