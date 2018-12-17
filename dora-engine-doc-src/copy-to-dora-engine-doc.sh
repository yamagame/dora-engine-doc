#!/bin/bash
cd `dirname $0`
DOC_PUBLIC=..
rm -r "$DOC_PUBLIC/static"
rm "$DOC_PUBLIC"/precache-manifest.*
cp -r build/* "$DOC_PUBLIC/"
