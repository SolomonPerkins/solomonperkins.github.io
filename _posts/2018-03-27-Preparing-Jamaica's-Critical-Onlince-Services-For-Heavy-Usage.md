---
layout: post
title: Performance Testing - Scaling our Online Services
tags: performance-testing, technology, quality, qc, sdlc, jamaica, government, scaling
date: 2018-03-27
read_time: 6 min
header_image: /images/blog/performance-testing.jpg
introduction: Performance testing may not be the first quality assurance step companies think about when they are creating a product/service for online users. However time and time again it has proven to be the prerequisite when measuring quality. This is an article outlining the possible reason(s) why 1Spotmedia.com streaming service crashed during the heights of the #Champs2018 and how this could happen to our essential online services. 
---


!["The Blog"](/images/blog/performance_testing.jpg "Top Jamaican Sprinter Champs2018")
<small>*Reference: [TVJ's Twitter Page][head_image]{:target="_blank"}*</small>

\#Champs2018 has proven to be another record-breaking year. However, there were a are few discrunteled viewers who weren't able to live stream the entire event due to technical issue(s) being experienced by the online platform called [1SpotMedia](https://www.1spotmedia.com/#!/){:target=_blank"}. [TVJ made a tweet, which indicated that they were having some technical difficulty transmitting the event](https://twitter.com/garveygirl/status/977767402803990528){:target=_blank}. Such a major issue at the final & most popular day of the event added flame to a few customers. They shared their dissatisfaction with a reoccurence of the problem, case in point [this tweet by a complainant: "Seems to happen at the worst time during major events. #FixIt"](https://twitter.com/garveygirl/status/977767402803990528).

As an IT professional, I wish to take this opportunity and highlight a possible issue they may have experienced and then proceed to highlight the possible impact of such if it was to happen on a national level.

**Possible Scalability Issues**
<br/>
<br/>
Based on the information gathered there is a possibility that 1SpotMedia platform has a scalability issue. This essentially means that the system is unable to grow and meet the increasing demand of active users while maintaining the quality being provided to existing users. This would explain why users were experiencing ["Setup timeout errors" and takes more than 30 seconds complete](https://twitter.com/alanzo_redz/status/976837821808947201). This is an issue we often attribute when there the application cannot serve up request fast enough due to overbearing demand for its resources. Even though their notice was generic (technical difficulties) which doesn't allude to any specific issue, I still maintain my viewpoint. Here is my logic in support of that assumption:

1. The two stations (CVM & TVJ) have performed fairly well over the years in streaming local events to television box.
2. They have the gears necessary to produce high-quality recordings, just check the picture quality when compared to the past.
3. From an ISP (Internet Service Providers) standpoint, both major telecoms. are blasting out high-speed internet. For such a major event like Champs I'm of the view that TVJ would have a dedicated high-speed internet access.
4. They are relatively new to the online stream service.
5. Majority of their live streams outputs to cable channels or their local channels but they may lack experience in the online streaming industry.
6. This is a reoccurring issue and it manifests itself during a major event.
7. Rebel Salute has a larger audience when compared to Champs and they live to stream their event without such a major hiccup.

Now that just leaves one common factor in a sea of variables; sticking out like a sore thumb.


**It is not a P1.. Think Again!**
<br/>
<br/>
In Jamaica, scalability issues are often categorized as non-critical or an issue to be solved in the distant future. The company's focus will be on the more pressing tasks (bugs, security, maintenance and new features) while little effort goes into preparing the application for heavy usage.

From a technical and business perspective, the inability of a platform to scale is a major issue. The performance of the product during these critical juncture drives the acquisition and retention level of the business. Which interns impact the bottom line and then you know what. If you read those complaints from paying customers then I'm sure we are in agreement. In addition to that customers are accustom to fast and responsive applications such as Youtube, Facebook, Twitter & [DuckDuckGo, the privacy-focused search engine](https://duckduckgo.com/) for "free". Now compare those to a product they had to pay for. Even though this is a 1Spotmedia issue, it had me thinking on a larger scale. 


**What If...**
<br/>
<br/>
This was to happen to an online government service. When customers are trying to access a critical service and the platform struggles to scale and eventually crash. What if over a million users trying to pay their tax online on the final day (as always) or inquire about their NHT funds online and the platform crumbles under the pressure. These scenarios should be considered in light of the government's push with more online services.


_What if... the platform fail to scale?_


**Measuring Your Application's Potential**
<br/>
<br/>
I'm not a pessimist. However in IT, our primary focus is all about the prevention of issues while providing quality service. We achieve this by:

1. Thinking in the worst-case.
2. Using data to plan ahead.
3. Setting proper mitigation strategies based on the service.


So while a business focuses on understanding their customer/user base. Fundamental understanding of the system's capacity is often a grey area. The process of obtaining visibility on this level of your application is called [**Performance Testing**](http://www.softwaretestinghelp.com/what-is-performance-testing-load-testing-stress-testing/). In simple terms, it is like practising the 100m hurdles before the live event. It outputs valuable information capable of answering the following questions:

1. What is the maximum number of users your current application can accommodate?
2. How will your application react once this value has been reached?
3. At what point will your application reduce in service quality?
4. At what level should you begin to scale your application?

I believe if 1Spotmedia did their "checkup" via internal testing on their application, they could have prevented a reoccurence - to say the least. 

On a larger scale, I do hope that the government have this as a checkpoint in their quality assurance checklist. They'll be able to understand the risks around the "What ifs" and when or how to scale the platform.

Lastly, I've experienced both sides of the coin. The side where performance testing was not done and the ramification of not doing such. I've also experienced the satisfaction in doing performance testing and watching the platform scale accordingly. Please take it from me, your customers will reward you for it. And remember prevention is always better than cure.

_Disclaimer: This entire article is based on the premise that 1Spotmedia did little or no performance testing on their application. My intention is that this will bring awareness to our government in light of their continued efforts to have more critical service online._

Few links you may find useful:

1. Scaling - [http://spacebug.com/scale-out-versus-scale-up-html/](http://spacebug.com/scale-out-versus-scale-up-html/)
2. Scaling - [https://www.infoworld.com/article/2900225/mobile-development/how-to-scale-your-killer-mobile-app.html](https://www.infoworld.com/article/2900225/mobile-development/how-to-scale-your-killer-mobile-app.html)
3. Why Performance Testing is Necessary - [https://abstracta.us/blog/performance-testing/why-performance-testing-is-necessary/](https://abstracta.us/blog/performance-testing/why-performance-testing-is-necessary/) 


[head_image]: https://twitter.com/televisionjam/status/977655604612423680
