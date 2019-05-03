#!/bin/bash
cd `dirname $0`
DOC_PUBLIC=./docs
rm -r "$DOC_PUBLIC/static"
rm "$DOC_PUBLIC"/precache-manifest.*
cp -r build/* "$DOC_PUBLIC/"
Pages=`cat << EOS
admin-tools
chat-engine
gamepad
imagemap
mic-sensitivity
os-image
password
presentation
quiz
scenario-editor
scheduler
sequrity
speech-to-text
spreadsheet
structure
text-to-speech
usb-mic
dora-script
auto-start
voice-cancel
poweroff
env-variable
robot-head
dora-browser
dora-update
printer-support
aws-polly
external-command
github-scenario
EOS
`
for i in ${Pages}; do
  mkdir -p "$DOC_PUBLIC/$i"
  cp build/index.html "$DOC_PUBLIC/$i"
done
