#!/usr/bin/env pwsh
$basedir=Split-Path $MyInvocation.MyCommand.Definition -Parent

$exe=""
if ($PSVersionTable.PSVersion -lt "6.0" -or $IsWindows) {
  $exe=".exe"
}
$ret=0
if (Test-Path "$basedir/node$exe") {
  & "$basedir/node$exe"  "$basedir/../cx.js" $args
  $ret=$LASTEXITCODE
} else {
  & "node$exe"  "$basedir/../cx.js" $args
  $ret=$LASTEXITCODE
}
exit $ret