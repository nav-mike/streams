defmodule StreamServer.Repo.Migrations.AddCoverImageToStream do
  use Ecto.Migration

  def change do
    alter table("streams") do
      add :cover_image_url, :string
    end
  end
end
