// Matematik Sınavı - JavaScript
let currentFilter = 'all';

// Tema Yönetimi
function initTheme() {
    // LocalStorage'dan tema tercihini al
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme ? savedTheme : (prefersDark ? 'dark' : 'light');
    applyTheme(theme);
}

function applyTheme(theme) {
    const html = document.documentElement;
    const icon = document.getElementById('themeIcon');
    if (theme === 'dark') {
        html.setAttribute('data-theme', 'dark');
        if (icon) icon.textContent = '☀️';
    } else {
        html.removeAttribute('data-theme');
        if (icon) icon.textContent = '🌙';
    }
}

function setTheme(theme) {
    localStorage.setItem('theme', theme);
    applyTheme(theme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
}

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', function() {
    // Temayı başlat
    initTheme();
    
    // Tema toggle butonuna event listener ekle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Soruları göster
    displayProblems(allProblems);
    
    // MathJax'i yeniden render et
    setTimeout(() => {
        if (window.MathJax) {
            MathJax.typesetPromise();
        }
    }, 100);
});

// Soruları filtrele
function filterProblems(topic) {
    currentFilter = topic;
    
    // Buton stillerini güncelle
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.classList.remove('bg-purple-600', 'text-white');
        btn.classList.add('bg-gray-200', 'text-gray-700');
    });
    
    event.target.classList.remove('bg-gray-200', 'text-gray-700');
    event.target.classList.add('bg-purple-600', 'text-white');
    
    // Soruları filtrele
    let filteredProblems;
    if (topic === 'all') {
        filteredProblems = allProblems;
    } else {
        filteredProblems = allProblems.filter(problem => problem.topic === topic);
    }
    
    displayProblems(filteredProblems);
}

// Soruları ekrana yazdır
function displayProblems(problems) {
    const container = document.getElementById('problemsContainer');
    
    if (problems.length === 0) {
        container.innerHTML = `
            <div class="text-center py-12">
                <p class="text-xl text-gray-500">Bu kategoride soru bulunamadı.</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = problems.map(problem => createProblemCard(problem)).join('');
    
    // MathJax'i yeniden render et
    setTimeout(() => {
        if (window.MathJax) {
            MathJax.typesetPromise();
        }
    }, 100);
}

// Soru kartı oluştur
function createProblemCard(problem) {
    const topicNames = {
        'logaritma': 'Logaritma',
        'üstel': 'Üstel Fonksiyonlar',
        'eşitsizlik': 'Logaritmik Eşitsizlikler',
        'dizi': 'Diziler ve Limitler'
    };
    
    const difficultyNames = {
        'easy': 'Kolay',
        'medium': 'Orta',
        'hard': 'Zor'
    };
    
    const difficultyClass = `difficulty-${problem.difficulty}`;
    
    return `
        <div class="bg-white rounded-xl shadow-lg overflow-hidden card-hover border-l-4 border-purple-600">
            <!-- Header -->
            <div class="bg-gradient-to-r from-purple-50 to-blue-50 p-6 border-b-2 border-purple-100">
                <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <h2 class="text-2xl font-bold text-gray-800">Soru ${problem.id}</h2>
                    <div class="flex gap-2">
                        <span class="topic-badge text-white px-4 py-1 rounded-full text-sm font-semibold">
                            ${topicNames[problem.topic]}
                        </span>
                        <span class="${difficultyClass} text-white px-4 py-1 rounded-full text-sm font-semibold">
                            ${difficultyNames[problem.difficulty]}
                        </span>
                    </div>
                </div>
                <div class="bg-white p-4 rounded-lg border-2 border-purple-200">
                    <p class="text-lg text-gray-800">${problem.question}</p>
                </div>
            </div>
            
            <!-- Solution Steps -->
            <div class="p-6">
                <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <span class="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">📝</span>
                    Çözüm Adımları
                </h3>
                
                <div class="space-y-4">
                    ${problem.solution.map((step, index) => `
                        <div class="solution-step p-4 rounded-lg">
                            <h4 class="font-bold text-purple-900 mb-2 flex items-center">
                                <span class="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">
                                    ${index + 1}
                                </span>
                                ${step.title}
                            </h4>
                            <p class="text-gray-700 mb-2">${step.content}</p>
                            ${step.formula ? `
                                <div class="bg-white p-3 rounded border-l-4 border-purple-400 my-2">
                                    <p class="text-gray-800">${step.formula}</p>
                                </div>
                            ` : ''}
                            ${step.detail ? `
                                <p class="text-sm text-gray-600 mt-2 italic">💡 ${step.detail}</p>
                            ` : ''}
                        </div>
                    `).join('')}
                </div>
                
                <!-- Answer Box -->
                <div class="answer-box p-6 rounded-lg mt-6 text-center">
                    <p class="text-sm uppercase tracking-wide mb-2 opacity-90">Cevap</p>
                    <p class="text-3xl font-bold">${problem.answer}</p>
                </div>
                
                <!-- Explanation -->
                <div class="bg-blue-50 p-4 rounded-lg mt-4 border-l-4 border-blue-400">
                    <h4 class="font-bold text-blue-900 mb-2">📖 Açıklama</h4>
                    <p class="text-gray-700">${problem.explanation}</p>
                </div>
                
                <!-- Tips -->
                ${problem.tips && problem.tips.length > 0 ? `
                    <div class="bg-yellow-50 p-4 rounded-lg mt-4 border-l-4 border-yellow-400">
                        <h4 class="font-bold text-yellow-900 mb-2">💡 İpuçları ve Önemli Noktalar</h4>
                        <ul class="space-y-1">
                            ${problem.tips.map(tip => `
                                <li class="text-gray-700 text-sm">• ${tip}</li>
                            `).join('')}
                        </ul>
                    </div>
                ` : ''}
            </div>
        </div>
    `;
}

// Smooth scroll için
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
