const numberUri = {
    uri:[
        //https://www.clipart.email/
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ceXiFVUZTaMVLg-6rgS3JqmDvb1JbNyVHsL5CoE_EjPtyQ&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjqNImMkwJqlrm2pdnpDWNI-DHnkwMbHGNB7ItElmNFdd9QjjX&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8GKvbRgyFcu5MSg_kzurnhUDoV2hSjI8ATaM7Fvd9ZjiOrjU&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSide7uV3-BazT1Lk9aiM-gq83eNuk2bTxTU50D3YdIvFnZDo0&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_TX1UZjuD_QxcVtMMcNVvvCh_pkBQHZVobOWPfhlqRLZsZhc&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD-qkPVjX7L1m4WAV-QPTtLbMRXecS9GI6RNQIQXe_GnVcVBCK&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcsmCvqAaIlqbfBmRZZ4linfn4caNZi9RwPJg5rRrNcj7lf4U&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw1T_W4siWN1xiqax3KBdOxdm4SuNZV5Lj_74jFYsBVoYxM_U&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEngshnPRP-ho5wrqxKGMD_gytlvsv9QfFq5kmQkx6TnidWTIy&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaVHMUTqB9A0INTp5NVjQ7n2iLAPoTre-V3aZi-NCRCI5xH6ku&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNbZ_0T_zUbIaVwcfIT14yBu1gSu-XSAx6_gX0yP_DrAVa5YQ&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8houOmBPr2ZtXgt1zArUXjfRP7iil144K-nSMMwpG7BJypoY&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwL6xJ_YY_ILGWNvRc6iTJT1CyihM1Xgeb8L1yL12SJE3JQBA&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCzqZjvsljM7uUBYyWrv9udThwlvJCx3XxR7YfFKNd73nbUKE&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJeZl-hbWckyv7bulieglNyPjLkFg4QGzeudGHNP8OtJ2kvKYO&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD3pICHL8aCkeEyHZXvbYJpF8PS7Z-mc0pT4VeK1APuwUMCjvO&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU03W-lXoNf-S6DiV6n1lX7RIExzyC4mYZ-fkjM1jjZ_FZs7cy&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYs0kjiX1VapdFZ9HhyEKeTybGXxRpZ2mKnPWofsaHVnOUT3aY&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2TXARNmumjk_CJfnOYNLrrFAgDSQ_I3XIb_P90FhjgQrY1LYW&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc3cXy0t3wq009XZ9g-RxJyJAr2vWMz85Qf35fQXIbW0aQzSec&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR912WKHr4jW1VDWzvJr8GCIkdSEKEQFYRmESpwGwcRPNsVel5f&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKQd-pFv4wk-hxY622g7qh6vwlC-xXT1drXB-bBONgG1Fy4C9B&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlNp3CKyuBp2L5yPnVj2hkBl9C_vvLLnL3bZQ8wj4IXFEwTjPu&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-MJlf7NBkoh_E4DD07ADlMH712LPPhF6NF9uo0kkvEl9LNzI&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTmdipnCUzVVZRU76qlaOdipL3xEHcmCtoGzdmdMfyTtRUCj2k&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6dsC9Fbr9WBsAS97lBXLdmfc6WF7s1_eIexEr7Ur-5lFJAGM&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmD7nIEkzrTP8gIk7q2gF-xVIqgo_2Lt3eoBVjoKHnQVmZ9O4&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcT8uZNP1sFqTj-Av7kByTNn2Jc0xwYU_pfGN9qynNSMlmNdo&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmd67Mg-QdDQtam7kIhYSNDkOFt9LkAH0kNM4DBnwfWevEPrQF&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5QlddRdk5qlgif3zKZjWtPOKtQuXtSgQLV6MBGhQuxLtLkmyC&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4TDEqyrFlV5XJtvJWtTWnoBDKgWSqj8DFU9FQGG6bf2AG2Us&s',
    ],
    coments: [
        'empty',
        '와~ 거의 결승점이 보이는거 같아요. 조금만 힘내세요!',                                 // 1년
        '새로운 집을 위해 우리 조금만 더 노력해요~!',                                         // 2년
        '멀게느껴질지 모르지만 열심히 모으면 시간은 금방 갈거에요!',                           // 3년
        '대학 새내기가 되었다는 기분으로 꾸준히 투자하여 졸업이라는 목표를 향해 달려가보아요!',  // 4년
        '조금 고민해 볼 필요가 있지만 투자 가치는 항상 열려있어요! 언제든지 도전하세요!',       // 5년
        '우와~! 얼마 남지 않았어요! 힘내세요!!',                                            //!! 6개월
    ]
} 

export{
    numberUri,
}