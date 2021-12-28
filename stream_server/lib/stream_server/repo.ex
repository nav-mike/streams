defmodule StreamServer.Repo do
  use Ecto.Repo,
    otp_app: :stream_server,
    adapter: Ecto.Adapters.Postgres
end
