The PHP files are all stored in the phpMyAdmin folder.

* conn.php is used to connect the server to the evat (event/attraction) database.
* json_mysql_event.php and json_mysql_event_categories.php are used to store json info into corresponding databases.
* event1.json is a json file I got from the visit Madison website, with 12 events info in it. This is used by the above 2 PHP files.
* sendQuizResult.php is used to store user quiz responses, a sample response json file is shown in result.json.



JSON relevant info
example taken from the element of event1.json but with some information removed for better readability
        "address1": "3241 Garver Green",
        "zip": "53704",
        "startDate": "2020-01-04T06:00:00.000Z",
        "media_raw": [
          {
            "mediaurl": "https://assets.simpleviewinc.com/simpleview/image/upload/crm/madison/fresh-microgreens-from-Garden-to-Be_16284BDE-264D-45DB-9E77CD88A39113AD_e6dcebae-4256-4540-b8bdf17ab3470adb.jpg",
            "sortorder": 0,
            "mediatype": "Image"
          },
          {
            "mediaurl": "https://assets.simpleviewinc.com/simpleview/image/upload/crm/madison/local-eggs_782F4A22-6794-4A74-9D1EAB6065E7D5BD_ec2d2c5e-59c2-486f-9336b82c643633a7.jpg",
            "sortorder": 0,
            "mediatype": "Image"
          }
        ],
        "recurrence": "Recurring weekly on Saturday",
        "city": "Madison",
        "typeName": "Special Event",
        "eventTypeId": 3,
        "recId": "48471",
        "listing_id": 178068,
        "recurType": 3,
        "endDate": "2020-04-05T04:59:59.000Z",
        "startTime": "08:00:00",
        "location": "Garver Feed Mill",
        "times": "From: 08:00 AM to 12:00 PM",
        "categories": [
          {
            "catName": "General & Community Events",
            "catId": "1"
          },
          {
            "catName": "Kids & Families",
            "catId": "3"
          },
          {
            "catName": "Food & Drink",
            "catId": "11"
          },
          {
            "catName": "Holiday/Seasonal",
            "catId": "25"
          },
          {
            "catName": "Free Event",
            "catId": "26"
          }
        ],
        "endTime": "12:00:00",
        "title": "Dane County Farmers' Market Late Winter Market",
        "rank": 1,
        "recid": "48471",
        "loc": {
          "type": "Point",
          "coordinates": [
            -89.33428379999998,
            43.0947589
          ]
        },
        "nextDate": "2020-03-29T04:59:59.000Z",
        "date": "2020-03-29T04:59:59.000Z",
        "id": "5e7dd9f15461f68003d8d059",
        "url": "/event/dane-county-farmers-market-late-winter-market/48471/", //add this to the end of "https://www.visitmadison.com" 
        "genericUrl": "/event/dane-county-farmers-market-late-winter-market/48471/",
        "teaser": "",
        "longitude": -89.33428379999998,
        "latitude": 43.0947589