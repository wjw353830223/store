@echo off
cd /d %~dp0\frontEnd\
start server.bat
cd /d %~dp0\backEnd\
start server.bat
cd /d %~dp0\php\
start socket.bat
start queue.bat
exit