@echo off
rem START or STOP Services
rem ----------------------------------
rem Check if argument is STOP or START

if not ""%1"" == ""START"" goto stop


"C:\Users\Usuario\Documents\TFG-Laravel\xampp\mysql\bin\mysqld" --defaults-file="C:\Users\Usuario\Documents\TFG-Laravel\xampp\mysql\bin\my.ini" --standalone --console
if errorlevel 1 goto error
goto finish

:stop
"C:\Users\Usuario\Documents\TFG-Laravel\xampp\apache\bin\pv" -f -k mysqld.exe -q

if not exist "C:\Users\Usuario\Documents\TFG-Laravel\xampp\mysql\data\%computername%.pid" goto finish
echo Delete %computername%.pid ...
del "C:\Users\Usuario\Documents\TFG-Laravel\xampp\mysql\data\%computername%.pid"
goto finish


:error
echo MySQL could not be started

:finish
exit
