const icons = {
  server: `<svg viewBox="0 0 24 24"><path d="M19,15H5V13H19M19,19H5V17H19M19,7H5V5H19M19,11H5V9H19M20,2H4A2,2 0 0,0 2,4V20A2,2 0 0,0 4,22H20A2,2 0 0,0 22,20V4A2,2 0 0,0 20,2Z" /></svg>`,
  network: `<svg viewBox="0 0 24 24"><path d="M17,17V22H15V17H17M13,11V15H11V11H13M13,2H11V7H13V2M15,11H17V15H15V11M9,11H7V15H9V11M2,11H4V15H2V11M20,11H22V15H20V11M19,17V22H17V17H19M21,17V22H19V17H21M5,17V22H3V17H5M7,17V22H5V17H7M9,17V22H7V17H9M11,17V22H9V17H11M15,17V22H13V17H15M13,17V22H11V17H13M21,2H19V7H21V2M5,2H3V7H5V2M7,2H5V7H7V2M9,2H7V7H9V2M11,2H9V7H11V2M15,2H13V7H15V2M17,2H15V7H17V2"/></svg>`,
  security: `<svg viewBox="0 0 24 24"><path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,11.5L14,9.5L15.41,10.91L12,14.33L8.59,10.91L10,9.5L12,11.5Z" /></svg>`,
  hardware: `<svg viewBox="0 0 24 24"><path d="M22,15V17H19V19H17V17H11V19H9V17H6V15H22M19,5V7H17V5H19M11,5V7H9V5H11M19,9V11H17V9H19M11,9V11H9V9H11M22,3H2V13H22V3Z" /></svg>`,
  database: `<svg viewBox="0 0 24 24"><path d="M12,3C17.5,3 22,4.8 22,7C22,9.2 17.5,11 12,11C6.5,11 2,9.2 2,7C2,4.8 6.5,3 12,3M2,19V17C2,14.8 6.5,13 12,13C17.5,13 22,14.8 22,17V19C22,21.2 17.5,23 12,23C6.5,23 2,21.2 2,19M2,12V14C2,16.2 6.5,18 12,18C17.5,18 22,16.2 22,14V12C22,14.2 17.5,16 12,16C6.5,16 2,14.2 2,12Z" /></svg>`
};

