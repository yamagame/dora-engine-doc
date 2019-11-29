import React, { Component } from 'react';
import PageContainer from '../../components/PageContainer';

const data = `
Raspberry Pi は電池でバックアップされた時計を内臓していません。ネットに接続していないと、時計が狂ってきます。

RTC(リアルタイムクロック)をI2C経由で接続することでこの問題は解決できます。

DS3231を使った場合として説明します。

まず、I2Cを有効にします。/boot/config.txt に以下の１行を追記します。

~
dtparam=i2c_arm=on
~

次に RTC を有効にします。 /boot/config.txt に以下の１行を追記します。

~
dtoverlay=i2c-rtc,ds3231
~

!! /lib/udev/hwclock-set を編集します。以下の３行をコメントアウトします。

~
if [ -e /run/systemd/system ] ; then
exit 0
fi
~

~
#if [ -e /run/systemd/system ] ; then
# exit 0
#fi
~

再起動後、ネットに接続してしばらく待つと時計が自動的に合います。
以下のコマンドで確認できます。

~
$ sudo hwclock -r
~

手動でシステム時間を書き込むには以下のコマンドを使います。

~
$ sudo hwclock -w
~

!! DS3231が接続されているかは以下のコマンドで 0x68 が UU になっているかどうかで判断できます。

~
pi@raspberrypi:~ $ i2cdetect -y 1
     0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f
00:          -- -- -- -- -- -- -- -- -- -- -- -- -- 
10: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
20: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
30: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
40: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
50: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
60: -- -- -- -- -- -- -- -- UU -- -- -- -- -- -- -- 
70: -- -- -- -- -- -- -- --                         
~

`

export default class Quiz extends Component {
  render() {
    return <PageContainer title="RTC対応" data={data} />
  }
}
