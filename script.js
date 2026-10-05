let language = "zh";


/* ========================================
   修改文字
======================================== */

function setText(id, text) {

    const element = document.getElementById(id);

    if (element) {
        element.textContent = text;
    }

}


/* ========================================
   LANGUAGE
======================================== */

function changeLanguage() {

    if (language === "zh") {

        document.documentElement.lang = "en";


        /* ================================
           导航
        ================================ */

        setText("site-name", "My Website");
        setText("nav-home", "Home");
        setText("nav-articles", "Articles");
        setText("nav-resources", "Resources");
        setText("nav-about", "About");

        setText(
            "language-button",
            "中文"
        );


        /* ================================
           首页
        ================================ */

        setText(
            "slogan-text",
            "Down with Xi Jinping and the Chinese Communist Party!"
        );

        setText(
            "main-title",
            "Freedom · Democracy · Human Rights · Rule of Law"
        );

        setText(
            "main-description",
            "Document facts, express views, and provide information and resources."
        );

        setText(
            "learn-more",
            "Learn More"
        );

        setText(
            "intro-title",
            "Why Did We Create This Website?"
        );

        setText(
            "intro-text",
            "Through public information, articles, and source materials, we focus on freedom, democracy, human rights, and the rule of law while providing readers with resources for further understanding."
        );


        /* ================================
           MAIN
        ================================ */

        setText(
            "explore-title",
            "Learn More"
        );

        setText(
            "explore-description",
            "Explore historical topics, articles, and public sources concerning events that deserve to be documented, discussed, and remembered."
        );


        /* ================================
           本站立场
        ================================ */

        setText(
            "position-title",
            "Our Position"
        );

        setText(
            "position-p1",
            "This website opposes one-party rule by the Chinese Communist Party, political repression, censorship, and restrictions on fundamental freedoms."
        );

        setText(
            "position-p2",
            "We support freedom, democracy, human rights, and the rule of law, including the rights of citizens to express political views, criticize government, access information, and participate in public affairs."
        );

        setText(
            "position-p3",
            "Regarding Hong Kong, Taiwan, Tibet, and Xinjiang, this website supports the right of local people to express their political will and determine their own future."
        );

        setText(
            "position-ending",
            "Speak for freedom. Speak for democracy."
        );


        /* ================================
           历史专题
        ================================ */

        setText(
            "topics-title",
            "Historical Topics"
        );

        setText(
            "topics-description",
            "Begin with specific historical events. Each topic will organize timelines, historical materials, and relevant sources."
        );

        setText(
            "topic-cr",
            "The Cultural Revolution"
        );

        setText(
            "topic-cr-status",
            "Read Topic →"
        );

        setText(
            "topic-1989",
            "1989 Beijing Protests and June Fourth"
        );

        setText(
            "topic-1989-status",
            "Coming Soon"
        );

        setText(
            "topic-leap",
            "The Great Leap Forward and Great Famine"
        );

        setText(
            "topic-leap-status",
            "Coming Soon"
        );


        /* ================================
           地区议题
        ================================ */

        setText(
            "regions-title",
            "Regional & Political Issues"
        );

        setText(
            "regions-description",
            "Historical, political, human-rights, and social issues concerning Hong Kong, Taiwan, Tibet, and Xinjiang will be organized separately."
        );

        setText(
            "region-hk",
            "Hong Kong"
        );

        setText(
            "region-tw",
            "Taiwan"
        );

        setText(
            "region-tibet",
            "Tibet"
        );

     setText(
    "region-xinjiang",
    "Xinjiang · Uyghurs & Human Rights"
);
        setText(
            "region-hk-status",
            "Coming Soon"
        );

        setText(
            "region-tw-status",
            "Coming Soon"
        );

        setText(
            "region-tibet-status",
            "Coming Soon"
        );

setText(
    "region-xinjiang-status",
    "Read Topic →"
);

        /* ================================
           宗教议题
        ================================ */

        setText(
            "religion-title",
            "Religious Issues"
        );

        setText(
            "religion-description",
            "This section focuses on religious freedom and freedom of belief in China, documenting religious and belief communities that have faced state repression, restrictions, or persecution, while organizing relevant policies, historical events, human rights reports, individual cases, and public records."
        );

        setText(
            "religion-christianity",
            "Christianity and House Churches"
        );

        setText(
            "religion-christianity-status",
            "Coming Soon"
        );

        setText(
            "religion-catholicism",
            "Catholicism and Underground Churches"
        );

        setText(
            "religion-catholicism-status",
            "Coming Soon"
        );

        setText(
            "religion-islam",
            "Islam and Uyghur Muslims"
        );

        setText(
            "religion-islam-status",
            "Coming Soon"
        );

        setText(
            "religion-tibetan",
            "Tibetan Buddhism"
        );

        setText(
            "religion-tibetan-status",
            "Coming Soon"
        );

        setText(
            "religion-falungong",
            "Falun Gong"
        );

        setText(
            "religion-falungong-status",
            "Coming Soon"
        );


        /* ================================
           文章
        ================================ */

        setText(
            "articles-title",
            "Articles & Perspectives"
        );

        setText(
            "articles-description",
            "Articles and perspectives concerning history, freedom, democracy, human rights, the rule of law, and public affairs."
        );

        setText(
            "article-one-type",
            "History"
        );

        setText(
            "article-one-title",
            "Why Must Some History Never Be Forgotten?"
        );

        setText(
            "article-two-type",
            "Freedom & Democracy"
        );

        setText(
            "article-two-title",
            "Why Must a Society Allow People to Criticize Political Power?"
        );

        setText(
            "article-three-type",
            "Political Institutions"
        );

        setText(
            "article-three-title",
            "Why Must Political Power Be Constrained?"
        );

        setText(
            "articles-coming",
            "More articles coming soon"
        );


        /* ================================
           资料
        ================================ */

        setText(
            "resources-title",
            "Resources & Archives"
        );

        setText(
            "resources-description",
            "Historical archives, public documents, research reports, news coverage, photographs, and video materials will be organized here."
        );

        setText(
            "resource-history",
            "Historical Archives"
        );

        setText(
            "resource-history-text",
            "Historical events, timelines, and public records"
        );

        setText(
            "resource-rights",
            "Human Rights"
        );

        setText(
            "resource-rights-text",
            "Human-rights reports, civil rights, and related records"
        );

        setText(
            "resource-censorship",
            "Censorship & Information Control"
        );

        setText(
            "resource-censorship-text",
            "Internet, media, and freedom-of-expression materials"
        );

        setText(
            "resource-reports",
            "International Reports"
        );

        setText(
            "resource-reports-text",
            "Reports from international organizations, governments, and research institutions"
        );

        setText(
            "resource-news",
            "News Archives"
        );

        setText(
            "resource-news-text",
            "News reports, interviews, and historical coverage"
        );

        setText(
            "resource-media",
            "Photos & Video"
        );

        setText(
            "resource-media-text",
            "Historical photographs, videos, and visual records"
        );


        /* ================================
           底部
        ================================ */

        setText(
            "ending-title",
            "Freedom · Democracy · Human Rights · Rule of Law"
        );

        setText(
            "ending-text",
            "Document history, preserve information, and give more people the opportunity to understand and think."
        );

        setText(
            "ending-about",
            "About This Website"
        );

        setText(
            "ending-contact",
            "Contact Us"
        );


        /* ================================
           ABOUT
        ================================ */

        setText(
            "about-title",
            "About This Website"
        );

        setText(
            "about-p1",
            "This website is created and maintained by an independent developer. It was created to document events that deserve to be remembered, discussed, and reconsidered rather than allowing history to remain in silence."
        );

        setText(
            "about-p2",
            "Throughout the history of Chinese Communist Party rule, many events remain controversial, deeply influential, or gradually forgotten. Political power may shape narratives, but it should not determine what people are allowed to remember. Time may cause memories to fade, but events that occurred should not disappear from public discussion."
        );

        setText(
            "about-p3",
            "We will not choose to forget a period of history simply because it is uncomfortable, nor assume that a voice is unworthy of being heard simply because it has been suppressed. Questioning political power, preserving historical memory, and allowing different political views to exist are essential parts of a free society."
        );

        setText(
            "about-p4",
            "This website explicitly supports freedom, democracy, human rights, and the rule of law. We believe genuine social progress should be built upon confronting facts, permitting criticism, respecting individual rights, and allowing open discussion."
        );

        setText(
            "about-quote",
            "Some things may be hidden, but they should not be forgotten."
        );

        setText(
            "about-ending",
            "We document. We question. We speak. For freedom, and for democracy."
        );

        setText(
            "contact-title",
            "Contact Us"
        );

        setText(
            "contact-description",
            "If you would like to contact us, provide materials, offer suggestions, or share relevant information, you can reach us through the email address below:"
        );

        setText(
            "back-home",
            "← Back to Home"
        );


        language = "en";


    } else {

        document.documentElement.lang = "zh-CN";


        /* ================================
           导航
        ================================ */

        setText("site-name", "我的网站");
        setText("nav-home", "首页");
        setText("nav-articles", "文章");
        setText("nav-resources", "资料");
        setText("nav-about", "关于");

        setText(
            "language-button",
            "English"
        );


        /* ================================
           首页
        ================================ */

        setText(
            "slogan-text",
            "打倒习近平，打倒共产党！"
        );

        setText(
            "main-title",
            "自由 · 民主 · 人权 · 法治"
        );

        setText(
            "main-description",
            "记录事实，表达观点，提供资料与信息。"
        );

        setText(
            "learn-more",
            "了解更多"
        );

        setText(
            "intro-title",
            "我们为什么建立这个网站？"
        );

        setText(
            "intro-text",
            "我们希望通过资料、文章与公开信息，关注自由、民主、人权与法治，并为读者提供可以进一步了解相关议题的内容。"
        );


        /* ================================
           MAIN
        ================================ */

        setText(
            "explore-title",
            "了解更多"
        );

        setText(
            "explore-description",
            "阅读历史专题、文章与公开资料，了解那些值得被记录、讨论与记住的事件。"
        );


        /* ================================
           本站立场
        ================================ */

        setText(
            "position-title",
            "本站立场"
        );

        setText(
            "position-p1",
            "本站反对中国共产党的一党统治，反对政治压迫、信息审查以及对基本自由的限制。"
        );

        setText(
            "position-p2",
            "我们支持自由、民主、人权与法治，支持公民表达政治观点、批评政府、获取信息以及参与公共事务的权利。"
        );

        setText(
            "position-p3",
            "在香港、台湾、西藏与新疆等议题上，本站支持当地人民表达自身政治意愿与决定自身未来的权利。"
        );

        setText(
            "position-ending",
            "为自由发声，为民主发声。"
        );


        /* ================================
           历史专题
        ================================ */

        setText(
            "topics-title",
            "历史专题"
        );

        setText(
            "topics-description",
            "从具体历史事件开始了解。专题将整理事件经过、时间线、历史资料与相关来源。"
        );

        setText(
            "topic-cr",
            "文化大革命"
        );

        setText(
            "topic-cr-status",
            "阅读专题 →"
        );

        setText(
            "topic-1989",
            "1989年北京抗议与六四事件"
        );

        setText(
            "topic-1989-status",
            "即将推出"
        );

        setText(
            "topic-leap",
            "大跃进与大饥荒"
        );

        setText(
            "topic-leap-status",
            "即将推出"
        );


        /* ================================
           地区议题
        ================================ */

        setText(
            "regions-title",
            "地区与政治议题"
        );

        setText(
            "regions-description",
            "香港、台湾、西藏与新疆相关的历史、政治、人权与社会议题将分别整理。"
        );

        setText(
            "region-hk",
            "香港"
        );

        setText(
            "region-tw",
            "台湾"
        );

        setText(
            "region-tibet",
            "西藏"
        );

        setText(
            "region-xinjiang",
            "新疆"
        );

        setText(
            "region-hk-status",
            "即将推出"
        );

        setText(
            "region-tw-status",
            "即将推出"
        );

        setText(
            "region-tibet-status",
            "即将推出"
        );

        setText(
            "region-xinjiang-status",
            "即将推出"
        );


        /* ================================
           宗教议题
        ================================ */

        setText(
            "religion-title",
            "宗教议题"
        );

        setText(
            "religion-description",
            "关注中国境内的宗教与信仰自由，记录受到国家压制、限制或迫害的宗教与信仰群体，并整理相关政策、历史事件、人权报告、个案与公开资料。"
        );

        setText(
            "religion-christianity",
            "基督教与家庭教会"
        );

        setText(
            "religion-christianity-status",
            "即将推出"
        );

        setText(
            "religion-catholicism",
            "天主教与地下教会"
        );

        setText(
            "religion-catholicism-status",
            "即将推出"
        );

        setText(
            "religion-islam",
            "伊斯兰教与维吾尔穆斯林"
        );

        setText(
            "religion-islam-status",
            "即将推出"
        );

        setText(
            "religion-tibetan",
            "藏传佛教"
        );

        setText(
            "religion-tibetan-status",
            "即将推出"
        );

        setText(
            "religion-falungong",
            "法轮功"
        );

        setText(
            "religion-falungong-status",
            "即将推出"
        );


        /* ================================
           文章
        ================================ */

        setText(
            "articles-title",
            "文章与观点"
        );

        setText(
            "articles-description",
            "关于历史、自由、民主、人权、法治与公共事务的文章和观点。"
        );

        setText(
            "article-one-type",
            "历史"
        );

        setText(
            "article-one-title",
            "为什么有些历史不能被遗忘？"
        );

        setText(
            "article-two-type",
            "自由与民主"
        );

        setText(
            "article-two-title",
            "为什么社会需要允许人们批评权力？"
        );

        setText(
            "article-three-type",
            "政治制度"
        );

        setText(
            "article-three-title",
            "为什么政治权力需要受到制约？"
        );

        setText(
            "articles-coming",
            "更多文章即将推出"
        );


        /* ================================
           资料
        ================================ */

        setText(
            "resources-title",
            "资料与档案"
        );

        setText(
            "resources-description",
            "这里将整理历史档案、公开文件、研究报告、新闻报道、照片与影像资料。"
        );

        setText(
            "resource-history",
            "历史档案"
        );

        setText(
            "resource-history-text",
            "历史事件、时间线与公开记录"
        );

        setText(
            "resource-rights",
            "人权资料"
        );

        setText(
            "resource-rights-text",
            "人权报告、公民权利与相关记录"
        );

        setText(
            "resource-censorship",
            "审查与信息控制"
        );

        setText(
            "resource-censorship-text",
            "网络、媒体与言论自由相关资料"
        );

        setText(
            "resource-reports",
            "国际报告"
        );

        setText(
            "resource-reports-text",
            "国际组织、政府与研究机构报告"
        );

        setText(
            "resource-news",
            "新闻档案"
        );

        setText(
            "resource-news-text",
            "新闻报道、采访与历史新闻"
        );

        setText(
            "resource-media",
            "照片与影像"
        );

        setText(
            "resource-media-text",
            "历史照片、录像与影像记录"
        );


        /* ================================
           底部
        ================================ */

        setText(
            "ending-title",
            "自由 · 民主 · 人权 · 法治"
        );

        setText(
            "ending-text",
            "记录历史，保存资料，让更多人有机会了解和思考。"
        );

        setText(
            "ending-about",
            "关于本站"
        );

        setText(
            "ending-contact",
            "联系我们"
        );


        /* ================================
           ABOUT
        ================================ */

        setText(
            "about-title",
            "关于本站"
        );

        setText(
            "about-p1",
            "本网站由一名独立开发者创建并维护。建立这个网站，并不是为了让历史停留在沉默之中，而是希望记录那些值得被记住、被讨论，也值得被重新审视的事情。"
        );

        setText(
            "about-p2",
            "中国共产党执政以来的历史中，存在许多至今仍具有争议、影响深远，甚至被淡化和遗忘的事件。权力可以改变叙事，却不应该决定人们能够记住什么；时间可以让记忆逐渐模糊，却不意味着曾经发生的事情就应该从公共讨论中消失。"
        );

        setText(
            "about-p3",
            "我们不会因为一段历史令人不适，就选择遗忘；也不会因为一种声音受到压制，就认为它不值得被听见。对权力提出质疑、保存历史记忆、允许不同政治观点存在，本身就是自由社会不可缺少的一部分。"
        );

        setText(
            "about-p4",
            "本站明确支持自由、民主、人权与法治，并希望为无法自由表达的人保留一处声音。我们相信，一个社会真正的进步，应建立在面对事实、允许批评、尊重个人权利以及公开讨论的基础之上。"
        );

        setText(
            "about-quote",
            "有些事情也许会被掩盖，但不应该被遗忘。"
        );

        setText(
            "about-ending",
            "我们记录，我们质疑，我们发声。为了自由，也为了民主。"
        );

        setText(
            "contact-title",
            "联系我们"
        );

        setText(
            "contact-description",
            "如果你希望联系我们、提供资料、提出建议或分享相关信息，可以通过以下邮箱与我们取得联系："
        );

        setText(
            "back-home",
            "← 返回首页"
        );


        language = "zh";

    }

}


/* ========================================
   滚动动画
======================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const elements =
            document.querySelectorAll(".reveal");


        /* 浏览器不支持 IntersectionObserver */

        if (!("IntersectionObserver" in window)) {

            elements.forEach(
                function (element) {

                    element.classList.add("visible");

                }
            );

            return;
        }


        const observer =
            new IntersectionObserver(

                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (entry.isIntersecting) {

                                entry.target
                                    .classList
                                    .add("visible");

                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },

                {
                    threshold: 0.12,
                    rootMargin: "0px 0px -40px 0px"
                }

            );


        elements.forEach(
            function (element) {

                observer.observe(element);

            }
        );

    }
);