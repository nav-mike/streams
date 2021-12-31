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
  description: "Analyze how city and campus-based technology leaders are responsibly improving the expirience of the people business they serve.",
  host_code: "123456",
  name: "Data Sets: the true smart cities superpower",
  speaker_code: "987654",
  status: 0,
  cover_image_url: "https://i.postimg.cc/3NWFHDgt/stream1.jpg"
})

