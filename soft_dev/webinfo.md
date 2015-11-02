# TITLE

the url changes based on query

## Curl

`$ curl http://google.com/q\="<SEARCH TERM>"`

## Wget 

`$ wget http://google.com/q\="<SEARCH TERM>"`

## Urllib

```
import urllib2

url="https://google.com/#safe=off&q=<SEARCH TERM>"

request = urllib2.urlopen(url)
result = request.read()

print result
```  
"screen scraping"

## Soup

```
from bs4 import BeautifulSoup 

url="https://google.com/#safe=off&q=<SEARCH TERM>"

request = urllib2.urlopen(url)
result = request.read()

soup = BeautifulSoup(result, 'html.parser')

print soup

for r in soup.find_all("a"): # parses and prints all anchor elements
	print r
```

# Web APIs

appid in url: API key
