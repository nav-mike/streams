defmodule StreamServerWeb.RoomChannel do
  use StreamServerWeb, :channel

  @authors %{
    "Dan Abramov" => "https://bit.ly/dan-abramov",
    "Kola Tioluwani" => "https://bit.ly/tioluwani-kolawole",
    "Kent Dodds" => "https://bit.ly/kent-c-dodds",
    "Ryan Florence" => "https://bit.ly/ryan-florence",
    "Prosper Otemuyiwa" => "https://bit.ly/prosper-baba",
    "Christian Nwamba" => "https://bit.ly/code-beast",
    "Segun Adebayo" => "https://bit.ly/sage-adebayo"
  }

  @impl true
  def join("room:lobby", payload, socket) do
    if authorized?(payload) do
      {:ok, socket}
    else
      {:error, %{reason: "unauthorized"}}
    end
  end

  # Channels can be used in a request/response fashion
  # by sending replies to requests from the client
  @impl true
  def handle_in("ping", payload, socket) do
    {:reply, {:ok, payload}, socket}
  end

  def handle_in("new_msg", %{"body" => body}, socket) do
    mbd = message_body(body["message"])
    broadcast(socket, "new_msg", %{"body" => mbd})
    {:reply, {:ok, %{"body" => mbd}}, socket}
  end

  # It is also common to receive messages from the client and
  # broadcast to everyone in the current topic (room:lobby).
  @impl true
  def handle_in("shout", payload, socket) do
    broadcast(socket, "shout", payload)
    {:noreply, socket}
  end

  # Add authorization logic here as required.
  defp authorized?(_payload) do
    true
  end

  def message_body(message) do
    author = @authors |> Map.keys() |> Enum.random()
    avatar = Map.get(@authors, author)
    dt = case DateTime.now("Etc/UTC") do
      {:ok, date_time} -> DateTime.to_iso8601(date_time)
      {:error, _} -> "2022-01-11T11:57:09.965513Z"
    end
    %{
      :author => author,
      :authorAvatar => avatar,
      :message => message,
      :createdAt => dt
    }
  end
end
