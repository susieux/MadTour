## This is a web scrapper that gets events and attraction information as json files from visitmadison.com
## After running this script, manually upload the two generated folders 'events' and 'attractions' to cPanel

import json
import requests
import time
import os
from datetime import date

events_prefix = 'https://www.visitmadison.com/includes/rest_v2/plugins_events_events_by_date/find/?'
events_json_part1 = 'json=%7B%22filter%22%3A%7B%22eventTypeId%22%3A%7B%22%24in%22%3A%5B3%2C4%2C5%5D%7D%2C%22udfs_object.1283.valuearray%22%3A%7B%22%24elemMatch%22%3A%7B%22value%22%3A%22Public+%28default%29%22%7D%7D%2C%22dates.eventDate%22%3A%7B%22%24gte%22%3A%7B%22%24date%22%3A%22'
events_start_date = str(date.today())
events_json_part2 = 'T05%3A00%3A00.000Z%22%7D%2C%22%24lte%22%3A%7B%22%24date%22%3A%22'
events_end_date = str(date.today().replace(year=date.today().year+1))
events_json_part3 = 'T05%3A59%3A59.000Z%22%7D%7D%7D%2C%22options%22%3A%7B%22skip%22%3A'
events_json_part4 = '%2C%22limit%22%3A50%2C%22hooks%22%3A%5B%22afterFind_listing%22%5D%2C%22sort%22%3A%7B%22rank%22%3A1%2C%22date%22%3A1%2C%22title%22%3A1%7D%2C%22fields%22%3A%7B%22categories%22%3A1%2C%22endDate%22%3A1%2C%22latitude%22%3A1%2C%22listing_id%22%3A1%2C%22listing.recid%22%3A1%2C%22listing.title%22%3A1%2C%22listing.detailURL%22%3A1%2C%22location%22%3A1%2C%22longitude%22%3A1%2C%22media_raw%22%3A1%2C%22nextDate%22%3A1%2C%22startTime%22%3A1%2C%22endTime%22%3A1%2C%22times%22%3A1%2C%22absolute_urls%22%3A1%2C%22rank%22%3A1%2C%22recId%22%3A1%2C%22recurType%22%3A1%2C%22recurrence%22%3A1%2C%22startDate%22%3A1%2C%22title%22%3A1%2C%22typeName%22%3A1%2C%22eventTypeId%22%3A1%2C%22loc%22%3A1%2C%22url%22%3A1%2C%22date%22%3A1%2C%22address1%22%3A1%2C%22address2%22%3A1%2C%22city%22%3A1%2C%22state%22%3A1%2C%22zip%22%3A1%2C%22udfs_object%22%3A1%7D%2C%22count%22%3Atrue%7D%7D'
events_token = '&token=c373fd8ef28ca78f24cf0858630483d9'
attrs_prefix = 'https://www.visitmadison.com/includes/rest/plugins_listings_listings/find/?'
attrs_json_part1 = 'filter%5Bfilter_tags%5D%5B%24all%5D%5B0%5D=site_primary_catid_153&options%5Blimit%5D=50&options%5Bskip%5D='
attrs_json_part2 = '&options%5BloadMore%5D=false&options%5Bfields%5D%5Baddress1%5D=1&options%5Bfields%5D%5Baltphone%5D=1&options%5Bfields%5D%5Bcategories%5D=1&options%5Bfields%5D%5Bcity%5D=1&options%5Bfields%5D%5Bcrmtracking%5D=1&options%5Bfields%5D%5BdetailURL%5D=1&options%5Bfields%5D%5Bdtn%5D=1&options%5Bfields%5D%5BisDTN%5D=1&options%5Bfields%5D%5Bloc%5D=1&options%5Bfields%5D%5Blatitude%5D=1&options%5Bfields%5D%5Blongitude%5D=1&options%5Bfields%5D%5Blistingudfs%5D=1&options%5Bfields%5D%5Bmedia%5D=1&options%5Bfields%5D%5Bphone%5D=1&options%5Bfields%5D%5Bprimary_image%5D=1&options%5Bfields%5D%5Bprimary_image_url%5D=1&options%5Bfields%5D%5BdefaultImage%5D=1&options%5Bfields%5D%5Brankid%5D=1&options%5Bfields%5D%5Brankorder%5D=1&options%5Bfields%5D%5Brecid%5D=1&options%5Bfields%5D%5Bregionid%5D=1&options%5Bfields%5D%5Bstate%5D=1&options%5Bfields%5D%5Btitle%5D=1&options%5Bfields%5D%5Bzip%5D=1&options%5Bsort%5D%5Bsortcompany%5D=1'
attrs_token = '&token=5f659dd881f39cd526ae9c4d94e38954'

# create a subdirectory if not exist
def create_dir (subdir_name):
    script_dir = os.path.dirname(os.path.abspath(__file__))
    dest_dir = os.path.join(script_dir, subdir_name)
    try:
        os.makedirs(dest_dir)
    except OSError:
      pass # already exists
    return subdir_name

events_subdir_name = create_dir('events')
attrs_subdir_name = create_dir('attractions')

# Load events data to json files
# Although maximum events per json file could be up to 80, but set it 60 in case things go wrong
for skip in range(0, 50 * round(2253/50), 50):
    events_url = events_prefix + events_json_part1 + events_start_date + events_json_part2 + events_end_date + events_json_part3 + str(skip) + events_json_part4 + events_token
    events_response = requests.get(events_url).json()
    events_data = events_response['docs']
    with open(events_subdir_name + '/' + str(int(skip/50 + 1)) + '.json', 'w') as events_outfile:
      json.dump(events_data, events_outfile, indent=4)
    print(events_data)
    time.sleep(1)  # Sleep for 2 sec

# Load attractions data to json files
for skip in range(0, 50 * round(162/50), 50):
    attrs_url = attrs_prefix + attrs_json_part1 + str(skip) + attrs_json_part2 + attrs_token
    attrs_response = requests.get(attrs_url).json()
    attrs_data = attrs_response['docs']
    with open(attrs_subdir_name + '/' + str(int(skip/50 + 1)) + '.json', 'w') as attrs_outfile:
      json.dump(attrs_data, attrs_outfile, indent=4)
    print(attrs_data)
    time.sleep(1)  # Sleep for 2 sec