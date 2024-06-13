---
slug: budget-loader
title: Automating expense tracking and Financial Planning
authors: [sergio]
tags: [budget, finance, automation]
---

I'm guessing that making a Budget and investing time in some Financial Planning is a cannonical event in every young adult's life, so it wasn't different for me. I've felt that I had no control over my finances, some months I had to widthrawl some cash from my savings account in order to cover my credit card check, after I became a full time employee, graduated from college and got a girlfriend I definatelly let my lifestyle cost inflate to a point that if I don't take over the control of my financial life, it can seriously hinder all the money I've been saving for my years as a frugal student.

// Image of broke guy or some financial meme

## Step 1: Visualization
Since I fortunetaly do not have any debt, the first step in the quest to organize my finances was to track and analyze my expenses. With my expenses data in hand, I can better understand where I'm at in a financial standpoint so I can then decide where I want to go or in better terms, how do I want to spend my resources.

### Tracking expenses
Okay, now how would I track my expenses? There are mainly two options when it comes to expense tracking:
- **Manual:** this is the simplest and probally the most common way of expense tracking, you register manually each expense in either in a Sheet, in a Budget app or in some physical Expense book.
- **Automation:** this is when you use a service or software to automatically register your expenses for you. That can be done in your Bank's mobile app, using your Bank's API, Financial Planning apps that syncs with your Bank account information and even by a script that processes a Bank Statement and save the data in some Sheet.

Given my background as a Software Engineer and my laziness to constantly keep registering new entries, I chose **Automation**! The only real downside was that manual entries were required for cash transactions, but since I barelly even carry cash with me these days was a very insignificant factor to consider.

#### Where should I store it?
Since I chose the Automation route, there's actually quite a few options of how I would store my data:
- **Finance Management App:** an mobile/web app that allows you to register all expense data, label them with categories and fit them into a budget limit. Some examples of these apps are: YNAB(Global), Mobills(Brazil) and Organizze(Brazil).
- **Spreadsheet Software:** any software that allowed me to interact with spreadsheets and store data in them, being that in the cloud or locally. Some examples are: Microsoft Excel, Google Sheets and Notion.
- **Build My Own Software:** in this path I would build my own backend to store and save the data in a database and also would create a frontend application(either web or mobile) so I could interact with and visualize my financial data.

// Add table compairing these 3 ways

At first I tried and experimented with *Mobills* that had automatic integration with some Banks, it was fine in general, but I faced two problems that let me search for other alternatives:
- I had a problem on the way they managed credit card expenses, only considering the expenses when the bill it's paid. It was confusing to manage payments done in the previous month, the categories chart ended up being confusing to me.
- They had some bank integrations discontinued, so if it would happen to the bank I use it would require manual input.