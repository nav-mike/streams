defmodule StreamServer.Streams do
  @moduledoc """
  The Streams context.
  """

  import Ecto.Query, warn: false
  alias StreamServer.Repo

  alias StreamServer.Stream

  @doc """
  Returns the list of streams.

  ## Examples

      iex> list_streams()
      [%Stream{}, ...]

  """
  def list_streams do
    Repo.all(Stream)
  end

  @doc """
  Gets a single stream.

  Raises if the Stream does not exist.

  ## Examples

      iex> get_stream!(123)
      %Stream{}

  """
  def get_stream!(id), do: raise "TODO"

  @doc """
  Creates a stream.

  ## Examples

      iex> create_stream(%{field: value})
      {:ok, %Stream{}}

      iex> create_stream(%{field: bad_value})
      {:error, ...}

  """
  def create_stream(attrs \\ %{}) do
    raise "TODO"
  end

  @doc """
  Updates a stream.

  ## Examples

      iex> update_stream(stream, %{field: new_value})
      {:ok, %Stream{}}

      iex> update_stream(stream, %{field: bad_value})
      {:error, ...}

  """
  def update_stream(%Stream{} = stream, attrs) do
    raise "TODO"
  end

  @doc """
  Deletes a Stream.

  ## Examples

      iex> delete_stream(stream)
      {:ok, %Stream{}}

      iex> delete_stream(stream)
      {:error, ...}

  """
  def delete_stream(%Stream{} = stream) do
    raise "TODO"
  end

  @doc """
  Returns a data structure for tracking stream changes.

  ## Examples

      iex> change_stream(stream)
      %Todo{...}

  """
  def change_stream(%Stream{} = stream, _attrs \\ %{}) do
    raise "TODO"
  end
end
