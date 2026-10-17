(1.) Specification - Student Finance Tracker

(2.) Theme
- A small app for students to track their finances

(3.) Data model
id: Unique text, for eg txn_001
description:text
amount:number
category: Food, Books or Transport, Entertainment, Fees or Other
date: YYYY-MM-DD
createdAt: the time it was first saved
updatedAt: the time it was last edited

Example record:
{
    "id": "txn_001",
    "description": "Moto fare to campus",
    "amount":2000,
    "category": "Transport",
    "date": "2026-10-17",
    "createdAt": "2026-10-17T17:55:00Z",
    "updatedAt": "2026-10-17T17:55:00Z"
}

(4.) Layout
Phone (360px): For phone, the transactions will be shown as cards.
Tablet (768px): For tablet, the nav links will be in a row and the transactions will be shown as a table.
Desktop (1024px):For desktop, there is more space, so the form and the stats will be side by side and the transactions stay as table

(5.) Accessibility
Landmarks: the page uses header,nav,main and footer.
Skip link: The first link on the page jumps straight to the main content.
Labels: every input has a label linked to it with for and id.
Focus: when using the keyboard, there is always a visible outline around the focused item.
Live messages: normal messages are announced politely not annoying the users, going over the cap is announced right away