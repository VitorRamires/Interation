import alertIcon from "../assets/icons/alert.svg"

export function ErrorPage() {
  return (
    <div className="error">
      <img src={alertIcon} />
      <p>An error Occurr! Try later</p>
    </div>
  );
}
