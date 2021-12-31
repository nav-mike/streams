defmodule StreamServerWeb.StreamView do
  use StreamServerWeb, :view
  alias StreamServerWeb.StreamView

  def render("index.json", %{streams: streams}) do
    %{data: render_many(streams, StreamView, "stream.json")}
  end

  def render("show.json", %{stream: stream}) do
    %{data: render_one(stream, StreamView, "stream.json")}
  end

  def render("stream.json", %{stream: stream}) do
    %{
      id: stream.id,
      description: stream.description,
      name: stream.name,
      status: stream.status,
      coverImageUrl: stream.cover_image_url
    }
  end
end
