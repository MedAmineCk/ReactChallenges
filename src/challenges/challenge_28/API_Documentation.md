The Bored API helps you find things to do when you're bored! There are fields like the number of participants, activity type, and more that help you narrow down your results.

Here are some things you can do with it: 

1. Get a random event

    Sample Query: https://apis.scrimba.com/bored/api/activity

    Response:
        {
        	"activity": "Learn Express.js",
        	"accessibility": 0.25,
        	"type": "education",
        	"participants": 1,
        	"price": 0.1,
        	"link": "https://expressjs.com/",
        	"key": "3943506"
        } 



2. Find an activity by its key

    Sample Query: https://apis.scrimba.com/bored/api/activity?key=5881028

    Response:
        {
        	"activity": "Learn a new programming language",
        	"accessibility": 0.25,
        	"type": "education",
        	"participants": 1,
        	"price": 0.1,
        	"key": "5881028"
        }




3. Find a random activity with a given type

    Sample Query: https://apis.scrimba.com/bored/api/activity?type=recreational

    Response:
        {
        	"activity": "Learn how to play a new sport",
        	"accessibility": 0.2,
        	"type": "recreational",
        	"participants": 1,
        	"price": 0.1,
        	"key": "5808228"
        }


4. Find a random activity with a given number of participants

    Sample Query: https://apis.scrimba.com/bored/api/activity?participants=1

    Response:
        {
        	"activity": "Learn how to fold a paper crane",
        	"accessibility": 0.05,
        	"type": "education",
        	"participants": 1,
        	"price": 0.1,
        	"key": "3136036"
        }



5. Find an activity with a specified price

    Sample Query: https://apis.scrimba.com/bored/api/activity?price=0.0

    Response:
        {
        	"activity": "Hold a yard sale",
        	"accessibility": 0.1,
        	"type": "social",
        	"participants": 1,
        	"price": 0.0,
        }
