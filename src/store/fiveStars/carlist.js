const fiveStarsCars = [
  {name:"IMPREZA WRX STi GC8 藤原文太 オーラVer.",power:533,speed:2915,acceleration:1232,handling:2934,nitro:3578,efficiency:515},
  {name:"GReddy 35RX spec-D'18",power:533,speed:3014,acceleration:1392,handling:2734,nitro:3520,efficiency:520},
  {name:"VIPER SRT10 \"Jormungand\"",power:533,speed:2788,acceleration:1393,handling:2756,nitro:3740,efficiency:525},
  {name:"PAC-MAN[RIDGE RACER 7Ver.]",power:532,speed:2811,acceleration:1386,handling:2946,nitro:3516,efficiency:500},
  {name:"FAIRLADY Z S30 \"日向\"",power:532,speed:2635,acceleration:1080,handling:3510,nitro:3424,efficiency:510},
  {name:"SPRINTER TRUENO AE86 \"Ifrit\"",power:531,speed:2960,acceleration:1083,handling:3028,nitro:3548,efficiency:500},
  {name:"JUKE-R 2.0",power:531,speed:2672,acceleration:1071,handling:2706,nitro:4171,efficiency:505},
  {name:"OTG 86",power:531,speed:2820,acceleration:1287,handling:3044,nitro:3470,efficiency:510},
  {name:"FAIRLADY Z \"黒鷺\" (S30)",power:531,speed:2825,acceleration:1283,handling:2987,nitro:3525,efficiency:515},
  {name:"RC410 \"Ritsuko\"SP",power:528,speed:2911,acceleration:1301,handling:2911,nitro:3436,efficiency:495},
  {name:"AUTO PRODUCE BOSS WRX",power:528,speed:2833,acceleration:1176,handling:2879,nitro:3671,efficiency:500},
  {name:"Ford GT \"Heaven and Hell\"",power:528,speed:2580,acceleration:1369,handling:2810,nitro:3810,efficiency:505},
  {name:"LANCER Evolution X \"Neptune\"",power:527,speed:2863,acceleration:1283,handling:2873,nitro:3523,efficiency:495},
  {name:"718 Cayman S 982c M.ベッケンバウアーVer.",power:527,speed:2561,acceleration:1639,handling:2954,nitro:3405,efficiency:500},
  {name:"GReddy 35RX spec-D'17 FinalVer.",power:527,speed:2970,acceleration:1337,handling:2687,nitro:3555,efficiency:505},
  {name:"RX-7 FC3S [PROJECT.D] オーラVer.",power:527,speed:2735,acceleration:1144,handling:3047,nitro:3613,efficiency:510},
  {name:"Rt35",power:527,speed:2664,acceleration:1261,handling:2815,nitro:3819,efficiency:515},
  {name:"180SX \"ゲテちゃん\" (RPS13)",power:526,speed:2654,acceleration:1093,handling:3009,nitro:3763,efficiency:495},
  {name:"メカドック CR-X ミッド リアルVer.",power:526,speed:2622,acceleration:1435,handling:2602,nitro:3860,efficiency:495},
  {name:"SKYLINE GT-R \"風花\" (BCNR33)",power:526,speed:2743,acceleration:1243,handling:2846,nitro:3687,efficiency:495},
  {name:"TOYOTA 86 ZN6 芦ノ湖SPL.",power:526,speed:2639,acceleration:1417,handling:2885,nitro:3597,efficiency:495},
  {name:"SUNOCO MONSTER CORVETTE",power:526,speed:2651,acceleration:1351,handling:2986,nitro:3541,efficiency:505},
  {name:"RX-7 FD3S [PROJECT.D] オーラVer.",power:526,speed:2786,acceleration:1291,handling:2661,nitro:3801,efficiency:505},
  {name:"CIVIC TYPE-R FK8 前園和宏Ver.",power:526,speed:2606,acceleration:1313,handling:2866,nitro:3734,efficiency:510},
  {name:"ROADSTER NB8C RS 大宮智史Ver.",power:526,speed:2571,acceleration:1452,handling:2952,nitro:3564,efficiency:510},
  {name:"D-MAX S15 SILVIA (S15)",power:526,speed:2991,acceleration:1191,handling:2723,nitro:3615,efficiency:510},
  {name:"CAMARO SS RS \"Green Monster\"",power:526,speed:3164,acceleration:988,handling:2123,nitro:4250,efficiency:520},
  {name:"FATALITA \"Takane\"SP",power:525,speed:2749,acceleration:1315,handling:2976,nitro:3474,efficiency:485},
  {name:"FATALITA",power:525,speed:2749,acceleration:1315,handling:2976,nitro:3474,efficiency:485},
  {name:"LYZER VR386",power:525,speed:2797,acceleration:1231,handling:2955,nitro:3518,efficiency:485},
  {name:"Panamera Turbo Executive",power:525,speed:2724,acceleration:1347,handling:2692,nitro:3756,efficiency:490},
  {name:"CIVIC MUGEN RR",power:525,speed:2647,acceleration:1247,handling:2847,nitro:3758,efficiency:490},
  {name:"SKYLINE 400R (RV37)",power:525,speed:2683,acceleration:1453,handling:2797,nitro:3586,efficiency:495},
  {name:"130R YOKOHAMA SUPRA",power:525,speed:2556,acceleration:1390,handling:2974,nitro:3589,efficiency:495},
  {name:"AMG GT S 大谷洋介Ver.",power:525,speed:2714,acceleration:1265,handling:2665,nitro:3855,efficiency:500},
  {name:"NISSAN GT-R R35 アライズ オーラVer.",power:525,speed:2771,acceleration:1045,handling:2490,nitro:4212,efficiency:500},
  {name:"GReddy 35RX spec-D'17",power:525,speed:2951,acceleration:1323,handling:2680,nitro:3555,efficiency:500},
  {name:"CORVETTE ZR1 \"Brightest Nite\"",power:525,speed:2770,acceleration:1275,handling:2475,nitro:3980,efficiency:500},
  {name:"INTEGRA TYPE-R DC2 酒井Ver.",power:525,speed:2747,acceleration:1305,handling:2777,nitro:3670,efficiency:505},
  {name:"Team TOYO TIRES DRIFT 180SX (RPS13)",power:525,speed:2526,acceleration:1113,handling:3206,nitro:3674,efficiency:510},
  {name:"NISMO 400R",power:525,speed:2579,acceleration:1362,handling:2811,nitro:3751,efficiency:510},
  {name:"[XD]NSX TYPE-R NA1",power:525,speed:2526,acceleration:961,handling:2791,nitro:4239,efficiency:510,xd:true},
  {name:"LANCER Evolution III \"Uranus\"",power:524,speed:2640,acceleration:906,handling:2802,nitro:4151,efficiency:485},
  {name:"FIERA \"Haruka\"SP",power:524,speed:2775,acceleration:1279,handling:2829,nitro:3596,efficiency:490},
  {name:"IMPREZA R205",power:524,speed:2793,acceleration:1262,handling:2638,nitro:3806,efficiency:490},
  {name:"LEG MOTOR SPORT RX-8",power:524,speed:2620,acceleration:1230,handling:2826,nitro:3803,efficiency:495},
  {name:"IMPREZA WRX STi GC8 \"Minotaurus\"",power:524,speed:2882,acceleration:1211,handling:2472,nitro:3923,efficiency:495},
  {name:"SKYLINE GT-R BNR32 死神Ver.",power:524,speed:2808,acceleration:1198,handling:2688,nitro:3788,efficiency:495},
  {name:"[XD]SKYLINE GT-R V-spec II (BNR34)",power:524,speed:2711,acceleration:1206,handling:2856,nitro:3726,efficiency:500,xd:true},
  {name:"CIVIC TYPE-R FK8",power:524,speed:2606,acceleration:1286,handling:2866,nitro:3734,efficiency:510},
  {name:"MELTFIRE[PAC-MAN 40th anniv.]",power:523,speed:2702,acceleration:1306,handling:2876,nitro:3576,efficiency:490},
  {name:"Techno PRO Spirit MR-S",power:523,speed:2726,acceleration:1355,handling:2946,nitro:3432,efficiency:490},
  {name:"IMPREZA S203",power:523,speed:2667,acceleration:1223,handling:2807,nitro:3782,efficiency:490},
  {name:"S15 NOB SPECIAL",power:523,speed:2975,acceleration:1199,handling:2734,nitro:3568,efficiency:490},
  {name:"911 Carrera GTS 991 J.テイラーVer.",power:523,speed:2608,acceleration:1245,handling:2740,nitro:3866,efficiency:495},
  {name:"718 Cayman S 982c",power:523,speed:2519,acceleration:1636,handling:2900,nitro:3405,efficiency:495},
  {name:"WISTERIA 180SX'18",power:523,speed:2335,acceleration:1023,handling:3506,nitro:3603,efficiency:495},
  {name:"FAIRLADY Z \"Strafe\" (Z32)",power:523,speed:2634,acceleration:1294,handling:2894,nitro:3651,efficiency:500},
  {name:"MUGEN S2000 AP1",power:523,speed:2681,acceleration:1324,handling:2704,nitro:3754,efficiency:500},
  {name:"NSX-R NA2 \"Bald Eagle\"",power:523,speed:2714,acceleration:962,handling:3107,nitro:3678,efficiency:500},
  {name:"GT-R BNR34 星野Ver.",power:523,speed:2631,acceleration:943,handling:3077,nitro:3828,efficiency:500},
  {name:"\"悪魔のZ\"[北見チューン改] -究極コラボ-",power:523,speed:2847,acceleration:1147,handling:2507,nitro:3977,efficiency:520},
  {name:"\"ブラックバード\" C1ランナー -究極コラボ-",power:523,speed:2676,acceleration:987,handling:2705,nitro:4102,efficiency:550},
  {name:"NISMO SKYLINE GT-R R-tune R34",power:522,speed:2631,acceleration:982,handling:2955,nitro:3873,efficiency:485},
  {name:"RX-7 FD3S \"Fatal Stinger・改\"",power:522,speed:2709,acceleration:1361,handling:3005,nitro:3380,efficiency:490},
  {name:"S2000 AP1 城島Ver.",power:522,speed:2621,acceleration:1271,handling:2612,nitro:3955,efficiency:490},
  {name:"TONE RT 4413 #773",power:522,speed:2873,acceleration:1075,handling:2932,nitro:3565,efficiency:495},
  {name:"GT-R BNR34 星野Ver. -究極コラボ-",power:522,speed:2631,acceleration:943,handling:3043,nitro:3828,efficiency:500},
  {name:"LANCER Evolution VII GSR CT9A 小早川Ver.",power:522,speed:2664,acceleration:1187,handling:2687,nitro:3901,efficiency:505},
  {name:"GT-R R35 アライズ -究極コラボ-",power:522,speed:2771,acceleration:1026,handling:2443,nitro:4212,efficiency:505},
  {name:"CORVETTE C6 ZR1",power:522,speed:2676,acceleration:1026,handling:2576,nitro:4176,efficiency:510},
  {name:"RCT \"ブラックバード\" C1ランナーVer.",power:522,speed:2656,acceleration:987,handling:2705,nitro:4102,efficiency:550},
  {name:"\"ブラックバード\" [北見チューン] -究極コラボ-",power:522,speed:2706,acceleration:987,handling:2645,nitro:4102,efficiency:550},
  {name:"チャンプ RX-7 SA22C リアルVer.",power:521,speed:2613,acceleration:1269,handling:2468,nitro:4083,efficiency:480},
  {name:"MERCEDES-AMG GT S NOB SPECIAL",power:521,speed:2690,acceleration:1225,handling:2861,nitro:3655,efficiency:480},
  {name:"SLS AMG GT C197",power:521,speed:2719,acceleration:1219,handling:2619,nitro:3669,efficiency:485},
  {name:"EXIGE S 八潮翔Ver.",power:521,speed:2512,acceleration:1302,handling:2920,nitro:3685,efficiency:490},
  {name:"S2000 AP1 城島Ver. -究極コラボ-",power:521,speed:2621,acceleration:1233,handling:2612,nitro:3955,efficiency:490},
  {name:"FAIRLADY Z Z34 \"Chevalier\"",power:521,speed:2912,acceleration:1040,handling:2942,nitro:3536,efficiency:495},
  {name:"[XD]TOYOTA 86 ZN6",power:521,speed:2611,acceleration:1205,handling:2781,nitro:3827,efficiency:500,xd:true},
  {name:"Impreza 22B-STi Version",power:521,speed:2705,acceleration:1223,handling:2807,nitro:3695,efficiency:505},
  {name:"FAIRLADY Z S30 \"悪魔のZ\"[北見チューン改]",power:521,speed:2807,acceleration:1147,handling:2507,nitro:3977,efficiency:520},
  {name:"\"悪魔のZ\"[北見チューン] -究極コラボ-",power:521,speed:2627,acceleration:1077,handling:2657,nitro:4067,efficiency:520},
  {name:"WILD GANG",power:520,speed:2577,acceleration:1400,handling:2777,nitro:3656,efficiency:480},
  {name:"TRUENO AE86 [PROJECT.D] -究極コラボ-",power:520,speed:2506,acceleration:943,handling:3244,nitro:3725,efficiency:480},
  {name:"RX-8 SE3P \"松風\"",power:520,speed:2720,acceleration:1350,handling:3026,nitro:3320,efficiency:485},
  {name:"PROMESSA [20th anniv.]",power:520,speed:2584,acceleration:1211,handling:3057,nitro:3554,efficiency:490},
  {name:"SUPRA RZ JZA80 \"紅獅子\"",power:520,speed:3003,acceleration:1585,handling:2153,nitro:3665,efficiency:490},
  {name:"SunRISE hibinojyuku S14 SILVIA (S14)",power:520,speed:2708,acceleration:1268,handling:2818,nitro:3618,efficiency:505},
  {name:"RX-7 Type R FD3S [PROJECT.D]",power:520,speed:2722,acceleration:1033,handling:2645,nitro:4001,efficiency:505},
  {name:"RX-7 FD3S [PROJECT.D] -究極コラボ-",power:520,speed:2722,acceleration:1151,handling:2645,nitro:3901,efficiency:505},
  {name:"RX-7 FC3S \"Flamberge\"",power:520,speed:2775,acceleration:1367,handling:2973,nitro:3286,efficiency:510},
  {name:"LFA LFA10",power:519,speed:2661,acceleration:1361,handling:2761,nitro:3611,efficiency:480},
  {name:"M5 \"Helter Skelter\"",power:519,speed:2411,acceleration:1111,handling:2861,nitro:4011,efficiency:490},
  {name:"SKYLINE GT-R BNR34 \"K0\"",power:519,speed:2661,acceleration:1176,handling:2686,nitro:3858,efficiency:495},
  {name:"RX-7 FD3S マサキVer.",power:519,speed:2843,acceleration:1163,handling:2622,nitro:3761,efficiency:500},
  {name:"IMPREZA WRX STi GC8 藤原文太Ver.",power:519,speed:2705,acceleration:1123,handling:2847,nitro:3720,efficiency:500},
  {name:"GReddy 35RX SPEC-D'16",power:519,speed:2856,acceleration:1266,handling:2463,nitro:3804,efficiency:505},
  {name:"FTO DE3A \"暁月\"",power:518,speed:2543,acceleration:1287,handling:2787,nitro:3745,efficiency:475},
  {name:"AMG GT S 130th Anniversary Edition",power:518,speed:2675,acceleration:1225,handling:2626,nitro:3852,efficiency:480},
  {name:"SILVIA S15 \"朧月\"",power:518,speed:2975,acceleration:1146,handling:2676,nitro:3568,efficiency:485},
  {name:"BISARGENTO \"Chihaya\"SP",power:518,speed:2952,acceleration:1332,handling:2373,nitro:3711,efficiency:490},
  {name:"Project μ メイクヒロタ HID信玄 Oldstar 7",power:518,speed:2634,acceleration:1324,handling:2962,nitro:3439,efficiency:490},
  {name:"MR2 GT-S SW20 \"Peacemaker\"",power:518,speed:2420,acceleration:1301,handling:2907,nitro:3742,efficiency:490},
  {name:"K'spec TONE S2000",power:518,speed:2641,acceleration:1194,handling:2945,nitro:3580,efficiency:490},
  {name:"BISARGENTO",power:518,speed:2952,acceleration:1332,handling:2373,nitro:3711,efficiency:490},
  {name:"[XD]LANCER Evolution Ⅴ CP9A",power:518,speed:2807,acceleration:1063,handling:2910,nitro:3580,efficiency:495,xd:true},
  {name:"[XD]RX-7 FD3S",power:518,speed:2843,acceleration:878,handling:3117,nitro:3522,efficiency:500,xd:true},
  {name:"CTS-V",power:517,speed:2849,acceleration:1497,handling:2277,nitro:3727,efficiency:475},
  {name:"TRUENO GT-APEX AE86 [PROJECT.D]",power:517,speed:2346,acceleration:943,handling:3344,nitro:3725,efficiency:475},
  {name:"190E 2.5-16 Evolution II W201",power:517,speed:2796,acceleration:1058,handling:2842,nitro:3644,efficiency:480},
  {name:"MARK X G's GRX133",power:517,speed:2857,acceleration:1069,handling:2657,nitro:3757,efficiency:480},
  {name:"[XD]FAIRLADY Z (Z32)",power:517,speed:2788,acceleration:1007,handling:2888,nitro:3656,efficiency:485,xd:true},
  {name:"LANCER Evolution X Final Concept",power:517,speed:2836,acceleration:870,handling:2728,nitro:3913,efficiency:485},
  {name:"RX-7 FC3S [PROJECT.D]",power:517,speed:2636,acceleration:937,handling:3046,nitro:3736,efficiency:485},
  {name:"SKYLINE 2000GT KGC10 ジュンVer.",power:517,speed:2579,acceleration:1249,handling:2790,nitro:3732,efficiency:490},
  {name:"[XD]INTEGRA TYPE-R DC5",power:517,speed:2461,acceleration:1280,handling:2946,nitro:3662,efficiency:490,xd:true},
  {name:"[XD]SKYLINE GT-R BNR32",power:517,speed:2472,acceleration:1169,handling:2711,nitro:4006,efficiency:490,xd:true},
  {name:"VIPER GTS 仕黒Ver.",power:517,speed:2592,acceleration:1424,handling:2631,nitro:3711,efficiency:495},
  {name:"GReddy 35RX Spec-D",power:517,speed:2490,acceleration:1069,handling:2774,nitro:4020,efficiency:500},
  {name:"DUNLOP OTG 86",power:517,speed:2777,acceleration:1209,handling:2968,nitro:3400,efficiency:500},
  {name:"BMW M5 F10M",power:517,speed:2612,acceleration:962,handling:2612,nitro:4162,efficiency:500},
  {name:"GULF ZESTINO S2000",power:516,speed:2630,acceleration:1180,handling:2930,nitro:3580,efficiency:470},
  {name:"SKYLINE GT-R BNR32 友也Ver.",power:516,speed:2873,acceleration:1085,handling:2639,nitro:3721,efficiency:485},
  {name:"[XD]CHASER JZX100",power:516,speed:2830,acceleration:1122,handling:2810,nitro:3557,efficiency:490,xd:true},
  {name:"[XD]RX-8 SE3P",power:516,speed:2583,acceleration:937,handling:2727,nitro:4080,efficiency:495,xd:true},
  {name:"911 Turbo 3.6 964 元木明彦Ver.",power:516,speed:2550,acceleration:1165,handling:2778,nitro:3831,efficiency:495},
  {name:"[XD]SUPRA RZ JZA80",power:516,speed:2797,acceleration:1040,handling:2934,nitro:3555,efficiency:495,xd:true},
  {name:"[XD]CIVIC TYPE-R EK9",power:516,speed:2882,acceleration:712,handling:3161,nitro:3569,efficiency:495,xd:true},
  {name:"CTR RISING SUN",power:516,speed:2721,acceleration:1025,handling:2575,nitro:4001,efficiency:510},
  {name:"RCT \"ブラックバード\" [北見チューン]",power:516,speed:2645,acceleration:1170,handling:2365,nitro:4145,efficiency:550},
  {name:"[XD]IMPREZA WRX STi VersionVI GC8",power:515,speed:2507,acceleration:1082,handling:2607,nitro:4107,efficiency:480,xd:true},
  {name:"WRX STI Type S VAB",power:515,speed:2577,acceleration:1127,handling:2527,nitro:4077,efficiency:490},
  {name:"GT-R R34 アライズ7号 -究極コラボ-",power:515,speed:2781,acceleration:958,handling:2763,nitro:3808,efficiency:505},
  {name:"WISTERIA 180SX",power:514,speed:2212,acceleration:973,handling:3471,nitro:3633,efficiency:480},
  {name:"[XD]LANCER Evolution III CE9A",power:514,speed:2449,acceleration:1027,handling:2655,nitro:4155,efficiency:495,xd:true},
  {name:"[XD]CAPPUCCINO EA11R",power:513,speed:2650,acceleration:1249,handling:2755,nitro:3605,efficiency:480,xd:true},
  {name:"GT-R R34 アライズ7号",power:513,speed:2761,acceleration:938,handling:2743,nitro:3828,efficiency:505},
  {name:"VIPER SRT10",power:513,speed:2604,acceleration:1254,handling:2504,nitro:3904,efficiency:530},
  {name:"チャンプ モンスター RX-7 SA22C",power:513,speed:3000,acceleration:1380,handling:2100,nitro:3780,efficiency:600},
  {name:"TOYOTA 86 \"Serval Cat\"",power:512,speed:2626,acceleration:1222,handling:3026,nitro:3370,efficiency:495},
  {name:"MR-S S EDITION ZZW30 小柏カイVer.",power:512,speed:2457,acceleration:1062,handling:2947,nitro:3777,efficiency:495},
  {name:"[XD]ROADSTER NCEC",power:511,speed:2606,acceleration:1078,handling:2707,nitro:3828,efficiency:490,xd:true},
  {name:"[XD]180SX RPS13",power:511,speed:2592,acceleration:1062,handling:2732,nitro:3851,efficiency:500,xd:true},
  {name:"メカドック CR-X ミッド",power:511,speed:2468,acceleration:1248,handling:2448,nitro:4068,efficiency:505},
  {name:"Ford GT",power:511,speed:2808,acceleration:1110,handling:2410,nitro:3910,efficiency:505},
  {name:"SWIFT SPORT \"Hummingbird\"",power:510,speed:2361,acceleration:1297,handling:2898,nitro:3663,efficiency:460},
  {name:"D-MAX SILVIA S15 1号機",power:510,speed:2889,acceleration:961,handling:2501,nitro:3854,efficiency:470},
  {name:"Mustang GT FASTBACK",power:510,speed:2508,acceleration:1131,handling:2572,nitro:4008,efficiency:470},
  {name:"S14 えっくす☆きゅーと 773",power:510,speed:2596,acceleration:1103,handling:2775,nitro:3728,efficiency:475},
  {name:"CAPPUCCINO EA11R 坂本Ver.",power:510,speed:2295,acceleration:1567,handling:2595,nitro:3745,efficiency:475},
  {name:"M3 COUPE E92",power:510,speed:2577,acceleration:937,handling:2587,nitro:4107,efficiency:475},
  {name:"FAIRLADY Z Z30 \"Yanky Mate Z\"",power:510,speed:2590,acceleration:1232,handling:2475,nitro:3920,efficiency:480},
  {name:"S2000 AP1 \"雀蜂\"",power:510,speed:2614,acceleration:754,handling:2814,nitro:4034,efficiency:485},
  {name:"RX-7 FD3S \"Fatal Stinger\"",power:510,speed:2644,acceleration:1301,handling:2941,nitro:3320,efficiency:490},
  {name:"NSX NA1 北条Ver. -究極コラボ-",power:510,speed:2691,acceleration:938,handling:2743,nitro:3828,efficiency:500},
  {name:"[XD]SUBARU BRZ ZC6",power:510,speed:2880,acceleration:911,handling:2980,nitro:3430,efficiency:505,xd:true},
  {name:"STI Performance Concept",power:509,speed:2700,acceleration:1272,handling:2519,nitro:3708,efficiency:490},
  {name:"[XD]SPRINTER TRUENO AE86",power:508,speed:2547,acceleration:1197,handling:2770,nitro:3646,efficiency:485,xd:true},
  {name:"SOARER MZ11 ハジメ&コージVer.",power:508,speed:2605,acceleration:1245,handling:2539,nitro:3771,efficiency:485},
  {name:"NISMO 270R",power:508,speed:2547,acceleration:1167,handling:2437,nitro:4017,efficiency:500},
  {name:"SKYLINE V37 60th Limited",power:508,speed:2547,acceleration:1167,handling:2437,nitro:4017,efficiency:500},
  {name:"SKYLINE V37 350GT HYBRID TYPE SP",power:508,speed:2547,acceleration:1167,handling:2437,nitro:4017,efficiency:500},
  {name:"NSX NA1 北条豪Ver.",power:508,speed:2661,acceleration:938,handling:2743,nitro:3828,efficiency:500},
  {name:"K'SPEC PEAKY ARCS JZA80 SUPRA",power:508,speed:2688,acceleration:1006,handling:2656,nitro:3824,efficiency:500},
  {name:"BOB-CAT",power:508,speed:2625,acceleration:1030,handling:2505,nitro:4000,efficiency:530},
  {name:"メカドック CITY TURBO II",power:507,speed:2347,acceleration:1297,handling:2662,nitro:3847,efficiency:470},
  {name:"NSX-R NA2 -Version Halloween-",power:507,speed:2711,acceleration:1150,handling:2621,nitro:3674,efficiency:485},
  {name:"86 GRMN",power:507,speed:2458,acceleration:1217,handling:2813,nitro:3654,efficiency:490},
  {name:"ワタナベ SUPER SPIRIT",power:507,speed:2508,acceleration:1308,handling:2508,nitro:3828,efficiency:515},
  {name:"FAIRLADY Z 50th Anniversary (Z34)",power:506,speed:2555,acceleration:1169,handling:2598,nitro:3797,efficiency:470},
  {name:"FAIRLADY Z NISMO Z34",power:506,speed:2617,acceleration:897,handling:2617,nitro:4001,efficiency:490},
  {name:"RGT",power:505,speed:2525,acceleration:1021,handling:2527,nitro:4027,efficiency:470},
  {name:"CELICA GT-FOUR ST205 WRC仕様車",power:505,speed:2561,acceleration:1181,handling:2681,nitro:3688,efficiency:475},
  {name:"EUNOS COSMO TYPE-S JCESE",power:505,speed:2707,acceleration:1370,handling:2498,nitro:3534,efficiency:535},
  {name:"FAIRLADY Z Heritage edition (Z34)",power:504,speed:2497,acceleration:1169,handling:2617,nitro:3797,efficiency:465},
  {name:"PEGASUS",power:504,speed:2490,acceleration:990,handling:2610,nitro:3990,efficiency:480},
  {name:"CTR",power:504,speed:2525,acceleration:1005,handling:2655,nitro:3905,efficiency:500},
  {name:"TOPTUL M7 NATS 86",power:503,speed:2379,acceleration:1000,handling:2902,nitro:3789,efficiency:450},
  {name:"NACガールズ&パンツァーR34 DUNLOP BRIDE",power:503,speed:2481,acceleration:1027,handling:2850,nitro:3710,efficiency:465},
  {name:"GOODYEAR 130MARK X G's",power:503,speed:2885,acceleration:1165,handling:2215,nitro:3812,efficiency:590},
  {name:"Mercedes-Maybach S-Class",power:502,speed:2461,acceleration:1153,handling:2221,nitro:4217,efficiency:480},
  {name:"RE雨宮 GruppeM-RX7",power:502,speed:2459,acceleration:900,handling:2677,nitro:4011,efficiency:510},
  {name:"NACガールズ&パンツァーS14 激 IK",power:501,speed:2493,acceleration:1270,handling:2558,nitro:3708,efficiency:460},
  {name:"Miura P400SV",power:501,speed:2667,acceleration:897,handling:2449,nitro:4015,efficiency:490},
  {name:"Mustang BOSS 302",power:501,speed:2533,acceleration:1043,handling:2413,nitro:4043,efficiency:500},
  {name:"S660 JW5 \"Chat noir\"",power:500,speed:2389,acceleration:1710,handling:2739,nitro:3163,efficiency:450},
  {name:"Countach LP400",power:500,speed:2479,acceleration:1129,handling:2629,nitro:3779,efficiency:500},
  {name:"LANCER Evolution FINAL EDITION",power:499,speed:2438,acceleration:801,handling:2733,nitro:4021,efficiency:470},
  {name:"FAIRLADY Z 300ZX Z31 原田Ver.",power:499,speed:2471,acceleration:1071,handling:2491,nitro:3951,efficiency:510},
  {name:"ZERO/SAVANNA RX-7 GT-X",power:499,speed:2471,acceleration:871,handling:2691,nitro:3951,efficiency:510},
  {name:"FD3S 頭文字D Ver.",power:499,speed:2426,acceleration:826,handling:2576,nitro:4156,efficiency:540},
  {name:"NSX-R NA2",power:498,speed:2406,acceleration:856,handling:2706,nitro:4006,efficiency:495},
  {name:"NSX TYPE-R NA1",power:498,speed:2355,acceleration:805,handling:2655,nitro:4155,efficiency:495},
  {name:"RX-7 Type R FD3S [林チューン]",power:498,speed:2486,acceleration:986,handling:2706,nitro:3786,efficiency:500},
  {name:"IMPREZA WRX STI GRB",power:497,speed:2427,acceleration:827,handling:2677,nitro:4027,efficiency:475},
  {name:"LANCER EvolutionX CZ4A",power:497,speed:2421,acceleration:771,handling:2721,nitro:4041,efficiency:480},
  {name:"RX-8 SE3P -爆ハン-",power:497,speed:2386,acceleration:786,handling:2886,nitro:3886,efficiency:505},
  {name:"LANCER EvolutionIX MR CT9A",power:496,speed:2406,acceleration:906,handling:2606,nitro:4006,efficiency:480},
  {name:"FC3S 頭文字D Ver.",power:495,speed:2391,acceleration:891,handling:2691,nitro:3941,efficiency:540},
  {name:"FC3S 頭文字D-夢現-Ver.",power:493,speed:2490,acceleration:842,handling:2711,nitro:3833,efficiency:460},
  {name:"SILEIGHTY 真子Ver. -究極コラボ-",power:491,speed:2321,acceleration:861,handling:2781,nitro:3860,efficiency:470},
  {name:"RX-7 FD3S",power:491,speed:2406,acceleration:706,handling:2706,nitro:4006,efficiency:510},
  {name:"YM SPEED/SKYLINE R32",power:489,speed:2391,acceleration:811,handling:2691,nitro:3891,efficiency:460},
  {name:"SILEIGHTY 真子＆沙雪Ver.",power:489,speed:2291,acceleration:861,handling:2781,nitro:3860,efficiency:465},
  {name:"FAIRLADY Z Z34",power:489,speed:2447,acceleration:797,handling:2547,nitro:3997,efficiency:490},
  {name:"2000GT MF10 女暴小町Ver.",power:487,speed:2450,acceleration:973,handling:2450,nitro:3885,efficiency:470},
  {name:"COSMO SPORTS L10B",power:483,speed:2450,acceleration:1027,handling:2150,nitro:4035,efficiency:455},
  {name:"SKYLINE COUPE CKV36",power:481,speed:2445,acceleration:795,handling:2445,nitro:3945,efficiency:485},
  {name:"MAZDA ROADSTER 30th Anniversary Edition",power:475,speed:2399,acceleration:966,handling:2606,nitro:3546,efficiency:430},
  {name:"ROADSTER ND5RC",power:474,speed:2396,acceleration:946,handling:2546,nitro:3596,efficiency:430},
  {name:"FUGA 370GT TypeS Y51",power:474,speed:2445,acceleration:695,handling:2345,nitro:3995,efficiency:485},
  {name:"2000GT MF10",power:467,speed:2310,acceleration:810,handling:2410,nitro:3810,efficiency:440}
]

export default fiveStarsCars
