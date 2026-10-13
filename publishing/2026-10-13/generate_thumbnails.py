#!/usr/bin/env python3
import json, math, random
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT=Path(__file__).resolve().parents[2]
MANIFEST=json.loads((ROOT/'publishing/2026-10-13/manifest.json').read_text())
OUT=ROOT/'public/oct13-heroes'; OUT.mkdir(parents=True,exist_ok=True)
BOLD='/System/Library/Fonts/Supplemental/Arial Bold.ttf'; REG='/System/Library/Fonts/Supplemental/Arial.ttf'
def wrap(draw,text,font,maxw):
 words=text.split(); lines=[]; current=[]
 for word in words:
  trial=' '.join(current+[word])
  if current and draw.textbbox((0,0),trial,font=font)[2]>maxw: lines.append(' '.join(current)); current=[word]
  else: current.append(word)
 if current: lines.append(' '.join(current))
 return lines
for idx,item in enumerate(MANIFEST['items']):
 random.seed(item['slug']); W,H=1200,675
 im=Image.new('RGB',(W,H),(235,244,248)); d=ImageDraw.Draw(im)
 # Subtle established navy/teal/coral calling palette with unique geometric call-flow motif.
 d.rectangle((0,0,W,H),fill=(232+idx%6,241,246))
 d.ellipse((720,-180,1300,430),fill=(204,225,234)); d.ellipse((875,300,1280,720),fill=(234,185+idx%18,165))
 for j in range(5):
  x=770+j*76; y=150+int(44*math.sin((j+idx)*1.2)); col=(38,87,119) if j%2==0 else (91,164,172)
  d.ellipse((x,y,x+48,y+48),fill=col)
  if j<4:d.line((x+48,y+24,x+76,y+24+int(44*math.sin((j+1+idx)*1.2))-int(44*math.sin((j+idx)*1.2))),fill=(70,119,143),width=7)
 # handset and evidence card symbols on right
 d.rounded_rectangle((800,330,1080,560),28,fill=(250,252,253),outline=(38,87,119),width=7)
 for j in range(3): d.rounded_rectangle((845,382+j*53,1005,404+j*53),8,fill=(91,164,172) if j<2 else (234,132,105))
 d.arc((955,205,1115,365),20,155,fill=(18,48,74),width=22); d.arc((955,205,1115,365),200,335,fill=(18,48,74),width=22)
 d.rounded_rectangle((66,62,310,105),18,fill=(18,48,74)); lab='RESEARCH' if item['family']=='research' else 'CALLING GUIDE'
 small=ImageFont.truetype(BOLD,24); d.text((88,70),lab,font=small,fill=(255,255,255))
 size=58
 while size>=40:
  font=ImageFont.truetype(BOLD,size); lines=wrap(d,item['title'],font,650)
  if len(lines)<=4: break
  size-=2
 y=155
 for line in lines: d.text((65,y),line,font=font,fill=(18,48,74),stroke_width=1,stroke_fill=(18,48,74)); y+=size+10
 sub=ImageFont.truetype(REG,25); d.text((68,570),'OUTSOURCED CALLERS  •  EVIDENCE-FIRST OPERATIONS',font=sub,fill=(52,94,116))
 im.save(OUT/f"{item['slug']}.png",optimize=True)
 print(item['slug'])
