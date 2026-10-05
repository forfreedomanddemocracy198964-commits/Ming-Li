let christianLanguage = "zh";


/* ==================================================
   TEXT HELPER
================================================== */

function setChristianText(id, text) {

    const element = document.getElementById(id);

    if (element) {
        element.textContent = text;
    }

}


/* ==================================================
   LANGUAGE BUTTON
================================================== */

function changeChristianLanguage() {

    if (christianLanguage === "zh") {

        christianLanguage = "en";

        document.documentElement.lang = "en";

        setChristianEnglish();

        const button = document.getElementById("language-button");

        if (button) {
            button.textContent = "中文";
        }

    } else {

        christianLanguage = "zh";

        document.documentElement.lang = "zh-CN";

        setChristianChinese();

        const button = document.getElementById("language-button");

        if (button) {
            button.textContent = "English";
        }

    }

}


/* ==================================================
   ENGLISH
================================================== */

function setChristianEnglish() {

    document.title =
        "Christianity and House Churches | Religious Freedom in China";


    /* HEADER */

    setChristianText(
        "christian-site-name",
        "My Website"
    );

    setChristianText(
        "christian-nav-home",
        "Home"
    );

    setChristianText(
        "christian-nav-topics",
        "Topics"
    );

    setChristianText(
        "christian-nav-religion",
        "Religious Issues"
    );

    setChristianText(
        "christian-nav-sources",
        "Sources"
    );

    setChristianText(
        "christian-nav-about",
        "About"
    );


    /* HERO */

    setChristianText(
        "christian-page-title",
        "Christianity and House Churches"
    );

    setChristianText(
        "christian-page-subtitle",
        "Christianity, State Control, and Religious Freedom in China"
    );

    setChristianText(
        "christian-page-intro",
        "The Chinese government legally recognizes Christianity, and the Constitution of the People's Republic of China states that citizens enjoy freedom of religious belief. Yet independent house churches and China's state-controlled religious system have remained in persistent conflict. This project examines state regulation of Christianity, restrictions affecting house churches, and documented cases involving the detention, prosecution, and imprisonment of pastors and believers."
    );

    setChristianText(
        "christian-start",
        "Start Reading"
    );


    /* ==================================================
       01 · RELIGIOUS FREEDOM
    ================================================== */

    setChristianText(
        "christian-freedom-title",
        "Allowed to Exist, but Not Allowed to Exist Freely"
    );

    setChristianText(
        "christian-freedom-1",
        "The Chinese Communist Party has not openly declared Christianity illegal. On the contrary, China's Constitution states that citizens enjoy 'freedom of religious belief,' and Protestantism and Catholicism are officially recognized religions. But recognition on paper is not the same as genuine religious freedom."
    );

    setChristianText(
        "christian-freedom-2",
        "When a church must operate within political and administrative boundaries defined by the state, and when refusing to enter the official religious system can lead to inspections, closures, fines, or detention, being 'allowed to exist' and being 'allowed to exist freely' become two very different things. This is one of the sharpest conflicts facing Christianity in China: is the state merely regulating religion, or demanding that religion submit to state power?"
    );

    setChristianText(
        "christian-freedom-3",
        "For some independent house churches, this conflict is not an abstract political debate. The U.S. Department of State, the U.S. Commission on International Religious Freedom, and other organizations have documented cases involving raids on house churches, disrupted gatherings, closures, surveillance, and fines. Pastors, church leaders, and ordinary believers have also faced detention, criminal prosecution, and lengthy prison sentences."
    );

    setChristianText(
        "christian-freedom-quote",
        "A constitution can write the words 'freedom of religious belief,' but genuine freedom must be tested against reality."
    );

    setChristianText(
        "christian-freedom-4",
        "The central question is therefore not whether China has churches or Christians. The real question is whether a church that refuses political control by the state still has the right to gather publicly, organize itself, train clergy, spread its faith, and continue to exist without punishment."
    );

    setChristianText(
        "christian-freedom-5",
        "If faith is safe only after it submits to political power, then the freedom itself deserves to be questioned."
    );


    /* ==================================================
       02 · OFFICIAL CHURCHES
    ================================================== */

    setChristianText(
        "christian-official-title",
        "Official Churches and the Three-Self System"
    );

    setChristianText(
        "christian-official-1",
        "China does not completely prohibit Christianity. Protestant Christianity is one of the religions formally recognized by the government, and many Christians worship through officially approved churches."
    );

    setChristianText(
        "christian-official-2",
        "The Three-Self Patriotic Movement and the China Christian Council are major institutions within China's officially recognized Protestant system. The term 'Three-Self' traditionally refers to self-governance, self-support, and self-propagation."
    );

    setChristianText(
        "christian-official-3",
        "Official church organizations also emphasize operating churches independently from foreign control, advancing the Sinicization of Christianity, promoting socialist core values, and accepting supervision and administration by relevant government authorities."
    );


    /* ==================================================
       03 · HOUSE CHURCHES
    ================================================== */

    setChristianText(
        "christian-house-title",
        "House Churches"
    );

    setChristianText(
        "christian-house-1",
        "Not every Christian in China is willing to join the state-approved religious system. Some believers organize worship independently in homes, offices, and other locations. These independent congregations are commonly known as house churches."
    );

    setChristianText(
        "christian-house-2",
        "House churches are not a single unified organization. They differ widely in size, theology, organization, leadership, and their relationships with local authorities."
    );

    setChristianText(
        "christian-house-3",
        "Some house churches refuse to join officially recognized religious organizations because they believe churches should maintain greater independence in matters of faith, clergy, worship, and internal governance. That demand for independence has repeatedly placed some churches in direct conflict with China's state religious system."
    );


    /* ==================================================
       04 · RAIDS
    ================================================== */

    setChristianText(
        "christian-raids-title",
        "Raids, Closures, and Surveillance"
    );

    setChristianText(
        "christian-raids-1",
        "International religious-freedom reports have repeatedly documented cases in which unregistered house churches were raided by police or local authorities. Worship services have been interrupted, participants have had their identities recorded, and church leaders have been taken away for questioning."
    );

    setChristianText(
        "christian-raids-2",
        "Some house-church meeting places have been shut down, while churches and their leaders have faced administrative penalties and fines. International organizations have also reported surveillance, harassment, and continuing pressure against some pastors and believers."
    );

    setChristianText(
        "christian-raids-quote",
        "For an independent church, the limits of religious freedom often become clearest when it refuses to surrender its independence to state control."
    );


    /* ==================================================
       05 · ARRESTS
    ================================================== */

    setChristianText(
        "christian-arrests-title",
        "Detention, Prosecution, and Imprisonment"
    );

    setChristianText(
        "christian-arrests-1",
        "Pressure on independent churches has not been limited to administrative regulation or the closure of meeting places. International religious-freedom organizations have documented cases involving the detention, prosecution, and imprisonment of pastors, church leaders, and believers."
    );

    setChristianText(
        "christian-arrests-2",
        "In some cases, Chinese judicial authorities have brought charges including fraud, subversion of state power, or offenses connected to online activity. USCIRF and other organizations have argued that some of these prosecutions are closely connected to the defendants' independent religious activities."
    );

    setChristianText(
        "christian-arrests-3",
        "Individual cases therefore require examination of both the charges and judgments issued by Chinese authorities and the investigations of outside religious-freedom and human-rights organizations. Not every criminal case involving a Christian can simply be described as imprisonment 'for being Christian,' but neither should the religious and political context of these prosecutions be ignored."
    );


    /* ==================================================
       06 · SINICIZATION
    ================================================== */

    setChristianText(
        "christian-sinicization-title",
        "The 'Sinicization' of Christianity"
    );

    setChristianText(
        "christian-sinicization-1",
        "The policy of promoting the 'Sinicization of religion' has become an important element of China's religious policy. Chinese authorities describe it as a process of adapting religion to Chinese culture and socialist society."
    );

    setChristianText(
        "christian-sinicization-2",
        "Within Christianity, official religious organizations emphasize patriotism, socialist core values, and the integration of Christianity with Chinese society and culture."
    );

    setChristianText(
        "christian-sinicization-3",
        "USCIRF and other critics argue that Sinicization has gone far beyond cultural adaptation and has become a mechanism for strengthening Communist Party control over religious organizations, clergy, doctrine, and religious activity."
    );


    /* ==================================================
       07 · CORE QUESTION
    ================================================== */

    setChristianText(
        "christian-question-title",
        "Who Has the Right to Decide How a Church Exists?"
    );

    setChristianText(
        "christian-question-1",
        "The Chinese government argues that regulating religious affairs is part of maintaining public order, national security, and social stability, and that religious activities must operate according to Chinese law."
    );

    setChristianText(
        "christian-question-2",
        "Religious-freedom organizations argue that when the state demands political and administrative control over churches and responds to independent religious activity with closures, fines, detention, or criminal punishment, regulation can cross the line into violations of freedom of religion or belief."
    );

    setChristianText(
        "christian-question-quote",
        "A country does not prove religious freedom merely by allowing church buildings to stand. The deeper test is whether churches can exist without surrendering their religious independence to political power."
    );

    setChristianText(
        "christian-question-3",
        "The deepest dispute surrounding Christianity in China is not simply whether people are allowed to believe in God. It is who ultimately has the authority to decide how a church is allowed to exist."
    );


    /* ==================================================
       SOURCES
    ================================================== */

    setChristianText(
        "christian-sources-title",
        "Sources and Further Reading"
    );

    setChristianText(
        "christian-sources-description",
        "This project distinguishes, whenever possible, between Chinese laws and official policy documents and reports produced by international religious-freedom and human-rights organizations. For disputed events and criminal cases, readers should compare records and interpretations from multiple sources."
    );


    /* BACK */

    setChristianText(
        "christian-back-title",
        "Explore Other Religious Topics"
    );

    setChristianText(
        "christian-back-description",
        "Return to the Religion and Freedom of Belief section to explore Catholicism, Islam, Tibetan Buddhism, Falun Gong, and other religious issues."
    );

    setChristianText(
        "christian-back-button",
        "← Back to Religious Topics"
    );


    /* FOOTER */

    setChristianText(
        "christian-footer-title",
        "Freedom · Democracy · Human Rights · Rule of Law"
    );

    setChristianText(
        "christian-footer-subtitle",
        "Christianity and House Churches"
    );

}


