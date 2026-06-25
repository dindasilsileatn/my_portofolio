const { createApp, ref, computed, onMounted } = Vue;

createApp({
  setup() {
    const scrolled = ref(false);
    const mobileOpen = ref(false);
    const navItems = [
      { id: 'about', label: 'Tentang' },
      { id: 'skills', label: 'Skills' },
      { id: 'education', label: 'Pendidikan' },
      { id: 'hobbies', label: 'Hobi' },
      { id: 'certificates', label: 'Sertifikat' },
      { id: 'contact', label: 'Kontak' }
    ];
    const isDark = ref(false);
    function toggleDark() {
      isDark.value = !isDark.value;
      document.body.classList.toggle('dark-mode', isDark.value);
    }
    const stats = [
    ];
    const technicalSkills = [
      { name: 'UI/UX Design', level: 92 }, { name: 'Figma / Prototyping', level: 88 },
      { name: 'Graphic Design', level: 85 }, { name: 'Content Writing', level: 78 }, { name: 'Video Editing', level: 70 }
    ];
    const softSkills = ['Kreativitas', 'Komunikasi', 'Problem Solving', 'Manajemen Waktu', 'Kolaborasi Tim', 'Detail-Oriented', 'Adaptasi Cepat', 'Critical Thinking'];
    const tools = [
      { name: 'Figma', icon: '🎨' }, { name: 'Canva', icon: '✏️' }, { name: 'Capcut', icon: '🎬' },
    ];
    const educations = [
      { period: '2025 – sekarang', degree: 'S1 Informatika', school: 'Universitas Satya Terra Bhinneka', desc: 'menjadi mahasiswa dan menjadi perangkat kelas sebagai bendahara.' },
      { period: '2022 – 2025', degree: 'MA Aliyah', school: 'MAS SKB 3 Menteri Bingkat', desc: 'Jurusan IPS aktif dalam berbagai kegiatan sekolah.' },
      { period: '2019 – 2022', degree: 'SMPN', school: 'SMPN 2 Pegajahan', desc: 'Sekolah menengah pertama.' },
      { period: '2014 – 2019', degree: 'SDN', school: 'SDN 105374', desc: 'Sekolah dasar.' }
    ];
    const eduPhotos = [
      { src: 'assets/kenangan1.jpeg', alt: 'Kampus' },
      { src: 'assets/kenangan2.jpeg', alt: 'Graduation' },
      { src: 'assets/kenangan3.jpeg', alt: 'Library' },
      { src: 'assets/kenangan4.jpeg', alt: 'Organisasi' },
      { src: 'assets/kenangan5.jpeg', alt: 'Kegiatan' },
      { src: 'assets/kenangan6.jpeg', alt: 'Seminar' }
    ];

    // ===== DATA SERTIFIKAT (DIPERBAIKI) =====
    const certificates = ref([
      {
        name: 'SDGS 101',
        issuer: 'SDGS Academy Indonesia',
        year: '2026',
        image: 'assets/sertifikat1.jpg.jpeg'
      },
      {
        name: 'Sertifikat SDGS Pengelolaan Sampah Berkelanjutan',
        issuer: 'SDGS Academy Indonesia',
        year: '2026',
        image: 'assets/sertifikat2.jpg.jpeg'
      }
    ]);

    const hobbies = [
      { name:'Membaca', icon:'📚', desc:'Fiksi dan Non Fiksi.', img: 'assets/fotomembaca.jpeg' },
      { name:'Menulis', icon:'✍️', desc:'Menulis Novel, Cerpen dan Jurnal Pribadi.', img:'assets/fotomenulis.jpeg' },
      { name:'Traveling', icon:'✈️', desc:'Menjelajahi keindahan alam dan tempat-tempat baru.', img:'assets/fototraveling.jpeg' },
      { name:'Fotografi', icon:'📷', desc:'Memotret momen dan estetika sehari-hari.', img:'assets/fotografi.jpeg' },
      { name:'Menari', icon:'💃🏻', desc:'Menari tarian adat', img:'assets/fotomenari.jpeg' },
      { name:'Musik', icon:'🎵', desc:'Piano dan playlist indie pop.', img:'assets/fotomusik.jpeg' }
    ];
    const contactInfo = [
      { label:'Email', value:'dindasilsileatn@gmail.com', href:'mailto:dindasilsileatn@gmail.com', icon:'✉️' },
      { label:'WhatsApp', value:'+62 896-5448-9255', href:'https://wa.me/6289654489255', icon:'💬' },
      { label:'Instagram', value:'@sil_leaa', href:'https://www.instagram.com/sil_leaa?igsh=OGpqdzR1MGgycTA4', icon:'📸' },
      ];
    const socials = [
    ];

    onMounted(() => {
      setTimeout(() => { document.getElementById('loading-screen').classList.add('hidden'); }, 1800);
      window.addEventListener('scroll', () => { 
        scrolled.value = window.scrollY > 60; 
        const backTop = document.getElementById('back-top');
        if (backTop) backTop.classList.toggle('visible', window.scrollY > 300);
      });
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            const bars = entry.target.querySelectorAll('.skill-bar-fill');
            bars.forEach(bar => { 
              if (bar.dataset.width) bar.style.width = bar.dataset.width + '%'; 
            });
          }
        });
      }, { threshold: 0.12 });
      setTimeout(() => {
        document.querySelectorAll('.reveal, .reveal-left, .reveal-zoom').forEach(el => observer.observe(el));
        document.querySelectorAll('.skill-bar-fill').forEach(bar => {
          const parentSection = bar.closest('section');
          if (parentSection) {
            const secObserver = new IntersectionObserver((entries) => {
              entries.forEach(e => { if (e.isIntersecting && bar.dataset.width) { bar.style.width = bar.dataset.width + '%'; secObserver.disconnect(); } });
            }, { threshold: 0.3 });
            secObserver.observe(parentSection);
          }
        });
      }, 100);
    });

    return {
      scrolled, mobileOpen, navItems, isDark, toggleDark,
      stats, technicalSkills, softSkills, tools,
      educations, eduPhotos,
      hobbies, contactInfo, socials,
      certificates   // <-- data sertifikat
    };
  }
}).mount('#app');

function openLightbox(src) { document.getElementById('lightbox-img').src = src; document.getElementById('lightbox').classList.add('open'); }
function closeLightbox() { document.getElementById('lightbox').classList.remove('open'); }
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });