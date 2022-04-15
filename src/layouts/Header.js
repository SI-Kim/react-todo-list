export default function Header() {
  return (
    <div
      className="header"
      style={{ border: "solid 1px", backgroundColor: "lightgray" }}
    >
      <span className="logo">logo</span>
      &nbsp;&nbsp;&nbsp;this is header area.
      <nav className="nav">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </nav>
    </div>
  );
}
