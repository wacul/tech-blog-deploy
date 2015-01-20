(function(window){
    var obj = {
      "posts": [
        
        {
          "id": 1,
          "title": "RubyMotion で 64bit アプリに対応する",
          "href": "http://blog.wacul.co.jp/blog/2014/12/17/rubymotion-64bit/",
          "teaser": "&lt;p&gt;こんにちは。すっかりRubyMotionでのiOSアプリ開発にどっぷりのkyohです。最近の趣味はダイエットですが、なかなか成果が出ません。:(&lt;/p&gt;&lt;h2&gt;急に 64bit が来たので&lt;/h2&gt;&lt;p&gt;世の中、だいぶ64bit環境が普及してきたこともあり、Appleは2015年2月から、新しいアプリの申請（更新含む）において64bit対応したアプリのみを受け付けるようになります。&lt;/p&gt;&lt;p&gt;&lt;a href=&quot;https://developer.apple.com/news/?id=10202014a&quot;&gt;64-bit and iOS 8 Requirements for New Apps&lt;/a&gt;&lt;/p&gt;&lt;p&gt;これに合わせ、弊社サービスの「&lt;a href=&quot;http://clulu.com/&quot;&gt;Clulu&lt;/a&gt;」も64bit対応を行いました。&lt;/p&gt;&lt;p&gt;およその32bit &amp;ndash; 64bit間の差異はRubyMotionが吸収してくれる（便利！）のですが、どうしたって一部はソース上での対応が必要です。その最中、思わぬところで躓き、親切にもRubyMotionのContributorの方に丁寧に教えていただけたので、簡単な解説でも書いてみようと思います。&lt;/p&gt;&lt;h2&gt;64bit対応① まずはターゲットを追加する！&lt;/h2&gt;&lt;p&gt;何はともあれ、ビルドターゲットに64bit環境を追加します。RubyMotionの場合、Rakefileで次のように指定するだけです。&lt;/p&gt;&lt;figure class=&#39;code&#39;&gt;&lt;figcaption&gt;&lt;span&gt;&lt;/span&gt;&lt;/figcaption&gt;&lt;div class=&quot;highlight&quot;&gt;&lt;table&gt;&lt;tr&gt;&lt;td class=&quot;gutter&quot;&gt;&lt;pre class=&quot;line-numbers&quot;&gt;&lt;span class=&#39;line-number&#39;&gt;1&lt;/span&gt;&lt;span &amp;hellip;",
          "date": new Date(
            2014,
            12 - 1,
            17
            )
        }
        
        ,
        
        
        {
          "id": 2,
          "title": "Sublime Text, Atomで使えるAngularJSプラグインを作りました",
          "href": "http://blog.wacul.co.jp/blog/2014/11/12/angular-plugin-for-sublime-and-atom-users/",
          "teaser": "&lt;p&gt;CoffeeScriptでAngularJSを書いている開発者、特にSublime TextやAtomを使っている人向けのプラグインを作ったので紹介します。&lt;/p&gt;&lt;h2&gt;どんなプラグイン？&lt;/h2&gt;&lt;p&gt;このプラグインは &lt;strong&gt;インラインテンプレートのハイライト機能&lt;/strong&gt;を提供します(ちょっとしたスニペットもあります)。WebStormのLanguage Injection(図2)や、Github Flavored Markdownのコード部分がハイライトされるアレの簡易版です。&lt;/p&gt;&lt;p&gt;&lt;a href=&quot;/images/2014-11-12-angular-plugin-for-sublime-atom-users/sublime.gif&quot;&gt;&lt;img src=&quot;/images/2014-11-12-angular-plugin-for-sublime-atom-users/sublime.gif&quot; alt=&quot;sublime sample&quot; /&gt;&lt;/a&gt;&lt;br&gt;Sublime Textでのプラグイン動作例(テンプレート内での補完は&lt;a href=&quot;https://github.com/angular-ui/AngularJS-sublime-package&quot;&gt;angular-ui/AngularJS-sublime-package&lt;/a&gt;が使われています)&lt;/p&gt;&lt;p&gt;&lt;a href=&quot;/images/2014-11-12-angular-plugin-for-sublime-atom-users/webstorm.gif&quot;&gt;&lt;img src=&quot;/images/2014-11-12-angular-plugin-for-sublime-atom-users/webstorm.gif&quot; alt=&quot;webstorm sample&quot; /&gt;&lt;/a&gt;&lt;br&gt;WebStromのLanguage Injection動作例&lt;/p&gt;&lt;h2&gt;インストール&lt;/h2&gt;&lt;h3&gt;Sublime Text&lt;/h3&gt;&lt;p&gt;Package &amp;hellip;",
          "date": new Date(
            2014,
            11 - 1,
            12
            )
        }
        
        ,
        
        
        {
          "id": 3,
          "title": "JSON Hyper-Schema からAPIドキュメントとGoのコードを自動生成する",
          "href": "http://blog.wacul.co.jp/blog/2014/10/28/go-rest-api/",
          "teaser": "&lt;h2&gt;３行で言うと&lt;/h2&gt;&lt;ul&gt;&lt;li&gt;herokuが作ってる &lt;a href=&quot;https://github.com/interagent/prmd&quot;&gt;prmd&lt;/a&gt; を使って、JSON SchemaからAPIドキュメントを出力したよ！&lt;/li&gt;&lt;li&gt;スキーマ定義から、GoのAPI実装コードも出力するツールを作ったらめっちゃ捗るよ！&lt;/li&gt;&lt;li&gt;Goの&lt;a href=&quot;https://github.com/wcl48/valval&quot;&gt;バリデーション用のライブラリ&lt;/a&gt;も作ったよ！&lt;/li&gt;&lt;/ul&gt;&lt;h2&gt;今回作ったものの概要とサンプルコード&lt;/h2&gt;&lt;h3&gt;概要&lt;/h3&gt;&lt;p&gt;以前から、APIを開発する上で、以下のようなことが課題となっていました。&lt;/p&gt;&lt;ul&gt;&lt;li&gt;そもそもドキュメント書くのがつらい&lt;/li&gt;&lt;li&gt;それもあって、ドキュメントより先にコードが変わってしまう&lt;/li&gt;&lt;li&gt;ドキュメントと実装の状況の違いが把握しづらい&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;また、ロジックがそんなに複雑ではないAPIでは、実装の作業は&lt;/p&gt;&lt;ul&gt;&lt;li&gt;リクエストデータのバリデーション&lt;/li&gt;&lt;li&gt;出力データの整形 (フィルタリング)&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;の２つの作業が大きな割合を占めます。&lt;/p&gt;&lt;p&gt;APIの定義ファイルからドキュメントと、バリデーションや出力データ整形のコードを自動生成できれば、大幅に効率が上がると思い実装してみました。&lt;/p&gt;&lt;p&gt;今回実装した仕組みの全体の処理の流れは以下の様になっています。&lt;/p&gt;&lt;ul&gt;&lt;li&gt;&lt;a href=&quot;https://github.com/interagent/prmd&quot;&gt;prmd&lt;/a&gt; を使って、schema.json (JSON Hyper-Schemaドキュメント) を生成 &lt;code&gt;prmd combine&lt;/code&gt;&lt;/li&gt;&lt;li&gt;schema.json から、APIドキュメント (schema.md) を生成 &lt;code&gt;prmd doc&lt;/code&gt;&lt;/li&gt;&lt;li&gt;schema.json から、Goのサーバー側実装を生成 &amp;hellip;",
          "date": new Date(
            2014,
            10 - 1,
            28
            )
        }
        
        ,
        
        
        {
          "id": 4,
          "title": "SMS送信サービスのNexmoを利用する",
          "href": "http://blog.wacul.co.jp/blog/2014/10/07/nexmo/",
          "teaser": "&lt;h2&gt;概要&lt;/h2&gt;&lt;p&gt;ユーザ登録時の本人確認や簡単な情報の通知にSMSを使うケースがあります。&lt;br/&gt;今回、SMS送信サービスの&lt;a href=&quot;https://jp.nexmo.com/&quot;&gt;Nexmo&lt;/a&gt;を利用してみたので紹介します。&lt;/p&gt;&lt;h2&gt;SMS送信サービス&lt;/h2&gt;&lt;p&gt;&lt;a href=&quot;https://www.google.co.jp/search?q=SMS%E9%80%81%E4%BF%A1%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9&quot;&gt;SMS送信サービス&lt;/a&gt;などでGoogle検索を行うと、様々なサービスが見つかります。&lt;br/&gt;送るキャリアによって料金が異なったりしますが、おおよそ１通6円〜10円前後となっています。&lt;/p&gt;&lt;p&gt;今回は、Lineやカカオトークで採用されている&lt;a href=&quot;https://jp.nexmo.com/&quot;&gt;Nexmo&lt;/a&gt;を利用したいと思います。値段は2014/10/03現在、どのキャリア宛でも1通、0.0631ドルとなっています。&lt;br/&gt;&lt;img src=&quot;/images/2014-10-07-nexmo/price.png&quot; alt=&quot;値段&quot; /&gt;&lt;/p&gt;&lt;h2&gt;NexmoのSMS送信APIを使用する&lt;/h2&gt;&lt;p&gt;NexmoのSMS送信APIは非常にシンプルです。&lt;a href=&quot;https://docs.nexmo.com/index.php/sms-api/send-message&quot;&gt;Nexmo SMS送信APIドキュメント&lt;/a&gt;によると、指定されたURLにパラメータをつけてGETかPOSTをするだけで良さそうです。&lt;br/&gt;その際、Nexmoに登録した際に発行されるKEY、SECRET、送信元として使用する電話番号が必要になります。&lt;/p&gt;&lt;p&gt;Node.jsでAPIを使用して送信する場合のサンプルが以下です。&lt;/p&gt;&lt;figure class=&#39;code&#39;&gt;&lt;figcaption&gt;&lt;span&gt;&lt;/span&gt;&lt;/figcaption&gt;&lt;div class=&quot;highlight&quot;&gt;&lt;table&gt;&lt;tr&gt;&lt;td class=&quot;gutter&quot;&gt;&lt;pre class=&quot;line-numbers&quot;&gt;&lt;span class=&#39;line-number&#39;&gt;1&lt;/span&gt;&lt;span class=&#39;line-number&#39;&gt;2&lt;/span&gt;&lt;span class=&#39;line-number&#39;&gt;3&lt;/span&gt;&lt;span class=&#39;line-number&#39;&gt;4&lt;/span&gt;&lt;span class=&#39;line-number&#39;&gt;5&lt;/span&gt;&lt;span class=&#39;line-number&#39;&gt;6&lt;/span&gt;&lt;span class=&#39;line-number&#39;&gt;7&lt;/span&gt;&lt;span &amp;hellip;",
          "date": new Date(
            2014,
            10 - 1,
            7
            )
        }
        
        ,
        
        
        {
          "id": 5,
          "title": "Markdownを複数人でリアルタイム編集できる socrates.io ",
          "href": "http://blog.wacul.co.jp/blog/2014/09/29/collaborative-realtime-markdown/",
          "teaser": "&lt;h2&gt;Markdown ＋ リアルタイムで一緒に編集 ＝ Socrates.io&lt;/h2&gt;&lt;p&gt;こんにちは。弊社大津に勧められたウドン屋の味に、ウドン観の変わったkyohです。&lt;/p&gt;&lt;p&gt;今さら大きな声でいうことでもありませんが、プログラマー界隈では Markdown がドキュメントのデファクトスタンダードとなっています。&lt;/p&gt;&lt;p&gt;そんなMarkdownをリアルタイムで一緒に編集できるサービスはないものかと色々探してみたところ、&lt;a href=&quot;http://socrates.io/&quot;&gt;Socrates&lt;/a&gt; (&lt;a href=&quot;https://github.com/segmentio/socrates&quot;&gt;→GitHubリポジトリ&lt;/a&gt;) というサービスがそこそこハマったので紹介してみようと思います。&lt;/p&gt;&lt;h3&gt;Socrates のいいところ&lt;/h3&gt;&lt;p&gt;「リアルタイムでMarkdownを編集したい」という要件はほぼ満たしています。また、リアルタイムでマークアップした結果のプレビューもしてくれるので、微妙な記法におっかなびっくりしながら編集する目にも遭わなくて済みます。&lt;/p&gt;&lt;p&gt;Markdownの記法についても、ヘッダ、罫線、強調、リンク、画像などなど基本的なところは押さえているようです。&lt;/p&gt;&lt;p&gt;&lt;a href=&quot;/images/2014-09-29-collaborative-realtime-markdown/screenshot_full.png&quot;&gt;&lt;img src=&quot;/images/2014-09-29-collaborative-realtime-markdown/screenshot_full.png&quot; width=&quot;440&quot; height=&quot;384&quot; alt=&quot;Socrates画面キャプチャ&quot; /&gt;&lt;/a&gt;&lt;/p&gt;&lt;p&gt;また、ソースがGithubで公開されているため、cloneして試すことができます。最近は、OSSも当たり前になってきましたね。&lt;/p&gt;&lt;h3&gt;Socrates をどう使うのか&lt;/h3&gt;&lt;p&gt;Socrates.io は、リアルタイムの共有とプレビューのみに特化した「エディタ」なので、外部に保存したりエクスポートしたりはできません。データは &amp;hellip;",
          "date": new Date(
            2014,
            9 - 1,
            29
            )
        }
        
        ,
        
        
        {
          "id": 6,
          "title": "Web制作のテストサーバー運用を自動化した話",
          "href": "http://blog.wacul.co.jp/blog/2014/09/23/current-test-server/",
          "teaser": "&lt;h2&gt;テストサーバー運用意外と手間かかる問題&lt;/h2&gt;&lt;p&gt;ワカルでは、自社サービスを行うかたわら、お客様のWebサイト改善のお手伝いを行っています。外部のミーティングでお客様にサイトなどの制作物を見ていただくなどのシーンも多く、認証付きで公開できるテストサーバーを運用しています。&lt;br/&gt;しかし、プロジェクトごとにテストサーバーを構成するのはなかなかのコストでした。&lt;/p&gt;&lt;p&gt;そこでワカルでは、GitHubリポジトリと連携し、&lt;/p&gt;&lt;ul&gt;&lt;li&gt;テスト環境の自動デプロイ&lt;/li&gt;&lt;li&gt;テストサーバーの追加の自動化&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;といったことを行っています。&lt;/p&gt;&lt;p&gt;今回は自動化していった手順をご紹介したいと思います。&lt;br/&gt;流行りの仮想化とかとはまた違う地道なお話です。&lt;/p&gt;&lt;h2&gt;利用したサービス、ミドルウェア&lt;/h2&gt;&lt;p&gt;利用した環境は以下のとおりです。&lt;/p&gt;&lt;ul&gt;&lt;li&gt;ソースコード管理: github&lt;/li&gt;&lt;li&gt;インフラ: Amazon EC2, Route53, ELB&lt;/li&gt;&lt;li&gt;ミドルウェア関係: Apache, PHP, MySQL&lt;/li&gt;&lt;li&gt;自動化スクリプト: Fabric (python)&lt;/li&gt;&lt;/ul&gt;&lt;h2&gt;最新ソースが反映されるサーバーを構築する&lt;/h2&gt;&lt;p&gt;まずは手で効率化していくところから、徐々に自動化していきました。&lt;/p&gt;&lt;h3&gt;Apacheの設定ファイルをプロジェクトごとに書く&lt;/h3&gt;&lt;p&gt;弊社のお客様向け制作物のほとんどは、一般的なPHPの構成か、HTMLだけの静的サイトなため、単一のApache/PHPのサーバー上に、複数のVirtuslHostで環境を構築することにしました。&lt;/p&gt;&lt;p&gt;Route53(DNSサーバ) で、特定のサブドメイン以下へのアクセスをワイルドカードで全てテストサーバーへ受け付けるように設定しておきます。( 例えば、 &lt;code&gt;*.test.hoge.com&lt;/code&gt; )&lt;br/&gt;こうしておくと、URLもプロジェクト名をドメインに含められるため、わかりやすくなります。例：&lt;/p&gt;&lt;figure class=&#39;code&#39;&gt;&lt;div class=&quot;highlight&quot;&gt;&lt;table&gt;&lt;tr&gt;&lt;td class=&quot;gutter&quot;&gt;&lt;pre class=&quot;line-numbers&quot;&gt;&lt;span class=&#39;line-number&#39;&gt;1&lt;/span&gt;&lt;span &amp;hellip;",
          "date": new Date(
            2014,
            9 - 1,
            23
            )
        }
        
        ,
        
        
        {
          "id": 7,
          "title": "cookieに効率的にデータを格納するzcookiesを作りました",
          "href": "http://blog.wacul.co.jp/blog/2014/09/16/zcookies/",
          "teaser": "&lt;p&gt;cookieに効率的にデータを格納する&lt;a href=&quot;https://github.com/ukyo/zcookies&quot;&gt;zcookies&lt;/a&gt;を作ったので使い方と仕組みについて紹介しようとおもいます。&lt;/p&gt;&lt;h2&gt;モチベーション&lt;/h2&gt;&lt;p&gt;あるとき、sessionStorageを使って一時的にデータを保存しておくようなウェブページを作っていました。現状ではIE8以上ならsessionStorageを使うことができるので特に問題ないだろうと高をくくっていたのですが、実はsafariのプライベートブラウズモードではsessionStorage含め、Web Storage全般が使えないということがわかりました。&lt;/p&gt;&lt;p&gt;次点の解決策としてcookieを使うことを検討したのですが、いわゆる4kB制限があり作っているウェブページもその制限に引っかかる恐れがありました(特に日本語とか保存しようとすると数倍の容量を食いますからね)。&lt;/p&gt;&lt;p&gt;そこで、オブジェクトを圧縮してcookieに保存できるような仕組みを作ることにしました。&lt;/p&gt;&lt;h2&gt;使い方&lt;/h2&gt;&lt;p&gt;zcookiesの使い方は簡単です。以下の例を見て下さい。&lt;/p&gt;&lt;figure class=&#39;code&#39;&gt;&lt;figcaption&gt;&lt;span&gt;&lt;/span&gt;&lt;/figcaption&gt;&lt;div class=&quot;highlight&quot;&gt;&lt;table&gt;&lt;tr&gt;&lt;td class=&quot;gutter&quot;&gt;&lt;pre class=&quot;line-numbers&quot;&gt;&lt;span class=&#39;line-number&#39;&gt;1&lt;/span&gt;&lt;span class=&#39;line-number&#39;&gt;2&lt;/span&gt;&lt;/pre&gt;&lt;/td&gt;&lt;td class=&#39;code&#39;&gt;&lt;pre&gt;&lt;code class=&#39;js&#39;&gt;&lt;span class=&#39;line&#39;&gt;&lt;span class=&quot;nx&quot;&gt;zcookies&lt;/span&gt;&lt;span class=&quot;p&quot;&gt;.&lt;/span&gt;&lt;span class=&quot;nx&quot;&gt;set&lt;/span&gt;&lt;span class=&quot;p&quot;&gt;(&lt;/span&gt;&lt;span class=&quot;s1&quot;&gt;&amp;#39;foo&amp;#39;&lt;/span&gt;&lt;span class=&quot;p&quot;&gt;,&lt;/span&gt; &lt;span class=&quot;p&quot;&gt;{&lt;/span&gt;&lt;span &amp;hellip;",
          "date": new Date(
            2014,
            9 - 1,
            16
            )
        }
        
        ,
        
        
        {
          "id": 8,
          "title": "wacul で開発合宿を行いました",
          "href": "http://blog.wacul.co.jp/blog/2014/09/10/camp/",
          "teaser": "&lt;h2&gt;合宿！&lt;/h2&gt;&lt;p&gt;wacul のプログラマーチームは、それぞれ持っている技術の範囲が少しずつ違います。&lt;br/&gt;そこで、お互いがお互いの知識を補えるように、ハッカソン的なもの（wacul ハッカソン＝ワッカソン）を開いたりしてきましたが、ついにオフィスから一歩踏み出して、開発合宿に行ってきました。&lt;/p&gt;&lt;h3&gt;合宿先&lt;/h3&gt;&lt;p&gt;wacul のメンバーは東京都内在住だったため、初めての開発合宿ということもあって極端な遠隔地は避け、静岡県の熱海に行ってきました。泊まりといえば温泉地！夏といえば海！というのも判断材料です。&lt;/p&gt;&lt;p&gt;新幹線でおおよそ一時間半程度、片道四千円弱と、ほどよく手軽な旅程でした。&lt;/p&gt;&lt;h3&gt;滞在期間&lt;/h3&gt;&lt;p&gt;初めての合宿ということで、様子を見るためにも今回は少し短めに、1泊だけとしました。現地に土曜日の午後入り、翌日午前中にチェックアウトだったので、いささか慌ただしくなりました。開発合宿としては、金曜日の夜から日曜日の朝など、連泊できる方が都合がいいかと思います。&lt;/p&gt;&lt;h3&gt;宿&lt;/h3&gt;&lt;p&gt;宿は &lt;a href=&quot;http://www.grandview-atami.com/&quot;&gt;グランビュー熱海&lt;/a&gt; というコンドミニアム。今回コンドミニアムというものを初めて利用しましたが、四・五人で開発合宿をするにはとてもいい環境でした。&lt;/p&gt;&lt;p&gt;一点注意するところを挙げるとすれば、Wi-Fi対応が謳われていますが、かなり不安定で持ち込んだモバイルルータだよりになったところでしょうか。&lt;/p&gt;&lt;p&gt;6畳3部屋の2LDKでとにかくなんでも揃っています。バス・トイレ・洗面所、2口コンロ、食器類、冷蔵庫、洗濯機・・・。独身者なら手ぶらで行ってもひと月暮らせるんじゃないか？というくらい。宿泊施設がしっかりしていると、開発に没入できていいですね。&lt;/p&gt;&lt;p&gt;次回合宿時も、宿泊できるコンドミニアムを探してみようと思います。&lt;/p&gt;&lt;h3&gt;テーマ&lt;/h3&gt;&lt;p&gt;今回の合宿のテーマは &lt;a href=&quot;http://golang.org&quot;&gt;Go&lt;/a&gt; 。wacul の新サービス &lt;a href=&quot;http://wacul.co.jp/pressrelease/2014/08/20/post.html&quot;&gt;Sure!&lt;/a&gt; でサーバーサイドに採用したこともあり、プログラマー全員で触れてみよう！というわけです。&lt;/p&gt;&lt;p&gt;皆で同じものを作る案もありましたが、各々作りたいものを作るというスタンスにしました。&lt;br/&gt;全員がそこそこの粒度で言語に触れるには、良いやり方だったと思います。&lt;/p&gt;&lt;h3&gt;食事事情&lt;/h3&gt;&lt;p&gt;現地の食堂で夕飯、朝ごはんはコンドミニアムの食事でした。観光地はなべてそうですが、熱海も夜が比較的早いので、開発者にありがちな夜型の食事は取りにくいので注意が必要です。&lt;/p&gt;&lt;h2&gt;まとめ&lt;/h2&gt;&lt;p&gt;弊社で初めて企画した開発合宿でしたが、おかげで色々知見が得られました。&lt;/p&gt;&lt;h3&gt;良かった点&lt;/h3&gt;&lt;ul&gt;&lt;li&gt;コンドミニアムは開発合宿に最適である&lt;/li&gt;&lt;li&gt;やっぱりモバイルルータが活躍した&lt;/li&gt;&lt;li&gt;裸の付き合いは親睦を深めてくれる&lt;/li&gt;&lt;li&gt;どこかノスタルジックな熱海&lt;/li&gt;&lt;/ul&gt;&lt;h3&gt;見直したい点&lt;/h3&gt;&lt;ul&gt;&lt;li&gt;熱海は坂が多い・・・連泊するには少しキツそう&lt;/li&gt;&lt;li&gt;電源の確保がギリギリだった・・・タップを持っていったほうが良い&lt;/li&gt;&lt;li&gt;どうせVGAだろうと思って行ったら意外とHDMIだった。&lt;br/&gt;必要になった時のためにモバイルプロジェクタとかあったほうがいいかも&lt;/li&gt;&lt;li&gt;どうしたって一泊は足りない。集中してものを作るなら連泊が必要&lt;/li&gt;&lt;li&gt;振り返りのためにはカメラがあったほうが良かった。写真取ろうとする意識。&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;ともあれ、見直したい点を挙げるのも苦労するくらいにいい回だったと思います。次回、いずれ合宿を開催した際には、また何か知見が得られれば、ここの記事に書くかもしれません。&lt;/p&gt;",
          "date": new Date(
            2014,
            9 - 1,
            10
            )
        }
        
        ,
        
        
        {
          "id": 9,
          "title": "どこの地域からアクセスされているのか、IPから検索！",
          "href": "http://blog.wacul.co.jp/blog/2014/09/01/geoip/",
          "teaser": "&lt;h2&gt;用途&lt;/h2&gt;&lt;p&gt;関東からのアクセスと九州からのアクセスでそれぞれ広告を出し分けたい、など、サイト訪問者の地域に応じたコンテンツを提供したい場合があります。訪問者のIPアドレスからアクセス元の地域を調べることで、これを実現できます。&lt;/p&gt;&lt;h2&gt;JavaScriptによる運用&lt;/h2&gt;&lt;p&gt;JavaScriptからajaxでAPIを呼び、地域情報を取得することを考えます。&lt;/p&gt;&lt;p&gt;例えばPHPだと、自前でAPIサーバーを用意する場合は&lt;a href=&quot;http://php.net/manual/ja/book.geoip.php&quot;&gt;GeoIP&lt;/a&gt; というライブラリがあるようです。&lt;/p&gt;&lt;p&gt;ですが、今回は簡単に試すため、外部のサービスを利用したいと思います。&lt;br/&gt;&lt;a href=&quot;https://www.google.co.jp/search?q=geoip+api&quot;&gt;GeoIP API&lt;/a&gt;などで検索するといろいろ出てきますが、今回は&lt;a href=&quot;http://www.telize.com/&quot;&gt;Teliize&lt;/a&gt;のAPIを使ってみます。&lt;br/&gt;使い方は非常に簡単で、指定された&lt;a href=&quot;http://www.telize.com/geoip&quot;&gt;URL&lt;/a&gt;にgetするだけで良いです。&lt;/p&gt;&lt;p&gt;例えば以下のようになります。&lt;/p&gt;&lt;figure class=&#39;code&#39;&gt;&lt;figcaption&gt;&lt;span&gt;&lt;/span&gt;&lt;/figcaption&gt;&lt;div class=&quot;highlight&quot;&gt;&lt;table&gt;&lt;tr&gt;&lt;td class=&quot;gutter&quot;&gt;&lt;pre class=&quot;line-numbers&quot;&gt;&lt;span class=&#39;line-number&#39;&gt;1&lt;/span&gt;&lt;span class=&#39;line-number&#39;&gt;2&lt;/span&gt;&lt;span class=&#39;line-number&#39;&gt;3&lt;/span&gt;&lt;span class=&#39;line-number&#39;&gt;4&lt;/span&gt;&lt;span class=&#39;line-number&#39;&gt;5&lt;/span&gt;&lt;span class=&#39;line-number&#39;&gt;6&lt;/span&gt;&lt;/pre&gt;&lt;/td&gt;&lt;td class=&#39;code&#39;&gt;&lt;pre&gt;&lt;code class=&#39;javascript&#39;&gt;&lt;span class=&#39;line&#39;&gt; &amp;hellip;",
          "date": new Date(
            2014,
            9 - 1,
            1
            )
        }
        
        ,
        
        
        {
          "id": 10,
          "title": "これからGoを始める人のためのTips集",
          "href": "http://blog.wacul.co.jp/blog/2014/08/22/go/",
          "teaser": "&lt;p&gt;こんにちわ。最近業務でGoを書いているのですが、3,4週間たち、だいぶ環境にも慣れてきたので、これからGoを初めようと思っている人向けにTipsを書きたいと思います。&lt;/p&gt;&lt;p&gt;間違いや改善点などあれば、 &lt;a href=&quot;http://twitter.com/tutuming&quot;&gt;@tutuming&lt;/a&gt; まで教えていただけると大変ありがたいです。&lt;/p&gt;&lt;h2&gt;インストール と設定 (OSX)&lt;/h2&gt;&lt;p&gt;&lt;a href=&quot;http://golang.org/dl/&quot;&gt;http://golang.org/dl/&lt;/a&gt;から、インストーラー (&lt;code&gt;go1.3.1.darwin-amd64-osx10.8.pkg&lt;/code&gt; など) を選んで最新版をインストールしたら大丈夫です。自分の環境にあわせたインストーラ選んでください。&lt;/p&gt;&lt;p&gt;homebrewを使っている人は&lt;/p&gt;&lt;figure class=&#39;code&#39;&gt;&lt;figcaption&gt;&lt;span&gt;&lt;/span&gt;&lt;/figcaption&gt;&lt;div class=&quot;highlight&quot;&gt;&lt;table&gt;&lt;tr&gt;&lt;td class=&quot;gutter&quot;&gt;&lt;pre class=&quot;line-numbers&quot;&gt;&lt;span class=&#39;line-number&#39;&gt;1&lt;/span&gt;&lt;/pre&gt;&lt;/td&gt;&lt;td class=&#39;code&#39;&gt;&lt;pre&gt;&lt;code class=&#39;sh&#39;&gt;&lt;span class=&#39;line&#39;&gt;brew install go&lt;/span&gt;&lt;/code&gt;&lt;/pre&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&lt;/div&gt;&lt;/figure&gt;&lt;p&gt;でもインストールできます。&lt;/p&gt;&lt;h2&gt;&lt;code&gt;$GOPATH&lt;/code&gt; &amp;hellip;",
          "date": new Date(
            2014,
            8 - 1,
            22
            )
        }
        
        ,
        
        
        {
          "id": 11,
          "title": "AngularJSのディレクティブの実行順に注意しよう",
          "href": "http://blog.wacul.co.jp/blog/2014/08/15/angular-directive-priority/",
          "teaser": "&lt;h2&gt;TL;DR&lt;/h2&gt;&lt;p&gt;ディレクティブのコントローラー内で&lt;code&gt;$element.controller&lt;/code&gt;を使って他のコントローラーを参照するしようとして失敗したときは&lt;code&gt;priority&lt;/code&gt;プロパティの値を一度確認してみよう。&lt;/p&gt;&lt;h2&gt;ディレクティブの実行順の罠&lt;/h2&gt;&lt;p&gt;AngularJSのディレクティブを作るときに何かしらの動作を与えようとする場合、殆どのケースでは&lt;code&gt;link&lt;/code&gt;プロパティを使うと思います。しかしながら、&lt;code&gt;controller&lt;/code&gt;プロパティにコントローラーを設定するケースもあるにはあります(階層的なディレクティブを作る等々)。コントローラーから他のコントローラーを参照するときはDIした&lt;code&gt;$element&lt;/code&gt;のメソッドである&lt;code&gt;$element.controller&lt;/code&gt;を使いますがここで何も考えずに参照しようとすると失敗することがあります。よくあるパターンとして&lt;a href=&quot;https://docs.angularjs.org/api/ng/type/ngModel.NgModelController&quot;&gt;ngModelController&lt;/a&gt;を自作のディレクティブから参照する例を見てみましょう。以下の例ではaaa、zzzという名前のディレクティブを作ってそれらのコントローラーからngModelControllerを参照しようとしていますがaaaの方では失敗しています。&lt;/p&gt;&lt;p&gt;&lt;a href=&quot;http://plnkr.co/edit/AmjQwx?p=preview&quot;&gt;DEMO&lt;/a&gt;&lt;/p&gt;&lt;figure class=&#39;code&#39;&gt;&lt;figcaption&gt;&lt;span&gt;&lt;/span&gt;&lt;/figcaption&gt;&lt;div class=&quot;highlight&quot;&gt;&lt;table&gt;&lt;tr&gt;&lt;td class=&quot;gutter&quot;&gt;&lt;pre class=&quot;line-numbers&quot;&gt;&lt;span class=&#39;line-number&#39;&gt;1&lt;/span&gt;&lt;span class=&#39;line-number&#39;&gt;2&lt;/span&gt;&lt;/pre&gt;&lt;/td&gt;&lt;td class=&#39;code&#39;&gt;&lt;pre&gt;&lt;code class=&#39;html&#39;&gt;&lt;span class=&#39;line&#39;&gt;&lt;span class=&quot;nt&quot;&gt;&amp;lt;aaa&lt;/span&gt; &lt;span class=&quot;na&quot;&gt;ng-model=&lt;/span&gt;&lt;span class=&quot;s&quot;&gt;&amp;quot;foo&amp;quot;&lt;/span&gt;&lt;span class=&quot;nt&quot;&gt;&amp;gt;&amp;lt;/aaa&amp;gt;&lt;/span&gt;&lt;/span&gt;&lt;span class=&#39;line&#39;&gt;&lt;span class=&quot;nt&quot;&gt;&amp;lt;zzz&lt;/span&gt; &lt;span &amp;hellip;",
          "date": new Date(
            2014,
            8 - 1,
            15
            )
        }
        
        ,
        
        
        {
          "id": 12,
          "title": "waculではハッカソンを毎月行ってます",
          "href": "http://blog.wacul.co.jp/blog/2014/08/08/hackathon/",
          "teaser": "&lt;h2&gt;waculのハッカソン&lt;/h2&gt;&lt;p&gt;waculのプログラマチームでは月に1回、就業時間後にハッカソンを行っています（waculのハッカソンということで、社内ではワッカソンと呼んでいます）。&lt;br/&gt;社内のプログラマ4人と外部のプログラマが1人〜2人くらいで、行っています。&lt;/p&gt;&lt;h2&gt;どんなことをしているのか&lt;/h2&gt;&lt;p&gt;テーマは特に決めずに、それぞれが取り組んでいる趣味のプログラミングをするというスタイルです。&lt;br/&gt;そのため、macのアプリケーションの開発をしている人もいれば、angular-jsでサービスを作っている人もいたりと、多種多様です。&lt;br/&gt;また、本気で集中して開発するというよりも、最近の技術の話をしたり、実装上の悩みなど相談するなど、和気あいあいと開発をしています。&lt;/p&gt;&lt;h2&gt;プログラミング時間終了後&lt;/h2&gt;&lt;p&gt;プログラミングの時間が終了すると、その日の成果、あるいは前回のハッカソンから作ったものを紹介する時間となります。&lt;br/&gt;自分が作っているものをこういった場で紹介できるというのは、モチベーションアップにつながる良い機会です。&lt;/p&gt;&lt;h2&gt;2014年8月8日の内容&lt;/h2&gt;&lt;p&gt;さて、こういったハッカソンを今日行いましたので、その報告をしたいと思います。参加したのは我々waculのプログラマチーム4人と、外部のプログラマのIさんです。&lt;/p&gt;&lt;p&gt;&lt;img src=&quot;/images/2014-08-08-hackathon/photo.jpg&quot; alt=&quot;ピザを食べながらでした&quot; /&gt;&lt;/p&gt;&lt;p&gt;それぞれどのようなことを開発し、発表したか。&lt;/p&gt;&lt;ul&gt;&lt;li&gt;Iさん（外部のプログラマ）&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;インフラ自動構築の挑戦(Chef, berkshelf)&lt;/p&gt;&lt;ul&gt;&lt;li&gt;包&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;Raspberry pi で クラウドプリントサーバの作成&lt;/p&gt;&lt;ul&gt;&lt;li&gt;山田&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;github の issueクライアント OS X アプリ開発&lt;/p&gt;&lt;ul&gt;&lt;li&gt;加藤&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;自作ツールの&lt;a href=&quot;https://github.com/ukyo/jsziptools&quot;&gt;jsziptools&lt;/a&gt;のメンテナンス&lt;br/&gt;言語Rustを触ってみた&lt;/p&gt;&lt;ul&gt;&lt;li&gt;榎戸&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;unityで作ったゲームの紹介unityで物理エンジンのテストやフェードイン・アウトエフェクトについて実装&lt;/p&gt;&lt;p&gt;以上、waculでは毎月1回、ハッカソンを行っています。&lt;br/&gt;もし、ご興味がありましたら、ぜひ！&lt;/p&gt;",
          "date": new Date(
            2014,
            8 - 1,
            8
            )
        }
        
        ,
        
        
        {
          "id": 13,
          "title": "TrelloとGitHubで課題管理を行うたった一つの冴えたやり方",
          "href": "http://blog.wacul.co.jp/blog/2014/08/01/trello-and-zapier/",
          "teaser": "&lt;p&gt;こんにちわ、kyohです。&lt;/p&gt;&lt;p&gt;昨日会社のそばに引っ越して、今日から自転車通勤に切り替えましたが、さすがに暑いですね。気づけば８月ですものね、ジーンズが張り付いてエラいコトです。&lt;/p&gt;&lt;h2&gt;課題管理に限界を感じて&lt;/h2&gt;&lt;p&gt;さて、Waculではみんなだいすき GitHub で開発作業の管理をしています。しかし、GitHub の issues は、問題を簡潔に管理することに特化しており、進捗管理や状態管理には向いていません。こと問題を俯瞰する立場の人から「わかりづらい」と苦情が度々ありました。&lt;/p&gt;&lt;p&gt;&lt;a href=&quot;https://docs.google.com/&quot;&gt;Google Docs&lt;/a&gt; での管理も考えましたが、GitHub と Docsの二重管理になってしまうこと、Docs では自由度が高すぎてやりたいことがぼやけてしまうことなどもあって、限界を感じていました。そこで、流行りのかんばん方式でもやってみるか、と &lt;a href=&quot;https://trello.com/&quot;&gt;Trello&lt;/a&gt; に手を出すに至ります。&lt;/p&gt;&lt;p&gt;管理ツールの有名ドコロでは Redmine や JIRA もありましたが、如何せん導入・撤退のコストが大きく、少人数でさほど管理工数に余裕の無い状態では導入に踏み切れませんでした。&lt;/p&gt;&lt;h2&gt;Trello&lt;/h2&gt;&lt;p&gt;&lt;a href=&quot;https://trello.com/&quot;&gt;Trello&lt;/a&gt; &amp;hellip;",
          "date": new Date(
            2014,
            8 - 1,
            1
            )
        }
        
        ,
        
        
        {
          "id": 14,
          "title": "Amazon Web Service ELB 謎のヘルスチェックエラー",
          "href": "http://blog.wacul.co.jp/blog/2014/07/24/elb/",
          "teaser": "&lt;p&gt;こんにちわ。ワカルでは、サービスの運営などに&lt;a href=&quot;http://aws.amazon.com/jp/&quot;&gt;Amazon Web Service&lt;/a&gt;を利用しています。&lt;/p&gt;&lt;p&gt;先日、インスタンスは正常なのに、ELBのヘルスチェックがうまく動かなくなる現象に遭遇しました。&lt;br/&gt;結果的に、ELBを同じ構成で作りなおしたところ直ったのですが、根本的な原因がわからないままなので、ログとして残しておこうと思います。&lt;br/&gt;もし原因がわかったら追記します。&lt;/p&gt;&lt;h2&gt;起こったこと&lt;/h2&gt;&lt;p&gt;今回問題が起こった構成は、以下のようなものです。&lt;/p&gt;&lt;figure class=&#39;code&#39;&gt;&lt;div class=&quot;highlight&quot;&gt;&lt;table&gt;&lt;tr&gt;&lt;td class=&quot;gutter&quot;&gt;&lt;pre class=&quot;line-numbers&quot;&gt;&lt;span class=&#39;line-number&#39;&gt;1&lt;/span&gt;&lt;/pre&gt;&lt;/td&gt;&lt;td class=&#39;code&#39;&gt;&lt;pre&gt;&lt;code class=&#39;&#39;&gt;&lt;span class=&#39;line&#39;&gt;ELB -&amp;gt; Nginx -&amp;gt; Node.jsアプリ&lt;/span&gt;&lt;/code&gt;&lt;/pre&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&lt;/div&gt;&lt;/figure&gt;&lt;p&gt;WebからのリクエストをELBでEC2インスタンス上のNginxに渡し、Nginxのリバースプロキシで、静的ファイル以外を Node.jsのアプリに振り分けます。&lt;/p&gt;&lt;p&gt;この構成で構築後３日ほどすると、サーバーへのリクエストが504(Gateway Timeout) を返すようになりました。そしてしばらくすると、ヘルスチェックがOut of &amp;hellip;",
          "date": new Date(
            2014,
            7 - 1,
            24
            )
        }
        
        ,
        
        
        {
          "id": 15,
          "title": "Jadeのmixinでこころぴょんぴょん",
          "href": "http://blog.wacul.co.jp/blog/2014/07/18/jade-mixins/",
          "teaser": "&lt;p&gt;Jadeにはmixinという再利用可能なオレオレ要素を作る機能があります。mixinの機能についての解説はすでにやられてる方がいるので(&lt;a href=&quot;http://blog.kazupon.jp/post/38877362879/jade-mixin-tips&quot;&gt;かずぽんブログ • Jadeで便利なmixinの機能&lt;/a&gt;)ここではmixinがどのようにコンパイルされてるのかを解説しようかと思います。ちなみに&lt;a href=&quot;http://jade-lang.com/demo/&quot;&gt;jade-lang.com/demo/&lt;/a&gt;上でリアルタイムにコンパイル結果を確認することができます。&lt;/p&gt;&lt;hr /&gt;&lt;p&gt;さっそく本題に入ります。以下のJadeのコード例を見て下さい。なんだかごてごてしているように見えますが、ここでは基本的なmixinの機能を全て使っています(もし記法がわからなければ上記ブログを参照することをおすすめします)。&lt;/p&gt;&lt;figure class=&#39;code&#39;&gt;&lt;figcaption&gt;&lt;span&gt;&lt;/span&gt;&lt;/figcaption&gt;&lt;div class=&quot;highlight&quot;&gt;&lt;table&gt;&lt;tr&gt;&lt;td class=&quot;gutter&quot;&gt;&lt;pre class=&quot;line-numbers&quot;&gt;&lt;span class=&#39;line-number&#39;&gt;1&lt;/span&gt;&lt;span class=&#39;line-number&#39;&gt;2&lt;/span&gt;&lt;span class=&#39;line-number&#39;&gt;3&lt;/span&gt;&lt;span class=&#39;line-number&#39;&gt;4&lt;/span&gt;&lt;span class=&#39;line-number&#39;&gt;5&lt;/span&gt;&lt;span class=&#39;line-number&#39;&gt;6&lt;/span&gt;&lt;/pre&gt;&lt;/td&gt;&lt;td class=&#39;code&#39;&gt;&lt;pre&gt;&lt;code class=&#39;jade&#39;&gt;&lt;span class=&#39;line&#39;&gt;&lt;span class=&quot;nt&quot;&gt;mixin&lt;/span&gt; &amp;hellip;",
          "date": new Date(
            2014,
            7 - 1,
            18
            )
        }
        
        ,
        
        
        {
          "id": 16,
          "title": "SwiftでNSLayoutConstraintを綺麗に扱えるライブラリを作ってみる",
          "href": "http://blog.wacul.co.jp/blog/2014/07/14/swifty-layout/",
          "teaser": "&lt;p&gt;こんにちわ、kyohです。&lt;/p&gt;&lt;p&gt;さぁさぁSwiftアツいですね。プライベートでは連日Swiftと戯れながら、RubyMotionで仕事しています。&lt;/p&gt;&lt;p&gt;以前RubyMotion向けに、NSLayoutConstraintの使い方を簡単に書いてみました(&lt;a href=&quot;http://blog.wacul.co.jp/blog/2014/05/07/nslayoutconstraint/&quot;&gt;iOSアプリで Programmable な自動レイアウト(NSLayoutConstraint)&lt;/a&gt;)が、Swift版を作っている最中なので、ここに掲載してみます。&lt;/p&gt;&lt;h3&gt;NSView版（for Mac OSX）&lt;/h3&gt;&lt;p&gt;&lt;a href=&quot;https://github.com/kyoh/SwiftyLayoutNS&quot;&gt;https://github.com/kyoh/SwiftyLayoutNS&lt;/a&gt;&lt;/p&gt;&lt;h3&gt;UIView版（for iOS）&lt;/h3&gt;&lt;p&gt;&lt;a href=&quot;https://github.com/kyoh/SwiftyLayoutUI&quot;&gt;https://github.com/kyoh/SwiftyLayoutUI&lt;/a&gt;&lt;/p&gt;&lt;h3&gt;使い方（例）&lt;/h3&gt;&lt;figure class=&#39;code&#39;&gt;&lt;figcaption&gt;&lt;span&gt;&lt;/span&gt;&lt;/figcaption&gt;&lt;div class=&quot;highlight&quot;&gt;&lt;table&gt;&lt;tr&gt;&lt;td class=&quot;gutter&quot;&gt;&lt;pre class=&quot;line-numbers&quot;&gt;&lt;span class=&#39;line-number&#39;&gt;1&lt;/span&gt;&lt;span class=&#39;line-number&#39;&gt;2&lt;/span&gt;&lt;span class=&#39;line-number&#39;&gt;3&lt;/span&gt;&lt;span class=&#39;line-number&#39;&gt;4&lt;/span&gt;&lt;span class=&#39;line-number&#39;&gt;5&lt;/span&gt;&lt;span class=&#39;line-number&#39;&gt;6&lt;/span&gt;&lt;span class=&#39;line-number&#39;&gt;7&lt;/span&gt;&lt;span &amp;hellip;",
          "date": new Date(
            2014,
            7 - 1,
            14
            )
        }
        
        ,
        
        
        {
          "id": 17,
          "title": "日付の繰り返しルールに便利なRRULEを使う",
          "href": "http://blog.wacul.co.jp/blog/2014/07/07/rrule/",
          "teaser": "&lt;h2&gt;RRULEとは&lt;/h2&gt;&lt;p&gt;予定を記録するようなカレンダーアプリは、「毎週月曜日の10時から会議」のような繰り返しの予定を設定できる必要があります。例えば、Googleカレンダーでは以下の画像のように、繰り返しの間隔、曜日、開始日、終了日、など細かに設定できます。&lt;/p&gt;&lt;p&gt;&lt;img src=&quot;/images/2014-07-07-rrule/google-calendar.png&quot; alt=&quot;Googleカレンダーの繰り返しの予定の設定画面&quot; /&gt;&lt;/p&gt;&lt;p&gt;このような繰り返し設定をデータとして保存するのに有用な形式がRFC2445で定められている&lt;a href=&#39;http://www.ietf.org/rfc/rfc2445.txt&#39; target=&#39;_blank&#39;&gt;RRULE&lt;/a&gt;です。&lt;/p&gt;&lt;ul&gt;&lt;li&gt;RRULEの書式の例(毎週月曜日10時からの予定を 2014/6/25 から 2014/12/31 まで繰り返す)&lt;/li&gt;&lt;/ul&gt;&lt;figure class=&#39;code&#39;&gt;&lt;figcaption&gt;&lt;span&gt;&lt;/span&gt;&lt;/figcaption&gt;&lt;div class=&quot;highlight&quot;&gt;&lt;table&gt;&lt;tr&gt;&lt;td class=&quot;gutter&quot;&gt;&lt;pre class=&quot;line-numbers&quot;&gt;&lt;span class=&#39;line-number&#39;&gt;1&lt;/span&gt;&lt;/pre&gt;&lt;/td&gt;&lt;td class=&#39;code&#39;&gt;&lt;pre&gt;&lt;code class=&#39;js&#39;&gt;&lt;span class=&#39;line&#39;&gt;&lt;span class=&quot;s2&quot;&gt;&amp;quot;FREQ=WEEKLY;BYDAY=MO;DTSTART=20140625T010000Z;UNTIL=20141230T150000Z&amp;quot;&lt;/span&gt;&lt;/span&gt;&lt;/code&gt;&lt;/pre&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&lt;/div&gt;&lt;/figure&gt;&lt;h2&gt;JavaScriptでRRULEを扱う&lt;/h2&gt;&lt;p&gt;waculではnode.jsで自社サービスのサーバサイドを開発しているので、node.jsからRRULEを扱う例を紹介します。&lt;br/&gt;&lt;a href=&#39;https://github.com/jakubroztocil/rrule&#39; &amp;hellip;",
          "date": new Date(
            2014,
            7 - 1,
            7
            )
        }
        
        ,
        
        
        {
          "id": 18,
          "title": "ワカル社内で使っているツール・サービスのご紹介",
          "href": "http://blog.wacul.co.jp/blog/2014/06/26/wacul-tools/",
          "teaser": "&lt;p&gt;こんにちわ、包です。&lt;/p&gt;&lt;p&gt;今回はワカル社内で使っているサービスやツールたちをご紹介します。ソフトウェア系はMacOSXのアプリが中心です。&lt;/p&gt;&lt;h2&gt;1. コミュニケーション&lt;/h2&gt;&lt;h3&gt;&lt;a href=&quot;http://skype.com&quot;&gt;Skype&lt;/a&gt;&lt;/h3&gt;&lt;p&gt;ワカルでは創業当時はみなリモートで作業していたため、頻繁に音声やビデオ会議をする文化がありました。いまでも集中して実装したい時などには自宅作業をする人もいるので、そんなとき活躍しています。&lt;/p&gt;&lt;p&gt;ただ、どうしてもP2Pなので、送ったと思っていたメッセージが送られていなかったり、検索性が弱かったり、モバイルアプリでの通信に時間がかかったりといった不満がでてきています。他のチャットサービスへの乗り換えを検討していますが、音声通話がシームレスで手軽なので、まだ移行できないでいます。&lt;/p&gt;&lt;h3&gt;&lt;a href=&quot;http://drive.google.com&quot;&gt;Google Docs (Google Drive)&lt;/a&gt;&lt;/h3&gt;&lt;p&gt;共同編集が必要なドキュメント(スケジュール表や議事録など)はGoogle Docsで管理しています。&lt;/p&gt;&lt;p&gt;みんなでいじるときのリアルタイム編集合戦感が好きです。&lt;/p&gt;&lt;h3&gt;&lt;a href=&quot;http://skitch.com&quot;&gt;Skitch&lt;/a&gt;&lt;/h3&gt;&lt;p&gt;画面のキャプチャに説明を付けたい時にはこちら。キャプチャして説明を書いて、下のトグル部分をドラッグすると、ファイルと同じ扱いになるので、GitHub Issuesとかにドラッグ&amp;amp;ドロップするだけでアップロードできます。便利！&lt;/p&gt;&lt;p&gt;&lt;img src=&quot;/images/2014-06-26-wacul-tools/skitch-github.png&quot; alt=&quot;skitch-github&quot; /&gt;&lt;/p&gt;&lt;h3&gt;&lt;a href=&quot;http://www.teamviewer.com/ja/&quot;&gt;TeamViewer&lt;/a&gt;&lt;/h3&gt;&lt;p&gt;画面の共有と、リモート操作ができるソフトです。&lt;br/&gt;リモートでのペアプロもこのソフトとSkypeがあれば難なく行えます。&lt;/p&gt;&lt;h2&gt;2. 開発関連&lt;/h2&gt;&lt;h3&gt;&lt;a href=&quot;http://github.com&quot;&gt;GitHub&lt;/a&gt;&lt;/h3&gt;&lt;p&gt;みんなだいすきGitHubです。社内のリポジトリはすべてGitHubで管理しています。プログラマチームのチケット管理もGitHub Issuesを使っています。&lt;/p&gt;&lt;p&gt;他にも、Deploy Hooksをつかって、自動でテストサーバーを立ち上げる仕組みを運用しています。これについてはいつか別記事で。&lt;/p&gt;&lt;h3&gt;&lt;a href=&quot;http://moqups.com&quot;&gt;Moqups&lt;/a&gt;&lt;/h3&gt;&lt;p&gt;画面のワイヤーフレームを作るWebアプリです。ワイヤーフレーム系のツールはいろいろ使ったのですが、パーツが多すぎず、さくさく動いて共有も簡単なので、moqupsを最近では使っています。&lt;/p&gt;&lt;p&gt;&lt;img src=&quot;/images/2014-06-26-wacul-tools/moqups.png&quot; &amp;hellip;",
          "date": new Date(
            2014,
            6 - 1,
            26
            )
        }
        
        ,
        
        
        {
          "id": 19,
          "title": "AngularJSで楽々、フォームを作ってみよう",
          "href": "http://blog.wacul.co.jp/blog/2014/06/23/angular-form/",
          "teaser": "&lt;p&gt;AngularJSのformディレクティブは強力なバリデーション機能を提供します。以下は基本的な使用例です。&lt;/p&gt;&lt;figure class=&#39;code&#39;&gt;&lt;figcaption&gt;&lt;span&gt;&lt;/span&gt;&lt;/figcaption&gt;&lt;div class=&quot;highlight&quot;&gt;&lt;table&gt;&lt;tr&gt;&lt;td class=&quot;gutter&quot;&gt;&lt;pre class=&quot;line-numbers&quot;&gt;&lt;span class=&#39;line-number&#39;&gt;1&lt;/span&gt;&lt;span class=&#39;line-number&#39;&gt;2&lt;/span&gt;&lt;span class=&#39;line-number&#39;&gt;3&lt;/span&gt;&lt;span class=&#39;line-number&#39;&gt;4&lt;/span&gt;&lt;span class=&#39;line-number&#39;&gt;5&lt;/span&gt;&lt;/pre&gt;&lt;/td&gt;&lt;td class=&#39;code&#39;&gt;&lt;pre&gt;&lt;code class=&#39;html&#39;&gt;&lt;span class=&#39;line&#39;&gt;&lt;span class=&quot;nt&quot;&gt;&amp;lt;form&lt;/span&gt; &lt;span class=&quot;na&quot;&gt;name=&lt;/span&gt;&lt;span class=&quot;s&quot;&gt;&amp;quot;form&amp;quot;&lt;/span&gt;&lt;span class=&quot;nt&quot;&gt;&amp;gt;&lt;/span&gt;&lt;span class=&quot;c&quot;&gt;&amp;lt;!-- 1 &amp;hellip;",
          "date": new Date(
            2014,
            6 - 1,
            23
            )
        }
        
        ,
        
        
        {
          "id": 20,
          "title": "Node.js と MongoDB で n-gramを使って全文検索",
          "href": "http://blog.wacul.co.jp/blog/2014/06/11/mongo-ngram/",
          "teaser": "&lt;h2&gt;n-gram による検索&lt;/h2&gt;&lt;p&gt;現在、自社開発を行っているプロジェクトではサーバサイドはnode.jsで開発しています。&lt;br/&gt;そして、DBはMongoDBを採用し、node.jsからMongoDBへのアクセスは &lt;a href=&#39;http://mongoosejs.com/&#39; target=&#39;_blank&#39;&gt;mongoose&lt;/a&gt;を使用しています。&lt;/p&gt;&lt;p&gt;今回、DBに保存されている「お客の名前」を検索したいという要求が生じました。&lt;br/&gt;検索条件として、名前の途中でもヒットするようにする必要があります。&lt;br/&gt;例えば「あい」で検索した場合、以下のような名前がヒットします。&lt;/p&gt;&lt;ul&gt;&lt;li&gt;あいかわたろう&lt;/li&gt;&lt;li&gt;あいだはなこ&lt;/li&gt;&lt;li&gt;やまだあいこ&lt;/li&gt;&lt;li&gt;おちあいじろう&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;また、上記の例で「あいだ」で検索した場合は以下の名前がヒットします。&lt;/p&gt;&lt;ul&gt;&lt;li&gt;あいだはなこ&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;このような検索を実現するために、n-gramによる検索を実装しました。&lt;br/&gt;n-gramは文字列を nの長さで１文字ずつずらして切り出して保存します。&lt;/p&gt;&lt;ul&gt;&lt;li&gt;n = 2 のとき 「あいかわたろう」という文字列&lt;br/&gt;「あい」「いか」「かわ」「わた」「たろ」「ろう」&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;今回は、2文字以上の文字列で検索がヒットするようにしたいので、n = 2 の bi-gramを実装します。&lt;/p&gt;&lt;h2&gt;mongoose での model 定義&lt;/h2&gt;&lt;p&gt;bi-gramで分割した文字列を、array で保存します。mongooseの定義は以下のようになります。&lt;br/&gt;また、検索の高速化のため、indexを張っておきます。&lt;/p&gt;&lt;figure class=&#39;code&#39;&gt;&lt;figcaption&gt;&lt;span&gt;&lt;/span&gt;&lt;/figcaption&gt;&lt;div class=&quot;highlight&quot;&gt;&lt;table&gt;&lt;tr&gt;&lt;td &amp;hellip;",
          "date": new Date(
            2014,
            6 - 1,
            11
            )
        }
        
        ,
        
        
        {
          "id": 21,
          "title": "UITableViewの一番上に隙間が出来てしまう件",
          "href": "http://blog.wacul.co.jp/blog/2014/06/05/tableview-upper-space/",
          "teaser": "&lt;p&gt;こんにちは、wacul開発メンバーの kyoh です。WWDC2014で&lt;a href=&quot;https://developer.apple.com/swift/&quot; target=&quot;_blank&quot;&gt;Swift&lt;/a&gt;が発表された時、恋に落ちる音を聞いた気がします。&lt;/p&gt;&lt;p&gt;さて、今日は、最近iPadアプリの開発中に遭遇した不可解な事象と、その解決方法について書いてみようと思います。&lt;/p&gt;&lt;h2&gt;UITableView の狭き門、険しい道&lt;/h2&gt;&lt;p&gt;iOSアプリといえば凡そ避けることのできない「UITableView」ですが、一癖も二癖もあるそれに悩まされるのはiOS開発の登竜門となっているようです。今回私も、そんな登竜門の狭い門柱に引っかかって苦しめられました。&lt;/p&gt;&lt;h3&gt;謎の隙間が発生する&lt;/h3&gt;&lt;p&gt;UITableViewController ベースの画面を作り、UINavigationControll に push した時のことです。表示された画面には、ナビゲーションバーとセクションヘッダとの間に、意図しない隙間が表示されていました。&lt;/p&gt;&lt;p&gt;&lt;img src=&quot;/images/2014-06-05-tableview-upper-space/upper_space.png&quot; alt=&quot;UITableView と UINavigationBar との間に、33pxの隙間が生じている&quot; /&gt;&lt;/p&gt;&lt;h3&gt;正体不明！&lt;/h3&gt;&lt;p&gt;&lt;a href=&quot;http://revealapp.com/&quot; target=&quot;_blank&quot;&gt;REVEAL&lt;/a&gt;というツールなども駆使して、この隙間は一体なんぞやと探ってみました。が・・・&lt;/p&gt;&lt;ul&gt;&lt;li&gt;UINavigationBar にははみ出すようなビューは含まれていない。&lt;/li&gt;&lt;li&gt;UITableViewController の &amp;hellip;",
          "date": new Date(
            2014,
            6 - 1,
            5
            )
        }
        
        ,
        
        
        {
          "id": 22,
          "title": "RubyMotionを業務でのアプリ開発に使ってみた感想",
          "href": "http://blog.wacul.co.jp/blog/2014/05/30/ruby-motion/",
          "teaser": "&lt;p&gt;こんにちわ。いまワカルでは、美容院向けのiPadアプリ &amp;ldquo;clulu&amp;rdquo; を開発中です。&lt;br/&gt;テストも一旦終了し、最初のバージョンをApp Storeに申請したところです。&lt;/p&gt;&lt;p&gt;美容院では、お客様の予約管理を紙で行っているところがほとんどです。cluluは、そんな紙での管理方法から極力インターフェースを変えることなく、予約管理をiPadで行えるシステムです。また管理された情報を元に、リアルタイムに空き枠を検索・予約できるフォームを自分の美容院のホームページに設置できます。&lt;/p&gt;&lt;p&gt;&lt;img src=&quot;/images/2014-05-30-ruby-motion/clulu-ss.png&quot; alt=&quot;clulu-ss&quot; /&gt;&lt;/p&gt;&lt;p&gt;サービスの詳細については、リリース後詳しくお伝えするとして、今回はiPad版開発で使った、&lt;a href=&quot;http://www.rubymotion.com/&quot; target=&quot;_blank&quot;&gt;RubyMotion&lt;/a&gt; について書きたいと思います。&lt;/p&gt;&lt;h2&gt;なぜ RubyMotion を選んだか&lt;/h2&gt;&lt;p&gt;iOSアプリ開発環境にはおおまかに&lt;/p&gt;&lt;ul&gt;&lt;li&gt;ObjectiveC(Xcode)&lt;/li&gt;&lt;li&gt;RubyMotion&lt;/li&gt;&lt;li&gt;Titanium, PhoneGap等、HTML,JSベースのもの&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;があります。&lt;/p&gt;&lt;p&gt;まず、cluluは予約表の操作感を最適化したかったため、画面のアニメーション等パフォーマンス調整の難しいHTMLベースのものは、候補からはずしました。&lt;/p&gt;&lt;p&gt;僕自身は、2,3年前にiOSのアプリの開発経験があり、ひと通りObjectiveCとiOSのSDKについては理解している状態でした。&lt;/p&gt;&lt;p&gt;過去のiOS開発から、ObjectiveCコードを書くことへの気の重さのようなことを感じていました。Webの開発では、僕はEmacs,弊社の他のエンジニアもSublime Textなど、好みのエディタで開発している状態で、Xcodeの操作に慣れるというのもひとつの障壁です。&lt;/p&gt;&lt;p&gt;RubyMotionを選択するにあたって、情報不足や、予期せぬ不具合への対応などが不安でしたが、2013年末ごろにはかなりコミュニティも盛り上がってきていました。また、基本的にCocoaのAPIをそのまま使う形なので、RubyMotion特有の不具合は少なそうというのも後押しとなり、RubyMotionで実装することに決めました。&lt;/p&gt;&lt;p&gt;まとめると、RubyMotionを選んだ理由は次の３つです。&lt;/p&gt;&lt;ul&gt;&lt;li&gt;iOSのSDKをそのまま使える (パフォーマンスの劣化が最小限、情報源が豊富)&lt;/li&gt;&lt;li&gt;ObjectiveCを書かなくてよい、 慣れたエディタで開発できる&lt;/li&gt;&lt;li&gt;コミュニティの盛り上がり (困ったときに参照する情報が十分にある)&lt;/li&gt;&lt;/ul&gt;&lt;h2&gt;実際に使ってみてよかった点&lt;/h2&gt;&lt;h3&gt;RubyのAPIの使いやすさ&lt;/h3&gt;&lt;p&gt;RubyMotionは、Rubyの基本的な型のAPIがそのまま使えるようになっているため、Array#each,map などのコレクション系の操作がRubyライクに書けます。もちろんブロックも使えるので、データの加工のコードなどが短く書けます&lt;/p&gt;&lt;h3&gt;BubbleWrap, sugarcube便利&lt;/h3&gt;&lt;p&gt;2つとも、CocoaのAPIをラップして使いやすくしてくれるライブラリです。両者は似たような機能を提供している部分が多いですが、sugarcubeはBubbleWrapより、UIKitのクラス自身を拡張しにいっている感じになっています。&lt;/p&gt;&lt;p&gt;それぞれ、使いどころによって便利なほうを使って実装しました。自然にかけるので、どちらかというとsugarcubeのほうが利用頻度高めでした。&lt;/p&gt;&lt;p&gt;特に便利だったものたち&lt;/p&gt;&lt;figure class=&#39;code&#39;&gt;&lt;figcaption&gt;&lt;span&gt;&lt;/span&gt;&lt;/figcaption&gt;&lt;div &amp;hellip;",
          "date": new Date(
            2014,
            5 - 1,
            30
            )
        }
        
        ,
        
        
        {
          "id": 23,
          "title": "AngularJSでのCORSな通信をpostMessageに置き換える",
          "href": "http://blog.wacul.co.jp/blog/2014/05/21/angular-cors-postmessage/",
          "teaser": "&lt;p&gt;あなたは突然AngularJSでCORSでxhrな通信を行いたくなりました。通信時に独自のヘッダーを付けたいのでpostMessageを使う必要がありましたが、すでに&lt;code&gt;$http&lt;/code&gt;、&lt;code&gt;$resource&lt;/code&gt;サービスを使った結構な量のソースコードがあります。これを修正するのは骨が折れそうな作業です。&lt;/p&gt;&lt;p&gt;しかし、心配は無用です。このような場合&lt;code&gt;$provide.decorator&lt;/code&gt;が強力な武器となってくれます。&lt;code&gt;$provide.decorator&lt;/code&gt;を使うことで、すでに書いたソースコードに触れることなく対象のサービスの挙動を変更することができます。&lt;/p&gt;&lt;p&gt;本記事では、まず&lt;code&gt;$provide.decorator&lt;/code&gt;の概要と簡単なチュートリアルについて説明し、次に&lt;code&gt;$httpBackend&lt;/code&gt;を置き換えてpostMessageを使ったxhr通信を行う方法を紹介します。&lt;/p&gt;&lt;h2&gt;$provide.decoratorの概要&lt;/h2&gt;&lt;p&gt;&lt;a href=&quot;https://docs.angularjs.org/api/auto/object/$provide#decorator&quot; target=&quot;_blank&quot;&gt;&lt;code&gt;$provide.decorator&lt;/code&gt;&lt;/a&gt;はすでに定義されているサービスの生成をフックして新しいサービスに置き換えます。&lt;/p&gt;&lt;h2&gt;簡単なチュートリアル&lt;/h2&gt;&lt;p&gt;と言ってもこれだけではなんのことかわからないので、まずは簡単な例を見てみましょう。&lt;/p&gt;&lt;figure class=&#39;code&#39;&gt;&lt;figcaption&gt;&lt;span&gt;&lt;/span&gt;&lt;/figcaption&gt;&lt;div class=&quot;highlight&quot;&gt;&lt;table&gt;&lt;tr&gt;&lt;td class=&quot;gutter&quot;&gt;&lt;pre class=&quot;line-numbers&quot;&gt;&lt;span class=&#39;line-number&#39;&gt;1&lt;/span&gt;&lt;span class=&#39;line-number&#39;&gt;2&lt;/span&gt;&lt;span class=&#39;line-number&#39;&gt;3&lt;/span&gt;&lt;span class=&#39;line-number&#39;&gt;4&lt;/span&gt;&lt;span class=&#39;line-number&#39;&gt;5&lt;/span&gt;&lt;span class=&#39;line-number&#39;&gt;6&lt;/span&gt;&lt;span class=&#39;line-number&#39;&gt;7&lt;/span&gt;&lt;span class=&#39;line-number&#39;&gt;8&lt;/span&gt;&lt;span class=&#39;line-number&#39;&gt;9&lt;/span&gt;&lt;span class=&#39;line-number&#39;&gt;10&lt;/span&gt;&lt;span class=&#39;line-number&#39;&gt;11&lt;/span&gt;&lt;span class=&#39;line-number&#39;&gt;12&lt;/span&gt;&lt;span class=&#39;line-number&#39;&gt;13&lt;/span&gt;&lt;span &amp;hellip;",
          "date": new Date(
            2014,
            5 - 1,
            21
            )
        }
        
        ,
        
        
        {
          "id": 24,
          "title": "waculで使用しているnode.jsのライブラリ",
          "href": "http://blog.wacul.co.jp/blog/2014/05/14/nodejs-library/",
          "teaser": "&lt;h2&gt;node.jsでの開発&lt;/h2&gt;&lt;p&gt;現在、waculで自社開発を行っているプロジェクトにおいて、サーバ側はnode.jsで構築しています。webフレームワークはExpressを、DBはmongoDBを採用しています。&lt;/p&gt;&lt;p&gt;今回は、我々が開発で利用しているJavaScriptのライブラリを紹介したいと思います。&lt;/p&gt;&lt;h3&gt;&lt;a href=&#39;http://coffeescript.org/&#39; target=&#39;_blank&#39;&gt;CoffeeScript&lt;/a&gt;&lt;/h3&gt;&lt;p&gt;CoffeeScript自体を紹介するまでもありませんが、綺麗に簡潔に書けるのは良いことです。&lt;/p&gt;&lt;h3&gt;&lt;a href=&#39;https://github.com/remy/nodemon&#39; target=&#39;_blank&#39;&gt;nodemon&lt;/a&gt;&lt;/h3&gt;&lt;p&gt;ソースを変更したときに、node.jsのアプリケーションを起動しなおしてくれます。&lt;br/&gt;CoffeeScriptにも対応しています。&lt;/p&gt;&lt;h3&gt;&lt;a href=&#39;http://mongoosejs.com/&#39; target=&#39;_blank&#39;&gt;mongoose&lt;/a&gt;&lt;/h3&gt;&lt;p&gt;node.jsからmongoDBにアクセスするためのライブラリです。&lt;/p&gt;&lt;h3&gt;&lt;a href=&#39;https://www.npmjs.org/package/mpath&#39; target=&#39;_blank&#39;&gt;mpath&lt;/a&gt;&lt;/h3&gt;&lt;p&gt;mongoDBで使うパス指定でJavaSciptのオブジェクトにアクセスできます。&lt;/p&gt;&lt;h3&gt;&lt;a href=&#39;http://aws.amazon.com/jp/sdkfornodejs/&#39; target=&#39;_blank&#39;&gt;AWS SDK for JavaScript&lt;/a&gt;&lt;/h3&gt;&lt;p&gt;プロジェクトではAWSのSQSやS3などを使用していますが、それらに簡単にアクセスするため、amazon謹製のnode.js用のライブラリを使用しています。&lt;/p&gt;&lt;h3&gt;&lt;a href=&#39;https://github.com/lorenwest/node-config&#39; target=&#39;_blank&#39;&gt;node-config&lt;/a&gt;&lt;/h3&gt;&lt;p&gt;環境変数によって、ローカル、テストサーバ、本番など環境を分けるために使用しています。&lt;br/&gt;それぞれの環境ごとに設定値を変えられるので便利です。&lt;/p&gt;&lt;h3&gt;&lt;a href=&#39;https://github.com/goodeggs/fibrous&#39; target=&#39;_blank&#39;&gt;fibrous&lt;/a&gt;&lt;/h3&gt;&lt;p&gt;jsの非同期処理を同期的に書けるようになります。これでコールバックのネストが深くなるのを防ぎ、可読性が良くなります。&lt;/p&gt;&lt;h3&gt;&lt;a href=&#39;https://github.com/bruce/node-temp&#39; target=&#39;_blank&#39;&gt;node-temp&lt;/a&gt;&lt;/h3&gt;&lt;p&gt;テンポラリーなフォルダを作って、ファイルの読み書きができます。ダウンロードしたファイルを一時的に保存する用途に使用しています。&lt;/p&gt;&lt;h3&gt;&lt;a &amp;hellip;",
          "date": new Date(
            2014,
            5 - 1,
            14
            )
        }
        
        ,
        
        
        {
          "id": 25,
          "title": "iOSアプリで Programmable な自動レイアウト(NSLayoutConstraint)",
          "href": "http://blog.wacul.co.jp/blog/2014/05/07/nslayoutconstraint/",
          "teaser": "&lt;p&gt;はじめまして、プログラマチームの kyoh です。最近は津軽金山焼(&lt;a href=&quot;https://www.youtube.com/watch?v=lITs5D8XW5M#t=20&quot; target=&quot;_blank&quot;&gt;PV:YouTube&lt;/a&gt;)に惚れてます。&lt;/p&gt;&lt;h2&gt;背景&lt;/h2&gt;&lt;p&gt;ワカルでは現在、RubyMotionを使ってiPadアプリを開発中です。プロジェクトとして「InterfaceBuilderを使わない」という選択をした結果、より自由度の高い NSLayoutConstraint の魅力がわかってきました。これはもったいない、世の中的にももっと使ってもらえるように、とこの記事を書くに至った次第です。&lt;/p&gt;&lt;p&gt;Objective-C はちょっと・・・というスタンスなので、ソースコードは全てRubyで書いています。すみません。&lt;/p&gt;&lt;h2&gt;結論&lt;/h2&gt;&lt;p&gt;&lt;del&gt;InterfaceBuilderを使わない変態&lt;/del&gt;&lt;ins&gt;算数が好きな&lt;/ins&gt;プログラマーは NSLayoutConstraint.constraintWithItem&amp;hellip; をガシガシ使おう！CSS風に書ける快感を皆で味わおう！メソッド名が長い？記述が読みにくい？それなら&lt;a href=&quot;https://github.com/kyoh/LayoutExpress&quot; target=&quot;_blank&quot;&gt;LayoutExpress&lt;/a&gt;でどうだっ！（自薦）&lt;/p&gt;&lt;h2&gt;NSLayoutConstraint の機能&lt;/h2&gt;&lt;p&gt;NSLayoutConstraint という名前の通り、ビューの位置やサイズを他のビューの位置やサイズに従って制約（constrain）することで、自動レイアウトする機能を提供しています。例えば、親ビューの幅が変わったら子のビューの幅も従属する、というような場合も、いちいちユーザーのアクションに従ってframeを再設定する必要が&lt;strong&gt;ありません&lt;/strong&gt;。&lt;/p&gt;&lt;p&gt;NSLayoutConstraint には、2つのクラスメソッドが用意されています。&lt;/p&gt;&lt;ul&gt;&lt;li&gt;constraintsWithVisualFormat:options:metrics:views:&lt;a href=&quot;https://developer.apple.com/library/ios/documentation/UserExperience/Conceptual/AutolayoutPG/VisualFormatLanguage/VisualFormatLanguage.html#//apple_ref/doc/uid/TP40010853-CH3&quot; target=&quot;_blank&quot;&gt;Visual Format Language&lt;/a&gt; （以下、&lt;abbr&gt;VFL&lt;/abbr&gt;）を使って、可視的にレイアウトを記述できます。比較的簡単、かつ他所でも記事が充実&lt;small&gt;(&lt;a &amp;hellip;",
          "date": new Date(
            2014,
            5 - 1,
            7
            )
        }
        
        ,
        
        
        {
          "id": 26,
          "title": "Canvasのお絵かきに bacon.js を使ってみた",
          "href": "http://blog.wacul.co.jp/blog/2014/04/30/bacon-js/",
          "teaser": "&lt;h3&gt;イベント処理の憂鬱とbacon.js&lt;/h3&gt;&lt;p&gt;業務でちょっとしたお絵かきツールをjsで作る機会がありました。&lt;br/&gt;マウスのイベントを拾ってcanvasに描画する、それだけの処理なのですが、イベントのハンドリングとペンの状態などが絡むと、結構メンテがしづらいソースになってしまいます。&lt;/p&gt;&lt;p&gt;これを綺麗に書く方法はないか、調べている中で、&lt;a href=&quot;http://baconjs.github.io&quot; target=&quot;_blank&quot;&gt;bacon.js&lt;/a&gt; というライブラリを見つけました。試してみたところなかなか良さそうだったのでご紹介します。&lt;/p&gt;&lt;p&gt;bacon.js はFRP(Functional Reactive programmer) という概念をjsで実装したもので、僕なりの理解だと、&lt;/p&gt;&lt;ul&gt;&lt;li&gt;変化するイベントや値 (EventStream, Property) をオブジェクトとして扱うことができる&lt;/li&gt;&lt;li&gt;イベントや値の間に関係を持たせることができる 例: b = a + 1&lt;/li&gt;&lt;li&gt;元の値が変わると、関係する値も自動的に更新される 例: a が &amp;hellip;",
          "date": new Date(
            2014,
            4 - 1,
            30
            )
        }
        
        ,
        
        
        {
          "id": 27,
          "title": "WiMAX接続のMacのMAMP環境でメールが送信できない",
          "href": "http://blog.wacul.co.jp/blog/2014/03/10/mamp_wimax/",
          "teaser": "&lt;h3&gt;事件&lt;/h3&gt;&lt;p&gt;WiMAXで接続し、MacでMAMPを立ち上げ、PHPからmb_send_mailを実行したところ、宛先にメールが届かない。その後、別のインターネット環境に接続したところ、今まで送信しようとしたメールが一斉に届いた。&lt;/p&gt;&lt;h3&gt;原因&lt;/h3&gt;&lt;p&gt;多くのプロバイダはOutbound Port25 Blocking をしており、メール送信に25番ポートを利用することができない。利用していたUQ WiMAXもその制限があった。送ることができなかったメールはMacで標準に搭載されているpostfixのキューに溜まる。&lt;/p&gt;&lt;h3&gt;解決方法&lt;/h3&gt;&lt;p&gt;gmailのサーバへリレーして送信する。&lt;/p&gt;&lt;figure class=&#39;code&#39;&gt;&lt;div class=&quot;highlight&quot;&gt;&lt;table&gt;&lt;tr&gt;&lt;td class=&quot;gutter&quot;&gt;&lt;pre class=&quot;line-numbers&quot;&gt;&lt;span class=&#39;line-number&#39;&gt;1&lt;/span&gt;&lt;span class=&#39;line-number&#39;&gt;2&lt;/span&gt;&lt;span class=&#39;line-number&#39;&gt;3&lt;/span&gt;&lt;span class=&#39;line-number&#39;&gt;4&lt;/span&gt;&lt;span class=&#39;line-number&#39;&gt;5&lt;/span&gt;&lt;span class=&#39;line-number&#39;&gt;6&lt;/span&gt;&lt;span class=&#39;line-number&#39;&gt;7&lt;/span&gt;&lt;/pre&gt;&lt;/td&gt;&lt;td class=&#39;code&#39;&gt;&lt;pre&gt;&lt;code class=&#39;&#39;&gt;&lt;span class=&#39;line&#39;&gt;&amp;gt; sudo &amp;hellip;",
          "date": new Date(
            2014,
            3 - 1,
            10
            )
        }
        
        ,
        
        
        {
          "id": 28,
          "title": "ワカルプログラマチームのブログスタート",
          "href": "http://blog.wacul.co.jp/blog/2014/03/08/first-post/",
          "teaser": "&lt;p&gt;はじめまして、ワカルプログラマチームのtutumingといいます。&lt;br/&gt;パン作りが趣味です。&lt;/p&gt;&lt;p&gt;&lt;a href=&quot;http://wacul.co.jp&quot;&gt;株式会社ワカル&lt;/a&gt; は、WebサイトのUI改善提案から制作、アプリの開発などまで、幅広く手がけている会社です。&lt;/p&gt;&lt;p&gt;プログラマチームはまだ３人ですが、少しずつ情報を発信して、皆様(特に技術者の方々)にワカルについて少しでも興味をもっていただければと思い、ブログを始めることにしました。&lt;/p&gt;&lt;p&gt;まだまだ規模も小さく青いですが、それぞれに芯を持った個性的なメンバーが揃っているチームです。&lt;/p&gt;&lt;p&gt;日常の仕事の中でのTipsや、知見などを公開していく場にしたいと思っていますので、どうぞよろしくお願いします。&lt;/p&gt;",
          "date": new Date(
            2014,
            3 - 1,
            8
            )
        }
        
        
      ]
    };
    window.waculBlogCallback(obj);
})(this);
