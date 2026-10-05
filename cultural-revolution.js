let crLanguage = "zh";


/* ========================================
   安全修改文字
======================================== */

function setText(id, text) {

    const element = document.getElementById(id);

    if (element) {
        element.textContent = text;
    }

}


/* ========================================
   中文
======================================== */

const crChinese = {

    pageTitle: "文化大革命 | 历史专题",

    "cr-site-name": "我的网站",
    "cr-nav-home": "首页",
    "cr-nav-topics": "专题",
    "cr-nav-sources": "文献",
    "cr-nav-about": "关于",

    "cr-title": "文化大革命",

    "cr-subtitle":
        "十年政治运动、社会动荡与历史创伤",

    "cr-intro":
        "文化大革命是中华人民共和国历史上影响最深远的政治运动之一。从1966年至1976年，中国的政治、教育、文化和社会秩序受到巨大冲击。政治斗争、群众运动、政治迫害和暴力冲突席卷全国，数以千万计的人受到不同程度的影响。",

    "cr-start": "开始阅读",


    "numbers-title":
        "这场运动造成了什么？",

    "numbers-description":
        "由于统计范围、档案完整程度和研究方法不同，文化大革命的伤亡数字并不存在完全统一的统计。以下数字来自斯坦福大学社会学家 Andrew G. Walder 对大量中国地方志及相关资料的研究估计。",

    "death-number":
        "约 110万—160万",

    "death-label":
        "研究估计的死亡人数",

    "victim-number":
        "约 2200万—3000万",

    "victim-label":
        "遭受不同形式政治迫害的直接受害者",

    "years-label":
        "文化大革命通常所指的十年时期",

    "numbers-note":
        "注：这些数字是研究估计，而不是不存在争议的最终统计。不同学者采用不同资料和方法，因此可能得出不同结果。",


    "overview-title":
        "什么是文化大革命？",

    "overview-1":
        "文化大革命，全称“无产阶级文化大革命”，通常指1966年至1976年发生在中国的一场大规模政治和社会运动。这场运动由毛泽东发动，并迅速从中国共产党内部的政治斗争扩展到学校、政府机关、工厂、农村和社会生活的许多领域。",

    "overview-2":
        "文革初期，大量青年学生组成红卫兵组织。教师、知识分子、干部以及被认定为“阶级敌人”的普通人都可能成为政治批判的对象。随着运动不断扩大，抄家、批斗、政治清洗、派系冲突和暴力在许多地区发生。",

    "overview-3":
        "文化大革命并不是一个单一事件，而是一段持续十年的复杂历史时期。不同地区和不同阶段的情况存在很大差异。理解文革，需要同时研究最高层政治斗争、群众运动、国家权力、社会暴力以及普通人的个人经历。",


    "background-title":
        "为什么会发生？",

    "background-1":
        "文化大革命的形成与当时中国的政治环境、意识形态以及中国共产党内部的权力和路线斗争密切相关。大跃进结束以后，中国领导层内部对于经济政策、阶级斗争以及国家未来发展方向出现明显分歧。",

    "background-2":
        "刘少奇、邓小平等领导人参与推动经济调整。与此同时，毛泽东越来越担心共产党内部出现所谓“修正主义”，并认为阶级斗争仍然需要继续。",

    "background-3":
        "1966年5月，中共中央发布“五一六通知”。这一时期通常被视为文化大革命正式发动的重要节点。随后，政治运动迅速进入学校、党政机关和整个社会。",


    "redguard-title":
        "红卫兵与群众运动",

    "redguard-1":
        "1966年，红卫兵组织首先在北京学校中迅速发展，随后扩展到全国。大量青年学生投入政治运动，批判学校领导、教师、知识分子以及被认定为政治敌人的人。",

    "redguard-2":
        "毛泽东公开支持红卫兵运动，并在北京多次接见来自全国各地的红卫兵。红卫兵由此成为文化大革命早期最具有代表性的群众政治力量之一。",

    "redguard-3":
        "但红卫兵并不是一个统一组织。不同派别之间存在严重的政治冲突，后来一些地区的派系斗争进一步发展成暴力冲突。",


    "four-title":
        "“破四旧”与传统文化",

    "four-1":
        "文革初期提出破除“旧思想、旧文化、旧风俗、旧习惯”，通常被称为“破四旧”。",

    "four-2":
        "在这一运动中，一些寺庙、历史建筑、文物、书籍和私人收藏遭到破坏。一些传统文化、宗教活动和社会习俗也受到政治批判。",

    "four-3":
        "许多普通家庭同样受到影响。抄家以及对个人政治背景的调查在一些地区广泛发生，家庭出身和过去经历可能直接影响一个人在政治运动中的处境。",


    "persecution-title":
        "批斗、迫害与死亡",

    "persecution-1":
        "随着运动扩大，大量干部、教师、知识分子以及普通人受到政治审查和批判。公开批斗会成为文化大革命时期极具代表性的政治活动之一。",

    "persecution-2":
        "一些被批判者遭受公开羞辱、拘禁、殴打、酷刑或其他形式的暴力。不同地区的情况和严重程度并不相同，但政治迫害和暴力成为研究文化大革命无法回避的重要部分。",

    "persecution-3":
        "Andrew G. Walder 根据来自2213个县、市地方志的资料，结合内部调查报告和统计方法，将文革相关死亡人数估计在约110万至160万人之间，并估计约2200万至3000万人直接遭受过某种形式的政治迫害。这些数字属于研究估计，并不是一个不存在争议的官方最终统计。",


    "purge-title":
        "中共高层的政治清洗",

    "purge-1":
        "文化大革命同时伴随着剧烈的中共内部政治斗争。时任国家主席刘少奇成为最重要的政治打击对象之一，被指责为所谓“党内最大的走资本主义道路的当权派”。",

    "purge-2":
        "刘少奇随后失去政治职务，并在长期迫害和拘禁中于1969年去世。邓小平同样在文革期间受到政治打击，此后又一度恢复工作，再次被打倒，最终在文革结束后重新复出。",

    "purge-3":
        "大量中央和地方干部在文化大革命期间受到审查、撤职或迫害，原有党政机构和行政体系也受到严重冲击。",


    "violence-title":
        "派系冲突与武斗",

    "violence-1":
        "随着群众组织不断分裂，不同政治派别之间的冲突在一些地区逐渐升级。部分冲突从政治争论发展为严重武斗。",

    "violence-2":
        "1967年至1968年前后，一些城市和地区出现严重的社会混乱。后来，军队以及新建立的革命委员会在重新建立政治秩序的过程中发挥越来越重要的作用。",

    "violence-3":
        "Walder的研究认为，大量死亡并非仅仅来自早期红卫兵暴力和群众派系武斗；相当大部分伤亡发生在后来恢复政治秩序和镇压政治敌人的过程中。",


    "youth-title":
        "上山下乡",

    "youth-1":
        "1960年代末开始，大批城市青年被动员前往农村和边疆地区生活和劳动。这些青年后来通常被称为“知青”。",

    "youth-2":
        "上山下乡改变了一代年轻人的教育、工作和家庭生活轨迹。对许多人而言，这段经历持续多年，并成为文化大革命最重要的社会记忆之一。",


    "lin-title":
        "林彪事件",

    "lin-1":
        "林彪曾经是毛泽东的重要政治盟友。1969年中共九大通过的党章将林彪明确列为毛泽东的接班人。",

    "lin-2":
        "此后林彪与毛泽东之间的政治关系迅速恶化。1971年9月，林彪乘坐的飞机在蒙古坠毁，林彪等机上人员死亡。",

    "lin-3":
        "“九一三事件”成为文化大革命政治史的重要转折点，也严重冲击了此前围绕林彪建立的政治宣传体系。",


    "end-title":
        "文化大革命如何结束？",

    "end-1":
        "1976年，中国政治局势发生连续重大变化。周恩来于1月去世，毛泽东于9月去世。",

    "end-2":
        "1976年10月，江青、张春桥、姚文元和王洪文组成的“四人帮”被逮捕。这一事件通常被视为文化大革命政治上结束的重要标志。",

    "end-3":
        "此后中国政治路线逐渐发生重大变化。邓小平重新复出，中国随后进入改革开放时期。",


    "assessment-title":
        "中共后来如何评价文化大革命？",

    "assessment-1":
        "值得注意的是，文化大革命结束后，中国共产党自身也对这场运动作出了明确的否定性历史评价。",

    "assessment-2":
        "1981年，中共十一届六中全会通过《关于建国以来党的若干历史问题的决议》，对文化大革命进行了系统总结，并认定毛泽东对文化大革命这一全局性、长期的严重错误负有主要责任。",

    "assessment-3":
        "2021年的中共中央历史决议继续维持这一基本评价，称毛泽东在对当时阶级关系和政治形势作出错误判断的情况下发动和领导文化大革命，并称十年内乱使党、国家和人民遭受中华人民共和国成立以来最严重的挫折和损失。",


    "sources-title":
        "文献与进一步阅读",

    "sources-description":
        "本专题将继续增加原始文件、地方志、学术研究、历史档案、照片和影像资料。以下是目前用于本专题的重要资料类型。",

    "source-walder":
        "基于2213个县、市地方志等资料研究文革暴力、镇压、死亡人数和政治迫害规模。",

    "source-agents":
        "对文化大革命中的政治动员、派系冲突、国家权力崩溃与暴力过程进行系统研究。",

    "source-resolution-type":
        "中国共产党历史文件",

    "source-resolution-title":
        "《关于建国以来党的若干历史问题的决议》",

    "source-resolution":
        "1981年通过，是研究中共后来如何正式评价文化大革命的重要原始文件。",

    "source-2021-title":
        "中共中央关于党的百年奋斗重大成就和历史经验的决议",

    "source-2021":
        "2021年的官方历史决议，再次对文化大革命作出否定性评价。",


    "contact-title":
        "有问题？联系我们",

    "contact-text":
        "如果你发现内容需要更正、希望提供历史资料，或者对本专题有任何问题，可以通过电子邮件联系我们。",

    "back-button":
        "返回专题",

    "footer-title":
        "自由 · 民主 · 人权 · 法治",

    "footer-subtitle":
        "文化大革命 · 1966—1976"
};


