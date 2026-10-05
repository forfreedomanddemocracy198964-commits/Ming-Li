/* ==================================================
   RELIGION PAGE
================================================== */

let religionLanguage = "zh";


function setReligionText(id, text) {

    const element =
        document.getElementById(id);

    if (element) {
        element.textContent = text;
    }

}


/* ==================================================
   LANGUAGE
================================================== */

function changeReligionLanguage() {

    if (religionLanguage === "zh") {

        religionLanguage = "en";

        document.documentElement.lang = "en";

        setReligionEnglish();

        document.getElementById(
            "language-button"
        ).textContent = "中文";

    } else {

        religionLanguage = "zh";

        document.documentElement.lang = "zh-CN";

        setReligionChinese();

        document.getElementById(
            "language-button"
        ).textContent = "English";

    }

}


/* ==================================================
   ENGLISH
================================================== */

function setReligionEnglish() {

    setReligionText(
        "religion-site-name",
        "My Website"
    );

    setReligionText(
        "religion-nav-home",
        "Home"
    );

    setReligionText(
        "religion-nav-topics",
        "Topics"
    );

    setReligionText(
        "religion-nav-sources",
        "Sources"
    );

    setReligionText(
        "religion-nav-about",
        "About"
    );


    setReligionText(
        "religion-page-title",
        "Religion and Freedom of Belief"
    );

    setReligionText(
        "religion-page-subtitle",
        "Religious regulation, restrictions and communities in China"
    );

    setReligionText(
        "religion-page-intro",
        "China's Constitution states that citizens enjoy freedom of religious belief. At the same time, religious activity is extensively regulated through laws, administrative rules and state-controlled religious institutions. This project documents China's religious policies and the restrictions, state control and human rights concerns affecting different religious and belief communities."
    );

    setReligionText(
        "religion-start",
        "Start Reading"
    );


    setReligionText(
        "religion-overview-title",
        "China's Religious System"
    );

    setReligionText(
        "religion-overview-description",
        "The Chinese government formally recognizes Buddhism, Taoism, Islam, Catholicism and Protestantism. Religious organizations, venues and clergy operate under a state regulatory system. Unregistered religious organizations and communities that refuse to operate within officially approved structures may face varying degrees of restriction and enforcement."
    );

    setReligionText(
        "religion-number-one-label",
        "Major religions formally recognized by the government"
    );

    setReligionText(
        "religion-number-two-label",
        "Revised Regulations on Religious Affairs took effect"
    );

    setReligionText(
        "religion-number-three-label",
        "Article of China's Constitution concerning freedom of religious belief"
    );


    setReligionText(
        "religion-law-title",
        "What Does the Law Say About Religious Freedom?"
    );

    setReligionText(
        "religion-law-1",
        "Article 36 of the Constitution of the People's Republic of China states that citizens enjoy freedom of religious belief and that the state protects what it calls normal religious activities."
    );

    setReligionText(
        "religion-law-2",
        "The Regulations on Religious Affairs further establish rules governing religious organizations, venues, clergy, education and property."
    );

    setReligionText(
        "religion-law-3",
        "Understanding religious freedom in China therefore requires distinguishing between protections written into law and the state regulation religious communities face in registration, organization, education, publishing, online activity and management of religious venues."
    );


    setReligionText(
        "religion-sinicization-title",
        "Sinicization of Religion"
    );

    setReligionText(
        "religion-sinicization-1",
        "In recent years, the policy of promoting the Sinicization of religion has become an important part of China's religious policy. Chinese authorities describe it as guiding religions to adapt to Chinese society and socialism."
    );

    setReligionText(
        "religion-sinicization-2",
        "USCIRF and other critics argue that the policy has strengthened Communist Party control over religious organizations, clergy and religious activity."
    );

    setReligionText(
        "religion-sinicization-3",
        "The meaning and effects of Sinicization are therefore disputed. This project distinguishes official Chinese policy descriptions from observations and criticism by international human rights organizations."
    );


    setReligionText(
        "religion-christian-title",
        "Protestant Christianity and House Churches"
    );

    setReligionText(
        "religion-christian-1",
        "Protestant Christianity in China includes churches operating within officially approved religious structures as well as many unofficial or unregistered congregations commonly known as house churches."
    );

    setReligionText(
        "religion-christian-2",
        "House churches are not a single organization. Their size, theological traditions and relationships with authorities vary widely."
    );

    setReligionText(
        "religion-christian-3",
        "Reports by the U.S. Department of State and USCIRF have documented raids, closures, fines, detention and arrests involving some unregistered house churches. Chinese authorities generally describe such enforcement through the framework of religious regulation and law."
    );


    setReligionText(
        "religion-catholic-title",
        "Catholicism and Underground Churches"
    );

    setReligionText(
        "religion-catholic-1",
        "Catholicism in China has long included both officially recognized institutions and underground Catholic communities operating outside the official structure."
    );

    setReligionText(
        "religion-catholic-2",
        "The appointment of bishops and relations between the Vatican and the Chinese government have long been central issues for Catholicism in China."
    );

    setReligionText(
        "religion-catholic-3",
        "International religious freedom reports have documented cases involving detention, disappearance and restrictions affecting underground Catholic clergy. Chinese authorities require religious activity to comply with Chinese law and the country's religious regulatory system."
    );


    setReligionText(
        "religion-islam-title",
        "Islam and Uyghur Muslims"
    );

    setReligionText(
        "religion-islam-1",
        "China is home to several Muslim ethnic communities, including Uyghurs, Hui, Kazakhs and other Muslim groups."
    );

    setReligionText(
        "religion-islam-2",
        "Religious freedom in Xinjiang has received extensive international attention. A 2022 assessment by the Office of the United Nations High Commissioner for Human Rights found serious human rights violations and described extensive restrictions affecting Islamic religious practice and Uyghur cultural expression."
    );

    setReligionText(
        "religion-islam-3",
        "The Chinese government rejects allegations of systematic persecution and says its policies in Xinjiang are intended to combat terrorism and extremism, maintain stability and promote economic development."
    );

    setReligionText(
        "religion-islam-4",
        "This project therefore presents Chinese government explanations alongside United Nations documents and other research and human rights reporting so readers can compare different sources."
    );


    setReligionText(
        "religion-hui-title",
        "Hui Muslims and Mosque Regulation"
    );

    setReligionText(
        "religion-hui-1",
        "Muslim communities outside Xinjiang have also been affected by changes in religious policy. International religious freedom reports have documented alterations to mosque architecture, including the removal or modification of domes and minarets in some areas."
    );

    setReligionText(
        "religion-hui-2",
        "Chinese authorities associate these policies with Sinicization, standardized management of religious venues and Chinese architectural traditions. Critics argue that the measures weaken aspects of Muslim religious and cultural expression."
    );


    setReligionText(
        "religion-tibet-title",
        "Tibetan Buddhism"
    );

    setReligionText(
        "religion-tibet-1",
        "Tibetan Buddhism is one of the most important religious traditions in Tibet and other Tibetan areas of China."
    );

    setReligionText(
        "religion-tibet-2",
        "Chinese authorities regulate monasteries, clergy, religious education and the reincarnation system of Tibetan Buddhist lamas."
    );

    setReligionText(
        "religion-tibet-3",
        "The U.S. Department of State and United Nations experts have documented or raised concerns regarding detention of Tibetan Buddhist clergy and believers, restrictions on religious practice and state involvement in reincarnation."
    );

    setReligionText(
        "religion-tibet-4",
        "The succession of the Dalai Lama is particularly disputed. Chinese authorities maintain that reincarnation must comply with Chinese law and historical procedures, while the Dalai Lama and his supporters reject state determination of his religious succession."
    );


    setReligionText(
        "religion-falun-title",
        "Falun Gong"
    );

    setReligionText(
        "religion-falun-1",
        "Falun Gong expanded rapidly in China during the 1990s. Its practice combines qigong exercises with spiritual and moral teachings."
    );

    setReligionText(
        "religion-falun-2",
        "Beginning in 1999, the Chinese government banned Falun Gong organizational activity and classified it within its campaign against groups designated as xie jiao."
    );

    setReligionText(
        "religion-falun-3",
        "The U.S. Department of State, USCIRF and human rights organizations have documented allegations of arrests, imprisonment and abuse involving Falun Gong practitioners. Chinese authorities describe their actions as lawful enforcement against xie jiao organizations."
    );

    setReligionText(
        "religion-falun-4",
        "Because the subject involves serious and disputed human rights allegations, this project identifies the source of statistics and individual cases and distinguishes government claims, reports from practitioners and investigations by outside organizations."
    );


    setReligionText(
        "religion-cag-title",
        "Church of Almighty God"
    );

    setReligionText(
        "religion-cag-1",
        "The Church of Almighty God, also known as Eastern Lightning, is a new religious movement that emerged in China in the late twentieth century."
    );

    setReligionText(
        "religion-cag-2",
        "The Chinese government designates the group as a xie jiao organization and prosecutes members and organizational activity under related laws."
    );

    setReligionText(
        "religion-cag-3",
        "U.S. international religious freedom reports have cited reports of large numbers of members being arrested or imprisoned. Some numerical claims originate from the church itself, so those figures should be clearly attributed rather than presented as independently verified statistics."
    );


    setReligionText(
        "religion-digital-title",
        "The Internet, Publishing and Religious Communication"
    );

    setReligionText(
        "religion-digital-1",
        "China operates a licensing and regulatory system for religious information services on the internet. Online preaching, religious education and dissemination of religious information are subject to specific regulations."
    );

    setReligionText(
        "religion-digital-2",
        "Regulation of online religious activity has continued to expand, meaning religious governance now extends beyond physical churches, temples and mosques into digital spaces."
    );


    setReligionText(
        "religion-why-title",
        "Why Does Religious Freedom Matter?"
    );

    setReligionText(
        "religion-why-1",
        "Freedom of religion or belief includes not only the ability to follow a religion, but also the freedom to change one's beliefs, hold no religion, and express and practice personal beliefs within the law."
    );

    setReligionText(
        "religion-why-2",
        "Article 18 of the Universal Declaration of Human Rights recognizes freedom of thought, conscience and religion as a fundamental human right."
    );

    setReligionText(
        "religion-why-3",
        "Religious freedom therefore intersects with freedom of expression, freedom of association, cultural rights, minority rights and the limits of state power."
    );


    setReligionText(
        "religion-sources-title",
        "Sources & Further Reading"
    );

    setReligionText(
        "religion-sources-description",
        "Religious freedom intersects with political, legal and human rights research. This project distinguishes Chinese government documents, international organization reports and other research sources whenever possible."
    );


    setReligionText(
        "religion-source-constitution-title",
        "Article 36 of the Constitution of the People's Republic of China"
    );

    setReligionText(
        "religion-source-constitution",
        "A foundational legal text concerning freedom of religious belief and the protection of what the Constitution calls normal religious activities."
    );


    setReligionText(
        "religion-source-regulation-title",
        "Regulations on Religious Affairs"
    );

    setReligionText(
        "religion-source-regulation",
        "A major regulatory framework governing religious organizations, venues and religious affairs in China."
    );


    setReligionText(
        "religion-source-un-title",
        "United Nations Human Rights Materials"
    );

    setReligionText(
        "religion-source-un",
        "Includes the UN assessment on Xinjiang and communications by UN special procedures concerning freedom of religion or belief."
    );


    setReligionText(
        "religion-source-state-title",
        "International Religious Freedom Report"
    );

    setReligionText(
        "religion-source-state",
        "The U.S. Department of State's annual reporting on religious freedom, including material concerning mainland China, Tibet and Xinjiang."
    );


    setReligionText(
        "religion-source-uscirf-title",
        "Religious Freedom Conditions in China"
    );

    setReligionText(
        "religion-source-uscirf",
        "USCIRF reporting on China's religious policies, religious communities and religious freedom conditions."
    );


    setReligionText(
        "religion-contact-title",
        "Questions? Contact Us"
    );

    setReligionText(
        "religion-contact-text",
        "If you find information that should be corrected, would like to provide relevant documents, or have questions about this project, you can contact us by email."
    );

    setReligionText(
        "religion-back-button",
        "Back to Topics"
    );


    setReligionText(
        "religion-footer-title",
        "Freedom · Democracy · Human Rights · Rule of Law"
    );

    setReligionText(
        "religion-footer-subtitle",
        "Religion and Freedom of Belief"
    );

}


/* ==================================================
   CHINESE
================================================== */

function setReligionChinese() {

    location.reload();

}


/* ==================================================
   SCROLL REVEAL
================================================== */

const religionRevealElements =
    document.querySelectorAll(
        ".religion-reveal"
    );


const religionObserver =
    new IntersectionObserver(

        function(entries) {

            entries.forEach(
                function(entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "religion-visible"
                        );

                        religionObserver.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },

        {
            threshold: 0.12
        }

    );


religionRevealElements.forEach(
    function(element) {

        religionObserver.observe(
            element
        );

    }
);