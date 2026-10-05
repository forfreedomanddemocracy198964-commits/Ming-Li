/* ==================================================
   TAIWAN PAGE
   Language Switch + Reveal
================================================== */

let taiwanLanguage = "zh";


/* ==================================================
   HELPER
================================================== */

function setTaiwanText(id, text) {

    const element = document.getElementById(id);

    if (element) {
        element.textContent = text;
    }

}


/* ==================================================
   LANGUAGE BUTTON
================================================== */

function changeTaiwanLanguage() {

    const button = document.getElementById("language-button");

    if (taiwanLanguage === "zh") {

        taiwanLanguage = "en";

        document.documentElement.lang = "en";

        setTaiwanEnglish();

        if (button) {
            button.textContent = "中文";
        }

    } else {

        taiwanLanguage = "zh";

        document.documentElement.lang = "zh-CN";

        setTaiwanChinese();

        if (button) {
            button.textContent = "English";
        }

    }

}


/* ==================================================
   ENGLISH
================================================== */

function setTaiwanEnglish() {

    document.title =
        "Taiwan | Democracy, Self-Determination and Cross-Strait Relations";


    /* HEADER */

    setTaiwanText(
        "tw-site-name",
        "My Website"
    );

    setTaiwanText(
        "tw-nav-home",
        "Home"
    );

    setTaiwanText(
        "tw-nav-topics",
        "Topics"
    );

    setTaiwanText(
        "tw-nav-sources",
        "Sources"
    );

    setTaiwanText(
        "tw-nav-about",
        "About"
    );


    /* HERO */

    setTaiwanText(
        "tw-title",
        "Taiwan"
    );

    setTaiwanText(
        "tw-subtitle",
        "Democracy, Self-Determination, and Pressure from Beijing"
    );

    setTaiwanText(
        "tw-intro",
        "Taiwan has its own elected government, military, legal system, and democratic elections. Since 1949, the government of the People's Republic of China has never exercised control over Taiwan, yet Beijing continues to claim Taiwan as part of China and retains a legal basis for using what it calls 'non-peaceful means' under certain circumstances. The Taiwan issue is therefore not only a complex historical and sovereignty dispute, but also raises a more direct question: how should Taiwan's political future be decided?"
    );

    setTaiwanText(
        "tw-start",
        "Start Reading"
    );


    /* ==================================================
       01 · CORE QUESTION
    ================================================== */

    setTaiwanText(
        "tw-question-title",
        "Who Should Decide Taiwan's Future?"
    );

    setTaiwanText(
        "tw-question-1",
        "Taiwan today has competitive elections, peaceful transfers of political power, an elected president, and an elected legislature. This system did not always exist. Taiwan experienced decades of martial law and authoritarian rule before martial law was lifted in 1987, followed by continuing democratic reforms."
    );

    setTaiwanText(
        "tw-question-2",
        "In 1996, Taiwan held its first direct presidential election. From that point onward, presidential political authority came directly from voters. For Taiwanese society, the question of who should decide Taiwan's future is therefore not only about history and territory. It is also a question about a fundamental principle of democratic politics."
    );

    setTaiwanText(
        "tw-question-quote",
        "When a society can already choose its own government through elections, who should have the right to decide its future?"
    );


    /* ==================================================
       02 · TWO SIDES
    ================================================== */

    setTaiwanText(
        "tw-two-title",
        "After 1949: Two Different Governments"
    );

    setTaiwanText(
        "tw-two-1",
        "After the Chinese Civil War reached a decisive turning point in 1949, the People's Republic of China was established on the mainland, while the government of the Republic of China relocated to Taiwan. Since then, the two sides of the Taiwan Strait have been governed separately by different governments."
    );

    setTaiwanText(
        "tw-two-2",
        "The government of the People's Republic of China claims that Taiwan is part of China and identifies 'reunification' as a political objective. Within Taiwan, however, political views differ widely, including support for maintaining the status quo, unification, Taiwanese independence, and other positions."
    );

    setTaiwanText(
        "tw-two-3",
        "Taiwanese society therefore cannot accurately be reduced to a single political voice. The deeper question is whether Taiwan's people can continue using democratic institutions to express and determine their own political choices despite profound disagreements."
    );


    /* ==================================================
       03 · DEMOCRATIZATION
    ================================================== */

    setTaiwanText(
        "tw-democracy-title",
        "Taiwan Was Not Always a Democracy"
    );

    setTaiwanText(
        "tw-democracy-1",
        "Taiwan's democratic system did not emerge automatically. Postwar Taiwan experienced a long period of martial law during which political rights and civil liberties were heavily restricted. After years of social movements and political reform, martial law was lifted in 1987."
    );

    setTaiwanText(
        "tw-democracy-2",
        "Restrictions on political parties and the media were gradually loosened, representative institutions were reformed, and direct presidential elections were eventually introduced in 1996. Taiwan has since experienced multiple peaceful transfers of power between political parties."
    );

    setTaiwanText(
        "tw-democracy-quote",
        "Taiwan's democracy today emerged only after decades of authoritarian rule, social struggle, and institutional reform."
    );


    /* ==================================================
       04 · BEIJING'S POSITION
    ================================================== */

    setTaiwanText(
        "tw-beijing-title",
        "How Does Beijing Define the Taiwan Issue?"
    );

    setTaiwanText(
        "tw-beijing-1",
        "The government of the People's Republic of China upholds its One-China Principle. It maintains that there is only one China, that Taiwan is part of China, and that the government of the People's Republic of China is the sole legal government representing all of China."
    );

    setTaiwanText(
        "tw-beijing-2",
        "Beijing states that it seeks reunification through peaceful means and has long proposed 'One Country, Two Systems' as a framework for Taiwan after unification. At the same time, Beijing has not completely renounced the possible use of force."
    );


    /* ==================================================
       05 · ANTI-SECESSION LAW
    ================================================== */

    setTaiwanText(
        "tw-law-title",
        "'Non-Peaceful Means' Written Into Law"
    );

    setTaiwanText(
        "tw-law-1",
        "In 2005, the People's Republic of China adopted the Anti-Secession Law. The law discusses peaceful reunification through consultation and negotiation, but it also establishes circumstances under which the state may employ what it calls 'non-peaceful means and other necessary measures.'"
    );

    setTaiwanText(
        "tw-law-2",
        "Article 8 states that such measures may be used if forces seeking Taiwan independence cause the fact of Taiwan's secession from China, if major incidents leading to Taiwan's secession occur, or if possibilities for peaceful reunification are completely exhausted."
    );

    setTaiwanText(
        "tw-law-quote",
        "When 'non-peaceful means' remain an option written into law, Taiwan faces not only a political dispute but also a real security concern."
    );


    /* ==================================================
       06 · PUBLIC OPINION
    ================================================== */

    setTaiwanText(
        "tw-poll-title",
        "What Does Taiwanese Society Say?"
    );

    setTaiwanText(
        "tw-poll-description",
        "In August 2026, Taiwan's Mainland Affairs Council commissioned the Election Study Center at National Chengchi University to conduct a telephone survey. The survey included 1,086 valid responses from Taiwanese residents aged 20 and above, with a sampling error of ±2.97 percentage points at the 95% confidence level."
    );

    setTaiwanText(
        "tw-poll-one",
        "Oppose 'One Country, Two Systems'"
    );

    setTaiwanText(
        "tw-poll-two",
        "Support Taiwan's future being decided by its 23 million people"
    );

    setTaiwanText(
        "tw-poll-three",
        "Support maintaining the status quo in a broad sense"
    );

    setTaiwanText(
        "tw-poll-note",
        "These figures do not mean that every person in Taiwan holds the same political position. The survey itself shows that maintaining the status quo remains an important preference within Taiwanese political opinion."
    );


    /* ==================================================
       07 · CORE PRINCIPLE
    ================================================== */

    setTaiwanText(
        "tw-final-title",
        "Self-Determination Does Not Mean Choosing the Answer for Taiwan"
    );

    setTaiwanText(
        "tw-final-1",
        "Supporting the right of Taiwan's people to determine their own future does not require pretending that Taiwanese society has no internal disagreements. People in Taiwan hold different views on independence, unification, the Republic of China, Taiwanese identity, and maintaining the status quo."
    );

    setTaiwanText(
        "tw-final-2",
        "The democratic principle is not that an outside power should choose a predetermined answer for Taiwan. It is that the people who live in Taiwan should be able to express their political choices without war, military threats, or political coercion."
    );

    setTaiwanText(
        "tw-final-quote",
        "There can be disagreement over what Taiwan's future should be. But the question of who has the right to express and determine that future cannot be separated from the Taiwan issue itself."
    );


    /* ==================================================
       SOURCES
    ================================================== */

    setTaiwanText(
        "tw-sources-title",
        "Sources and Further Reading"
    );

    setTaiwanText(
        "tw-sources-description",
        "This project distinguishes between the official position of the People's Republic of China, the official position of Taiwan's government, public-opinion survey results, and the value judgments expressed in this article. Taiwan's political status is highly contested, and readers should compare sources representing different perspectives."
    );


    /* ==================================================
       BACK
    ================================================== */

    setTaiwanText(
        "tw-back-title",
        "Return to Topics"
    );

    setTaiwanText(
        "tw-back-button",
        "← Back to All Topics"
    );


    /* ==================================================
       FOOTER
    ================================================== */

    setTaiwanText(
        "tw-footer-title",
        "Freedom · Democracy · Human Rights · Rule of Law"
    );

    setTaiwanText(
        "tw-footer-subtitle",
        "Taiwan · Democracy and Self-Determination"
    );

}


