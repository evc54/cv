"use strict";
(function(global,factory){typeof exports==="object"&&typeof module!=="undefined"?module.exports=factory():typeof define==="function"&&define.amd?define(factory):global.ShuffleText=factory()})(this,function(){"use strict";var ShuffleText=function(){function ShuffleText(element){this.sourceRandomCharacter="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";this.emptyCharacter="-";this.duration=600;this._isRunning=false;this._originalStr="";this._originalLength=0;this._timeCurrent=0;this._timeStart=0;this._randomIndex=[];this._element=null;this._requestAnimationFrameId=0;this._element=element;this.setText(element.innerHTML)}ShuffleText.prototype.setText=function(text){this._originalStr=text;this._originalLength=text.length};Object.defineProperty(ShuffleText.prototype,"isRunning",{get:function(){return this.isRunning},enumerable:true,configurable:true});ShuffleText.prototype.start=function(){var _this=this;this.stop();this._randomIndex=[];var str="";for(var i=0;i<this._originalLength;i++){var rate=i/this._originalLength;this._randomIndex[i]=Math.random()*(1-rate)+rate;str+=this.emptyCharacter}this._timeStart=(new Date).getTime();this._isRunning=true;this._requestAnimationFrameId=requestAnimationFrame(function(){_this._onInterval()});this._element.innerHTML=str};ShuffleText.prototype.stop=function(){this._isRunning=false;cancelAnimationFrame(this._requestAnimationFrameId)};ShuffleText.prototype.dispose=function(){cancelAnimationFrame(this._requestAnimationFrameId);this.sourceRandomCharacter=null;this.emptyCharacter=null;this._isRunning=false;this.duration=0;this._originalStr=null;this._originalLength=0;this._timeCurrent=0;this._timeStart=0;this._randomIndex=null;this._element=null;this._requestAnimationFrameId=0};ShuffleText.prototype._onInterval=function(){var _this=this;this._timeCurrent=(new Date).getTime()-this._timeStart;var percent=this._timeCurrent/this.duration;var str="";for(var i=0;i<this._originalLength;i++){if(percent>=this._randomIndex[i]){str+=this._originalStr.charAt(i)}else if(percent<this._randomIndex[i]/3){str+=this.emptyCharacter}else{str+=this.sourceRandomCharacter.charAt(Math.floor(Math.random()*this.sourceRandomCharacter.length))}}if(percent>1){str=this._originalStr;this._isRunning=false}this._element.innerHTML=str;if(this._isRunning===true){this._requestAnimationFrameId=requestAnimationFrame(function(){_this._onInterval()})}};return ShuffleText}();return ShuffleText});
(function () {
  window.l10n = {
    'common.admin-panel': {
      'en': 'Admin Panel',
      'ru': 'Админ-панель'
    },
    'month.jan': {
      'en': 'Jan',
      'ru': 'Янв'
    },
    'month.feb': {
      'en': 'Feb',
      'ru': 'Фев'
    },
    'month.mar': {
      'en': 'Mar',
      'ru': 'Мар'
    },
    'month.apr': {
      'en': 'Apr',
      'ru': 'Апр'
    },
    'month.may': {
      'en': 'May',
      'ru': 'Май'
    },
    'month.jun': {
      'en': 'Jun',
      'ru': 'Июн'
    },
    'month.jul': {
      'en': 'Jul',
      'ru': 'Июл'
    },
    'month.aug': {
      'en': 'Aug',
      'ru': 'Авг'
    },
    'month.sep': {
      'en': 'Sep',
      'ru': 'Сен'
    },
    'month.oct': {
      'en': 'Oct',
      'ru': 'Окт'
    },
    'month.nov': {
      'en': 'Nov',
      'ru': 'Ноя'
    },
    'month.dec': {
      'en': 'Dec',
      'ru': 'Дек'
    },
    'gen.name': {
      'en': 'Eugene V Chernyshev',
      'ru': 'Евгений Чернышев'
    },
    'gen.title': {
      'en': 'Full Stack Web Developer',
      'ru': 'Веб-разработчик'
    },
    'nav.personal': {
      'en': 'Personal',
      'ru': 'Обо мне'
    },
    'nav.skills': {
      'en': 'Skills',
      'ru': 'Навыки'
    },
    'nav.work': {
      'en': 'Work',
      'ru': 'Работы'
    },
    'nav.contact': {
      'en': 'Contact &amp; Hire',
      'ru': 'Контактная инфо'
    },
    'title.about': {
      'en': 'About Me',
      'ru': 'Общее'
    },
    'title.name': {
      'en': 'Name',
      'ru': 'Имя'
    },
    'value.name': {
      'en': 'Chernyshev, Eugene',
      'ru': 'Евгений Чернышев'
    },
    'title.birth-date': {
      'en': 'Date of Birth',
      'ru': 'Дата рождения'
    },
    'value.birth-date': {
      'en': 'November, 27th 1979',
      'ru': '27 ноября 1979 г.'
    },
    'title.location': {
      'en': 'Current Location',
      'ru': 'Место жительства'
    },
    'value.location': {
      'en': 'Moscow, Russian Federation',
      'ru': 'Россия, Московская область'
    },
    'title.citizen': {
      'en': 'Citizenship',
      'ru': 'Гражданство'
    },
    'value.citizen': {
      'en': 'Russian Federation',
      'ru': 'Российская Федерация'
    },
    'title.language': {
      'en': 'Language Speaking',
      'ru': 'Языки'
    },
    'value.language': {
      'en': 'Russian, English (intermediate)',
      'ru': 'Русский, английский (средний уровень)'
    },
    'title.statement': {
      'en': 'Personal Statement',
      'ru': 'Обо мне'
    },
    'value.statement.1': {
      'en': 'Efficient, proactive, self-motivated, and well organised programmer with over 15 years\' experience in website development.',
      'ru': 'Веб-разработчик с более чем 10-летним стажем. Опыт в разработке учетных систем, CRM,  CMS, рекламных площадок (тизерные и CPA-сети) и прочих мелочей. Умею в хайлоад и асинхронное программирование. Хорошо умею в администрирование linux-подобных серверов.'
    },
    'value.statement.2': {
      'en': 'I\'m constantly educated myself and experimenting withthe edge web technologies and trends.',
      'ru': 'Один из моих самых развитых сайд-проектов - DNS-хостинг activedns.net.'
    },
    'value.statement.3': {
      'en': 'Seeking for a position of full stack web developer or a team leader to work with cutting edge technologies and to bring immediate and strategic value and develop current skillset further.',
      'ru': 'Ищу позицию full stack web developer с упором на Node.js и Vue/Angular/React для дальнейшей прокачки скилов и взаимовыгодного сотрудничества.'
    },
    'title.education': {
      'en': 'Education',
      'ru': 'Образование'
    },
    'value.education.1': {
      'en': 'Enterprise\' Economics and Management',
      'ru': 'Факультет информационных технологий, автоматизации и управления'
    },
    'value.education.2': {
      'en': 'Biysk Technological Institute of Altai State Technical University',
      'ru': 'Бийский Технологический Институт АлтГТУ'
    },
    'title.employment': {
      'en': 'Employment History',
      'ru': 'Опыт работы'
    },
    'value.employment.1.period': {
      'en': '2015 – Present',
      'ru': '2015 – сейчас'
    },
    'value.employment.1.period-text': {
      'en': '2 years, 1 month',
      'ru': '2 года, 1 месяц'
    },
    'value.employment.1.company': {
      'en': 'Vira Technologies',
      'ru': 'Vira Technologies'
    },
    'value.employment.1.location': {
      'en': 'Moscow, Russian Federation',
      'ru': 'Россия, Москва'
    },
    'value.employment.1.position': {
      'en': 'Chief Technology Officer, Team Leader, Product Owner',
      'ru': 'Директор по ИТ'
    },
    'value.employment.2.period': {
      'en': '2012 – 2014',
      'ru': '2012 – 2014'
    },
    'value.employment.2.period-text': {
      'en': '3 years, 2 months',
      'ru': '3 года, 2 месяца'
    },
    'value.employment.2.company': {
      'en': 'ArtStyle Group',
      'ru': 'ArtStyle Group'
    },
    'value.employment.2.location': {
      'en': 'Moscow, Russian Federation',
      'ru': 'Россия, Москва'
    },
    'value.employment.2.position': {
      'en': 'Chief Technology Officer, Team Leader',
      'ru': 'Руководитель отдела разработки и поддержки'
    },
    'value.employment.3.period': {
      'en': '2011 – 2012',
      'ru': '2011 – 2012'
    },
    'value.employment.3.period-text': {
      'en': '11 months',
      'ru': '11 месяцев'
    },
    'value.employment.3.company': {
      'en': 'Thor Group',
      'ru': 'Thor Group'
    },
    'value.employment.3.location': {
      'en': 'Novosibirsk, Russian Federation',
      'ru': 'Россия, Новосибирск'
    },
    'value.employment.3.position': {
      'en': 'Senior Web Developer, Team Leader',
      'ru': 'Ведущий разработчик, лидер команды'
    },
    'value.employment.4.period': {
      'en': '2008 – 2011',
      'ru': '2008 – 2011'
    },
    'value.employment.4.period-text': {
      'en': '3 years, 9 months',
      'ru': '3 года, 9 месяцев'
    },
    'value.employment.4.company': {
      'en': 'ANIKS Trade House',
      'ru': 'ТД АНИКС'
    },
    'value.employment.4.location': {
      'en': 'Biysk, Russian Federation',
      'ru': 'Россия, Бийск'
    },
    'value.employment.4.position': {
      'en': 'Director of Departament of Development and Operations',
      'ru': 'Руководитель службы системного администрирования'
    },
    'title.skills': {
      'en': 'My Skills',
      'ru': 'Навыки и умения'
    },
    'title.skills.basics': {
      'en': 'Web App Basics',
      'ru': 'Основы'
    },
    'value.skills.basics.desc': {
      'en': 'Very strong knowledge of web application development basics',
      'ru': 'Отличной знание основ веб-разработки'
    },
    'value.skills.basics.list': {
      'en': 'HTML 5, CSS 3',
      'ru': 'HTML 5, CSS 3'
    },
    'title.skills.js': {
      'en': 'Javascript',
      'ru': 'Javascript'
    },
    'value.skills.js.desc': {
      'en': 'Over 10 years experience, strong knowledge of the language and it\'s features',
      'ru': 'Хорошее знание языка, более 10 лет опыта разработки'
    },
    'value.skills.js.list': {
      'en': 'jQuery, Node.js, Vue.js',
      'ru': 'jQuery, Node.js, Vue.js'
    },
    'title.skills.php': {
      'en': 'PHP',
      'ru': 'PHP'
    },
    'value.skills.php.desc': {
      'en': 'Over 15 years experience in web applications building with PHP, strong knowledge of the language, including object-oriented programming techniques',
      'ru': 'Хорошее знание языка, более 15 лет опыта разработки'
    },
    'value.skills.php.list': {
      'en': 'CakePHP, Yii Framework 1.1/2, Laravel 5',
      'ru': 'CakePHP, Yii Framework 1.1/2, Laravel 5'
    },
    'title.skills.sql': {
      'en': 'SQL',
      'ru': 'SQL'
    },
    'value.skills.sql.desc': {
      'en': 'Strong knowledge of ANSI SQL and it\'s dialects for common database software',
      'ru': 'Хорошее знание ANSI SQL и некоторых его диалектов'
    },
    'value.skills.sql.list': {
      'en': 'MySQL, PostgreSQL, MS SQL Server',
      'ru': 'MySQL, PostgreSQL, MS SQL Server'
    },
    'title.skills.nosql': {
      'en': 'NoSQL',
      'ru': 'NoSQL'
    },
    'value.skills.nosql.desc': {
      'en': 'Experienced with key-value database usage in particular cases (most often in high load environments)',
      'ru': 'Опыт в разработке применительно к высоконагруженным системам'
    },
    'value.skills.nosql.list': {
      'en': 'MemCache, Redis',
      'ru': 'MemCache, Redis'
    },
    'title.skills.py': {
      'en': 'Python',
      'ru': 'Python'
    },
    'value.skills.py.desc': {
      'en': 'Sufficient knowledge of the language',
      'ru': 'Достаточное знание языка, несколько завершенных проектов'
    },
    'value.skills.py.list': {
      'en': 'Tornado, Flask',
      'ru': 'Tornado, Flask'
    },
    'title.skills.misc': {
      'en': 'Miscellaneous',
      'ru': 'Прочее'
    },
    'value.skills.misc.desc': {
      'en': 'Not so much experienced, but have common vision and at least one completed project',
      'ru': 'Не так много опыта, но есть представление и как минимум один завершенный проект'
    },
    'value.skills.misc.list': {
      'en': 'LUA, Delphi, C',
      'ru': 'LUA, Delphi, C'
    },
    'note.work.projects': {
      'en': 'Please note: this isn\'t a full list of completed projects; closed-source and NDA signed projects aren\'t listed here.',
      'ru': 'Примечание. Это не полный список реализованных проектов; проекты, по которым был подписан договор о неразглашении и проекты с закрытым исходным кодом здесь не приведены.'
    },
    'project.mmrd.desc': {
      'en': 'Business card web site.',
      'ru': 'Сайт-визитка.'
    },
    'project.mmrd.type': {
      'en': 'Pages design, HTML/CSS/JS coding, PHP programming',
      'ru': 'Дизайн, верстка, программирование (JS, PHP)'
    },
    'project.molod.desc': {
      'en': 'Multiple web applications platform. Improved security system including two-factor authentication and customizable authorization roles.',
      'ru': 'Платформа для разработки нескольких веб-приложений. Включает улучшенную систему безопасности, двухфакторную авторизацию и тонко настраиваемые роли пользователей.'
    },
    'project.molod.type': {
      'en': 'HTML/CSS/JS coding, PHP programming, UI/UX of administrative interfaces',
      'ru': 'Вестка, программирование (JS, PHP), разработка интерфейсов'
    },
    'project.karta-upd.desc': {
      'en': 'Geographical data web application redesign and new features development.',
      'ru': 'Редизайн и доработка геоинформационной системы.'
    },
    'project.karta-upd.type': {
      'en': 'HTML/CSS/JS coding, PHP programming',
      'ru': 'Верстка, программирование (JS, PHP)'
    },
    'project.huahong.desc': {
      'en': 'Chinese Production Company Template for ViraCMS.',
      'ru': 'Сайт китайской производственной компании. Оформлен как шаблон ViraCMS.'
    },
    'project.huahong.type': {
      'en': 'Pages design, HTML/CSS/JS coding, PHP programming',
      'ru': 'Дизайн, верстка, программирование (JS, PHP)'
    },
    'project.rtp.desc': {
      'en': 'Regional Touristic Portal Template for ViraCMS. Designed to support multiple regions with one installation.',
      'ru': 'Региональный туристический портал. Оформлен как шаблон ViraCMS. Поддерживает мультисайтовость (множество порталов в одной инсталляции).'
    },
    'project.rtp.type': {
      'en': 'HTML/CSS/JS coding, PHP programming',
      'ru': 'Верстка, программирование (JS, PHP)'
    },
    'project.fond.desc': {
      'en': 'Non-commercial organization web site.',
      'ru': 'Сайт некоммерческой организации.'
    },
    'project.fond.type': {
      'en': 'Pages design, HTML/CSS/JS coding, PHP programming',
      'ru': 'Дизайн, верстка, программирование (JS, PHP)'
    },
    'project.ecrog.desc': {
      'en': 'Online citizens\' feedback collaboration software specialized for government structures. It was featured as SAAS.',
      'ru': 'Система интернет-приемной для муниципальных органов власти, ведомств, депутатов и т. п. Разработано как решение SAAS.'
    },
    'project.ecrog.type': {
      'en': 'Pages design, HTML/CSS/JS coding, PHP programming',
      'ru': 'Дизайн, верстка, программирование (JS, PHP)'
    },
    'project.pws.desc': {
      'en': 'Personal Web Site Template for ViraCMS.',
      'ru': 'Шаблон персонального веб-сайта для ViraCMS.'
    },
    'project.pws.type': {
      'en': 'Pages design, HTML/CSS/JS coding, PHP programming',
      'ru': 'Дизайн, верстка, программирование (JS, PHP)'
    },
    'project.vworks.desc': {
      'en': 'Support service collaboration software.',
      'ru': 'Система подержки клиентов.'
    },
    'project.vworks.type': {
      'en': 'Pages design, HTML/CSS/JS coding, PHP programming, UI/UX',
      'ru': 'Дизайн, верстка, программирование (JS, PHP), разработка интерфейсов'
    },
    'project.crs.desc': {
      'en': 'Car Repair Service Template for ViraCMS.',
      'ru': 'Шаблон сайта автосервиса для ViraCMS.'
    },
    'project.crs.type': {
      'en': 'Pages design, HTML/CSS/JS coding, PHP programming',
      'ru': 'Дизайн, верстка, программирование (JS, PHP)'
    },
    'project.gsp.desc': {
      'en': 'Government Structure Web Site Template for ViraCMS.',
      'ru': 'Шаблон сайта муниципального органа власти для ViraCMS.'
    },
    'project.gsp.type': {
      'en': 'HTML/CSS/JS coding, PHP programming',
      'ru': 'Верстка, программирование (JS, PHP)'
    },
    'project.vira.desc': {
      'en': 'Vira Content Management System Software (ViraCMS).',
      'ru': 'Система управления контентом ViraCMS.'
    },
    'project.vira.type': {
      'en': 'Application architecture, pages design, HTML/CSS/JS coding, PHP programming, UI/UX',
      'ru': 'Архитектура приложения, дизайн, верстка, программирование (JS, PHP), разработка интерфейсов'
    },
    'project.sog.decs': {
      'en': 'Fundrising Project for Non-commercial Organization.',
      'ru': 'Сайт фандрайзингового проекта для некоммерческой организации.'
    },
    'project.sog.type': {
      'en': 'Application architecture, HTML/CSS/JS coding, PHP programming, UI/UX',
      'ru': 'Архитектура приложения, верстка, программирование (JS, PHP), разработка интерфейсов'
    },
    'project.yihe.desc': {
      'en': 'Chinese Medical Organization Russian Web Site.',
      'ru': 'Сайт китайского медицинского центра, адаптирован для посетителей из России.'
    },
    'project.yihe.type': {
      'en': 'HTML/CSS/JS coding, PHP programming, UI/UX',
      'ru': 'Верстка, программирование (JS, PHP)'
    },
    'project.slovo.desc': {
      'en': 'Non-commercial Web Application.',
      'ru': 'Сайт некоммерческой организации.'
    },
    'project.slovo.type': {
      'en': 'Application architecture, HTML/CSS/JS coding, PHP programming, UI/UX',
      'ru': 'Архитектура приложения, дизайн, верстка, программирование (JS, PHP), интерфейсы'
    },
    'project.rtrsrf.desc': {
      'en': 'Informational Web Portal of Digital Television Broadcasting Network.',
      'ru': 'Информационный портал продвижения цифрового эфирного телевидения.'
    },
    'project.rtrsrf.type': {
      'en': 'Pages design, HTML/CSS/JS coding, PHP programming, UI/UX',
      'ru': 'Дизайн, верстка, программирование (JS, PHP), разработка интерфейсов'
    },
    'project.nac.desc': {
      'en': 'Advanced version of Web Application of Russian Division of International Centre for Missing and Exploited Children.',
      'ru': 'Расширенная версия сайта о противодействии цифровым угрозам, современному рабству и опасностям для детей.'
    },
    'project.nac.type': {
      'en': 'Application architecture, pages design, HTML/CSS/JS coding, PHP programming, UI/UX',
      'ru': 'Архитектура приложения, дизайн, верстка, программирование (JS, PHP), разработка интерфейсов'
    },
    'project.nedo.desc': {
      'en': 'Web Application of Russian Division of International Centre for Missing and Exploited Children.',
      'ru': 'Сайт о противодействии цифровым угрозам, современному рабству и опасностям для детей.'
    },
    'project.nedo.type': {
      'en': 'Application architecture, development supervising',
      'ru': 'Архитектура приложения, руководство разработкой'
    },
    'project.mvert.desc': {
      'en': 'Online Web Shop.',
      'ru': 'Онлайн-магазин'
    },
    'project.mvert.type': {
      'en': 'Development supervising',
      'ru': 'Руководство разработкой'
    },
    'project.ulaud.desc': {
      'en': 'Audio Equipment Company Promo Site.',
      'ru': 'Промо-сайт компании по реализации аудио-оборудования.'
    },
    'project.ulaud.type': {
      'en': 'Development supervising',
      'ru': 'Руководство разработкой'
    },
    'project.meule.desc': {
      'en': 'Production Company Website.',
      'ru': 'Сайт производственной компании.'
    },
    'project.meule.type': {
      'en': 'Development supervising',
      'ru': 'Руководство разработкой'
    },
    'project.quick.desc': {
      'en': 'Freelancer\'s Sites Aggregator.',
      'ru': 'Агрегатор сайтов для фрилансеров.'
    },
    'project.quick.type': {
      'en': 'Application architecture, pages design, HTML/CSS/JS coding, PHP programming, UI/UX',
      'ru': 'Архитектура, дизайн, верстка, программирование (JS, PHP), разработка интерфейсов'
    },
    'project.prsov.desc': {
      'en': 'Non-commercial Organization Web Site.',
      'ru': 'Сайт Совета при президенте РФ по правам человека.'
    },
    'project.prsov.type': {
      'en': 'HTML/CSS/JS coding, development supervising',
      'ru': 'Верстка, руководство разработкой'
    },
    'project.retail.desc': {
      'en': 'CRM System for Retail Company.',
      'ru': 'CRM-система для компании прямого маркетинга.'
    },
    'project.retail.type': {
      'en': 'Application architecture, pages design, HTML/CSS/JS coding, PHP programming, UI/UX',
      'ru': 'Архитектура приложения, дизайн, верстка, программирование (JS, PHP), разработка интерфейсов'
    },
    'project.rtrs.desc': {
      'en': 'Russian Television and Radio Network Internet Portal.',
      'ru': 'Глобальный интернет-портал Российской Телевизионной и Радиовещательной Сети (более 80 сайтов).'
    },
    'project.rtrs.type': {
      'en': 'Application architecture, pages design, HTML/CSS/JS coding, PHP programming, UI/UX',
      'ru': 'Архитектура приложения, дизайн, верстка, программирование (JS, PHP), разработка интерфейсов'
    },
    'project.hotline.desc': {
      'en': 'Hotline Collaboration Software.',
      'ru': 'Программное обеспечения для совместной работы сотрудников &laquo;горячей линии&raquo;.'
    },
    'project.hotline.type': {
      'en': 'Application architecture, HTML/CSS/JS coding, PHP programming',
      'ru': 'Архитектура приложения, разработка интерфейсов, верстка, программирование (JS, PHP)'
    },
    'project.democr.desc': {
      'en': 'Non-commercial Organization Internet Portal.',
      'ru': 'Интернет-портал некоммерческой организации.'
    },
    'project.democr.type': {
      'en': 'Application architecture, HTML/CSS/JS coding, PHP programming, UI/UX',
      'ru': 'Архитектура приложения, верстка, программирование (JS, PHP), разработка интерфейсов'
    },
    'project.misschild.desc': {
      'en': 'Abducted Children Interactive Map Web Application.',
      'ru': 'Интерактивная карта пропавших и похищенных детей.'
    },
    'project.misschild.type': {
      'en': 'Application architecture, pages design, HTML/CSS/JS coding, PHP programming, UI/UX',
      'ru': 'Архитектура, дизайн, верстка, программирование (JS, PHP), разработка интерфейсов'
    },
    'project.alert.desc': {
      'en': 'Web Application specialized to render alert banners.',
      'ru': 'Веб-приложение системы оповещения о пропавших или похищенных детях.'
    },
    'project.alert.type': {
      'en': 'Application architecture, pages design, HTML/CSS/JS coding, PHP/LUA programming, UI/UX',
      'ru': 'Архитектура приложения, дизайн, верстка, программирование (JS, PHP, LUA), разработка интерфейсов'
    },
    'project.wnsm.desc': {
      'en': 'Russian Television and Radio Broadcasting Network geography web application.',
      'ru': 'Геоинформационное приложение Российской Телевизионной и Радиовещательной Сети.'
    },
    'project.wnsm.type': {
      'en': 'Application architecture, pages design, HTML/CSS/JS coding, PHP programming',
      'ru': 'Архитектура приложения, дизайн, верстка, программирование (JS, PHP)'
    },
    'project.blog.desc': {
      'en': 'Blog Web Application.',
      'ru': 'Многопользовательский блог.'
    },
    'project.blog.type': {
      'en': 'Pages design, HTML/CSS/JS coding, PHP programming, UI/UX',
      'ru': 'Дизайн страниц, верстка, программирование (JS, PHP), интерфейсы'
    },
    'project.pd.desc': {
      'en': 'Political Party Web Sites.',
      'ru': 'Система веб-присутствия политической партии (более 100 ресурсов).'
    },
    'project.pd.type': {
      'en': 'Applications architecture, pages design, HTML/CSS/JS coding, PHP programming, UI/UX',
      'ru': 'Архитектура приложений, дизайн, верстка, программирование (JS, PHP), разработка интерфейсов, интерконнект с социальными сетями и т. д.'
    },
    'project.rolexcup.desc': {
      'en': 'Yacht Club Promo Web Site.',
      'ru': 'Промо-сайт яхтклуба.'
    },
    'project.rolexcup.type': {
      'en': 'HTML/CSS/JS coding, PHP programming, UI/UX',
      'ru': 'Верстка, программирование (JS, PHP)'
    },
    'project.mashali.desc': {
      'en': 'Russian Web Site version for Chinese Tour Agency.',
      'ru': 'Сайт китайского туристического агентства, адаптированный для посетителей из России'
    },
    'project.mashali.type': {
      'en': 'HTML/CSS/JS coding, PHP programming, UI/UX',
      'ru': 'Верстка, программирование (JS, PHP)'
    },
    'project.mas.desc': {
      'en': 'Promotional Web Site for Moscow Audio Show `2013.',
      'ru': 'Промо-сайт выставки.'
    },
    'project.mas.type': {
      'en': 'HTML/CSS/JS coding, PHP programming, UI/UX',
      'ru': 'Верстка, программироване (JS, PHP)'
    },
    'project.docli.desc': {
      'en': 'Chinese Recreation Agency Web Site.',
      'ru': 'Сайт китайского агентства в области медицинского туризма.'
    },
    'project.docli.type': {
      'en': 'Pages design, HTML/CSS/JS coding, PHP programming, UI/UX',
      'ru': 'Дизайн, верстка, программирование (JS, PHP)'
    },
    'project.shop.desc': {
      'en': 'Online Web Shop.',
      'ru': 'Онлайн-магазин.'
    },
    'project.shop.type': {
      'en': 'HTML/CSS/JS coding, PHP programming',
      'ru': 'Верстка, программирование (JS, PHP)'
    },
    'project.artfin.desc': {
      'en': 'Financial Planning Software for Artstyle Group.',
      'ru': 'Программное обеспечение для планирования финансов.'
    },
    'project.artfin.type': {
      'en': 'HTML/CSS/JS coding, PHP programming',
      'ru': 'Верстка, программирование (JS, PHP)'
    },
    'project.art.desc': {
      'en': 'Internet Studio Portfolio Web Site.',
      'ru': 'Сайт веб-студии.'
    },
    'project.art.type': {
      'en': 'HTML/CSS/JS coding, PHP programming, UI/UX',
      'ru': 'Верстка, программирование (JS, PHP)'
    },
    'project.sibusl.desc': {
      'en': 'CRM System for Outstaffing Service Company.',
      'ru': 'CRM-система для аутстаффинговой компании.'
    },
    'project.sibusl.type': {
      'en': 'Pages design, HTML/CSS/JS coding, PHP programming, UI/UX',
      'ru': 'Дизайн, верстка, программирование (JS, PHP), разработка интерфейсов, юзабилити'
    },
    'project.lawcl.desc': {
      'en': 'Students Practice Collaboration Web Application.',
      'ru': 'Система совместной работы для студентов юридических ВУЗов.'
    },
    'project.lawclinic.type': {
      'en': 'Pages design, HTML/CSS/JS coding, PHP programming, UI/UX',
      'ru': 'Дизайн, верстка, программирование (JS, PHP), разработка интерфейсов'
    },
    'project.detivru.desc': {
      'en': 'Promotional Web Site for Non-commercial Organization.',
      'ru': 'Промо-сайт некоммерческой организации.'
    },
    'project.detivru.type': {
      'en': 'HTML/CSS/JS coding, PHP programming',
      'ru': 'Верстка, программирование'
    },
    'project.bogosl.desc': {
      'en': 'Production Company Informational Web Site.',
      'ru': 'Промо-сайт производственной компании.'
    },
    'project.bogosl.type': {
      'en': 'HTML/CSS/JS coding, PHP programming, UI/UX',
      'ru': 'Верстка, программирование'
    },
    'project.video.desc': {
      'en': 'Video Advertising Web Site.',
      'ru': 'Хостинг видеообъявлений.'
    },
    'project.video.type': {
      'en': 'Application architecture, pages design, HTML/CSS/JS coding, PHP programming, UI/UX',
      'ru': 'Архитектура приложения, дизайн страниц, верстка, программирование (JS, PHP), разработка интерфейсов, юзабилити'
    },
    'project.teaser.desc': {
      'en': 'Teaser Network Advertisement Platform.',
      'ru': 'Тизерная сеть.'
    },
    'project.teaser.type': {
      'en': 'Application architecture, HTML/CSS/JS coding, PHP/Python programming, UI/UX',
      'ru': 'Архитектура приложения, верстка, программирование (JS, PHP, Python)'
    },
    'project.mediatask.desc': {
      'en': 'CRM Software for Online Social Media Advertising Company.',
      'ru': 'CRM-система и система совместной работы для сотрудников SMM-агентства.'
    },
    'project.mediatask.type': {
      'en': 'Application architecture, pages design, HTML/CSS/JS coding, PHP programming, UI/UX',
      'ru': 'Архитектура приложения, дизайн, верстка, программирование (JS, PHP), интерфейсы'
    },
    'project.mshop.desc': {
      'en': 'CRM Software for Distributed Delivery Network Company.',
      'ru': 'Система совместной работы для удаленных сотрудников компании прямого маркетинга.'
    },
    'project.mshop.type': {
      'en': 'Application architecture, pages design, HTML/CSS/JS coding, PHP programming, UI/UX',
      'ru': 'Архитектура приложения, дизайн, верстка, программирование, разработка интерфейсов, юзабилити'
    },
    'project.cpa.desc': {
      'en': 'Cost-Per-Action Advertisement Platform.',
      'ru': 'Рекламная сеть типа &laquo;Cost-Per-Action&raquo;.'
    },
    'project.cpa.type': {
      'en': 'Application architecture, HTML/CSS/JS coding, PHP/Python programming, UI/UX',
      'ru': 'Архитектура приложения, верстка, программирование (JS, PHP, Python), разработка интерфейсов'
    },
    'project.actual.desc': {
      'en': 'Traffic Pump System for Advertisement Platforms.',
      'ru': 'Система перенаправления трафика для рекламных площадок.'
    },
    'project.actual.type': {
      'en': 'Application architecture, PHP programming',
      'ru': 'Архитектура приложения, программирование (JS, PHP)'
    },
    'project.akula.desc': {
      'en': 'Collaboration System for a Translators/Copywriters.',
      'ru': 'Система совместной работы для переводчиков и копирайтеров.'
    },
    'project.akula.type': {
      'en': 'HTML/CSS/JS coding, PHP programming',
      'ru': 'Верстка, программирование (JS, PHP)'
    },
    'project.dns.desc': {
      'en': 'DNS Hosting Service.',
      'ru': 'Интернет-сервис &mdash; хостинг DNS.'
    },
    'project.dns.type': {
      'en': 'Application architecture, pages design, HTML/CSS/JS coding, PHP programming, UI/UX',
      'ru': 'Архитектура приложения, дизайн, верстка, программирование (JS, PHP, Python, C, Bash), разработка интерфейсов, юзабилити'
    },
    'title.contact': {
      'en': 'Contact',
      'ru': 'Контактная инфо'
    },
    'title.email': {
      'en': 'E-mail',
      'ru': 'E-mail'
    },
    'title.phone': {
      'en': 'Telephone',
      'ru': 'Телефон'
    },
    'title.skype': {
      'en': 'Skype',
      'ru': 'Skype'
    },
    'title.telegram': {
      'en': 'Telegram',
      'ru': 'Telegram'
    },
    'title.hire': {
      'en': 'Hire',
      'ru': 'Предложить работу'
    },
    'value.hire': {
      'en': 'Even if I\'m busy right now feel free to contact me with any questions, or offers.',
      'ru': 'Я всегда открыт к предложениям, даже в том случае, если сейчас занят текущим проектом. Жду ваших писем, сообщений или звонков.'
    }
  };
} ());
(function () {
  var langLinks = document.getElementsByClassName('language-selector_item--link'),
      navLinks = document.getElementsByClassName('sidebar_nav-item--link'),
      flipSection = function (callback) {
        var timer,
            section = document.getElementById('content'),
            degree = 0,
            flip = function (degree, threshold, callback) {
              section.style.transform = 'rotateY(' + degree + 'deg)';

              if (degree == threshold) {
                clearInterval(timer);
                if (typeof callback == 'function') callback();
              }
            },
            flipIn = function () {
              degree -= 10;
              flip(degree, 0);
            },
            onFlipOut = function () {
              if (typeof callback == 'function') callback();
              timer = setInterval(flipIn, 15);
            },
            flipOut = function () {
              degree += 10;
              flip(degree, 90, onFlipOut);
            };
        timer = setInterval(flipOut, 15);
      },
      toggleSlides = function (activeSlideId, selectedSlideId) {
        var activeSlide = document.getElementById(activeSlideId),
            selectedSlide = document.getElementById(selectedSlideId);
        flipSection(function () {
          activeSlide.classList.remove('active');
          selectedSlide.classList.add('active');
        });
      },
      findActiveLink = function () {
        for (var index = 0; index < navLinks.length; index++) {
          if (navLinks[index].classList.contains('active')) {
            return navLinks[index];
          }
        } 
      },
      findLinkByHash = function (hash) {
        for (var index = 0; index < navLinks.length; index++) {
          if (navLinks[index].hash == hash) {
            return navLinks[index];
          }
        } 
      },
      onNavLinkClick = function (e) {
        e && e.preventDefault();
        var activeLink = findActiveLink();
        if (this.classList.contains('active')) return;
        activeLink.classList.remove('active');
        this.classList.add('active');
        toggleSlides(activeLink.hash.split('#')[1], this.hash.split('#')[1]);
      },
      onLangLinkClick = function (e) {
        e && e.preventDefault();
        if (e && this.classList.contains('active')) return;
        for (var index = 0; index < langLinks.length; index++) {
          langLinks[index].classList.remove('active');
        }
        this.classList.add('active');
        var lang = this.dataset.lang;
        if (!lang) return;
        var elements = document.getElementsByTagName('*');
        for (var index = 0, length = elements.length; index < length; index++) {
          var shuffle = function (el) {
            el.classList.add('shuffling');
            var text = typeof l10n[el.dataset.textSource] != 'undefined' ? l10n[el.dataset.textSource][lang] : '';
            var shuffle = new ShuffleText(elements[index]);
            if (text) {
              shuffle.setText(text);
              shuffle.start();
              setTimeout(function () {
                el.classList.remove('shuffling');
              }, 610);
            }
          };
          if (typeof elements[index].dataset.textSource != 'undefined') {
            shuffle(elements[index])
          }
        }
      };
  
  for (var index = 0; index < navLinks.length; index++) {
    navLinks[index].addEventListener('click', onNavLinkClick);
  }

  for (var index = 0; index < langLinks.length; index++) {
    langLinks[index].addEventListener('click', onLangLinkClick);
    if (langLinks[index].classList.contains('active')) {
      onLangLinkClick.call(langLinks[index]);
    }
  }

  if (window.location.hash) {
    var link = findLinkByHash(window.location.hash);
    if (link) onNavLinkClick.call(link);
  }

  var popupLinks = document.getElementsByClassName('-popup');
  
  for (var index = 0; index < popupLinks.length; index++) {
    popupLinks[index].addEventListener('click', function (e) {
      e.preventDefault();
      if (this.tagName == 'A') {
        var popup = window.open(this.href, '_blank', '');
        popup.focus();
      }
      return false;
    });
  }
}());
