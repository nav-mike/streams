defmodule StreamServer.Stream do
  use Ecto.Schema
  import Ecto.Changeset

  @primary_key {:id, :binary_id, autogenerate: true}

  schema "streams" do
    field :description, :string
    field :host_code, :string
    field :name, :string
    field :speaker_code, :string
    field :status, :integer

    timestamps()
  end

  @doc false
  def changeset(stream, attrs) do
    stream
    |> cast(attrs, [:name, :status, :description, :host_code, :speaker_code])
    |> validate_required([:name, :status, :description, :host_code, :speaker_code])
  end
end
