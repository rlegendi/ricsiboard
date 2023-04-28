




				______ _          _ _                         _ 
				| ___ (_)        (_) |                       | |
				| |_/ /_  ___ ___ _| |__   ___   __ _ _ __ __| |
				|    /| |/ __/ __| | '_ \ / _ \ / _` | '__/ _` |
				| |\ \| | (__\__ \ | |_) | (_) | (_| | | | (_| |
				\_| \_|_|\___|___/_|_.__/ \___/ \__,_|_|  \__,_|
                                                
							   Richard O. Legendi
						 https://xcafebabe.blogspot.com

								 Apr. 20, 2023









Abstract
=====

ricsiboard.com -- A case study to extend your tech skills as a Java dev

💡 Today it's impossible to be a pure Java dev. There are some de facto std technologies that can pop up on any project. ML? Python. UI? JS. Cloud? Pretty much anything can come to the picture :-) Let me show you an example how I exploited my personal interest to learn a few additional techs on a pet project. WARNING: the presentation will be done in vi :-)














Disclaimer
=====



								__     __     __  
							   |  |   |  |   |  | 
							   |  |   |  |   |  | 
							   |  |   |  |   |  | 
							   |__|   |__|   |__| 
								__     __     __  
							   |__|   |__|   |__|

			 💀💀💀 Top 5 Stock Market Day Trading Meltdowns 💀💀💀
				 📈 https://www.youtube.com/watch?v=PYJm2Y1Dnb8 📈
					   https://youtu.be/0k8IFf2UVDw?t=237








Why do we speak about JS on a Java meetup?
=====

							 👹👹👹 Heresy! 👹👹👹

	Simple: UpSkilling

				.---------------------------------------------.
				| Today it's impossible to be a pure Java dev |
				'---------------------------------------------'

	We have some de facto stds:
		👉 Data, ML? Python
		👉 Full-stack? React/JS
		👉 Cloud? *











What we're going to talk about?
=====

	I have a couple of pet project, want to show 1 of them

	The idea: How to spark joy with doing something cool...
		...and exploit it to learn :-)

	🕺🕺🕺 Intrinsic motivation, enjoyable, linked to your passion and desires
	===> It can get you go great lengths to accomplish stg















Ctx of the project
=====

	💰 I have some personal investments - low %, with Wife's approval ofc :-)
		1 year ago fx prices skyrocketed

	👨💻 As a DM, info might be important for work
			Clear signs of companies buying othes

			Might impact mood of our stakeholders 

			Cf. Blizzard / Cerner / Credit Suisse













Motivation
=====

	There are plenty of tools already available, but...

	1) I had tech aspirations
		Wanted to catch up with Bootstrap
		Wanted to look into what's Open Graph protocol
		Understand this "cookie policy sht" a bit better
		Always saw that PayPal Donate button, looked nice
		Wanted to check current trends in SEO
				Last time I played with it we used <meta keywords=... />

	2) None was doing what I wanted...
	









My focus was
=====

	Price only
		Not the noise of tech indicators, I get headache
		https://www.marketvolume.com/charts/images/stockchartslegend.png
	
	Long-term trends
		Not interested in daily moves
	
	No install
	No @#$! popups
	Work on desktop/mobile
	Share easily for discussions 










Constraints I set up for myself
=====

	🎮 This is supposed to be a quick & fun project

	⛔ Server-side out of scope as effort >>> Cost/benefit ratio low


















Demo
=====

	https://ricsiboard.com




















Arch
=====
```
                  ┌───────────────────────────────────────────────────┐
                  │ AWS                                               │
                  │                ┌───────────┐  ┌──────────────┐    │
                  │                │ Route53   │  │ CloudFront   │    │
                  │                └───────────┘  └──────────────┘    │
                  │                                                   │
   ┌────────────┐ │             CodePipeline         ┌──────────┐     │
   │   Github   ├─┼──────────────────────────────────┤ 🪣 S3    │     │
   └────────────┘ │                                  └──────────┘     │
                  │                                                   │
                  │                                                   │
                  │                                                   │
                  └───────────────────────────────────────────────────┘
```


















Code tiem!
=====

	https://github.com/rlegendi/ricsiboard




















"Interesting" tech solutions
=====

	📊 No tracking cookies, how to monitor usage?
		CDN is great for that
		https://aws.amazon.com/blogs/aws/cloudfront-up-trends-metrics-stats/
	
	🍪 Cookie usage
		Online validators can audit your site effectively
	
	














Limitations / Gotchas
=====

	🚫 URL - works up to 2048 chars
	
	🚫 CDN invalidation is a must after deploy
	   Otherwise it's a day until you see updated content

















Cost
=====

	💳 $12  for domain reg
	💳 $0.5 for Route 53
	💳 $0.5 for S3
	💳 $1   for Code Pipeline

















Recommendation
=====

	Most pet projects fail because they are neverending stories 
		--> Have some very specific/exact exit criteria
	
	✅ Factor in your interest
	✅ Set learning goals
	✅ Avoid overly simple clones of generic apps (100th Calendar app)
	✅ Go breadth-first features, not depth-first
	✅ Make it progressive, define MVP
	✅ Do NOT overcommit

	Something new pops up? No worries!
		--> Just have a backlog for those
		--> Re-evaluate MVP - is it really that important to change plans?
	
	No time?
		--> Work in small bursts, fixed scope!
			E.g., "Today I'll integrate lint and fix the errors"











Links
=====

	Code
		https://github.com/rlegendi/ricsiboard

	Running app
		https://ricsiboard.com

	Updates
		https://twitter.com/ricsiboard

	---

	📀 Learning Week: Archiving my childhood gaming memories with AWS
		https://videoportal.epam.com/video/r7mj2kaN








If you are interested...
=====

	Project is open to contribute :-)

	🖥️ Review the code :D

	🖥️ Update project config for Webpack + TS 

	🖥️ Add linter

	🖥️ Add metadata for PWA

	🖥️ Increase test coverage

	🖥️ Make chart size configurable, e.g., by saving to localStorage

	🖥️ Add annotation, like trendline or so

	But anything is relevant that might be fun...





Thx!
=====

	❓❓❓ Any qs? ❓❓❓




















Tools I used
=====

	https://neovim.io/

	https://patorjk.com/software/taag/#p=display&f=Doom

	https://asciiflow.com/

	https://github.com/ikatyang/emoji-cheat-sheet

Feedback
=====

Create a backup slide about CDN, as not everyone was familiar with the concept
