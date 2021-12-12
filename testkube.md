# Role of testkube in Productivity Tracker

The Backend API is the core of Productivity Tracker, to make sure it's robust I used Testkube.

## Setting up

First I opened my postman and created a collection with following requests:
- `GET` http://localhost:4000/month?date='Sun Dec 12 2021 17:13:24 GMT+0530 (India Standard Time)'&googleId='109142406117593303309'
<img src="https://github.com/ArthThapa/productivity-tracker/blob/main/readme/getMonth.png"/>

- `POST` http://localhost:4000/month
<img src="https://github.com/ArthThapa/productivity-tracker/blob/main/readme/postMonth.png" />

Then I exported my postman collection
<br>
<img src="https://github.com/ArthThapa/productivity-tracker/blob/main/readme/json.png" />

Then I created my testkube script using file and type flags to provide postman collection

```kubectl testkube scripts create --file /home/arth/desktop/productivity-tracker.postman_collection.json --type "postman/collection" --name productivity-tracker-api-test```

I then ran my testkube script using 
`kubectl testkube scripts run productivity-tracker-api-test` 
inside my local miniube kuberenetes cluster

Then I simply passed my test's execution id to get the result
`kubectl testkube scripts execution 61b5d71ad5a1bcd5bd656cfc`

<img src=""https://github.com/ArthThapa/productivity-tracker/blob/main/readme/test.png" />

Got a perfect score let's go!




