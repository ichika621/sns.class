/* =========================================================================
   SNS Operations Manual — English content
   Source: SNS運用マニュアル.docx (translated naturally, content not altered)
   ========================================================================= */
window.CONTENT_EN = {
  ui: {
    siteTitle: "Instagram SNS Manual",
    siteSubtitle: "JICA Kyrgyzstan Instagram Operations Guide",
    langName: "English",
    home: "Home",
    learnBtn: "Learn",
    startBtn: "Start",
    backHome: "Back to top",
    sectionLearnHeading: "What you'll learn in this section",
    sectionBodyHeading: "Contents",
    sectionExampleHeading: "Real example: NG → GOOD",
    sectionPracticeHeading: "Practice steps",
    sectionQuizHeading: "Review quiz",
    quizNext: "Next question",
    quizRetry: "Try again",
    quizFinishTitle: "Quiz result",
    quizScoreLabel: "Score",
    quizCorrect: "Correct!",
    quizIncorrect: "Not quite…",
    quizExplainHeading: "Explanation",
    quizReviewHeading: "Points to review",
    checklistTitle: "Pre-Post Checklist",
    checklistProgress: "Progress",
    checklistDone: "I've checked everything",
    checklistDoneMsg: "You've confirmed every item. You're good to post!",
    checklistReset: "Reset checklist",
    checklistFinalNote: "Once everything is checked, confirm with Aisuluu and Svetlana!",
    printBtn: "View the print manual",
    spotQuizHeading: "Post check quiz: which one misses the point?",
    ngLabel: "NG",
    goodLabel: "GOOD",
    whyLabel: "Why?",
    badgeMostImportant: "Most important",
    comingSoonTitle: "Coming soon",
    comingSoonBody: "This section will be added later as a hands-on module — bring CapCut and follow along step by step.",
    comingSoonList: [
      "Section pages",
      "Tutorial videos",
      "Step-by-step instructions with screenshots",
      "Guided walkthroughs",
      "Practice exercises"
    ],
    footerNote: "This is an internal manual for staff use."
  },

  sections: [
    /* ================= SECTION 1 ================= */
    {
      id: "s1",
      number: "01",
      icon: "target",
      color: "coral",
      title: "Purpose, Target Audience & Content Strategy",
      shortDesc: "Understand why we post, who we're reaching, and what we should be saying.",
      learn: [
        "Explain why JICA runs an Instagram account and what its goals are",
        "Explain who the account is speaking to (main target audiences)",
        "Understand the 3 content categories and how to structure each one"
      ],
      blocks: [
        { type: "heading", text: "1. The purpose of running Instagram" },
        { type: "subheading", text: "1-1. Why we run Instagram" },
        { type: "para", text: "Instagram isn't only used to \"look things up\" — people use it every day as entertainment." },
        { type: "para", text: "That's why it's important not to simply explain JICA's activities one-sidedly, but to create **content people find \"useful,\" \"interesting,\" and want to know more about.**" },
        { type: "para", text: "On Instagram, it's not just individual posts that get noticed — **the account itself is recognized as a brand.** That's why we keep content, design, writing, the profile, and Highlights consistent, so it's instantly recognizable as \"the JICA account.\"" },

        { type: "heading", text: "2. Account strategy" },
        { type: "subheading", text: "2-1. What account strategy means" },
        { type: "para", text: "Instagram account strategy means clarifying these three points." },
        { type: "cards3", items: [
          { label: "Who", title: "Who are we reaching?", icon: "users" },
          { label: "What", title: "What are we telling them?", icon: "message" },
          { label: "Goal", title: "What do we want to achieve?", icon: "flag" }
        ]},
        { type: "para", text: "In other words, account strategy isn't simply \"posting information about JICA\" — it's **deciding what to say and how, based on the target audience.**" },

        { type: "heading", text: "3. Goals of running Instagram" },
        { type: "subheading", text: "3-1. Ultimate goal" },
        { type: "goalBox", text: "Through Instagram, **raise awareness, understanding, and familiarity with JICA.**" },
        { type: "para", text: "We also aim to build a positive image of the role JICA plays and the activities it carries out in Kyrgyzstan." },

        { type: "subheading", text: "3-2. Medium-term goal" },
        { type: "para", text: "In Kyrgyzstan, even ministry and government officials use Instagram to gather information. With that in mind, the medium-term goal is best split into reach beyond current followers and depth with existing followers." },
        { type: "structureFlow", steps: [
          { title: "Reach beyond followers", body: "The goal is for people to **stumble across a JICA post while casually browsing Instagram on a break — and follow the account** as a result." },
          { title: "Depth with followers", body: "The goal is for existing followers to **come away genuinely understanding what JICA does and how it contributes.**" }
        ]},

        { type: "heading", text: "4. Target audience" },
        { type: "flow", title: "The journey we're aiming for", steps: [
          { text: "Has an interest in Japan or in international cooperation" },
          { text: "Is casually scrolling Instagram and a JICA video appears in the feed", note: "(the post needs enough views/reach to get in front of a lot of people)" },
          { text: "Gets curious about the video itself and stops to watch", note: "(the post itself needs to be genuinely well made)" },
          { text: "Becomes interested in JICA and follows the account", note: "(the video needs to actually introduce JICA's work)" }
        ]},
        { type: "subheading", text: "4-1. Main target audiences" },
        { type: "targetCard", tag: "A", title: "Government officials & ministry staff in their 20s–30s", body: "People who may be directly or indirectly connected to JICA's projects. When they come across a JICA post while browsing Instagram personally, we want to create this progression:", flow: ["\"Oh, so this is what JICA does\"", "\"This is interesting\"", "\"I want to know more\"", "Follow"] },
        { type: "targetCard", tag: "B", title: "People aged 10–30 interested in Japanese culture and language", body: "Japanese-language learners, Japanese-culture communities, young people interested in Japan, etc. For this group, it's effective to use Japanese and Kyrgyz culture and people as an entry point into JICA, rather than only explaining JICA directly." },

        { type: "heading", text: "5. Basic content policy" },
        { type: "leadBox", text: "What matters when introducing JICA on Instagram isn't \"explaining JICA\" — it's \"creating a reason to want to know more about JICA.\"" },
        { type: "para", text: "When creating a post, always ask: **\"Why would someone seeing this post for the first time watch it to the end?\"** In Reels especially, give a \"reason to watch\" within the first few seconds." },
        { type: "example", bad: "\"Today we're introducing the ○○ project.\"", badWhy: "This is purely explanatory and gives no \"reason to watch\" in the first few seconds, so viewers tend to drop off.", good: "\"Why does this road stay usable even in winter?\"", goodWhy: "Opening with a question makes viewers curious about what comes next, so they keep watching." },
        { type: "note", text: "The source material also recommends avoiding long greetings/introductions and presenting the key message or question right away." },

        { type: "heading", text: "6. Content categories" },
        { type: "para", text: "Core content is divided into the following 3 categories." },
        { type: "categoryHeading", num: "①", title: "News & Updates", body: "Share JICA's latest news." },
        { type: "list", items: ["Important meetings", "VIP visits", "Events"] },
        { type: "para", text: "However, don't make this a plain \"activity report.\"" },
        { type: "subheading", text: "Basic structure" },
        { type: "flow", title: "Why → What → Who → So What?", steps: ["Why: why was this activity needed?", "What: what did JICA do?", "Who: who was involved?", "So What: what changed as a result / why does it matter?"] },
        { type: "example", bad: "Just \"The ○○ project was awarded\"", good: "Turn it into a story: \"Kyrgyzstan had this ○○ challenge → JICA carried out ○○ → worked together with ○○ ministry/local communities → this led to ○○ → and this effort has now been recognized.\"", isStory: true },
        { type: "subheading", text: "Concrete example (an important meeting)" },
        { type: "structureFlow", compact: true, steps: [
          { title: "Why", body: "Wanting to stabilize the dairy industry" },
          { title: "What", body: "Training people to raise product quality" },
          { title: "Who", body: "A regional governor and staff from partner companies" },
          { title: "So What?", body: "The groundwork for training is now in place, and quality has improved significantly" }
        ]},

        { type: "categoryHeading", num: "②", title: "Our Activities: Introducing JICA's work", body: "Don't just list the project name, partners, purpose, and duration when introducing a project." },
        { type: "subheading", text: "Basic structure" },
        { type: "flow", title: "Why → What → Result → Today", steps: ["Why: what challenge existed in Kyrgyzstan?", "What: what did JICA do?", "Result: what changed?", "Today: how does it connect to the present?"] },
        { type: "para", text: "This turns a project \"description\" into **a story about what actually changed because of JICA's work.**" },
        { type: "subheading", text: "Concrete example (OVOP)" },
        { type: "structureFlow", compact: true, steps: [
          { title: "Why", body: "Rural communities were declining, and women held low social status" },
          { title: "What", body: "Implemented OVOP (One Village One Product)" },
          { title: "Result", body: "Women gained work opportunities and their status improved" },
          { title: "Today", body: "The approach is now drawing attention in Kazakhstan and Uzbekistan too" }
        ]},
        { type: "videoEmbed", src: "videos/ovop_reel.mp4", webm: "videos/ovop_reel.webm", poster: "images/ovop_poster.jpg",
          caption: "An example Reel introducing OVOP (One Village One Product). It tells the Why → What → Result → Today story above through a real interview." },

        { type: "categoryHeading", num: "③", title: "Japanese Culture & Japan", body: "Content about Japanese culture shouldn't turn into a plain \"encyclopedia of Japanese culture\" either." },
        { type: "example", bad: "\"What is sushi?\" → just explains the history and types of sushi", badWhy: "This has a weak connection to JICA.",
          good: "Combine Japanese culture × Kyrgyz people × JICA (e.g. Japanese culture as seen through Kyrgyz eyes, or a surprising thing Japan and Kyrgyzstan have in common)",
          goodWhy: "Combining these three elements keeps a clear connection to JICA while still featuring the culture." },
        { type: "subheading", text: "Recommended approach" },
        { type: "vennBox", text: "Japanese Culture × Kyrgyz People × JICA" },
        { type: "para", text: "In other words, combine Japanese culture, Kyrgyz people, and JICA. For example:" },
        { type: "list", items: ["Japanese culture as seen through Kyrgyz eyes", "Surprising things Japan and Kyrgyzstan have in common", "Cultural differences between Japan and Kyrgyzstan", "JICA staff introducing Japanese culture", "What Kyrgyz people felt about Japan"] }
      ],
      spotQuiz: [
        {
          type: "mcq",
          q: "Which of these 4 post ideas misses the point of running Instagram?",
          options: [
            "A flat activity report: \"Project ○○ update: visited Company △△ last week\"",
            "A post that opens with \"Why did this dairy factory suddenly improve in quality?\"",
            "A post that tells JICA's work as a story, using the voice of the governor and company staff who were actually involved",
            "A post where Kyrgyz staff share what they felt about Japanese culture"
          ],
          answer: 0,
          explain: "A plain activity report gives no reason to find it \"useful,\" \"interesting,\" or worth knowing more about, so viewers won't watch to the end. The other three all build in a reason to watch, or connect Japan × people × JICA."
        },
        {
          type: "mcq",
          q: "Which post looks fine at first glance, but actually misses the point? (Watch for the trap)",
          options: [
            "It opens with \"Why does this road stay usable even in winter?\" and then spends the whole post on technical road-engineering detail, with JICA and the people of Kyrgyzstan never appearing at all",
            "After the hook, it shows how JICA got involved and features the voice of someone who actually benefited, then closes with a call to follow",
            "It opens with \"Why was this project awarded?\" and follows a story of challenge → JICA's work → the people who partnered → the result",
            "It combines Japanese culture, the people of Kyrgyzstan, and JICA"
          ],
          answer: 0,
          explain: "A strong Hook alone isn't enough — if the post never comes back to JICA's work or the people connected to it, it drifts away from the goal of building awareness, understanding, and closeness to JICA. The Hook is only the entry point; the body needs to connect to JICA's work and the people's story."
        },
        {
          type: "mcq",
          q: "Which post fails to keep the main target audience in mind?",
          options: [
            "A post about a JICA–ministry partnership project that would interest government officials in their 20s–30s",
            "A post combining Japanese culture × Kyrgyz people × JICA, aimed at young people learning Japanese or interested in Japanese culture",
            "An account run without any defined audience, focused only on posting as much as possible every day",
            "A post depicting a scene that feels relatable to government officials, designed to make them think \"oh, so this is what JICA does\""
          ],
          answer: 2,
          explain: "Account strategy means clarifying Who you're reaching. Posting constantly with no sense of audience is exactly the kind of operation that misses the underlying purpose."
        },
        {
          type: "mcq",
          q: "Which \"Our Activities\" post looks thorough and careful, but actually misses the point?",
          options: [
            "A post that neatly lists, in bullet points, the project name, partners, purpose, duration, and activities, leaving nothing out",
            "A post that tells the story as Why (the challenge in Kyrgyzstan) → What (JICA's work) → Result (what changed) → Today (how it connects now)",
            "A post that traces the story from rural decline and low status for women, through OVOP, to attention from abroad",
            "A post that includes the voice of someone who was actually interviewed, to convey what changed"
          ],
          answer: 0,
          explain: "Simply listing every detail, however carefully, is still just an \"explanation.\" However thorough it looks, if it isn't a story following Why → What → Result → Today, it hasn't really grasped the purpose."
        }
      ],
      quiz: [
        {
          type: "mcq",
          q: "Which idea about the purpose of running Instagram matches the source material?",
          options: [
            "Explaining JICA's activities one-sidedly is the top priority",
            "Create content people find \"useful,\" \"interesting,\" and want to know more about",
            "The top priority is simply posting as often as possible",
            "Follower count is the only goal"
          ],
          answer: 1,
          explain: "Instagram is used daily as entertainment, so instead of one-sided explanation, aim for content people find useful, interesting, and worth knowing more about."
        },
        {
          type: "truefalse",
          q: "The three points to clarify in account strategy are \"Who, What, and Goal.\"",
          answer: true,
          explain: "Correct — clarify who you're reaching (Who), what you're telling them (What), and what you want to achieve (Goal)."
        },
        {
          type: "goodng",
          q: "Which is the more effective way to open a Reel?",
          optionA: { label: "Today we're introducing the ○○ project.", verdict: "ng" },
          optionB: { label: "Why does this road stay usable even in winter?", verdict: "good" },
          explain: "Opening with a question creates curiosity about what comes next, making viewers more likely to watch to the end."
        },
        {
          type: "mcq",
          q: "What's the basic structure for \"Our Activities\" (introducing JICA's work)?",
          options: [
            "Project name → Partner → Purpose → Duration",
            "Why → What → Result → Today",
            "Hook → CTA → Hashtags",
            "Who → What → Goal"
          ],
          answer: 1,
          explain: "The recommended story structure is: what challenge existed (Why) → what did JICA do (What) → what changed (Result) → how it connects to today (Today)."
        },
        {
          type: "mcq",
          q: "What should be avoided in Japanese culture content?",
          options: [
            "Showing Japanese culture through Kyrgyz eyes",
            "Highlighting surprising things Japan and Kyrgyzstan have in common",
            "A post like \"What is sushi?\" that just explains the culture itself",
            "Having JICA staff introduce Japanese culture"
          ],
          answer: 2,
          explain: "Explaining culture on its own weakens the connection to JICA. Combine \"Japanese culture × Kyrgyz people × JICA\" instead."
        }
      ]
    },

    /* ================= SECTION 2 ================= */
    {
      id: "s2",
      number: "02",
      icon: "method",
      color: "sky",
      title: "Method",
      shortDesc: "Learn how to plan, shoot, edit, and post an actual Instagram post.",
      learn: [
        "Decide whether a Reel or a Carousel is the right format",
        "Explain the production rules for Reels and Carousels",
        "Understand video structure (Hook–CTA), captions, hashtags, subtitles, thumbnails, and posting time rules"
      ],
      topBlocks: [
        { type: "heading", text: "Reel or Carousel?" },
        { type: "para", text: "Check these two things." },
        { type: "list", items: ["**Can you include audio information (narration/interview)?**", "**Can you shoot at least 5 visually different clips** (different colors, people, locations)?"] },
        { type: "decisionBox", text: "If the answer to both is \"no,\" go with a Carousel. The lower these two tendencies are, the less suited the content is to a Reel. Forcing it into a Reel anyway just loses the seriousness expected of a public institution. Reels reach well beyond your current followers but can actually reach existing followers less reliably. If your only goal is to reliably deliver information, an image carousel works better. It's more effective to publish one high-quality Reel a month than many low-quality ones. Don't force something into a Reel format when there's no real material for it." }
      ],
      tabs: [
        /* ---------------- Reel tab ---------------- */
        {
          key: "reel",
          label: "Reel",
          quizHeading: "Reel quiz",
          blocks: [
            { type: "heading", text: "Reel method" },
            { type: "list", items: [
              "Videos must always be **under 1 minute.** Documentaries can run longer out of necessity, but everything else should aim for 45 seconds or less.",
              "For slow speakers, speed the audio up to **1.3x** — enough to tighten the pace without sounding unnatural.",
              "**Subtitles and music are both required.** For subtitles: dictate the audio into ChatGPT, have it translated straight into Russian/Kyrgyz, then email it to your device and paste it in. (Trending templates are an exception, and music is optional — but subtitles are mandatory. Auto-generated subtitles make this easy, and subtitling doesn't take much time anyway.)",
              "Series content should share a consistent **opening.**",
              "Always include an **ending.**"
            ]},
            { type: "ratioMockup", ratio: "9:16", label: "Standard ratio for Reels" },
            { type: "videoEmbed", narrow: true, src: "videos/ending_example.mp4", webm: "videos/ending_example.webm", poster: "images/ending_example_poster.jpg",
              caption: "An example ending: a simple, consistent close with the JICA Kyrgyz Republic Office logo and name." },
            { type: "downloadLink", href: "videos/downloads/ending_example.zip", label: "Download the ending video (ZIP)",
              note: "This downloads as a ZIP file — unzip it to get the video file. (It's zipped because JICA computers can block direct downloads of video files.)" },
            { type: "note", text: "Before posting, **make sure there is no CapCut watermark on the video.**" },

            { type: "heading", text: "11. Video structure" },
            { type: "para", text: "In general, use the following structure." },
            { type: "structureFlow", steps: [
              { title: "① Hook", body: "Grab attention in the first 3 seconds.", examples: [
                "\"Why does ○○ happen?\"",
                "\"○○ in Kyrgyzstan has changed.\"",
                "\"Actually, Japanese technology is used in this ○○.\"",
                "\"This place is connected to JICA.\"",
                "\"Japan and Kyrgyzstan have a surprising thing in common.\""
              ]},
              { title: "② Main Information", body: "Deliver the most important information." },
              { title: "③ Story / Example", body: "Show real people, places, numbers, or the actual site." },
              { title: "④ Result", body: "Explain what changed as a result." },
              { title: "⑤ CTA", body: "Prompt the viewer to take a next step.", examples: ["Follow", "Share", "Comment", "See more", "See other posts"] }
            ]},

            { type: "heading", text: "12. Reels operating rules" },
            { type: "subheading", text: "12-1. Video length" },
            { type: "statBox", stat: "30–45 sec", label: "Target: length to aim for going forward (up to ~60 sec)", emphasis: true },
            { type: "statBox", stat: "74.3 sec", label: "Reference: current average video length", muted: true },
            { type: "subheading", text: "Editing checkpoints" },
            { type: "list", items: [
              "Cut long greetings",
              "State the conclusion or the question up front",
              "Cut unnecessary movement/setup scenes",
              "Cut every \"dead air\" pause you can, even half a second — always look for unnecessary pauses to trim."
            ]},

            { type: "heading", text: "13. Video format (Reels)" },
            { type: "formatTable", rows: [
              { label: "Reels", value: "9:16", note: "Vertical video as the standard." }
            ]},

            { type: "heading", text: "14. Subtitles" },
            { type: "para", text: "**As a rule, every Reel should have subtitles.** Currently only about a third of Reels are subtitled — going forward, every Reel should include them." },
            { type: "subheading", text: "Subtitle rules" },
            { type: "list", items: [
              "Maximum 2 lines per screen",
              "Positioned so it doesn't overlap Instagram's UI",
              "Make sure the content can be understood with the sound off"
            ]},

            { type: "heading", text: "15. Thumbnails" },
            { type: "para", text: "A thumbnail's job is to **communicate, in an instant, what the video is about.**" },
            { type: "goodng", ngLabel: "Project Update", goodLabel: "Why does this road work in winter?", note: "— use a title where the content or question is clear at a glance, like the example on the right." },
            { type: "imgFigure", narrow: true, src: "images/reel_thumbnail_example.jpg", alt: "Example Reel thumbnail",
              caption: "A thumbnail example. Placing a question at the top, combined with subtitles, communicates \"what is this video about\" at a glance." },
            { type: "para", text: "Also, don't change the design too much from Reel to Reel — keep a consistent layout." },

            { type: "heading", text: "16. CTA (Call to Action)" },
            { type: "para", text: "Include a CTA at the end of a post whenever possible. The goal isn't simply to ask for likes — it's to **prompt the viewer's next action.**" },
            { type: "list", items: [
              "Follow us for more JICA stories.",
              "What do you think?",
              "Have you ever experienced this?",
              "Share this with someone interested in Japan.",
              "Learn more about JDS.",
              "Check our Highlights for more information."
            ]},
            { type: "para", text: "Choose the CTA to match the content of the post." },

            { type: "heading", text: "About Reel content" },
            { type: "subheading", text: "Entertainment" },
            { type: "leadBox", text: "It must always tie back to introducing JICA's work. Don't film something purely because it looks fun or makes staff seem relatable!" },
            { type: "para", text: "The people who follow the account aren't following to watch entertaining moments or JICA staff dancing around. They follow because they want to know what JICA does and the information JICA provides — don't lose sight of that." },
            { type: "subheading", text: "Example: Japanese-language intro × activity intro" },
            { type: "para", text: "This is recommended because it lets even a simple photo slideshow become highly entertaining while also introducing JICA's work. Since people interested in Japan tend to make up the follower base, introducing Japanese language content also makes sense." },
            { type: "para", text: "It can be made just by swapping the video and caption on an existing CapCut project, so editing takes very little time. Once you've filmed the footage, it comes together quickly, can be shot by a single person, and doesn't require pulling other people in — making it an easy option." },

            { type: "heading", text: "How to make a documentary-style video" },
            { type: "videoEmbed", src: "videos/documentary_example.mp4", webm: "videos/documentary_example.webm", poster: "images/documentary_poster.jpg",
              caption: "An example of a documentary-style video: an interview shot from a 45-degree angle, combined with subtitles. Watch it alongside the \"While filming,\" \"Questions,\" and \"While editing\" points below." },
            { type: "subheading", text: "While filming" },
            { type: "list", items: [
              "Film from a 45-degree angle, with someone other than the interviewer holding the camera. Keep the camera as still as possible — a fixed position if you can manage it.",
              "Always shoot using the grid. Line up the right-hand grid line with the subject's face, and leave about one grid square of space above their head.",
              "Separately, capture as much footage as possible of the person working or talking with someone — staged is fine if needed. If nothing else is available, film objects or scenery instead.",
              "If possible, ask the person in advance to send photos or video from that time via message.",
              "Expect to shoot around 30 minutes of footage to end up with 1 minute in the final cut."
            ]},
            { type: "gridMockup" },
            { type: "subheading", text: "Questions" },
            { type: "list", items: [
              "Prepare questions in advance.",
              "Ask questions that serve the goal of conveying what's great about JICA. Have a rough idea of the answer you expect, and ask in a way that draws out that content.",
              "When interviewing Kyrgyz speakers, either use an interpreter or ask the question in English and let them answer in Russian or Kyrgyz. Since it will be translated into Kyrgyz anyway, don't force them to answer in English."
            ]},
            { type: "subheading", text: "While editing" },
            { type: "list", items: [
              "Start with the interview subject speaking on camera. At a natural break, around 2–5 seconds in, switch to audio-only from the interview while showing different footage, then cut back to the subject at the end of their answer.",
              "Don't include the audio of the question itself — show it as on-screen text near the top of the frame instead.",
              "Subtitles and music are required.",
              "Narrow it down to around 3 strong questions/answers that really convey what's great about JICA, and keep it within 60 seconds. If it genuinely won't fit, split it into Part 1 and Part 2."
            ]},

            { type: "subheading", text: "Column: a request about appearing on camera, and how to shoot it" },
            { type: "leadBox", text: "The single most important thing in content creation is personalization. Having a real person appear and speak gets far higher engagement. **Even a one-line appearance is a big help, so please cooperate wherever you can.**" },
            { type: "para", text: "Content needs to keep being made, so having appeared before doesn't mean you're exempt every time. That said, be careful not to let the burden fall too heavily on any one person." },
            { type: "subheading", text: "Recommended content" },
            { type: "para", text: "At JICA Kyrgyzstan, personalized video is hard to produce. As a workaround, when visiting a project, interview an external person involved in it with 2–3 questions, or film them giving a short speech." },
            { type: "note", text: "If it's an external interview, **faces don't need to be shown.** Filming just their feet with voice-only audio is fine too. Audio is critical for Reels either way." }
          ],
          quiz: [
            {
              type: "mcq",
              q: "What's the target length for a Reel video (excluding documentaries)?",
              options: ["10–15 seconds", "30–45 seconds (up to about 60 seconds)", "2–3 minutes", "There's no limit"],
              answer: 1,
              explain: "The current average is 74.3 seconds, but that's only a reference figure. Going forward, aim for 30–45 seconds, with roughly 60 seconds as the ceiling."
            },
            {
              type: "mcq",
              q: "What must every Reel include?",
              options: ["Just music", "Subtitles and music", "Just captions and emoji", "Nothing in particular"],
              answer: 1,
              explain: "Subtitles and music are both required. Trending templates can skip music, but subtitles are always mandatory."
            },
            {
              type: "mcq",
              q: "What's the correct order for video structure?",
              options: [
                "CTA → Hook → Result → Story",
                "Hook → Main Information → Story/Example → Result → CTA",
                "Story → Hook → CTA → Result",
                "Main Information → CTA → Hook"
              ],
              answer: 1,
              explain: "Grab attention in the first 3 seconds (Hook) → key information → example → result → prompt the next action (CTA)."
            },
            {
              type: "mcq",
              q: "Which of these correctly describes the subtitle rules for Reels?",
              options: [
                "Precisely specify styling details like white bold text and a black outline",
                "Keep to 2 lines per screen max, avoid overlapping Instagram's UI, and make sure it's understandable with the sound off",
                "Subtitles aren't necessary",
                "Subtitles only need to be in English"
              ],
              answer: 1,
              explain: "What matters is function, not decorative detail: staying within 2 lines, not overlapping the UI, and being understandable without sound."
            },
            {
              type: "goodng",
              q: "Which makes a more effective thumbnail title?",
              optionA: { label: "Project Update", verdict: "ng" },
              optionB: { label: "Why does this road work in winter?", verdict: "good" },
              explain: "A title where the content or question is clear at a glance communicates what the video is about instantly."
            }
          ]
        },

        /* ---------------- Carousel tab ---------------- */
        {
          key: "carousel",
          label: "Carousel",
          quizHeading: "Carousel quiz",
          blocks: [
            { type: "heading", text: "Carousel method" },
            { type: "list", items: [
              "Always use this outer frame, at minimum for the **thumbnail.**",
              "Always post at a **4:5 (width:height)** ratio. Posting at any other ratio makes each post look inconsistent, creates awkward blank space, and undermines the solidity and professionalism expected of a public institution.",
              "For this reason, shoot photos **vertically** whenever possible!",
              "If a photo ends up horizontal, use the thumbnail to fill the blank space and post it at this ratio."
            ]},
            { type: "imgFigure", src: "images/carousel/carousel_frame.png", alt: "Example carousel outer-frame template",
              caption: "An example of the outer-frame template actually in use (a post introducing a dairy-sector project). The JICA logo sits in a band at the top and the title in a band at the bottom — this layout is kept consistent across every carousel post." },
            { type: "canvaLink", url: "https://canva.link/hmbmtl3komvntci", label: "Open the outer-frame template (Canva)" },
            { type: "ratioMockup", ratio: "4:5", label: "Standard ratio for carousel / photo posts" },

            { type: "heading", text: "13. Photo/carousel format" },
            { type: "formatTable", rows: [
              { label: "Photos / Carousel", value: "4:5", note: "as the standard." }
            ]},
            { type: "para", text: "Use JICA Blue as the main color, and keep the logo position, logo size, font, design template, and title position consistent wherever possible. The goal is for **a post to be instantly recognizable as JICA content.**" }
          ],
          quiz: [
            {
              type: "mcq",
              q: "If you \"can't include audio\" AND \"can't shoot 5 different clips,\" which format should you choose?",
              options: ["Reel", "Carousel", "Either is fine", "Don't post at all"],
              answer: 1,
              explain: "If both answers are \"no,\" go with a Carousel — forcing it into a Reel just loses the seriousness expected of a public institution."
            },
            {
              type: "mcq",
              q: "What's the standard aspect ratio for a Carousel (photo post)?",
              options: ["1:1", "16:9", "4:5", "3:4"],
              answer: 2,
              explain: "Carousels are posted at a consistent 4:5 ratio. Mixing ratios makes posts look inconsistent and undermines professionalism."
            },
            {
              type: "mcq",
              q: "What's true about the carousel outer frame?",
              options: [
                "You can freely change the design for every post",
                "The same outer frame is always used, at minimum for the thumbnail",
                "You don't need an outer frame at all",
                "Any design is fine as long as there's text on it"
              ],
              answer: 1,
              explain: "A consistent outer frame makes a post instantly recognizable as JICA content the moment someone sees it."
            },
            {
              type: "mcq",
              q: "What do you do if all you have is a horizontal photo?",
              options: ["Don't post it", "Force it into a 9:16 stretch", "Use the thumbnail feature to fill the blank space and post at 4:5", "Only use it in Stories"],
              answer: 2,
              explain: "Shooting vertically is preferred, but if a photo ends up horizontal, fill the blank space with the thumbnail and keep the 4:5 ratio."
            }
          ]
        },

        /* ---------------- Caption / posting time tab ---------------- */
        {
          key: "caption",
          label: "Caption & Posting Time",
          quizHeading: "Caption & posting time quiz",
          blocks: [
            { type: "heading", text: "17. Captions" },
            { type: "note", text: "Summarize the video's content and feed it into an AI tool — it can draft a caption for you directly. Copy the prompt below to use it." },
            { type: "promptBox", label: "Copy-paste prompt (AI caption generator)", copyLabel: "Copy", copiedLabel: "Copied!",
              text: "Create an Instagram caption based on the video/image content below.\nWrite in : Russian and Kyrgyz.\nRequirements:\n* 70–80 words max per language\n* Add information/context that is not obvious from the video/image; do not simply repeat it.\n* Structure: Hook → brief context/details → CTA\n* Natural, friendly, professional tone for JICA Kyrgyzstan's official Instagram\n* Do not invent information.\n* Use 0–3 emojis if appropriate.\n* Hashtags: #JICA #JICAKyrgyzstan #JapanKyrgyzstan + up to 2 relevant hashtags\n\nAfter the two captions, add a short Japanese explanation of the caption's meaning\nVideo/image content:\n[PASTE CONTENT HERE]",
              note: "Paste a description of the video/image content (what's shown, what's said, etc.) in place of \"[PASTE CONTENT HERE]\" before using it." },
            { type: "subheading", text: "17-1. Basic policy" },
            { type: "para", text: "A caption's role is to add information that can't be understood from the video or image alone. As a guideline, aim for **roughly 70–80 words per language,** using Kyrgyz, Russian, and English as needed." },
            { type: "subheading", text: "17-2. Caption structure" },
            { type: "structureFlow", compact: true, steps: [
              { title: "① Hook", body: "Grab attention in the first line." },
              { title: "② Body", body: "Explain what didn't fit into the first line." },
              { title: "③ Details", body: "Project name, people involved, titles, etc." },
              { title: "④ CTA", body: "A question, a follow prompt, a share prompt, a link, etc." },
              { title: "⑤ Hashtags", body: "Relevant hashtags." }
            ]},

            { type: "heading", text: "18. Caption hooks" },
            { type: "para", text: "The very first sentence matters most. Patterns you can use:" },
            { type: "hookPatterns", items: [
              { name: "Question", example: "Why does this road remain usable even in winter?" },
              { name: "Number", example: "3 things you didn't know about ○○" },
              { name: "Conclusion", example: "This project changed ○○." },
              { name: "Person", example: "Meet the Kyrgyz engineer working with JICA." },
              { name: "Unexpected fact", example: "Did you know that ○○ was introduced to Kyrgyzstan through…?" }
            ]},

            { type: "heading", text: "19. Hashtags" },
            { type: "para", text: "Don't pile on large numbers of hashtags — use **a fixed set plus tags specific to the post.**" },
            { type: "hashtagBox", fixed: ["#JICA", "#JICAKyrgyzstan", "#JapanKyrgyzstan"], fixedLabel: "Fixed hashtags: up to 3", content: ["#OVOP", "#JOCV", "#IssykKul", "#Osh"], contentLabel: "Content-specific tags: up to 2" },
            { type: "note", text: "The source material also proposes roughly 3 fixed hashtags plus around 2 content-specific tags." },

            { type: "heading", text: "20. Emoji" },
            { type: "para", text: "Use emoji in captions where appropriate. The goal is to make the text feel friendly and easy to read. Avoid overusing them, though — aim for **around 0–3 per post.**" },

            { type: "heading", text: "21. Posting time" },
            { type: "timeBox", time: "17:00–18:00", label: "Weekdays, around when school/work ends" },
            { type: "para", text: "Also, use Instagram's scheduled-posting feature so the team doesn't need to manually post every single time." }
          ],
          quiz: [
            {
              type: "mcq",
              q: "What's the target caption length per language?",
              options: ["Around 10–20 words", "Around 70–80 words", "300+ words", "There's no guideline"],
              answer: 1,
              explain: "A caption supplements what the video/image alone can't convey, so aim for roughly 70–80 words per language."
            },
            {
              type: "mcq",
              q: "What's the correct order for a caption's structure?",
              options: [
                "Hashtags → CTA → Hook → Body",
                "Hook → Body → Details → CTA → Hashtags",
                "Details → Hashtags → Hook → CTA",
                "CTA → Hashtags → Body → Hook"
              ],
              answer: 1,
              explain: "Grab attention in the first line (Hook) → Body → Details → CTA → Hashtags is the basic order."
            },
            {
              type: "mcq",
              q: "What's the recommended number of fixed vs. content-specific hashtags?",
              options: ["10 fixed + 10 content-specific", "No fixed tags, only lots of content tags", "Up to 3 fixed + up to 2 content-specific", "Don't use hashtags at all"],
              answer: 2,
              explain: "Recommended: up to 3 fixed hashtags (e.g. #JICA, #JICAKyrgyzstan, #JapanKyrgyzstan) plus up to 2 content-specific tags."
            },
            {
              type: "mcq",
              q: "What's the recommended posting time?",
              options: ["Early morning, 5–6am", "Weekdays around 17:00–18:00", "After midnight", "Only weekend mornings"],
              answer: 1,
              explain: "Weekdays around 17:00–18:00, when school and work end, is recommended. Scheduled posting also cuts down on manual work."
            }
          ]
        }
      ]
    },

    /* ================= SECTION 3 (CapCut) ================= */
    {
      id: "s3",
      number: "03",
      icon: "capcut",
      color: "violet",
      title: "How to Use CapCut",
      shortDesc: "A hands-on section where you bring CapCut and learn by using it together.",
      learn: [
        "Be able to carry out all 12 basic operations needed for Reel editing in CapCut",
        "Work through each operation confidently while following its screen recording"
      ],
      blocks: [
        { type: "heading", text: "How to Use CapCut" },
        { type: "para", text: "Learn these 12 operations and you'll be able to handle the full Reel-editing workflow in CapCut. Each item includes a screen recording, plus an explanation in words of which button does what." },
        { type: "capcutStep", num: "1", title: "Fit the photo to the screen",
          body: "After adding a photo or video to the timeline, resize it so it fills the screen, with no empty margins.",
          steps: [
            "Tap the photo (or video) clip on the timeline to select it.",
            "Scroll the toolbar at the bottom to the right and tap \"Crop.\"",
            "Drag the corners of the cyan frame so the photo fills the whole screen (make sure no black bars remain at the top or bottom).",
            "Tap the checkmark (✓) in the top right to confirm."
          ],
          src: "videos/capcut/capcut_01_fit_to_screen.mp4", webm: "videos/capcut/capcut_01_fit_to_screen.webm", poster: "images/capcut/capcut_01_fit_to_screen.jpg" },
        { type: "capcutStep", num: "2", title: "How to cut",
          body: "The basic operation: split the timeline where you don't need footage, then delete it.",
          steps: [
            "Move the playhead to the point where you want to cut.",
            "Tap the clip to select it.",
            "Tap \"Split\" in the bottom toolbar — this divides the clip in two at that point.",
            "Tap the piece you don't need, then tap the trash icon (Delete) to remove it."
          ],
          src: "videos/capcut/capcut_02_cutting.mp4", webm: "videos/capcut/capcut_02_cutting.webm", poster: "images/capcut/capcut_02_cutting.jpg" },
        { type: "capcutStep", num: "3", title: "Cut zoom / frame enlargement",
          body: "Add a zoom (frame enlargement) at a cut point so the footage doesn't feel monotonous.",
          steps: [
            "Tap the clip you want to zoom in on.",
            "Tap \"Crop\" in the bottom toolbar (the same tool used in step 1, \"Fit the photo to the screen\").",
            "Drag the corners of the cyan frame slightly inward so the framing is a little tighter than the previous clip.",
            "Confirm with the checkmark. Changing the zoom level a little with each cut keeps the pacing feeling natural instead of repetitive."
          ],
          src: "videos/capcut/capcut_03_cut_zoom.mp4", webm: "videos/capcut/capcut_03_cut_zoom.webm", poster: "images/capcut/capcut_03_cut_zoom.jpg" },
        { type: "capcutStep", num: "4", title: "Speed up slow speech",
          body: "For someone who speaks slowly on camera, set that footage to **1.3x speed** to keep the pace up — just enough that it doesn't feel unnatural.",
          steps: [
            "Tap the clip you want to speed up.",
            "Tap \"Speed\" in the bottom toolbar.",
            "Staying on the \"Normal\" tab, drag the slider from 1.0x to around 1.3x (the new duration is shown at the top).",
            "If the voice pitch sounds unnatural, turn on \"Change audio pitch.\"",
            "Confirm with the checkmark."
          ],
          src: "videos/capcut/capcut_04_speed.mp4", webm: "videos/capcut/capcut_04_speed.webm", poster: "images/capcut/capcut_04_speed.jpg" },
        { type: "capcutStep", num: "5", title: "Photo fade-in",
          body: "How to set a soft fade-in for a photo as it appears.",
          steps: [
            "Tap the clip you want to fade in.",
            "Scroll the bottom toolbar to the left and tap \"Video effects.\"",
            "Find \"Fade In\" in the effects list and tap it.",
            "Once applied, a highlighted band appears at the start of the clip. Confirm with the checkmark."
          ],
          src: "videos/capcut/capcut_05_fade_in.mp4", webm: "videos/capcut/capcut_05_fade_in.webm", poster: "images/capcut/capcut_05_fade_in.jpg" },
        { type: "capcutStep", num: "6", title: "Subtitles",
          body: "Show what's being said as on-screen text, so the content comes across even without sound. Always check for mistakes afterward.",
          steps: [
            "Move the playhead to where each line of speech happens.",
            "Tap \"Text\" → \"Add text\" in the bottom toolbar.",
            "Pick a consistent style from \"Templates\" (for example, a simple outlined-text template) and type in the line being spoken.",
            "Drag the edges of the text box to adjust its size and position (somewhere that doesn't overlap Instagram's own UI).",
            "Confirm with the checkmark, and repeat for each line.",
            "Depending on the spoken language, you can also generate captions automatically from the same menu's \"Auto captions.\""
          ],
          src: "videos/capcut/capcut_06_subtitles.mp4", webm: "videos/capcut/capcut_06_subtitles.webm", poster: "images/capcut/capcut_06_subtitles.jpg" },
        { type: "capcutStep", num: "7", title: "Add music",
          body: "How to add background music.",
          steps: [
            "Tap \"Audio\" → \"Sounds\" in the bottom toolbar.",
            "Search by keyword, or browse Recommended tracks or categories like Vlog or Tense.",
            "Preview a track with its play button, then tap \"+\" to add it to the timeline.",
            "Trim the music clip on the timeline to match the video's length."
          ],
          src: "videos/capcut/capcut_07_music.mp4", webm: "videos/capcut/capcut_07_music.webm", poster: "images/capcut/capcut_07_music.jpg" },
        { type: "capcutStep", num: "8", title: "Add a title",
          body: "How to add an opening title/text at the start of the video.",
          steps: [
            "Move the playhead to the very start of the video.",
            "Tap \"Text\" → \"Add text,\" then pick a title-style template from \"Templates\" (e.g. bold text with an accent color).",
            "Type in the title text.",
            "Drag it to a position that doesn't overlap the captions (e.g. near the top of the screen).",
            "Confirm with the checkmark."
          ],
          src: "videos/capcut/capcut_08_title.mp4", webm: "videos/capcut/capcut_08_title.webm", poster: "images/capcut/capcut_08_title.jpg" },
        { type: "capcutStep", num: "9", title: "Add an ending",
          body: "How to add an ending at the end of the video.",
          steps: [
            "Tap the \"+\" at the very end of the timeline.",
            "Choose the shared ending video (the JICA logo card) from \"Recents\" or wherever it's saved.",
            "Trim the length if needed, then tap \"Add\" to append it right after the main footage."
          ],
          src: "videos/capcut/capcut_09_ending.mp4", webm: "videos/capcut/capcut_09_ending.webm", poster: "images/capcut/capcut_09_ending.jpg" },
        { type: "capcutStep", num: "10", title: "Save in high quality",
          body: "How to set resolution, frame rate, and bitrate to their high-quality settings when exporting.",
          steps: [
            "Tap \"AI UHD\" next to the \"Export\" button in the top right to open the export settings.",
            "Set \"Resolution\" to 1080P or 4K.",
            "Set \"Frame rate\" to 30 (or 60 for smoother motion).",
            "Set \"Bitrate\" as high as practical (use the Recommended value as a guide, or the maximum).",
            "Once everything's set, tap \"Export\" to render and save the video."
          ],
          src: "videos/capcut/capcut_10_export.mp4", webm: "videos/capcut/capcut_10_export.webm", poster: "images/capcut/capcut_10_export.jpg" },
        { type: "capcutStep", num: "11", title: "Extracting audio from a video",
          body: "How to pull just the audio out of a clip so you can edit it as its own, separate track.",
          steps: [
            "Tap the clip you want to extract audio from to select it.",
            "Tap \"AudioExtract\" in the bottom toolbar.",
            "The extracted audio clip can be tapped and edited on its own, just like any other clip — volume, trimming, fades, and audio effects all apply to it independently."
          ],
          src: "videos/capcut/capcut_11_extract_audio.mp4", webm: "videos/capcut/capcut_11_extract_audio.webm", poster: "images/capcut/capcut_11_extract_audio.jpg" },
        { type: "capcutStep", num: "12", title: "Replacing a video or photo",
          body: "How to swap out just the footage in a clip while keeping its subtitles, text, and effects exactly as they are. **Handy for series content that reuses a past video's template.**",
          steps: [
            "Tap the clip you want to replace to select it.",
            "Tap \"Replace\" in the bottom toolbar.",
            "Choose the new video or photo from \"Recents\" (or another source).",
            "A trim screen appears so the new footage matches the length of the original clip — adjust the position, then tap \"Confirm.\"",
            "Only the footage changes; the clip's subtitles, text, and effects stay exactly as they were."
          ],
          src: "videos/capcut/capcut_12_replace.mp4", webm: "videos/capcut/capcut_12_replace.webm", poster: "images/capcut/capcut_12_replace.jpg" },
        { type: "leadBox", text: "Almost every video-editing feature you could need is available in CapCut — you can recreate edits you've seen on YouTube or TV! For now, we recommend exploring the app's features yourself and trying things out, and looking things up if something doesn't work. **Never compromise on quality.**" }
      ]
    },

    /* ================= SECTION 4 ================= */
    {
      id: "s4",
      number: "04",
      icon: "canva",
      color: "amber",
      title: "How to Use Canva",
      shortDesc: "Learn how to use Canva to create Instagram images and carousels.",
      learn: [
        "Open the shared Canva project and swap in a new thumbnail image",
        "Understand that you can work from either a PC or the PR phone using the same steps",
        "Confidently upload photos and download a finished design while following the screen recordings"
      ],
      blocks: [
        { type: "heading", text: "How to use Canva" },
        { type: "canvaLink", url: "https://canva.link/hmbmtl3komvntci", label: "Open the shared Canva project" },
        { type: "para", text: "Access the link above to create a thumbnail. You can work from either a PC or the PR phone." },
        { type: "wideStep", num: "1", title: "Uploading and swapping in a photo",
          body: "How to upload a photo from your computer or phone into Canva, and swap it into a template.",
          steps: [
            "Tap \"Uploads\" in the left-hand toolbar.",
            "Tap \"Upload files\" and choose the photo you want to use.",
            "Once it's uploaded, the thumbnail appears in the Uploads panel.",
            "Drag that thumbnail onto the photo you want to replace (it swaps in automatically).",
            "If needed, drag the corner handles to adjust the photo's size and position."
          ],
          src: "videos/canva/canva_01_upload.mp4", webm: "videos/canva/canva_01_upload.webm", poster: "images/canva/canva_01_upload.jpg" },
        { type: "wideStep", num: "2", title: "Downloading the finished design",
          body: "How to export your finished design as a file and save it to your computer.",
          steps: [
            "Tap \"Share\" in the top right.",
            "In the panel that appears, tap \"Download.\"",
            "Under \"File type,\" choose the format to export (JPG or PNG if you'll use it as an image).",
            "For a multi-page design like a carousel, use \"Select pages\" to choose \"All\" or \"This page.\"",
            "Tap \"Download\" to save it."
          ],
          src: "videos/canva/canva_02_download.mp4", webm: "videos/canva/canva_02_download.webm", poster: "images/canva/canva_02_download.jpg" }
      ],
      practice: [
        "Open the Canva project from the link above (PC or PR phone)",
        "Swap the photo inside the template",
        "Open the same project on the PR phone",
        "Download the PNG from \"Share\" in the top right"
      ],
      quiz: [
        {
          type: "mcq",
          q: "What do you basically do when making a thumbnail in Canva?",
          options: ["Build the template from scratch", "Just swap out the photo", "Change the font every time", "Redesign the logo every time"],
          answer: 1,
          explain: "Just swapping the photo inside the shared template gives you a consistent, on-brand thumbnail."
        },
        {
          type: "truefalse",
          q: "You can work on a Canva project from both a PC and the PR phone.",
          answer: true,
          explain: "Correct — the same project is accessible from either device."
        },
        {
          type: "mcq",
          q: "How do you download the finished thumbnail as a PNG?",
          options: ["From \"File\" in the top left", "From \"Share\" in the top right", "From the bottom toolbar", "You can't download it"],
          answer: 1,
          explain: "Open the same project on the PR phone, then download the PNG from \"Share\" in the top right."
        }
      ]
    },

    /* ================= SECTION 5 (Checklist) ================= */
    {
      id: "s5",
      number: "05",
      icon: "check",
      color: "coral2",
      title: "Pre-Post Checklist",
      shortDesc: "The items you must check every single time, before posting to Instagram.",
      mostImportant: true,
      intro: "Before you hit \"post,\" go through this page from top to bottom. Once everything is checked, you're good to go.",
      groups: [
        {
          title: "Are you choosing between Reel and Carousel correctly?",
          items: [
            "**Can you include audio information (narration/interview)?**",
            "**Can you shoot at least 5 visually different clips** (different colors, people, locations)?"
          ]
        },
        {
          title: "Content",
          items: [
            "Is the message of this post narrowed down to just one thing?",
            "Can someone who doesn't know JICA's work understand it?",
            "Does it answer \"so what?\"",
            "Is it more than just a plain activity report?",
            "Does it show something only JICA can show?"
          ]
        },
        {
          title: "Reel",
          items: [
            "Does it include audio information (narration/interview)?",
            "Does it grab attention in the first 3 seconds?",
            "Is there suitable music?",
            "Does it fit within roughly 30–45 seconds?",
            "Are there no long greetings or introductions?",
            "Is there no moment you could trim, even by 0.5 seconds?",
            "Are there subtitles?",
            "Are the subtitles within 2 lines?",
            "Do the subtitles avoid overlapping Instagram's UI?",
            "Can the thumbnail alone communicate what it's about?",
            "Does the visual change every couple of seconds?",
            "**Make sure there is no CapCut watermark on the video**"
          ]
        },
        {
          title: "Caption",
          items: [
            "Is there a Hook in the first line?",
            "Is it not too long?",
            "Does it add the necessary supporting information?",
            "Is there a CTA?",
            "Are the hashtags appropriate?",
            "Are the Kyrgyz/Russian, etc. language settings correct?"
          ]
        },
        {
          title: "Design",
          items: [
            "Is a thumbnail being used? If not, go to Canva (https://canva.link/hmbmtl3komvntci) and make one",
            "Is the logo position and size consistent?",
            "Is the text easy to read?",
            "Is it 4:5 or 9:16?"
          ]
        }
      ]
    }
  ]
};
