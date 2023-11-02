# Brief

Create a NextJS 13 solu1on using (at minimum) the following packages versions or higher, which demonstrates
handling various API HTTP Status Code responses.
Node 18.16.1, React 18.2.2, Next 13.4.9, Tailwind 3.3.2
Create a standalone GitHub Repository within your own GitHub profile in which to create this solu1on.
There are no prizes for finishing first. Func1onality and implementa1on first, then handling appropriate user
feedback, then styling, that’s the order of importance I’ll be looking at.
You will have one week to complete this and you may spend a maximum of 2hrs during the workday on this, as
long as it doesn’t interfere with any current stories or tasks you are working on. You may work on this at home
in your spare 1me as well.

# Requirements and Guidelines

1. Create a landing page that has six child component cards.
2. The child component card needs to be laid out in a maximum of 2 rows of 3 on desktop and then wrap
   accordingly as the viewport gets smaller.
3. Use your own ini1a1ve regards to styling and layout of the page.
4. Main breakpoints are:
   #### > 1024 Desktop
   #### <= 1024 Tablet landscape
   #### >= 768 Tablet Portrait
   #### < 768 Mobile
5. Each child component card will handle one of the following six API response scenarios using the
   following site, h`ps://h`pstat.us/ , to mock the respec1ve responses.
   #### 200 OK
   #### 200 OK with 10sec delay
   #### 400 Bad Request
   #### 404 Not Found
   #### 500 Internal Server Error
   #### 504 Gateway Timeout
6. The full response must be returned to the calling component so it can inspect the response.status to
   decide the appropriate ac1on to take and response to show.
7. Each child component must be styled to look like a standalone card with
   ##### Short Title indica1ng which scenario the block represents.
   ##### A Call to Ac1on bu`on that fires off the relevant API event.
   ##### Use your own ini1a1ve regards to styling and layout of the card.
8. Each card must visually indicate to the user when the API call is running and show an appropriate
   response to the user based on the API response.
