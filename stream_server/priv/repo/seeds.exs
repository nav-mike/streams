# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     StreamServer.Repo.insert!(%StreamServer.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

StreamServer.Repo.insert!(%StreamServer.Stream{
  description:
    "Analyze how city and campus-based technology leaders are responsibly improving the expirience of the people business they serve.",
  host_code: "123456",
  name: "Data Sets: the true smart cities superpower",
  speaker_code: "987654",
  status: 0,
  cover_image_url: "https://i.postimg.cc/3NWFHDgt/stream1.jpg"
})

StreamServer.Repo.insert!(%StreamServer.Stream{
  description:
    "How to set a business plans to use information to a competitive advantage and support enterprise goals. A smart city is a uban area that uses different types of electronics methods and sensors to collect data. Insigghts gained from that data are used to manage assets, resources and services efficiently.",
  host_code: "123456",
  name: "Implementing a Cybersecurity Framework",
  speaker_code: "987654",
  status: 1,
  cover_image_url:
    "https://i.postimg.cc/7ZnmXkzz/linkedin-sales-solutions-6ie6-Ojshv-Wg-unsplash.jpg"
})

StreamServer.Repo.insert!(%StreamServer.Stream{
  description:
    "Identify the opportunities for ROI from Data and Analytics. Return or investment (ROI) is a performance measure used to evaluate the efficiency or profitability of an investment or compare the efficiency of a number of different invrestments. ROI tries to directly measure the amount of return on a particular investment.",
  host_code: "123456",
  name: "Defininf ROI in the Modern Data World",
  speaker_code: "987654",
  status: 2,
  cover_image_url: "https://i.postimg.cc/5t9pRR5R/visuals-s-W-BS0-OVgv0-unsplash.jpg"
})
