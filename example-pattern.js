// PACKZÃO BASES FUNK - Example Pattern
// Use at: https://strudel.cc

samples('github:Jayquan75/bases-funk/main')

// Brazilian Funk with Atabaque
stack(
  // Main beat
  s("bfbeat:20").cpm(130/4),
  
  // Atabaque pattern (Brazilian percussion)
  s("bfatabaque:[5,10,15]")
    .fast(2)
    .gain(0.8)
    .room(0.4),
  
  // Vocals
  s("bfvocal:10 bfvocal:15 bfvocal:20")
    .gain(0.9)
    .sometimes(x => x.speed(1.1)),
  
  // Snare
  s("~ bfsnare:0 ~ bfsnare:1")
    .gain(0.7),
  
  // Bass
  s("bfbass:0")
    .note("<f1 f1 d1 e1>")
    .gain(1.3)
    .lpf(800)
).cpm(130/4)