/* ==================================================
   CHINESE
================================================== */

function setTaiwanChinese() {

    document.title =
        "台湾 | 民主、自决与两岸关系";


    /* HEADER */

    setTaiwanText(
        "tw-site-name",
        "我的网站"
    );

    setTaiwanText(
        "tw-nav-home",
        "首页"
    );

    setTaiwanText(
        "tw-nav-topics",
        "专题"
    );

    setTaiwanText(
        "tw-nav-sources",
        "文献"
    );

    setTaiwanText(
        "tw-nav-about",
        "关于"
    );


    /* HERO */

    setTaiwanText(
        "tw-title",
        "台湾"
    );

    setTaiwanText(
        "tw-subtitle",
        "民主、自决与来自北京的压力"
    );

    setTaiwanText(
        "tw-intro",
        "台湾拥有自己的民选政府、军队、法律制度与民主选举。自1949年以来，中华人民共和国政府从未实际治理台湾，但北京始终主张台湾属于中国，并保留在特定情况下采取“非和平方式”的法律依据。台湾问题因此不仅是一场复杂的历史与主权争议，也涉及一个更直接的问题：台湾未来的政治安排，应该如何决定？"
    );

    setTaiwanText(
        "tw-start",
        "开始阅读"
    );


    /* 01 */

    setTaiwanText(
        "tw-question-title",
        "台湾的未来应该由谁决定？"
    );

    setTaiwanText(
        "tw-question-1",
        "今天的台湾拥有竞争性选举、政党轮替、民选总统和立法机构。这一制度并非从一开始就存在。台湾曾经历长期戒严和威权统治，直到1987年解除戒严，并在随后数年持续进行民主改革。"
    );

    setTaiwanText(
        "tw-question-2",
        "1996年，台湾举行第一次总统直接选举。从此，总统的政治权力直接来自选民投票。对台湾社会而言，谁能够决定台湾未来，因此不仅是一个关于历史和领土的问题，也是一个关于民主政治基本原则的问题。"
    );

    setTaiwanText(
        "tw-question-quote",
        "当一个社会已经能够通过选票决定自己的政府，它的未来究竟应该由谁决定？"
    );


    /* 02 */

    setTaiwanText(
        "tw-two-title",
        "1949之后：两个不同政府"
    );

    setTaiwanText(
        "tw-two-1",
        "1949年中国内战局势发生决定性变化后，中华人民共和国在中国大陆成立，中华民国政府迁往台湾。此后，海峡两岸长期由两个不同政府分别治理。"
    );

    setTaiwanText(
        "tw-two-2",
        "中华人民共和国政府主张台湾是中国的一部分，并将“完成统一”作为其政治目标。台湾内部则存在不同政治立场，包括支持维持现状、支持统一、支持台湾独立以及其他不同主张。"
    );

    setTaiwanText(
        "tw-two-3",
        "因此，理解台湾问题不能把台湾社会简化成一种单一声音。真正值得关注的是：在存在巨大政治分歧的情况下，台湾居民是否能够继续通过民主制度表达和决定自己的政治选择。"
    );


    /* 03 */

    setTaiwanText(
        "tw-democracy-title",
        "台湾不是一直都是民主社会"
    );

    setTaiwanText(
        "tw-democracy-1",
        "台湾今天的民主制度并不是自然出现的。战后台湾经历了长期戒严时期，政治权利和公民自由曾受到严格限制。经过长期社会运动、政治改革和民主化过程，台湾在1987年解除戒严。"
    );

    setTaiwanText(
        "tw-democracy-2",
        "随后，政党和媒体限制逐渐解除，国会制度进行改革，总统直选最终在1996年实现。台湾也经历了多次和平政党轮替。"
    );

    setTaiwanText(
        "tw-democracy-quote",
        "台湾今天拥有的民主，是经过数十年威权统治、社会抗争与制度改革后形成的。"
    );


    /* 04 */

    setTaiwanText(
        "tw-beijing-title",
        "北京如何定义台湾问题？"
    );

    setTaiwanText(
        "tw-beijing-1",
        "中华人民共和国政府坚持一个中国原则，主张世界上只有一个中国，台湾是中国的一部分，中华人民共和国政府是代表全中国的唯一合法政府。"
    );

    setTaiwanText(
        "tw-beijing-2",
        "北京主张通过和平方式实现统一，并长期提出“一国两制”作为统一后的制度安排。与此同时，北京并没有完全排除使用武力。"
    );


    /* 05 */

    setTaiwanText(
        "tw-law-title",
        "“非和平方式”被写进法律"
    );

    setTaiwanText(
        "tw-law-1",
        "2005年，中华人民共和国通过《反分裂国家法》。该法一方面提出通过协商和谈判实现和平统一，另一方面也规定了可以采取“非和平方式及其他必要措施”的情形。"
    );

    setTaiwanText(
        "tw-law-2",
        "第八条规定，如果出现造成台湾从中国分裂出去的事实、发生导致台湾分裂的重大事变，或“和平统一的可能性完全丧失”，国家可以采取非和平方式及其他必要措施。"
    );

    setTaiwanText(
        "tw-law-quote",
        "当“非和平方式”成为法律保留的选择，台湾社会面对的就不仅是政治争论，也包括现实的安全压力。"
    );


    /* 06 */

    setTaiwanText(
        "tw-poll-title",
        "台湾社会自己怎么说？"
    );

    setTaiwanText(
        "tw-poll-description",
        "2026年8月，台湾大陆委员会委托国立政治大学选举研究中心进行电话调查。有效样本为1,086名20岁以上台湾民众，在95%信赖度下抽样误差为±2.97个百分点。"
    );

    setTaiwanText(
        "tw-poll-one",
        "不赞成“一国两制”"
    );

    setTaiwanText(
        "tw-poll-two",
        "支持台湾未来由台湾2300万人决定"
    );

    setTaiwanText(
        "tw-poll-three",
        "支持“广义维持现状”"
    );

    setTaiwanText(
        "tw-poll-note",
        "这些数字并不意味着所有台湾居民拥有相同政治立场。民调本身反而显示，“维持现状”仍然是台湾政治讨论中非常重要的选择。"
    );


    /* 07 */

    setTaiwanText(
        "tw-final-title",
        "自决，不等于替台湾人决定答案"
    );

    setTaiwanText(
        "tw-final-1",
        "支持台湾人民决定自己的未来，并不等于假装台湾社会内部不存在分歧。台湾居民对于独立、统一、中华民国认同、台湾认同以及维持现状存在不同观点。"
    );

    setTaiwanText(
        "tw-final-2",
        "民主原则真正要求的，不是外部力量替台湾人民选择一个预先设定的答案，而是让生活在台湾的人能够在没有战争、武力威胁和政治胁迫的情况下表达自己的选择。"
    );

    setTaiwanText(
        "tw-final-quote",
        "台湾未来应该是什么，可以存在争论。但谁应该拥有表达和决定这种未来的权利，本身就是台湾问题无法回避的一部分。"
    );


    /* SOURCES */

    setTaiwanText(
        "tw-sources-title",
        "文献与进一步阅读"
    );

    setTaiwanText(
        "tw-sources-description",
        "本专题区分中华人民共和国政府的官方立场、台湾政府的官方立场、民意调查结果与本文的价值判断。两岸政治地位属于高度争议议题，阅读时应比较不同来源及其立场。"
    );


    /* BACK */

    setTaiwanText(
        "tw-back-title",
        "返回专题"
    );

    setTaiwanText(
        "tw-back-button",
        "← 返回所有专题"
    );


    /* FOOTER */

    setTaiwanText(
        "tw-footer-title",
        "自由 · 民主 · 人权 · 法治"
    );

    setTaiwanText(
        "tw-footer-subtitle",
        "台湾 · 民主与自决"
    );

}


/* ==================================================
   PAGE REVEAL
================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        document
            .querySelectorAll(".religion-reveal")
            .forEach(function (element) {

                element.classList.add(
                    "religion-visible"
                );

            });

    }
);