import json
import random
url = "https://avatars.dicebear.com/api/"

sprites = ['male','female','human','identicon','initials','bottts','avataaars','jdenticon','gridy']
ans = []

for i in range(10):
    index = random.randrange(0,len(sprites))
    src = url + sprites[index] + '/' + chr(97 + i) + '.svg'
    d = {}
    d["id"] = i+1
    d["src"] = src
    ans.append(d)

with open('db.json','w+') as file:
    json.dump(ans,file)

print(ans)