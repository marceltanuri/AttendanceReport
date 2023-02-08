#!/usr/bin/env bash

SCRIPT=$(readlink -f "$0")
SCRIPTPATH=$(dirname "$SCRIPT")
echo $SCRIPTPATH

cd $SCRIPTPATH
gulp runWebpack
cd -

cp ${SCRIPTPATH}/dist/js/main.js ${SCRIPTPATH}/dist/js/commandForConsole.js

teacherNames=$1
echo "new AttendanceReport_.AttendanceReport($teacherNames).loadFromGoogleMeet().printAttendances()" >> ${SCRIPTPATH}/dist/js/commandForConsole.js

xclip -selection clipboard ${SCRIPTPATH}/dist/js/commandForConsole.js
rm -rf ${SCRIPTPATH}/dist/js/commandForConsole.js

