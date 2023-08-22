import http.server
import socketserver
import urllib.request
import json
from urllib.parse import urlparse, parse_qs

class NumberManagementHandler(http.server.BaseHTTPRequestHandler):
    def do_GET(self):
        query_params = parse_qs(urlparse(self.path).query)
        urls = query_params.get('url', [])

        merged_numbers = set()

        for url in urls:
            try:
                with urllib.request.urlopen(url, timeout=0.5) as response:
                    data = json.loads(response.read().decode())
                    merged_numbers.update(data.get('numbers', []))
            except (urllib.error.URLError, json.JSONDecodeError):
                pass

        sorted_numbers = sorted(merged_numbers)

        self.send_response(200)
        self.send_header('Content-Type', 'application/json')
        self.end_headers()

        response_data = {'numbers': sorted_numbers}
        self.wfile.write(json.dumps(response_data).encode())

if __name__ == '__main__':
    PORT = 8008
    with socketserver.TCPServer(('', PORT), NumberManagementHandler) as httpd:
        print(f'Serving on port {PORT}')
        httpd.serve_forever()

