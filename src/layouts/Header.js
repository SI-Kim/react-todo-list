import styled from "styled-components";

export default function Header() {

  const HeaderBox = styled.div`
    border: solid 1px;
    background-color: lightgrey;
  `
  return (
    <HeaderBox>
      <span className="logo">logo</span>
      &nbsp;&nbsp;&nbsp;this is header area.
      <nav className="nav">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </nav>
    </HeaderBox>
  );
}
