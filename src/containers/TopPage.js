import React, { Component } from 'react';
import Page from '../components/Page';

export default class TopPage extends Component {
  render() {
    return (
      <div>
        <Page
          title="トップページ"
          data={
            `
            # コンピュータサイエンスの基礎
            公開鍵暗号方式
            TCP/IPとIPアドレス
            コマンドとプロセス
            WebサーバとHTTP
            環境変数
            sshとターミナル
            Linuxサービスと自動起動
            DHCPと静的アドレス

            # コミュニケーションロボットエンジン
            !! Node.js
            !! Electron
            !! React
            !! Google スプレッドシート連携
            !! チャットエンジン
            !! スケジューラ
            !! USBマイク対応
            !! マイク感度調整
            !! Google Speech-To-Text
            !! Google Text-To-Speech
            !! セキュリティについて
            !! 管理者パスワードの設定
            !! ゲームパッド連携
            `
          }
        >
        </Page>
      </div>
    )
  }
}