export const translations = {
  en: {
    name: "Alexey Guzenko",
    title: "Senior IT Specialist & Systems Engineer",
    arsenal_title: "Technological Arsenal",
    arsenal: [
      { title: "IT Infrastructure", desc: "Lead specialist in system & hardware maintenance.", icon: icons.server },
      { title: "Networking", desc: "VCS, network configuration, and communication systems.", icon: icons.network },
      { title: "Cyber Security", desc: "Ensuring data integrity and information protection.", icon: icons.security },
      { title: "Hardware Knowledge", desc: "Expert diagnostics and technical restoration.", icon: icons.hardware },
      { title: "Information Systems", desc: "Automated banking software and DB management.", icon: icons.database }
    ],
    about_title: "About Me",
    about_text: "I am an active, responsible, and disciplined IT professional with over 14 years of experience. My expertise lies in system administration, information security, and technical support. I specialize in maintenance of complex IT infrastructures, hardware repair, and network management.",
    experience_title: "Career Timeline",
    jobs: [
      {
        company: "Bereke Bank",
        role: "Lead Specialist",
        period: "March 2021 — Present",
        description: "Support of online banking systems, user technical support, VCS (Video Conferencing Systems) maintenance, and hardware service."
      },
      {
        company: "Logitex",
        role: "System Engineer",
        period: "February 2019 — March 2021",
        description: "Maintenance of technical and software tools for the State Revenue Department of Almaty region, VCS support."
      },
      {
        company: "Kazkommerzbank",
        role: "Specialist",
        period: "June 2017 — July 2018",
        description: "Ensuring functioning of software and technical tools for automated banking systems; monitoring and troubleshooting ATMs; maintenance of computer and communication equipment."
      },
      {
        company: "Logycom",
        role: "Technical Consultant",
        period: "September 2009 — November 2015",
        description: "Client management, hardware initial setup, inventory logistics, competitor analysis, working with Astrum software, handling contracts and government procurement."
      }
    ],
    education_title: "Education",
    education: [
      {
        year: "2013",
        school: "Kazakh National Agrarian University, Almaty",
        degree: "Information Technology"
      },
      {
        year: "2016",
        school: "Military-Technical School",
        degree: "Ministry of Defense of the Republic of Kazakhstan, Rifleman"
      }
    ],
    skills_title: "Core Proficiencies",
    skills: ["Software Setup", "PC Setup & Repair", "Network Configuration", "PC Assembly", "Database Management", "Technical Maintenance"],
    contact_title: "Terminal Access",
    download_cv: "DOWNLOAD CV",
    location: "Taldykorgan, Kazakhstan"
  },
  ru: {
    name: "Алексей Гузенко",
    title: "Ведущий ИТ-специалист и системный инженер",
    arsenal_title: "Технологический Арсенал",
    arsenal: [
      { title: "ИТ Инфраструктура", desc: "Ведущий специалист по сопровождению систем.", icon: icons.server },
      { title: "Сетевые Технологии", desc: "Настройка ВКС и систем передачи данных.", icon: icons.network },
      { title: "Кибербезопасность", desc: "Защита информации и контроль целостности данных.", icon: icons.security },
      { title: "Знание комплектующих", desc: "Экспертная диагностика и ремонт оборудования.", icon: icons.hardware },
      { title: "Инфо-системы", desc: "Работа с АБС и базами данных.", icon: icons.database }
    ],
    about_title: "Обо мне",
    about_text: "Активный, ответственный и дисциплинированный ИТ-профессионал с более чем 14-летним опытом. Я специализируюсь на системном администрировании, информационной безопасности и технической поддержке. Занимаюсь сопровождением сложных ИТ-инфраструктур, ремонтом оборудования и управлением сетями.",
    experience_title: "Карьерный Путь",
    jobs: [
      {
        company: "Bereke Bank",
        role: "Ведущий специалист",
        period: "Март 2021 — Настоящее время",
        description: "Сопровождение Онлайн-банкинга, техподдержка пользователей, сопровождение ВКС, обслуживание техники."
      },
      {
        company: "ТОО Logitex",
        role: "Системотехник",
        period: "Февраль 2019 — Март 2021",
        description: "Обслуживание технических и программных средств ДГД по Алматинской области, сопровождение ВКС."
      },
      {
        company: "Казкоммерцбанк",
        role: "Специалист",
        period: "Июнь 2017 — Июль 2018",
        description: "Обеспечение функционирования программно-технических средств АБС; Мониторинг и устранение ошибок банкоматов; Обслуживание компьютерной техники и средств связи."
      },
      {
        company: "Logycom",
        role: "Технический консультант",
        period: "Сентябрь 2009 — Ноябрь 2015",
        description: "Работа с клиентами, первичная настройка техники, прием и отправка товара, анализ конкурентов, работа с Astrum, договорами и госзакупками."
      }
    ],
    education_title: "Образование",
    education: [
      {
        year: "2013",
        school: "Казахский национальный аграрный университет, Алматы",
        degree: "Информационные технологии"
      },
      {
        year: "2016",
        school: "Военно-техническая школа",
        degree: "Министерство Обороны РК, Стрелок"
      }
    ],
    skills_title: "Ключевые Навыки",
    skills: ["Настройка ПО", "Настройка ПК", "Ремонт ПК", "Настройка сетевых подключений", "Сборка ПК", "Работа с базами данных", "Техническое обслуживание"],
    contact_title: "Доступ к Контактам",
    download_cv: "СКАЧАТЬ РЕЗЮМЕ",
    location: "Талдыкорган, Казахстан"
  },
  kz: {
    name: "Алексей Гузенко",
    title: "Жетекші IT-маман және жүйелік инженер",
    arsenal_title: "Технологиялық Арсенал",
    arsenal: [
      { title: "IT Инфрақұрылымы", desc: "Жүйелерді сүйемелдеу бойынша жетекші маман.", icon: icons.server },
      { title: "Желілік технологиялар", desc: "Бейнеконференция байланысы және деректерді беру жүйелерін баптау.", icon: icons.network },
      { title: "Киберқауіпсіздік", desc: "Ақпаратты қорғау және деректердің тұтастығын бақылау.", icon: icons.security },
      { title: "Жинақтаушы бөлшектерді білу", desc: "Жабдықтарды сараптамалық диагностикалау және жөндеу.", icon: icons.hardware },
      { title: "Ақпараттық жүйелер", desc: "Банктік автоматтандырылған жүйелермен және дерекқорлармен жұмыс.", icon: icons.database }
    ],
    about_title: "Мен туралы",
    about_text: "Белсенді, жауапты және тәртіпті IT-маман, 14 жылдан астам тәжірибесі бар. Мен жүйелік әкімшілендіру, ақпараттық қауіпсіздік және техникалық қолдау салаларында маманданғанмын. Күрделі IT-инфрақұрылымдарды сүйемелдеумен, жабдықтарды жөндеумен және желілерді басқарумен айналысамын.",
    experience_title: "Мансап жолы",
    jobs: [
      {
        company: "Bereke Bank",
        role: "Жетекші маман",
        period: "Наурыз 2021 — Қазіргі уақыт",
        description: "Онлайн-банкинг жүйелерін сүйемелдеу, пайдаланушыларға техникалық қолдау көрсету, бейнеконференция байланысын сүйемелдеу, техникалық қызмет көрсету."
      },
      {
        company: "Logitex",
        role: "Жүйелік инженер",
        period: "Ақпан 2019 — Наурыз 2021",
        description: "Алматы облысы бойынша Мемлекеттік кірістер департаментінің техникалық және бағдарламалық құралдарына қызмет көрсету, бейнеконференция байланысын сүйемелдеу."
      },
      {
        company: "Казкоммерцбанк",
        role: "Маман",
        period: "Маусым 2017 — Шілде 2018",
        description: "Банктік автоматтандырылған жүйелердің бағдарламалық-техникалық құралдарының жұмыс істеуін қамтамасыз ету; банкоматтардың жұмысын мониторингілеу және қателерді жою; компьютерлік техника мен байланыс құралдарына қызмет көрсету."
      },
      {
        company: "Logycom",
        role: "Техникалық кеңесші",
        period: "Қыркүйек 2009 — Қараша 2015",
        description: "Клиенттермен жұмыс, техниканы бастапқы баптау, тауарларды қабылдау және жөнелту, бәсекелестерді талдау, Astrum-мен жұмыс, шарттар мен мемлекеттік сатып алулармен жұмыс."
      }
    ],
    education_title: "Білім",
    education: [
      {
        year: "2013",
        school: "Қазақ ұлттық аграрлық университеті, Алматы",
        degree: "Ақпараттық технологиялар"
      },
      {
        year: "2016",
        school: "Әскери-техникалық мектеп",
        degree: "ҚР Қорғаныс министрлігі, Атқыш"
      }
    ],
    skills_title: "Негізгі дағдылар",
    skills: ["Бағдарламалық жасақтаманы баптау", "ДК баптау және жөндеу", "Желілік қосылымдарды баптау", "ДК құрастыру", "Дерекқорлармен жұмыс", "Техникалық қызмет көрсету"],
    contact_title: "Байланыс мәліметтері",
    download_cv: "ТҮЙІНДЕМЕНІ ЖҮКТЕУ",
    location: "Талдықорған, Қазақстан"
  }
};
