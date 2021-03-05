from datetime import datetime

def log_url(url):
    '''
    logs received url to a log file
    '''
    with open('logs/websites.log', 'a') as f:
        f.write(f"{datetime.now()}: {url}\n")
    