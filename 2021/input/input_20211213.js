const dots = [
'1118,85',
'1064,690',
'560,670',
'68,446',
'769,668',
'88,219',
'120,255',
'925,879',
'112,512',
'1064,652',
'1046,233',
'902,417',
'523,33',
'1012,280',
'1210,135',
'410,142',
'689,497',
'698,211',
'981,259',
'465,610',
'689,621',
'1093,887',
'114,728',
'790,809',
'139,59',
'798,257',
'390,457',
'482,281',
'701,190',
'840,283',
'320,723',
'498,504',
'256,397',
'100,115',
'401,92',
'796,780',
'239,729',
'755,539',
'736,870',
'676,567',
'484,560',
'405,511',
'187,387',
'356,155',
'42,659',
'182,508',
'256,374',
'572,320',
'738,207',
'328,80',
'70,528',
'1111,752',
'648,54',
'33,308',
'716,704',
'701,798',
'700,324',
'10,260',
'1076,401',
'554,533',
'592,885',
'269,575',
'492,528',
'646,837',
'1134,268',
'1290,619',
'442,248',
'549,519',
'908,647',
'402,280',
'1081,428',
'768,575',
'1277,525',
'472,121',
'985,635',
'912,374',
'512,499',
'708,807',
'1054,558',
'305,856',
'401,756',
'8,53',
'1044,256',
'607,581',
'156,840',
'756,331',
'771,609',
'276,456',
'1268,842',
'1123,387',
'155,526',
'1125,380',
'612,52',
'864,772',
'572,126',
'1084,597',
'666,397',
'574,169',
'33,481',
'1098,280',
'468,215',
'370,3',
'639,204',
'1230,466',
'512,684',
'705,161',
'738,126',
'355,376',
'1096,736',
'1166,476',
'1036,135',
'912,782',
'947,32',
'636,50',
'623,250',
'1257,215',
'416,672',
'989,74',
'1300,852',
'776,659',
'1196,838',
'1064,304',
'252,471',
'994,410',
'459,33',
'567,361',
'489,159',
'1240,528',
'58,506',
'944,339',
'788,0',
'319,857',
'644,215',
'787,33',
'1198,767',
'798,843',
'920,233',
'760,411',
'1300,626',
'52,311',
'812,558',
'378,227',
'226,437',
'386,444',
'169,291',
'308,172',
'698,618',
'514,231',
'761,235',
'157,774',
'798,684',
'902,29',
'428,37',
'698,52',
'405,383',
'1104,256',
'1058,784',
'299,518',
'617,332',
'346,498',
'1178,89',
'1290,275',
'1196,166',
'293,425',
'895,567',
'1034,662',
'596,56',
'687,250',
'534,255',
'623,698',
'1309,719',
'92,347',
'226,297',
'736,253',
'497,155',
'736,528',
'776,780',
'223,42',
'465,732',
'900,53',
'493,411',
'909,838',
'542,512',
'385,659',
'537,590',
'1228,80',
'420,462',
'761,519',
'879,852',
'1277,693',
'908,838',
'890,324',
'1092,383',
'691,862',
'602,378',
'416,224',
'296,598',
'666,215',
'234,347',
'902,142',
'1101,253',
'581,362',
'316,567',
'28,255',
'929,824',
'117,77',
'848,515',
'701,704',
'1136,233',
'485,680',
'1233,511',
'788,357',
'246,304',
'500,505',
'1144,63',
'738,320',
'964,620',
'623,413',
'26,495',
'58,390',
'82,590',
'930,311',
'239,578',
'748,784',
'873,518',
'385,879',
'311,242',
'1036,666',
'1230,641',
'1032,224',
'80,325',
'1233,383',
'1290,171',
'31,413',
'1076,493',
'402,838',
'731,690',
'977,522',
'92,36',
'144,476',
'520,365',
'428,396',
'1196,390',
'100,149',
'818,752',
'142,637',
'21,882',
'295,61',
'631,435',
'731,204',
'676,584',
'68,448',
'748,544',
'560,224',
'1,719',
'683,152',
'490,590',
'909,373',
'517,568',
'967,690',
'1015,450',
'1092,175',
'729,532',
'676,248',
'912,858',
'1180,0',
'174,233',
'73,586',
'403,292',
'325,635',
'308,474',
'733,511',
'38,787',
'278,222',
'562,36',
'485,603',
'296,822',
'428,149',
'433,494',
'1240,120',
'136,175',
'1240,366',
'1240,774',
'485,214',
'73,745',
'668,364',
'1071,119',
'185,514',
'882,268',
'544,614',
'540,838',
'139,773',
'1005,236',
'156,280',
'1290,584',
'813,155',
'209,826',
'773,572',
'715,852',
'11,700',
'562,350',
'209,701',
'293,33',
'117,301',
'1248,710',
'343,690',
'274,359',
'1146,646',
'930,666',
'189,162',
'161,383',
'485,291',
'912,558',
'252,784',
'1237,745',
'35,32',
'105,235',
'760,483',
'62,821',
'977,372',
'366,591',
'221,848',
'120,108',
'991,857',
'909,381',
'355,518',
'316,791',
'445,583',
'422,710',
'510,508',
'52,516',
'349,236',
'277,201',
'276,662',
'676,758',
'502,455',
'353,844',
'415,316',
'28,404',
'498,558',
'554,107',
'1101,701',
'935,873',
'865,701',
'1071,327',
'497,409',
'756,626',
'1272,555',
'1118,851',
'1073,280',
'385,463',
'954,827',
'1048,845',
'402,59',
'602,807',
'577,511',
'234,509',
'642,880',
'97,428',
'705,226',
'73,532',
'1179,33',
'74,87',
'226,361',
'256,484',
'1154,280',
'989,887',
'982,696',
'977,74',
'566,51',
'480,45',
'398,72',
'142,283',
'848,851',
'957,844',
'390,233',
'999,242',
'366,339',
'776,255',
'1096,830',
'845,162',
'403,826',
'1078,264',
'274,666',
'622,506',
'70,366',
'64,49',
'579,690',
'373,490',
'738,350',
'667,362',
'134,591',
'1064,808',
'438,212',
'53,215',
'226,533',
'359,416',
'989,603',
'1262,357',
'1096,64',
'701,544',
'890,570',
'358,296',
'821,175',
'851,33',
'356,826',
'1094,212',
'1213,428',
'596,390',
'1066,814',
'80,466',
'273,824',
'35,862',
'877,235',
'484,616',
'103,42',
'1181,810',
'385,435',
'768,736',
'1289,539',
'1173,568',
'760,847',
'826,726',
'808,631',
'714,388',
'274,135',
'900,752',
'808,263',
'810,57',
'468,887',
'38,824',
'907,826',
'1277,586',
'33,362',
'497,215',
'912,820',
'1054,397',
'512,658',
'64,497',
'410,814',
'689,301',
'756,533',
'1029,311',
'470,891',
'525,84',
'1002,474',
'540,248',
'664,501',
'912,72',
'70,8',
'353,162',
'1155,368',
'156,558',
'808,487',
'156,54',
'1300,260',
'192,67',
'33,273',
'338,266',
'909,92',
'117,814',
'1158,36',
'356,778',
'1258,516',
'1066,798',
'957,162',
'1228,768',
'361,469',
'157,215',
'810,505',
'687,413',
'335,37',
'1058,23',
'920,498',
'714,623',
'1282,137',
'1202,413',
'1076,122',
'251,327',
'310,469',
'1190,108',
'687,385',
'621,593',
'403,567',
'623,196',
'882,793',
'1228,590',
'408,477',
'296,72',
'114,248',
'808,256',
'469,828',
'825,456',
'718,9',
'1071,165',
'301,550',
'1169,882',
'1041,459',
'944,303',
'560,710',
'522,357',
'338,215',
'537,145',
'687,698',
'972,215',
'328,814',
'1265,404',
'321,74',
'909,597',
'1242,448',
'33,525',
'120,786',
'684,379',
'164,248',
'537,817',
'1158,401',
'329,259',
'349,210',
'1190,3',
'550,847',
'649,522',
'276,214',
'933,609',
'1248,73',
'542,158',
'842,332',
'842,108',
'726,366',
'1054,334',
'1168,645',
'252,871',
'681,792',
'602,29',
'1141,291',
'912,385',
'462,379',
'1174,495',
'633,38',
'20,310',
'1193,814',
'169,774',
'643,252',
'554,779',
'1002,722',
'1258,67',
'298,378',
'1054,547',
'502,858',
'1126,89',
'333,74',
'1014,520',
'1081,690',
'45,796',
'1081,466',
'146,469',
'909,166',
'902,752',
'1250,32',
'663,409',
'131,861',
'840,197',
'174,45',
'152,858',
'186,679',
'74,59',
'164,590',
'622,394',
'964,396',
'141,882',
'1153,663',
'584,8',
'909,728',
'321,7',
'1222,135',
'277,693',
'252,423',
'890,509',
'162,287',
'1071,266',
'110,627',
'305,38',
'1275,862',
'298,166',
'838,569',
'1054,484',
'493,595',
'110,491',
'381,455',
'572,687',
'70,120',
'773,817',
'229,204',
'566,135',
'18,50',
'114,390',
'565,26',
'902,466',
'1135,674',
'308,26',
'1210,485',
'502,493',
'944,555',
'256,560',
'1153,774',
'865,68',
'28,137',
'184,197',
'962,809',
'894,222',
'634,567',
'622,58',
'808,183',
'539,285',
'1277,397',
'522,537',
'112,158',
'1136,661',
'114,646',
'1200,280',
'1263,89',
'356,827',
'87,640',
'462,809',
'21,539',
'52,378',
'771,285',
'293,273',
'246,735',
'564,772',
'714,390',
'565,868',
'401,597',
'1034,438',
'621,621',
'1154,838',
'92,99',
'1300,186',
'1237,532',
'321,603',
'664,837',
'445,193',
'1092,831',
'234,401',
'100,745',
'1258,378',
'1198,127',
'550,411',
'1034,456',
'112,127',
'11,194',
'730,535',
'872,614',
'977,455',
'1174,719',
'937,190',
'950,836',
'237,280',
'661,344',
'246,204',
'1193,301',
'165,383',
'164,764',
'1009,102',
'994,268',
'373,190',
'1174,175',
'62,73',
'907,567',
'356,728',
'120,3',
'1252,56',
'209,641',
'113,226',
'821,595',
'738,277',
'1176,533',
'1009,498',
'687,196',
'1278,52',
'1179,861',
'502,519',
'1076,547',
'1169,12',
'882,37',
'244,814',
'661,550',
'925,659',
'1171,59',
'339,362',
'1076,285',
'1084,533',
'1210,745',
'808,519',
'764,749',
'689,273',
'1092,511',
'514,332',
'398,173',
'1014,72',
'401,138',
'1190,255',
'1250,862',
'622,388',
'687,478',
'333,372',
'370,190',
'694,385',
'1124,556',
'1056,749',
'649,792',
'154,729',
'301,844',
'329,635',
'58,838',
'940,190',
'281,641',
'515,387',
'813,215',
'841,262',
'617,556',
'1230,204',
'930,379',
'1012,291',
'1218,795',
'428,268',
'21,486',
'185,380',
'1029,583',
'315,586',
'281,583',
'100,268',
'1088,859',
'971,308',
'88,395',
'597,207',
'621,273',
'10,186',
'370,704',
'714,504',
'427,770',
'256,385',
'1218,544',
'485,829',
'59,318',
'744,135',
'160,607',
'972,716',
'440,736',
'291,862',
'20,584',
'840,891',
'294,500',
'920,457',
'776,639',
'679,435',
'276,227',
'1123,835',
'216,491',
'410,53',
'646,841',
'513,12',
'32,282',
'643,700',
'1158,455',
'1171,773',
'216,212',
'0,287',
'146,425',
'380,807',
'1138,57',
'932,227',
'555,539',
'21,42',
'346,396',
'688,282',
'385,431',
'398,273',
'428,857',
'132,313',
'540,646',
'52,827',
'161,859',
'1037,439',
'641,446',
'574,477',
'281,311',
'1198,158',
'1200,715',
'70,558',
'139,387',
'932,848',
'744,311',
'1002,172',
'964,26',
'169,120',
'301,498',
'642,364',
'580,731',
'909,354',
'217,7',
'1041,575',
'1289,38',
'1022,833',
'1279,481',
'1154,558',
'1196,504',
'104,607',
'415,809',
'1275,32',
'398,334',
'756,50',
'182,773',
'208,772',
'1154,728',
'1158,858',
'730,59',
'62,184',
'957,344',
'890,547',
'1176,591',
'73,362',
'515,507',
'1145,511',
'1277,621',
'62,9',
'1277,413',
'361,873',
'786,0',
'483,857',
'534,780',
'1252,838',
'796,332',
'1083,803',
'662,840',
'682,399',
'798,499',
'925,459',
'1228,687',
'895,316',
'541,276',
'208,324',
'523,705',
'907,292',
'468,332',
'1289,355',
'667,700',
'402,647',
'416,387',
'1054,560',
'31,481',
'920,396',
'234,45'
]

const instructions = [
    'x=655',
    'y=447',
    'x=327',
    'y=223',
    'x=163',
    'y=111',
    'x=81',
    'y=55',
    'x=40',
    'y=27',
    'y=13',
    'y=6'
]

module.exports = {dots, instructions}