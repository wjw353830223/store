@echo off
set web_path=%~dp0
cd ../../php-nts-5.6.9/
set php_path=%cd%
cd /d %web_path%
%php_path%\php think queue:listen --queue backupQueue --timeout 0>%web_path%log\queue.log
exit
