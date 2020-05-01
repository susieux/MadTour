The PHP files are all stored in the phpMyAdmin folder.

* conn.php is used to connect the server to the evat (event/attraction) database.
* json_mysql_event.php, json_mysql_attraction.php and json_mysql_event_categories.php are used to store json info into corresponding databases.
* event1.json and attraction1.json are sample json files which store data retrieved from the visit Madison website using web scrapper. They are used by the above 2 PHP files.
* sendAttraction.php and sendEvent.php can interpret user's quiz result and return the corresponding events and attractions as json files to the frontend.
* sendQuizResult.php is used to store user quiz responses, a sample response json file is shown in result.json.
* visitMadison.py is the web scrapper we used to retrieve data from the visit Madison website. Simply run the script, it will get all events and attractions information until one year from now, and store the json files in two folders: event and attraction.


JSON relevant info
example taken from the element of event1.json but with some information removed for better readability
        {
            "_id": "5e94cf7b001ce5a7db8df246",
            "startDate": "2020-04-14T05:00:00.000Z",
            "media_raw": [
                {
                    "mediaurl": "https://assets.simpleviewinc.com/simpleview/image/upload/crm/madison/badgertalks-20_8bb51b5b-5056-a36a-0888745e087a1c66.jpg",
                    "sortorder": 0,
                    "mediatype": "Image"
                }
            ],
            "typeName": "Special Event",
            "eventTypeId": 3,
            "recId": "49309",
            "recurType": 0,
            "endDate": "2020-04-15T04:59:59.000Z",
            "startTime": "12:00:00",
            "location": "Wherever you self-quarantine",
            "times": "From: 12:00 PM to 12:45 PM",
            "categories": [
                {
                    "catName": "Education & Lectures",
                    "catId": "8"
                },
                {
                    "catName": "Food & Drink",
                    "catId": "11"
                },
                {
                    "catName": "Free Event",
                    "catId": "26"
                },
                {
                    "catName": "Virtual Event",
                    "catId": "29"
                }
            ],
            "endTime": "12:45:00",
            "title": "Badger Talks LIVE: Nutrition to Support Maximum Wellness During Challenging Times",
            "udfs_object": {
                "1256": {
                    "name": "Expected Attendance",
                    "value": 20,
                    "digits": 0,
                    "fieldid": 1256,
                    "typeid": 4,
                    "type": "Number",
                    "value_raw": 20,
                    "value_string": "20"
                },
                "1257": {
                    "listid": 11691,
                    "name": "Calendar Assignment",
                    "value": "Main Only",
                    "digits": 0,
                    "fieldid": 1257,
                    "typeid": 7,
                    "type": "Dropdown",
                    "value_raw": {
                        "listid": 11691,
                        "value": "Main Only"
                    },
                    "value_string": "Main Only"
                },
                "1267": {
                    "listid": 13190,
                    "name": "Event Location",
                    "value": "Virtual Event",
                    "digits": 0,
                    "fieldid": 1267,
                    "typeid": 7,
                    "type": "Dropdown",
                    "value_raw": {
                        "listid": 13190,
                        "value": "Virtual Event"
                    },
                    "value_string": "Virtual Event"
                },
                "1283": {
                    "name": "User Group Calendar Assignment",
                    "valuearray": [
                        {
                            "listid": 11722,
                            "value": "Public (default)"
                        }
                    ],
                    "digits": 0,
                    "fieldid": 1283,
                    "typeid": 12,
                    "type": "Multi-Select",
                    "value_raw": [
                        {
                            "listid": 11722,
                            "value": "Public (default)"
                        }
                    ],
                    "value_string": "Public (default)"
                }
            },
            "sites": [
                "primary",
                "primary20"
            ],
            "rank": 1,
            "recid": "49309",
            "nextDate": "2020-04-15T04:59:59.000Z",
            "date": "2020-04-15T04:59:59.000Z",
            "id": "5e94cf7b001ce5a7db8df246",
            "slug": "badger-talks-live%3a-nutrition-to-support-maximum-wellness-during-challenging-times",
            "url": "/event/badger-talks-live%3a-nutrition-to-support-maximum-wellness-during-challenging-times/49309/",
            "genericUrl": "/event/badger-talks-live%3a-nutrition-to-support-maximum-wellness-during-challenging-times/49309/",
            "absoluteUrl": "https://www.visitmadison.com/event/badger-talks-live%3a-nutrition-to-support-maximum-wellness-during-challenging-times/49309/",
            "teaser": ""
        }
