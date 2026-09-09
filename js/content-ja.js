/* =========================================================================
   SNS運用マニュアル — 日本語コンテンツ
   出典: SNS運用マニュアル.docx（内容は改変せず、UI表示用に構造化しています）
   ========================================================================= */
window.CONTENT_JA = {
  ui: {
    siteTitle: "SNS運用マニュアル",
    siteSubtitle: "JICA Kyrgyzstan Instagram運用ガイド",
    langName: "日本語",
    home: "トップ",
    learnBtn: "学ぶ",
    startBtn: "はじめる",
    backHome: "トップへ戻る",
    sectionLearnHeading: "このセクションで学ぶこと",
    sectionBodyHeading: "本文",
    sectionExampleHeading: "実例：悪い例 → 良い例",
    sectionPracticeHeading: "実践ステップ",
    sectionQuizHeading: "復習クイズ",
    quizNext: "次の問題へ",
    quizRetry: "もう一度挑戦する",
    quizFinishTitle: "クイズ結果",
    quizScoreLabel: "正解数",
    quizCorrect: "正解！",
    quizIncorrect: "残念、不正解…",
    quizExplainHeading: "解説",
    quizReviewHeading: "もう一度確認すべきポイント",
    checklistTitle: "投稿前確認チェックリスト",
    checklistProgress: "進捗",
    checklistDone: "全項目をチェックしました",
    checklistDoneMsg: "すべての項目を確認しました。投稿してOKです！",
    checklistReset: "チェックをリセット",
    checklistFinalNote: "ここまでできたらアイスルーさん、スベトラーナさんに確認！",
    printBtn: "印刷用マニュアルを見る",
    spotQuizHeading: "投稿診断クイズ：目的を理解できていないのはどれ？",
    ngLabel: "NG",
    goodLabel: "GOOD",
    whyLabel: "なぜ？",
    badgeMostImportant: "最重要",
    comingSoonTitle: "近日公開",
    comingSoonBody: "このセクションは、CapCutを手元に用意して、一緒に操作しながら学ぶハンズオン形式で今後追加されます。",
    comingSoonList: [
      "セクションページ",
      "解説動画",
      "操作手順（スクリーンショット付き）",
      "ステップ解説",
      "練習課題"
    ],
    footerNote: "本マニュアルは職員向け社内資料です。"
  },

  sections: [
    /* ================= SECTION 1 ================= */
    {
      id: "s1",
      number: "01",
      icon: "target",
      color: "coral",
      title: "Instagramの目的・ターゲット・内容論",
      shortDesc: "何のために発信するのか、誰に届けるのか、何を発信するのかを理解する。",
      learn: [
        "Instagramを運用する「理由」と目指すゴールが説明できるようになる",
        "誰に向けて発信しているのか（メインターゲット）が説明できるようになる",
        "投稿の3つのコンテンツカテゴリーと、それぞれの組み立て方がわかるようになる"
      ],
      blocks: [
        { type: "heading", text: "1．Instagram運用の目的" },
        { type: "subheading", text: "1-1．Instagramを運用する理由" },
        { type: "para", text: "Instagramは、利用者が情報を「調べる」ためだけではなく、日常的にエンターテインメントとして利用するSNSである。" },
        { type: "para", text: "そのため、JICAの活動を一方的に説明するだけではなく、**「役に立つ」「面白い」「もっと知りたい」と感じてもらえるコンテンツ**を作ることが重要である。" },
        { type: "para", text: "また、Instagramでは個々の投稿だけではなく、**アカウントそのものが一つのブランドとして認識される。**そのため、投稿内容・デザイン・文章・プロフィール・ハイライトなどを一貫させ、「これはJICAのアカウントだ」と一目で分かる状態を目指す。" },

        { type: "heading", text: "2．アカウント戦略" },
        { type: "subheading", text: "2-1．アカウント戦略とは" },
        { type: "para", text: "Instagramのアカウント戦略では、以下の3点を明確にする。" },
        { type: "cards3", items: [
          { label: "Who", title: "誰に届けるのか", icon: "users" },
          { label: "What", title: "何を伝えるのか", icon: "message" },
          { label: "Goal", title: "何を達成したいのか", icon: "flag" }
        ]},
        { type: "para", text: "つまり、単に「JICAの情報を投稿する」のではなく、**ターゲットに合わせて伝える内容と方法を決めること**がアカウント戦略である。" },

        { type: "heading", text: "3．Instagram運用の目標" },
        { type: "subheading", text: "3-1．最終的な目標" },
        { type: "goalBox", text: "Instagramを通じて、**JICAへの認知・理解・親近感を高める。**" },
        { type: "para", text: "また、JICAがキルギスでどのような役割を果たしているのか、どのような活動を行っているのかについて、ポジティブなイメージを形成する。" },

        { type: "subheading", text: "3-2．中期的な目標" },
        { type: "para", text: "キルギスでは、省庁関係者もInstagramで情報収集をしている。この状況をふまえ、中期的な目標は「フォロワー外」と「フォロワー内」に分けて考える。" },
        { type: "structureFlow", steps: [
          { title: "フォロワー外リーチ", body: "休憩時間などにInstagramを見ているときに、**偶然JICAの投稿を見かけて、フォローしてもらうこと**を目標とする。" },
          { title: "フォロワー内", body: "**JICAが何をしているか、どのように貢献しているかを深く知ってもらうこと**を目標とする。" }
        ]},

        { type: "heading", text: "4．ターゲット" },
        { type: "flow", title: "目指す流れ", steps: [
          { text: "日本または国際協力に興味がある" },
          { text: "なんとなくInstagramを見ていてJICAの動画が流れてくる", note: "（ある程度投稿が再生回数を稼ぎ、多くの人にリーチする必要がある）" },
          { text: "動画自体に興味をもって手を止めてみる", note: "（投稿として優れている必要がある）" },
          { text: "JICAに興味を持つ・フォローする", note: "（JICAの活動を紹介する動画である必要がある）" }
        ]},
        { type: "subheading", text: "4-1．メインターゲット" },
        { type: "targetCard", tag: "A", title: "20〜30代の政府関係者・省庁職員等", body: "JICAの事業と直接・間接的に関わる可能性がある層。Instagramを個人的に利用している際にJICAの投稿を目にし、次のような流れを作る。", flow: ["「JICAはこんなことをしているんだ」", "「この活動は面白い」", "「もっと知りたい」", "フォロー"] },
        { type: "targetCard", tag: "B", title: "日本文化・日本語に関心を持つ10〜30代", body: "日本語学習者、日本文化コミュニティ、日本に関心を持つ若者など。この層に対しては、JICAそのものを直接説明するだけでなく、日本・キルギス双方の文化や人を入り口としてJICAを知ってもらうことが有効である。" },

        { type: "heading", text: "5．コンテンツの基本方針" },
        { type: "leadBox", text: "InstagramでJICAを紹介するときに重要なのは、「JICAについて説明すること」ではなく、「JICAを知りたくなるきっかけを作ること」である。" },
        { type: "para", text: "投稿を作る際には、**「この投稿を初めて見た人は、なぜ最後まで見るのか？」**を必ず考える。特にReelsでは、最初の数秒で「見る理由」を提示する。" },
        { type: "example", bad: "「今日は○○プロジェクトについて紹介します。」", badWhy: "説明的で、最初の数秒に「見る理由」が提示されておらず、視聴者が離脱しやすい。", good: "「なぜこの道路は冬でも使えるのでしょう？」", goodWhy: "問いかけから始まることで、続きが気になり最後まで見たくなる。" },
        { type: "note", text: "資料でも、長い挨拶・導入を避け、最初に重要なメッセージや問いを提示することを推奨している。" },

        { type: "heading", text: "6．コンテンツカテゴリー" },
        { type: "para", text: "基本的なコンテンツは以下の3カテゴリーに分類する。" },
        { type: "categoryHeading", num: "①", title: "News & Updates", body: "JICAの最新情報を伝える。" },
        { type: "list", items: ["重要な会議", "要人の訪問", "イベント"] },
        { type: "para", text: "ただし、単純な「活動報告」にしない。" },
        { type: "subheading", text: "基本構成" },
        { type: "flow", title: "Why → What → Who → So What?", steps: ["Why：なぜこの活動が必要だったのか", "What：JICAは何をしたのか", "Who：誰が関わったのか", "So What：結果として何が変わったのか／なぜ重要なのか"] },
        { type: "example", bad: "「○○プロジェクトが表彰されました」だけ", good: "「キルギスの○○という課題があった → JICAが○○を実施 → ○○省・地域の人々と協力 → その結果○○につながった → 今回、その取り組みが評価された」というストーリーにする", isStory: true },
        { type: "subheading", text: "具体例（重要な会議の場合）" },
        { type: "structureFlow", compact: true, steps: [
          { title: "Why", body: "牛乳産業を安定させたい" },
          { title: "What", body: "品質向上のための人材育成" },
          { title: "Who", body: "知事・関係企業の担当者" },
          { title: "So What？", body: "人材育成の基礎が整い、品質が大幅に向上した" }
        ]},

        { type: "categoryHeading", num: "②", title: "Our Activities：JICAの活動紹介", body: "プロジェクト紹介では、単純にプロジェクト名・パートナー・目的・実施期間・実施内容を並べるだけにしない。" },
        { type: "subheading", text: "基本構成" },
        { type: "flow", title: "Why → What → Result → Today", steps: ["Why：キルギスにはどんな課題があったのか", "What：JICAは何をしたのか", "Result：何が変わったのか", "Today：現在、どのようにつながっているのか"] },
        { type: "para", text: "これによって、プロジェクトの「説明」から、**「JICAの活動によって何が変わったのか」というストーリー**へ変える。" },
        { type: "subheading", text: "具体例（OVOP：一村一品運動）" },
        { type: "structureFlow", compact: true, steps: [
          { title: "Why", body: "農村が衰退し、女性の地位が低かった" },
          { title: "What", body: "OVOP（一村一品運動）を実施" },
          { title: "Result", body: "女性に仕事ができ、地位が向上した" },
          { title: "Today", body: "カザフスタン・ウズベキスタンでも注目されている" }
        ]},
        { type: "videoEmbed", src: "videos/ovop_reel.mp4", webm: "videos/ovop_reel.webm", poster: "images/ovop_poster.jpg",
          caption: "OVOP（一村一品運動）を紹介するリール動画の例。上のWhy→What→Result→Todayの流れを、実際に関わった人へのインタビューを通じて伝えている。" },

        { type: "categoryHeading", num: "③", title: "Japanese Culture & Japan：日本文化", body: "日本文化についても、単なる「日本文化百科事典」にならないようにする。" },
        { type: "example", bad: "「寿司とは？」→ 寿司の歴史や種類を説明するだけ", badWhy: "これではJICAとの関係が弱い。",
          good: "日本文化 × キルギスの人々 × JICAを組み合わせて紹介する（例：キルギス人から見た日本文化、日本とキルギスの意外な共通点など）",
          goodWhy: "日本文化・キルギスの人々・JICAの3つを組み合わせることで、JICAとの関係を保ちながら紹介できる。" },
        { type: "subheading", text: "推奨する考え方" },
        { type: "vennBox", text: "Japanese Culture × Kyrgyz People × JICA" },
        { type: "para", text: "つまり、日本文化・キルギスの人々・JICAを組み合わせる。たとえば、" },
        { type: "list", items: ["キルギス人から見た日本文化", "日本とキルギスの意外な共通点", "日本とキルギスの文化の違い", "JICA関係者が日本文化を紹介", "キルギス人が日本について感じたこと"] }
      ],
      spotQuiz: [
        {
          type: "mcq",
          q: "次の4つの投稿アイデアのうち、Instagramを運用する目的を理解できていないのはどれ？",
          options: [
            "「○○プロジェクトの近況報告：先週、△△会社を訪問しました」という淡々とした活動報告だけの投稿",
            "「なぜこの牛乳工場は品質が急に良くなったのでしょう？」という問いかけから始まる投稿",
            "実際に関わった知事や企業担当者の声を交えて、JICAの活動をストーリーとして伝える投稿",
            "キルギス人スタッフが日本文化について感じたことを紹介する投稿"
          ],
          answer: 0,
          explain: "単なる活動報告は「役に立つ」「面白い」「もっと知りたい」と感じてもらえる工夫がなく、視聴者は最後まで見てくれません。他の3つは、いずれも見る理由やJICA×人×文化のつながりを意識した投稿です。"
        },
        {
          type: "mcq",
          q: "一見良さそうに見えるが、実は目的を理解できていない投稿はどれ？（ひっかけ注意）",
          options: [
            "冒頭で「なぜこの道路は冬でも使えるのでしょう？」と問いかけたあと、道路整備の技術的な話だけが延々と続き、JICAやキルギスの人々が一切登場しない投稿",
            "Hookで問いかけたあと、JICAが関わった経緯と実際に恩恵を受けた人の声を紹介し、最後にフォローを呼びかける投稿",
            "「なぜこのプロジェクトが表彰されたのでしょう？」から始まり、課題→JICAの取り組み→協力した人々→結果、というストーリーで構成された投稿",
            "日本文化とキルギスの人々とJICAを組み合わせて紹介する投稿"
          ],
          answer: 0,
          explain: "冒頭のHookが良くても、そのあとJICAの活動や人とのつながりに戻ってこなければ「JICAへの認知・理解・親近感を高める」という目的から外れてしまいます。Hookはあくまで入り口であり、本文でJICAの活動や関わった人のストーリーに接続することが重要です。"
        },
        {
          type: "mcq",
          q: "メインターゲットを意識できていない投稿はどれ？",
          options: [
            "20〜30代の政府関係者が関心を持ちそうな、JICAと省庁の協力プロジェクトを紹介する投稿",
            "日本語学習者や日本文化に興味のある若者に向けて、日本文化×キルギスの人×JICAを組み合わせて紹介する投稿",
            "ターゲットを絞らず、とにかく毎日大量に投稿することだけを目標にした運用",
            "「JICAはこんなことをしているんだ」と思ってもらえるよう、政府関係者に身近な場面を描いた投稿"
          ],
          answer: 2,
          explain: "アカウント戦略ではWho（誰に届けるのか）を明確にすることが重要です。ターゲットを意識せずただ投稿数を増やすことは、目的を理解できていない運用といえます。"
        },
        {
          type: "mcq",
          q: "「Our Activities（活動紹介）」の投稿として、一見丁寧に見えるが実は目的を理解できていないのはどれ？",
          options: [
            "プロジェクト名・パートナー・目的・実施期間・実施内容を漏れなく丁寧に箇条書きで並べた投稿",
            "Why（キルギスの課題）→What（JICAの取り組み）→Result（変化）→Today（現在のつながり）の順でストーリーとして伝える投稿",
            "農村の衰退や女性の地位向上という課題から、OVOPの取り組み、そして海外への広がりまでをストーリーで見せる投稿",
            "実際にインタビューに答える人の声を交えて、変化を伝える投稿"
          ],
          answer: 0,
          explain: "情報を漏れなく並べるだけでは「説明」で終わってしまいます。丁寧に見えても、Why→What→Result→Todayという「ストーリー」になっていなければ、目的を理解できた投稿とはいえません。"
        }
      ],
      quiz: [
        {
          type: "mcq",
          q: "Instagramを運用する目的として、資料が示している考え方はどれ？",
          options: [
            "JICAの活動を一方的に説明することが最優先",
            "「役に立つ」「面白い」「もっと知りたい」と感じてもらえるコンテンツを作る",
            "とにかく毎日投稿数を増やすことが最優先",
            "フォロワー数だけを目標にする"
          ],
          answer: 1,
          explain: "Instagramは日常的にエンターテインメントとして使われるSNSなので、一方的な説明ではなく「役に立つ／面白い／もっと知りたい」と思ってもらえる工夫が重要です。"
        },
        {
          type: "truefalse",
          q: "アカウント戦略で明確にすべき3点は「Who・What・Goal」である。",
          answer: true,
          explain: "その通りです。「誰に届けるのか（Who）」「何を伝えるのか（What）」「何を達成したいのか（Goal）」の3点を明確にします。"
        },
        {
          type: "goodng",
          q: "Reelsの冒頭として、より効果的なのはどちら？",
          optionA: { label: "今日は○○プロジェクトについて紹介します。", verdict: "ng" },
          optionB: { label: "なぜこの道路は冬でも使えるのでしょう？", verdict: "good" },
          explain: "問いかけから始めることで「続きが気になる」状態を作り、最後まで見てもらいやすくなります。"
        },
        {
          type: "mcq",
          q: "「Our Activities（JICAの活動紹介）」の基本構成はどれ？",
          options: [
            "プロジェクト名 → パートナー → 目的 → 実施期間",
            "Why → What → Result → Today",
            "Hook → CTA → ハッシュタグ",
            "Who → What → Goal"
          ],
          answer: 1,
          explain: "「なぜ課題があったのか（Why）→ JICAは何をしたか（What）→ 何が変わったか（Result）→ 現在どうつながっているか（Today）」というストーリー構成が推奨されています。"
        },
        {
          type: "mcq",
          q: "日本文化コンテンツで避けるべきなのはどれ？",
          options: [
            "キルギス人から見た日本文化を紹介する",
            "日本とキルギスの意外な共通点を紹介する",
            "「寿司とは？」など、文化そのものの説明だけで終わる投稿",
            "JICA関係者が日本文化を紹介する"
          ],
          answer: 2,
          explain: "文化の説明だけではJICAとの関係が弱くなります。「日本文化 × キルギスの人々 × JICA」を組み合わせることが推奨されています。"
        }
      ]
    },

    /* ================= SECTION 2 ================= */
    {
      id: "s2",
      number: "02",
      icon: "method",
      color: "sky",
      title: "方法論",
      shortDesc: "実際にInstagram投稿を企画・撮影・編集・投稿するときの考え方や方法を学ぶ。",
      learn: [
        "リールとカルーセル、どちらを選ぶべきか判断できるようになる",
        "リール・カルーセルそれぞれの制作ルールが説明できるようになる",
        "動画構成（Hook〜CTA）、字幕、サムネイル、キャプション、ハッシュタグ、投稿時間のルールがわかるようになる"
      ],
      topBlocks: [
        { type: "heading", text: "リールかカルーセルか" },
        { type: "para", text: "以下の二つをチェックする。" },
        { type: "list", items: ["**音声的な情報（ナレーション・インタビュー）を入れられるか**", "**絵の違う動画を最低5本は撮れるか**（違う色・違う人・違う場所）"] },
        { type: "decisionBox", text: "これがどちらも「いいえ」ならカルーセル。二つの傾向が低いほどリールが向いていない。無理やりリールにしても公的機関としての堅さが失われるだけになってしまう。リールはフォロー外にはリーチしやすいが、逆にフォロワーには届きにくいことがある。確実に情報を伝えたいだけなら、イメージカルーセルのほうが良い。低いクオリティのリールをたくさん作るより、高いクオリティのを一か月に一つ出す方が効果的。題材がないのに無理にリールにしない。" }
      ],
      tabs: [
        /* ---------------- Reel tab ---------------- */
        {
          key: "reel",
          label: "リール",
          quizHeading: "リール・クイズ",
          blocks: [
            { type: "heading", text: "リール方法論" },
            { type: "list", items: [
              "動画は必ず**1分以下**。ドキュメンタリーは長くなっても仕方ないけど、それ以外は45秒以下にするように努める。",
              "話すのが遅い人は**1.3倍速**で。違和感がない程度に倍速する。",
              "**字幕と音楽は必ず入れる**。字幕は、いったんチャッピーに音声入力して、そのままロシア語・キルギス語にして、端末にメールしてコピペすると良い。（流行りのテンプレは例外。音楽は無くてもいい。字幕は必須。自動字幕できたら楽。それほど字幕は時間かからない。）",
              "シリーズものにはシリーズ統一の**オープニング**をつける。",
              "必ず**エンディング**をつける。"
            ]},
            { type: "ratioMockup", ratio: "9:16", label: "リールの基本比率" },
            { type: "videoEmbed", narrow: true, src: "videos/ending_example.mp4", webm: "videos/ending_example.webm", poster: "images/ending_example_poster.jpg",
              caption: "エンディングの例。JICAキルギス事務所のロゴと名称で締めくくる、シンプルな統一エンディング。" },
            { type: "downloadLink", href: "videos/downloads/ending_example.zip", label: "エンディング動画をダウンロード（ZIP）",
              note: "ZIP形式でダウンロードされます。解凍すると動画ファイルが使える（JICAのパソコンでは動画ファイルの直接ダウンロードがブロックされる場合があるため、ZIPにしている）。" },
            { type: "note", text: "投稿するときに**キャップカットのウォーターマークが入っていないことを確かめる。**" },

            { type: "heading", text: "11．動画の構成" },
            { type: "para", text: "基本的には以下の構成を推奨する。" },
            { type: "structureFlow", steps: [
              { title: "① Hook", body: "最初の3秒で興味を引く。", examples: [
                "「なぜ○○なのでしょう？」",
                "「キルギスの○○が変わりました。」",
                "「実は、この○○には日本の技術が使われています。」",
                "「この場所、JICAと関係があります。」",
                "「日本とキルギスには、意外な共通点があります。」"
              ]},
              { title: "② Main Information", body: "最も重要な情報を伝える。" },
              { title: "③ Story / Example", body: "実際の人・場所・数字・現場を見せる。" },
              { title: "④ Result", body: "「それによって何が変わったのか」を伝える。" },
              { title: "⑤ CTA", body: "視聴者に次の行動を促す。", examples: ["Follow", "Share", "Comment", "詳細を見る", "他の投稿を見る"] }
            ]},

            { type: "heading", text: "12．Reelsの運用ルール" },
            { type: "subheading", text: "12-1．動画の長さ" },
            { type: "statBox", stat: "30〜45秒", label: "目安：今後の動画の長さ（最大60秒程度まで）", emphasis: true },
            { type: "statBox", stat: "74.3秒", label: "参考：現在の平均動画時間", muted: true },
            { type: "subheading", text: "編集時のポイント" },
            { type: "list", items: [
              "長い挨拶を削る",
              "最初に結論・疑問を提示する",
              "不要な移動・準備シーンを削る",
              "0.5秒でも削れる「間」を削る。不必要な間をできるだけ削ることを忘れないこと。"
            ]},

            { type: "heading", text: "13．動画のフォーマット（Reels）" },
            { type: "formatTable", rows: [
              { label: "Reels", value: "9:16", note: "縦型動画を基本とする。" }
            ]},

            { type: "heading", text: "14．字幕" },
            { type: "para", text: "Reelsでは、**原則としてすべての動画に字幕を付ける。**現在は字幕付きReelsが約3分の1だが、今後はすべてのReelsに字幕を入れることを推奨する。" },
            { type: "subheading", text: "字幕ルール" },
            { type: "list", items: [
              "1画面につき最大2行",
              "InstagramのUIと重ならない位置に配置",
              "音声がなくても内容を理解できるようにする"
            ]},

            { type: "heading", text: "15．サムネイル" },
            { type: "para", text: "サムネイルの役割は、**「この動画は何についての動画なのか」を一瞬で伝えること。**" },
            { type: "goodng", ngLabel: "Project Update", goodLabel: "Why does this road work in winter?", note: "のように、内容や問いが一目で分かるタイトルを使う。" },
            { type: "imgFigure", narrow: true, src: "images/reel_thumbnail_example.jpg", alt: "リールのサムネイル例",
              caption: "サムネイル例。冒頭に問いかけのテキストを配置し、字幕と組み合わせることで、一目で「何についての動画か」が伝わる。" },
            { type: "para", text: "また、Reelsごとにデザインを変えすぎず、一定のレイアウトを統一する。" },

            { type: "heading", text: "16．CTA（Call to Action）" },
            { type: "para", text: "投稿の最後には、可能な限りCTAを入れる。目的は単純に「いいね」を求めることではなく、**視聴者に次の行動をしてもらうこと。**" },
            { type: "list", items: [
              "Follow us for more JICA stories.",
              "What do you think?",
              "Have you ever experienced this?",
              "Share this with someone interested in Japan.",
              "Learn more about JDS.",
              "Check our Highlights for more information."
            ]},
            { type: "para", text: "CTAは投稿内容に合わせて使い分ける。" },

            { type: "heading", text: "リールの内容について" },
            { type: "subheading", text: "エンタメ" },
            { type: "leadBox", text: "必ず、JICAの活動紹介にかかわるようにする。面白そう、職員に親近感がわく、だけで撮らないこと！" },
            { type: "para", text: "フォローしている人たちは、エンタメ的な面白さやJICA職員が踊っている様子を見るためにフォローしているわけではない。JICAが何をしているのか、JICAが提供する情報のためにフォローしているから、それを見失わないこと。" },
            { type: "subheading", text: "例）日本語紹介 × 活動紹介" },
            { type: "para", text: "写真だけでエンタメ性の高い動画になる・活動を紹介できてしまうからおすすめ。日本に興味のある層が基本的にフォローしているため、日本語を紹介することも理にかなっている。" },
            { type: "para", text: "CapCutにあるプロジェクトをそのまま動画とキャプションを入れ替えて運用するだけでできる。編集に時間がかからない。動画を撮ればすぐにできる。撮影者のみでの動画の撮影が可能。周りを巻き込まないため楽。" },

            { type: "heading", text: "ドキュメンタリー形式の動画の作り方" },
            { type: "videoEmbed", src: "videos/documentary_example.mp4", webm: "videos/documentary_example.webm", poster: "images/documentary_poster.jpg",
              caption: "ドキュメンタリー形式の動画の例。斜め45度からのインタビューと字幕を組み合わせている。下の「撮影時」「質問」「編集時」のポイントを確認しながら見てみましょう。" },
            { type: "subheading", text: "撮影時" },
            { type: "list", items: [
              "斜め45度から、インタビュー者とは違う人が撮影。できるだけ動かさず、できたら定点。",
              "必ずグリッドを用いて動画を撮影。右の線と顔がかぶるように。頭の上に一升分開ける。",
              "それとは別に、その人が作業をしているところ、誰かと話しているところをやらせでもいいからできるだけ多くとる。無かったら、商品や景色などの無機物でもよい。",
              "できたら当時の写真や動画をメッセージでお願いしておく。",
              "30分撮って最終的に1分になる。"
            ]},
            { type: "gridMockup" },
            { type: "subheading", text: "質問" },
            { type: "list", items: [
              "質問は事前に準備する。",
              "JICAの良さを伝える、という目的にかなう質問。答えをある程度想定して、答えてほしい内容を聞く。",
              "キルギス人に聞くときは通訳をおくあるいは英語で質問してロシア語・キルギス語で答えてもらうようにする。どのみちキルギス語に翻訳するから、無理して英語で答えさせない。"
            ]},
            { type: "subheading", text: "編集時" },
            { type: "list", items: [
              "初めにインタビュー対象が話しているところから始まる。2〜5秒くらいのキリのいいところで、インタビューは音声のみにして映像を違うのに切り替える。話終わりの時にもう一度インタビュー対象に戻ってくる。",
              "質問の音声は入れない。頭上あたりにテキストで入れる。",
              "字幕と音楽が必須。",
              "JICAの良さが伝わる、いいことを答えている質問3問程度に絞って60秒以内に納めるようにする。あまりにもおさまらなかったら二回に分けてパート1、パート2とつける。"
            ]},

            { type: "subheading", text: "コラム：出演のお願いとおすすめの撮り方" },
            { type: "leadBox", text: "コンテンツ制作において最も大切なのはパーソナライゼーション。人間が出演し、話したほうが、ずっと高いエンゲージメントを得られる。**一言だけの出演でも大きな助けになるので、できるだけ協力してほしい。**" },
            { type: "para", text: "コンテンツは作り続ける必要があるため、「過去に出たことがある」からといって毎回免除になるわけではない。ただし、一部の人に負担が偏りすぎないように配慮する。" },
            { type: "subheading", text: "おすすめのコンテンツ" },
            { type: "para", text: "JICAキルギスでは、パーソナライズされた動画を撮るのが難しい。そこで、プロジェクトに関わった外部の人に、プロジェクトのついでに2〜3問インタビューをしたり、スピーチしている様子を撮影したりするのがおすすめ。" },
            { type: "note", text: "外部のインタビューなら**顔は映さなくてよい。**足元を撮って声だけでも十分。とにかくリールには音声情報が重要。" }
          ],
          quiz: [
            {
              type: "mcq",
              q: "リール動画の長さの目安は？（ドキュメンタリーを除く）",
              options: ["10〜15秒", "30〜45秒（最大60秒程度）", "2〜3分", "制限はない"],
              answer: 1,
              explain: "現在の平均は74.3秒ですが、これはあくまで参考情報です。今後は30〜45秒を基本とし、最大60秒程度を目安にします。"
            },
            {
              type: "mcq",
              q: "リールに必ず入れるべきものは？",
              options: ["音楽だけ", "字幕と音楽", "テロップと絵文字だけ", "何も入れなくてよい"],
              answer: 1,
              explain: "字幕と音楽は必ず入れます。流行りのテンプレを使う場合は音楽がなくても構いませんが、字幕は必須です。"
            },
            {
              type: "mcq",
              q: "動画構成の正しい順番はどれ？",
              options: [
                "CTA → Hook → Result → Story",
                "Hook → Main Information → Story/Example → Result → CTA",
                "Story → Hook → CTA → Result",
                "Main Information → CTA → Hook"
              ],
              answer: 1,
              explain: "最初の3秒で興味を引く（Hook）→重要情報→事例→結果→次の行動を促す（CTA）の順が基本です。"
            },
            {
              type: "mcq",
              q: "Reelsの字幕ルールとして正しいのは？",
              options: [
                "白の太字・黒いアウトラインなど、装飾を細かく指定する",
                "1画面につき最大2行で、InstagramのUIと重ならない位置に、音声がなくても理解できるように入れる",
                "字幕は不要",
                "字幕は英語のみでよい"
              ],
              answer: 1,
              explain: "装飾の細かさよりも、「2行以内」「UIと重ならない」「音声なしでも理解できる」という機能面が重要です。"
            },
            {
              type: "goodng",
              q: "サムネイルのタイトルとして、より効果的なのはどちら？",
              optionA: { label: "Project Update", verdict: "ng" },
              optionB: { label: "Why does this road work in winter?", verdict: "good" },
              explain: "内容や問いが一目で分かるタイトルの方が、「この動画は何についてか」を一瞬で伝えられます。"
            }
          ]
        },

        /* ---------------- Carousel tab ---------------- */
        {
          key: "carousel",
          label: "カルーセル",
          quizHeading: "カルーセル・クイズ",
          blocks: [
            { type: "heading", text: "カルーセル方法論" },
            { type: "list", items: [
              "必ずこの外枠を少なくとも**サムネイル**には使う。",
              "**横4：縦5**で必ず投稿すること。それ以外で投稿すると投稿ごとにバラバラになって見た目が悪いうえ、変な余白ができてしまい、公的機関としての堅実性・プロフェッショナル性に欠ける。",
              "そのためにできるだけ写真は**縦**でとる！",
              "横の写真になってしまった場合は、サムネイルを使って余白を埋めてこの比率で投稿する。"
            ]},
            { type: "imgFigure", src: "images/carousel/carousel_frame.png", alt: "カルーセル投稿の外枠テンプレート例",
              caption: "実際に使用している外枠テンプレートの例（乳製品プロジェクト紹介の投稿）。上部の帯にJICAロゴ、下部の帯にタイトルを配置する構成を、すべてのカルーセル投稿で統一する。" },
            { type: "canvaLink", url: "https://canva.link/hmbmtl3komvntci", label: "外枠テンプレート（Canva）を開く" },
            { type: "ratioMockup", ratio: "4:5", label: "カルーセル・写真投稿の基本比率" },

            { type: "heading", text: "13．写真・カルーセルのフォーマット" },
            { type: "formatTable", rows: [
              { label: "写真・Carousel", value: "4:5", note: "を基本とする。" }
            ]},
            { type: "para", text: "また、JICA Blueをメインカラーとして使用し、ロゴの位置・ロゴの大きさ・フォント・デザインテンプレート・タイトルの位置などを可能な限り統一する。目的は、**投稿を見た瞬間にJICAのコンテンツだと分かる状態を作ること**である。" }
          ],
          quiz: [
            {
              type: "mcq",
              q: "「音声情報を入れられない」かつ「違う絵の動画を5本撮れない」場合、どちらを選ぶべき？",
              options: ["リール", "カルーセル", "どちらでもよい", "投稿を中止する"],
              answer: 1,
              explain: "両方「いいえ」ならカルーセルを選びます。無理にリールにすると公的機関としての堅さが失われてしまいます。"
            },
            {
              type: "mcq",
              q: "カルーセル（写真投稿）の基本の縦横比は？",
              options: ["1:1", "16:9", "4:5", "3:4"],
              answer: 2,
              explain: "カルーセルは横4：縦5で統一します。バラバラの比率だと見た目が悪くなり、プロフェッショナル性に欠けます。"
            },
            {
              type: "mcq",
              q: "カルーセルの外枠について正しいのは？",
              options: [
                "投稿ごとに自由にデザインを変えてよい",
                "少なくともサムネイルには必ず同じ外枠を使う",
                "外枠は使わなくてよい",
                "文字さえ入っていればデザインは何でもよい"
              ],
              answer: 1,
              explain: "外枠を統一することで、投稿を見た瞬間にJICAのコンテンツだと分かる状態を作ります。"
            },
            {
              type: "mcq",
              q: "横向きの写真しか用意できなかった場合はどうする？",
              options: ["投稿しない", "無理やり9:16に引き伸ばす", "サムネイル機能を使って余白を埋め、4:5で投稿する", "Instagramのストーリーズだけに使う"],
              answer: 2,
              explain: "できるだけ写真は縦で撮ることが推奨されていますが、横になってしまった場合はサムネイルで余白を埋めて4:5の比率に統一します。"
            }
          ]
        },

        /* ---------------- Caption / posting time tab ---------------- */
        {
          key: "caption",
          label: "キャプション・投稿時間",
          quizHeading: "キャプション・投稿時間クイズ",
          blocks: [
            { type: "heading", text: "17．キャプション" },
            { type: "note", text: "動画の内容をまとめてAIツールに入力すると、そのままキャプション案を作成できる。以下のプロンプトをコピーして使用する。" },
            { type: "promptBox", label: "コピペ用プロンプト（AIキャプション作成）", copyLabel: "コピー", copiedLabel: "コピーしました！",
              text: "Create an Instagram caption based on the video/image content below.\nWrite in : Russian and Kyrgyz.\nRequirements:\n* 70–80 words max per language\n* Add information/context that is not obvious from the video/image; do not simply repeat it.\n* Structure: Hook → brief context/details → CTA\n* Natural, friendly, professional tone for JICA Kyrgyzstan's official Instagram\n* Do not invent information.\n* Use 0–3 emojis if appropriate.\n* Hashtags: #JICA #JICAKyrgyzstan #JapanKyrgyzstan + up to 2 relevant hashtags\n\nAfter the two captions, add a short Japanese explanation of the caption's meaning\nVideo/image content:\n[PASTE CONTENT HERE]",
              note: "「[PASTE CONTENT HERE]」の部分に、動画・画像の内容（何が映っているか、話している内容など）を貼り付けて使用する。" },
            { type: "subheading", text: "17-1．基本方針" },
            { type: "para", text: "キャプションは、動画・画像を見ただけでは分からない情報を補足する役割とする。目安として、**1言語につき70〜80 words程度まで**を基本とし、必要に応じてキルギス語・ロシア語、さらに英語を使用する。" },
            { type: "subheading", text: "17-2．キャプションの構成" },
            { type: "structureFlow", compact: true, steps: [
              { title: "① Hook", body: "最初の1行で興味を引く。" },
              { title: "② 本文", body: "最初の1行に入りきらなかった情報を説明。" },
              { title: "③ 詳細情報", body: "プロジェクト名、関係者、役職など。" },
              { title: "④ CTA", body: "質問、フォロー、シェア、リンクなど。" },
              { title: "⑤ Hashtags", body: "関連するハッシュタグ。" }
            ]},

            { type: "heading", text: "18．キャプションのHook" },
            { type: "para", text: "最初の一文は特に重要。使用できるパターン：" },
            { type: "hookPatterns", items: [
              { name: "Question", example: "Why does this road remain usable even in winter?" },
              { name: "Number", example: "3 things you didn't know about ○○" },
              { name: "Conclusion", example: "This project changed ○○." },
              { name: "Person", example: "Meet the Kyrgyz engineer working with JICA." },
              { name: "Unexpected fact", example: "Did you know that ○○ was introduced to Kyrgyzstan through…?" }
            ]},

            { type: "heading", text: "19．ハッシュタグ" },
            { type: "para", text: "ハッシュタグは大量に付けるのではなく、**固定タグ＋投稿内容に応じたタグ**を使用する。" },
            { type: "hashtagBox", fixed: ["#JICA", "#JICAKyrgyzstan", "#JapanKyrgyzstan"], fixedLabel: "固定ハッシュタグ：最大3個", content: ["#OVOP", "#JOCV", "#IssykKul", "#Osh"], contentLabel: "コンテンツ固有タグ：最大2個" },
            { type: "note", text: "資料でも、固定ハッシュタグ3個＋コンテンツタグ2個程度という運用が提案されている。" },

            { type: "heading", text: "20．絵文字" },
            { type: "para", text: "キャプションでは、必要に応じて絵文字を使用する。目的は、文章を親しみやすくし、読みやすくすること。ただし、過度な使用は避け、**1投稿につき0〜3個程度**を目安とする。" },

            { type: "heading", text: "21．投稿時間" },
            { type: "timeBox", time: "17:00〜18:00", label: "平日・学校や仕事が終わる時間帯" },
            { type: "para", text: "また、Instagramの予約投稿機能を活用し、担当者が毎回手動で投稿する必要がない運用体制を作る。" }
          ],
          quiz: [
            {
              type: "mcq",
              q: "キャプションの1言語あたりの目安の長さは？",
              options: ["10〜20 words程度", "70〜80 words程度", "300 words以上", "決まりはない"],
              answer: 1,
              explain: "キャプションは動画・画像だけでは分からない情報を補足する役割なので、1言語につき70〜80 words程度までを目安にします。"
            },
            {
              type: "mcq",
              q: "キャプションの正しい構成の順番は？",
              options: [
                "ハッシュタグ → CTA → Hook → 本文",
                "Hook → 本文 → 詳細情報 → CTA → Hashtags",
                "詳細情報 → Hashtags → Hook → CTA",
                "CTA → Hashtags → 本文 → Hook"
              ],
              answer: 1,
              explain: "最初の1行で興味を引く（Hook）→本文→詳細情報→CTA→ハッシュタグの順が基本です。"
            },
            {
              type: "mcq",
              q: "固定ハッシュタグとコンテンツ固有タグの推奨個数は？",
              options: ["固定10個＋内容10個", "固定なし＋内容だけ大量に", "固定最大3個＋内容固有最大2個", "ハッシュタグは使わない"],
              answer: 2,
              explain: "固定ハッシュタグ最大3個（#JICA #JICAKyrgyzstan #JapanKyrgyzstanなど）＋コンテンツ固有タグ最大2個が推奨されています。"
            },
            {
              type: "mcq",
              q: "投稿に推奨されている時間帯は？",
              options: ["早朝5〜6時", "平日17:00〜18:00頃", "深夜0時以降", "土日の午前中のみ"],
              answer: 1,
              explain: "学校や仕事が終わる平日17:00〜18:00頃が推奨されています。予約投稿機能を使うと手動投稿の手間も減らせます。"
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
      title: "CapCutの使い方",
      shortDesc: "CapCutを実際に手元に用意し、一緒に操作しながら学ぶセクション。",
      learn: [
        "CapCutでのリール編集に必要な12個の基本操作を一通りできるようになる",
        "各操作の実際の画面録画を見ながら、迷わず作業を進められるようになる"
      ],
      blocks: [
        { type: "heading", text: "CapCutの使い方" },
        { type: "para", text: "以下の12個の操作を覚えれば、CapCutでのリール編集は一通りできるようになる。各項目の画面録画と、どのボタンをどう使うかの説明を参考にする。" },
        { type: "capcutStep", num: "1", title: "写真の大きさを画面に合わせる",
          body: "写真や動画をタイムラインに追加したら、画面いっぱいに収まるようサイズを調整する。余白ができないようにする。",
          steps: [
            "タイムライン上の写真（または動画）のクリップをタップして選択する。",
            "画面下部のツールバーを右にスクロールし、「Crop（クロップ）」をタップする。",
            "表示される水色の枠の角をドラッグし、写真が画面いっぱいに広がるように拡大・移動する（上下に黒い余白が残らないようにする）。",
            "右上のチェックマーク（✓）をタップして確定する。"
          ],
          src: "videos/capcut/capcut_01_fit_to_screen.mp4", webm: "videos/capcut/capcut_01_fit_to_screen.webm", poster: "images/capcut/capcut_01_fit_to_screen.jpg" },
        { type: "capcutStep", num: "2", title: "カット方法",
          body: "不要な部分をタイムライン上で分割し、削除する基本操作。",
          steps: [
            "タイムラインの再生バー（プレイヘッド）を、カットしたい位置に合わせる。",
            "対象のクリップをタップして選択する。",
            "画面下部のツールバーで「Split（分割）」をタップすると、その位置でクリップが2つに分かれる。",
            "不要になった側のクリップをタップして選択し、ゴミ箱アイコン（Delete）をタップして削除する。"
          ],
          src: "videos/capcut/capcut_02_cutting.mp4", webm: "videos/capcut/capcut_02_cutting.webm", poster: "images/capcut/capcut_02_cutting.jpg" },
        { type: "capcutStep", num: "3", title: "カットズーム・フレーム拡大",
          body: "カットの切り替え時にズーム（フレーム拡大）を入れることで、単調な映像にならないようにする。",
          steps: [
            "ズームを入れたいクリップをタップして選択する。",
            "画面下部のツールバーで「Crop（クロップ）」をタップする（①の「画面に合わせる」と同じ機能）。",
            "水色の枠の角を少しだけ内側にドラッグし、直前のクリップよりわずかに拡大された構図にする。",
            "チェックマークで確定する。カットのたびに拡大率を少しずつ変えると、単調にならず自然なテンポが生まれる。"
          ],
          src: "videos/capcut/capcut_03_cut_zoom.mp4", webm: "videos/capcut/capcut_03_cut_zoom.webm", poster: "images/capcut/capcut_03_cut_zoom.jpg" },
        { type: "capcutStep", num: "4", title: "話すのを倍速",
          body: "話すスピードが遅い人の映像は、**1.3倍速**にして、テンポよく見せる。不自然にならない程度に調整する。",
          steps: [
            "倍速にしたいクリップをタップして選択する。",
            "画面下部のツールバーで「Speed（速度）」をタップする。",
            "「Normal」タブのまま、スライダーを1.0xから1.3x程度までドラッグする（上部に変更後の再生時間が表示される）。",
            "声の高さが不自然に感じる場合は「Change audio pitch」をオンにする。",
            "チェックマークで確定する。"
          ],
          src: "videos/capcut/capcut_04_speed.mp4", webm: "videos/capcut/capcut_04_speed.webm", poster: "images/capcut/capcut_04_speed.jpg" },
        { type: "capcutStep", num: "5", title: "写真のフェードイン",
          body: "写真がふんわりと表示されるフェードインを設定する方法。",
          steps: [
            "フェードインさせたいクリップをタップして選択する。",
            "画面下部のツールバーを左にスクロールし、「Video effects（動画エフェクト）」をタップする。",
            "表示されるエフェクト一覧から「Fade In」を探してタップする。",
            "適用されるとクリップの先頭にエフェクトの帯が表示される。チェックマークで確定する。"
          ],
          src: "videos/capcut/capcut_05_fade_in.mp4", webm: "videos/capcut/capcut_05_fade_in.webm", poster: "images/capcut/capcut_05_fade_in.jpg" },
        { type: "capcutStep", num: "6", title: "字幕",
          body: "話している内容をテキストで画面に表示し、音声なしでも内容が伝わるようにする。入れたあとは誤字がないか必ず確認する。",
          steps: [
            "字幕を入れたいセリフの位置にプレイヘッドを合わせる。",
            "画面下部のツールバーで「Text（テキスト）」→「Add text（テキストを追加）」をタップする。",
            "「Templates」から統一感のあるスタイル（例：シンプルな縁取り文字のテンプレート）を選び、テキストボックスにセリフを入力する。",
            "テキストボックスの端をドラッグして位置・大きさを調整する（InstagramのUIと重ならない位置に）。",
            "チェックマークで確定し、次のセリフごとに同じ手順を繰り返す。",
            "話している言語によっては、同じメニューの「Auto captions（自動字幕）」から自動文字起こしも利用できる。"
          ],
          src: "videos/capcut/capcut_06_subtitles.mp4", webm: "videos/capcut/capcut_06_subtitles.webm", poster: "images/capcut/capcut_06_subtitles.jpg" },
        { type: "capcutStep", num: "7", title: "音楽をつける",
          body: "BGMを追加する方法。",
          steps: [
            "画面下部のツールバーで「Audio（音声）」→「Sounds（サウンド）」をタップする。",
            "上部の検索欄にキーワードを入れるか、おすすめ（Recommended）やカテゴリ（Vlog、Tenseなど）から曲を探す。",
            "気に入った曲の再生ボタンでプレビューし、「＋」をタップしてタイムラインに追加する。",
            "タイムライン上で音楽クリップの長さを動画に合わせてトリムする。"
          ],
          src: "videos/capcut/capcut_07_music.mp4", webm: "videos/capcut/capcut_07_music.webm", poster: "images/capcut/capcut_07_music.jpg" },
        { type: "capcutStep", num: "8", title: "タイトルをつける",
          body: "冒頭にタイトル・オープニングのテキストを追加する方法。",
          steps: [
            "動画の冒頭にプレイヘッドを合わせる。",
            "「Text」→「Add text」をタップし、「Templates」からタイトル用のスタイル（太字・アクセントカラー付きなど）を選ぶ。",
            "テキストボックスにタイトル文を入力する。",
            "字幕と重ならない位置（画面上部など）にドラッグして配置する。",
            "チェックマークで確定する。"
          ],
          src: "videos/capcut/capcut_08_title.mp4", webm: "videos/capcut/capcut_08_title.webm", poster: "images/capcut/capcut_08_title.jpg" },
        { type: "capcutStep", num: "9", title: "エンディングをつける",
          body: "動画の最後にエンディングを追加する方法。",
          steps: [
            "タイムラインの一番右端にある「＋」をタップする。",
            "「Recents」など保存先から、統一エンディング用の動画（JICAロゴのカード）を選択する。",
            "必要であれば「Trim」で長さを調整し、「Add」をタップして本編の直後に追加する。"
          ],
          src: "videos/capcut/capcut_09_ending.mp4", webm: "videos/capcut/capcut_09_ending.webm", poster: "images/capcut/capcut_09_ending.jpg" },
        { type: "capcutStep", num: "10", title: "高画質で保存する",
          body: "書き出し（Export）時に解像度・フレームレート・ビットレートを高画質側に設定して保存する方法。",
          steps: [
            "右上の「Export」ボタンの隣にある「AI UHD」をタップし、書き出し設定を開く。",
            "「Resolution」を1080Pまたは4Kに設定する。",
            "「Frame rate」を30（滑らかさを重視するなら60）に設定する。",
            "「Bitrate」をできるだけ高め（Recommendedの目安、または最大）に設定する。",
            "設定が終わったら「Export」をタップして書き出す。"
          ],
          src: "videos/capcut/capcut_10_export.mp4", webm: "videos/capcut/capcut_10_export.webm", poster: "images/capcut/capcut_10_export.jpg" },
        { type: "capcutStep", num: "11", title: "動画からの音声の抽出",
          body: "動画から音声だけを取り出し、別トラックとして単独で編集できるようにする方法。",
          steps: [
            "音声を抽出したいクリップをタップして選択する。",
            "画面下部のツールバーで「AudioExtract（抽出）」をタップする。",
            "抽出された音声クリップは、他のクリップと同様にタップして選択すれば、音量調整・トリム・フェード・音声エフェクトなどを個別に編集できる。"
          ],
          src: "videos/capcut/capcut_11_extract_audio.mp4", webm: "videos/capcut/capcut_11_extract_audio.webm", poster: "images/capcut/capcut_11_extract_audio.jpg" },
        { type: "capcutStep", num: "12", title: "動画や画像の差し替え",
          body: "字幕やエフェクトなどの設定はそのまま残して、クリップの映像（動画・写真）だけを差し替える方法。**シリーズ動画などで、過去の動画と同じテンプレートを使い回すときに便利。**",
          steps: [
            "差し替えたいクリップをタップして選択する。",
            "画面下部のツールバーで「Replace（差し替え）」をタップする。",
            "「Recents」などから新しい動画・写真を選ぶ。",
            "元のクリップと同じ長さになるようトリミング画面が表示されるので、位置を調整して「Confirm（確定）」をタップする。",
            "クリップの映像だけが差し替わり、字幕・テキスト・エフェクトなどの設定はそのまま残る。"
          ],
          src: "videos/capcut/capcut_12_replace.mp4", webm: "videos/capcut/capcut_12_replace.webm", poster: "images/capcut/capcut_12_replace.jpg" },
        { type: "leadBox", text: "動画編集におけるほとんどすべての機能が利用可能。ユーチューブやテレビで見た編集を行うことも可能！とりあえず自分で機能を探してやってみて、できないことがあったら調べてみることを推奨する。**クオリティを妥協しないことが重要。**" }
      ]
    },

    /* ================= SECTION 4 ================= */
    {
      id: "s4",
      number: "04",
      icon: "canva",
      color: "amber",
      title: "Canvaの使い方",
      shortDesc: "Canvaを使ってInstagram用の画像・カルーセル等を制作する方法を学ぶ。",
      learn: [
        "共有されているCanvaプロジェクトにアクセスし、サムネイルを差し替えられるようになる",
        "PC・PRスマホどちらでも同じ手順で作業できることがわかるようになる",
        "実際の画面録画を見ながら、写真のアップロードと、作った投稿のダウンロードを迷わず行えるようになる"
      ],
      blocks: [
        { type: "heading", text: "Canvaの使い方" },
        { type: "canvaLink", url: "https://canva.link/hmbmtl3komvntci", label: "共有Canvaプロジェクトを開く" },
        { type: "para", text: "ここにアクセスしてサムネイルをつける。パソコン・PRスマホ両方で作業可能。" },
        { type: "wideStep", num: "1", title: "写真のアップロードと差し替え",
          body: "自分のパソコンやスマホから写真をCanvaにアップロードし、テンプレート内の写真と差し替える方法。",
          steps: [
            "左側のツールバーで「Uploads（アップロード）」をタップする。",
            "「Upload files（ファイルをアップロード）」をタップし、使いたい写真を選択する。",
            "アップロードが完了すると、Uploadsパネルにサムネイルが表示される。",
            "差し替えたい写真の上に、アップロードしたサムネイルをドラッグ＆ドロップする（自動で元の写真と入れ替わる）。",
            "必要に応じて、写真の四隅のハンドルをドラッグしてサイズや位置を調整する。"
          ],
          src: "videos/canva/canva_01_upload.mp4", webm: "videos/canva/canva_01_upload.webm", poster: "images/canva/canva_01_upload.jpg" },
        { type: "wideStep", num: "2", title: "作った投稿のダウンロード",
          body: "完成したデザインをファイルとして書き出し、パソコンに保存する方法。",
          steps: [
            "右上の「Share（共有）」をタップする。",
            "表示されるパネルで「Download（ダウンロード）」をタップする。",
            "「File type」で書き出す形式（画像として使う場合はJPGまたはPNG）を選ぶ。",
            "カルーセルなど複数ページある場合は「Select pages」で「All（すべて）」または「This page（このページのみ）」を選ぶ。",
            "「Download」をタップして保存する。"
          ],
          src: "videos/canva/canva_02_download.mp4", webm: "videos/canva/canva_02_download.webm", poster: "images/canva/canva_02_download.jpg" }
      ],
      practice: [
        "上のリンクからCanvaプロジェクトを開く（PCまたはPRスマホ）",
        "テンプレート内の写真を差し替える",
        "PRスマホで同じプロジェクトを開く",
        "右上の「シェア」からPNGをダウンロードする"
      ],
      quiz: [
        {
          type: "mcq",
          q: "Canvaでサムネイルを作るとき、基本的にすることは？",
          options: ["テンプレートを一から作り直す", "写真を変えるだけ", "文字のフォントを毎回変える", "ロゴを毎回作り直す"],
          answer: 1,
          explain: "共有されているテンプレートの写真を変えるだけで、統一感のあるサムネイルを作れます。"
        },
        {
          type: "truefalse",
          q: "Canvaプロジェクトは、パソコンとPRスマホの両方から作業できる。",
          answer: true,
          explain: "その通りです。どちらの端末からも同じプロジェクトにアクセスして作業できます。"
        },
        {
          type: "mcq",
          q: "作成したサムネイルをPNGでダウンロードするには？",
          options: ["左上の「ファイル」から", "右上の「シェア」から", "画面下部のバーから", "ダウンロードはできない"],
          answer: 1,
          explain: "PRスマホで同じプロジェクトを開き、右上の「シェア」からPNGをダウンロードします。"
        }
      ]
    },

    /* ================= SECTION 5 (Checklist) ================= */
    {
      id: "s5",
      number: "05",
      icon: "check",
      color: "coral2",
      title: "投稿前確認チェックリスト",
      shortDesc: "Instagramに投稿する前に、毎回必ず確認する項目。",
      mostImportant: true,
      intro: "投稿ボタンを押す前に、このページを上から順番にチェックしてください。すべてチェックできれば、投稿してOKです。",
      groups: [
        {
          title: "リールかカルーセルを適切に選んでいるか",
          items: [
            "**音声的な情報（ナレーション・インタビュー）を入れられるか**",
            "**絵の違う動画を最低5本は撮れるか**（違う色・違う人・違う場所）"
          ]
        },
        {
          title: "内容",
          items: [
            "この投稿で伝えたいことは1つに絞られているか",
            "JICAの活動を知らない人でも理解できるか",
            "「だから何？」に答えられているか",
            "単なる活動報告になっていないか",
            "JICAだからこそ見せられる内容になっているか"
          ]
        },
        {
          title: "Reel",
          items: [
            "音声的な情報（ナレーション・インタビュー）が入っているか",
            "最初の3秒で興味を引けるか",
            "適切な音楽があるか",
            "30〜45秒程度に収まっているか",
            "長い挨拶・導入がないか",
            "0.5秒でも消せる瞬間がないか",
            "字幕があるか",
            "字幕が2行以内か",
            "InstagramのUIに字幕が重なっていないか",
            "サムネイルだけで内容が分かるか",
            "二秒ごとに違う絵になっているか",
            "**キャップカットのウォーターマークが入っていないことを確かめる**"
          ]
        },
        {
          title: "Caption",
          items: [
            "1行目にHookがあるか",
            "長すぎないか",
            "必要な情報が補足されているか",
            "CTAがあるか",
            "ハッシュタグが適切か",
            "キルギス語・ロシア語等の言語設定が適切か"
          ]
        },
        {
          title: "デザイン",
          items: [
            "サムネイルを使っているか。使っていなければ Canva（https://canva.link/hmbmtl3komvntci）にアクセスして作成する",
            "ロゴの位置・サイズが統一されているか",
            "文字が読みやすいか",
            "4:5または9:16になっているか"
          ]
        }
      ]
    }
  ]
};
