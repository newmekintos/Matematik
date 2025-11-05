// Matematik Sınavı - Sorular 11-14
const problemsPart3 = [
    {
        id: 11,
        topic: "eşitsizlik",
        difficulty: "hard",
        question: "$\\log_2(4-2^x) \\leq x$ eşitsizliğinin çözüm kümesini bulunuz.",
        solution: [
            {
                title: "Adım 1: Tanım Aralığı",
                content: "Logaritma tanımlı olmalı:",
                formula: "$4 - 2^x > 0$<br>$4 > 2^x$<br>$2^2 > 2^x$<br>$x < 2$"
            },
            {
                title: "Adım 2: Eşitsizliği Düzenleyelim",
                content: "$\\log_2(4-2^x) \\leq x$ eşitsizliğini çözelim:",
                formula: "Taban 2 > 1 olduğu için yön korunur:<br>$4 - 2^x \\leq 2^x$"
            },
            {
                title: "Adım 3: Üstel Denklemi Çözelim",
                content: "Terimleri düzenleyelim:",
                formula: "$4 - 2^x \\leq 2^x$<br>$4 \\leq 2 \\cdot 2^x$<br>$4 \\leq 2^{x+1}$"
            },
            {
                title: "Adım 4: Tabanları Eşitleyelim",
                content: "4'ü 2'nin kuvveti olarak yazalım:",
                formula: "$2^2 \\leq 2^{x+1}$",
                detail: "Tabanlar eşit ve büyük olduğu için:<br>$2 \\leq x + 1$<br>$x \\geq 1$"
            },
            {
                title: "Adım 5: Çözüm Kümesi",
                content: "Tüm koşulları birleştirelim:",
                formula: "$x < 2$ (tanım aralığı) ve $x \\geq 1$ (eşitsizlik)",
                detail: "Çözüm kümesi: $1 \\leq x < 2$ veya $[1, 2)$"
            }
        ],
        answer: "$[1, 2)$",
        explanation: "Logaritma eşitsizliklerinde önce tanım aralığını bulun, sonra eşitsizliği çözün ve kesişimi alın.",
        tips: [
            "Tanım aralığı çok önemlidir, mutlaka başta bulun",
            "4 = 2² olduğunu kullanın",
            "Taban > 1 ise eşitsizlik yönü korunur",
            "Sonucu aralık gösterimi ile ifade edin: [1,2) = 1≤x<2"
        ]
    },
    {
        id: 12,
        topic: "dizi",
        difficulty: "medium",
        question: "$\\frac{3n+10}{2n+1} = a_n$ dizisinin kaçıncı terimi 2'dir?",
        solution: [
            {
                title: "Adım 1: Denklemi Kuralım",
                content: "Hangi $n$ değeri için $a_n = 2$ olduğunu bulmalıyız:",
                formula: "$\\frac{3n+10}{2n+1} = 2$"
            },
            {
                title: "Adım 2: Çapraz Çarpım",
                content: "Kesri eşitlikten kurtarmak için çapraz çarpım yapalım:",
                formula: "$3n + 10 = 2(2n + 1)$"
            },
            {
                title: "Adım 3: Parantezi Açalım",
                content: "Sağ tarafı açalım:",
                formula: "$3n + 10 = 4n + 2$"
            },
            {
                title: "Adım 4: n'i Bir Tarafa Toplayalım",
                content: "Bilinmeyenleri bir tarafa, sabitleri diğer tarafa alalım:",
                formula: "$10 - 2 = 4n - 3n$<br>$8 = n$"
            },
            {
                title: "Adım 5: Kontrol Edelim",
                content: "$n = 8$ için $a_8$'i hesaplayalım:",
                formula: "$a_8 = \\frac{3(8)+10}{2(8)+1} = \\frac{24+10}{16+1} = \\frac{34}{17} = 2$ ✓"
            }
        ],
        answer: "8. terim",
        explanation: "Dizinin hangi teriminin belirli bir değere eşit olduğunu bulmak için $a_n$ = verilen değer denklemini çözüyoruz.",
        tips: [
            "Dizi terimini bulmak için denklemi kurun",
            "Çapraz çarpım ile kesirden kurtulun",
            "Bulduğunuz değeri kontrol edin",
            "Sonucu 'kaçıncı terim' olarak ifade edin"
        ]
    },
    {
        id: 13,
        topic: "dizi",
        difficulty: "medium",
        question: "$a_n = \\log_{n+3}(64)$ dizisinin 29. terimini bulunuz ($a_{29} = ?$)",
        solution: [
            {
                title: "Adım 1: Dizi Formülü",
                content: "Dizinin genel terimi verilmiş:",
                formula: "$a_n = \\log_{n+3}(64)$",
                detail: "29. terimi bulmak için $n = 29$ yazacağız"
            },
            {
                title: "Adım 2: n = 29 Yerleştirelim",
                content: "$a_{29}$ değerini bulalım:",
                formula: "$a_{29} = \\log_{29+3}(64) = \\log_{32}(64)$"
            },
            {
                title: "Adım 3: 64 ve 32'yi 2'nin Kuvveti Olarak Yazalım",
                content: "Her ikisi de 2'nin kuvvetidir:",
                formula: "$64 = 2^6$ ve $32 = 2^5$",
                detail: "Dolayısıyla: $\\log_{32}(64) = \\log_{2^5}(2^6)$"
            },
            {
                title: "Adım 4: Taban Değişimi veya Özellik",
                content: "Taban değişimi formülünü kullanalım:",
                formula: "$\\log_{2^5}(2^6) = \\frac{\\log 2^6}{\\log 2^5} = \\frac{6\\log 2}{5\\log 2} = \\frac{6}{5}$"
            },
            {
                title: "Adım 5: Sonuç",
                content: "29. terim:",
                formula: "$a_{29} = \\frac{6}{5} = 1.2$"
            }
        ],
        answer: "$\\frac{6}{5}$ veya $1.2$",
        explanation: "Dizinin n. terimini bulmak için formülde n yerine istenen değeri yazın. Logaritma basitleştirme için 2'nin kuvvetlerini kullanın.",
        tips: [
            "64 = 2⁶ ve 32 = 2⁵ olduğunu bilin",
            "$\\log_{a^m}(a^n) = \\frac{n}{m}$ özelliğini kullanın",
            "Dizi terimleri $n$ değerine göre hesaplanır",
            "Taban değişimi: $\\log_a(b) = \\frac{\\log b}{\\log a}$"
        ]
    },
    {
        id: 14,
        topic: "logaritma",
        difficulty: "medium",
        question: "Richter ölçeğinde deprem şiddeti $R = \\log(\\frac{a}{t}) + B$ formülü ile hesaplanır. Burada $a$ = deprem dalgası genliği, $t$ = şa turundeki deprem dalgası genelleşmesi süresi, $B$ = sabit değer. $B = 5$, $a = 280$ mikron ve $t = 3.6$ saniye için depremin şiddeti kaçtır?",
        solution: [
            {
                title: "Adım 1: Verilen Bilgiler",
                content: "Soruda verilen değerler:",
                formula: "$R = \\log(\\frac{a}{t}) + B$",
                detail: "$B = 5$, $a = 280$ mikron, $t = 3.6$ saniye"
            },
            {
                title: "Adım 2: Değerleri Yerine Koyalım",
                content: "Formüle değerleri yerleştirelim:",
                formula: "$R = \\log(\\frac{280}{3.6}) + 5$"
            },
            {
                title: "Adım 3: Bölme İşlemi",
                content: "$\\frac{280}{3.6}$ değerini hesaplayalım:",
                formula: "$\\frac{280}{3.6} = \\frac{2800}{36} = \\frac{700}{9} \\approx 77.78$"
            },
            {
                title: "Adım 4: Logaritma Hesabı",
                content: "$\\log(77.78)$ değerini bulalım:",
                detail: "Taban 10 logaritmasında:",
                formula: "$\\log(77.78) \\approx \\log(78) \\approx 1.89$",
                detail: "Daha kesin: $\\log(77.78) \\approx 1.891$"
            },
            {
                title: "Adım 5: Final Hesaplama",
                content: "Tüm değerleri toplayalım:",
                formula: "$R = 1.89 + 5 = 6.89 \\approx 6.9$",
                detail: "Deprem şiddeti: Yaklaşık $6.9$ Richter"
            }
        ],
        answer: "Yaklaşık $6.9$ Richter",
        explanation: "Richter ölçeğinde logaritmik formül kullanılır. Her bir birim artış, 10 kat daha güçlü deprem anlamına gelir.",
        tips: [
            "Richter ölçeği logaritmiktir",
            "log(a/b) = log(a) - log(b) özelliği alternatif çözüm sağlar",
            "280/3.6 ≈ 77.78 hesaplayın",
            "log(78) ≈ 1.89 değerini kullanabilirsiniz",
            "Hesap makinesinde log tuşu taban 10 logaritmasıdır"
        ]
    }
];

// Tüm soruları birleştir
const allProblems = [...problemsPart1, ...problemsPart2, ...problemsPart3];