/* ==================================================
   CHINESE
================================================== */

function setChristianChinese() {

    document.title =
        "基督教与家庭教会 | 宗教专题";


    /* HEADER */

    setChristianText(
        "christian-site-name",
        "我的网站"
    );

    setChristianText(
        "christian-nav-home",
        "首页"
    );

    setChristianText(
        "christian-nav-topics",
        "专题"
    );

    setChristianText(
        "christian-nav-religion",
        "宗教议题"
    );

    setChristianText(
        "christian-nav-sources",
        "文献"
    );

    setChristianText(
        "christian-nav-about",
        "关于"
    );


    /* HERO */

    setChristianText(
        "christian-page-title",
        "基督教与家庭教会"
    );

    setChristianText(
        "christian-page-subtitle",
        "中国的基督教、国家管理与宗教自由"
    );

    setChristianText(
        "christian-page-intro",
        "中国政府在法律上承认基督教，《中华人民共和国宪法》也规定公民享有宗教信仰自由。然而，独立家庭教会与国家宗教管理体系之间长期存在冲突。本专题记录中国基督教所面对的国家管理、家庭教会受到的限制，以及牧师和信徒遭拘留、起诉和监禁的相关报告与案例。"
    );

    setChristianText(
        "christian-start",
        "开始阅读"
    );


    /* 01 */

    setChristianText(
        "christian-freedom-title",
        "被允许存在，但不被允许自由存在"
    );

    setChristianText(
        "christian-freedom-1",
        "中国共产党并没有在法律上公开宣布消灭基督教。相反，中国宪法写着公民享有“宗教信仰自由”，新教和天主教也被政府列入正式承认的宗教。但纸面上的承认，并不等于真正的宗教自由。"
    );

    setChristianText(
        "christian-freedom-2",
        "当一个教会必须在国家划定的政治和行政边界内活动，当拒绝进入官方宗教体系可能意味着检查、关闭、罚款甚至拘留时，“允许存在”和“允许自由存在”已经成为两个完全不同的问题。中国基督教最尖锐的矛盾也正在这里：国家究竟是在管理宗教，还是在要求宗教服从国家权力？"
    );

    setChristianText(
        "christian-freedom-3",
        "对一些独立家庭教会而言，这种冲突并不是抽象的政治讨论。美国国务院、美国国际宗教自由委员会等机构长期记录了部分家庭教会遭突击检查、聚会被强行中断、场所关闭、监控和罚款的案例。部分牧师、教会负责人和普通信徒还遭到拘留、刑事起诉或长期监禁。"
    );

    setChristianText(
        "christian-freedom-quote",
        "宪法可以写下“宗教信仰自由”，但真正的自由必须接受现实的检验。"
    );

    setChristianText(
        "christian-freedom-4",
        "因此，争议的核心从来不是“中国有没有教堂”或者“中国有没有基督徒”。真正的问题是：一个拒绝接受国家政治控制的教会，是否仍然有权公开聚会、组织教会、培养牧师、传播信仰，并在不遭到惩罚的情况下继续存在。"
    );

    setChristianText(
        "christian-freedom-5",
        "如果信仰只有在服从权力之后才能获得安全，那么这种自由本身就值得质疑。"
    );


    /* 02 */

    setChristianText(
        "christian-official-title",
        "官方教会与三自体系"
    );

    setChristianText(
        "christian-official-1",
        "中国并没有全面禁止基督教。新教属于中国政府正式承认的宗教之一，大量基督徒通过官方认可的教会参加礼拜和其他宗教活动。"
    );

    setChristianText(
        "christian-official-2",
        "中国基督教三自爱国运动委员会和中国基督教协会是中国官方新教体系中的重要组织。“三自”通常指自治、自养和自传。"
    );

    setChristianText(
        "christian-official-3",
        "官方教会体系同时强调独立自主自办教会、坚持基督教中国化方向、践行社会主义核心价值观，并接受有关政府部门的监督管理。"
    );


    /* 03 */

    setChristianText(
        "christian-house-title",
        "家庭教会"
    );

    setChristianText(
        "christian-house-1",
        "并不是所有中国基督徒都愿意加入国家认可的宗教体系。一些基督徒选择在住宅、办公室或其他地点自行组织宗教聚会，这些独立教会通常被统称为“家庭教会”。"
    );

    setChristianText(
        "christian-house-2",
        "家庭教会并不是一个统一组织。不同家庭教会的规模、神学传统、组织方式以及与政府之间的关系都可能存在很大差异。"
    );

    setChristianText(
        "christian-house-3",
        "一些家庭教会拒绝加入官方宗教组织，认为教会在信仰、牧师任命、宗教活动和内部组织方面应当保持更大的独立性。这种对独立性的坚持，也让部分家庭教会与国家宗教管理体系发生直接冲突。"
    );


    /* 04 */

    setChristianText(
        "christian-raids-title",
        "突击检查、关闭与监控"
    );

    setChristianText(
        "christian-raids-1",
        "国际宗教自由报告长期记录部分未登记家庭教会遭警方或地方执法人员突击检查的案例。宗教聚会可能被中断，参加者身份可能被登记，教会负责人也可能被带走询问。"
    );

    setChristianText(
        "christian-raids-2",
        "一些家庭教会的聚会地点曾被关闭，教会或负责人受到行政处罚和罚款。国际宗教自由机构也记录了部分牧师和信徒受到持续监控、骚扰或其他压力的报告。"
    );

    setChristianText(
        "christian-raids-quote",
        "对独立教会而言，宗教自由的边界，往往在它拒绝向国家控制交出独立性时变得最清晰。"
    );


    /* 05 */

    setChristianText(
        "christian-arrests-title",
        "拘留、起诉与监禁"
    );

    setChristianText(
        "christian-arrests-1",
        "对独立教会的压力并不只停留在行政管理和关闭聚会场所。国际宗教自由机构记录了牧师、教会负责人和信徒遭到拘留、刑事起诉以及监禁的案例。"
    );

    setChristianText(
        "christian-arrests-2",
        "在一些案件中，中国司法机关提出的罪名包括诈骗、颠覆国家政权以及与网络活动有关的犯罪。USCIRF等机构则认为，部分案件与被告人的独立宗教活动存在密切联系。"
    );

    setChristianText(
        "christian-arrests-3",
        "因此，具体案件需要同时查看中国官方提出的指控和判决，以及外部宗教自由和人权机构的调查。并不是每一起涉及基督徒的刑事案件都能简单概括为“因为信基督教被判刑”，但同样不能忽略案件背后的宗教与政治环境。"
    );


    /* 06 */

    setChristianText(
        "christian-sinicization-title",
        "基督教“中国化”"
    );

    setChristianText(
        "christian-sinicization-1",
        "“坚持我国宗教中国化方向”已经成为中国宗教政策中的重要概念。中国官方将这一政策解释为引导宗教与中国文化和社会主义社会相适应。"
    );

    setChristianText(
        "christian-sinicization-2",
        "对基督教而言，官方宗教组织强调爱国主义、社会主义核心价值观，以及基督教与中国社会和文化的结合。"
    );

    setChristianText(
        "christian-sinicization-3",
        "USCIRF等批评者认为，“宗教中国化”已经远远超出文化适应，而成为强化中国共产党对宗教组织、宗教人员、宗教教义与宗教活动政治控制的一种机制。"
    );


    /* 07 */

    setChristianText(
        "christian-question-title",
        "谁能够决定教会如何存在？"
    );

    setChristianText(
        "christian-question-1",
        "中国政府认为，对宗教事务实施管理是维护法律秩序、国家安全和社会稳定的一部分，并强调宗教活动必须依法进行。"
    );

    setChristianText(
        "christian-question-2",
        "宗教自由机构则认为，当国家要求教会接受政治和行政控制，并以关闭、罚款、拘留或刑事处罚回应独立宗教活动时，所谓管理就可能跨越界线，成为对宗教或信仰自由的侵犯。"
    );

    setChristianText(
        "christian-question-quote",
        "一个国家是否拥有宗教自由，不能只看教堂是否还站在那里。更重要的问题是：教会能否在不向政治权力交出宗教独立性的情况下继续存在。"
    );

    setChristianText(
        "christian-question-3",
        "中国基督教真正的争议，从来不只是人们能不能相信上帝，而是谁最终拥有决定一个教会如何存在的权力。"
    );


    /* SOURCES */

    setChristianText(
        "christian-sources-title",
        "文献与进一步阅读"
    );

    setChristianText(
        "christian-sources-description",
        "本专题尽可能区分中国政府的法律与政策文件，以及国际宗教自由机构和人权机构的报告。对于存在争议的事件和刑事案件，应同时比较不同来源的记录与解释。"
    );


    /* BACK */

    setChristianText(
        "christian-back-title",
        "阅读其他宗教专题"
    );

    setChristianText(
        "christian-back-description",
        "返回宗教与信仰自由专题，阅读天主教、伊斯兰教、藏传佛教、法轮功及其他宗教议题。"
    );

    setChristianText(
        "christian-back-button",
        "← 返回宗教专题"
    );


    /* FOOTER */

    setChristianText(
        "christian-footer-title",
        "自由 · 民主 · 人权 · 法治"
    );

    setChristianText(
        "christian-footer-subtitle",
        "基督教与家庭教会"
    );

}


/* ==================================================
   REVEAL
================================================== */

document.addEventListener("DOMContentLoaded", function () {

    document
        .querySelectorAll(".religion-reveal")
        .forEach(function (element) {

            element.classList.add(
                "religion-visible"
            );

        });

});