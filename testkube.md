# Role of testkube in Productivity Tracker

The Backend API is the core of Productivity Tracker, to make sure it's robust I used Testkube.

## Setting up

First I opened my postman and created a collection with following requests:
- `GET` http://localhost:4000/month?date='Sun Dec 12 2021 17:13:24 GMT+0530 (India Standard Time)'&googleId='109142406117593303309'
<img src="https://github.com/ArthThapa/productivity-tracker/blob/main/readme/getMonth.png"/>

- `POST` http://localhost:4000/month
<img src="https://github.com/ArthThapa/productivity-tracker/blob/main/readme/postMonth.png" />

- `POST` http://localhost:4000/target
<img src="https://github.com/ArthThapa/productivity-tracker/blob/main/readme/postTarget.png" />

Then I exported my postman collection
