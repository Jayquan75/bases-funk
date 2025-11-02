# PACKZÃO BASES FUNK - Sample Pack for Strudel

Brazilian Funk sample pack organized for [Strudel](https://strudel.cc).

Original pack: PACKZÃO BASES FUNK (kitdepontos.com.br)

## 📦 Contents

- **bfbeat** - 440 beat loops
- **bfatabaque** - 19 atabaque samples (Brazilian percussion)
- **bfvocal** - 4 vocals and acapellas
- **bffx** - 1 sound effects
- **bffill** - 5 drum fills
- **bfsnare** - 4 snares and claps
- **bfbass** - 1 bass samples
- **bfstab** - 31 stabs and hits

## 🎵 Usage in Strudel

```javascript
// Load the pack
samples('github:Jayquan75/bases-funk/main')

// Basic pattern
s("bfbeat:0").cpm(130/4)

// With atabaque (Brazilian percussion)
stack(
  s("bfbeat:10"),
  s("bfatabaque:5").gain(0.8).room(0.3),
  s("~ bfsnare:0 ~ bfsnare:1")
).cpm(130/4)

// Full montagem
stack(
  s("bfbeat:20").cpm(130/4),
  s("bfvocal:5 bfvocal:8").gain(0.9),
  s("bfatabaque:[0,5,10]").fast(2).gain(0.7),
  s("~ bfsnare:2 ~ bfsnare:3"),
  s("bfbass:0").note("<f1 d1 e1>").gain(1.2)
).cpm(130/4)
```

## 🥁 About Atabaque

Atabaque is a tall Brazilian hand drum used in Afro-Brazilian religions and music. 
These samples bring authentic Brazilian percussion flavor to your live coding!

## 🔗 Links

- [Use in Strudel](https://strudel.cc)
- [Strudel Documentation](https://strudel.cc/learn/)

## 📄 Credits

Original pack: PACKZÃO BASES FUNK  
Organized for Strudel by @Jayquan75  
Source: kitdepontos.com.br
