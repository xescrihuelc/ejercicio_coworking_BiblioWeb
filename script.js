// Elements obtained from the DOM
const contenedor2 = document.getElementById("contenedor2")



// Functions
function mostrarResultados() {
    const jsonBooks = `
    [
        {
            "author_key": [
                "OL27695A",
                "OL7482469A"
            ],
            "author_name": [
                "Agatha Christie",
                "Christie"
            ],
            "cover_edition_key": "OL51012139M",
            "cover_i": 14578132,
            "edition_count": 105,
            "first_publish_year": 1964,
            "has_fulltext": true,
            "ia": [
                "missmarpleneicar0000chri",
                "missmarplemetvak0000chri",
                "lemajorparlaittr0000agat",
                "karaibskatajemni0000chri",
                "caribbeanmystery0000agat",
                "isbn_9021833085",
                "caribbeanmystery0000unse_d9m5",
                "caribbeanmystery0000chri_d2s4",
                "caribbeanmystery0000chri_n2n3",
                "caribbeanmystery0000chri_m4d9",
                "caribbeanmystery00pock",
                "caribbeanmystery00chri",
                "caribbeanmystery0000chri_t2o4",
                "caribbeanmystery0000chri_e0j2"
            ],
            "ia_collection_s": "americana;delawarecountydistrictlibrary;delawarecountydistrictlibrary-ol;inlibrary;internetarchivebooks;library_of_atlantis;openlibrary-d-ol;printdisabled;stmaryscountylibrary",
            "key": "/works/OL472458W",
            "language": [
                "spa",
                "ita",
                "ger",
                "pol",
                "eng",
                "dut",
                "fre"
            ],
            "lending_edition_s": "OL50564877M",
            "lending_identifier_s": "missmarpleneicar0000chri",
            "public_scan_b": false,
            "title": "A Caribbean Mystery"
        },
        {
            "author_key": [
                "OL27695A"
            ],
            "author_name": [
                "Agatha Christie"
            ],
            "cover_edition_key": "OL40281064M",
            "cover_i": 12996556,
            "edition_count": 107,
            "first_publish_year": 1932,
            "has_fulltext": true,
            "ia": [
                "moordondervuurwe0000chri",
                "lamaisonduperil0000chri_y1e6",
                "dashausderdunero0000chri",
                "lamaisonduperil0000chri",
                "dashausderdune0000chri",
                "perilatendhouse00agat",
                "peligroinminente0000agat",
                "isbn_9780007659562",
                "perilendhouse0000agat",
                "lccn_0553340730",
                "lamaisonduperil0000agat",
                "isbn_006138934",
                "perilatendhouse00chri",
                "perilatendhouse0000agat",
                "perilatendhouse0000chri",
                "perilatendhouse00chri_0",
                "perilatendhouse0000chri_x7r2",
                "perilatendhouse0000chri_n8v7",
                "agathachristie0000unse_a6f5"
            ],
            "ia_collection_s": "americana;cnusd-ol;delawarecountydistrictlibrary;inlibrary;internetarchivebooks;library_of_atlantis;occidentalcollegelibrary-ol;openlibrary-d-ol;printdisabled",
            "key": "/works/OL472165W",
            "language": [
                "ita",
                "eng",
                "dut",
                "spa",
                "fre",
                "ger"
            ],
            "lending_edition_s": "OL50530367M",
            "lending_identifier_s": "moordondervuurwe0000chri",
            "public_scan_b": false,
            "title": "Peril at End House"
},
        {
            "author_key": [
                "OL27695A"
            ],
            "author_name": [
                "Agatha Christie"
            ],
            "cover_edition_key": "OL39217511M",
            "cover_i": 12855074,
            "edition_count": 103,
            "first_publish_year": 1939,
            "has_fulltext": true,
            "ia": [
                "onataldepoirot0000chri",
                "lenoeldherculepo0000chri_y3d8",
                "herculepoirotsju00chri",
                "lenoeldherculepo0000chri_a8h5",
                "navidadestragica0000chri",
                "holidayformurder00chri",
                "holidayformurder00agat",
                "lenoeldherculepo0000chri",
                "holidayformurder0000agat",
                "herculepoirotsch00chri",
                "herculepoirotsch00chri_0",
                "holidayformurder0000agat_h9i0",
                "herculepoirotsch0000chri",
                "herculepoirotsch0000agat",
                "herculepoirotsc00chri",
                "herculepoirotsch0000chri_u1u2",
                "herculepoirotsch0000agat_o1q8",
                "herculepoirotsch00agat",
                "herculepoirotsch0000chri_m0c5"
            ],
            "ia_collection_s": "americana;cnusd-ol;delawarecountydistrictlibrary;inlibrary;internetarchivebooks;library_of_atlantis;miltonpubliclibrary-ol;openlibrary-d-ol;printdisabled;rochester-ol;spokanepubliclibrary-ol;universityofarizona-ol",
            "key": "/works/OL471841W",
            "language": [
                "por",
                "pol",
                "swe",
                "chi",
                "eng",
                "fre",
                "spa",
                "ger",
                "tur"
            ],
            "lending_edition_s": "OL32359718M",
            "lending_identifier_s": "onataldepoirot0000chri",
            "public_scan_b": false,
            "title": "Hercule Poirot's Christmas"
        },
        {
            "author_key": [
                "OL27695A"
            ],
            "author_name": [
                "Agatha Christie"
            ],
            "cover_edition_key": "OL32800637M",
            "cover_i": 11433305,
            "edition_count": 103,
            "first_publish_year": 1935,
            "has_fulltext": true,
            "ia": [
                "isbn_9789794030714",
                "muerteenlasnubes0000chri",
                "moushazaiyunduan0000chri",
                "todindenwolken0000chri_l5i1",
                "todindenwolken0000chri",
                "lamortdanslesnua0000chri",
                "xdeathincloudsbk0000agat",
                "delittoincielo0000chri",
                "yunzhongming0000chri",
                "muerteenlasnubes0000chri_t4m7",
                "deathinclouds0000chri_g6c8",
                "todindenwolkende0000agat",
                "deathinair00chri",
                "deathinclouds00chri",
                "deathinair00agat",
                "deathinclouds0000chri",
                "deathinclouds0000chri_a7k0",
                "deathinclouds0000chri_r1h3",
                "deathinclouds0000unse",
                "deathinclouds0000chri_q7a7",
                "deathinclouds0000chri_z0g6",
                "deathinclouds0000chri_w8s2",
                "toddenwolkenhach20chri"
            ],
            "ia_collection_s": "americana;cnusd-ol;delawarecountydistrictlibrary;inlibrary;internetarchivebooks;library_of_atlantis;occidentalcollegelibrary-ol;openlibrary-d-ol;popularchinesebooks;printdisabled;stmaryscountylibrary;uni-ol",
            "key": "/works/OL472324W",
            "language": [
                "chi",
                "ita",
                "eng",
                "fre",
                "spa",
                "ind",
                "ger",
                "jpn"
            ],
            "lending_edition_s": "OL26645675M",
            "lending_identifier_s": "isbn_9789794030714",
            "public_scan_b": false,
            "title": "Death in the Clouds"
        },
        {
            "author_key": [
                "OL27695A"
            ],
            "author_name": [
                "Agatha Christie"
            ],
            "cover_i": 9492111,
            "edition_count": 106,
            "first_publish_year": 1933,
            "has_fulltext": true,
            "ia": [
                "lecouteausurlanu0000chri_q8c6",
                "lecouteausurlanu0000agat",
                "renxingjilulorde0000chri",
                "lecouteausurlanu0000chri_s9k1",
                "lecouteausurlanu0000chri",
                "thirteenatdinner00chri",
                "lamuertedelorded0000chri",
                "agathachristiele0000unse",
                "dreizehnbeitisch0000chri",
                "13atdinner00chri",
                "13atdinner0000agat",
                "lordedgwaredies00chri",
                "lordedgwaredies0000chri_k2x9",
                "lordedgwaredies0000chri",
                "lordedgwaredies0000chri_m1k8",
                "isbn_9780007815555",
                "lordedgwarediesh0000chri",
                "agathachristielo0000unse",
                "bwb_W6-BHE-331"
            ],
            "ia_collection_s": "americana;cnusd-ol;inlibrary;internetarchivebooks;popularchinesebooks;printdisabled;rochester-ol",
            "key": "/works/OL471767W",
            "language": [
                "ger",
                "rus",
                "ara",
                "spa",
                "eng",
                "chi",
                "pol",
                "fre"
            ],
            "lending_edition_s": "OL50554895M",
            "lending_identifier_s": "lecouteausurlanu0000chri_q8c6",
            "public_scan_b": false,
            "title": "Lord Edgware Dies"
        },
        {
            "author_key": [
                "OL27695A"
            ],
            "author_name": [
                "Agatha Christie"
            ],
            "cover_edition_key": "OL5255746M",
            "cover_i": 12387503,
            "edition_count": 105,
            "first_publish_year": 1975,
            "has_fulltext": true,
            "ia": [
                "isbn_9788520923627",
                "katenpoarosaigon0000unse",
                "telon0000agat",
                "poirotquittelasc0000agat",
                "isbn_9785942780784",
                "poirotquittelasc0000chri",
                "bwb_P4-AJY-577",
                "curtain0000chri_c2r5",
                "curtainpoirotsla0000agat",
                "curtainpoirotsla0000chri_n9s8",
                "curtainpoirotsla0000chri_i2u0",
                "curtainpoirotsla0000chri_g1w5",
                "curtainherculepo00chri",
                "curtainchri00chri",
                "curtainherculepi00chri",
                "curtain00chri",
                "curtain200chri",
                "poirotquittelasc0000chri_z8b9",
                "curtain0000chri",
                "curtainc00chri",
                "curtainpoirotsla0000chri_b4y9",
                "curtain00agat",
                "curtainpoirotsla0000chri"
            ],
            "ia_collection_s": "americana;barryuniversity-ol;binghamton-ol;dartmouthlibrary-ol;denverpubliclibrary-ol;drakeuniversity-ol;gwulibraries-ol;inlibrary;internetarchivebooks;occidentalcollegelibrary-ol;printdisabled;spokanepubliclibrary-ol;udc-ol;uni-ol;universityofarizona-ol;universityofoklahoma-ol;worthingtonlibraries-ol",
            "key": "/works/OL472470W",
            "language": [
                "jpn",
                "spa",
                "vie",
                "ger",
                "chi",
                "pol",
                "eng",
                "por",
                "gre",
                "fre",
                "rus"
            ],
            "lending_edition_s": "OL45757340M",
            "lending_identifier_s": "isbn_9788520923627",
            "public_scan_b": false,
            "title": "Curtain"
        },
        {
            "author_key": [
                "OL27695A"
            ],
            "author_name": [
                "Agatha Christie"
            ],
            "cover_edition_key": "OL50557260M",
            "cover_i": 14570595,
            "edition_count": 109,
            "first_publish_year": 1949,
            "has_fulltext": true,
            "ia": [
                "lacasatorcidathe0000agat",
                "lamaisonbiscornu0000chri_z7c4",
                "lacasatorcida0000chri",
                "casatorta0000chri",
                "lamaisonbiscornu0000chri",
                "lamaisonbiscornu0000chri_a0p3",
                "crookedhouse00chri_1",
                "crookedhouse00agat_0",
                "crookedhouse0000chri_w7j2",
                "crookedhouse00agat",
                "crookedhouse0000chri",
                "crookedhouse0000chri_d1p1",
                "daskrummehauskri0000chri",
                "crookedhouse0000chri_q4t1",
                "bwb_KJ-393-110"
            ],
            "ia_collection_s": "americana;cnusd-ol;delawarecountydistrictlibrary;delawarecountydistrictlibrary-ol;drakeuniversity-ol;inlibrary;internetarchivebooks;library_of_atlantis;openlibrary-d-ol;printdisabled;worthingtonlibraries-ol",
            "key": "/works/OL471891W",
            "language": [
                "spa",
                "chi",
                "ger",
                "eng",
                "por",
                "fre",
                "mul"
            ],
            "lending_edition_s": "OL9142153M",
            "lending_identifier_s": "lacasatorcidathe0000agat",
            "public_scan_b": false,
            "title": "Crooked House"
        },
        {
            "author_key": [
                "OL27695A"
            ],
            "author_name": [
                "Agatha Christie"
            ],
            "cover_edition_key": "OL7257830M",
            "cover_i": 14561660,
            "edition_count": 103,
            "first_publish_year": 1938,
            "has_fulltext": true,
            "ia": [
                "rendezvousavecla0000chri",
                "citaconlamuerte0000chri",
                "rendezvousavecla0000chri_k7y2",
                "citaconlamuertea0000agat",
                "rendezvousavecla0000agat",
                "rendezvouszesmie0000chri",
                "agathachristie0000unse_m7o4",
                "appointmentwithd00chri",
                "appointmentwithd0000chri_a2v0",
                "appointmentwithd00agat_0",
                "appointmentwithd00agat",
                "appointmentwithdchr00chri",
                "appointmentwithd0000chri",
                "appointmentwithd0000agat"
            ],
            "ia_collection_s": "americana;cnusd-ol;delawarecountydistrictlibrary;goffstownlibrary-ol;inlibrary;internetarchivebooks;library_of_atlantis;occidentalcollegelibrary-ol;openlibrary-d-ol;printdisabled",
            "key": "/works/OL471667W",
            "language": [
                "spa",
                "hin",
                "ita",
                "chi",
                "ger",
                "pol",
                "eng",
                "fre"
            ],
            "lending_edition_s": "OL8887501M",
            "lending_identifier_s": "rendezvousavecla0000chri",
            "public_scan_b": false,
            "title": "Appointment with Death"
        },
        {
            "author_key": [
                "OL27695A"
            ],
            "author_name": [
                "Agatha Christie"
            ],
            "cover_edition_key": "OL46524697M",
            "cover_i": 13151356,
            "edition_count": 205,
            "first_publish_year": 1926,
            "has_fulltext": true,
            "ia": [
                "murderofrogerack0000agat_g7y3",
                "lemeurtrederoger0000chri_a8a5",
                "demoordoprogerac0000agat",
                "lemeurtrederoger0000agat",
                "oassassinatodero0000agat",
                "elasesinatoderog0000agat",
                "murderofrogerack0000unse_u9e8",
                "murderofrogerack0000agat",
                "elasesinatoderog0000chri_g2w9",
                "murderofrogerack0000chri_u0l6",
                "alibiroman0000chri",
                "elasesinatoderog0000chri",
                "murderofrogerack0000chri_v8v4",
                "lemeurtrederoger0000chri_q3h7",
                "lemeurtrederoger0000chri_y9m9",
                "murderofrogerac000agat",
                "lemeurtrederoger0000chri_e0j3",
                "murderofrogerack00agat",
                "murderofrogerack00chrix",
                "isbn_9780671701185",
                "isbn_0671498568",
                "lemeurtrederoger0000chri",
                "lemeurtrederoger0000chri_c4k8",
                "murderofrogerack00chririch",
                "murderofrogerack00chri",
                "isbn_9780007282548",
                "murderofrogerack0000unse",
                "luojieyi0000unse",
                "murderofrogerack0000unse_l1s9",
                "murderofrogerack0000chri_d3e3",
                "murderofrogerack0000agat_z7f0",
                "murderofrogerack0000agat_h1c0",
                "murderofrogerack0000agat_b0x8",
                "murderofrogerack0000chri_f8w9",
                "murderofrogerack0000chri_f7g4"
            ],
            "ia_collection_s": "americana;cnusd-ol;delawarecountydistrictlibrary;inlibrary;internetarchivebooks;johnshopkins-ol;library_of_atlantis;miltonpubliclibrary-ol;occidentalcollegelibrary-ol;openlibrary-d-ol;printdisabled;stmaryscountylibrary;the-claremont-colleges-ol;tulsacc-ol;universityofarizona-ol",
            "key": "/works/OL471932W",
            "language": [
                "eng",
                "ara",
                "fre",
                "ger",
                "por",
                "rus",
                "chi",
                "ita",
                "pol",
                "jpn",
                "dut",
                "epo",
                "spa"
            ],
            "lending_edition_s": "OL46524697M",
            "lending_identifier_s": "murderofrogerack0000agat_g7y3",
            "public_scan_b": true,
            "title": "The Murder of Roger Ackroyd"
        },
        {
            "author_key": [
                "OL27695A"
            ],
            "author_name": [
                "Agatha Christie"
            ],
            "cover_i": 6379981,
            "edition_count": 108,
            "first_publish_year": 1965,
            "has_fulltext": true,
            "ia": [
                "lhotelbertram0000chri",
                "missmarplebertra0000chri",
                "alhotelbertramat0000chri",
                "bertramshotel0000chri",
                "atbertramshotelf0000agat",
                "atbertramshotel00chri",
                "atbertramshotelm0000agat",
                "atbertramshotela0000agat",
                "atbertramshotel0000chri_n7n9",
                "isbn_9780671702281",
                "atbertramshotel00agat_0",
                "atbertramshotel00chri_0",
                "atbertramshotel00agat",
                "atbertramshotelchri00chri",
                "atbertramshotel0000chri",
                "atbertramshotel00pock",
                "atbertramshotel0000chri_a2x3",
                "isbn_9780451199935",
                "atbertramshotel0000chri_x4j7",
                "atbertramshotel0000agat",
                "atbertramshotel0000agat_o9l2"
            ],
            "ia_collection_s": "americana;cnusd-ol;delawarecountydistrictlibrary;delawarecountydistrictlibrary-ol;inlibrary;internetarchivebooks;library_of_atlantis;occidentalcollegelibrary-ol;openlibrary-d-ol;printdisabled;universityofarizona-ol",
            "key": "/works/OL265415W",
            "language": [
                "eng",
                "fre",
                "ger",
                "chi",
                "ita",
                "pol",
                "spa"
            ],
            "lending_edition_s": "OL50556449M",
            "lending_identifier_s": "lhotelbertram0000chri",
            "public_scan_b": false,
            "title": "At Bertram's Hotel"
        },
        {
            "author_key": [
                "OL27695A"
            ],
            "author_name": [
                "Agatha Christie"
            ],
            "cover_edition_key": "OL47231044M",
            "cover_i": 13671433,
            "edition_count": 114,
            "first_publish_year": 1941,
            "has_fulltext": true,
            "ia": [
                "muertebajoelsol0000chri",
                "lesvacancesdherc00chri",
                "evilundersun0000agat_i3v9",
                "evilundersun0000agat",
                "bwb_P8-ADD-574",
                "evilundersun0000chri_r6s5",
                "evilundersun0000chri",
                "evilundersun0000chri_k1i8",
                "evilundersunhe00chri",
                "evilundersun0000chri_o3u9",
                "evilundersun0000chri_o3c8",
                "evilundersun0000chri_w2p3",
                "evilundersun00chri",
                "evilundersunherc00chri",
                "varjossaauringon00cris"
            ],
            "ia_collection_s": "americana;delawarecountydistrictlibrary;delawarecountydistrictlibrary-ol;hamiltonpubliclibrary-ol;inlibrary;internetarchivebooks;library_of_atlantis;occidentalcollegelibrary-ol;openlibrary-d-ol;printdisabled;stmaryscountylibrary;worthingtonlibraries-ol",
            "key": "/works/OL472049W",
            "language": [
                "eng",
                "fre",
                "ger",
                "fin",
                "rus",
                "ita",
                "chi",
                "pol",
                "vie",
                "spa"
            ],
            "lending_edition_s": "OL12987717M",
            "lending_identifier_s": "muertebajoelsol0000chri",
            "public_scan_b": false,
            "title": "Evil Under the Sun"
        },
        {
            "author_key": [
                "OL27695A"
            ],
            "author_name": [
                "Agatha Christie"
            ],
            "cover_edition_key": "OL47237529M",
            "cover_i": 13679064,
            "edition_count": 102,
            "first_publish_year": 1946,
            "has_fulltext": true,
            "ia": [
                "murderafterhours0000agat",
                "murderafterhours0000agat_w5w7",
                "sangreenlapiscin0000chri",
                "levallon0000agat",
                "levallon0000chri_j3z0",
                "levallon0000chri",
                "murderafterhours00chri",
                "hollow0000chri_c4u5",
                "hollow0000agat",
                "isbn_9780007936953",
                "bwb_P8-AWY-101",
                "isbn_9780006165514",
                "bwb_KN-884-239",
                "hollowchri00chri",
                "hollow0000chri",
                "hollow0000chri_n6f9",
                "hollowwinterbroo00agat",
                "isbn_9780007815548",
                "hollow0000chri_z4b9"
            ],
            "ia_collection_s": "americana;delawarecountydistrictlibrary;drakeuniversity-ol;inlibrary;internetarchivebooks;library_of_atlantis;occidentalcollegelibrary-ol;openlibrary-d-ol;printdisabled",
            "key": "/works/OL472526W",
            "language": [
                "eng",
                "heb",
                "fre",
                "ger",
                "spa"
            ],
            "lending_edition_s": "OL40281003M",
            "lending_identifier_s": "murderafterhours0000agat",
            "public_scan_b": true,
            "title": "The Hollow"
        },
        {
            "author_key": [
                "OL27695A"
            ],
            "author_name": [
                "Agatha Christie"
            ],
            "cover_edition_key": "OL9241053M",
            "cover_i": 10249524,
            "edition_count": 108,
            "first_publish_year": 1952,
            "has_fulltext": true,
            "ia": [
                "murderwithmirror01chri",
                "isbn_9780007716920",
                "fatamorgana0000chri",
                "jeuxdeglaces0000chri_l2y4",
                "jeuxdeglaces0000agat_z8e6",
                "jeuxdeglaces0000chri",
                "murderwithmirror00chri",
                "murderwithmirror00agat",
                "jeuxdeglaces0000chri_l1o3",
                "jeuxdeglaces0000unse",
                "isbn_0671829602",
                "isbn_0671812203",
                "murderwithmirror0000chri",
                "jeuxdeglaces0000agat",
                "isbn_9780451199904",
                "theydoitwithmirr0000chri_o5p4",
                "theydoitwithmirr00agat",
                "theydoitwithmirr0000chri",
                "theydoitwithmirr00chri_100"
            ],
            "ia_collection_s": "americana;cnusd-ol;delawarecountydistrictlibrary;delawarecountydistrictlibrary-ol;drakeuniversity-ol;duke_libraries;inlibrary;internetarchivebooks;library_of_atlantis;occidentalcollegelibrary-ol;openlibrary-d-ol;printdisabled;stmaryscountylibrary;uni-ol",
            "key": "/works/OL471871W",
            "language": [
                "eng",
                "heb",
                "ara",
                "fre",
                "ger",
                "chi",
                "ita",
                "pol",
                "spa"
            ],
            "lending_edition_s": "OL7666467M",
            "lending_identifier_s": "murderwithmirror01chri",
            "public_scan_b": true,
            "title": "They Do It with Mirrors"
        }
    ]
    `
    const books = JSON.parse(jsonBooks)
    for (let index = 0; index < books.length; index++) {
        const book = books[index]
        const card = document.createElement('div')
        card.classList.add('card')
        const imageURL = `https://covers.openlibrary.org/b/olid/${book.cover_edition_key}.jpg`
        console.log(imageURL);
        

        const authors = book.author_name.join(", ")
        card.innerHTML = `
            <div class="card-image">
                <img src="${imageURL}" alt="${book.title}">
            </div>
            <div class="card-content">
                <h2 class="card-title">${book.title}</h2>
                <p><i>${authors}</i> (${book.first_publish_year})</p>
                <p><button id="${index}" onclick="addToCart(${index})">Añadir al carrito</button></p>
            </div>
        `
        contenedor2.appendChild(card)
    }
}

function addToCart(index) {
    // The book to add to the cart is books[index]

}

mostrarResultados()
contenedor2.classList.remove("hidden")
