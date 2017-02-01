(function(){
var module = angular.module('ContactApp');

module.service('contactService', function(){
    
    this.contacts = [
      {  
         "gender":"female",
         "name":{  
            "title":"ms",
            "first":"jose",
            "last":"vega"
         },
         "location":{  
            "street":"3940 calle de arturo soria",
            "city":"burgos",
            "state":"país vasco",
            "postcode":65181
         },
         "email":"jose.vega@example.com",
         "login":{  
            "username":"whitepeacock922",
            "password":"cash",
            "salt":"cbFHyVD4",
            "md5":"690dbef5e224b46ae9feb5acb3cf0b53",
            "sha1":"0cc7e7262cc4333bef19f8a9ab74c106979c83e2",
            "sha256":"41b9f3491f2686d306f754421d8cafe7bd09600b027483a31c449c256a1aaa13"
         },
         "dob":"1947-01-11 04:17:28",
         "registered":"2004-01-19 21:35:24",
         "phone":"962-353-708",
         "cell":"639-877-966",
         "id":{  
            "name":"DNI",
            "value":"46871205-M"
         },
         "picture":{  
            "large":"https://randomuser.me/api/portraits/women/24.jpg",
            "medium":"https://randomuser.me/api/portraits/med/women/24.jpg",
            "thumbnail":"https://randomuser.me/api/portraits/thumb/women/24.jpg"
         },
         "nat":"ES"
      },
      {  
         "gender":"female",
         "name":{  
            "title":"ms",
            "first":"crystal",
            "last":"young"
         },
         "location":{  
            "street":"979 college st",
            "city":"kalgoorlie",
            "state":"western australia",
            "postcode":7279
         },
         "email":"crystal.young@example.com",
         "login":{  
            "username":"lazytiger616",
            "password":"bozo",
            "salt":"JufQOEbK",
            "md5":"288d94863b03a429c7bb8165bd9bce72",
            "sha1":"bc42e94b9663fb5d2b235f5558e5c4d73bf4bed7",
            "sha256":"91e9968118df1ba3a13e31ec51ad7b86fd4d3e6f1022e44c3a4c1bb13ff9da3d"
         },
         "dob":"1993-05-02 04:24:21",
         "registered":"2004-11-13 23:06:07",
         "phone":"03-0926-2511",
         "cell":"0495-811-185",
         "id":{  
            "name":"TFN",
            "value":"662013989"
         },
         "picture":{  
            "large":"https://randomuser.me/api/portraits/women/15.jpg",
            "medium":"https://randomuser.me/api/portraits/med/women/15.jpg",
            "thumbnail":"https://randomuser.me/api/portraits/thumb/women/15.jpg"
         },
         "nat":"AU"
      },
      {  
         "gender":"male",
         "name":{  
            "title":"mr",
            "first":"julien",
            "last":"caron"
         },
         "location":{  
            "street":"8893 rue des ecrivains",
            "city":"nanterre",
            "state":"loir-et-cher",
            "postcode":20524
         },
         "email":"julien.caron@example.com",
         "login":{  
            "username":"whitebutterfly175",
            "password":"nemrac58",
            "salt":"0vRTh0io",
            "md5":"b38061bef87af356644d9fa80f540026",
            "sha1":"ed854dbb4dacf16fa16ffbd3e49e7a7581d9a438",
            "sha256":"5050c2d928a75a0c0ccce94443cd945042a071828d1f899da7233d864bcf59c7"
         },
         "dob":"1970-02-25 01:15:57",
         "registered":"2002-04-28 20:16:03",
         "phone":"04-17-50-80-24",
         "cell":"06-66-00-23-42",
         "id":{  
            "name":"INSEE",
            "value":"170149841273 22"
         },
         "picture":{  
            "large":"https://randomuser.me/api/portraits/men/77.jpg",
            "medium":"https://randomuser.me/api/portraits/med/men/77.jpg",
            "thumbnail":"https://randomuser.me/api/portraits/thumb/men/77.jpg"
         },
         "nat":"FR"
      },
      {  
         "gender":"male",
         "name":{  
            "title":"mr",
            "first":"asher",
            "last":"jackson"
         },
         "location":{  
            "street":"6226 te rapa road",
            "city":"invercargill",
            "state":"northland",
            "postcode":12834
         },
         "email":"asher.jackson@example.com",
         "login":{  
            "username":"lazysnake705",
            "password":"101010",
            "salt":"empKJhX5",
            "md5":"bf2c57a5e9e7656dc44dcb11d83bee8e",
            "sha1":"09726f69c087bd2009cca222401116980fabd5a9",
            "sha256":"360b1aec10902b0655885cf52120225a04ffcb781de07e8cb23a54b51d039e5f"
         },
         "dob":"1994-10-20 09:37:09",
         "registered":"2015-06-11 11:09:35",
         "phone":"(539)-776-3754",
         "cell":"(923)-561-8937",
         "id":{  
            "name":"",
            "value":null
         },
         "picture":{  
            "large":"https://randomuser.me/api/portraits/men/93.jpg",
            "medium":"https://randomuser.me/api/portraits/med/men/93.jpg",
            "thumbnail":"https://randomuser.me/api/portraits/thumb/men/93.jpg"
         },
         "nat":"NZ"
      },
      {  
         "gender":"female",
         "name":{  
            "title":"mademoiselle",
            "first":"soline",
            "last":"faure"
         },
         "location":{  
            "street":"7613 rue d'abbeville",
            "city":"carrouge vd",
            "state":"st. gallen",
            "postcode":8705
         },
         "email":"soline.faure@example.com",
         "login":{  
            "username":"brownbird223",
            "password":"sandwich",
            "salt":"0tfJuvL3",
            "md5":"e57cd60ac9e04657a4aca7076823933b",
            "sha1":"044164040803f7d2572263c1ebe1fa2cd67377aa",
            "sha256":"b8fa4f39edeb6dacdc5c549028445da2ed99cb788ed5236315753edb5e3501d4"
         },
         "dob":"1991-02-11 21:30:24",
         "registered":"2006-10-17 11:28:12",
         "phone":"(477)-719-1383",
         "cell":"(623)-068-2697",
         "id":{  
            "name":"AVS",
            "value":"756.VRKG.MKQJ.03"
         },
         "picture":{  
            "large":"https://randomuser.me/api/portraits/women/35.jpg",
            "medium":"https://randomuser.me/api/portraits/med/women/35.jpg",
            "thumbnail":"https://randomuser.me/api/portraits/thumb/women/35.jpg"
         },
         "nat":"CH"
      },
      {  
         "gender":"male",
         "name":{  
            "title":"mr",
            "first":"wilhelm",
            "last":"günther"
         },
         "location":{  
            "street":"7267 mittelweg",
            "city":"herzogtum lauenburg",
            "state":"bayern",
            "postcode":97445
         },
         "email":"wilhelm.günther@example.com",
         "login":{  
            "username":"yellowbird600",
            "password":"barney1",
            "salt":"hkgXMyJ9",
            "md5":"57d26dcf7c6c5842a8cb108c635229fc",
            "sha1":"450a3f454a8e31492459d110571dac8049a1edd6",
            "sha256":"e8bc76bd8f2042bbacaa3158f4768aa2b970970e40a49aec55d10677eb71c07d"
         },
         "dob":"1981-11-21 02:26:03",
         "registered":"2003-04-06 16:35:54",
         "phone":"0865-9520950",
         "cell":"0174-6735304",
         "id":{  
            "name":"",
            "value":null
         },
         "picture":{  
            "large":"https://randomuser.me/api/portraits/men/71.jpg",
            "medium":"https://randomuser.me/api/portraits/med/men/71.jpg",
            "thumbnail":"https://randomuser.me/api/portraits/thumb/men/71.jpg"
         },
         "nat":"DE"
      },
      {  
         "gender":"female",
         "name":{  
            "title":"mrs",
            "first":"plácida",
            "last":"da mata"
         },
         "location":{  
            "street":"6984 rua onze ",
            "city":"piracicaba",
            "state":"alagoas",
            "postcode":67703
         },
         "email":"plácida.damata@example.com",
         "login":{  
            "username":"whiteswan714",
            "password":"kick",
            "salt":"d6bNHCav",
            "md5":"39b119ea6c81e172ef16db1578b633ad",
            "sha1":"83ae57f87a80bee9e5287f53dd355a3a2e966c47",
            "sha256":"8add7567479a36568bca64aab62dc9946bd0daa8f69f720328ee13dadd5b5ce6"
         },
         "dob":"1952-06-04 20:05:20",
         "registered":"2016-06-17 01:11:06",
         "phone":"(63) 9237-1216",
         "cell":"(51) 7795-3284",
         "id":{  
            "name":"",
            "value":null
         },
         "picture":{  
            "large":"https://randomuser.me/api/portraits/women/42.jpg",
            "medium":"https://randomuser.me/api/portraits/med/women/42.jpg",
            "thumbnail":"https://randomuser.me/api/portraits/thumb/women/42.jpg"
         },
         "nat":"BR"
      },
      {  
         "gender":"male",
         "name":{  
            "title":"mr",
            "first":"isaiah",
            "last":"duncan"
         },
         "location":{  
            "street":"514 blossom hill rd",
            "city":"warrnambool",
            "state":"new south wales",
            "postcode":5483
         },
         "email":"isaiah.duncan@example.com",
         "login":{  
            "username":"greenpanda766",
            "password":"2003",
            "salt":"nETBdCTp",
            "md5":"6f4fc35979251963c9d29d6dd7d3e6ad",
            "sha1":"ff2454567deafab3426c733a22d1f76a78013b12",
            "sha256":"a936d96cb9184c77773359a3776264f6594d20219bca6ea0f366bcc16bc9fe86"
         },
         "dob":"1964-04-17 00:19:40",
         "registered":"2015-02-27 00:47:19",
         "phone":"05-6286-5658",
         "cell":"0414-543-606",
         "id":{  
            "name":"TFN",
            "value":"354308523"
         },
         "picture":{  
            "large":"https://randomuser.me/api/portraits/men/24.jpg",
            "medium":"https://randomuser.me/api/portraits/med/men/24.jpg",
            "thumbnail":"https://randomuser.me/api/portraits/thumb/men/24.jpg"
         },
         "nat":"AU"
      },
      {  
         "gender":"female",
         "name":{  
            "title":"miss",
            "first":"signe",
            "last":"nielsen"
         },
         "location":{  
            "street":"2428 danmarksgade",
            "city":"nykøbing f",
            "state":"sjælland",
            "postcode":52674
         },
         "email":"signe.nielsen@example.com",
         "login":{  
            "username":"smallgorilla233",
            "password":"briana",
            "salt":"OIKDS17m",
            "md5":"363e498256073b5daf651520515f0562",
            "sha1":"8ab3397242f0e314a5af0d55bfc502ed96507ab7",
            "sha256":"cfcbd1c05e753465f8d35d67f225f91f17ca814a9b815f537e525fdaed1c4a51"
         },
         "dob":"1981-06-26 06:49:46",
         "registered":"2008-08-29 01:16:46",
         "phone":"56225443",
         "cell":"36785119",
         "id":{  
            "name":"CPR",
            "value":"610506-0549"
         },
         "picture":{  
            "large":"https://randomuser.me/api/portraits/women/56.jpg",
            "medium":"https://randomuser.me/api/portraits/med/women/56.jpg",
            "thumbnail":"https://randomuser.me/api/portraits/thumb/women/56.jpg"
         },
         "nat":"DK"
      },
      {  
         "gender":"male",
         "name":{  
            "title":"mr",
            "first":"robin",
            "last":"henning"
         },
         "location":{  
            "street":"1173 gartenstraße",
            "city":"siegen-wittgenstein",
            "state":"berlin",
            "postcode":61935
         },
         "email":"robin.henning@example.com",
         "login":{  
            "username":"bigpeacock839",
            "password":"grizzly",
            "salt":"mhkcoslr",
            "md5":"89b124eb85e04e14baa252869197b79f",
            "sha1":"5755fd74829db003071cafcd10d2c06371859a29",
            "sha256":"34e9b435596d2a120ff83023ac164d109ef9e6fa7b41594ed19a878682893751"
         },
         "dob":"1981-06-10 00:55:55",
         "registered":"2003-11-08 12:32:21",
         "phone":"0480-6202175",
         "cell":"0175-7868064",
         "id":{  
            "name":"",
            "value":null
         },
         "picture":{  
            "large":"https://randomuser.me/api/portraits/men/14.jpg",
            "medium":"https://randomuser.me/api/portraits/med/men/14.jpg",
            "thumbnail":"https://randomuser.me/api/portraits/thumb/men/14.jpg"
         },
         "nat":"DE"
      }
   
    ];
    
    

});
})(); //wraping it up so that scopes wont leak outside.