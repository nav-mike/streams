defmodule StreamServer.Repo.Migrations.CreateStreams do
  use Ecto.Migration

  def change do
    create table(:streams, primary_key: false) do
      add :id, :uuid, primary_key: true, null: false
      add :name, :string
      add :status, :integer
      add :description, :text
      add :host_code, :string
      add :speaker_code, :string

      timestamps()
    end
  end
end