/* ========================================
   English
======================================== */

const crEnglish = {

    pageTitle: "The Cultural Revolution | Historical Topic",

    "cr-site-name": "My Website",
    "cr-nav-home": "Home",
    "cr-nav-topics": "Topics",
    "cr-nav-sources": "Sources",
    "cr-nav-about": "About",

    "cr-title":
        "The Cultural Revolution",

    "cr-subtitle":
        "A Decade of Political Campaigns, Social Upheaval, and Historical Trauma",

    "cr-intro":
        "The Cultural Revolution was one of the most consequential political movements in the history of the People's Republic of China. From 1966 to 1976, China's political institutions, education system, culture, and social order experienced enormous disruption. Political struggles, mass movements, persecution, and violent conflict spread across the country, affecting tens of millions of people.",

    "cr-start":
        "Start Reading",


    "numbers-title":
        "What Was the Human Cost?",

    "numbers-description":
        "There is no single universally accepted count of Cultural Revolution casualties. Estimates differ because of variations in available archives, geographic coverage, and research methods. The figures below are based on research by Stanford sociologist Andrew G. Walder using a large collection of Chinese local annals and related materials.",

    "death-number":
        "Approx. 1.1–1.6 Million",

    "death-label":
        "Estimated deaths",

    "victim-number":
        "Approx. 22–30 Million",

    "victim-label":
        "Direct victims of various forms of political persecution",

    "years-label":
        "The ten-year period generally identified with the Cultural Revolution",

    "numbers-note":
        "Note: These figures are research estimates, not an undisputed final count. Different scholars have reached different estimates using different sources and methods.",


    "overview-title":
        "What Was the Cultural Revolution?",

    "overview-1":
        "The Cultural Revolution, formally known as the Great Proletarian Cultural Revolution, generally refers to the large-scale political and social movement that took place in China from 1966 to 1976. The movement was launched by Mao Zedong and rapidly expanded from political struggles within the Chinese Communist Party into schools, government institutions, factories, rural communities, and many other areas of social life.",

    "overview-2":
        "During the early Cultural Revolution, large numbers of young students formed Red Guard organizations. Teachers, intellectuals, officials, and ordinary people identified as class enemies could become targets of political criticism. As the movement expanded, home searches, struggle sessions, political purges, factional conflict, and violence occurred in many parts of the country.",

    "overview-3":
        "The Cultural Revolution was not a single event but a complex historical period lasting approximately ten years. Conditions differed greatly across regions and stages. Understanding the period requires examining elite political struggles, mass movements, state power, social violence, and the experiences of ordinary people.",


    "background-title":
        "Why Did It Happen?",

    "background-1":
        "The origins of the Cultural Revolution were closely connected to China's political environment, ideological disputes, and struggles over power and policy within the Chinese Communist Party. After the Great Leap Forward, disagreements emerged within the leadership over economic policy, class struggle, and China's future direction.",

    "background-2":
        "Leaders including Liu Shaoqi and Deng Xiaoping participated in economic readjustment policies. At the same time, Mao Zedong became increasingly concerned about what he considered revisionism within the Communist Party and continued to emphasize class struggle.",

    "background-3":
        "In May 1966, the Chinese Communist Party Central Committee issued the May 16 Notification. This period is commonly treated as a key point in the formal launch of the Cultural Revolution. The political movement subsequently spread rapidly through schools, Party and government institutions, and society.",


    "redguard-title":
        "The Red Guards and Mass Mobilization",

    "redguard-1":
        "In 1966, Red Guard organizations developed rapidly in Beijing schools and soon spread throughout China. Large numbers of young students joined political campaigns targeting school administrators, teachers, intellectuals, officials, and people identified as political enemies.",

    "redguard-2":
        "Mao Zedong publicly supported the Red Guard movement and repeatedly received Red Guards from across the country in Beijing. The Red Guards became one of the most recognizable political forces of the early Cultural Revolution.",

    "redguard-3":
        "The Red Guards were not a single unified organization. Serious political divisions developed among different factions, and in some regions these disputes eventually escalated into violent conflict.",


    "four-title":
        "Destroying the 'Four Olds' and Traditional Culture",

    "four-1":
        "Early in the Cultural Revolution, activists were encouraged to attack the so-called Four Olds: old ideas, old culture, old customs, and old habits.",

    "four-2":
        "During these campaigns, temples, historic buildings, cultural objects, books, and private collections were damaged or destroyed in some areas. Traditional cultural and religious practices were also subjected to political criticism.",

    "four-3":
        "Ordinary families were also affected. Home searches and investigations into political backgrounds became widespread in some areas, while family background and personal history could directly affect an individual's treatment during political campaigns.",


    "persecution-title":
        "Struggle Sessions, Persecution, and Death",

    "persecution-1":
        "As the movement expanded, large numbers of officials, teachers, intellectuals, and ordinary citizens were investigated and politically criticized. Public struggle sessions became one of the most recognizable features of the Cultural Revolution.",

    "persecution-2":
        "Some of those targeted suffered public humiliation, detention, beatings, torture, or other forms of violence. Conditions and severity varied considerably between regions, but political persecution and violence remain essential parts of any serious study of the Cultural Revolution.",

    "persecution-3":
        "Using information from 2,213 county and city annals, together with internal investigation reports and statistical methods, Andrew G. Walder estimated approximately 1.1 to 1.6 million deaths associated with the Cultural Revolution and approximately 22 to 30 million direct victims of some form of political persecution. These figures are scholarly estimates rather than an undisputed official final count.",


    "purge-title":
        "Political Purges Within the Communist Party",

    "purge-1":
        "The Cultural Revolution also involved intense political struggles within the Chinese Communist Party. Liu Shaoqi, then President of the People's Republic of China, became one of the most prominent political targets and was denounced as a leading capitalist-roader within the Party.",

    "purge-2":
        "Liu subsequently lost his political positions and died in 1969 after prolonged persecution and detention. Deng Xiaoping was also politically purged during the Cultural Revolution, later returned to work, was removed again, and ultimately re-emerged after the Cultural Revolution.",

    "purge-3":
        "Large numbers of central and local officials were investigated, removed from office, or persecuted during the Cultural Revolution, while existing Party and government institutions experienced severe disruption.",


    "violence-title":
        "Factional Conflict and Armed Violence",

    "violence-1":
        "As mass organizations divided into competing factions, political conflict escalated in a number of regions. Some disputes developed from political confrontation into serious armed fighting.",

    "violence-2":
        "Around 1967 and 1968, severe social disorder developed in a number of cities and regions. The military and newly established revolutionary committees subsequently played increasingly important roles in rebuilding political order.",

    "violence-3":
        "Walder's research argues that a large share of the deaths did not result solely from early Red Guard violence or factional warfare. A substantial portion occurred during later campaigns to restore political order and repress perceived political enemies.",


    "youth-title":
        "The Sent-Down Youth Movement",

    "youth-1":
        "Beginning in the late 1960s, large numbers of urban young people were mobilized to live and work in rural and frontier regions. These young people later became widely known as sent-down youth.",

    "youth-2":
        "The movement transformed the educational, employment, and family trajectories of an entire generation. For many participants, the experience lasted for years and became one of the most important social memories associated with the Cultural Revolution.",


    "lin-title":
        "The Lin Biao Incident",

    "lin-1":
        "Lin Biao had been one of Mao Zedong's most important political allies. The Party constitution adopted at the Ninth Communist Party Congress in 1969 formally identified Lin as Mao's successor.",

    "lin-2":
        "Political relations between Lin and Mao subsequently deteriorated rapidly. In September 1971, the aircraft carrying Lin Biao crashed in Mongolia, killing Lin and the others aboard.",

    "lin-3":
        "The September 13 Incident became a major turning point in the political history of the Cultural Revolution and severely undermined the political propaganda that had previously surrounded Lin Biao.",


    "end-title":
        "How Did the Cultural Revolution End?",

    "end-1":
        "China experienced a series of major political developments in 1976. Zhou Enlai died in January, and Mao Zedong died in September.",

    "end-2":
        "In October 1976, the group consisting of Jiang Qing, Zhang Chunqiao, Yao Wenyuan, and Wang Hongwen, later known as the Gang of Four, was arrested. This event is commonly regarded as marking the political end of the Cultural Revolution.",

    "end-3":
        "China's political direction subsequently changed substantially. Deng Xiaoping returned to political leadership, and China later entered the period of reform and opening.",


    "assessment-title":
        "How Did the CCP Later Assess the Cultural Revolution?",

    "assessment-1":
        "After the Cultural Revolution ended, the Chinese Communist Party itself issued a strongly negative historical assessment of the movement.",

    "assessment-2":
        "In 1981, the Sixth Plenary Session of the Eleventh Central Committee adopted the Resolution on Certain Questions in the History of Our Party Since the Founding of the People's Republic of China. The resolution systematically reviewed the Cultural Revolution and assigned Mao Zedong primary responsibility for this prolonged and serious error.",

    "assessment-3":
        "The Central Committee's 2021 historical resolution maintained this basic assessment. It stated that Mao launched and led the Cultural Revolution on the basis of an erroneous assessment of class relations and the political situation, and described the decade of turmoil as causing some of the most serious losses and setbacks suffered by the Party, the country, and the people since the founding of the People's Republic.",


    "sources-title":
        "Sources & Further Reading",

    "sources-description":
        "This topic will continue to add primary documents, local annals, academic research, historical archives, photographs, and audiovisual materials. The following are among the important types of sources currently used for this topic.",

    "source-walder":
        "A study based on 2,213 county and city annals and other materials, examining violence, repression, mortality, and the scale of political persecution during the Cultural Revolution.",

    "source-agents":
        "A systematic study of political mobilization, factional conflict, the breakdown of state authority, and violence during the Cultural Revolution.",

    "source-resolution-type":
        "CHINESE COMMUNIST PARTY HISTORICAL DOCUMENT",

    "source-resolution-title":
        "Resolution on Certain Questions in the History of Our Party Since the Founding of the People's Republic of China",

    "source-resolution":
        "Adopted in 1981, this is an important primary document for understanding the Chinese Communist Party's later official assessment of the Cultural Revolution.",

    "source-2021-title":
        "Resolution of the CPC Central Committee on the Major Achievements and Historical Experience of the Party over the Past Century",

    "source-2021":
        "The Party's 2021 historical resolution again gave a strongly negative assessment of the Cultural Revolution.",


    "contact-title":
        "Questions? Contact Us",

    "contact-text":
        "If you believe something should be corrected, would like to provide historical materials, or have questions about this topic, you can contact us by email.",

    "back-button":
        "Back to Topics",

    "footer-title":
        "Freedom · Democracy · Human Rights · Rule of Law",

    "footer-subtitle":
        "The Cultural Revolution · 1966–1976"
};


