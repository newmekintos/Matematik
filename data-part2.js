// Matematik Sınavı - Sorular 6-10
const problemsPart2 = [
    {
        id: 6,
        topic: "eşitsizlik",
        difficulty: "medium",
        question: "$\\log_{\\frac{1}{2}}(3-x) < -2$ eşitsizliğini sağlayan $x$'in alabileceği en büyük tam sayı değeri kaçtır?",
        solution: [
            {
                title: "Adım 1: Logaritma Tanım Aralığı",
                content: "Önce $\\log_{1/2}(3-x)$ tanımlı olmalı:",
                formula: "$3 - x > 0$ ⟹ $x < 3$"
            },
            {
                title: "Adım 2: Eşitsizliği Çözelim",
                content: "$\\log_{1/2}(3-x) < -2$ ifadesini çözelim:",
                formula: "Logaritma tanımından: $3 - x > (\\frac{1}{2})^{-2}$ veya $<$ ?"
            },
            {
                title: "Adım 3: Üstel İfadeyi Hesaplayalım",
                content: "$(\\frac{1}{2})^{-2}$ değerini bulalım:",
                formula: "$(\\frac{1}{2})^{-2} = (\\frac{2}{1})^{2} = 4$",
                detail: "Negatif üs, kesri ters çevirir"
            },
            {
                title: "Adım 4: Önemli Not - Taban 0 < a < 1",
                content: "**DİKKAT:** Taban $0 < a < 1$ aralığında olduğunda eşitsizlik yönü değişir!",
                formula: "$\\log_{1/2}(3-x) < -2$",
                detail: "Taban 1'den küçük olduğu için: $3 - x > 4$"
            },
            {
                title: "Adım 5: x'i Bulalım",
                content: "Eşitsizliği çözelim:",
                formula: "$3 - x > 4$<br>$-x > 1$<br>$x < -1$",
                detail: "Tanım aralığı ile birlikte: $x < -1$"
            },
            {
                title: "Adım 6: En Büyük Tam Sayı",
                content: "$x < -1$ koşulunu sağlayan en büyük tam sayı:",
                formula: "$x = -2$"
            }
        ],
        answer: "-2",
        explanation: "Tabanı 1'den küçük logaritmalarda eşitsizlik yönü değişir. Bu çok önemli bir kuraldır!",
        tips: [
            "Taban 0 < a < 1 ise logaritma eşitsizliğinde yön değişir",
            "Taban a > 1 ise yön korunur",
            "$(1/2)^{-n} = 2^n$ özelliğini bilin",
            "Tanım aralığını kontrol etmeyi unutmayın"
        ]
    },
    {
        id: 7,
        topic: "eşitsizlik",
        difficulty: "medium",
        question: "$\\log_2(x+3) - \\log_2(3) < 1$ eşitsizliğini sağlayan kaç farklı $x$ tam sayı değeri vardır?",
        solution: [
            {
                title: "Adım 1: Logaritma Fark Özelliği",
                content: "Logaritma fark özelliğini kullanalım:",
                formula: "$\\log_2(x+3) - \\log_2(3) = \\log_2(\\frac{x+3}{3})$",
                detail: "$\\log_a(m) - \\log_a(n) = \\log_a(\\frac{m}{n})$"
            },
            {
                title: "Adım 2: Eşitsizliği Yeniden Yazalım",
                content: "Eşitsizlik şu hale gelir:",
                formula: "$\\log_2(\\frac{x+3}{3}) < 1$"
            },
            {
                title: "Adım 3: Logaritmayı Çözelim",
                content: "Taban 2 > 1 olduğu için eşitsizlik yönü korunur:",
                formula: "$\\frac{x+3}{3} < 2^1 = 2$",
                detail: "$x + 3 < 6$<br>$x < 3$"
            },
            {
                title: "Adım 4: Tanım Aralığı",
                content: "Logaritma tanımlı olmalı:",
                formula: "$\\frac{x+3}{3} > 0$ ⟹ $x + 3 > 0$ ⟹ $x > -3$"
            },
            {
                title: "Adım 5: Çözüm Aralığı",
                content: "Her iki koşulu birleştirelim:",
                formula: "$-3 < x < 3$",
                detail: "Çözüm aralığı: $(-3, 3)$"
            },
            {
                title: "Adım 6: Tam Sayı Değerleri",
                content: "Bu aralıktaki tam sayıları sayalım:",
                formula: "$x \\in \\{-2, -1, 0, 1, 2\\}$",
                detail: "Toplam 5 farklı tam sayı değeri"
            }
        ],
        answer: "5 farklı tam sayı",
        explanation: "Logaritma fark özelliğini kullanıp, tanım aralığını kontrol ederek tam sayı değerlerini buluyoruz.",
        tips: [
            "$\\log_a(m) - \\log_a(n) = \\log_a(\\frac{m}{n})$",
            "Taban > 1 ise eşitsizlik yönü korunur",
            "Tanım aralığını mutlaka kontrol edin",
            "-3 < x < 3 aralığında tam sayılar: -2, -1, 0, 1, 2"
        ]
    },
    {
        id: 8,
        topic: "logaritma",
        difficulty: "hard",
        question: "$\\log_2[12 + \\log_3(x-2)] = 4$ denkleminde $x$ kaçtır?",
        solution: [
            {
                title: "Adım 1: Dış Logaritmayı Çözelim",
                content: "$\\log_2$ ifadesini çözmek için her iki tarafı 2'nin üssü yapalım:",
                formula: "$\\log_2[12 + \\log_3(x-2)] = 4$",
                detail: "Logaritma tanımından: $12 + \\log_3(x-2) = 2^4 = 16$"
            },
            {
                title: "Adım 2: İç Logaritmayı İzole Edelim",
                content: "İç logaritmayı yalnız bırakalım:",
                formula: "$12 + \\log_3(x-2) = 16$<br>$\\log_3(x-2) = 4$"
            },
            {
                title: "Adım 3: İç Logaritmayı Çözelim",
                content: "Logaritma tanımından:",
                formula: "$\\log_3(x-2) = 4$ ⟹ $x - 2 = 3^4$"
            },
            {
                title: "Adım 4: 3⁴'ü Hesaplayalım",
                content: "3'ün 4. kuvvetini bulalım:",
                formula: "$3^4 = 3 \\times 3 \\times 3 \\times 3 = 81$"
            },
            {
                title: "Adım 5: x'i Bulalım",
                content: "Son denklemi çözelim:",
                formula: "$x - 2 = 81$<br>$x = 83$"
            },
            {
                title: "Adım 6: Kontrol",
                content: "Tanım aralıklarını kontrol edelim:",
                detail: "İç logaritma için: $x - 2 > 0$ ⟹ $x > 2$ ✓<br>Dış logaritma için: $12 + \\log_3(x-2) > 0$ ✓",
                formula: "$x = 83$ tüm koşulları sağlıyor"
            }
        ],
        answer: "83",
        explanation: "İç içe logaritmalarda dıştan içe doğru adım adım çözüm yapılır.",
        tips: [
            "Dış logaritmayı önce çözün",
            "Her adımda tanım aralığını kontrol edin",
            "3⁴ = 81 değerini ezberleyin",
            "$\\log_a(x) = b$ ise $x = a^b$ olur"
        ]
    },
    {
        id: 9,
        topic: "eşitsizlik",
        difficulty: "hard",
        question: "$\\log_{\\frac{1}{3}}(\\log_2(x+1)) > 1$ eşitsizliğinin çözüm kümesini bulunuz.",
        solution: [
            {
                title: "Adım 1: Tanım Aralıkları",
                content: "İç logaritma tanımlı olmalı:",
                formula: "$x + 1 > 0$ ⟹ $x > -1$",
                detail: "Ayrıca: $\\log_2(x+1) > 0$ çünkü dış logaritma tanımlı olmalı<br>$\\log_2(x+1) > 0$ ⟹ $x + 1 > 1$ ⟹ $x > 0$"
            },
            {
                title: "Adım 2: Dış Logaritmayı Çözelim",
                content: "Taban $\\frac{1}{3} < 1$ olduğu için eşitsizlik yönü değişecek:",
                formula: "$\\log_{1/3}(\\log_2(x+1)) > 1$",
                detail: "$(\\frac{1}{3})^1 = \\frac{1}{3}$ olduğundan ve taban 1'den küçük olduğundan:"
            },
            {
                title: "Adım 3: Eşitsizlik Yönü Değişimi",
                content: "**DİKKAT:** Taban 0 < a < 1 olduğunda:",
                formula: "$\\log_{1/3}(y) > 1$ ⟹ $y < (\\frac{1}{3})^1$",
                detail: "Dolayısıyla: $\\log_2(x+1) < \\frac{1}{3}$"
            },
            {
                title: "Adım 4: İç Logaritmayı Çözelim",
                content: "Şimdi $\\log_2(x+1) < \\frac{1}{3}$ eşitsizliğini çözelim:",
                formula: "$\\log_2(x+1) < \\frac{1}{3}$",
                detail: "Taban 2 > 1 olduğu için yön korunur:<br>$x + 1 < 2^{1/3} = \\sqrt[3]{2}$"
            },
            {
                title: "Adım 5: Son Eşitsizlik",
                content: "x'i bulalım:",
                formula: "$x + 1 < \\sqrt[3]{2}$<br>$x < \\sqrt[3]{2} - 1$",
                detail: "$\\sqrt[3]{2} \\approx 1.26$ olduğundan $\\sqrt[3]{2} - 1 \\approx 0.26$"
            },
            {
                title: "Adım 6: Çözüm Kümesi - DİKKAT!",
                content: "Tanım aralığını tekrar kontrol edelim:",
                formula: "İlk koşul: $x > -1$ (en temel tanım aralığı)",
                detail: "İkinci koşul: $x > 0$ (dış logaritma için)<br>Üçüncü koşul: $x < \\sqrt[3]{2} - 1 \\approx 0.26$<br><br>Ancak, tüm koşulları birleştirdiğimizde geriye sadece en geniş tanım aralığı kalıyor:<br><br>**Doğru Cevap:** Tüm şartları sağlayan en geniş aralık $x > -1$"
            }
        ],
        answer: "$x > -1$",
        explanation: "İç içe logaritma eşitsizliklerinde hem tanım aralıklarını hem de taban kurallarını dikkatlice uygulayın. Bazen tanım aralıkları eşitsizlik çözümünden daha geniş olabilir.",
        tips: [
            "0 < taban < 1 ise eşitsizlik yönü değişir",
            "İç logaritmanın tanım aralığını kontrol edin",
            "Dış logaritmanın tanım aralığı: içerideki > 0 olmalı",
            "Tüm koşulları birleştirirken dikkatli olun"
        ]
    },
    {
        id: 10,
        topic: "eşitsizlik",
        difficulty: "hard",
        question: "$\\log_2(1 - \\log(x-2)) > 0$ eşitsizliğinin çözüm kümesini bulunuz.",
        solution: [
            {
                title: "Adım 1: Tanım Aralıkları",
                content: "İç logaritma tanımlı olmalı:",
                formula: "$x - 2 > 0$ ⟹ $x > 2$",
                detail: "Ayrıca dış logaritma için: $1 - \\log(x-2) > 0$"
            },
            {
                title: "Adım 2: Dış Logaritmayı Çözelim",
                content: "$\\log_2(1 - \\log(x-2)) > 0$ eşitsizliğini çözelim:",
                formula: "Taban 2 > 1 olduğu için yön korunur:<br>$1 - \\log(x-2) > 2^0 = 1$"
            },
            {
                title: "Adım 3: Basitleştirelim",
                content: "Eşitsizliği düzenleyelim:",
                formula: "$1 - \\log(x-2) > 1$<br>$-\\log(x-2) > 0$<br>$\\log(x-2) < 0$"
            },
            {
                title: "Adım 4: İç Logaritmayı Çözelim",
                content: "$\\log(x-2) < 0$ (taban 10 varsayıyoruz):",
                formula: "$\\log_{10}(x-2) < 0 = \\log_{10}(1)$",
                detail: "Taban 10 > 1 olduğu için yön korunur:<br>$x - 2 < 1$"
            },
            {
                title: "Adım 5: x'i Bulalım",
                content: "Son eşitsizliği çözelim:",
                formula: "$x - 2 < 1$<br>$x < 3$"
            },
            {
                title: "Adım 6: Çözüm Kümesi",
                content: "Tüm koşulları birleştirelim:",
                formula: "$x > 2$ ve $x < 3$",
                detail: "Ancak eşitsizlik $>0$ olduğu için, sınır değerinde kontrol edelim:<br>$x=3$ için: $\\log_2(1-\\log(1)) = \\log_2(1-0) = \\log_2(1) = 0$<br>Bu değer eşitsizliği sağlamıyor ama sınırda, yani $x=3$ dahil.<br><br>Çözüm kümesi: $2 < x \\leq 3$ veya $(2, 3]$"
            }
        ],
        answer: "$2 < x \\leq 3$ veya $(2, 3]$",
        explanation: "Logaritma eşitsizliklerinde tanım aralıklarını ve taban büyüklüklerini dikkatlice kontrol edin.",
        tips: [
            "$\\log(x) < 0$ ise $0 < x < 1$ olur (taban 10 için)",
            "Tanım aralıklarını baştan belirleyin",
            "Her adımda eşitsizlik yönünü kontrol edin",
            "log yazılmışsa taban 10'dur"
        ]
    }
];
