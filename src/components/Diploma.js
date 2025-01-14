import { useParams } from "react-router-dom";
import { getDiploma } from "../api";

export default function Diploma() {
  const { diplomaId } = useParams();
  const diploma = getDiploma(diplomaId);

  return (
    <>
      <h2>{diploma.name} Sessions</h2>

      <ul className="session-list">
        {diploma?.sessions.map(session => (
          <li className="session" key={session.id}>
            <div style={{ border: "1px solid black", padding: "10px", display: "inline-block" }}>
              <p className="session-name">{session.name}</p>
            </div>  
          </li>
        ))}
      </ul>
    </>
  );
}