/* ========================================
   应用语言
======================================== */

function applyCRLanguage(language) {

    const translations =
        language === "en"
            ? crEnglish
            : crChinese;


    document.documentElement.lang =
        language === "en"
            ? "en"
            : "zh-CN";


    document.title = translations.pageTitle;


    Object.keys(translations).forEach(function (id) {

        if (id !== "pageTitle") {
            setText(id, translations[id]);
        }

    });


    setText(
        "language-button",
        language === "en"
            ? "中文"
            : "English"
    );


    crLanguage = language;
}


/* ========================================
   切换语言
======================================== */

function changeCRLanguage() {

    if (crLanguage === "zh") {

        applyCRLanguage("en");

    } else {

        applyCRLanguage("zh");

    }

}


/* ========================================
   滚动出现动画
======================================== */

document.addEventListener("DOMContentLoaded", function () {

    const revealElements =
        document.querySelectorAll(".cr-reveal");


    if (!("IntersectionObserver" in window)) {

        revealElements.forEach(function (element) {
            element.classList.add("cr-visible");
        });

        return;
    }


    const observer =
        new IntersectionObserver(

            function (entries, observerInstance) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "cr-visible"
                        );

                        observerInstance.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.12,
                rootMargin: "0px 0px -40px 0px"
            }

        );


    revealElements.forEach(function (element) {

        observer.observe(element);

    });

});