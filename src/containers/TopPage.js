import React, { Component } from 'react';
import Page from '../components/Page';
import PageCell from '../components/PageCell';
import ImageCell from '../components/ImageCell';

export default class TopPage extends Component {
  render() {
    return (
      <div>
        <Page
          title="トップページ"
        >
          <ImageCell src="/image/IMG_6691.jpg" />
          <p><a href="https://github.com/yamagame/dora-engine">dora-engine</a> は <a href="https://www.raspberrypi.org/">RaspberryPi</a> で動作するコミュニケーションロボットエンジンです。</p>
          <p>このページには開発のために必要な情報を載せています。</p>
          <PageCell
            category={'linux'}
            data={
              `
              # コンピュータサイエンスの基礎
              !! 「コンピュータサイエンスの基礎」はロボット開発に必要な基礎知識になります。ここに載っている知らない言葉は調べておきましょう。クリックするとググります。
              ユーザネームとパスワード
              テキストファイルとバイナリファイル
              ファイルのパーミッション
              コマンドとプロセス
              sshとターミナル
              bashとシェルスクリプト
              ホームディレクトリとカレントディレクトリ
              相対パスと絶対パス
              環境変数
              公開鍵暗号方式と署名
              WebサーバとHTTP
              サービスと自動起動
              TCP/IPとIPアドレス
              DHCPと静的IPアドレス

              # 開発言語、プラットフォーム
              !! ロボットエンジンは JavaScript 言語で作られており、ここで示したプラットフォームを使っています。クリックするとググります。
              JavaScript
              Node.js
              Electron
              React

              # コミュニケーションロボットエンジン
              !! ロボットエンジンについて機能ごとに解説したドキュメントです。
              &[microSDカード作成]${process.env.PUBLIC_URL}/os-image
              &[自動起動]${process.env.PUBLIC_URL}/auto-start
              &[シナリオエディタ]${process.env.PUBLIC_URL}/scenario-editor
              &[ドラスクリプト]${process.env.PUBLIC_URL}/dora-script
              &[プレゼンテーション]${process.env.PUBLIC_URL}/presentation
              &[イメージマップ]${process.env.PUBLIC_URL}/imagemap
              &[管理者ツール]${process.env.PUBLIC_URL}/admin-tools
              &[チャットエンジン]${process.env.PUBLIC_URL}/chat-engine
              &[スケジューラ]${process.env.PUBLIC_URL}/scheduler
              &[USBマイク対応]${process.env.PUBLIC_URL}/usb-mic
              &[マイク感度調整]${process.env.PUBLIC_URL}/mic-sensitivity
              &[Google Speech-To-Text]${process.env.PUBLIC_URL}/speech-to-text
              &[Google Text-To-Speech]${process.env.PUBLIC_URL}/text-to-speech
              &[Google スプレッドシート]${process.env.PUBLIC_URL}/spreadsheet
              &[セキュリティについて]${process.env.PUBLIC_URL}/sequrity
              &[管理者パスワードの設定]${process.env.PUBLIC_URL}/password
              &[ゲームパッド連携]${process.env.PUBLIC_URL}/gamepad
              &[発話のキャンセル]${process.env.PUBLIC_URL}/voice-cancel

              # スライド/資料一覧
              !! その他の資料です。
              &&[ラズパイとVoiceKitで作ろう！]https://drive.google.com/open?id=12LfrsxzQDGRk-v81gttH9zKz_HMvV5Hq
              &&[SDカード準備編]https://drive.google.com/open?id=1vC5NIiCZpHpVFmwjlOjlzPgPu2Eviu8bw89k2icR7IU
              &&[UNIXコマンド実習]https://drive.google.com/open?id=1UxeKcgxwCIjwLVanK3-rxwTdfUputq6geBo4iZVjte8
              &&[ダンボール組み立て編]https://drive.google.com/open?id=1BQVOtazwPxyc2CB2F4N2SynkiP7DC0Q8rYdlpKPsVc8
              &&[ネットワーク実習]https://drive.google.com/open?id=1CII1KRSmdQEQRP1wE-roPHqoIL1LlfdDiXZ58KK1wVM
              &&[はじめて編]https://drive.google.com/open?id=1el6OQ5uTFplzP9dXhG2KAymYc-0B00wqCrifEW835_8
              &&[プレゼン入門]https://drive.google.com/open?id=16PMK76QiX3qS9WauVdC11oTb866oyq26hPyFJG0cQQ8
              &&[マイク/スピーカ編]https://drive.google.com/open?id=1jWBIqOWHUJ2Q-HC0eAkgolqmlw4AN91eB3X3EQ5Vy14
              &&[ラズパイ取り付け編]https://drive.google.com/open?id=1DkB5oHxaLwIQSne9gRQFG8j7_6FF9Dk2xiHnUbiUBXA
              &&[ロボ印刷カット編]https://drive.google.com/open?id=1gpepShNKLjME8umoQe_YtkRdjxPpOwtSGNP2OWZYQ4c
              &&[自動起動設定編]https://drive.google.com/open?id=1cYK_g-JJI3853LVMqwCi0bBbwn0kn4GuK1OSXX6ZA68
              &&[電源投入編]https://drive.google.com/open?id=1JsNOr6oqoVxK3dUcXKgMnwOND4eVwpu8kAe-Xppx6kk
              `
            }
          />
        </Page>
      </div>
    )
  }
}

              // &[クイズ]${process.env.PUBLIC_URL}/quiz
              // &[構成]${process.env.PUBLIC_URL}/structure
