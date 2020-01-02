---
layout: post
title: My Strategy With Strategy Design Pattern
tags: tech programming sdlc business strategy design pattern
date: 2020-01-01
read_time: 5 min
header_image: /images/blog/strategy-design-pattern.jpeg
introduction: In the world of IT (Information Technology), clients do understand their goals and objectives of a particular project. The challenge lies in ensuring that project is done in a timely manner. Developers are other at the mercy of multiple business requirements. This is a short story about how the Strategy Design pattern helped in my survival of a category 5 hurricane (I mean project).
---

!["Design Pattern"](/images/blog/the-master-program.jpg "Strategy Design Pattern")
<small></small>

In the world of IT (Information Technology), clients do understand their goals and objectives of a particular project. The challenge lies in ensuring that project is done in a timely manner. Developers are other at the mercy of multiple business requirements. This is a short story about how the [Strategy Design pattern](https://sourcemaking.com/design_patterns/strategy){:target=_blank} helped in my survival of a category 5 hurricane (I mean project).

Ever major profession has a framework or sequence of steps they use to solve problems. For example in construction, Engineers design the building, complete the foundation, add walls and then the roof. Unlink construction, things can get a bit flaky in the world of IT. A client may ask you to change a section of the "house" without destroying the "roof" - and a client did ask.

**The Ideal Project**

As with all projects it started out sunnier than a Sunday. The client explained the project in simple terms, documentations and BRD were "well" defined. I'm all to familiar with this rosey setting. This project was no exception. It was broken down into three distinctive phases - (very fancy stuff).

1. Implement the basic functions.
2. Add more features post-release of #1.
3. Integrate with existing systems. 

Project X also had a set deadline for all three phases.

Simple right?

<br/>
<br/>
**The Real Project**

!["Original Destination"](/images/blog/original-destination.png "Original Goals")

In short, the client [scope creep/crawl/walk and run](https://www.wrike.com/project-management-guide/faq/what-is-scope-creep-in-project-management/){:target=_blank} - to say the lease. AKA nothing went as planned. The simple 6 months project took over a year and all three well-defined phases got collapsed into one. The goal posts kept moving at ever major client meeting at one point I wasn't sure what we were building. All documentations including the BRD was turned on its head. Our Jira board when from being a place of truth to a place of mess. 

Despite the dynamic nature of this project, we were able to keep up as the goals changed.

<br/>
<br/>
**The Strategy That Saved Us**

!["Original Destination"](/images/blog/multiple-destinations.png "Original Goals")


At the start of this project, we decided to use the [Strategy Design pattern](https://sourcemaking.com/design_patterns/strategy){:target=_blank}. I'm so grateful we did! In my opinion, it provides the most sophisticated form of encapsulation known to mankind. It achieves this by ensuring that each client may have different types of algorithm. It also captures the abstraction in an interface without worrying about the low-level details. It is like have one blueprint that can be used to build different types of house.

I won't amuze you with the technical details, but this essentially means we can design a framework that allows us to change any section of the "house" without destroying the "roof" or the "foundation". That is exactly what the client asked of us to do. This simple framework might have been the single feature that saved this project from hitting the shelf. Here is why:

1. Regression testing was kept at a minimal level. Each time the client required a feature change, regression testing is considered. In our case, the framework remains constant thus allowing for little regression testing as the complexity increases.

2. No major updates to unit testing. Due to encapsulation, new features didn't affect existing unit tests. We only focused on new unit tests in order to cover new features.

3. I was able to maintain my sanity. I'm an Agile developer, so I don't mind change. What concerns me is when the goal post continues to change. Spending an entire year and to not score any goal is very demotivating - even CR7 would be upset! The strategy pattern helped me to quickly implement their change and not worry about the impact on other features.

There are other intrinsic benefits that could be derived from this decision. Case in point, Project Managers KPIs are determined by project that are delivered in a timely manner and within budget. This implementation may have helped to keep those KPIs intact.

<br/>
<br/>
**Thanks To The Founding Fathers**

I want to close this post to show my appreciation for the work done various scientists/experts: Erich Gamma, Richard Helm, Ralph Johnson and John Vlissides. They are considered the founding fathers of design patterns. If it wasn't for these inventors my job would be much more difficult. 

The primary objective of this post is to share how the work done by these great men improved my professional career. Thanks again.


