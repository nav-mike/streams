defmodule StreamServer.StreamsFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `StreamServer.Streams` context.
  """

  @doc """
  Generate a stream.
  """
  def stream_fixture(attrs \\ %{}) do
    {:ok, stream} =
      attrs
      |> Enum.into(%{})
      |> StreamServer.Streams.create_stream()

    stream
  end
end
