import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import "../styles/auth.scss";
import { useAuth } from "../hooks/useAuth";

export function NewRoom() {
  const { user } = useAuth();

  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Illustration" />
        <strong>Create Q&amp;A live rooms</strong>
        <p>Answer your audience questions in real-time</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask logo" />
          <h2>Create new Room</h2>
          <form>
            <input type="text" placeholder="Room name" />
            <Button type="submit">Create room</Button>
          </form>
          <p>
            Wanna join an existing room? <Link to="/">click here</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
