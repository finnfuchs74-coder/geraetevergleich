// Gerätedaten (Herstellerangaben, Stand Mitte 2026, ohne Gewähr).
// RAM/Speicher in GB als Zahl oder [min, max]; Gewicht in g; null = keine Angabe.
(function(){
const TB = 1024;

// [Marke, Modell, Display, Chip, RAM, Speicher, Kamera hinten, Akku, Gewicht, Jahr]
const PHONES = [
  ["Apple","iPhone 17 Pro Max",'6,9" OLED, 120 Hz',"A19 Pro",12,[256,2*TB],"48 + 48 (UW) + 48 MP (4× Tele)","bis 37 h Video",231,2025],
  ["Apple","iPhone 17 Pro",'6,3" OLED, 120 Hz',"A19 Pro",12,[256,TB],"48 + 48 (UW) + 48 MP (4× Tele)","bis 31 h Video",204,2025],
  ["Apple","iPhone Air",'6,5" OLED, 120 Hz',"A19 Pro",12,[256,TB],"48 MP (Einzelkamera)","bis 27 h Video",165,2025],
  ["Apple","iPhone 17",'6,3" OLED, 120 Hz',"A19",8,[256,512],"48 + 48 MP (UW)","bis 30 h Video",177,2025],
  ["Apple","iPhone 16e",'6,1" OLED, 60 Hz',"A18",8,[128,512],"48 MP (Einzelkamera)","bis 26 h Video",167,2025],
  ["Apple","iPhone 16 Pro Max",'6,9" OLED, 120 Hz',"A18 Pro",8,[256,TB],"48 + 48 (UW) + 12 MP (5× Tele)","bis 33 h Video",227,2024],
  ["Apple","iPhone 16 Pro",'6,3" OLED, 120 Hz',"A18 Pro",8,[128,TB],"48 + 48 (UW) + 12 MP (5× Tele)","bis 27 h Video",199,2024],
  ["Apple","iPhone 16 Plus",'6,7" OLED, 60 Hz',"A18",8,[128,512],"48 + 12 MP (UW)","bis 27 h Video",199,2024],
  ["Apple","iPhone 16",'6,1" OLED, 60 Hz',"A18",8,[128,512],"48 + 12 MP (UW)","bis 22 h Video",170,2024],
  ["Apple","iPhone 15 Pro Max",'6,7" OLED, 120 Hz',"A17 Pro",8,[256,TB],"48 + 12 (UW) + 12 MP (5× Tele)","bis 29 h Video",221,2023],
  ["Apple","iPhone 15 Pro",'6,1" OLED, 120 Hz',"A17 Pro",8,[128,TB],"48 + 12 (UW) + 12 MP (3× Tele)","bis 23 h Video",187,2023],
  ["Apple","iPhone 15 Plus",'6,7" OLED, 60 Hz',"A16 Bionic",6,[128,512],"48 + 12 MP (UW)","bis 26 h Video",201,2023],
  ["Apple","iPhone 15",'6,1" OLED, 60 Hz',"A16 Bionic",6,[128,512],"48 + 12 MP (UW)","bis 20 h Video",171,2023],
  ["Apple","iPhone 14",'6,1" OLED, 60 Hz',"A15 Bionic",6,[128,512],"12 + 12 MP (UW)","bis 20 h Video",172,2022],
  ["Apple","iPhone 13",'6,1" OLED, 60 Hz',"A15 Bionic",4,[128,512],"12 + 12 MP (UW)","bis 19 h Video",173,2021],
  ["Apple","iPhone SE (3. Gen.)",'4,7" LCD, 60 Hz',"A15 Bionic",4,[64,256],"12 MP (Einzelkamera)","bis 15 h Video",144,2022],

  ["Samsung","Galaxy S25 Ultra",'6,9" AMOLED, 120 Hz',"Snapdragon 8 Elite",[12,16],[256,TB],"200 + 50 (UW) + 10 (3×) + 50 MP (5×)","5.000 mAh",218,2025],
  ["Samsung","Galaxy S25 Edge",'6,7" AMOLED, 120 Hz',"Snapdragon 8 Elite",12,[256,512],"200 + 12 MP (UW)","3.900 mAh",163,2025],
  ["Samsung","Galaxy S25+",'6,7" AMOLED, 120 Hz',"Snapdragon 8 Elite",12,[256,512],"50 + 12 (UW) + 10 MP (3×)","4.900 mAh",190,2025],
  ["Samsung","Galaxy S25",'6,2" AMOLED, 120 Hz',"Snapdragon 8 Elite",12,[128,512],"50 + 12 (UW) + 10 MP (3×)","4.000 mAh",162,2025],
  ["Samsung","Galaxy S25 FE",'6,7" AMOLED, 120 Hz',"Exynos 2400",8,[128,512],"50 + 12 (UW) + 8 MP (3×)","4.900 mAh",190,2025],
  ["Samsung","Galaxy Z Fold7",'8" innen / 6,5" außen, 120 Hz',"Snapdragon 8 Elite",[12,16],[256,TB],"200 + 12 (UW) + 10 MP (3×)","4.400 mAh",215,2025],
  ["Samsung","Galaxy Z Flip7",'6,9" innen / 4,1" außen, 120 Hz',"Exynos 2500",12,[256,512],"50 + 12 MP (UW)","4.300 mAh",188,2025],
  ["Samsung","Galaxy Z Fold6",'7,6" innen / 6,3" außen, 120 Hz',"Snapdragon 8 Gen 3",12,[256,TB],"50 + 12 (UW) + 10 MP (3×)","4.400 mAh",239,2024],
  ["Samsung","Galaxy Z Flip6",'6,7" innen / 3,4" außen, 120 Hz',"Snapdragon 8 Gen 3",12,[256,512],"50 + 12 MP (UW)","4.000 mAh",187,2024],
  ["Samsung","Galaxy S24 Ultra",'6,8" AMOLED, 120 Hz',"Snapdragon 8 Gen 3",12,[256,TB],"200 + 12 (UW) + 10 (3×) + 50 MP (5×)","5.000 mAh",232,2024],
  ["Samsung","Galaxy S24+",'6,7" AMOLED, 120 Hz',"Exynos 2400",12,[256,512],"50 + 12 (UW) + 10 MP (3×)","4.900 mAh",196,2024],
  ["Samsung","Galaxy S24",'6,2" AMOLED, 120 Hz',"Exynos 2400",8,[128,512],"50 + 12 (UW) + 10 MP (3×)","4.000 mAh",167,2024],
  ["Samsung","Galaxy S24 FE",'6,7" AMOLED, 120 Hz',"Exynos 2400e",8,[128,512],"50 + 12 (UW) + 8 MP (3×)","4.700 mAh",213,2024],
  ["Samsung","Galaxy A56",'6,7" AMOLED, 120 Hz',"Exynos 1580",[8,12],[128,256],"50 + 12 (UW) + 5 MP (Makro)","5.000 mAh",198,2025],
  ["Samsung","Galaxy A36",'6,7" AMOLED, 120 Hz',"Snapdragon 6 Gen 3",[6,8],[128,256],"50 + 8 (UW) + 5 MP (Makro)","5.000 mAh",195,2025],
  ["Samsung","Galaxy A55",'6,6" AMOLED, 120 Hz',"Exynos 1480",8,[128,256],"50 + 12 (UW) + 5 MP (Makro)","5.000 mAh",213,2024],
  ["Samsung","Galaxy A16 5G",'6,7" AMOLED, 90 Hz',"Exynos 1330",[4,8],[128,256],"50 + 5 (UW) + 2 MP (Makro)","5.000 mAh",200,2024],

  ["Google","Pixel 10 Pro XL",'6,8" OLED, 120 Hz',"Tensor G5",16,[256,TB],"50 + 48 (UW) + 48 MP (5×)","5.200 mAh",232,2025],
  ["Google","Pixel 10 Pro",'6,3" OLED, 120 Hz',"Tensor G5",16,[128,TB],"50 + 48 (UW) + 48 MP (5×)","4.870 mAh",207,2025],
  ["Google","Pixel 10",'6,3" OLED, 120 Hz',"Tensor G5",12,[128,256],"48 + 13 (UW) + 10,8 MP (5×)","4.970 mAh",204,2025],
  ["Google","Pixel 10 Pro Fold",'8" innen / 6,4" außen, 120 Hz',"Tensor G5",16,[256,TB],"48 + 10,5 (UW) + 10,8 MP (5×)","5.015 mAh",258,2025],
  ["Google","Pixel 9a",'6,3" OLED, 120 Hz',"Tensor G4",8,[128,256],"48 + 13 MP (UW)","5.100 mAh",186,2025],
  ["Google","Pixel 9 Pro XL",'6,8" OLED, 120 Hz',"Tensor G4",16,[128,TB],"50 + 48 (UW) + 48 MP (5×)","5.060 mAh",221,2024],
  ["Google","Pixel 9 Pro",'6,3" OLED, 120 Hz',"Tensor G4",16,[128,TB],"50 + 48 (UW) + 48 MP (5×)","4.700 mAh",199,2024],
  ["Google","Pixel 9",'6,3" OLED, 120 Hz',"Tensor G4",12,[128,256],"50 + 48 MP (UW)","4.700 mAh",198,2024],
  ["Google","Pixel 9 Pro Fold",'8" innen / 6,3" außen, 120 Hz',"Tensor G4",16,[256,512],"48 + 10,5 (UW) + 10,8 MP (5×)","4.650 mAh",257,2024],
  ["Google","Pixel 8a",'6,1" OLED, 120 Hz',"Tensor G3",8,[128,256],"64 + 13 MP (UW)","4.492 mAh",188,2024],
  ["Google","Pixel 8 Pro",'6,7" OLED, 120 Hz',"Tensor G3",12,[128,TB],"50 + 48 (UW) + 48 MP (5×)","5.050 mAh",213,2023],
  ["Google","Pixel 8",'6,2" OLED, 120 Hz',"Tensor G3",8,[128,256],"50 + 12 MP (UW)","4.575 mAh",187,2023],

  ["Xiaomi","Xiaomi 15 Ultra",'6,73" AMOLED, 120 Hz',"Snapdragon 8 Elite",16,[512,TB],"50 + 50 (UW) + 50 (3×) + 200 MP (4,3×)","5.410 mAh",226,2025],
  ["Xiaomi","Xiaomi 15",'6,36" AMOLED, 120 Hz',"Snapdragon 8 Elite",12,[256,512],"50 + 50 (UW) + 50 MP (2,6×)","5.240 mAh",191,2025],
  ["Xiaomi","Xiaomi 15T Pro",'6,83" AMOLED, 144 Hz',"Dimensity 9400+",12,[256,TB],"50 + 50 (5×) + 12 MP (UW)","5.500 mAh",210,2025],
  ["Xiaomi","Xiaomi 15T",'6,83" AMOLED, 120 Hz',"Dimensity 8400-Ultra",12,[256,512],"50 + 50 (2×) + 12 MP (UW)","5.500 mAh",194,2025],
  ["Xiaomi","Xiaomi 14 Ultra",'6,73" AMOLED, 120 Hz',"Snapdragon 8 Gen 3",16,512,"50 + 50 (UW) + 50 (3,2×) + 50 MP (5×)","5.000 mAh",220,2024],
  ["Xiaomi","Xiaomi 14T Pro",'6,67" AMOLED, 144 Hz',"Dimensity 9300+",12,[256,TB],"50 + 50 (2,6×) + 12 MP (UW)","5.000 mAh",209,2024],
  ["Xiaomi","Xiaomi 14T",'6,67" AMOLED, 144 Hz',"Dimensity 8300-Ultra",12,[256,512],"50 + 50 (2×) + 12 MP (UW)","5.000 mAh",195,2024],
  ["Xiaomi","Xiaomi 14",'6,36" AMOLED, 120 Hz',"Snapdragon 8 Gen 3",12,[256,512],"50 + 50 (UW) + 50 MP (3,2×)","4.610 mAh",193,2024],
  ["Xiaomi","Redmi Note 14 Pro+ 5G",'6,67" AMOLED, 120 Hz',"Snapdragon 7s Gen 3",[8,12],[256,512],"200 + 8 (UW) + 2 MP (Makro)","5.110 mAh",205,2025],
  ["Xiaomi","Redmi Note 14 Pro 5G",'6,67" AMOLED, 120 Hz',"Dimensity 7300-Ultra",[8,12],[256,512],"200 + 8 (UW) + 2 MP (Makro)","5.110 mAh",190,2025],
  ["Xiaomi","Redmi Note 14",'6,67" AMOLED, 120 Hz',"Helio G99-Ultra",[6,8],[128,256],"108 + 2 + 2 MP","5.500 mAh",196,2025],
  ["Xiaomi","POCO F7 Pro",'6,67" AMOLED, 120 Hz',"Snapdragon 8 Gen 3",12,[256,512],"50 + 8 MP (UW)","6.000 mAh",206,2025],
  ["Xiaomi","POCO F7",'6,83" AMOLED, 120 Hz',"Snapdragon 8s Gen 4",12,[256,512],"50 + 8 MP (UW)","6.500 mAh",215,2025],
  ["Xiaomi","POCO X7 Pro",'6,67" AMOLED, 120 Hz',"Dimensity 8400-Ultra",[8,12],[256,512],"50 + 8 MP (UW)","6.000 mAh",195,2025],

  ["OnePlus","OnePlus 15",'6,78" AMOLED, 165 Hz',"Snapdragon 8 Elite Gen 5",[12,16],[256,512],"50 + 50 (UW) + 50 MP (3,5×)","7.300 mAh",211,2025],
  ["OnePlus","OnePlus 13",'6,82" AMOLED, 120 Hz',"Snapdragon 8 Elite",[12,16],[256,512],"50 + 50 (UW) + 50 MP (3×)","6.000 mAh",210,2025],
  ["OnePlus","OnePlus 13R",'6,78" AMOLED, 120 Hz',"Snapdragon 8 Gen 3",[12,16],[256,512],"50 + 8 (UW) + 50 MP (2×)","6.000 mAh",206,2025],
  ["OnePlus","OnePlus Nord 5",'6,83" AMOLED, 144 Hz',"Snapdragon 8s Gen 3",[8,12],[256,512],"50 + 8 MP (UW)","5.200 mAh",211,2025],
  ["OnePlus","OnePlus Nord CE5",'6,77" AMOLED, 120 Hz',"Dimensity 8350 Apex",[8,12],[128,256],"50 + 8 MP (UW)","5.200 mAh",199,2025],
  ["OnePlus","OnePlus 12",'6,82" AMOLED, 120 Hz',"Snapdragon 8 Gen 3",[12,16],[256,512],"50 + 48 (UW) + 64 MP (3×)","5.400 mAh",220,2024],

  ["Oppo","Find X9 Pro",'6,78" AMOLED, 120 Hz',"Dimensity 9500",16,512,"50 + 50 (UW) + 200 MP (3×)","7.500 mAh",224,2025],
  ["Oppo","Find X8 Pro",'6,78" AMOLED, 120 Hz',"Dimensity 9400",16,512,"50 + 50 (UW) + 50 (3×) + 50 MP (6×)","5.910 mAh",215,2024],
  ["Oppo","Find X8",'6,59" AMOLED, 120 Hz',"Dimensity 9400",[12,16],[256,512],"50 + 50 (UW) + 50 MP (3×)","5.630 mAh",193,2024],
  ["Oppo","Reno14 Pro",'6,83" AMOLED, 120 Hz',"Dimensity 8450",12,512,"50 + 50 (UW) + 50 MP (3,5×)","6.200 mAh",201,2025],
  ["Oppo","Reno14",'6,59" AMOLED, 120 Hz',"Dimensity 8350",12,[256,512],"50 + 8 (UW) + 50 MP (3,5×)","6.000 mAh",187,2025],

  ["Vivo","X300 Pro",'6,78" AMOLED, 120 Hz',"Dimensity 9500",16,512,"50 + 50 (UW) + 200 MP (3,7×)","6.510 mAh",226,2025],
  ["Vivo","X200 Pro",'6,78" AMOLED, 120 Hz',"Dimensity 9400",16,512,"50 + 50 (UW) + 200 MP (3,7×)","6.000 mAh",228,2024],

  ["Honor","Magic7 Pro",'6,8" OLED, 120 Hz',"Snapdragon 8 Elite",12,512,"50 + 50 (UW) + 200 MP (3×)","5.270 mAh",223,2025],
  ["Honor","Magic V5",'7,95" innen / 6,43" außen, 120 Hz',"Snapdragon 8 Elite",16,512,"50 + 50 (UW) + 64 MP (3×)","5.820 mAh",217,2025],
  ["Honor","Honor 400 Pro",'6,7" OLED, 120 Hz',"Snapdragon 8 Gen 3",12,512,"200 + 12 (UW) + 50 MP (3×)","5.300 mAh",205,2025],
  ["Honor","Honor 400",'6,55" OLED, 120 Hz',"Snapdragon 7 Gen 4",[8,12],[256,512],"200 + 12 MP (UW)","5.300 mAh",184,2025],
  ["Honor","Magic V3",'7,92" innen / 6,43" außen, 120 Hz',"Snapdragon 8 Gen 3",12,512,"50 + 40 (UW) + 50 MP (3,5×)","5.150 mAh",226,2024],

  ["Huawei","Pura 80 Ultra",'6,8" OLED, 120 Hz',"Kirin 9020",16,512,"50 + 40 (UW) + Dual-Tele","5.700 mAh",234,2025],
  ["Huawei","Pura 70 Ultra",'6,8" OLED, 120 Hz',"Kirin 9010",16,512,"50 + 40 (UW) + 50 MP (3,5×)","5.200 mAh",226,2024],
  ["Huawei","Mate X6",'7,93" innen / 6,45" außen, 120 Hz',"Kirin 9020",12,512,"50 + 40 (UW) + 48 MP (4×)","5.110 mAh",239,2024],

  ["Motorola","razr 60 ultra",'7" innen / 4" außen, 165 Hz',"Snapdragon 8 Elite",16,512,"50 + 50 MP (UW)","4.700 mAh",199,2025],
  ["Motorola","razr 60",'6,96" innen / 3,6" außen, 120 Hz',"Dimensity 7400X",8,256,"50 + 13 MP (UW)","4.500 mAh",188,2025],
  ["Motorola","edge 60 pro",'6,7" pOLED, 120 Hz',"Dimensity 8350",12,512,"50 + 50 (UW) + 10 MP (3×)","6.000 mAh",186,2025],
  ["Motorola","edge 60",'6,67" pOLED, 120 Hz',"Dimensity 7400",[8,12],256,"50 + 50 (UW) + 10 MP (3×)","5.200 mAh",179,2025],
  ["Motorola","edge 50 ultra",'6,7" pOLED, 144 Hz',"Snapdragon 8s Gen 3",[12,16],[512,TB],"50 + 50 (UW) + 64 MP (3×)","4.500 mAh",197,2024],
  ["Motorola","moto g85",'6,67" pOLED, 120 Hz',"Snapdragon 6s Gen 3",[8,12],256,"50 + 8 MP (UW)","5.000 mAh",172,2024],
  ["Motorola","moto g55",'6,49" LCD, 120 Hz',"Dimensity 7025",8,256,"50 + 8 MP (UW)","5.000 mAh",183,2024],

  ["Nothing","Phone (3)",'6,67" AMOLED, 120 Hz',"Snapdragon 8s Gen 4",[12,16],[256,512],"50 + 50 (UW) + 50 MP (3×)","5.150 mAh",218,2025],
  ["Nothing","Phone (3a) Pro",'6,77" AMOLED, 120 Hz',"Snapdragon 7s Gen 3",[8,12],[256,512],"50 + 50 (3×) + 8 MP (UW)","5.000 mAh",211,2025],
  ["Nothing","Phone (3a)",'6,77" AMOLED, 120 Hz',"Snapdragon 7s Gen 3",[8,12],[128,256],"50 + 50 (2×) + 8 MP (UW)","5.000 mAh",201,2025],
  ["Nothing","CMF Phone 2 Pro",'6,77" AMOLED, 120 Hz',"Dimensity 7300 Pro",8,[128,256],"50 + 50 (2×) + 8 MP (UW)","5.000 mAh",185,2025],
  ["Nothing","Phone (2)",'6,7" OLED, 120 Hz',"Snapdragon 8+ Gen 1",[8,12],[128,512],"50 + 50 MP (UW)","4.700 mAh",201,2023],

  ["Sony","Xperia 1 VII",'6,5" OLED, 120 Hz',"Snapdragon 8 Elite",12,[256,512],"48 + 48 (UW) + 12 MP (Zoom)","5.000 mAh",197,2025],
  ["Sony","Xperia 1 VI",'6,5" OLED, 120 Hz',"Snapdragon 8 Gen 3",12,[256,512],"48 + 12 (UW) + 12 MP (Zoom)","5.000 mAh",192,2024],
  ["Sony","Xperia 10 VI",'6,1" OLED, 60 Hz',"Snapdragon 6 Gen 1",8,128,"48 + 8 MP (UW)","5.000 mAh",164,2024],

  ["ASUS","ROG Phone 9 Pro",'6,78" AMOLED, 185 Hz',"Snapdragon 8 Elite",[16,24],[512,TB],"50 + 13 (UW) + 32 MP (3×)","5.800 mAh",227,2024],
  ["ASUS","ROG Phone 9",'6,78" AMOLED, 185 Hz',"Snapdragon 8 Elite",[12,16],[256,512],"50 + 13 (UW) + 5 MP (Makro)","5.800 mAh",219,2024],
  ["ASUS","Zenfone 12 Ultra",'6,78" AMOLED, 144 Hz',"Snapdragon 8 Elite",[12,16],[256,512],"50 + 13 (UW) + 32 MP (3×)","5.500 mAh",220,2025],

  ["Fairphone","Fairphone (Gen. 6)",'6,31" OLED, 120 Hz',"Snapdragon 7s Gen 3",8,256,"50 + 13 MP (UW)","4.415 mAh",193,2025],
  ["Fairphone","Fairphone 5",'6,46" OLED, 90 Hz',"Qualcomm QCM6490",8,256,"50 + 50 MP (UW)","4.200 mAh",212,2023],

  ["Realme","GT 7 Pro",'6,78" AMOLED, 120 Hz',"Snapdragon 8 Elite",[12,16],[256,512],"50 + 8 (UW) + 50 MP (3×)","5.800 mAh",222,2024],
  ["Realme","14 Pro+",'6,83" AMOLED, 120 Hz',"Snapdragon 7s Gen 3",[8,12],[256,512],"50 + 50 (3×) + 8 MP (UW)","6.000 mAh",194,2025],
  // ---- neu 2026 ----
  ["Apple","iPhone 18 Pro Max",'6,9" OLED, 120 Hz',"A20 Pro",null,[256,2*TB],"48 + 48 (UW) + 48 MP (4× Tele), variable Blende","bis 43 h Video",249,2026],
  ["Apple","iPhone 18 Pro",'6,3" OLED, 120 Hz',"A20 Pro",null,[256,2*TB],"48 + 48 (UW) + 48 MP (4× Tele), variable Blende","bis 34 h Video",211,2026],
  ["Apple","iPhone Duo (faltbar)",'7,6" innen / 5,4" außen, OLED',"A20 Pro",null,[256,2*TB],"48 + 48 MP","bis 45 h Video",null,2026],
  ["Apple","iPhone 17e",'6,1" OLED, 60 Hz',"A19",8,[256,512],"48 MP (2× optische Qualität)",null,null,2026],
  ["Samsung","Galaxy S26 Ultra",'6,9" AMOLED, 120 Hz',"Snapdragon 8 Elite Gen 5",[12,16],[256,TB],"200 + 50 (UW) + 10 (3×) + 50 MP (5×)","5.000 mAh",214,2026],
  ["Samsung","Galaxy S26+",'6,7" AMOLED, 120 Hz',"Exynos 2600",12,[256,512],"50 + 12 (UW) + 10 MP (3×)","4.900 mAh",190,2026],
  ["Samsung","Galaxy S26",'6,3" AMOLED, 120 Hz',"Exynos 2600",12,[256,512],"50 + 12 (UW) + 10 MP (3×)","4.300 mAh",167,2026],
  ["Samsung","Galaxy Z Fold8 Ultra",'8" innen / 6,5" außen, 120 Hz',"Snapdragon 8 Elite Gen 5",[12,16],[256,TB],"200 + 50 MP (UW) + Tele","5.000 mAh",215,2026],
  ["Samsung","Galaxy Z Fold8",'7,6" innen / 5,5" außen, 120 Hz',"Snapdragon 8 Elite Gen 5",[12,16],[256,512],"50 MP + UW (ohne Tele)","4.800 mAh",201,2026],
  ["Samsung","Galaxy Z Flip8",'6,9" innen / 4,1" außen, 120 Hz',"Exynos 2600",12,[256,512],"50 + 12 MP (UW)","4.300 mAh",180,2026],
  ["Google","Pixel 11 Pro XL",'6,8" OLED, 120 Hz',"Tensor G6",[12,16],[256,TB],"50 + 48 (UW) + 48 MP (5×)","5.115 mAh",226,2026],
  ["Google","Pixel 11 Pro",'6,3" OLED, 120 Hz',"Tensor G6",[12,16],[256,TB],"50 + 48 (UW) + 48 MP (5×)","4.850 mAh",204,2026],
  ["Google","Pixel 11",'6,3" OLED, 120 Hz',"Tensor G6",12,[256,512],"48 + 13 (UW) + 10,8 MP (5×)","4.985 mAh",197,2026],
  ["Xiaomi","Xiaomi 17 Ultra",'6,9" AMOLED, 120 Hz',"Snapdragon 8 Elite Gen 5",16,[512,TB],"50 + 50 (UW) + 200 MP (Tele), Leica","6.000 mAh",218,2026],
  ["Xiaomi","Xiaomi 17",'6,3" AMOLED, 120 Hz',"Snapdragon 8 Elite Gen 5",[12,16],[256,512],"50 + 50 (UW) + 50 MP (2,6×)","6.330 mAh",null,2026],
];

// [Marke, Modell, Display, Chip, RAM, Speicher, Akku, Gewicht, Jahr]
const TABLETS = [
  ["Apple",'iPad Pro 13" (M5)','13" Tandem-OLED, 120 Hz',"Apple M5",[12,16],[256,2*TB],"bis 10 h",579,2025],
  ["Apple",'iPad Pro 11" (M5)','11" Tandem-OLED, 120 Hz',"Apple M5",[12,16],[256,2*TB],"bis 10 h",444,2025],
  ["Apple",'iPad Pro 11" (M4)','11" Tandem-OLED, 120 Hz',"Apple M4",[8,16],[256,2*TB],"bis 10 h",444,2024],
  ["Apple",'iPad Air 13" (M3)','13" LCD, 60 Hz',"Apple M3",8,[128,TB],"bis 10 h",616,2025],
  ["Apple",'iPad Air 11" (M3)','11" LCD, 60 Hz',"Apple M3",8,[128,TB],"bis 10 h",460,2025],
  ["Apple","iPad (A16)",'11" LCD, 60 Hz',"A16",6,[128,512],"bis 10 h",477,2025],
  ["Apple","iPad mini (A17 Pro)",'8,3" LCD, 60 Hz',"A17 Pro",8,[128,512],"bis 10 h",293,2024],
  ["Apple","iPad (10. Gen.)",'10,9" LCD, 60 Hz',"A14 Bionic",4,[64,256],"bis 10 h",477,2022],

  ["Samsung","Galaxy Tab S11 Ultra",'14,6" AMOLED, 120 Hz',"Dimensity 9400+",[12,16],[256,TB],"11.600 mAh",692,2025],
  ["Samsung","Galaxy Tab S11",'11" AMOLED, 120 Hz',"Dimensity 9400+",12,[128,512],"8.400 mAh",469,2025],
  ["Samsung","Galaxy Tab S10 Ultra",'14,6" AMOLED, 120 Hz',"Dimensity 9300+",[12,16],[256,TB],"11.200 mAh",718,2024],
  ["Samsung","Galaxy Tab S10+",'12,4" AMOLED, 120 Hz',"Dimensity 9300+",12,[256,512],"10.090 mAh",571,2024],
  ["Samsung","Galaxy Tab S10 FE+",'13,1" LCD, 90 Hz',"Exynos 1580",[8,12],[128,256],"10.090 mAh",664,2025],
  ["Samsung","Galaxy Tab S10 FE",'10,9" LCD, 90 Hz',"Exynos 1580",[8,12],[128,256],"8.000 mAh",497,2025],
  ["Samsung","Galaxy Tab S9 FE",'10,9" LCD, 90 Hz',"Exynos 1380",[6,8],[128,256],"8.000 mAh",523,2023],
  ["Samsung","Galaxy Tab A9+",'11" LCD, 90 Hz',"Snapdragon 695",[4,8],[64,128],"7.040 mAh",480,2023],

  ["Xiaomi","Xiaomi Pad 7 Pro",'11,2" LCD, 144 Hz',"Snapdragon 8s Gen 3",[8,12],[256,512],"8.850 mAh",500,2025],
  ["Xiaomi","Xiaomi Pad 7",'11,2" LCD, 144 Hz',"Snapdragon 7+ Gen 3",8,[128,256],"8.850 mAh",500,2025],
  ["Xiaomi","Redmi Pad Pro",'12,1" LCD, 120 Hz',"Snapdragon 7s Gen 2",[6,8],[128,256],"10.000 mAh",571,2024],
  ["Xiaomi","Redmi Pad 2",'11" LCD, 90 Hz',"Helio G100-Ultra",[4,8],[128,256],"9.000 mAh",510,2025],

  ["Lenovo","Legion Tab (Gen 3)",'8,8" LCD, 165 Hz',"Snapdragon 8 Gen 3",12,256,"6.550 mAh",340,2025],
  ["Lenovo","Idea Tab Pro",'12,7" LCD, 144 Hz',"Dimensity 8300",[8,12],[128,256],"10.200 mAh",620,2025],
  ["Lenovo","Tab P12",'12,7" LCD, 60 Hz',"Dimensity 7050",8,[128,256],"10.200 mAh",615,2023],
  ["Lenovo","Tab M11",'10,95" LCD, 90 Hz',"Helio G88",[4,8],[64,128],"7.040 mAh",465,2024],

  ["Microsoft","Surface Pro (11. Ed.)",'13" OLED oder LCD, 120 Hz',"Snapdragon X Plus / X Elite",[16,32],[256,TB],"bis 14 h Video",895,2024],
  ["Microsoft",'Surface Pro 12"','12" LCD, 90 Hz',"Snapdragon X Plus",16,[256,512],"bis 16 h Video",686,2025],

  ["OnePlus","OnePlus Pad 3",'13,2" LCD, 144 Hz',"Snapdragon 8 Elite",[12,16],[256,512],"12.140 mAh",675,2025],
  ["OnePlus","OnePlus Pad 2",'12,1" LCD, 144 Hz',"Snapdragon 8 Gen 3",[8,12],[128,256],"9.510 mAh",584,2024],

  ["Google","Pixel Tablet",'11" LCD, 60 Hz',"Tensor G2",8,[128,256],null,493,2023],

  ["Amazon","Fire Max 11",'11" LCD',"Octa-Core 2,2 GHz",4,[64,128],"bis 14 h",490,2023],
  ["Amazon","Fire HD 10 (2023)",'10,1" LCD',"Octa-Core 2,05 GHz",3,[32,64],"bis 13 h",434,2023],
  ["Apple",'iPad Air 13" (M4)','13" LCD, 60 Hz',"Apple M4",null,[128,TB],"bis 10 h",null,2026],
  ["Apple",'iPad Air 11" (M4)','11" LCD, 60 Hz',"Apple M4",null,[128,TB],"bis 10 h",null,2026],
];

// [Marke, Modell, Display, Prozessor, Grafik, RAM, Speicher, Akku, Gewicht, Jahr]
const LAPTOPS = [
  ["Apple",'MacBook Pro 16" (M4 Pro / Max)','16,2" Mini-LED, 120 Hz',"M4 Pro / M4 Max","20-Kern-GPU (M4 Max: bis 40)",[24,128],[512,8*TB],"bis 24 h Video",2140,2024],
  ["Apple",'MacBook Pro 14" (M5)','14,2" Mini-LED, 120 Hz',"Apple M5","10-Kern-GPU (integriert)",[16,32],[512,4*TB],"bis 24 h Video",1550,2025],
  ["Apple",'MacBook Pro 14" (M4 Pro)','14,2" Mini-LED, 120 Hz',"Apple M4 Pro","16- bis 20-Kern-GPU (integriert)",[24,64],[512,4*TB],"bis 22 h Video",1600,2024],
  ["Apple",'MacBook Air 15" (M4)','15,3" LCD, 60 Hz',"Apple M4","10-Kern-GPU (integriert)",[16,32],[256,2*TB],"bis 18 h Video",1510,2025],
  ["Apple",'MacBook Air 13" (M4)','13,6" LCD, 60 Hz',"Apple M4","8- bis 10-Kern-GPU (integriert)",[16,32],[256,2*TB],"bis 18 h Video",1240,2025],
  ["Apple",'MacBook Air 13" (M3)','13,6" LCD, 60 Hz',"Apple M3","8- bis 10-Kern-GPU (integriert)",[16,24],[256,2*TB],"bis 18 h Video",1240,2024],

  ["Lenovo","Legion Pro 7i (Gen 10)",'16" OLED (2,5K), 240 Hz',"Intel Core Ultra 9 275HX","bis NVIDIA RTX 5080",[32,64],[TB,2*TB],"99,9 Wh",null,2025],
  ["Lenovo","Legion 5i (Gen 10)",'15,1" OLED (2,5K), 165 Hz',"Intel Core Ultra 7 255HX","bis NVIDIA RTX 5070",[16,32],[512,TB],"80 Wh",null,2025],
  ["Lenovo","LOQ 15 (2025)",'15,6" IPS, 144 Hz',"Intel Core i5 / i7","bis NVIDIA RTX 5060",[16,32],[512,TB],"60 Wh",null,2025],
  ["Lenovo","ThinkPad X1 Carbon Gen 13",'14" IPS oder OLED (2,8K)',"Intel Core Ultra (Serie 2)","Intel Arc (integriert)",[16,32],[256,2*TB],"57 Wh",986,2025],
  ["Lenovo","ThinkPad T14 Gen 5",'14" IPS',"Intel Core Ultra 5 / 7","Intel (integriert)",[16,64],[256,2*TB],"52,5 Wh",null,2024],
  ["Lenovo","Yoga Slim 7i Aura Edition",'15,3" IPS (2,8K), 120 Hz',"Intel Core Ultra 7 (Serie 2)","Intel Arc 140V (integriert)",32,TB,"70 Wh",null,2024],
  ["Lenovo","Yoga Slim 7x",'14,5" OLED (3K), 90 Hz',"Snapdragon X Elite","Adreno (integriert)",[16,32],[512,TB],"70 Wh",1280,2024],

  ["HP","OMEN Max 16",'16" (2,5K), 240 Hz',"Intel Core Ultra 9 275HX","bis NVIDIA RTX 5090",[32,64],[TB,2*TB],"83 Wh",null,2025],
  ["HP","OMEN Transcend 14",'14" OLED (2,8K), 120 Hz',"Intel Core Ultra 9 185H","bis NVIDIA RTX 4070",[16,32],[TB,2*TB],"71 Wh",1630,2024],
  ["HP","Victus 16",'16,1" IPS, 144 Hz',"Intel Core i5 / i7 oder AMD Ryzen","bis NVIDIA RTX 4060",16,[512,TB],"70 Wh",2300,2024],
  ["HP","Spectre x360 14",'14" OLED (2,8K), 120 Hz',"Intel Core Ultra 7 155H","Intel Arc (integriert)",[16,32],[512,2*TB],"68 Wh",1440,2024],
  ["HP","OmniBook X 14",'14" IPS (2,2K)',"Snapdragon X Elite","Adreno (integriert)",16,[512,TB],"59 Wh",1340,2024],
  ["HP","EliteBook 840 G11",'14" IPS',"Intel Core Ultra 5 / 7","Intel (integriert)",[16,64],[256,2*TB],"56 Wh",null,2024],

  ["Dell","XPS 16 (9640)",'16,3" IPS oder OLED',"Intel Core Ultra 7 / 9","bis NVIDIA RTX 4070",[16,64],[512,4*TB],"99,5 Wh",2130,2024],
  ["Dell","XPS 14 (9440)",'14,5" IPS oder OLED, bis 120 Hz',"Intel Core Ultra 7 155H","bis NVIDIA RTX 4050",[16,64],[512,4*TB],"69,5 Wh",1680,2024],
  ["Dell","XPS 13 (9350)",'13,4" IPS oder OLED, bis 120 Hz',"Intel Core Ultra 7 (Serie 2)","Intel Arc 140V (integriert)",[16,32],[512,2*TB],"55 Wh",1190,2024],
  ["Dell","Alienware 16 Area-51",'16" (2,5K), 240 Hz',"Intel Core Ultra 9 275HX","bis NVIDIA RTX 5090",[32,64],[TB,4*TB],"96 Wh",null,2025],
  ["Dell","Alienware m16 R2",'16" (2,5K), 240 Hz',"Intel Core Ultra 9 185H","bis NVIDIA RTX 4070",[16,32],[512,4*TB],"90 Wh",2610,2024],
  ["Dell","Latitude 7450",'14" IPS',"Intel Core Ultra 5 / 7","Intel (integriert)",[16,64],[256,2*TB],"57 Wh",null,2024],

  ["ASUS","ROG Zephyrus G16 (2025)",'16" OLED (2,5K), 240 Hz',"Intel Core Ultra 9 285H","bis NVIDIA RTX 5090",[16,32],[TB,2*TB],"90 Wh",1950,2025],
  ["ASUS","ROG Zephyrus G14 (2025)",'14" OLED (3K), 120 Hz',"AMD Ryzen AI 9 HX 370","bis NVIDIA RTX 5080",[16,32],[TB,2*TB],"73 Wh",1570,2025],
  ["ASUS","ROG Strix SCAR 18 (2025)",'18" Mini-LED (2,5K), 240 Hz',"Intel Core Ultra 9 275HX","bis NVIDIA RTX 5090",[32,64],[2*TB,4*TB],"90 Wh",null,2025],
  ["ASUS","ROG Strix G16 (2025)",'16" (2,5K), 240 Hz',"Intel Core Ultra 9 275HX","bis NVIDIA RTX 5080",[16,64],[TB,2*TB],"90 Wh",null,2025],
  ["ASUS","TUF Gaming A15 (2024)",'15,6" IPS, 144 Hz',"AMD Ryzen 7","bis NVIDIA RTX 4060",16,[512,TB],"90 Wh",2200,2024],
  ["ASUS","Zenbook S 14 (UX5406)",'14" OLED (3K), 120 Hz',"Intel Core Ultra 7 258V","Intel Arc 140V (integriert)",[16,32],TB,"72 Wh",1200,2024],
  ["ASUS","Zenbook 14 OLED (UX3405)",'14" OLED (3K), 120 Hz',"Intel Core Ultra 7 155H","Intel Arc (integriert)",[16,32],[512,TB],"75 Wh",1200,2024],
  ["ASUS","Vivobook S 15 (Snapdragon)",'15,6" OLED (3K), 120 Hz',"Snapdragon X Elite","Adreno (integriert)",[16,32],TB,"70 Wh",1420,2024],

  ["Acer","Predator Helios 16 (2025)",'16" (2,5K), 240 Hz',"Intel Core Ultra 9 275HX","bis NVIDIA RTX 5080",[32,64],[TB,2*TB],"90 Wh",null,2025],
  ["Acer","Nitro V 15",'15,6" IPS, 144 Hz',"Intel Core i5 / i7","bis NVIDIA RTX 4060",[8,16],[512,TB],"57 Wh",2100,2024],
  ["Acer","Swift 14 AI",'14,5" (2,8K), 120 Hz',"Intel Core Ultra 7 258V","Intel Arc 140V (integriert)",[16,32],TB,"65 Wh",1260,2024],
  ["Acer","Swift Go 14",'14" OLED (2,8K), 90 Hz',"Intel Core Ultra 7 155H","Intel Arc (integriert)",[16,32],[512,TB],"65 Wh",1320,2024],

  ["MSI","Titan 18 HX AI",'18" Mini-LED (4K), 120 Hz',"Intel Core Ultra 9 285HX","bis NVIDIA RTX 5090",[64,96],[2*TB,6*TB],"99,9 Wh",3600,2025],
  ["MSI","Stealth 16 AI Studio",'16" (2,5K), 240 Hz',"Intel Core Ultra 9 185H","bis NVIDIA RTX 4090",32,2*TB,"99,9 Wh",1990,2024],
  ["MSI","Katana 15",'15,6" IPS, 144 Hz',"Intel Core i7","bis NVIDIA RTX 4060",16,TB,"53,5 Wh",2250,2024],
  ["MSI","Prestige 13 AI+ Evo",'13,3" OLED (2,8K)',"Intel Core Ultra 7 258V","Intel Arc 140V (integriert)",32,TB,"75 Wh",990,2024],

  ["Microsoft",'Surface Laptop 7 (15")','15" LCD, 120 Hz',"Snapdragon X Elite","Adreno (integriert)",[16,32],[256,TB],"bis 22 h Video",1660,2024],
  ["Microsoft",'Surface Laptop 7 (13,8")','13,8" LCD, 120 Hz',"Snapdragon X Plus / X Elite","Adreno (integriert)",[16,32],[256,TB],"bis 20 h Video",1340,2024],
  ["Microsoft",'Surface Laptop 13"','13" LCD',"Snapdragon X Plus","Adreno (integriert)",16,[256,512],"bis 23 h Video",1220,2025],

  ["Razer","Blade 16 (2025)",'16" OLED (2,5K), 240 Hz',"AMD Ryzen AI 9 365","bis NVIDIA RTX 5090",[32,64],[TB,4*TB],"90 Wh",2140,2025],
  ["Razer","Blade 14 (2025)",'14" OLED (3K), 120 Hz',"AMD Ryzen AI 9 365","bis NVIDIA RTX 5070",[16,64],TB,"72 Wh",1620,2025],
  ["Razer","Blade 18 (2025)",'18" (2,5K oder 4K)',"Intel Core Ultra 9 275HX","bis NVIDIA RTX 5090",[32,64],[2*TB,4*TB],"99 Wh",null,2025],

  ["Samsung","Galaxy Book5 Pro",'14" AMOLED (3K), 120 Hz',"Intel Core Ultra 7 (Serie 2)","Intel Arc 140V (integriert)",[16,32],[512,TB],"63 Wh",1230,2025],
  ["Samsung","Galaxy Book4 Pro",'14" AMOLED (3K), 120 Hz',"Intel Core Ultra 7 155H","Intel Arc (integriert)",[16,32],[512,TB],"63 Wh",1230,2024],
  ["Samsung","Galaxy Book4 Edge",'14" AMOLED (3K), 120 Hz',"Snapdragon X Elite","Adreno (integriert)",16,[512,TB],"61,8 Wh",1160,2024],

  ["Huawei","MateBook X Pro (2024)",'14,2" OLED, 120 Hz',"Intel Core Ultra 7 / 9","Intel Arc (integriert)",[16,32],[TB,2*TB],"70 Wh",980,2024],

  ["Framework","Laptop 16",'16" IPS (2,5K), 165 Hz',"AMD Ryzen AI 300","bis NVIDIA RTX 5070 (Modul)",[8,96],[256,8*TB],"85 Wh",2100,2025],
  ["Framework","Laptop 13",'13,5" IPS (2,8K), 120 Hz',"AMD Ryzen AI 300 / Intel Core Ultra","integriert",[8,96],[256,8*TB],"61 Wh",1300,2025],
  ["Apple",'MacBook Pro 16" (M5 Pro / Max)','16,2" Mini-LED, 120 Hz',"M5 Pro / M5 Max (18-Kern-CPU)","bis 40-Kern-GPU (M5 Max)",[24,128],[TB,8*TB],null,null,2026],
  ["Apple",'MacBook Pro 14" (M5 Pro / Max)','14,2" Mini-LED, 120 Hz',"M5 Pro / M5 Max","16- bis 20-Kern-GPU (M5 Max: bis 40)",[24,128],[TB,8*TB],null,null,2026],
  ["Apple",'MacBook Air 15" (M5)','15,3" LCD, 60 Hz',"Apple M5","10-Kern-GPU (integriert)",[16,32],[512,4*TB],"bis 18 h Video",1510,2026],
  ["Apple",'MacBook Air 13" (M5)','13,6" LCD, 60 Hz',"Apple M5","8- bis 10-Kern-GPU (integriert)",[16,32],[512,4*TB],"bis 18 h Video",1240,2026],
  ["Apple","MacBook Neo",'13" LCD',"A18 Pro (6-Kern-CPU)","5-Kern-GPU (integriert)",8,[256,512],"bis 16 h Video",1220,2026],
];

// [Marke, Modell, Display, Prozessor, Grafik, RAM, Speicher, Gewicht, Jahr]
const PCS = [
  ["Apple","Mac Studio (M3 Ultra)","ohne Display","Apple M3 Ultra","60- bis 80-Kern-GPU (integriert)",[96,512],[TB,16*TB],3640,2025],
  ["Apple","Mac Studio (M4 Max)","ohne Display","Apple M4 Max","32- bis 40-Kern-GPU (integriert)",[36,128],[512,8*TB],2740,2025],
  ["Apple","Mac mini (M4 Pro)","ohne Display","Apple M4 Pro","16- bis 20-Kern-GPU (integriert)",[24,64],[512,8*TB],730,2024],
  ["Apple","Mac mini (M4)","ohne Display","Apple M4","10-Kern-GPU (integriert)",[16,32],[256,2*TB],670,2024],
  ["Apple",'iMac 24" (M4)','23,5" 4,5K Retina',"Apple M4","8- bis 10-Kern-GPU (integriert)",[16,32],[256,2*TB],1240,2024],
  ["Apple","Mac Pro (M2 Ultra)","ohne Display","Apple M2 Ultra","60- bis 76-Kern-GPU (integriert)",[64,192],[TB,8*TB],16860,2023],

  ["Lenovo","Legion Tower 7i (Gen 10)","ohne Display","Intel Core Ultra 9 285K","bis NVIDIA RTX 5090",[32,64],[TB,4*TB],null,2025],
  ["Lenovo","Legion Tower 5i (Gen 8)","ohne Display","Intel Core i7 (13. Gen.)","bis NVIDIA RTX 4070 Ti",[16,32],TB,null,2023],
  ["Lenovo","ThinkCentre M70q Gen 5","ohne Display","Intel Core i5 / i7 (14. Gen.)","Intel (integriert)",[8,64],[256,2*TB],1250,2024],

  ["HP","OMEN 45L","ohne Display","Intel Core i9-14900K","bis NVIDIA RTX 4090",[32,64],2*TB,null,2024],
  ["HP","OMEN 35L","ohne Display","Intel Core i7 oder AMD Ryzen 7","bis NVIDIA RTX 4080 Super",[16,64],[TB,2*TB],null,2024],
  ["HP","Victus 15L","ohne Display","Intel Core i5 / i7","bis NVIDIA RTX 4060 Ti",[16,32],[512,TB],null,2024],
  ["HP","OmniStudio X 31.5 (All-in-One)",'31,5" 4K',"Intel Core Ultra 7 155H","Intel Arc (integriert)",[16,32],TB,null,2024],
  ["HP","Elite Mini 800 G9","ohne Display","Intel Core i5 / i7","Intel (integriert)",[8,64],[256,2*TB],null,2023],

  ["Dell","Alienware Area-51 (2025)","ohne Display","Intel Core Ultra 9 285K","bis NVIDIA RTX 5090",[32,64],[TB,8*TB],null,2025],
  ["Dell","Alienware Aurora R16","ohne Display","Intel Core i9-14900KF","bis NVIDIA RTX 4090",[16,64],[512,4*TB],null,2023],
  ["Dell","XPS Desktop (8960)","ohne Display","Intel Core i7 / i9 (14. Gen.)","bis NVIDIA RTX 4090",[16,64],[512,4*TB],null,2023],
  ["Dell","OptiPlex Micro 7020","ohne Display","Intel Core i5 / i7 (14. Gen.)","Intel (integriert)",[8,64],[256,2*TB],null,2024],

  ["ASUS","ROG NUC (2024)","ohne Display","Intel Core Ultra 9 185H","bis NVIDIA RTX 4070 (Laptop)",[16,32],[TB,2*TB],null,2024],
  ["ASUS","NUC 14 Pro","ohne Display","Intel Core Ultra 5 / 7","Intel Arc (integriert)",[8,96],[256,2*TB],null,2024],

  ["Acer","Predator Orion 7000","ohne Display","Intel Core i9-14900K","bis NVIDIA RTX 4090",[32,64],2*TB,null,2023],

  ["MSI","MEG Trident X2","ohne Display","Intel Core i9","bis NVIDIA RTX 4090",64,2*TB,null,2023],
  ["MSI","MAG Infinite S3","ohne Display","Intel Core i7-14700F","bis NVIDIA RTX 4070",[16,32],TB,null,2024],
];

// [Marke, Modell, Display, Chip, Akku, Jahr]
const WATCHES = [
  ["Apple","Apple Watch Ultra 3","49 mm, OLED","S10","bis 42 h",2025],
  ["Apple","Apple Watch Series 11","42 / 46 mm, OLED","S10","bis 24 h",2025],
  ["Apple","Apple Watch SE 3","40 / 44 mm, OLED","S10","bis 18 h",2025],
  ["Apple","Apple Watch Series 10","42 / 46 mm, OLED","S10","bis 18 h",2024],
  ["Apple","Apple Watch Ultra 2","49 mm, OLED","S9","bis 36 h",2023],
  ["Apple","Apple Watch Series 9","41 / 45 mm, OLED","S9","bis 18 h",2023],

  ["Samsung","Galaxy Watch Ultra","47 mm, AMOLED","Exynos W1000","590 mAh",2024],
  ["Samsung","Galaxy Watch8 Classic","46 mm, AMOLED","Exynos W1000","445 mAh",2025],
  ["Samsung","Galaxy Watch8","40 / 44 mm, AMOLED","Exynos W1000","325 / 435 mAh",2025],
  ["Samsung","Galaxy Watch7","40 / 44 mm, AMOLED","Exynos W1000","300 / 425 mAh",2024],
  ["Samsung","Galaxy Watch FE","40 mm, AMOLED","Exynos W920","247 mAh",2024],
  ["Samsung","Galaxy Watch6 Classic","43 / 47 mm, AMOLED","Exynos W930","300 / 425 mAh",2023],

  ["Google","Pixel Watch 4","41 / 45 mm, AMOLED","Snapdragon W5 Gen 2","bis 30 / 40 h",2025],
  ["Google","Pixel Watch 3","41 / 45 mm, AMOLED","Snapdragon W5 Gen 1","bis 24 h",2024],
  ["Google","Pixel Watch 2","41 mm, AMOLED","Snapdragon W5 Gen 1","bis 24 h",2023],

  ["Garmin","fēnix 8 (AMOLED)","43 / 47 / 51 mm, AMOLED",null,"bis 16 Tage (47 mm)",2024],
  ["Garmin","Forerunner 970","47 mm, AMOLED",null,"bis 15 Tage",2025],
  ["Garmin","Forerunner 570","42 / 47 mm, AMOLED",null,"bis 11 Tage",2025],
  ["Garmin","Forerunner 965","47 mm, AMOLED",null,"bis 23 Tage",2023],
  ["Garmin","Forerunner 265","42 / 46 mm, AMOLED",null,"bis 13 Tage",2023],
  ["Garmin","Venu X1","1,4\" AMOLED",null,"bis 8 Tage",2025],
  ["Garmin","Venu 3","41 / 45 mm, AMOLED",null,"bis 14 Tage",2023],
  ["Garmin","vívoactive 6","42 mm, AMOLED",null,"bis 11 Tage",2025],
  ["Garmin","Instinct 3 (AMOLED)","45 / 50 mm, AMOLED",null,"bis 24 Tage (50 mm)",2025],

  ["Huawei","Watch GT 6 Pro","46 mm, AMOLED",null,"bis 21 Tage",2025],
  ["Huawei","Watch GT 6","41 / 46 mm, AMOLED",null,"bis 21 Tage (46 mm)",2025],
  ["Huawei","Watch GT 5 Pro","42 / 46 mm, AMOLED",null,"bis 14 Tage (46 mm)",2024],
  ["Huawei","Watch GT 5","41 / 46 mm, AMOLED",null,"bis 14 Tage (46 mm)",2024],
  ["Huawei","Watch Fit 4","1,82\" AMOLED",null,"bis 10 Tage",2025],

  ["Xiaomi","Xiaomi Watch S4","47 mm, AMOLED",null,"bis 15 Tage",2025],
  ["Xiaomi","Redmi Watch 5","2,07\" AMOLED",null,"bis 24 Tage",2025],
  ["Xiaomi","Smart Band 10","1,72\" AMOLED",null,"bis 21 Tage",2025],
  ["Xiaomi","Smart Band 9","1,62\" AMOLED",null,"bis 21 Tage",2024],

  ["Amazfit","Balance 2","1,5\" AMOLED",null,"bis 21 Tage",2025],
  ["Amazfit","Active 2","1,32\" AMOLED",null,"bis 10 Tage",2025],
  ["Amazfit","T-Rex 3","1,5\" AMOLED",null,"bis 27 Tage",2024],
  ["Amazfit","Balance","1,5\" AMOLED",null,"bis 14 Tage",2023],

  ["Fitbit","Charge 6","AMOLED",null,"bis 7 Tage",2023],
  ["Fitbit","Sense 2","AMOLED",null,"bis 6 Tage",2022],
  ["Fitbit","Versa 4","AMOLED",null,"bis 6 Tage",2022],

  ["OnePlus","OnePlus Watch 3","46 mm, AMOLED","Snapdragon W5","bis 5 Tage",2025],
  ["Apple","Apple Watch Ultra 4","49 mm, OLED","S11","bis 50 h",2026],
  ["Apple","Apple Watch Series 12","42 / 46 mm, OLED","S11",null,2026],
  ["Samsung","Galaxy Watch9","40 / 44 mm, AMOLED","Snapdragon Wear Elite","bis 445 mAh (44 mm)",2026],
  ["Google","Pixel Watch 5","41 / 45 mm, AMOLED","Snapdragon W5 Gen 2","bis 465 mAh (45 mm)",2026],
];


// Zusatzinfos: Preis = UVP in Deutschland bei Marktstart (Basisversion), Laden = max. Watt kabelgebunden
const EXTRA = {
 // Apple iPhone
 "iPhone 18 Pro Max":{price:1599,ip:"IP68",front:"18 MP",charge:"bis 50 % in ca. 15 min, MagSafe/Qi2 25 W"},
 "iPhone 18 Pro":{price:1449,ip:"IP68",front:"18 MP",charge:"bis 50 % in ca. 15 min, MagSafe/Qi2 25 W"},
 "iPhone Duo (faltbar)":{price:2299},
 "iPhone 17e":{price:699,ip:"IP68",charge:"MagSafe 15 W"},
 "iPhone 17 Pro Max":{price:1449,ip:"IP68",front:"18 MP"},"iPhone 17 Pro":{price:1299,ip:"IP68",front:"18 MP"},
 "iPhone Air":{price:1199,ip:"IP68",front:"18 MP"},"iPhone 17":{price:949,ip:"IP68",front:"18 MP"},
 "iPhone 16e":{price:699,ip:"IP68",front:"12 MP"},"iPhone 16 Pro Max":{price:1449,ip:"IP68",front:"12 MP"},
 "iPhone 16 Pro":{price:1199,ip:"IP68",front:"12 MP"},"iPhone 16 Plus":{price:1099,ip:"IP68",front:"12 MP"},
 "iPhone 16":{price:949,ip:"IP68",front:"12 MP"},"iPhone 15 Pro Max":{price:1449,ip:"IP68",front:"12 MP"},
 "iPhone 15 Pro":{price:1199,ip:"IP68",front:"12 MP"},"iPhone 15 Plus":{price:1099,ip:"IP68",front:"12 MP"},
 "iPhone 15":{price:949,ip:"IP68",front:"12 MP"},"iPhone 14":{price:999,ip:"IP68",front:"12 MP"},
 "iPhone 13":{price:899,ip:"IP68",front:"12 MP"},"iPhone SE (3. Gen.)":{price:519,ip:"IP67",front:"7 MP"},
 // Samsung
 "Galaxy S26 Ultra":{price:1449,ip:"IP68",front:"12 MP",charge:"60 W, kabellos 25 W",updates:"7 Jahre"},
 "Galaxy S26+":{ip:"IP68",front:"12 MP",charge:"45 W, kabellos 20 W",updates:"7 Jahre"},
 "Galaxy S26":{ip:"IP68",front:"12 MP",charge:"25 W, kabellos 15 W",updates:"7 Jahre"},
 "Galaxy Z Fold8 Ultra":{price:2199,ip:"IP48",front:"10 MP",charge:"45 W, kabellos 20 W",updates:"7 Jahre"},
 "Galaxy Z Fold8":{price:1999,ip:"IP48",front:"10 MP",charge:"kein kabelloses Laden",updates:"7 Jahre"},
 "Galaxy Z Flip8":{price:1299,ip:"IP48",front:"10 MP",charge:"25 W, kabellos 15 W",updates:"7 Jahre"},
 "Galaxy S25 Ultra":{price:1449,ip:"IP68",front:"12 MP",charge:"45 W",updates:"7 Jahre"},
 "Galaxy S25 Edge":{price:1249,ip:"IP68",front:"12 MP",charge:"25 W",updates:"7 Jahre"},
 "Galaxy S25+":{price:1149,ip:"IP68",front:"12 MP",charge:"45 W",updates:"7 Jahre"},
 "Galaxy S25":{price:899,ip:"IP68",front:"12 MP",charge:"25 W",updates:"7 Jahre"},
 "Galaxy S25 FE":{price:749,ip:"IP68",front:"12 MP",charge:"45 W",updates:"7 Jahre"},
 "Galaxy Z Fold7":{price:2099,ip:"IP48",front:"10 MP",charge:"25 W",updates:"7 Jahre"},
 "Galaxy Z Flip7":{price:1199,ip:"IP48",front:"10 MP",charge:"25 W",updates:"7 Jahre"},
 "Galaxy Z Fold6":{price:1999,ip:"IP48",front:"10 MP",charge:"25 W",updates:"7 Jahre"},
 "Galaxy Z Flip6":{price:1199,ip:"IP48",front:"10 MP",charge:"25 W",updates:"7 Jahre"},
 "Galaxy S24 Ultra":{price:1449,ip:"IP68",front:"12 MP",charge:"45 W",updates:"7 Jahre"},
 "Galaxy S24+":{price:1149,ip:"IP68",front:"12 MP",charge:"45 W",updates:"7 Jahre"},
 "Galaxy S24":{price:899,ip:"IP68",front:"12 MP",charge:"25 W",updates:"7 Jahre"},
 "Galaxy S24 FE":{price:749,ip:"IP68",front:"10 MP",charge:"25 W",updates:"7 Jahre"},
 "Galaxy A56":{price:479,ip:"IP67",front:"12 MP",charge:"45 W",updates:"6 Jahre"},
 "Galaxy A36":{price:379,ip:"IP67",front:"12 MP",charge:"45 W",updates:"6 Jahre"},
 "Galaxy A55":{price:479,ip:"IP67",front:"32 MP",charge:"25 W",updates:"5 Jahre"},
 "Galaxy A16 5G":{price:249,ip:"IP54",front:"13 MP",charge:"25 W",updates:"6 Jahre"},
 // Google
 "Pixel 11 Pro XL":{ip:"IP68",front:"42 MP",updates:"7 Jahre"},
 "Pixel 11 Pro":{ip:"IP68",front:"42 MP",updates:"7 Jahre"},
 "Pixel 11":{ip:"IP68",front:"10,5 MP",updates:"7 Jahre"},
 "Pixel 10 Pro XL":{price:1299,ip:"IP68",front:"42 MP",charge:"45 W",updates:"7 Jahre"},
 "Pixel 10 Pro":{price:1099,ip:"IP68",front:"42 MP",charge:"30 W",updates:"7 Jahre"},
 "Pixel 10":{price:899,ip:"IP68",front:"10,5 MP",charge:"30 W",updates:"7 Jahre"},
 "Pixel 10 Pro Fold":{price:1899,ip:"IP68",charge:"23 W",updates:"7 Jahre"},
 "Pixel 9a":{price:549,ip:"IP68",front:"13 MP",charge:"23 W",updates:"7 Jahre"},
 "Pixel 9 Pro XL":{price:1199,ip:"IP68",front:"42 MP",charge:"37 W",updates:"7 Jahre"},
 "Pixel 9 Pro":{price:1099,ip:"IP68",front:"42 MP",charge:"27 W",updates:"7 Jahre"},
 "Pixel 9":{price:899,ip:"IP68",front:"10,5 MP",charge:"27 W",updates:"7 Jahre"},
 "Pixel 9 Pro Fold":{price:1899,ip:"IPX8",charge:"21 W",updates:"7 Jahre"},
 "Pixel 8a":{price:549,ip:"IP67",front:"13 MP",charge:"18 W",updates:"7 Jahre"},
 "Pixel 8 Pro":{price:1099,ip:"IP68",front:"10,5 MP",charge:"30 W",updates:"7 Jahre"},
 "Pixel 8":{price:799,ip:"IP68",front:"10,5 MP",charge:"27 W",updates:"7 Jahre"},
 // Xiaomi
 "Xiaomi 17 Ultra":{price:1499,ip:"IP68",charge:"90 W"},
 "Xiaomi 17":{price:999,ip:"IP68",front:"50 MP",charge:"90 W"},
 "Xiaomi 15 Ultra":{price:1499,ip:"IP68",front:"32 MP",charge:"90 W"},
 "Xiaomi 15":{price:999,ip:"IP68",front:"32 MP",charge:"90 W"},
 "Xiaomi 15T Pro":{price:799,ip:"IP68",front:"32 MP",charge:"90 W"},
 "Xiaomi 15T":{price:649,ip:"IP68",front:"32 MP",charge:"67 W"},
 "Xiaomi 14 Ultra":{price:1499,ip:"IP68",front:"32 MP",charge:"90 W"},
 "Xiaomi 14T Pro":{price:799,ip:"IP68",front:"32 MP",charge:"120 W"},
 "Xiaomi 14T":{price:649,ip:"IP68",front:"32 MP",charge:"67 W"},
 "Xiaomi 14":{price:999,ip:"IP68",front:"32 MP",charge:"90 W"},
 "Redmi Note 14 Pro+ 5G":{ip:"IP68",charge:"120 W"},"Redmi Note 14 Pro 5G":{ip:"IP68",charge:"45 W"},
 "Redmi Note 14":{ip:"IP54",charge:"33 W"},"POCO F7 Pro":{ip:"IP68",charge:"90 W"},
 "POCO F7":{ip:"IP68",charge:"90 W"},"POCO X7 Pro":{ip:"IP68",charge:"90 W"},
 // OnePlus / Oppo / Vivo / Honor / Huawei
 "OnePlus 15":{ip:"IP69",charge:"120 W"},"OnePlus 13":{ip:"IP69",charge:"100 W"},"OnePlus 13R":{ip:"IP65",charge:"80 W"},
 "OnePlus Nord 5":{ip:"IP65",charge:"80 W"},"OnePlus Nord CE5":{charge:"80 W"},"OnePlus 12":{ip:"IP65",charge:"100 W"},
 "Find X9 Pro":{ip:"IP69",charge:"80 W"},"Find X8 Pro":{ip:"IP69",charge:"80 W"},"Find X8":{ip:"IP69",charge:"80 W"},
 "X200 Pro":{ip:"IP69",charge:"90 W"},"Magic7 Pro":{ip:"IP69",charge:"100 W"},"Pura 70 Ultra":{ip:"IP68",charge:"100 W"},
 // Motorola / Nothing / Sony / ASUS / Fairphone / Realme
 "razr 60 ultra":{price:1299,ip:"IP48",charge:"68 W"},"razr 60":{ip:"IP48",charge:"30 W"},
 "edge 60 pro":{ip:"IP69",charge:"90 W"},"edge 60":{ip:"IP69",charge:"68 W"},"edge 50 ultra":{ip:"IP68",charge:"125 W"},
 "moto g85":{ip:"IP54",charge:"30 W"},"moto g55":{ip:"IP54",charge:"30 W"},
 "Phone (3)":{price:799,ip:"IP68",charge:"65 W",updates:"5 Jahre Android, 7 Jahre Sicherheit"},
 "Phone (3a) Pro":{ip:"IP64",charge:"50 W"},"Phone (3a)":{ip:"IP64",charge:"50 W"},
 "CMF Phone 2 Pro":{ip:"IP54",charge:"33 W"},"Phone (2)":{ip:"IP54",charge:"45 W"},
 "Xperia 1 VII":{ip:"IP68",charge:"30 W"},"Xperia 1 VI":{ip:"IP68",charge:"30 W"},"Xperia 10 VI":{ip:"IP68",charge:"30 W"},
 "ROG Phone 9 Pro":{ip:"IP68",charge:"65 W"},"ROG Phone 9":{ip:"IP68",charge:"65 W"},"Zenfone 12 Ultra":{ip:"IP68",charge:"65 W"},
 "Fairphone (Gen. 6)":{price:599,ip:"IP55",charge:"30 W"},"Fairphone 5":{price:699,ip:"IP55",charge:"30 W",updates:"bis 2031"},
 "GT 7 Pro":{ip:"IP69",charge:"120 W"},"14 Pro+":{ip:"IP69",charge:"80 W"},
 // Tablets
 'iPad Pro 13" (M5)':{price:1549},'iPad Pro 11" (M5)':{price:1199},'iPad Pro 11" (M4)':{price:1199},
 'iPad Air 13" (M3)':{price:949},'iPad Air 11" (M3)':{price:699},"iPad (A16)":{price:399},
 "iPad mini (A17 Pro)":{price:599},"iPad (10. Gen.)":{price:579},
 // Laptops
 "MacBook Neo":{price:699},'MacBook Air 13" (M5)':{price:1249},
 'MacBook Air 13" (M4)':{price:1199},'MacBook Air 15" (M4)':{price:1499},'MacBook Pro 14" (M5)':{price:1799},
 'MacBook Pro 14" (M4 Pro)':{price:2399},'MacBook Pro 16" (M4 Pro / Max)':{price:2899},
 // Watches
 "Apple Watch Ultra 4":{price:899,weight:63},"Apple Watch Series 12":{price:449,weight:32},
 "Apple Watch Ultra 3":{price:899},"Apple Watch Series 11":{price:449},"Apple Watch SE 3":{price:269},
 "Apple Watch Series 10":{price:449},"Apple Watch Ultra 2":{price:899},"Apple Watch Series 9":{price:449},
 "Galaxy Watch9":{weight:34},"Pixel Watch 5":{weight:31},
};

const WATCH_OS = {Apple:"watchOS (nur mit iPhone)",Samsung:"Wear OS (Android)",Google:"Wear OS (Android)",OnePlus:"Wear OS (Android)",
  Garmin:"Garmin OS (iPhone & Android)",Huawei:"HarmonyOS (iPhone & Android)",Xiaomi:"HyperOS (iPhone & Android)",
  Amazfit:"Zepp OS (iPhone & Android)",Fitbit:"Fitbit OS (iPhone & Android)"};
const r = v => v == null ? null : Array.isArray(v) ? v : [v, v];

const out = [];
PHONES.forEach(([b,m,display,chip,ram,st,camera,battery,weight,year]) => out.push({c:"phone",b,m,display,chip,ram:r(ram),storage:r(st),camera,battery,weight,year,
  os: b==="Apple" ? "iOS" : b==="Huawei" ? "EMUI (ohne Google-Dienste)" : "Android"}));
TABLETS.forEach(([b,m,display,chip,ram,st,battery,weight,year]) => out.push({c:"tablet",b,m,display,chip,ram:r(ram),storage:r(st),battery,weight,year,
  os: b==="Apple" ? "iPadOS" : b==="Microsoft" ? "Windows 11" : b==="Amazon" ? "Fire OS" : "Android"}));
LAPTOPS.forEach(([b,m,display,chip,gpu,ram,st,battery,weight,year]) => out.push({c:"laptop",b,m,display,chip,gpu,ram:r(ram),storage:r(st),battery,weight,year,
  os: b==="Apple" ? "macOS" : "Windows 11"}));
PCS.forEach(([b,m,display,chip,gpu,ram,st,weight,year]) => out.push({c:"pc",b,m,display,chip,gpu,ram:r(ram),storage:r(st),weight,year,
  os: b==="Apple" ? "macOS" : "Windows 11"}));
WATCHES.forEach(([b,m,display,chip,battery,year]) => out.push({c:"watch",b,m,display,chip,battery,year,os:WATCH_OS[b]}));

out.forEach(d => { const x = EXTRA[d.m]; if (x) Object.assign(d, x); });
window.DEVICES = out;
})();
