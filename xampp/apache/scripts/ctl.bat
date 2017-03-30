@echo off

if not ""%1"" == ""START"" goto stop

cmd.exe /C start /B /MIN "" "C:\Users\Usuario\Documents\TFG-Laravel\xampp\apache\bin\httpd.exe"

if errorlevel 255 goto finish
if errorlevel 1 goto error
goto finish

:stop
"C:\Users\Usuario\Documents\TFG-Laravel\xampp\apache\bin\pv" -f -k httpd.exe -q
if not exist "C:\Users\Usuario\Documents\TFG-Laravel\xampp\apache\logs\httpd.pid" GOTO finish
del "C:\Users\Usuario\Documents\TFG-Laravel\xampp\apache\logs\httpd.pid"
goto finish

:error
echo Error starting Apache

:finish
exit
