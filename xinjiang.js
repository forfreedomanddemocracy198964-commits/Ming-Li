/* ==================================================
   XINJIANG PAGE
   Language Switch + Reveal
================================================== */

let xinjiangLanguage = "zh";


/* ==================================================
   HELPER
================================================== */

function setXinjiangText(id, text) {

    const element = document.getElementById(id);

    if (element) {
        element.textContent = text;
    }

}


/* ==================================================
   LANGUAGE SWITCH
================================================== */

function changeXinjiangLanguage() {

    const button = document.getElementById("language-button");

    if (xinjiangLanguage === "zh") {

        xinjiangLanguage = "en";

        document.documentElement.lang = "en";

        setXinjiangEnglish();

        if (button) {
            button.textContent = "中文";
        }

    } else {

        xinjiangLanguage = "zh";

        document.documentElement.lang = "zh-CN";

        setXinjiangChinese();

        if (button) {
            button.textContent = "English";
        }

    }

}


/* ==================================================
   ENGLISH
================================================== */

function setXinjiangEnglish() {

    document.title =
        "Xinjiang | Uyghurs, National Security and Human Rights";


    /* HEADER */

    setXinjiangText(
        "xj-site-name",
        "My Website"
    );

    setXinjiangText(
        "xj-nav-home",
        "Home"
    );

    setXinjiangText(
        "xj-nav-topics",
        "Topics"
    );

    setXinjiangText(
        "xj-nav-sources",
        "Sources"
    );

    setXinjiangText(
        "xj-nav-about",
        "About"
    );


    /* HERO */

    setXinjiangText(
        "xj-title",
        "Xinjiang"
    );

    setXinjiangText(
        "xj-subtitle",
        "Uyghurs, National Security, and the Human Rights Crisis"
    );

    setXinjiangText(
        "xj-intro",
        "Since around 2017, Xinjiang has become one of the world's most controversial human rights issues. The United Nations Human Rights Office has documented large-scale arbitrary detention, restrictions on religion, extensive surveillance, and other serious human rights concerns affecting Uyghurs and other predominantly Muslim minorities. The Chinese government argues that these policies are measures against terrorism and extremism, as well as programs for vocational training and social stability. Between these sharply conflicting accounts lies a fundamental question: where should the power of the state in the name of national security end?"
    );

    setXinjiangText(
        "xj-start",
        "Start Reading"
    );


    /* ==================================================
       01 · CORE QUESTION
    ================================================== */

    setXinjiangText(
        "xj-core-title",
        "Counterterrorism, or Large-Scale Human Rights Abuses?"
    );

    setXinjiangText(
        "xj-core-1",
        "The Chinese government has long described its policies in Xinjiang as necessary measures to combat terrorism, separatism, and religious extremism. Xinjiang has experienced serious violent incidents and terrorist attacks, and the state has a responsibility to protect public safety."
    );

    setXinjiangText(
        "xj-core-2",
        "But the state's power to fight terrorism does not mean that this power has no limits. When mass detention, restrictions on religion, political education, digital surveillance, and interference in private life are applied together to particular ethnic and religious communities, national security becomes more than a simple question of public order."
    );

    setXinjiangText(
        "xj-core-quote",
        "Counterterrorism can protect people's safety, but 'security' cannot become a justification for unlimited state power."
    );

    setXinjiangText(
        "xj-core-3",
        "The central question in Xinjiang is not whether the state has the right to protect security, but whether that power has limits."
    );


    /* ==================================================
       02 · WHO ARE THE UYGHURS?
    ================================================== */

    setXinjiangText(
        "xj-uyghur-title",
        "Who Are the Uyghurs?"
    );

    setXinjiangText(
        "xj-uyghur-1",
        "The Uyghurs are a Turkic-speaking ethnic group primarily living in Xinjiang. They have their own language, cultural traditions, and ethnic identity, and most Uyghurs are Muslim."
    );

    setXinjiangText(
        "xj-uyghur-2",
        "Xinjiang is located in northwestern China and borders several countries in Central and South Asia. Questions of ethnicity, religion, history, national security, and political identity have long intersected in the region."
    );

    setXinjiangText(
        "xj-uyghur-3",
        "For this reason, the Xinjiang issue cannot be understood simply as an ordinary law-enforcement campaign. It also concerns whether an ethnic community can preserve its language, religion, culture, and private life, and how far the state may intervene in those rights in the name of security."
    );


    /* ==================================================
       03 · MASS DETENTION
    ================================================== */

    setXinjiangText(
        "xj-detention-title",
        "Mass Detention and 'Vocational Education and Training Centers'"
    );

    setXinjiangText(
        "xj-detention-1",
        "Beginning around 2017, a large network of facilities described by the Chinese government as 'vocational education and training centers' operated in Xinjiang. The Chinese government said these facilities provided vocational education, counterterrorism and deradicalization programs, and helped people affected by extremism learn law, language, and employment skills."
    );

    setXinjiangText(
        "xj-detention-2",
        "However, in its 2022 assessment, the United Nations Human Rights Office concluded that serious human rights violations had been committed in Xinjiang and found that large-scale arbitrary and discriminatory detention had affected Uyghurs and other predominantly Muslim groups."
    );

    setXinjiangText(
        "xj-detention-3",
        "This is at the center of the controversy: if a person cannot freely choose whether to enter a facility, cannot freely leave it, and is subjected to compulsory political and ideological education inside, where is the line between 'training' and detention?"
    );

    setXinjiangText(
        "xj-detention-quote",
        "Changing the name of a facility does not change the standard for determining whether a person's liberty has been taken away."
    );


    /* ==================================================
       04 · INSIDE THE CENTERS
    ================================================== */

    setXinjiangText(
        "xj-centers-title",
        "What Happened Inside the 'Training Centers'?"
    );

    setXinjiangText(
        "xj-centers-1",
        "Some individuals interviewed by the United Nations Human Rights Office said that they were unable to leave the facilities freely and were required to participate in political education, legal education, and Mandarin-language classes."
    );

    setXinjiangText(
        "xj-centers-2",
        "The UN assessment also documented allegations of torture and other forms of ill-treatment, including beatings, forced medical treatment, and reports of sexual violence. The Office assessed that some allegations of torture or ill-treatment were credible."
    );

    setXinjiangText(
        "xj-centers-3",
        "These allegations are extremely serious, but they also need to be described accurately. The UN report documented and assessed testimony, documents, and other information; it did not conclude that every person in every facility experienced exactly the same treatment."
    );

    setXinjiangText(
        "xj-centers-quote",
        "When a person cannot freely leave, the difference between 'education' and 'coercion' cannot be defined only by those who control the facility."
    );


    /* ==================================================
       05 · SURVEILLANCE
    ================================================== */

    setXinjiangText(
        "xj-surveillance-title",
        "When Surveillance Enters Everyday Life"
    );

    setXinjiangText(
        "xj-surveillance-1",
        "Xinjiang developed a highly digitized and intensive public-security system. The UN assessment and other research have documented measures including camera surveillance, checkpoints, identity checks, inspections of mobile-phone data, and large-scale collection of personal information."
    );

    setXinjiangText(
        "xj-surveillance-2",
        "Surveillance technology by itself does not automatically constitute a human rights violation. The deeper concern is what happens when large-scale data collection becomes connected to ethnicity, religion, social relationships, and assessments of supposed 'extremism risk.'"
    );

    setXinjiangText(
        "xj-surveillance-quote",
        "When the state seeks to know where a person goes, whom they contact, what they believe, and how they live, the boundary between security and private freedom must be questioned."
    );


    /* ==================================================
       06 · RELIGIOUS FREEDOM
    ================================================== */

    setXinjiangText(
        "xj-religion-title",
        "Islam and Religious Freedom"
    );

    setXinjiangText(
        "xj-religion-1",
        "Islam is an important part of the culture and daily life of many Uyghurs. The Chinese government says that its policies in Xinjiang target religious extremism rather than Islam itself and states that normal religious activities are protected according to law."
    );

    setXinjiangText(
        "xj-religion-2",
        "However, the United Nations and international religious-freedom bodies have documented strict restrictions affecting religious life in Xinjiang, including extensive state regulation of religious activities, religious education, religious personnel, and forms of religious expression."
    );

    setXinjiangText(
        "xj-religion-3",
        "The controversy therefore cannot be reduced to whether mosques are allowed to exist. A more important question is how freely ordinary Muslims can practice their faith without political pressure."
    );


    /* ==================================================
       07 · FORCED LABOR
    ================================================== */

    setXinjiangText(
        "xj-labor-title",
        "Forced Labor and 'Labor Transfers'"
    );

    setXinjiangText(
        "xj-labor-1",
        "Xinjiang has also become the subject of serious controversy over employment programs and so-called labor transfers. The Chinese government says these programs reduce poverty, provide vocational skills, and expand employment opportunities."
    );

    setXinjiangText(
        "xj-labor-2",
        "United Nations bodies, International Labour Organization supervisory mechanisms, and other researchers have raised concerns about whether some of these programs involve coercion. Questions include whether workers can genuinely refuse assignments and whether political pressure, surveillance, or the risk of detention affects claims that employment is voluntary."
    );

    setXinjiangText(
        "xj-labor-quote",
        "Whether work is truly 'voluntary' cannot be judged only by whether wages are paid. It also depends on whether a person genuinely has the freedom to say no."
    );


    /* ==================================================
       08 · CULTURE
    ================================================== */

    setXinjiangText(
        "xj-culture-title",
        "Language, Culture, and Identity"
    );

    setXinjiangText(
        "xj-culture-1",
        "Human rights do not only mean that a person has not been imprisoned. Language, religion, family traditions, and ethnic culture are also important parts of personal and collective identity."
    );

    setXinjiangText(
        "xj-culture-2",
        "Controversies surrounding Xinjiang policies also involve Uyghur-language education, religious and cultural expression, children's education, and the amount of space available for traditional culture."
    );

    setXinjiangText(
        "xj-culture-3",
        "The Chinese government emphasizes common development among ethnic groups, education in the national common language, and a shared sense of Chinese national identity. Critics worry that when state-led cultural integration becomes too powerful, the space for minority communities to preserve their own languages, religions, and cultural identities may continue to shrink."
    );


    /* ==================================================
       09 · CHINA'S POSITION
    ================================================== */

    setXinjiangText(
        "xj-china-title",
        "How Does the Chinese Government Respond?"
    );

    setXinjiangText(
        "xj-china-1",
        "The Chinese government strongly rejects allegations of systematic human rights abuses in Xinjiang and has repeatedly accused the United States and other Western countries of politicizing the issue."
    );

    setXinjiangText(
        "xj-china-2",
        "Beijing emphasizes that Xinjiang previously faced threats from terrorism, separatism, and religious extremism. It argues that vocational education, deradicalization programs, and other measures helped reduce violence, improve employment, and maintain social stability."
    );

    setXinjiangText(
        "xj-china-3",
        "The Chinese government also denies the existence of systematic forced labor and describes related employment programs as ordinary policies for employment, poverty reduction, and economic development."
    );

    setXinjiangText(
        "xj-china-quote",
        "Understanding Xinjiang requires knowing how the Chinese government explains its own policies. But the way a government describes a policy cannot replace independent examination of its actual consequences."
    );


    /* ==================================================
       10 · UNITED NATIONS
    ================================================== */

    setXinjiangText(
        "xj-un-title",
        "How Did the United Nations Assess the Situation?"
    );

    setXinjiangText(
        "xj-un-1",
        "On August 31, 2022, the Office of the United Nations High Commissioner for Human Rights published its assessment of human rights concerns in Xinjiang."
    );

    setXinjiangText(
        "xj-un-2",
        "The assessment concluded that serious human rights violations had been committed in Xinjiang. It stated that arbitrary and discriminatory detention of Uyghurs and other predominantly Muslim groups, in the context of broader restrictions on fundamental rights:"
    );

    setXinjiangText(
        "xj-un-quote",
        "'May constitute international crimes, in particular crimes against humanity.'"
    );

    setXinjiangText(
        "xj-un-3",
        "The word 'may' is important. The UN assessment did not issue a judicial ruling that China had committed crimes against humanity. It concluded that the existing situation was serious enough that it may reach that threshold under international law."
    );


    /* ==================================================
       11 · FINAL
    ================================================== */

    setXinjiangText(
        "xj-final-title",
        "Where Are the Limits of National Security?"
    );

    setXinjiangText(
        "xj-final-1",
        "A state has a responsibility to protect its people from terrorism and violence. But counterterrorism does not automatically erase a person's religious freedom, privacy, cultural identity, or right to be free from arbitrary detention."
    );

    setXinjiangText(
        "xj-final-2",
        "If the state can subject a person's life to extensive surveillance and coercive intervention because of religion, ethnic identity, social relationships, or behavior considered risky, then security policies themselves must also be tested against human rights standards."
    );

    setXinjiangText(
        "xj-final-quote",
        "The hardest question is not whether security or freedom matters more. It is whether a government, while protecting security, has the right to take fundamental freedoms away with it."
    );

    setXinjiangText(
        "xj-final-3",
        "National security requires power. The purpose of human rights is, in part, to place limits on that power."
    );


    /* ==================================================
       SOURCES
    ================================================== */

    setXinjiangText(
        "xj-sources-title",
        "Sources and Further Reading"
    );

    setXinjiangText(
        "xj-sources-description",
        "The Xinjiang issue contains highly politicized and conflicting narratives. This project attempts to distinguish between United Nations findings and assessments, the Chinese government's official explanations, and allegations or research presented by other international institutions."
    );


    /* ==================================================
       BACK
    ================================================== */

    setXinjiangText(
        "xj-back-title",
        "Return to Topics"
    );

    setXinjiangText(
        "xj-back-description",
        "Return to all topics to read about Taiwan, Hong Kong, Tibet, religious freedom, the Cultural Revolution, and other issues."
    );

    setXinjiangText(
        "xj-back-button",
        "← Back to All Topics"
    );


    /* ==================================================
       FOOTER
    ================================================== */

    setXinjiangText(
        "xj-footer-title",
        "Freedom · Democracy · Human Rights · Rule of Law"
    );

    setXinjiangText(
        "xj-footer-subtitle",
        "Xinjiang · Uyghurs and Human Rights"
    );

}


