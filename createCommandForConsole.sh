#!/usr/bin/env bash

SCRIPT=$(readlink -f "$0")
SCRIPTPATH=$(dirname "$SCRIPT")

echo $SCRIPTPATH

teacherNames=$1

gulp runWebpack

cp ${SCRIPTPATH}/dist/js/main.js ${SCRIPTPATH}/dist/js/commandForConsole.js

echo "new AttendanceReport_.AttendanceReport($teacherNames).loadFromGoogleMeet().printAttendances()" >> ${SCRIPTPATH}/dist/js/commandForConsole.js

xclip -selection clipboard ${SCRIPTPATH}/dist/js/commandForConsole.js

