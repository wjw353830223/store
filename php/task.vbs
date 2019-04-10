Set ws = createObject("WScript.shell")
ws.run "cmd /c register.bat",vbhide
ws.run "cmd /c gateway.bat",vbhide
ws.run "cmd /c businessworker.bat",vbhide
ws.run "cmd /c queue.bat",vbhide