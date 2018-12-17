#!/bin/bash
cd `dirname $0`
DOC_PUBLIC=./docs
rm -r "$DOC_PUBLIC/static"
rm "$DOC_PUBLIC"/precache-manifest.*
cp -r build/* "$DOC_PUBLIC/"
Pages=`cat << EOS
AdminTools
ChatEngine
GamePad
ImageMap
MICSensitivity
OSImage
Password
Presentation
Quiz
ScenarioEditor
Scheduler
Sequrity
SpeechToText
Spreadsheet
Structure
TextToSpeech
USBMic
DoraScript
EOS
`
for i in ${Pages}; do
  mkdir -p "$DOC_PUBLIC/$i"
  cp build/index.html "$DOC_PUBLIC/$i"
done
