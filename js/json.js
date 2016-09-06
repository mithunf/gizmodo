var articles = [
		{"images": "images/article-img1.jpg",
		 "heading": "Apple's App Store Is About to Get Soooooooo Much Better"},
		{"images": "images/zcatqaexihnlr9lcm3za.jpg",
		 "heading": "The First Reviews of Arrival Are In and They're Out of This World (Rimshot)"},
		{"images": "images/nqps1tiaqfb9zn3borjf.jpg",
		 "heading": "Apple's App Store Is About to Get Soooooooo Much Better"},
	];
$("#scrollerTemplate").tmpl(articles).appendTo(".image-scroller");


var mainArticles = [
		{
		"heading": "Intel Lawyers Tell John McAfee He Can't Call His Company John McAfee",
		"author": "Hudson Hongo",
		"time": "29 minutes ago",
		"commentImage": "images/2-512.png",
		"ratingImage": "images/download.png",
		"mainImage": "images/teguqjqe9gcylkja79ry.jpg",
		"para": "Sometimes, all a man has in this world is his name, but according to Intel,antivirus pioneer and living cautionary tale John McAfee "
		}
];
$("#contentArticleTemplate").tmpl(mainArticles).appendTo(".articles-container");

var moreStoriesArticles = [
		{"image": "images/q1gup0rbsxv4y6jgi8oa.jpg",
		 "heading": "Check out a Century of Stop-Motion Animation, From King Kong"},
		{"image": "images/xlu2m3hzhaeozibcw6oj.jpg",
		 "heading": "Oklahoma Shuts Down Wells In the Wake of the Quake"},
		{"image": "images/ytcj23qfaj6e8jrh4kio.jpg",
		 "heading": "Owner of Satellite On Doomed SpaceX Rocket Wants $50 Million"},
		{"image": "images/rlucpsncfpwbubqs6clf.jpg",
		 "heading": "Take a Day Off Between CrossFit Workouts, Study Says"},
];
$("#moreArticlesTemplate").tmpl(moreStoriesArticles).appendTo(".more-stories");