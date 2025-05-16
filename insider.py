import socket

if __name__ == "__main__":
    HOST = ''
    PORT = ''

    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.bind((HOST,PORT))
        s.listen()
        print(f"Waiting to let myself in through port {PORT}...")
        conn, addr = s.accept()
        with conn:
            print(f"Let myself in through ip {addr}")
            while True:
                data = conn.recv(1024)
                if not data:
                    break
                conn.sendall(data)