/* ==================================================
   CHINESE
================================================== */

function setXinjiangChinese() {

    document.title =
        "新疆 | 维吾尔人、国家安全与人权";


    /* HEADER */

    setXinjiangText("xj-site-name", "我的网站");
    setXinjiangText("xj-nav-home", "首页");
    setXinjiangText("xj-nav-topics", "专题");
    setXinjiangText("xj-nav-sources", "文献");
    setXinjiangText("xj-nav-about", "关于");


    /* HERO */

    setXinjiangText(
        "xj-title",
        "新疆"
    );

    setXinjiangText(
        "xj-subtitle",
        "维吾尔人、国家安全与人权危机"
    );

    setXinjiangText(
        "xj-intro",
        "自2017年前后开始，新疆成为全球最受争议的人权议题之一。联合国人权高专办记录了针对维吾尔族及其他主要为穆斯林少数民族的大规模任意拘禁、宗教限制、严密监控以及其他严重人权问题。中国政府则认为相关措施属于反恐、去极端化、职业培训和维护社会稳定。两种叙述之间存在巨大冲突。本专题试图追问一个最基本的问题：国家安全的权力，究竟应该在哪里停止？"
    );

    setXinjiangText(
        "xj-start",
        "开始阅读"
    );


    /* 01 */

    setXinjiangText(
        "xj-core-title",
        "反恐，还是大规模人权侵犯？"
    );

    setXinjiangText(
        "xj-core-1",
        "中国政府长期将新疆政策解释为打击恐怖主义、分裂主义和宗教极端主义的必要措施。新疆也确实经历过严重暴力事件和恐怖袭击，国家有保护公众安全的责任。"
    );

    setXinjiangText(
        "xj-core-2",
        "但国家拥有反恐权力，并不意味着这种权力不存在边界。当大规模拘禁、宗教限制、政治教育、数字监控以及对私人生活的干预被同时用于特定民族和宗教群体时，“国家安全”就不再只是一个简单的治安问题。"
    );

    setXinjiangText(
        "xj-core-quote",
        "反恐可以保护人的安全，但“安全”不能成为无限扩大国家权力的理由。"
    );

    setXinjiangText(
        "xj-core-3",
        "新疆真正需要回答的问题，不是国家有没有维护安全的权力，而是这种权力有没有边界。"
    );


    /* 02 */

    setXinjiangText(
        "xj-uyghur-title",
        "维吾尔人是谁？"
    );

    setXinjiangText(
        "xj-uyghur-1",
        "维吾尔族是主要生活在新疆的突厥语民族，拥有自己的语言、文化传统和民族身份，多数维吾尔人信仰伊斯兰教。"
    );

    setXinjiangText(
        "xj-uyghur-2",
        "新疆位于中国西北部，与多个中亚和南亚国家接壤。民族、宗教、历史、国家安全以及政治认同长期交织在这一地区。"
    );

    setXinjiangText(
        "xj-uyghur-3",
        "因此，新疆问题不能简单理解成一场普通的治安行动。它同时涉及一个民族能否保护自己的语言、宗教、文化和私人生活，以及国家能够在多大程度上以安全为理由干预这些权利。"
    );


    /* 03 */

    setXinjiangText(
        "xj-detention-title",
        "大规模拘禁与“职业教育培训中心”"
    );

    setXinjiangText(
        "xj-detention-1",
        "从2017年前后开始，新疆出现了大规模“职业技能教育培训中心”。中国政府表示，这些设施用于职业教育、反恐和去极端化，目的是帮助受到极端主义影响的人学习法律、语言和职业技能。"
    );

    setXinjiangText(
        "xj-detention-2",
        "然而，联合国人权高专办在2022年的评估中认为，新疆存在严重的人权侵犯，并认定存在针对维吾尔族及其他主要为穆斯林群体的大规模任意和歧视性拘禁。"
    );

    setXinjiangText(
        "xj-detention-3",
        "争议的核心也正在这里：如果一个人无法自由决定是否进入设施，无法自由离开，并在其中受到强制性的政治和思想教育，那么“培训”与“拘禁”之间的界线在哪里？"
    );

    setXinjiangText(
        "xj-detention-quote",
        "改变一个设施的名称，并不能改变判断自由是否被剥夺的标准。"
    );


    /* 04 */

    setXinjiangText(
        "xj-centers-title",
        "“培训中心”内部发生了什么？"
    );

    setXinjiangText(
        "xj-centers-1",
        "联合国人权高专办采访的部分人员表示，他们在相关设施中无法自由离开，并接受政治教育、法律教育和普通话课程。"
    );

    setXinjiangText(
        "xj-centers-2",
        "联合国评估还记录了酷刑和其他形式虐待的指控，包括殴打、强制医疗以及性暴力等报告。联合国认为，一些关于酷刑或虐待的指控具有可信度。"
    );

    setXinjiangText(
        "xj-centers-3",
        "这些指控极其严重，但同样需要准确表述：联合国报告记录并评估的是相关证词、文件和信息，并不是说每一个设施中的每一个人都经历了完全相同的待遇。"
    );

    setXinjiangText(
        "xj-centers-quote",
        "当一个人无法自由离开，“教育”与“强制”之间的区别就不能只由管理者定义。"
    );


    /* 05 */

    setXinjiangText(
        "xj-surveillance-title",
        "当监控进入日常生活"
    );

    setXinjiangText(
        "xj-surveillance-1",
        "新疆建立了高度数字化和密集化的公共安全体系。联合国评估及其他研究记录了摄像监控、检查站、身份检查、手机数据检查以及大规模个人信息收集等措施。"
    );

    setXinjiangText(
        "xj-surveillance-2",
        "监控技术本身并不必然意味着人权侵犯。真正的问题在于，当大规模数据收集与民族、宗教、社会关系和所谓“极端主义风险”联系起来时，普通人的私人生活可能受到怎样的影响。"
    );

    setXinjiangText(
        "xj-surveillance-quote",
        "当国家试图知道一个人去了哪里、和谁联系、相信什么、如何生活，安全与私人自由之间的界线就必须被重新追问。"
    );


    /* 06 */

    setXinjiangText(
        "xj-religion-title",
        "伊斯兰信仰与宗教自由"
    );

    setXinjiangText(
        "xj-religion-1",
        "伊斯兰教是许多维吾尔人文化和生活的重要组成部分。中国政府表示，新疆的政策针对的是宗教极端主义，而不是伊斯兰教本身，并强调依法保护正常宗教活动。"
    );

    setXinjiangText(
        "xj-religion-2",
        "然而，联合国和国际宗教自由机构记录了新疆宗教生活受到严格限制的问题，包括对宗教活动、宗教教育、宗教人员以及宗教表达的高度管理。"
    );

    setXinjiangText(
        "xj-religion-3",
        "争议因此并不只是“中国是否允许清真寺存在”。更重要的问题是：普通穆斯林能够在多大程度上不受政治压力地实践自己的信仰。"
    );


    /* 07 */

    setXinjiangText(
        "xj-labor-title",
        "强迫劳动与“劳动力转移”"
    );

    setXinjiangText(
        "xj-labor-1",
        "新疆还存在围绕就业项目和“劳动力转移”的严重争议。中国政府认为这些项目能够减少贫困、提供职业技能并扩大就业机会。"
    );

    setXinjiangText(
        "xj-labor-2",
        "联合国机构、国际劳工组织监督机制以及其他研究则对部分项目是否具有强制性提出关切。争议包括劳动者能否真正拒绝工作安排，以及政治压力、监控和拘禁风险是否会影响所谓“自愿就业”。"
    );

    setXinjiangText(
        "xj-labor-quote",
        "一份工作是否属于“自愿”，不能只看有没有工资，还必须看一个人是否真正拥有说“不”的自由。"
    );


    /* 08 */

    setXinjiangText(
        "xj-culture-title",
        "语言、文化与身份"
    );

    setXinjiangText(
        "xj-culture-1",
        "人权并不只意味着一个人没有被关进监狱。语言、宗教、家庭传统以及民族文化同样构成一个人身份的重要部分。"
    );

    setXinjiangText(
        "xj-culture-2",
        "围绕新疆政策的争议也涉及维吾尔语言教育、宗教文化表达、儿童教育以及传统文化能够保留多少空间。"
    );

    setXinjiangText(
        "xj-culture-3",
        "中国政府强调各民族共同发展、国家通用语言教育和中华民族共同体意识。批评者则担忧，当国家推动文化整合的力量过于强大时，少数民族保持自身语言、宗教和文化身份的空间可能受到持续压缩。"
    );


    /* 09 */

    setXinjiangText(
        "xj-china-title",
        "中国政府如何回应？"
    );

    setXinjiangText(
        "xj-china-1",
        "中国政府强烈否认新疆存在所谓“系统性人权侵犯”，并长期批评美国及其他西方国家将新疆问题政治化。"
    );

    setXinjiangText(
        "xj-china-2",
        "北京强调新疆曾长期受到恐怖主义、分裂主义和宗教极端主义威胁，认为职业教育培训和去极端化措施有助于减少暴力事件、改善就业和维护社会稳定。"
    );

    setXinjiangText(
        "xj-china-3",
        "中国政府也否认存在系统性的强迫劳动，并认为相关就业项目属于正常的就业、减贫和经济发展政策。"
    );

    setXinjiangText(
        "xj-china-quote",
        "理解新疆问题，必须知道中国政府如何解释自己的政策；但政府如何描述一种政策，并不能替代对其实际后果的独立审视。"
    );


    /* 10 */

    setXinjiangText(
        "xj-un-title",
        "联合国如何评价？"
    );

    setXinjiangText(
        "xj-un-1",
        "2022年8月31日，联合国人权事务高级专员办事处发布关于新疆人权状况的评估。"
    );

    setXinjiangText(
        "xj-un-2",
        "报告认为，新疆发生了严重的人权侵犯。对维吾尔族及其他主要为穆斯林群体实施的任意和歧视性拘禁，在更广泛限制基本权利的背景下："
    );

    setXinjiangText(
        "xj-un-quote",
        "“可能构成国际罪行，特别是危害人类罪。”"
    );

    setXinjiangText(
        "xj-un-3",
        "这里的“可能”非常重要。联合国报告没有在司法意义上判决中国已经犯下危害人类罪，但认为现有情况严重到可能达到这一国际法门槛。"
    );


    /* 11 */

    setXinjiangText(
        "xj-final-title",
        "国家安全的边界在哪里？"
    );

    setXinjiangText(
        "xj-final-1",
        "国家当然有保护公民免受恐怖主义和暴力伤害的责任。但反恐不能自动取消一个人的宗教自由、隐私权、文化身份以及免受任意拘禁的权利。"
    );

    setXinjiangText(
        "xj-final-2",
        "如果国家可以因为一个人的宗教、民族身份、社会关系或者被认为具有风险的行为，就对他的生活进行全面监控和强制干预，那么安全政策本身也必须接受人权标准的检验。"
    );

    setXinjiangText(
        "xj-final-quote",
        "真正困难的问题从来不是“安全重要还是自由重要”。而是在保护安全的时候，一个政府究竟有没有权力把人的基本自由一起带走。"
    );

    setXinjiangText(
        "xj-final-3",
        "国家安全需要权力。人权存在的意义，正是为这种权力划出边界。"
    );


    /* SOURCES */

    setXinjiangText(
        "xj-sources-title",
        "文献与进一步阅读"
    );

    setXinjiangText(
        "xj-sources-description",
        "新疆问题存在高度政治化和相互冲突的叙述。本专题尽可能区分联合国的调查与评估、中国政府的官方解释，以及其他国际机构提出的指控和研究。"
    );


    /* BACK */

    setXinjiangText(
        "xj-back-title",
        "返回专题"
    );

    setXinjiangText(
        "xj-back-description",
        "返回所有专题，阅读台湾、香港、西藏、宗教自由、文化大革命及其他议题。"
    );

    setXinjiangText(
        "xj-back-button",
        "← 返回所有专题"
    );


    /* FOOTER */

    setXinjiangText(
        "xj-footer-title",
        "自由 · 民主 · 人权 · 法治"
    );

    setXinjiangText(
        "xj-footer-subtitle",
        "新疆 · 维吾尔人与人权"
    );

}


/* ==================================================
   PAGE REVEAL
================================================== */

document.addEventListener("DOMContentLoaded", function () {

    document
        .querySelectorAll(".religion-reveal")
        .forEach(function (element) {

            element.classList.add("religion-visible");

        });

});