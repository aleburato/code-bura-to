---
title: "Bad software design: vouchers from Sparta"
cover:
  image: "img/cover.jpg"
  caption: "photo by Chuttersnap on Unsplash"
summary: "As I try to delve deeper and deeper into good software design, some really bad examples start to stick out like a sore thumb. Examples that are not my own, I mean."
date: 2021-03-29T10:37:17+02:00
draft: false
---

As I try to delve deeper and deeper into good software design, some really bad examples start to stick out like a sore thumb. Examples that are not my own, I mean.

Today I'll tell you a story about _luncheon vouchers_.

## The past

When dinosaurs (or better, _Cadillacs_) ruled the Earth, it was strictly a printed affair: you had your stack of vouchers, your employee handled you a new batch every month, and that was pretty much it. Easy, simple, tangible.

{{<figure caption="A really vintage voucher, from when Cadillacs ruled the Earth" src="img/vintage_voucher.jpg">}}

Then of course we realized it was an inane amount of wasted paper and ink and started using electronic vouchers. My company moved to full e-vouchers during covid, and That's A Good Thing, folks.

## The Present

However. In 2021, a major player in the voucher market presents you with this abomination, probably designed by a sadistic SQL afcionado who tried to follow a Software Architecture online course once, but watched it backwards.

{{<figure caption="Guess whose voucher company is this?" src="img/voucher_management_nonsense.png">}}

You see, you have _"the Cloud"_, _"the App"_ (which you must "activate"), _"the Card"_ and _"the Pending"_ (which is apparently a bleached out "Card" with a hourglass on top). The rules, once you figure them out, are the following:

- _"The Cloud"_ stores vouchers which then can be used to pay in supported, selected e-shops. So far, so good.
- _"The App"_ is this dashboard as a mobile app. It can also tap into your "cloud vouchers" and generate a barcode you can use to pay in supporting restaurants/supermarkets. It's actually quite a good app, well designed and easy to use.
- _"The Card"_ is a physical plastic card you use in stores instead of the old paper vouchers. If you never activate "The Cloud" (why wouldn't you?), this is the only way you can use vouchers.
- _"The Pending"_ is a limbo where your vouchers are collected BEFORE you use the card or the cloud at least one time, then it becomes irrelevant, forever. Yet it stays in the UI at all the times.
- Once you activate "The Cloud", the monthly voucher refills from your boss go there, by default. If you want to use them online, you're good to go. If you want to use them in physical stores, you have to move them to the card. Through the above dashboard. Or through the App. Provided you activated it, of course.
- You can move vouchers back and forth from Cloud to Card.

Now. With all the possible good will, I simply cannot understand why this is necessary. This is madness. Cloud? Card? App? Pending? And I have to move vouchers between them?

_You are exposing me to the (questionable) implementation details of your software and, worst of all, burden me with "transfer" tasks that a hundred lines of well written code can (and must) handle automatically._

## DB-centric, are we?

This was a single online payment of 8 vouchers _(yay! "The Cloud"!)_ which for some reason shows up as 8 single payments, like when you had to snap each of them from the paper booklet and give each one to the cashier, after signing it.

{{<figure caption="Humans do not think in SQL" src="img/voucher_management_nonsense_2.png">}}

I really cannot understand why the payment system (or whatever you guys have in your backend handling transactions) decided to model things this way, but... Can you please shed the final user from these technical minutiae, instead of just dumping the transaction table onto the screen inside a HTML table? _Aggregate them for me, will you?_

## The future?

Let's try to rethink the UI and the information presented to the end user by solving their main problems: _"How many vouchers I have left?"_, _"Where did i spend my vouchers recenty?"_ and finally: _"What was the last refill from my employer?"_.

To answer these simple questions, this is all the complexity we need (not an actual UI):

{{<figure caption="My laundry list of expectations" src="img/voucher_management_condensed.png">}}

I really couldn't care less about clouds, cards, "pending" statuses, first use, last use; my boss gives me vouchers, you give me a way to use them online and in stores, stop. _I don't even want the plastic card, thanks, my wallet is full of them_ -- the phone app is perfect, _stop using the damn cards_, once and for all.

## One last thing

I chose the English version of the website to take screenshots for this article, but as you can see all the data in the table is in Italian. Which gives me the shivers because... _You aren't storing localized data (dates and amounts included) in your DB tables, are you?_

That wouldn't even be madness, anymore. That would be

{{<youtube rvYZRskNV3w>}}
